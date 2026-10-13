import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero shell" aria-labelledby="intro-heading">
      <div className="hero-top">
        <div className="hero-identity">
          <picture><source srcSet="/profile.webp" type="image/webp" /><img src="/profile.jpg" alt={PROFILE.name} width={48} height={48} fetchPriority="high" /></picture>
          <span className="availability"><span className="status-dot" />{PROFILE.status}</span>
        </div>
        <span className="mono muted hero-edition">INDEPENDENT PORTFOLIO / 2026</span>
      </div>
      <div className="hero-name-row">
        <h1 id="intro-heading" className="hero-name">Imam Dwi<br /><span className="accent">Purwanto<span className="name-period">.</span></span></h1>
        <a className="hero-work-link" href="#work" aria-label="Explore selected projects">
          <ArrowDown size={30} strokeWidth={1.5} /><span>Explore<br />my work</span>
        </a>
      </div>
      <div className="hero-bottom">
        <div>
          <h2 className="hero-role">{PROFILE.role}</h2>
          <p className="hero-summary">Turning data into decisions.<br />Building software that makes everyday work better.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="mailto:imamdpurwanto11@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="hero-facts">
          <div><span className="hero-fact-number">3<span className="accent">+</span></span><span>Years of experience<br />across data & development</span></div>
          <p><MapPin size={14} /><span>{PROFILE.location}</span><span className="remote-dot" /><span>Open to remote</span></p>
        </div>
      </div>
    </section>
  );
}
