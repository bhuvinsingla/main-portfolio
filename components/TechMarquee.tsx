import React from 'react';
import { SKILLS } from '../constants';

const ITEMS = [...new Set(SKILLS.flatMap((g) => g.skills))];

export const TechMarquee: React.FC = () => {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative z-10 py-5 border-y border-white/5 overflow-hidden marquee-mask">
      <div className="marquee-track">
        {row.map((skill, i) => (
          <span key={`${skill}-${i}`} className="marquee-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
