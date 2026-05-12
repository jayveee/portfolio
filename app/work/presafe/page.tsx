import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'PreSafe — Joanna Veloria',
  description:
    'UX/UI case study: Long-term designer on a dementia caregiver safety app. Designed the original onboarding, ran user testing, hired an external audit team, and used findings to redesign core flows — without following their proposed direction.',
}

const cap = 'px-5 sm:px-8 md:px-16 lg:px-24'

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-blue-50 border border-blue-100 flex items-center justify-center ${className}`}
    >
      <span className="text-[10px] font-mono text-blue-300 uppercase tracking-widest text-center px-4 leading-loose">
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

export default function PresafePage() {
  const idx = projects.findIndex((p) => p.slug === 'presafe')
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
      <div className="w-full bg-slate-800 h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] flex items-center justify-center overflow-hidden">
        <span className="text-[38px] sm:text-[64px] md:text-[100px] lg:text-[130px] font-bold select-none leading-none tracking-tighter px-4 text-center text-slate-700">
          PRESAFE
        </span>
      </div>

      {/* Project header */}
      <section className={`${cap} pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-neutral-100`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-mono text-neutral-300 block mb-2">04</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              PreSafe
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {['iOS', 'Mobile', 'Healthcare', 'UX/UI Design', 'Safety'].map((tag) => (
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
            { label: 'Timeline', value: '4+ years · 2019–2023' },
            { label: 'Team', value: 'Small startup + external audit team' },
            { label: 'Platform', value: 'iOS · Android' },
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
              PreSafe is a mobile safety app that gives caregivers real-time awareness of
              their loved one&apos;s location, proximity to hazards, and exposure to high-risk
              conditions — so people living with dementia can stay independent longer.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              I joined PreSafe early and designed the product for four years — from the
              original onboarding and registration flow through to the core map, SOS, and
              care team features. Along the way, the team ran our own user testing and
              later brought in an external UX team to audit the beta app. I used their
              findings to drive a redesign of the onboarding and navigation — but made my
              own design calls rather than implementing their proposed direction.
            </p>
          </div>
        </div>
      </section>

      {/* The product */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            The product
          </p>
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              6.5 million Americans live with dementia today — and 60% have wandered from
              home at least once. PreSafe is built for the caregivers: family members and
              professional PCGs who need peace of mind without taking away the person&apos;s
              independence.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                {
                  value: '72%',
                  label: 'Get peace of mind',
                  body: 'of caregivers report that being a care provider negatively impacts their mental health. PreSafe surfaces real-time location and hazard alerts so caregivers can step back without stepping away.',
                },
                {
                  value: '60%',
                  label: 'Preserve independence',
                  body: 'of caregivers say their loved one has wandered at least once. A customizable safe zone lets caregivers set boundaries without confining the person they care for.',
                },
                {
                  value: '54%',
                  label: 'Build community',
                  body: 'of caregivers have zero help from family and full responsibility. PreSafe lets caregivers build a care team — adding members, joining local volunteer teams, and sharing monitoring responsibilities.',
                },
              ].map((s) => (
                <div key={s.label} className="bg-neutral-50 p-5">
                  <p className="text-3xl font-bold tracking-tight mb-1">{s.value}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                    {s.label}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I designed */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            What I designed
          </p>
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              As the embedded designer on a small startup team, I owned the UX and UI
              across the full product — not just one feature area.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {[
                {
                  n: '01',
                  title: 'Onboarding & registration',
                  body: 'The original onboarding flow — sign up, profile photo, account creation, and carepartner QR pairing — designed from scratch. Broke carepartner setup into a multi-step series to reduce cognitive load and added contextual explainers for each camera and permission request.',
                },
                {
                  n: '02',
                  title: 'Map & hazard view',
                  body: 'The core caregiving screen. PWD avatar pin with safe zone radius, road and water hazard icons with contextual bottom sheets, hybrid map toggle, SOS button, and directional tools. Designed edge states for no PWD, lost signal, and location tracking off.',
                },
                {
                  n: '03',
                  title: 'Navigation & information architecture',
                  body: 'A slide-out nav drawer with two clear sections — Caregiving (Location, Safety check, Weather alerts, Alert history, Hazard index, Safe zone) and You (My Care Teams, Join a team, Account). SOS surfaced prominently in the drawer itself, not buried.',
                },
                {
                  n: '04',
                  title: 'SOS & care teams',
                  body: 'SOS flow covering initiation, in-progress state, and resolution. Care Teams with conditional states: no PWD yet, PWD only, volunteer teams, mixed. Profile views for each team member with caregiving relationships clearly labeled.',
                },
                {
                  n: '05',
                  title: 'In-app messaging',
                  body: 'A team messaging thread scoped to active SOS events — caregivers and care team members can communicate in real time during an alert without leaving the app. Designed as a persistent thread tied to the SOS state: visible while SOS is active, archived when resolved. This reduced the need for out-of-band texting during high-stress moments.',
                },
              ].map((item) => (
                <div key={item.n} className="border-t border-neutral-100 pt-6">
                  <span className="text-xs font-mono text-neutral-300 block mb-2">{item.n}</span>
                  <p className="font-bold text-sm mb-2">{item.title}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      <div className="w-full border-y border-neutral-100 grid grid-cols-2 sm:grid-cols-5 gap-px bg-neutral-100">
        <Placeholder label="Map view — PWD avatar pin, safe zone radius, road & water hazard icons, SOS button top right" className="aspect-[9/16]" />
        <Placeholder label="Nav drawer — Caregiving section: Location, Safety check, Weather alerts, Alert history, Hazard index, Safe zone" className="aspect-[9/16]" />
        <Placeholder label="SOS in progress — red banner, active alert state, resolve CTA" className="aspect-[9/16]" />
        <Placeholder label="In-app messaging — SOS chat thread, care team members, real-time messages during active alert" className="aspect-[9/16]" />
        <Placeholder label="Care Teams — profile view with primary care for + volunteer teams, conditional states" className="aspect-[9/16]" />
      </div>

      {/* The audit */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            The audit
          </p>
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              In October 2022, we brought in an external UX team to assess the beta app.
              They ran a heuristic evaluation across 9 Nielsen principles, usability testing
              with 6 participants, and tree testing with 9 participants using Optimal Workshop.
              Only 32% of tree test tasks ended at the correct answer.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                {
                  finding: 'Information architecture',
                  detail: 'Navigation labels — Wellness, Warnings, Triage — caused confusion and misclicks. Users couldn\'t predict what was behind each tab. 4 out of 7 tree test tasks failed on these three pages specifically.',
                },
                {
                  finding: 'Visibility of system status',
                  detail: 'No progress bar in registration. No feedback states on the SOS button or hazard selections — users couldn\'t tell if their actions had registered. Information hierarchy on the Warnings screen created cognitive overload.',
                },
                {
                  finding: 'Consistency & copy',
                  detail: 'Inconsistent buttons, colors, and typeface throughout. Clinical language in page names and alerts was hard to process under stress. Buttons were pre-checked with no user input. Users couldn\'t edit PWD information after setup.',
                },
              ].map((f) => (
                <div key={f.finding} className="border border-neutral-100 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                    {f.finding}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we changed — and how */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            What changed — and how
          </p>
          <div className="space-y-8 max-w-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
              The audit team proposed their own redesign. We used their findings — not their
              designs. Every change was grounded in what the research actually showed, not a
              wholesale visual overhaul.
            </p>

            {[
              {
                finding: 'Finding: navigation labels caused misclicks and failed tree tests',
                change: 'Restructured the nav drawer into two explicit sections — Caregiving and You — with plain-language labels (Location, Safety check, Weather alerts) instead of abstract category names. The drawer itself now surfaces SOS prominently so the most critical action is never more than one tap away.',
              },
              {
                finding: 'Finding: card sorting showed users prioritize peace of mind first',
                change: 'Reordered the onboarding value prop screens to match how caregivers actually think: Get Peace of Mind → Preserve Independence → Build Community. The original order was inverted. This was a direct application of the card sort data — participants consistently ranked safety awareness above independence features.',
              },
              {
                finding: 'Finding: onboarding had no progress signals and unclear copy',
                change: 'Redesigned the onboarding with illustrated value prop screens, clear Skip/Next controls, and a landing screen with distinct Start Now and Sign In CTAs. The audit team proposed a progress-bar-heavy approach; we kept it lighter — the carepartner tutorial already sets time expectations, and a completion indicator is more useful post-setup than during it.',
              },
              {
                finding: 'Finding: SOS had no visible feedback state',
                change: 'Moved SOS from a floating text button to a persistent red pill in the top navigation bar — visible at all times from the map. Added an in-progress banner state so caregivers can see an active SOS without navigating away from the map.',
              },
            ].map((item) => (
              <div key={item.finding} className="border-t border-neutral-100 pt-8">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-3">
                  {item.finding}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding screens before/after */}
      <div className="w-full border-y border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-100">
        <Placeholder label="Before — original registration: PreSafe logo, Sign up with Email, Sign up with Facebook" className="aspect-[9/16]" />
        <Placeholder label="Before — original onboarding: direct to home screen, no value prop intro" className="aspect-[9/16]" />
        <Placeholder label="After — new onboarding: illustrated value prop screens, Get Peace of Mind first" className="aspect-[9/16]" />
        <Placeholder label="After — landing screen: Welcome to PreSafe, Start Now / Sign In" className="aspect-[9/16]" />
      </div>

      {/* Outcome */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Outcome
          </p>
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl mb-12">
              The redesigned onboarding and navigation were handed off to engineering.
              Over four years, I shipped core features across the full caregiving experience —
              from first sign-up through active monitoring, SOS, and care team management.
              The product is a live iOS app used by caregivers supporting people with dementia.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <Stat value="4+" label="Years as embedded designer on the product" />
              <Stat value="32%" label="Tree test task success rate in the beta — the baseline that drove the redesign" />
              <Stat value="3" label="Audit methods: heuristic eval, usability testing, tree testing" />
              <Stat value="6.5M" label="Americans living with dementia — the scale PreSafe is designed for" />
            </div>
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
              Designing the same product for four years teaches you something you can&apos;t
              get from a short engagement: the difference between what the research says and
              what the product can actually absorb. An audit team can identify every problem
              correctly and still propose solutions that don&apos;t fit the constraints — the
              dev team size, the existing codebase, the users who already know the product.
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              The hardest part of this project wasn&apos;t the audit. It was watching the
              dev implementation diverge from the designs over and over, and learning how to
              make that gap smaller — through tighter specs, closer sprint collaboration, and
              knowing when to fight for a detail and when to let it go.
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              Designing for caregivers under stress also changed how I think about feedback
              states and information hierarchy. When someone is checking their app because
              they think their parent might have wandered, every extra tap and every ambiguous
              label is a real cost. That standard travels with me to every project now.
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
        className={`${cap} py-8 flex flex-col sm:flex-flex sm:items-center sm:justify-between gap-3 text-xs text-neutral-400`}
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
