import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  index?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, index, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <Reveal className="mb-12">
          <div className="flex items-start gap-4 md:gap-8">
            {index && (
              <span className="section-index font-mono text-4xl md:text-5xl font-bold leading-none select-none shrink-0 pt-1">
                {index}
              </span>
            )}
            <div>
              {title && (
                <h2 className="font-display text-3xl md:text-[2.75rem] text-zinc-900 mb-3 relative inline-block tracking-tight leading-tight">
                  {title}
                  <span className="section-title-line absolute -bottom-1 left-0 w-full max-w-[120px] h-px bg-gradient-to-r from-brand-500 via-accent-500 to-transparent block" />
                </h2>
              )}
              {subtitle && (
                <p className="text-zinc-600 mt-1 max-w-2xl text-base md:text-lg leading-relaxed">{subtitle}</p>
              )}
            </div>
          </div>
        </Reveal>
      )}
      {children}
    </section>
  );
};
