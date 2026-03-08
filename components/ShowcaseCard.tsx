"use client";

import type { SHOWCASES } from '@/data/portfolio';

type Showcase = typeof SHOWCASES[0];

export default function ShowcaseCard({ showcase, onClick }: { showcase: Showcase; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 cursor-pointer group"
    >
      <div className="aspect-video w-full rounded-md overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-canvas-subtle)] transition-all duration-300 group-hover:border-[var(--color-accent-fg)] group-hover:shadow-[0_0_20px_rgba(88,166,255,0.15)]">
        <img
          src={showcase.previewImage}
          alt={showcase.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div>
        <h4 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--color-accent-fg)] transition-colors">
          {showcase.title}
        </h4>
        <p className="text-sm text-[var(--foreground)] opacity-70 mb-2">
          {showcase.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {showcase.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] text-[var(--foreground)] opacity-80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
