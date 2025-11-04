import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description: 'Headless storefront with real-time 3D product previews and shimmering UI.',
    tags: ['React', 'Spline', 'Stripe'],
    href: '#',
  },
  {
    title: 'Synthwave Dashboard',
    description: 'Analytics cockpit with live charts, motion transitions, and dark neon glow.',
    tags: ['Vite', 'Tailwind', 'D3.js'],
    href: '#',
  },
  {
    title: 'Hologram Chat',
    description: 'Realtime chat with WebRTC effects and cyberpunk theming end-to-end.',
    tags: ['WebRTC', 'Node', 'Framer'],
    href: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative w-full bg-black px-6 py-20 text-cyan-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
          <p className="mt-2 text-cyan-100/80">A selection of builds blending performance with neon aesthetics.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative flex flex-col rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-900/10 via-black to-black p-5 shadow-[0_0_24px_rgba(34,211,238,0.18)] transition hover:translate-y-[-3px] hover:shadow-[0_0_34px_rgba(34,211,238,0.35)]"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 blur transition duration-300 group-hover:opacity-100" style={{
                background:
                  'radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,0.25), transparent 60%)',
              }} />
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-cyan-300 opacity-80 transition group-hover:opacity-100" />
              </div>
              <p className="mb-4 text-sm text-cyan-100/80">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-cyan-400/40 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-100">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
