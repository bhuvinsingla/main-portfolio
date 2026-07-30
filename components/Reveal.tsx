import React from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'scale';
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}) => {
  const [ref, visible] = useReveal<HTMLDivElement>();
  const base = variant === 'scale' ? 'reveal-scale' : 'reveal';

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
