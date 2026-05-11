import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: "Chef's Choice — Joanna Veloria",
  description:
    "UX/UI case study: Lead designer on a pre-made meal subscription platform with AI personalization. MERN stack, 11-person team, from research to shipped product.",
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
            {['MVP', 'Web', 'Subscription', 'UX/UI Design', 'AI'].map((tag) => (
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
            { label: 'Role', value: 'Lead UX/UI Researcher & Designer' },
            { label: 'Timeline', value: '2024' },
            { label: 'Team', value: '11 — design, engineering, AI/ML' },
            { label: 'Stack', value: 'MERN, TypeScript, Stripe, Firebase' },
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
              Chef&apos;s Choice is a pre-made meal subscription platform that delivers
              chef-curated dishes — personalized to your dietary goals, sensitivities, and
              preferences through AI.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              I led UX/UI research and design on an 11-person cross-functional team: conducting
              user surveys, building personas, designing the full onboarding and meal selection
              flow, and creating a component library that mapped directly to the React codebase.
              The product shipped as a MERN MVP with full CRUD, JWT auth, Stripe and PayPal
              checkout, and an AI meal recommendation chatbot called Sue Chef.
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
              Existing meal kit services — HelloFresh, Blue Apron, Factor — fail at the one thing
              users actually want: personalization. They offer meal kits, but the kits don&apos;t
              adapt to dietary restrictions, budget, or caloric goals. Users feel like they&apos;re
              choosing from a menu that wasn&apos;t made for them.
            </p>
            <p className="text-base leading-relaxed text-neutral-500 max-w-2xl">
              Blue Apron users specifically cited difficulty managing subscriptions and unwanted
              automatic deliveries. Factor was praised for variety but lacked real customization.
              No player was leveraging AI to make meal planning feel genuinely personal.
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
              30+ survey responses across 2 surveys and 3 in-depth user interviews. Competitive
              analysis across four direct competitors.
            </p>

            {/* Competitor grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
              {[
                { name: 'Factor', note: 'Best variety of pre-made meals. No real customization or AI layer.' },
                { name: 'Hungryroot', note: 'Closest to AI-driven. Strong personalization but premium-priced.' },
                { name: 'HelloFresh', note: 'Ingredient kits, not pre-made. High effort for users who want convenience.' },
                { name: 'Blue Apron', note: 'Subscription management is a pain point. Users hate unwanted auto-deliveries.' },
              ].map((c) => (
                <div key={c.name} className="bg-neutral-50 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">{c.name}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{c.note}</p>
                </div>
              ))}
            </div>

            {/* Survey findings */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="border border-neutral-100 p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  Biggest challenges (survey)
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>→ 47.6% — finding meals that fit their budget</li>
                  <li>→ 42.9% — finding meals that fit dietary needs</li>
                  <li>→ 33.3% — lack of inspiration for new meals</li>
                  <li>→ 28.6% — difficulty deciding between options</li>
                </ul>
              </div>
              <div className="border border-neutral-100 p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  What users want
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>→ AI personalization & meal recommendations</li>
                  <li>→ Customization (swaps, portion sizes)</li>
                  <li>→ Nutritional tracking built-in</li>
                  <li>→ User reviews before committing to a meal</li>
                </ul>
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Key stat
              </p>
              <p className="text-base sm:text-lg font-medium text-neutral-700 leading-relaxed">
                90.5% of users said yes to an AI-powered recipe customization feature that adjusts
                based on their preferences and restrictions.
              </p>
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
              <div className="w-8 h-8 rounded-full bg-teal-100 mb-4" />
              <p className="font-bold text-sm mb-1">Emily Grant</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Eco-Conscious Convenience Seeker
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Health-conscious, budget-aware, open to AI. Previously used pre-made meal
                services but left due to lack of customization and excessive plastic packaging.
              </p>
              <p className="text-xs text-neutral-400 italic">
                &ldquo;I eat with my eyes… If the picture isn&apos;t nice, then the description
                would help sell it to me.&rdquo;
              </p>
            </div>
            <div className="border border-neutral-200 p-6">
              <div className="w-8 h-8 rounded-full bg-teal-100 mb-4" />
              <p className="font-bold text-sm mb-1">The Busy Mom</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Seeking Balance
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Time-strapped, managing family dietary needs across multiple people. Needs fast
                prep, reliable delivery, and the ability to skip weeks without friction. Trusts
                services that respect her schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design principles */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            Design principles
          </p>
          <div className="space-y-8 max-w-2xl">
            {[
              {
                law: "Jakob's Law",
                title: 'Match familiar patterns',
                body: 'Users already know how HelloFresh and Factor work. We matched that mental model — meal cards, subscription tiers, weekly selection — so the learning curve was zero. The differentiation happens through personalization depth, not novel UI.',
              },
              {
                law: 'Goal Gradient Effect',
                title: 'Drive onboarding to completion',
                body: 'The 7-step progress indicator creates forward momentum — users are more motivated the closer they get to the end. We placed the most delightful steps (choosing meals) at step 6, just before checkout, to reward users for completing the earlier data-collection steps.',
              },
              {
                law: "Miller's Law",
                title: 'Chunk preference selection',
                body: 'The Preferences step offers 8 food preference tiles — Vegetarian, Keto, Paleo, Flexitarian, Pescatarian, Chef\'s choice, High-protein, Calorie smart. Tiles instead of dropdowns. Visual chunks instead of a wall of text. Maximum 8 options at a time, always.',
              },
              {
                law: 'Mobile-first design',
                title: 'Designed for small screens first',
                body: 'Chef\'s Choice targets busy users — users who browse on their phones while commuting or in the kitchen. Every layout was designed at mobile breakpoints first, then scaled up.',
              },
            ].map((p) => (
              <div key={p.law} className="border-t border-neutral-100 pt-8">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-2">{p.law}</p>
                <p className="font-bold text-sm uppercase tracking-tight mb-3">{p.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
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
              As lead designer, I owned the style guide, the full onboarding and registration flow,
              the meal selection experience, and the component library handed to engineers.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {[
                {
                  n: '01',
                  title: 'Style guide & design system',
                  body: 'Color tokens (primary warm palette + teal secondary), typography (Roboto header), icon library, and component specs — all documented before engineering started.',
                },
                {
                  n: '02',
                  title: '7-step onboarding flow',
                  body: 'Account → Goals → Preferences → Sensitivities → Plan → Choose Meals → Checkout. Progress bar across all steps. Preference tiles at step 3. The longest step is the most visually engaging.',
                },
                {
                  n: '03',
                  title: 'Meal selection & detail modal',
                  body: 'Food photography grid, allergen and serving dropdowns, nutrition per serving (calories, protein, fats, carbs), oven and microwave instructions, and "Add to Order" CTA.',
                },
                {
                  n: '04',
                  title: 'Checkout & account management',
                  body: 'Delivery address, Stripe/PayPal payment form, order summary with first delivery date picker. Post-signup account: Profile, Plan Settings, Dietary Selections, Delivery Info, Payment.',
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

      {/* Screens — registration flow */}
      <div className="w-full border-y border-neutral-100">
        <Placeholder
          label="Homepage — hero + browse grid + testimonials"
          className="h-[360px] sm:h-[500px] md:h-[620px]"
        />
      </div>

      <div className="w-full border-b border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-100">
        {[
          'Step 1 — Account: Get Started form',
          'Step 3 — Preferences: food tile selection',
          'Step 6 — Choose Meals: meal grid',
          'Step 7 — Checkout: payment + order summary',
        ].map((label) => (
          <Placeholder key={label} label={label} className="aspect-[3/4]" />
        ))}
      </div>

      {/* Meal detail modal */}
      <div className="w-full border-b border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-100">
        <Placeholder label="Meal detail modal — Family Size Steak" className="aspect-[4/3]" />
        <Placeholder label="Account — Plan Settings & Dietary Selections" className="aspect-[4/3]" />
      </div>

      {/* Sue Chef */}
      <section className={`${cap} py-14 sm:py-20 border-b border-neutral-100`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
            The AI layer
          </p>
          <div className="space-y-6 max-w-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
              Sue Chef is the AI meal recommendation chatbot built into Chef&apos;s Choice — a
              Python/PyTorch NLP model that recommends meals based on the user&apos;s onboarding
              preferences and answers real nutritional questions.
            </p>
            <div className="bg-neutral-900 rounded-sm p-6 font-mono text-sm space-y-1">
              <p className="text-neutral-500">Guest: I am looking for some low calorie options</p>
              <p className="text-teal-400">Sue: Based on your preferences I would recommend our Beef and Broccoli Stir-Fry or Vegetable Stir-Fry with Tofu.</p>
              <p className="text-neutral-500">Guest: What are some gluten free options</p>
              <p className="text-teal-400">Sue: I would recommend the gluten free versions of our Shrimp Scampi or Beef Stroganoff. I would also suggest the Quinoa Salad or Chicken Caesar Wrap with a Gluten Free Spinach Tortilla.</p>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              My role on Sue Chef was UX: where the chatbot surfaces in the meal selection flow,
              how the interaction patterns feel relative to the rest of the app, and the empty
              states during v1 while the model was trained. The AI/ML build was led by Marci
              Prescott.
            </p>
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
              Shipped a full MERN app with real payments, real users, and a working AI model — on
              a 6-month timeline with a 11-person team.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <Stat value="30+" label="Survey responses across 2 rounds of user research" />
              <Stat value="90.5%" label="Of users wanted AI-powered recipe customization" />
              <Stat value="7" label="Onboarding steps designed and shipped" />
              <Stat value="11" label="Team members across design, engineering, and AI/ML" />
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
                title: 'Sue Chef in the product',
                body: 'The AI chatbot was demoed in the terminal. The next sprint brings it into the actual app UI — embedded in the meal selection step, surfacing recommendations inline as users browse.',
              },
              {
                n: '02',
                title: 'Live meal ratings & reviews',
                body: 'Users rated the product 5-star in testing but had no way to rate individual meals. Ratings + reviews feed back into the AI recommendations loop and build trust for new users.',
              },
              {
                n: '03',
                title: 'Push notifications & delivery tracking',
                body: 'Firebase notifications for delivery status. Users want to know exactly when their food arrives — this was the most-requested feature in post-survey follow-ups.',
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
              Designing at this scale — 11 people, 6 months, real money on the line —
              requires a different kind of discipline than solo or small-team work. Every decision
              has to be documented and justified because engineers are building from it immediately.
              Ambiguity in a Figma file becomes a bug in production.
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              Working alongside an AI/ML engineer to design the UX for a chatbot that didn&apos;t
              exist yet was the hardest problem. You&apos;re designing for a capability that&apos;s
              still being trained — so the interaction patterns have to be flexible enough to hold
              regardless of what the model can actually deliver.
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
