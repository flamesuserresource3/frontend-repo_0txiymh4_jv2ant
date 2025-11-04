import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-black px-6 py-20 text-cyan-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white">Contact</h2>
          <p className="mt-2 text-cyan-100/80">Let’s build something futuristic together.</p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 text-cyan-200 underline-offset-4 hover:underline"
            >
              <Mail className="h-5 w-5" /> you@example.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-black/40 px-3 py-2 text-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:bg-cyan-500/10"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-black/40 px-3 py-2 text-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:bg-cyan-500/10"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>

          <p className="text-sm text-cyan-100/70">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>

      {/* Top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
}
