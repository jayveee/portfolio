import Link from 'next/link'

export const metadata = {
  title: 'About — Joanna Veloria',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-[1440px] mx-auto text-black">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 px-5 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-sm hover:opacity-50 transition-opacity">
          Joanna Veloria
        </Link>
        <nav className="flex gap-6 sm:gap-8 text-sm">
          <Link href="/#work" className="hover:opacity-50 transition-opacity">Work</Link>
          <Link href="/about" className="font-semibold">About</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 pt-14 sm:pt-20 md:pt-24 pb-16 sm:pb-24 border-b border-neutral-100">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 sm:mb-10 max-w-4xl">
          Designer who cares about the details.
        </h1>
        <p className="text-neutral-500 text-base sm:text-lg max-w-xl leading-relaxed">
          The copy, the transitions, the edge cases — the parts most people skip. That's where I live.
        </p>
      </section>

      {/* Bio sections */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 border-b border-neutral-100">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">Background</p>
          <div className="space-y-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            <p>
              I'm a product designer with experience across healthcare, social good, and consumer apps. I care about shipping things that actually work — not just look good in a Figma presentation.
            </p>
            <p>
              Most recently I've been leading design and product at Una, a cycle-synced wellbeing platform. Before that I worked on Presafe at AlzCare Labs for four years, designing iOS and Android safety tools for dementia caregivers.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 border-b border-neutral-100">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">How I work</p>
          <div className="space-y-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            <p>
              I'm most useful when I'm embedded early — in discovery, not just delivery. I've run usability tests, led card sorting and tree testing, and translated messy research into clear product decisions.
            </p>
            <p>
              I've also managed Agile transformations, built design systems from zero, and worked directly with engineers on handoff. I understand the full stack enough to have useful conversations at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 border-b border-neutral-100">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">Currently</p>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Open to full-time and contract opportunities. I'm looking for teams that care about design quality and give designers real ownership — not just seats at the table.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 border-b border-neutral-100">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">Contact</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://linkedin.com/in/joannaveloria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 hover:opacity-50 transition-opacity w-fit"
            >
              LinkedIn →
            </a>
            <span className="text-sm text-neutral-500">hello@joannaveloria.com</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 sm:px-8 md:px-16 lg:px-24 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-neutral-400">
        <span>© {new Date().getFullYear()} Joanna Veloria</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/joannaveloria" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <span>hello@joannaveloria.com</span>
        </div>
      </footer>

    </main>
  )
}
