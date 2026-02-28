import React from 'react';
import { Section } from './Section';
import { ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About" subtitle="My journey from non-medical stream to engineering and beyond.">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I build and ship real products—SaaS, AI tools, full-stack apps. High-agency, founder mentality: I own outcomes, not just tasks. AI-first: Cursor, Claude, and LLMs are part of my daily workflow. I deliver to production regularly and care deeply about quality and product design.
          </p>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Proven stack: Next.js, Supabase, Vercel, TailwindCSS, Shadcn/ui, OpenAI & Anthropic APIs. I&apos;ve shipped video conferencing, AI voice assistants, NFT marketplaces, and more. Remote-ready, flexible for EST overlap.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• Core:</p>
                <p className="text-slate-300">Next.js, Supabase, Vercel, TailwindCSS, Shadcn/ui</p>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• AI & APIs:</p>
                <p className="text-slate-300">OpenAI, Anthropic, LangChain, Vapi, Cursor, Claude</p>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• Backend & Data:</p>
                <p className="text-slate-300">Node.js, Supabase, PostgreSQL, REST APIs</p>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• Blockchain:</p>
                <p className="text-slate-300">Solidity, Web3.js, Ethers.js</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <p className="text-slate-300 text-lg italic">
              Always learning. Always building. Shipped products, full ownership, quality first.
            </p>
          </div>

          {/* <div className="mt-6">
            <a 
              href="https://bhuvin.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
            >
              <span>Visit my website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div> */}
        </div>
      </div>
    </Section>
  );
};

