import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: "Chef's Choice — Joanna Veloria",
  description:
    "UX/UI case study: A food ordering MVP built with React, Node, and Stripe. Designed end-to-end — competitive research, 7-step onboarding architecture, homepage, and dev handoff.",
}

const cap = 'px-5 sm:px-8 md:px-16 lg:px-24'

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-teal-50 border border-teal-100 flex items-center justify-center ${className}`}
    >
      <span className="text-[10px] font-mono text-teal-300 uppercase tracking-widest text-center px-4 leading-loose">
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

export default function ChefsChoicePage() {
  const idx = projects.findIndex((p) => p.slug === 'chefs-choice')
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
      <div className="w-full bg-teal-900 h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] flex items-center justify-center overflow-hidden">
        <span className="text-[38px] sm:text-[64px] md:text-[100px] lg:text-[130px] font-bold select-none leading-none tracking-tighter px-4 text-center text-teal-800">
          CHEF&apos;S CHOICE
        </span>
      </div>

      {/* Project header */}
      <section className={`${cap} pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-neutral-100`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-mono text-neutral-300 block mb-2">02</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Chef&apos;s Choice
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {['MVP', 'Web', 'E-commerce', 'UX/UI Design'].map((tag) => (
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
            { label: 'Role', value: 'Lead UX/UI Designer' },
            { label: 'Timeline', value: '6 months, 2024' },
            { label: 'Team', value: 'Lead Designer + 2 Engineers' },
            { label: 'Platform', value: 'Web (1440px desktop)' },
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
              Chef&apos;s Choice connects home cooks with their neighbors — a food ordering platform
              designed to close the gap between people who can cook and people who want a real meal.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              I owned the design end-to-end: competitive analysis, user interviews, wireframes, 33
              hi-fi desktop screens, and a component library handed directly to engineers. Built with
              React, Node, and Stripe. The MVP shipped on schedule.
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
              Home cooks have the talent — but the platforms that exist require licenses, commercial
              kitchen certification, and fees most home cooks can&apos;t absorb. Meanwhile, buyers
              were already paying neighbors for food through Facebook groups and group chats. The
              demand was real. The experience was broken.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              Chef&apos;s Choice needed to serve two audiences simultaneously: cooks who needed a
              dignified way to list meals, manage orders, and get paid — and buyers who needed to
              trust an unknown cook enough to order a meal.
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
              Competitive analysis across three distinct categories of &ldquo;competition&rdquo;
              revealed where the market had failed users.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="bg-neutral-50 p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Goldbelly
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Nationwide shipping of premium foods. Too professional, too expensive. No path for
                  a home cook with a side hustle.
                </p>
              </div>
              <div className="bg-neutral-50 p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  EatWith
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Experience-first dining events. Great for hosts — but no on-demand ordering, no
                  takeout model.
                </p>
              </div>
              <div className="bg-neutral-50 p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Facebook groups
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Real demand, real transactions — but no trust layer, no payments, no reliability.
                  Pure friction.
                </p>
              </div>
            </div>
            <div className="max-w-2xl space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Key insight
              </p>
              <p className="text-base sm:text-lg font-medium text-neutral-700 leading-relaxed">
                &ldquo;People are already paying their neighbors for food. They just need a platform
                that doesn&apos;t make them feel like they&apos;re taking a risk.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Scoping */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Scoping the MVP
          </p>
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              Working with the engineering lead, we defined a tight MVP: ship only what was necessary
              for the core transaction loop to function. Everything else waited for v2.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  MVP — shipped
                </p>
                <ul className="space-y-2.5 text-sm text-neutral-600">
                  {[
                    'Account creation & login',
                    '7-step onboarding (goals → plan)',
                    'Homepage + meal browse grid',
                    'Meal detail modal',
                    'Checkout with Stripe',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <span className="text-teal-600 shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  Post-MVP — deferred
                </p>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                  {[
                    'Chef dashboard + order management',
                    'Ratings & reviews',
                    'Neighborhood-based discovery',
                    'Delivery (pickup only at launch)',
                    'In-app messaging',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <span className="text-neutral-300 shrink-0 mt-0.5">○</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I built */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            What I built
          </p>
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              I designed all 33 screens across the MVP — homepage through checkout — at 1440px desktop.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {[
                {
                  n: '01',
                  title: 'Homepage',
                  body: 'Hero section, trust-signal bar, featured chefs, meal browse grid, and testimonials. The first thing a new user sees had to convert skeptics who had never ordered from a home cook before.',
                },
                {
                  n: '02',
                  title: 'Login & Account Creation',
                  body: 'Centered form with email and social login. Minimal fields, clear error states, persistent brand presence in the teal header and illustrated chef mascot.',
                },
                {
                  n: '03',
                  title: '7-Step Onboarding',
                  body: 'Account → Goals → Preferences → Sensitivities → Plan → Choose Meals → Checkout. Progress indicator across all steps to reduce abandonment anxiety. The investment pays off in a personalized browse grid.',
                },
                {
                  n: '04',
                  title: 'Meal Detail Modal',
                  body: 'Food photography, chef rating, allergen tags, nutrition per serving, cooking method, and a red "Add Meal" CTA. Every signal a buyer needs to commit.',
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

      {/* Homepage placeholder — full bleed */}
      <div className="w-full border-y border-neutral-100">
        <Placeholder
          label="Homepage — Hero + Browse Grid"
          className="h-[360px] sm:h-[500px] md:h-[620px]"
        />
      </div>

      {/* Onboarding flow */}
      <div className="w-full border-b border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-100">
        {[
          'Onboarding — Account',
          'Onboarding — Goals',
          'Onboarding — Preferences',
          'Onboarding — Choose Meals',
        ].map((label) => (
          <Placeholder key={label} label={label} className="aspect-[4/3]" />
        ))}
      </div>

      {/* Meal detail + checkout */}
      <div className="w-full border-b border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-100">
        <Placeholder label="Meal Detail Modal — Chicken Piccata" className="aspect-[4/3]" />
        <Placeholder label="Plan Selection + Checkout" className="aspect-[4/3]" />
      </div>

      {/* Design decisions */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Design decisions
          </p>
          <div className="space-y-10 max-w-2xl">
            {[
              {
                title: 'Trust before transaction',
                body: "Every surface that introduced a new cook surfaced three things immediately: a verified profile badge, the pickup window, and at least one real review. Without these, the product was asking strangers to hand money to each other with no safety net. Trust signals weren't decoration — they were the product.",
              },
              {
                title: 'Onboarding length is justified',
                body: "7 steps felt like a lot. But the alternative was asking users to re-state dietary preferences every time they ordered. The onboarding investment pays off in a fully personalized browse grid on every return visit. We validated this during testing: completion rate held when the progress indicator was visible.",
              },
              {
                title: 'Component library mapped 1:1 to React',
                body: 'I built the Figma component library with the engineering handoff explicitly in mind. Every component name matched its React counterpart. Tokens were documented and transferred before a single line of code was written. This is a significant reason the MVP shipped on schedule.',
              },
            ].map((d) => (
              <div key={d.title} className="border-t border-neutral-100 pt-8">
                <p className="font-bold text-sm uppercase tracking-tight mb-3">{d.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Outcome
          </p>
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl mb-12">
              MVP shipped on schedule. The registration-to-order flow — 21 of 33 screens — worked
              clean on the first real transactions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <Stat value="33" label="Screens designed across the full MVP" />
              <Stat value="12" label="Home cooks onboarded in the first week" />
              <Stat value="7" label="Onboarding steps with no reported abandonment" />
              <Stat value="$0" label="Stripe integration errors on first live transactions" />
            </div>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            What&apos;s next
          </p>
          <div className="space-y-6 max-w-xl">
            {[
              {
                n: '01',
                title: 'Chef Dashboard',
                body: 'Order management view designed for a phone in a kitchen — one hand, high ambient noise, real stress. This was scoped out of the MVP but is the most critical next surface.',
              },
              {
                n: '02',
                title: 'Neighborhood Discovery',
                body: "Location-aware browsing so buyers see cooks within pickup distance first. Reduces the trust gap and makes the platform actually usable for the core use case it was built for.",
              },
              {
                n: '03',
                title: 'Ratings & Reviews',
                body: 'Two-way system: buyers rate meals, chefs rate buyers. Reviews are the trust layer that makes repeat use possible — and that eventually lets the platform reduce other friction points.',
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
              This project taught me what it means to design for a real transaction. Not a prototype
              transaction — a Stripe charge to a real person, for food a real person cooked. The
              design has to earn that trust at every step.
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              Collaborating closely with the engineering lead changed how I think about component
              libraries. When every Figma component name maps to a React component, handoff stops
              being a conversation and starts being a delivery.
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
