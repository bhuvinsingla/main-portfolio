import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO, PROFILE_PHOTO_SM } from '../constants';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <Section index="01" id="about" title="About" subtitle="My journey from non-medical stream to engineering and beyond.">
      <Reveal className="max-w-4xl mx-auto">
        <div className="glass shape-card shape-about card-glass p-8 md:p-10">
          <div className="flex flex-col sm:flex-row gap-8 mb-8 items-center sm:items-start">
            <img
              src={PROFILE_PHOTO_SM}
              alt={PERSONAL_INFO.name}
              width={160}
              height={213}
              loading="lazy"
              decoding="async"
              className="w-28 sm:w-32 shrink-0 shape-profile object-cover aspect-[3/4] shadow-lg"
            />
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-lg font-semibold text-zinc-900">{PERSONAL_INFO.name}</p>
              <p className="text-zinc-600">{PERSONAL_INFO.role} · {PERSONAL_INFO.location}</p>
            </div>
          </div>
          <p className="text-zinc-600 text-lg leading-relaxed mb-6">
            I build and ship real products-SaaS, AI tools, full-stack apps. High-agency, founder mentality: I own outcomes, not just tasks. AI-first: Cursor, Claude, and LLMs are part of my daily workflow.
          </p>
          <p className="text-zinc-600 text-lg leading-relaxed mb-6">
            Proven stack: Next.js, Supabase, Vercel, TailwindCSS, Shadcn/ui, OpenAI & Anthropic APIs. Remote-ready, flexible for EST overlap.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-900 mb-4">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ['Core', 'Next.js, Supabase, Vercel, TailwindCSS, Shadcn/ui'],
                ['AI & APIs', 'OpenAI, Anthropic, LangChain, Vapi, Cursor, Claude'],
                ['Backend & Data', 'Node.js, Supabase, PostgreSQL, REST APIs'],
                ['Blockchain', 'Solidity, Web3.js, Ethers.js'],
              ].map(([label, items]) => (
                <div key={label} className="space-y-1">
                  <p className="text-zinc-500 text-sm font-medium">{label}</p>
                  <p className="text-zinc-600 text-sm">{items}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200/80">
            <p className="text-zinc-500 text-lg italic">
              Always learning. Always building. Shipped products, full ownership, quality first.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};
