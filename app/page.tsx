'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '@/lib/projects'

export default function Home() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 px-5 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-5 flex items-center justify-between">
        <span className="font-semibold tracking-tight text-sm">Joanna Veloria</span>
        <nav className="flex gap-6 sm:gap-8 text-sm">
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 pt-14 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8 max-w-5xl">
          Product designer crafting thoughtful digital experiences.
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg mb-8 sm:mb-10">
          Currently open to new opportunities.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-50 transition-opacity"
        >
          View selected work →
        </a>
      </section>

      {/* Work */}
      <section id="work" className="pb-20 sm:pb-32">
        <div className="px-5 sm:px-8 md:px-16 lg:px-24 border-t border-black pt-6 sm:pt-8 mb-10 sm:mb-14 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Selected work</span>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">{projects.length} projects</span>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20 md:gap-28">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={reduceMotion ? {} : { opacity: 0, y: 48 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
            >
            <Link href={`/work/${p.slug}`} className="group block">

              {/* Project label row */}
              <div className="px-5 sm:px-8 md:px-16 lg:px-24 flex items-baseline justify-between mb-3 sm:mb-4">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs font-mono text-neutral-300">{p.number}</span>
                  <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">{p.title}</h2>
                </div>
                <span className="text-xs font-mono text-neutral-400">{p.year}</span>
              </div>

              {/* Thumbnail */}
              <div className={`w-full ${p.bg} h-52 sm:h-72 md:h-[420px] lg:h-[520px] flex items-center justify-center overflow-hidden`}>
                <span className={`text-[60px] sm:text-[90px] md:text-[130px] lg:text-[160px] font-bold select-none leading-none tracking-tighter px-4 text-center ${
                  p.bg.includes('800') || p.bg.includes('900') ? 'text-white/10' : 'text-black/10'
                }`}>
                  {p.label}
                </span>
              </div>

              {/* Project info row */}
              <div className="px-5 sm:px-8 md:px-16 lg:px-24 mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 max-w-xl">
                  <p className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">{p.role}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{p.description}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-3 shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 border border-neutral-200 text-neutral-500 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium group-hover:underline underline-offset-4 transition-all">
                    Read case study →
                  </span>
                </div>
              </div>

            </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 sm:px-8 md:px-16 lg:px-24 py-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-neutral-400">
        <span>© {new Date().getFullYear()} Joanna Veloria</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/joannaveloria" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <span>hello@joannaveloria.com</span>
        </div>
      </footer>

    </main>
  )
}
