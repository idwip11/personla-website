"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#free-tools", label: "Free Tools" },
  { href: "#certificates", label: "Certificates" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a className="wordmark" href="#" onClick={() => setOpen(false)} aria-label="Imam Dwi Purwanto, home">
          imam<span className="accent">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
        <button className="icon-button mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav shell" aria-label="Mobile navigation" onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} /></a>)}
          <a href="#contact" onClick={() => setOpen(false)}>Contact<ArrowUpRight size={18} /></a>
        </nav>
      )}
    </header>
  );
}
