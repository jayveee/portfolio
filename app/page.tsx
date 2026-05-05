'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/lib/projects'

const cap = 'max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 lg:px-24'

const heroText = 'Product designer crafting thoughtful digital experiences.'

export default function Home() {
  const heroRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = gsap.context(() => {
      // 1. Hero headline — words stagger up on load
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll('.word'), {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.055,
          ease: 'power3.out',
          delay: 0.05,
        })
      }

      // Project cards — fade up on scroll
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        gsap.from(card, {
          y: 48,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // 2. Thumbnail parallax — label drifts inside overflow-hidden box
      gsap.utils.toArray<HTMLElement>('.thumb-inner').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50 },
          {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('.thumb-wrap'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })

      // 4. Project number count-up
      gsap.utils.toArray<HTMLElement>('.proj-number').forEach((el) => {
        const target = parseInt(el.getAttribute('data-num') ?? '0')
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          onUpdate() {
            el.textContent = String(Math.round(obj.val)).padStart(2, '0')
          },
        })
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen text-black">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 py-4 sm:py-5">
        <div className={`${cap} flex items-center justify-between`}>
          <span className="font-semibold tracking-tight text-sm">Joanna Veloria</span>
          <nav className="flex gap-6 sm:gap-8 text-sm">
            <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
            <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className={`${cap} pt-14 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32`}>
        <h1
          ref={heroRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8 max-w-5xl"
        >
          {heroText.split(' ').map((word, i) => (
            <span key={i} className="word inline-block mr-[0.22em]">{word}</span>
          ))}
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

        <div className="border-t border-black">
          <div className={`${cap} pt-6 sm:pt-8 mb-10 sm:mb-14 flex items-center justify-between`}>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Selected work</span>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">{projects.length} projects</span>
          </div>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20 md:gap-28">
          {projects.map((p, i) => (
            <div key={p.slug} className="project-card">
              <Link href={`/work/${p.slug}`} className="group block">

                {/* Project label row */}
                <div className={`${cap} flex items-baseline justify-between mb-3 sm:mb-4`}>
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span
                      className="proj-number text-xs font-mono text-neutral-300"
                      data-num={i + 1}
                    >
                      00
                    </span>
                    <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">{p.title}</h2>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{p.year}</span>
                </div>

                {/* Thumbnail — full bleed, parallax on inner label */}
                <div className={`thumb-wrap w-full ${p.bg} h-52 sm:h-72 md:h-[420px] lg:h-[520px] 2xl:h-[640px] flex items-center justify-center overflow-hidden`}>
                  <span className={`thumb-inner text-[60px] sm:text-[90px] md:text-[130px] lg:text-[160px] 2xl:text-[200px] font-bold select-none leading-none tracking-tighter px-4 text-center ${
                    p.bg.includes('800') || p.bg.includes('900') ? 'text-white/10' : 'text-black/10'
                  }`}>
                    {p.label}
                  </span>
                </div>

                {/* Project info row */}
                <div className={`${cap} mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4`}>
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
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className={`${cap} py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-neutral-400`}>
          <span>© {new Date().getFullYear()} Joanna Veloria</span>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/joannaveloria" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <span>hello@joannaveloria.com</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
