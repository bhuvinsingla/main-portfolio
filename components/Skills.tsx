import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { Terminal, Database, Cpu, Brain } from 'lucide-react';
import { Reveal } from './Reveal';

const getIcon = (category: string) => {
  if (category.includes('Core')) return <Terminal className="w-5 h-5 text-brand-400" />;
  if (category.includes('AI')) return <Brain className="w-5 h-5 text-brand-400" />;
  if (category.includes('Backend')) return <Database className="w-5 h-5 text-brand-400" />;
  if (category.includes('Blockchain')) return <Cpu className="w-5 h-5 text-brand-400" />;
  return <Terminal className="w-5 h-5 text-brand-400" />;
};

export const Skills: React.FC = () => {
  return (
    <Section index="03" id="skills" title="Technical Arsenal" subtitle="Technologies and tools I use to build scalable solutions.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SKILLS.map((group, idx) => (
          <Reveal key={group.category} delay={idx * 90} variant="scale">
            <div className={`glass shape-card shape-skill-${idx} card-glass p-6 h-full group`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 group-hover:border-brand-500/40 transition-colors">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-semibold text-zinc-100 text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-white/5 text-zinc-400 rounded-md text-xs border border-white/5 hover:text-brand-300 hover:border-brand-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
