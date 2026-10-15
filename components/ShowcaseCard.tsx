import { ArrowUpRight } from "lucide-react";
import type { ShowcaseItem } from "@/data/portfolio";

export default function ShowcaseCard({ showcase, onClick, index }: { showcase: ShowcaseItem; onClick: () => void; index: number }) {
  const category = showcase.category || (showcase.tags.includes("PHP") ? "WEB APPLICATION" : "DATA & BUSINESS INTELLIGENCE");
  return (
    <article className="showcase" data-reveal>
      <button className="showcase-trigger" onClick={onClick} aria-label={"View project: " + showcase.title}>
        <div className="showcase-meta mono"><span>{String(index + 1).padStart(2, "0")} / {category}</span><ArrowUpRight size={18} /></div>
        <div className="showcase-image">
          <picture><source srcSet={showcase.previewImage.replace(/\.(png|jpg)$/, ".webp")} type="image/webp" /><img src={showcase.previewImage} alt={showcase.title + " preview"} width={1280} height={720} loading="lazy" /></picture>
          <span className="image-action">View project <ArrowUpRight size={16} /></span>
        </div>
        <h3>{showcase.title}</h3>
        <p>{showcase.description.startsWith("Default description") ? "An interactive Tableau dashboard exploring generational demographics across West Nusa Tenggara." : showcase.description}</p>
        <div className="tags">{showcase.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </button>
    </article>
  );
}
