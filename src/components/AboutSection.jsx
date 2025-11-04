import React from 'react';
import { User, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-black px-6 py-20 text-cyan-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="rounded-md border border-cyan-400/50 bg-cyan-500/10 p-2 shadow-[0_0_18px_rgba(34,211,238,0.35)]"><User className="h-5 w-5" /></span>
          <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* 3D-like Profile Card */}
          <motion.div
            initial={{ rotateX: 0, rotateY: 0 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="group relative h-72 rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-900/20 via-black to-black p-1 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            style={{ perspective: 1000 }}
          >
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(34,211,238,0.18),transparent_50%)]" />
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-cyan-400/60 bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 shadow-[0_0_30px_rgba(34,211,238,0.45)]" />
                <h3 className="text-xl font-semibold text-white">Your Name</h3>
                <p className="text-sm text-cyan-100/80">Frontend Engineer • Creative Coder</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                background:
                  'conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.25), transparent 30%, rgba(34,197,94,0.25), transparent 60%)'
              }} />
            </div>
          </motion.div>

          <div className="space-y-5">
            <p className="text-cyan-100/90">
              I design and build reactive, futuristic web interfaces with a focus on performance, accessibility, and immersive visuals.
              My vibe blends neon aesthetics with clean engineering.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {['React', 'TypeScript', 'Three.js', 'Tailwind', 'Framer Motion', 'FastAPI'].map((chip) => (
                <div
                  key={chip}
                  className="rounded-lg border border-cyan-400/40 bg-cyan-500/5 px-3 py-2 text-center text-sm text-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                >
                  {chip}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-cyan-100">
              <Code2 className="h-5 w-5" />
              <span className="text-sm">Open to freelance and collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
