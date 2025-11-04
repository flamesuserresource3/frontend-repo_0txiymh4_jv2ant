import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft neon gradient overlays for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(34,197,94,0.2),transparent_60%),radial-gradient(circle_at_80%_120%,rgba(34,211,238,0.2),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/40 px-3 py-1 text-xs uppercase tracking-widest text-cyan-200 backdrop-blur">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
            Cyberpunk Portfolio
          </div>
          <h1 className="text-4xl font-extrabold leading-tight drop-shadow-[0_0_20px_rgba(34,211,238,0.35)] sm:text-6xl">
            Neon Glow. Futuristic Vibes. <span className="text-cyan-300">Tech Pioneer</span>
          </h1>
          <p className="mt-4 max-w-xl text-cyan-100/90">
            I craft immersive digital experiences with cutting-edge interfaces, real-time visuals, and a passion for sleek innovation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:translate-y-[-2px] hover:bg-cyan-500/20"
            >
              <Rocket className="h-5 w-5 transition group-hover:rotate-12" />
              View Projects
            </a>
            <div className="ml-1 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-cyan-400/40 bg-black/40 p-3 text-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:bg-cyan-500/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-cyan-400/40 bg-black/40 p-3 text-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:bg-cyan-500/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
