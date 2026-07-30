import React from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { Code2, Layers, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { TiltCard } from './TiltCard';

const PROJECT_SHAPES = ['shape-project-a', 'shape-project-b', 'shape-project-c'] as const;

const ProjectCard: React.FC<{
  project: typeof PROJECTS[0];
  featured?: boolean;
  shapeClass: string;
}> = ({ project, featured, shapeClass }) => (
  <TiltCard className={`glass shape-card ${shapeClass} card-glass border-beam-wrap group flex flex-col h-full ${featured ? 'bento-featured' : ''}`}>
    <div className={`p-6 flex-1 flex flex-col ${featured ? 'md:p-8' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
            <Layers className="w-5 h-5" />
          </div>
          {featured && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent-500/20 text-accent-400 border border-accent-500/30">
              Featured
            </span>
          )}
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${
            project.status === 'ongoing'
              ? 'bg-brand-500/15 text-brand-300 border-brand-500/30'
              : 'bg-white/5 text-zinc-400 border-white/10'
          }`}>
            {project.status === 'ongoing' ? 'Live' : 'Shipped'}
          </span>
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="p-2 shape-social glass text-zinc-500 hover:text-brand-400 transition-colors flex items-center justify-center w-9 h-9">
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
      <h3 className={`font-display font-semibold text-zinc-50 mb-2 group-hover:text-brand-300 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
        {project.title}
      </h3>
      <p className={`text-zinc-400 leading-relaxed flex-1 ${featured ? 'text-base mb-6' : 'text-sm mb-5'}`}>{project.description}</p>
      {project.features && (
        <ul className={`space-y-2 mb-5 ${featured ? 'grid sm:grid-cols-2 gap-x-4' : ''}`}>
          {project.features.map((feature, i) => (
            <li key={i} className="flex gap-2 text-xs text-zinc-400">
              <Code2 className="w-3 h-3 min-w-[12px] mt-0.5 text-brand-400" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className="pt-4 border-t border-white/10">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-white/5 text-zinc-500 text-xs rounded-md border border-white/5 font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </TiltCard>
);

export const Projects: React.FC = () => {
  const [featured, ...rest] = PROJECTS;

  return (
    <Section index="05" id="projects" title="Shipped Products" subtitle="Real products I built and deployed - no fluff, just what ships.">
      <div className="projects-bento">
        <Reveal className="projects-bento__featured" variant="scale">
          <ProjectCard project={featured} featured shapeClass="shape-project-featured" />
        </Reveal>
        {rest.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 70} variant="scale">
            <ProjectCard project={project} shapeClass={PROJECT_SHAPES[idx % PROJECT_SHAPES.length]} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
