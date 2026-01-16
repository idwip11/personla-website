"use client";

import { useState } from 'react';
import { LayoutGrid, Laptop, Database, FileSpreadsheet, Award } from 'lucide-react';
import ProjectCard from './ProjectCard';
import TechStack from './TechStack';
import { PROJECTS, DEMOS } from '@/data/portfolio';
import { GitHubCalendar } from 'react-github-calendar';

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'projects', label: 'Projects', icon: Laptop },
  { id: 'templates', label: 'Templates', icon: FileSpreadsheet },
  { id: 'certificates', label: 'Certificates', icon: Award },
];

export default function PortfolioContent() {
  const [activeTab, setActiveTab] = useState('overview');

  const filteredProjects = PROJECTS.filter(p => !p.category || p.category === 'fullstack' || p.category === 'data');
  const templates = PROJECTS.filter(p => p.category === 'template');
  const certificates = PROJECTS.filter(p => p.category === 'certificate');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile Tab Navigation: Grid on mobile, Flex on desktop */}
      <div className="mb-6 grid grid-cols-2 md:flex md:overflow-x-auto md:border-b md:border-[var(--color-border-muted)] scrollbar-hide gap-2 md:gap-0">
        {TABS.map((tab) => {
           const Icon = tab.icon;
           const isActive = activeTab === tab.id;
           return (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`
                 flex items-center justify-center md:justify-start gap-2 px-4 py-3 text-sm font-medium transition-colors rounded-md md:rounded-none
                 ${isActive 
                   ? 'bg-[var(--color-canvas-subtle)] md:bg-transparent md:border-b-2 border-[var(--color-accent-fg)] text-[var(--foreground)]' 
                   : 'text-[var(--foreground)] opacity-60 hover:opacity-100 md:border-b-2 md:border-transparent hover:border-[var(--color-border-default)]'
                 }
               `}
             >
               <Icon size={16} />
               {tab.label}
             </button>
           );
        })}
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <TechStack />
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Project Demos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DEMOS.map((demo, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-md overflow-hidden border border-[var(--color-border-default)] bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${demo.videoId}`}
                        title={demo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)]">{demo.title}</h4>
                      <p className="text-sm text-[var(--foreground)] opacity-70">{demo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Github Contribution Graph Placeholder */}
             <div className="border border-[var(--color-border-default)] rounded-md p-4 bg-[var(--background)] overflow-hidden flex justify-center">
                <GitHubCalendar 
                  username="idwip11"
                  colorScheme="dark"
                  fontSize={12}
                />
             </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {filteredProjects.map((project, idx) => (
               <ProjectCard key={idx} project={project} />
             ))}
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {templates.map((project, idx) => (
               <ProjectCard key={idx} project={project} />
             ))}
          </div>
        )}
        
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {certificates.map((cert, idx) => (
              <a 
                key={idx} 
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-md flex items-center justify-center relative overflow-hidden group cursor-pointer"
              >
                 {/* @ts-ignore - legacy image property */}
                 <img 
                   src={cert.image} 
                   alt={cert.title} 
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                    <h4 className="text-white font-semibold mb-2">{cert.title}</h4>
                    <p className="text-gray-200 text-sm mb-4">{cert.description}</p>
                 </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
