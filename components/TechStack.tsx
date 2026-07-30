export const SKILLS = [
  "SQL", "Python", "Excel", "Tableau", "Power BI", "PostgreSQL", "Next.js"
];
  
  export default function TechStack() {
    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Technologies & Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] text-[var(--foreground)] hover:border-[var(--color-accent-fg)] hover:text-[var(--color-accent-fg)] transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
