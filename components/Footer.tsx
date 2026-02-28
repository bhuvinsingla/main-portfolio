import React from 'react';
import { Section } from './Section';
import { CERTIFICATES, AWARDS, PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Trophy, Award, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-900 border-t border-slate-800">
      <Section id="achievements" className="pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATES.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{cert.title}</h4>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-brand-500" />
              Honors & Awards
            </h3>
            {AWARDS.map((award, idx) => (
              <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Trophy className="w-24 h-24" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{award.title}</h4>
                <p className="text-brand-400 font-medium text-sm mb-4">{award.description}</p>
                <p className="text-slate-300 text-sm">{award.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl">
            Remote · EST overlap · Open to full-time. Let&apos;s build something.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
                rel={link.label === 'Email' || link.label === 'Phone' ? undefined : 'noreferrer'}
                className="group flex items-center gap-4 p-6 rounded-xl border border-slate-700/80 bg-slate-800/40 hover:border-brand-500/40 hover:bg-slate-800/60 transition-all"
              >
                <div className="p-3 rounded-lg bg-slate-900/80 group-hover:bg-brand-500/10 transition-colors">
                  <link.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-400 transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 uppercase tracking-wider">{link.label}</p>
                  <p className="text-base font-medium text-white truncate">
                    {link.label === 'Email' ? PERSONAL_INFO.email : link.label === 'Phone' ? PERSONAL_INFO.phone : 'View profile'}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          
          <div className="flex gap-6 my-4 md:my-0">
             {SOCIAL_LINKS.map(link => (
               <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                 {link.label}
               </a>
             ))}
          </div>

          <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-brand-400 transition-colors">
            Back to top <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </Section>
    </footer>
  );
};
