"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add("revealed");
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.08 });
    const register = () => document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-observed])").forEach(element => {
      element.dataset.observed = "true";
      // Content stays visible without JavaScript; only offscreen elements wait for reveal.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        observer.observe(element);
      } else {
        element.classList.add("revealed");
      }
    });
    register();
    const changes = new MutationObserver(register);
    changes.observe(document.getElementById("main")!, { childList: true, subtree: true });
    return () => { observer.disconnect(); changes.disconnect(); };
  }, []);
  return null;
}
