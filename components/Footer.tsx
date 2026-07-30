import React from 'react';
import { Section } from './Section';
import { CERTIFICATES, AWARDS, PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Trophy, Award, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 mt-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" aria-hidden />
      <Section id="achievements" className="pb-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-bold text-zinc-50 mb-5 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-400" />
              Certifications
            </h3>
            <div className="space-y-3">
              {CERTIFICATES.map((cert, idx) => (
                <div key={idx} className="glass shape-card shape-footer-cert flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center font-mono text-sm text-brand-400">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100">{cert.title}</h4>
                    <p className="text-sm text-zinc-500">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-50 mb-5 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-brand-400" />
              Honors &amp; Awards
            </h3>
            {AWARDS.map((award, idx) => (
              <div key={idx} className="glass shape-card shape-expertise-alt p-6 relative overflow-hidden">
                <Trophy className="absolute top-4 right-4 w-20 h-20 text-white/[0.03]" />
                <h4 className="text-lg font-semibold text-zinc-50 mb-2">{award.title}</h4>
                <p className="text-brand-300 font-medium text-sm mb-3">{award.description}</p>
                <p className="text-zinc-400 text-sm">{award.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3">Get in touch</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl">
            Remote · EST overlap · Open to full-time. Let&apos;s build something.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
                rel={link.label === 'Email' || link.label === 'Phone' ? undefined : 'noreferrer'}
                className="glass shape-card shape-footer-contact card-glass group flex items-center gap-4 p-5"
              >
                <div className="p-2.5 rounded-lg bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors">
                  <link.icon className="w-5 h-5 text-zinc-400 group-hover:text-brand-400 transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{link.label}</p>
                  <p className="text-sm font-medium text-zinc-200 truncate">
                    {link.label === 'Email' ? PERSONAL_INFO.email : link.label === 'Phone' ? PERSONAL_INFO.phone : 'View profile'}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <div className="flex gap-5 my-4 md:my-0">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-300 transition-colors duration-300">{link.label}</a>
            ))}
          </div>
          <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-brand-300 transition-colors duration-300">
            Back to top <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </Section>
    </footer>
  );
};
