import React from 'react';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Subtle page background glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(50%_50%_at_90%_20%,rgba(16,185,129,0.08),transparent_60%)]" />

      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-wide text-cyan-200 drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">CYBER•PORT</a>
          <nav className="hidden gap-6 text-sm text-cyan-100/90 sm:flex">
            <a href="#about" className="hover:text-cyan-200">About</a>
            <a href="#projects" className="hover:text-cyan-200">Projects</a>
            <a href="#contact" className="hover:text-cyan-200">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero3D />
        <AboutSection />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
