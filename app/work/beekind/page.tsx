import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'BeeKind — Joanna Veloria',
  description:
    'UX case study: A social good mobile app connecting volunteers with community organizations. Research, wireframing, hi-fi design, and two rounds of usability testing.',
}

const cap = 'px-5 sm:px-8 md:px-16 lg:px-24'

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-amber-50 border border-amber-100 flex items-center justify-center ${className}`}
    >
      <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest text-center px-4 leading-loose">
        {label}
      </span>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-neutral-200 pt-6">
      <p className="text-5xl sm:text-6xl font-bold tracking-tight mb-2">{value}</p>
      <p className="text-sm text-neutral-500 leading-snug max-w-[160px]">{label}</p>
    </div>
  )
}

export default function BeeKindPage() {
  const idx = projects.findIndex((p) => p.slug === 'beekind')
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
      <div className="w-full bg-amber-50 h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] flex items-center justify-center overflow-hidden">
        <span className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-bold select-none leading-none tracking-tighter px-4 text-center text-amber-200">
          BEEKIND
        </span>
      </div>

      {/* Project header */}
      <section className={`${cap} pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-neutral-100`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-mono text-neutral-300 block mb-2">03</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              BeeKind
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {['Mobile', 'Research', 'Usability Testing', 'Passion Project'].map((tag) => (
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
            { label: 'Role', value: 'UX Designer' },
            { label: 'Timeline', value: '2023–2024' },
            { label: 'Team', value: '5 designers, globally distributed' },
            { label: 'Type', value: 'Passion project' },
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
              BeeKind started as a question: what if volunteering felt as easy as ordering food? A
              group of designers from across the world — no budget, no OKRs, no client brief — came
              together to build something they genuinely cared about.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              The app connects volunteers with local community organizations, making it easy to find
              events, sign up, log hours, and see real impact. What started as a passion project
              became a full-cycle UX process: research, personas, wireframes, hi-fidelity design,
              and two rounds of usability testing.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Problem
          </p>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              Volunteering platforms feel transactional and cold. Users log in once, struggle to
              find relevant opportunities, and don't come back. The platforms that do exist
              prioritize organizational needs over the volunteer's experience.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              After analyzing competitors — VolunteerMatch, Idealist, All for Good — the pattern was
              clear: none of them made the volunteer feel seen. Finding events required too many
              steps. Impact was invisible. The reward for showing up was an hour logged in a
              spreadsheet.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Research
          </p>
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              User surveys revealed two distinct motivation profiles — and two very different design
              problems to solve simultaneously.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="bg-neutral-50 p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  Active volunteers
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>→ Motivated by community connection</li>
                  <li>→ Want to see their impact clearly</li>
                  <li>→ Value continuity with trusted orgs</li>
                  <li>→ Frustrated by poor coordination</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  Potential volunteers
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>→ Don't know where to start</li>
                  <li>→ Overwhelmed by commitment level</li>
                  <li>→ Need a low-friction first step</li>
                  <li>→ Respond to social proof</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Who we designed for
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="border border-neutral-200 p-6">
              <div className="w-8 h-8 rounded-full bg-amber-100 mb-4" />
              <p className="font-bold text-sm mb-1">Maria Lopez</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Regular volunteer
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Active in her community, tech-comfortable, motivated by connection and visible
                impact. Wants to find nearby opportunities and track her contributions over time.
              </p>
            </div>
            <div className="border border-neutral-200 p-6">
              <div className="w-8 h-8 rounded-full bg-amber-100 mb-4" />
              <p className="font-bold text-sm mb-1">Denese Manley</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Potential volunteer
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Wants to give back but finds the process intimidating. Time-strapped, needs a clear
                path to a first experience, and needs to see the value before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Process
          </p>
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              From user flows and IA through two rounds of usability testing with real participants.
              Each round fed directly back into the design.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
              {[
                '01 — User flows',
                '02 — Wireframes',
                '03 — Mid-fi prototype',
                '04 — Hi-fi design',
                '05 — Usability testing ×2',
                '06 — Before & after',
              ].map((step) => (
                <div
                  key={step}
                  className="bg-amber-50 px-3 py-2.5 text-[11px] font-mono text-amber-500"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wireframe placeholders — full bleed */}
      <div className="w-full border-y border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-100">
        {[
          'Wireframe — Home',
          'Wireframe — Find Events',
          'Wireframe — Event Detail',
          'Wireframe — Sign Up',
        ].map((label) => (
          <Placeholder key={label} label={label} className="aspect-[9/16]" />
        ))}
      </div>

      {/* Hi-fi placeholders */}
      <div className="w-full border-b border-neutral-100 grid grid-cols-2 sm:grid-cols-3 gap-px bg-neutral-100">
        {['Hi-fi — Home', 'Hi-fi — Event Detail', 'Hi-fi — My Impact'].map((label) => (
          <Placeholder key={label} label={label} className="aspect-[9/16]" />
        ))}
      </div>

      {/* Results */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Results
          </p>
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl mb-12">
              Two rounds of usability testing with real participants. The numbers validate the design
              decisions — and the before/afters show exactly where they paid off.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <Stat value="96%" label="Avg. task success rate across all tested flows" />
              <Stat value="↑ SUS" label="System usability score improved round over round" />
              <Stat value="↓ Errors" label="Failure rate reduced after targeted redesign" />
              <Stat value="100%" label="Success rate on profile editing after iteration" />
            </div>
          </div>
        </div>
      </section>

      {/* B&A: Finding Events */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Before & after
          </p>
          <div>
            <h3 className="font-bold uppercase tracking-tight mb-2">Finding Events</h3>
            <p className="text-sm text-neutral-500 max-w-xl mb-8">
              The original flow required too many taps to reach relevant local events. After
              testing, we restructured discovery to surface nearby opportunities immediately on
              the home screen.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-xl">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Before
                </p>
                <Placeholder label="Finding Events — Before" className="aspect-[9/16]" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  After
                </p>
                <Placeholder label="Finding Events — After" className="aspect-[9/16]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B&A: Event Sign-Up */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Before & after
          </p>
          <div>
            <h3 className="font-bold uppercase tracking-tight mb-2">Event Sign-Up</h3>
            <p className="text-sm text-neutral-500 max-w-xl mb-8">
              Sign-up had too many fields and no confirmation state. We reduced friction by
              pre-filling available info and adding a clear confirmation screen with calendar
              integration.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-xl">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Before
                </p>
                <Placeholder label="Sign-Up — Before" className="aspect-[9/16]" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  After
                </p>
                <Placeholder label="Sign-Up — After" className="aspect-[9/16]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B&A: QR Code */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Before & after
          </p>
          <div>
            <h3 className="font-bold uppercase tracking-tight mb-2">Log Hours with QR Code</h3>
            <p className="text-sm text-neutral-500 max-w-xl mb-8">
              Logging volunteer hours was buried deep in the app. We introduced a QR scan flow so
              volunteers could check in and out at the event location in a single tap.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-xl">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Before
                </p>
                <Placeholder label="QR Code — Before" className="aspect-[9/16]" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  After
                </p>
                <Placeholder label="QR Code — After" className="aspect-[9/16]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A/B: Calendar */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            A/B test
          </p>
          <div>
            <h3 className="font-bold uppercase tracking-tight mb-2">Calendar Functionality</h3>
            <p className="text-sm text-neutral-500 max-w-xl mb-8">
              We tested a dropdown date selector against a horizontal scroll picker. Testing
              confirmed scroll navigation felt more native and produced fewer errors on both iOS
              and Android.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-xl">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Option A — Dropdown
                </p>
                <Placeholder label="Calendar — Dropdown" className="aspect-[9/16]" />
                <p className="text-xs text-neutral-400 mt-3">
                  Higher error rate. Felt unfamiliar on mobile.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-3">
                  Option B — Scroll ✓
                </p>
                <Placeholder label="Calendar — Scroll" className="aspect-[9/16]" />
                <p className="text-xs text-neutral-400 mt-3">
                  Lower error rate. Matched native iOS/Android patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            What's next
          </p>
          <div className="space-y-6 max-w-xl">
            {[
              {
                n: '01',
                title: 'In-App Messaging',
                body: 'Direct communication between volunteers and organizations to reduce coordination friction.',
              },
              {
                n: '02',
                title: 'Friends & Networking',
                body: 'A social layer to let volunteers see what their connections are joining and invite each other.',
              },
              {
                n: '03',
                title: 'Feedback & Reviews',
                body: 'Two-way review system so volunteers can rate organizations and orgs can recognize their regulars.',
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
              Passion projects teach you things client work can't. Without business constraints,
              every decision has to stand on its own design merit — you can't hide behind scope
              or budget.
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              Working across time zones with people I'd never met pushed the team to be intentional
              about async communication and documentation. The constraints made us better designers.
            </p>
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
