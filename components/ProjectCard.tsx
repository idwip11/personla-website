import Link from 'next/link';
import { Folder, Star, Eye } from 'lucide-react';
import type { PROJECTS } from '@/data/portfolio';

// Define a type for the project, inferred from the data structure or explicitly defined
type Project = typeof PROJECTS[0];

export default function ProjectCard({ project }: { project: Project }) {
  const isTemplate = project.category === 'template';

  return (
    <div className="flex flex-col border border-[var(--color-border-default)] rounded-md bg-[var(--background)] p-4 hover:border-[var(--color-border-muted)] transition-colors h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-start gap-2 text-[var(--color-accent-fg)]">
          <Folder size={16} className="mt-1 shrink-0" />
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline break-words">
            {project.title}
          </Link>
        </div>
        <span className="text-xs border border-[var(--color-border-default)] rounded-full px-2 py-0.5 text-[var(--foreground)] opacity-70">
          {isTemplate ? "Template" : "Public"}
        </span>
      </div>

      <p className="text-sm text-[var(--foreground)] opacity-80 mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex items-center justify-between mt-auto text-xs text-[var(--foreground)] opacity-60">
        <div className="flex items-center gap-3">
          {project.tags && project.tags.length > 0 && (
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              {project.tags[0]}
            </div>
          )}
        </div>
        
        {isTemplate && project.price && (
             <span className="text-[var(--color-success-fg)] font-medium bg-[var(--color-canvas-subtle)] px-2 py-0.5 rounded-md border border-[var(--color-border-default)]">
               {project.price}
             </span>
        )}
      </div>
    </div>
  );
}
