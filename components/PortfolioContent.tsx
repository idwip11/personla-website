"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Award, ChartNoAxesCombined, Code2, Database, Mail, Play } from "lucide-react";
import { DEMOS, PROFILE, PROJECTS, SHOWCASES, type ShowcaseItem } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import ShowcaseCard from "./ShowcaseCard";
import ShowcaseModal from "./ShowcaseModal";
import FreeTools from "./FreeTools";

const workFilters = ["All work", "Web applications", "Data & BI"] as const;
const skills = [
  { title: "Data & business intelligence", icon: ChartNoAxesCombined, items: ["SQL", "Tableau", "Microsoft Excel", "Power BI", "Google Sheets", "Python"] },
  { title: "Application development", icon: Code2, items: ["React", "Next.js", "TypeScript", "JavaScript", "PHP", "CodeIgniter 4"] },
  { title: "Databases & workflow", icon: Database, items: ["PostgreSQL", "MySQL", "Git", "GitHub", "Vercel", "Railway"] },
];
const repositoryProjects = PROJECTS.filter(project => project.category === "fullstack" || project.category === "data");
const certificates = PROJECTS.filter(project => project.category === "certificate");

function VideoDemo({ demo }: { demo: typeof DEMOS[number] }) {
  const [playing, setPlaying] = useState(false);
  return (
    <article className="video-demo" data-reveal>
      <div className="video-frame">
        {playing ? (
          <iframe src={"https://www.youtube-nocookie.com/embed/" + demo.videoId + "?autoplay=1"} title={demo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        ) : (
          <button onClick={() => setPlaying(true)} aria-label={"Play video: " + demo.title} className="video-poster">
            <Image unoptimized src={"https://i.ytimg.com/vi/" + demo.videoId + "/hqdefault.jpg"} alt={demo.title} width={480} height={360} loading="lazy" />
            <span className="play-icon"><Play size={24} fill="currentColor" /></span>
            <span className="video-label mono">WATCH WALKTHROUGH</span>
          </button>
        )}
      </div>
      <h3>{demo.title.replace("Showcase Project: ", "")}</h3>
      <p>{demo.description}</p>
    </article>
  );
}

export default function PortfolioContent() {
  const [filter, setFilter] = useState<typeof workFilters[number]>("All work");
  const [allWork, setAllWork] = useState(false);
  const [allRepositories, setAllRepositories] = useState(false);
  const [allCertificates, setAllCertificates] = useState(false);
  const [selectedShowcase, setSelectedShowcase] = useState<ShowcaseItem | null>(null);
  const filteredWork = SHOWCASES.filter(work => filter === "All work" || (filter === "Web applications" ? work.tags.includes("PHP") : !work.tags.includes("PHP")));
  const visibleWork = allWork || filter !== "All work" ? filteredWork : filteredWork.slice(0, 4);

  return (
    <>
      <section id="work" className="section shell">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow mono">01 / SELECTED WORK</span><h2>Built with purpose<span className="accent">.</span></h2></div>
          <p>Production applications and data projects.<br />Real problems, practical solutions.</p>
        </div>
        <div className="work-toolbar">
          <div className="filter-control" role="group" aria-label="Filter selected work">
            {workFilters.map(item => <button key={item} aria-pressed={filter === item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <span className="mono muted work-count">{String(visibleWork.length).padStart(2, "0")} PROJECTS</span>
        </div>
        <div className="showcase-grid">
          {visibleWork.map(work => <ShowcaseCard key={work.title} showcase={work} index={SHOWCASES.indexOf(work)} onClick={() => setSelectedShowcase(work)} />)}
        </div>
        {filter === "All work" && <div className="section-more"><button className="text-link" onClick={() => setAllWork(!allWork)} aria-expanded={allWork}>{allWork ? "Show selected projects" : "Explore all case studies"}<ArrowDown size={16} className={allWork ? "rotate-180" : ""} /></button></div>}
      </section>

      <section id="about" className="section about-section">
        <div className="shell about-grid">
          <div data-reveal><span className="eyebrow mono">02 / ABOUT ME</span><h2>Data thinking.<br />Developer mindset<span className="accent">.</span></h2>
            <div className="about-profile"><picture><source srcSet="/profile.webp" type="image/webp" /><img src="/profile.jpg" alt="Imam Dwi Purwanto" width={112} height={112} loading="lazy" /></picture><div><strong>Imam Dwi Purwanto</strong><span>Computer Science background</span><span>Mataram, Indonesia</span></div></div>
          </div>
          <div className="about-copy" data-reveal>{PROFILE.bio.split("\n\n").map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <div className="social-links">{PROFILE.socials.map(social => <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}><social.icon size={17} /><span>{social.name}</span><ArrowUpRight size={13} /></a>)}</div>
          </div>
        </div>
        <div className="shell skills-grid">{skills.map(group => <div className="skill-group" data-reveal key={group.title}><group.icon size={22} /><h3>{group.title}</h3><div className="skill-list">{group.items.map((skill, index) => <span key={skill} style={{ transitionDelay: index * 35 + "ms" }}>{skill}</span>)}</div></div>)}</div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading" data-reveal><div><span className="eyebrow mono">03 / MORE TO EXPLORE</span><h2>From idea to implementation<span className="accent">.</span></h2></div><a className="text-link" href="https://github.com/idwip11" target="_blank" rel="noopener noreferrer">GitHub profile <ArrowUpRight size={16} /></a></div>
        <div className="repository-grid">{(allRepositories ? repositoryProjects : repositoryProjects.slice(0, 6)).map(project => <ProjectCard project={project} key={project.title} />)}</div>
        <div className="section-more"><button className="text-link" onClick={() => setAllRepositories(!allRepositories)} aria-expanded={allRepositories}>{allRepositories ? "Show fewer projects" : "View all " + repositoryProjects.length + " projects"}<ArrowDown size={16} className={allRepositories ? "rotate-180" : ""} /></button></div>
        <div className="subsection-heading" data-reveal><span className="eyebrow mono">PROJECT WALKTHROUGHS</span><h3>A closer look at the work</h3></div>
        <div className="video-grid">{DEMOS.map(demo => <VideoDemo demo={demo} key={demo.videoId} />)}</div>
      </section>

      <FreeTools />

      <section id="certificates" className="section certificates-section">
        <div className="shell">
          <div className="section-heading" data-reveal><div><span className="eyebrow mono">05 / CONTINUOUS LEARNING</span><h2>Always building on the basics<span className="accent">.</span></h2></div><span className="certificate-total"><Award size={18} />{certificates.length} certificates</span></div>
          <div className="certificate-grid">{(allCertificates ? certificates : certificates.slice(0, 4)).map(certificate => <a className="certificate" data-reveal key={certificate.title} href={certificate.link !== "#" ? certificate.link : certificate.image} target="_blank" rel="noopener noreferrer">
            <div className="certificate-image"><picture><source srcSet={certificate.image?.replace(/\.(png|jpg)$/, ".webp")} type="image/webp" /><img src={certificate.image} alt={certificate.title} loading="lazy" width={900} height={600} /></picture></div>
            <div className="certificate-title"><h3>{certificate.title}</h3><ArrowUpRight size={17} /></div><p>{certificate.description}</p>
          </a>)}</div>
          <div className="section-more"><button className="text-link" onClick={() => setAllCertificates(!allCertificates)} aria-expanded={allCertificates}>{allCertificates ? "Show featured certificates" : "View all certificates"}<ArrowDown size={16} className={allCertificates ? "rotate-180" : ""} /></button></div>
        </div>
      </section>

      <footer id="contact" className="contact-section shell">
        <div className="contact-top" data-reveal>
          <div><span className="eyebrow mono">06 / LET&apos;S CONNECT</span><h2>Have an opportunity<br />in mind<span className="accent">?</span></h2><p>Open to data, business intelligence, and development roles.</p><a className="contact-email" href="mailto:imamdpurwanto11@gmail.com">imamdpurwanto11@gmail.com <ArrowUpRight size={20} /></a></div>
          <a className="contact-orbit" href="mailto:imamdpurwanto11@gmail.com" aria-label="Email Imam Dwi Purwanto">
            <svg viewBox="0 0 160 160" aria-hidden="true"><defs><path id="contact-circle" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" /></defs><text><textPath href="#contact-circle" textLength="389">LET&apos;S CONNECT / LET&apos;S CONNECT / </textPath></text></svg>
            <Mail size={34} strokeWidth={1.5} />
          </a>
        </div>
        <div className="footer-bottom"><a className="wordmark" href="#">imam<span className="accent">.</span></a><span>Imam Dwi Purwanto / {new Date().getFullYear()}</span><a className="text-link" href="#">Back to top <ArrowUpRight size={14} /></a></div>
      </footer>
      {selectedShowcase && <ShowcaseModal showcase={selectedShowcase} onClose={() => setSelectedShowcase(null)} />}
    </>
  );
}
