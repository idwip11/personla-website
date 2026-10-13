import Image from "next/image";
import { ArrowUpRight, Check, Gift } from "lucide-react";
import { FREE_TOOLS } from "@/data/portfolio";

export default function FreeTools() {
  return (
    <section id="free-tools" className="section free-tools-section" aria-labelledby="free-tools-heading">
      <div className="shell">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow mono">04 / FREE TOOLS</span>
            <h2 id="free-tools-heading">Small tools. Everyday value<span className="accent">.</span></h2>
          </div>
          <span className="free-tools-note"><Gift size={17} />Made to be used. Free to explore.</span>
        </div>
        <div className="free-tools-grid">
          {FREE_TOOLS.map(tool => (
            <article key={tool.name} className={"free-tool free-tool-" + tool.theme} data-reveal>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="free-tool-link" aria-label={"Open " + tool.name + " app"}>
                <div className="free-tool-top">
                  <span className="free-tool-icon"><tool.icon size={22} strokeWidth={1.6} /></span>
                  <span className="free-tool-category mono">{tool.category}</span>
                  <span className="free-badge"><span />Free</span>
                </div>
                <h3>{tool.name}</h3>
                <p className="free-tool-headline">{tool.headline}</p>
                <div className="free-tool-preview">
                  <Image unoptimized src={tool.previewImage} alt={tool.name + " application preview"} width={1000} height={625} sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                  <span className="free-preview-arrow"><ArrowUpRight size={21} /></span>
                </div>
                <p className="free-tool-description">{tool.description}</p>
                <ul className="free-tool-features">
                  {tool.features.map(feature => <li key={feature}><Check size={12} />{feature}</li>)}
                </ul>
                <div className="free-tool-footer">
                  <span>Open App<ArrowUpRight size={16} /></span>
                  <span className="mono">WEB APP</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
