import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Story', href: '#story' },
    { label: 'Skills', href: '#skills' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="nav-shell fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
        <div
          className={`mx-auto max-w-4xl pointer-events-auto transition-all duration-500 rounded-2xl ${
            isScrolled
              ? 'glass-strong shadow-lg shadow-zinc-900/5 border border-zinc-200/80 px-4 py-2'
              : 'bg-transparent px-2 py-2'
          }`}
        >
          <div className="flex items-center justify-between h-12">
            <a href="#" className="text-sm font-semibold text-zinc-800 font-mono tracking-tight pl-2">
              {PERSONAL_INFO.name.split(' ')[0]}<span className="text-brand-600">.dev</span>
            </a>

            <div className="hidden md:flex gap-1">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link-anim px-3 py-1.5 text-xs font-medium rounded-lg hover:bg-zinc-100/80">
                  {link.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-zinc-800 p-2 rounded-lg hover:bg-zinc-100/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed top-[4.5rem] left-4 right-4 z-50 glass-strong rounded-2xl overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-600 hover:text-brand-600 py-3 px-3 rounded-xl hover:bg-zinc-100/80 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
