import React from 'react';
import { Section } from './Section';
import { ASSETS } from '../constants';
import { BookOpen, Mountain, Sparkles, Target, Zap, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const TRAILHEAD = {
  rank: 'Expeditioner',
  badges: 65,
  points: 48725,
  trails: 4,
};

export const Story: React.FC = () => {
  return (
    <Section index="02" id="story" title="My Story" subtitle="Who I am, what I feel, and the journey that shaped me-with a few proverbs along the way.">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* Proverb intro */}
        <Reveal>
        <blockquote className="text-center border-l-0 glass shape-card shape-story-quote p-8 mb-4">
          <Quote className="w-10 h-10 text-brand-500/60 mx-auto mb-4 animate-pulse" />
          <p className="text-xl md:text-2xl text-zinc-300 italic font-medium max-w-3xl mx-auto">
            “The expert in anything was once a beginner.” &mdash; Every chapter of my career starts with curiosity and ends with confidence.
          </p>
        </blockquote>
        </Reveal>

        {/* Chapter 1: Salesforce - It all started here */}
        <Reveal delay={80}>
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/15 text-brand-300 border border-brand-500/30">
              <BookOpen className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-2xl font-bold text-zinc-50">Chapter 1 - It&apos;s All About Salesforce</h3>
              <p className="text-zinc-400 text-sm">Where I learned that CRM isn&apos;t just data-it&apos;s people and process.</p>
              <p className="text-zinc-500 text-xs mt-1">
                Trainee · Salesforce · Apr 2023 – Jun 2023 · ~3 months
              </p>
            </div>
          </div>

          {/* Company summary + idiom side by side */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2 glass shape-card shape-story-block p-4 space-y-2">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">Salesforce (Trailhead)</p>
              <p className="text-zinc-200 text-sm font-semibold">Tagline: The #1 AI CRM - We bring companies and customers together.</p>
              <p className="text-zinc-300 text-sm">
                <span className="font-semibold text-zinc-200">What the company deals with:</span>{' '}
                Cloud CRM platform, automation, analytics, and customer 360 solutions.
              </p>
              <p className="text-zinc-300 text-sm">
                <span className="font-semibold text-zinc-200">Tech I learned:</span>{' '}
                Salesforce CRM, data modelling, automation with flows, and building apps on the Salesforce platform.
              </p>
            </div>
            <div className="glass shape-card shape-story-block p-4 flex items-center">
              <p className="text-zinc-300 text-sm italic">
                “A journey of a thousand miles begins with a single step.”<br />
                <span className="text-zinc-400 text-xs">Trailhead was that first step for me.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 min-w-0">
              <p className="text-zinc-300 leading-relaxed">
                My first real step into tech was Salesforce. I didn&apos;t just want to use the platform; I wanted to master it.
                Trailhead became my playground-every badge a small victory, every trail a new horizon. That consistent learning
                mindset still defines how I approach every new technology.
              </p>
              {/* Trailhead stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 min-w-0">
                <div className="glass shape-card shape-story-stat p-3 sm:p-4 text-center min-w-0 overflow-hidden">
                  <p className="text-brand-400 font-bold text-sm sm:text-base truncate" title={TRAILHEAD.rank}>{TRAILHEAD.rank}</p>
                  <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-wider mt-1">Rank</p>
                </div>
                <div className="glass shape-card shape-story-stat p-3 sm:p-4 text-center min-w-0 overflow-hidden">
                  <p className="text-zinc-50 font-bold text-sm sm:text-lg">{TRAILHEAD.badges}</p>
                  <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-wider mt-1">Badges</p>
                </div>
                <div className="glass shape-card shape-story-stat p-3 sm:p-4 text-center min-w-0 overflow-hidden">
                  <p className="text-zinc-50 font-bold text-xs sm:text-lg truncate" title={TRAILHEAD.points.toLocaleString()}>{TRAILHEAD.points.toLocaleString()}</p>
                  <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-wider mt-1">Points</p>
                </div>
                <div className="glass shape-card shape-story-stat p-3 sm:p-4 text-center min-w-0 overflow-hidden">
                  <p className="text-zinc-50 font-bold text-sm sm:text-lg">{TRAILHEAD.trails}</p>
                  <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-wider mt-1">Trails</p>
                </div>
              </div>
            </div>
            <div className="relative glass shape-card shape-story-media aspect-video flex items-center justify-center overflow-hidden">
              <img
                src={ASSETS('pics/expeditioner.png')}
                alt="Trailhead Expeditioner"
                className="w-full h-full object-contain p-6 sm:p-8"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center bg-white/5 text-zinc-500 text-sm">
                Add `public/pics/expeditioner.png`
              </div>
            </div>
          </div>
          {/* <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
            {[
              { src: ASSETS('pics/expeditioner.png'), alt: 'Trailhead Expeditioner' },
            ].map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="h-24 w-32 object-contain p-2 rounded-lg border border-white/10 glass flex-shrink-0"
                onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
              />
            ))}
          </div> */}
        </div>
        </Reveal>

        {/* Chapter 2: Antier - Blockchain boom */}
        <Reveal delay={100}>
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/15 text-brand-300 border border-brand-500/30">
              <Mountain className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-2xl font-bold text-zinc-50">Chapter 2 - Antier Solutions & the Blockchain Boom</h3>
              <p className="text-zinc-400 text-sm">When the trend was blockchain, I jumped in. And I learned that the real asset was teamwork.</p>
              <p className="text-zinc-500 text-xs mt-1">
                Industry Integrated On Job Training · Jul 2023 – Dec 2023 · ~6 months
              </p>
            </div>
          </div>

          {/* Company summary + idiom side by side */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2 glass shape-card shape-story-block p-4 space-y-2">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">Antier Solutions</p>
              <p className="text-zinc-200 text-sm font-semibold">Tagline: Decentralizing the world.</p>
              <p className="text-zinc-300 text-sm">
                <span className="font-semibold text-zinc-200">What the company deals with:</span>{' '}
                Blockchain and Web3 consulting, NFT marketplaces, DeFi platforms, and crypto products.
              </p>
              <p className="text-zinc-300 text-sm">
                <span className="font-semibold text-zinc-200">Tech I learned:</span>{' '}
                Solidity, ERC-20/ERC-721 tokens, NFT marketplace flows, and integrating Web3.js/Ethers.js into React/Next.js apps.
              </p>
            </div>
            <div className="glass shape-card shape-story-block p-4 flex items-center">
              <p className="text-zinc-300 text-sm italic">
                “If you want to go fast, go alone. If you want to go far, go together.”<br />
                <span className="text-zinc-400 text-xs">Antier taught me how far a strong team can go.</span>
              </p>
            </div>
          </div>

          <p className="text-zinc-300 leading-relaxed mb-6">
            Blockchain was everywhere-and I wanted to be in the middle of it. At Antier Solutions I didn&apos;t just write smart contracts;
            I learned how to ship as part of a team, to align with designers, testers, and product owners while still caring deeply about code quality.
          </p>

          {/* Blockchain flow */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass shape-card shape-story-media p-6">
              <h4 className="text-brand-400 font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Blockchain flow
              </h4>
              <div className="flex flex-col gap-3">
                {['User / DApp', 'Web3 (ethers.js)', 'Smart contract', 'Chain'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/15 text-brand-400 flex items-center justify-center text-sm font-mono">{i + 1}</div>
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-zinc-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative glass shape-card shape-story-media aspect-video flex items-center justify-center overflow-hidden">
              <img
                src={ASSETS('pics/antier-solutions.avif')}
                alt="Antier Solutions - Blockchain work"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center bg-white/5 text-zinc-500 text-sm">
                Image: <code className="text-zinc-400">public/pics/antier-solutions.avif</code>
              </div>
            </div>
          </div>
          {/* <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
            {[
              { src: ASSETS('pics/antier_logo.jpg'), alt: 'Antier logo' },
              { src: ASSETS('pics/antier-solutions-pvt-ltd-industrial-area-chandigarh-search-engine-optimization-services-or7qerzg9f.avif'), alt: 'Antier Solutions' },
              { src: ASSETS('pics/blochchain.jpg'), alt: 'Blockchain' },
              { src: ASSETS('pics/blockchain-3.jpg'), alt: 'Blockchain build' },
              { src: ASSETS('pics/blockchain-4.jpg'), alt: 'Smart contract flow' },
              { src: ASSETS('pics/blockchain-5.jpg'), alt: 'Web3 UI' },
            ].map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="h-24 w-32 object-cover rounded-lg border border-white/10 flex-shrink-0"
                onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
              />
            ))}
          </div> */}
        </div>
        </Reveal>

        {/* Chapter 3: Dream company - SmartData */}
        <Reveal delay={120}>
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-zinc-300 border border-white/10">
              <Sparkles className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-2xl font-bold text-zinc-50">Chapter 3 - The Dream Come True</h3>
              <p className="text-zinc-400 text-sm">The company where I came as a noob-and learned I could handle anything.</p>
              <p className="text-zinc-500 text-xs mt-1">
                Associate Trainee · SmartData Enterprises Inc. · Sep 2024 – Present · ~1.5 years (ongoing) · Mohali, India
              </p>
            </div>
          </div>

          {/* Company summary + idiom side by side */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2 glass shape-card shape-story-block p-4 space-y-2">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">SmartData Enterprises Inc.</p>
              <p className="text-zinc-200 text-sm font-semibold">Tagline: Scaling Expectations - AI-driven, outcome-focused, human-centric.</p>
              <p className="text-zinc-300 text-sm">
                <span className="font-semibold text-zinc-200">What the company deals with:</span>{' '}
                Custom software, product engineering, and consulting for global clients.
              </p>
              <p className="text-zinc-300 text-sm">
                <span className="font-semibold text-zinc-200">Tech I learned:</span>{' '}
                Real-time video apps with Socket.IO and Media Devices, AI assistants with Vapi and LangChain,
                and production-grade React/Angular/Next.js under real constraints and processes.
              </p>
            </div>
            <div className="glass shape-card shape-story-block p-4 flex items-center">
              <p className="text-zinc-300 text-sm italic">
                “Success is not final, failure is not fatal: it is the courage to continue that counts.”<br />
                <span className="text-zinc-400 text-xs">SmartData is where I proved that courage every day.</span>
              </p>
            </div>
          </div>

          {/* SmartData image */}
          <div className="mb-8">
            <div className="relative glass shape-card shape-story-media aspect-video flex items-center justify-center overflow-hidden">
              <img
                src={ASSETS('pics/SmartData.jpg')}
                alt="SmartData Enterprises"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center bg-white/5 text-zinc-500 text-sm">
                Image: <code className="text-zinc-400">public/pics/SmartData.jpg</code>
              </div>
            </div>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              <img src={ASSETS('pics/smartdata-logo.png')} alt="SmartData logo" className="h-24 w-32 object-contain p-2 rounded-lg border border-white/10 glass flex-shrink-0" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              <img src={ASSETS('pics/smartdata-office.jpg')} alt="SmartData office" className="h-24 w-32 object-cover rounded-lg border border-white/10 flex-shrink-0" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
            </div>
          </div>

          <div className="glass shape-card shape-story-block p-8 md:p-10 space-y-6">
            <p className="text-zinc-300 leading-relaxed">
              I joined SmartData as an Associate Trainee. Back then there were too many rules, too many doubts.
              “Can he do this?” was the unspoken question. I kept my head down and built-video conferencing,
              AI assistants, real-time systems. I didn&apos;t just follow the rules; I learned why they existed, then how to bend them without breaking them.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Slowly the question changed. From “Can he do this?” to “Where is he?” - and then to “He is the one who will do this.”
              That shift didn&apos;t come from a title. It came from showing up, shipping, and caring about the outcome.
              SmartData isn&apos;t just my current company; it&apos;s the first place that truly taught me what I&apos;m capable of.
            </p>
          </div>
        </div>
        </Reveal>

        {/* Closing proverb */}
        <Reveal>
        <div className="text-center py-8">
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap">
            <Target className="w-5 h-5 text-brand-500" />
            This is my story-Salesforce, blockchain, and the dream company that believed in me. Always learning. Always building.
          </p>
        </div>
        </Reveal>
      </div>
    </Section>
  );
};
