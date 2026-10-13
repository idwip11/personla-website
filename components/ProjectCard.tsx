import { ArrowUpRight, Github } from "lucide-react";
import type { PROJECTS } from "@/data/portfolio";

type Project = typeof PROJECTS[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="repository-card" data-reveal>
      <div className="repository-heading"><Github size={18} /><span className="mono muted">{project.category === "data" ? "DATA PROJECT" : "WEB APPLICATION"}</span></div>
      <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title.replace(/[-_]/g, " ")}<ArrowUpRight size={18} /></a></h3>
      <p>{project.description}</p>
      <div className="repository-footer"><span>{project.tags[0]}</span>{project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div>
    </article>
  );
}
