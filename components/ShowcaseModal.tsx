"use client";

import { useEffect, useCallback } from 'react';
import { X, ExternalLink, Download, Eye, Github } from 'lucide-react';
import type { SHOWCASES } from '@/data/portfolio';

type Showcase = typeof SHOWCASES[0];

export default function ShowcaseModal({ showcase, onClose }: { showcase: Showcase; onClose: () => void }) {

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    // Inject Tableau viz script
    const timer = setTimeout(() => {
      const container = document.getElementById('tableau-embed-container');
      if (container) {
        container.innerHTML = showcase.tableauEmbed;
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        container.appendChild(scriptElement);

        // Responsive sizing
        const divElement = container.querySelector('.tableauPlaceholder');
        if (divElement) {
          const vizElement = divElement.getElementsByTagName('object')[0];
          if (vizElement) {
            if (window.innerWidth > 800) {
              vizElement.style.width = '100%';
              vizElement.style.height = '827px';
            } else {
              vizElement.style.width = '100%';
              vizElement.style.height = '1627px';
            }
          }
        }
      }
    }, 100);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
      clearTimeout(timer);
    };
  }, [handleEscape, showcase.tableauEmbed]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-4xl mx-4 my-8 bg-[var(--background)] rounded-lg border border-[var(--color-border-default)] shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[var(--color-accent-fg)] rounded-t-lg">
          <h2 className="text-lg font-bold text-white truncate pr-4">{showcase.title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors text-white shrink-0"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">
          {/* Project Description */}
          <section className="bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-lg p-6">
            <h3 className="text-base font-bold text-[var(--foreground)] mb-3">Project Description</h3>
            <p className="text-sm text-[var(--foreground)] opacity-80 mb-4 leading-relaxed">
              {showcase.projectDescription}
            </p>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">Key Features:</h4>
            <ul className="space-y-1.5">
              {showcase.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--foreground)] opacity-80">
                  <span className="text-[var(--color-accent-fg)] mt-0.5">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Tools & Technologies */}
          <section className="bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-lg p-6">
            <h3 className="text-base font-bold text-[var(--foreground)] mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {showcase.techStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--color-border-default)] text-sm font-medium text-[var(--foreground)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Project Report - PDF */}
          <section className="bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-lg p-6">
            <h3 className="text-base font-bold text-[var(--foreground)] mb-4">Project Report</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={showcase.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[var(--color-accent-fg)] text-white font-medium hover:opacity-90 transition-opacity text-sm"
              >
                <Eye size={16} />
                View PDF
              </a>
              <a
                href={showcase.pdfUrl}
                download
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[var(--color-border-default)] text-[var(--foreground)] font-medium hover:bg-[var(--background)] transition-colors text-sm"
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="flex justify-center">
            <a
              href={showcase.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-btn-primary-bg)] text-white font-medium hover:bg-[var(--color-btn-primary-hover-bg)] transition-colors text-sm"
            >
              <Github size={16} />
              View on GitHub
              <ExternalLink size={14} />
            </a>
          </section>

          {/* Tableau Embed */}
          <section className="bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-lg p-6">
            <h3 className="text-base font-bold text-[var(--foreground)] mb-4">Interactive Dashboard</h3>
            <div
              id="tableau-embed-container"
              className="w-full rounded-lg overflow-hidden border border-[var(--color-border-default)] bg-white min-h-[400px]"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
