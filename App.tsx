import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Story } from './components/Story';
import { Skills } from './components/Skills';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-surface-900 min-h-screen text-slate-100 font-sans selection:bg-brand-500/30 selection:text-brand-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story />
        <Skills />
        <Expertise />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
