import Link from 'next/link';
import { MapPin, Briefcase, Link as LinkIcon, Users, BookOpen } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 grid md:grid-cols-[296px_1fr] gap-8">
      {/* Sidebar / Profile Section */}
      <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
        <div className="relative group">
          <div className="w-48 h-48 md:w-full md:h-auto aspect-square rounded-full border border-[var(--color-border-default)] overflow-hidden bg-[var(--color-canvas-subtle)] relative">
             <img 
               src="/profile.jpg" 
               alt={PROFILE.name}
               className="object-cover w-full h-full object-[center_25%]"
             />
          </div>
          <div className="absolute bottom-6 right-6 md:bottom-2 md:right-2 w-8 h-8 rounded-full bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] flex items-center justify-center group-hover:bg-white/10 transition">
             🎯
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">{PROFILE.name}</h1>
          <h2 className="text-xl text-[var(--color-foreground)] opacity-70 font-light">{PROFILE.role}</h2>
        </div>

        <button className="w-full py-1.5 px-4 bg-[var(--color-canvas-subtle)] border border-[var(--color-border-default)] rounded-md text-sm font-medium hover:bg-[var(--color-border-muted)] transition-colors flex items-center gap-2 justify-center md:justify-start">
           <span className="w-3 h-3 rounded-full bg-[var(--color-success-fg)] border border-green-900/20"></span>
           {PROFILE.status}
        </button>

        <div className="flex flex-col gap-2 text-sm text-[var(--foreground)] opacity-80 mt-2 items-center md:items-start">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {PROFILE.location}
          </div>

           {PROFILE.socials.map((social) => (
             <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-accent-fg)] hover:underline">
               <social.icon size={16} />
               {social.name}
             </Link>
           ))}
        </div>
      </div>

      {/* Main Content / "Readme" styled section */}
      <div className="flex flex-col gap-6">
        <div className="border border-[var(--color-border-default)] rounded-md bg-[var(--color-canvas-subtle)] overflow-hidden">
          <div className="px-4 py-2 border-b border-[var(--color-border-default)] bg-[var(--color-canvas-subtle)] flex items-center gap-2 text-xs font-mono">
            <BookOpen size={14} />
            README.md
          </div>
          <div className="p-6 md:p-8 bg-[var(--background)]">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-bold border-b border-[var(--color-border-muted)] pb-2 mb-6">
                Hi there, I'm {PROFILE.name}! <span className="inline-block animate-wave">👋</span>
              </h1>
              
              <p className="mb-6 text-[var(--foreground)] leading-relaxed">
                {PROFILE.bio}
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
                <span className="text-[var(--color-accent-fg)]">#</span> About Me
              </h2>
              
              <div className="bg-[var(--color-canvas-subtle)] p-4 rounded-md font-mono text-sm border border-[var(--color-border-default)]">
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{`{`}</span><br/>
                &nbsp;&nbsp;<span className="text-red-400">name</span>: <span className="text-green-400">'{PROFILE.name}'</span>,<br/>
                &nbsp;&nbsp;<span className="text-red-400">role</span>: <span className="text-green-400">'Data Analyst, BI & Vibe Coding'</span>,<br/>
                &nbsp;&nbsp;<span className="text-red-400">background</span>: <span className="text-green-400">'Computer Science'</span>,<br/>
                &nbsp;&nbsp;<span className="text-red-400">skills</span>: <span className="text-yellow-400">[</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Data Analysis'</span>, <span className="text-green-400">'Data Visualization'</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Performance Marketing'</span>, <span className="text-green-400">'Product Thinking'</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Technical Core'</span><br/>
                &nbsp;&nbsp;<span className="text-yellow-400">]</span>,<br/>
                &nbsp;&nbsp;<span className="text-red-400">motto</span>: <span className="text-green-400">'Audere est Facere'</span><br/>
                <span className="text-yellow-400">{`}`}</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
