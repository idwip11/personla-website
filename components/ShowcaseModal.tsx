"use client";

import { useEffect, useCallback } from 'react';
import { X, ExternalLink, Download, Eye, Github } from 'lucide-react';
import type { SHOWCASES, ShowcaseItem } from '@/data/portfolio';

export default function ShowcaseModal({ showcase, onClose }: { showcase: ShowcaseItem; onClose: () => void }) {

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    // Inject Tableau viz script if tableauEmbed exists
    if (showcase.tableauEmbed) {
      const timer = setTimeout(() => {
        const container = document.getElementById('tableau-embed-container');
      if (container) {
        container.innerHTML = showcase.tableauEmbed || '';
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
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
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
          
          {/* Preview Image */}
          <div className="w-full rounded-lg overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-canvas-subtle)]">
            <img 
              src={showcase.previewImage} 
              alt={showcase.title}
              className="w-full h-auto object-cover max-h-[400px]"
            />
          </div>

          {/* Project Description */}
          {showcase.projectDescription && (
            <section className="bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-lg p-6">
              <h3 className="text-base font-bold text-[var(--foreground)] mb-3">Project Description</h3>
              <div className="text-sm text-[var(--foreground)] opacity-80 mb-4 leading-relaxed space-y-3">
                {showcase.projectDescription.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              {showcase.keyFeatures.length > 0 && (
                <>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">Key Insights & Recommendations:</h4>
                  <ul className="space-y-1.5">
                    {showcase.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--foreground)] opacity-80">
                        <span className="text-[var(--color-accent-fg)] mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          )}

          {/* Tools & Technologies */}
          {showcase.techStack.length > 0 && (
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
          )}

          {/* Project Report - PDF (Conditional) */}
          {showcase.pdfUrl && (
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
          )}

          {/* GitHub Link (Conditional) */}
          {showcase.githubUrl && (
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
          )}

          {/* Tableau Embed (Conditional) */}
          {showcase.tableauEmbed && (
            <section className="bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-lg p-6">
              <h3 className="text-base font-bold text-[var(--foreground)] mb-4">Interactive Dashboard</h3>
              <div
                id="tableau-embed-container"
                className="w-full rounded-lg overflow-hidden border border-[var(--color-border-default)] bg-white min-h-[400px]"
              />
            </section>
          )}

          {/* Looker Studio Embed (Conditional) */}
          {showcase.lookerStudioEmbed && (
             <section className="bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-lg p-6">
               <h3 className="text-base font-bold text-[var(--foreground)] mb-4">Interactive Dashboard</h3>
               <div 
                 className="w-full rounded-lg overflow-hidden border border-[var(--color-border-default)] bg-white min-h-[600px] flex justify-center"
                 dangerouslySetInnerHTML={{ __html: showcase.lookerStudioEmbed }}
               />
             </section>
          )}
        </div>
      </div>
    </div>
  );
}
