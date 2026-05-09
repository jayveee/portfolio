import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'BHS — Joanna Veloria',
  description:
    'UX case study: Designing a behavioural health services website using cognitive design principles for TYIA, a non-profit serving adults with mental illness and intellectual disabilities.',
}

const cap = 'px-5 sm:px-8 md:px-16 lg:px-24'

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-zinc-50 border border-zinc-200 flex items-center justify-center ${className}`}
    >
      <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest text-center px-4 leading-loose">
        {label}
      </span>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-neutral-200 pt-6">
      <p className="text-5xl sm:text-6xl font-bold tracking-tight mb-2">{value}</p>
      <p className="text-sm text-neutral-500 leading-snug max-w-[180px]">{label}</p>
    </div>
  )
}

function Principle({
  law,
  title,
  body,
}: {
  law: string
  title: string
  body: string
}) {
  return (
    <div className="border-t border-neutral-100 pt-8">
      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-2">{law}</p>
      <p className="font-bold text-sm uppercase tracking-tight mb-3">{title}</p>
      <p className="text-sm text-neutral-500 leading-relaxed max-w-xl">{body}</p>
    </div>
  )
}

export default function BHSPage() {
  const idx = projects.findIndex((p) => p.slug === 'bhs')
  const next = projects[(idx + 1) % projects.length]

  return (
    <main className="min-h-screen max-w-[1440px] mx-auto text-black">

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 bg-white border-b border-neutral-100 ${cap} py-4 sm:py-5 flex items-center justify-between`}
      >
        <Link
          href="/"
          className="font-semibold tracking-tight text-sm hover:opacity-50 transition-opacity"
        >
          Joanna Veloria
        </Link>
        <nav className="flex gap-6 sm:gap-8 text-sm">
          <Link href="/#work" className="hover:opacity-50 transition-opacity">Work</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
        </nav>
      </header>

      {/* Hero banner */}
      <div className="w-full bg-zinc-900 h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] flex items-center justify-center overflow-hidden">
        <span className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-bold select-none leading-none tracking-tighter px-4 text-center text-white/10">
          BHS
        </span>
      </div>

      {/* Project header */}
      <section className={`${cap} pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-neutral-100`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-mono text-neutral-300 block mb-2">05</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              BHS
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {['Web', 'UX/UI Design', 'Cognitive Design', 'Non-profit'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 border border-neutral-200 text-neutral-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: 'Role', value: 'UX/UI Designer' },
            { label: 'Client', value: 'TYIA (non-profit)' },
            { label: 'Timeline', value: '2023–2024' },
            { label: 'Team', value: 'Internationally distributed' },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                {m.label}
              </p>
              <p className="text-sm text-neutral-700">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Overview
          </p>
          <div className="space-y-4">
            <p className="text-lg sm:text-xl leading-relaxed text-neutral-700 max-w-2xl">
              TYIA (Transforming Youths into Adults) is a non-profit offering behavioral health
              services for children and adults with intellectual disabilities and mental illness.
              Their BHS services were buried inside a general website — we were brought in to give
              them a dedicated, standalone presence.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              I worked within an international cross-functional team of PMs, researchers, and
              designers alongside the TYIA CEO and developers. My role spanned IA, mood boards,
              and low-to-high fidelity mockups — with a particular focus on getting the information
              architecture right for a highly sensitive audience.
            </p>
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            The challenge
          </p>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              The previous site had no analytics — no qualitative data, no usage insights, nothing
              to build from. And given the sensitivity of the clientele — children and adults
              navigating mental illness and intellectual disabilities — extensive user interviews
              or surveys weren't feasible.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              We had to design a 28-page website from scratch, on a tight timeline, without
              traditional research. Our solution: lean on cognitive design principles and
              established psychological research instead.
            </p>
          </div>
        </div>
      </section>

      {/* Hero mockup placeholder */}
      <div className="w-full border-y border-neutral-100">
        <Placeholder label="Homepage hero — desktop" className="h-[300px] sm:h-[420px] md:h-[520px]" />
      </div>

      {/* Our approach */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Our approach
          </p>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              Instead of user research we couldn't do, we applied four cognitive design principles
              backed by psychological research. Each principle addressed a specific design
              problem — from first impressions to form complexity to navigation patterns.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              This wasn't a workaround. It was a deliberate decision to use what we knew about
              human cognition to compensate for what we couldn't learn through primary research.
            </p>
          </div>
        </div>
      </section>

      {/* Cognitive principles */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Design decisions
          </p>
          <div className="space-y-12 max-w-3xl">

            {/* Principle 1 */}
            <Principle
              law="Aesthetic Usability Effect"
              title="Creating a positive first impression"
              body="A captivating hero grabs attention immediately — especially critical for a health services site where trust is everything. We designed for comfort and professionalism from the first scroll: intentional imagery, clear hierarchy, and a warm but clinical tone. Aesthetics here weren't decoration — they were a trust signal."
            />

            {/* Principle 1 mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Placeholder label="Hero section — before" className="aspect-video" />
              <Placeholder label="Hero section — after" className="aspect-video" />
            </div>

            {/* Principle 2 */}
            <Principle
              law="Jakob's Law"
              title="Accordion FAQ over sidebar navigation"
              body="We initially explored a sidebar with page anchors for the FAQ — useful for jumping between sections without scrolling. But for the size of our FAQ, the sidebar consumed valuable screen space and created responsive design challenges. We switched to accordion-style — a pattern users already know. Familiarity reduces friction, especially for users already navigating a stressful situation."
            />

            {/* Principle 2 mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Original — sidebar nav
                </p>
                <Placeholder label="FAQ — sidebar layout" className="aspect-video" />
                <p className="text-xs text-neutral-400 mt-2">
                  Occupied too much space, hard to implement responsively.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Revised — accordion ✓
                </p>
                <Placeholder label="FAQ — accordion layout" className="aspect-video" />
                <p className="text-xs text-neutral-400 mt-2">
                  Familiar pattern. Frees space. Easier for developers.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <Principle
              law="Tesler's Law + Hick's Law"
              title="Reducing cognitive load on intake forms"
              body="Online medical forms are notorious for overwhelming users — complex terminology, too many fields, and decision fatigue. We applied Tesler's Law (absorb complexity on the system side) and Hick's Law (fewer choices = faster decisions) to redesign the intake flow. Pre-filled fields, smart suggestions, and progressive disclosure let users focus on one question at a time rather than facing a wall of inputs."
            />

            {/* Principle 3 mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Placeholder label="Intake form — original" className="aspect-video" />
              <Placeholder label="Intake form — redesigned" className="aspect-video" />
            </div>

            {/* Principle 4 */}
            <Principle
              law="Miller's Law + Jakob's Law"
              title="Chunking the events page"
              body="The events page had a potential edge case: what happens when there are many events? A long list overwhelms. We took cues from Instagram and Amazon — load a digestible set first, then reveal more on demand. Miller's Law tells us users can hold roughly 7 items in working memory at once. Combined with Jakob's Law (use patterns people already know), pagination felt natural, not limiting."
            />

            {/* Principle 4 mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Placeholder label="Events — long list" className="aspect-video" />
              <Placeholder label="Events — paginated" className="aspect-video" />
            </div>

          </div>
        </div>
      </section>

      {/* Results */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Results
          </p>
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl mb-12">
              Despite limited research and a tight timeline, the team delivered a complete,
              handoff-ready design system with full documentation for the development team.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <Stat value="28" label="Page website design delivered" />
              <Stat value="8" label="Distinct user flows documented with screen flow charts" />
              <Stat value="32" label="Screens with full specs, annotations, and redlines" />
              <Stat value="HIPAA" label="Compliance requirements called out throughout" />
            </div>
          </div>
        </div>
      </section>

      {/* Handoff screens placeholder */}
      <div className="w-full border-y border-neutral-100 grid grid-cols-2 sm:grid-cols-3 gap-px bg-neutral-100">
        {[
          'Screen spec — homepage',
          'Screen spec — events page',
          'Screen spec — intake form',
          'User flow — intake',
          'User flow — event sign-up',
          'Design system — components',
        ].map((label) => (
          <Placeholder key={label} label={label} className="aspect-video" />
        ))}
      </div>

      {/* My contribution */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            My contribution
          </p>
          <div className="space-y-6 max-w-xl">
            {[
              {
                n: '01',
                title: 'Information Architecture',
                body: 'Mapped the full IA for optimal functionality and user flow — ensuring that users navigating sensitive health decisions could always find what they needed without frustration.',
              },
              {
                n: '02',
                title: 'Visual Direction',
                body: 'Contributed to mood boards that shaped the visual tone of the site — calm, trustworthy, and distinctly separate from the parent TYIA brand while remaining related.',
              },
              {
                n: '03',
                title: 'Low to Hi-fi Mockups',
                body: 'Crafted the full range of mockups — from early wireframes communicating layout and flow, through to high-fidelity screens ready for developer handoff.',
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-6 border-t border-neutral-100 pt-6">
                <span className="text-xs font-mono text-neutral-300 shrink-0 pt-0.5">{item.n}</span>
                <div>
                  <p className="font-bold text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Reflection
          </p>
          <div className="space-y-4 max-w-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
              This project taught me that constraints don't have to compromise quality — sometimes
              they force better decisions. Without user research to fall back on, every design
              choice had to be grounded in something defensible.
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              Cognitive design principles gave us that foundation. They're not a replacement for
              user research — but when research isn't possible, they're the most responsible
              alternative. Understanding human cognition and behaviour is design, at its core.
            </p>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            What's next
          </p>
          <div className="max-w-xl">
            <div className="flex gap-6 border-t border-neutral-100 pt-6">
              <span className="text-xs font-mono text-neutral-300 shrink-0 pt-0.5">01</span>
              <div>
                <p className="font-bold text-sm mb-1">Post-launch monitoring</p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Once the TYIA BHS site is live, the team will monitor user experience through
                  analytics and feedback — making design iterations to continuously improve the
                  experience for a sensitive and underserved audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section
        className={`${cap} py-12 sm:py-16 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}
      >
        <Link
          href="/#work"
          className="text-sm text-neutral-400 hover:text-black transition-colors"
        >
          ← All work
        </Link>
        <Link href={`/work/${next.slug}`} className="group flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400">{next.number}</span>
          <span className="text-sm font-bold uppercase tracking-tight group-hover:underline underline-offset-4 transition-all">
            {next.title} →
          </span>
        </Link>
      </section>

      {/* Footer */}
      <footer
        className={`${cap} py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-neutral-400`}
      >
        <span>© {new Date().getFullYear()} Joanna Veloria</span>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/joannaveloria"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <span>hello@joannaveloria.com</span>
        </div>
      </footer>

    </main>
  )
}
