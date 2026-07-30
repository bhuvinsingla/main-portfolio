import React from 'react';
import { ArrowRight, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, PROFILE_PHOTO, HERO_ROLES, HERO_STATS } from '../constants';
import { useTypewriter } from '../hooks/useTypewriter';

export const Hero: React.FC = () => {
  const role = useTypewriter(HERO_ROLES);
  const initials = PERSONAL_INFO.name.split(' ').map((n) => n[0]).join('');

  return (
    <section className="relative min-h-screen pt-20 pb-14 px-4 md:px-8 overflow-hidden">
      <div className="hero-watermark font-display" aria-hidden>{initials}</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="hero-bento">
          {/* Photo cell */}
          <div className="bento-cell bento-cell--photo shape-photo hero-enter" style={{ animationDelay: '0.05s' }}>
            <div className="bento-photo-frame hero-photo-wrap">
              <div className="border-beam" aria-hidden />
              <img
                src={PROFILE_PHOTO}
                alt={PERSONAL_INFO.name}
                width={400}
                height={500}
                loading="eager"
                decoding="async"
                className="bento-photo"
              />
              <div className="bento-photo-shine" aria-hidden />
            </div>
            <div className="bento-photo-tag font-mono text-[10px] text-zinc-500">
              <Sparkles className="w-3 h-3 text-brand-400 inline mr-1" />
              available for hire
            </div>
          </div>

          {/* Intro cell */}
          <div className="bento-cell bento-cell--intro shape-intro hero-enter" style={{ animationDelay: '0.12s' }}>
            <div className="status-pill inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-brand-300 font-mono text-xs mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              OPEN TO WORK
            </div>
            <p className="font-mono text-xs text-zinc-500 mb-3 tracking-widest uppercase">Portfolio · 2026</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl text-zinc-50 leading-[1.05] tracking-tight mb-4">
              <span className="block text-zinc-500 text-lg sm:text-xl font-sans font-normal mb-1">Hello, I&apos;m</span>
              <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="font-mono text-base sm:text-lg text-brand-300 min-h-[2rem] mb-5">
              {role}<span className="typewriter-cursor">▍</span>
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
              I build and ship real products - AI voice agents, full-stack apps, and production systems with full ownership.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-glow btn-primary group inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-xl text-sm font-medium">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#contact" className="glass inline-flex items-center gap-2 text-zinc-300 hover:text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300">
                Contact Me
              </a>
            </div>
          </div>

          {/* Stat cells */}
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`bento-cell bento-cell--stat shape-stat-${i + 1} hero-enter`}
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <p className="font-display text-2xl sm:text-3xl text-zinc-50 leading-none">{stat.value}</p>
              <p className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wide mt-2 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Location + social cell */}
          <div className="bento-cell bento-cell--meta shape-meta hero-enter" style={{ animationDelay: '0.38s' }}>
            <div className="flex items-start gap-2 text-zinc-400 text-sm mb-4">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <span className="leading-snug">{PERSONAL_INFO.location}</span>
            </div>
            <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Connect</p>
            <div className="grid grid-cols-2 gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-pop glass shape-social w-9 h-9 flex items-center justify-center text-zinc-500 hover:text-brand-300 mx-auto"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Code snippet decorative cell */}
          <div className="bento-cell bento-cell--code shape-code hero-enter hidden lg:flex flex-col" style={{ animationDelay: '0.44s' }}>
            <div className="flex gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <pre className="font-mono text-[11px] text-zinc-500 leading-relaxed flex-1">
{`const dev = {
  stack: ["Next.js", "AI", "Vapi"],
  ships: true,
  remote: true,
};`}
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-hint text-zinc-600 hover:text-brand-400 transition-colors duration-300" aria-label="Scroll down">
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
