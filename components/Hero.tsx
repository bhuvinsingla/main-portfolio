import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-900 via-surface-900 to-slate-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 flex-1">
            <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 font-mono text-sm tracking-wide mb-4">
              OPEN TO WORK · Remote · EST Overlap
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hello, I'm <br />
              <span className="gradient-text">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl">
              {PERSONAL_INFO.role} — Next.js, Supabase, Vercel, AI-first. I build and ship real products with full ownership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="group flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-brand-500/25"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>

            <div className="pt-8 flex gap-6 justify-center md:justify-start">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-brand-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Creative journey preview / Abstract graphic */}
          <div className="flex-1 hidden md:block">
             <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* 3D-ish cartoon objects */}
                <div className="pointer-events-none absolute -top-6 -left-4 md:-left-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-400 via-amber-400 to-amber-600 rounded-[1.25rem] shadow-[0_18px_45px_rgba(0,0,0,0.65)] rotate-[-15deg]">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-950/80 rounded-2xl border border-white/10 translate-x-3 translate-y-3 flex items-center justify-center">
                      <span className="text-slate-200 text-lg md:text-xl font-mono">{'{'}{' }'}</span>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-6 -right-4 md:-right-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-surface-900 via-slate-900 to-brand-500/70 rounded-full shadow-[0_14px_30px_rgba(15,23,42,0.9)] border border-slate-700/70 flex items-center justify-center">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-400/90 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="uppercase tracking-[0.25em]">journey.timeline()</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-900/70 border border-slate-700 text-[10px] text-brand-300">
                      live
                    </span>
                  </div>

                  {/* Animated career steps */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/70 border border-slate-700/70 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-400/80 shadow-[0_0_12px_rgba(245,158,11,0.7)] animate-pulse" />
                        <div>
                          <p className="text-slate-100 text-xs">Salesforce</p>
                          <p className="text-slate-400 text-[11px]">Trailhead Expeditioner · CRM foundations</p>
                        </div>
                      </div>
                      <span className="text-slate-500 text-[10px]">01</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-900/60 border border-slate-700/60 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                        <div>
                          <p className="text-slate-100 text-xs">Antier Solutions</p>
                          <p className="text-slate-400 text-[11px]">Blockchain · NFTs · Smart contracts</p>
                        </div>
                      </div>
                      <span className="text-slate-500 text-[10px]">02</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-900/60 border border-slate-700/60 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
                        <div>
                          <p className="text-slate-100 text-xs">SmartData Enterprises</p>
                          <p className="text-slate-400 text-[11px]">AI assistants · Real‑time apps</p>
                        </div>
                      </div>
                      <span className="text-slate-500 text-[10px]">03</span>
                    </div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="mt-3">
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-brand-400 via-amber-400 to-emerald-400 animate-pulse" />
                    </div>
                    <p className="mt-2 text-[11px] text-slate-400">
                      // From CRM → Blockchain → Full‑stack &amp; AI
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};
