"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, FileText, Github, LayoutDashboard, X } from "lucide-react";
import type { ShowcaseItem } from "@/data/portfolio";

export default function ShowcaseModal({ showcase, onClose }: { showcase: ShowcaseItem; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const dashboard = useRef<HTMLDivElement>(null);
  const [loadDashboard, setLoadDashboard] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!loadDashboard || !showcase.tableauEmbed || !dashboard.current) return;
    const container = dashboard.current;
    container.innerHTML = showcase.tableauEmbed;
    const viz = container.querySelector<HTMLElement>("object");
    if (viz) {
      viz.style.width = "100%";
      viz.style.height = window.innerWidth < 720 ? "1200px" : "827px";
    }
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    container.appendChild(script);
    return () => { container.replaceChildren(); };
  }, [loadDashboard, showcase.tableauEmbed]);

  const reports = [
    { label: "Project report", url: showcase.pdfUrl },
    { label: "Presentation", url: showcase.presentationUrl },
    { label: "Executive summary", url: showcase.executiveSummaryUrl },
  ].filter(report => report.url);

  return (
    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => {
      if (event.target === event.currentTarget) {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }
    }}>
      <div className="dialog-header"><h2 id="project-title">{showcase.title}</h2><button className="icon-button" onClick={onClose} aria-label="Close project details" autoFocus><X size={20} /></button></div>
      <div className="dialog-content">
        <picture><source srcSet={showcase.previewImage.replace(/\.(png|jpg)$/, ".webp")} type="image/webp" /><img className="dialog-image" src={showcase.previewImage} alt={showcase.title + " preview"} width={1280} height={720} /></picture>
        {showcase.galleryImages && <section className="dialog-section"><h3>Selected Pages</h3><div className="dialog-gallery">{showcase.galleryImages.map(image => <figure key={image.src}><picture><source srcSet={image.src} type="image/webp" /><img src={image.src} alt={image.alt} width={1200} height={675} loading="lazy" /></picture><figcaption>{image.label}</figcaption></figure>)}</div></section>}
        <section className="dialog-section"><h3>Project Description</h3>
          {showcase.projectDescription.split("\n").filter(paragraph => paragraph.trim()).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {showcase.publicUrl && <p><strong>Public URL: </strong><a href={showcase.publicUrl} target="_blank" rel="noopener noreferrer">{showcase.publicUrl}</a></p>}
          {showcase.keyFeatures.length > 0 && <><h4>{showcase.keyFeaturesTitle || "Key features & insights"}</h4><ul>{showcase.keyFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul></>}
        </section>
        {showcase.techStack.length > 0 && <section className="dialog-section"><h3>Tools & Technologies</h3><div className="tags">{showcase.techStack.map(tech => <span key={tech}>{tech}</span>)}</div></section>}
        {showcase.demoUrl && <section className="dialog-section demo-access">
          <div className="demo-heading"><h3>Live Demo Access</h3><a className="button button-primary" href={showcase.demoUrl} target="_blank" rel="noopener noreferrer">Open Demo Environment <ExternalLink size={15} /></a></div>
          <p><a href={showcase.demoUrl} target="_blank" rel="noopener noreferrer">{showcase.demoUrl}</a></p>
          {showcase.demoCredentials && <dl className="demo-credentials"><div><dt>Username</dt><dd>{showcase.demoCredentials.username}</dd></div><div><dt>Password</dt><dd>{showcase.demoCredentials.password}</dd></div></dl>}
        </section>}
        {reports.length > 0 && <section className="dialog-section"><h3>Project Reports</h3><div className="report-links">{reports.map(report => <a className="button button-secondary" href={report.url} target="_blank" rel="noopener noreferrer" key={report.label}><FileText size={16} />{report.label}<ExternalLink size={14} /></a>)}</div></section>}
        {showcase.githubUrl && <section className="dialog-section dialog-links"><a className="button button-secondary" href={showcase.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={16} />View on GitHub<ExternalLink size={14} /></a></section>}
        {(showcase.tableauEmbed || showcase.lookerStudioEmbed) && <section className="dialog-section">
          <h3>Interactive Dashboard</h3>
          {!loadDashboard ? <button className="button button-primary" onClick={() => setLoadDashboard(true)}><LayoutDashboard size={17} />Open interactive dashboard</button> : (
            showcase.tableauEmbed ? <div ref={dashboard} className="dashboard-container" /> : <div className="dashboard-container" dangerouslySetInnerHTML={{ __html: showcase.lookerStudioEmbed || "" }} />
          )}
        </section>}
      </div>
    </dialog>
  );
}
