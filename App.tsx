import React from 'react';
import { PageBackdrop } from './components/PageBackdrop';
import { CursorSpotlight } from './components/CursorSpotlight';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Story } from './components/Story';
import { Skills } from './components/Skills';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative bg-surface-50 min-h-screen text-zinc-800 font-sans selection:bg-brand-500/20 selection:text-brand-900 overflow-x-hidden">
      <PageBackdrop />
      <CursorSpotlight />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Story />
          <Skills />
          <Expertise />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
