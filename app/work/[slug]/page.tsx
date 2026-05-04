import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: `${project.title} — Joanna Veloria` }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const isDark = project.bg.includes('800') || project.bg.includes('900')

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 px-5 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-sm hover:opacity-50 transition-opacity">
          Joanna Veloria
        </Link>
        <nav className="flex gap-6 sm:gap-8 text-sm">
          <Link href="/#work" className="hover:opacity-50 transition-opacity">Work</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
        </nav>
      </header>

      {/* Hero banner */}
      <div className={`w-full ${project.bg} h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] flex items-center justify-center overflow-hidden`}>
        <span className={`text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-bold select-none leading-none tracking-tighter px-4 text-center ${
          isDark ? 'text-white/10' : 'text-black/10'
        }`}>
          {project.label}
        </span>
      </div>

      {/* Project header */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-mono text-neutral-300 block mb-2">{project.number}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 border border-neutral-200 text-neutral-500 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">Role</p>
            <p className="text-sm text-neutral-700">{project.role}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">Timeline</p>
            <p className="text-sm text-neutral-700">{project.timeline}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">Team</p>
            <p className="text-sm text-neutral-700">{project.team}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 border-b border-neutral-100">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">Overview</p>
          <p className="text-lg sm:text-xl leading-relaxed text-neutral-700 max-w-2xl">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Image placeholder 1 */}
      <div className="w-full bg-neutral-50 border-y border-neutral-100 h-[240px] sm:h-[360px] md:h-[480px] flex items-center justify-center">
        <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest">Project image coming soon</span>
      </div>

      {/* Sections */}
      {project.sections.map((section, i) => (
        <section key={section.label} className={`px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 border-b border-neutral-100`}>
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">
              {section.label}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              {section.body}
            </p>
          </div>

          {/* Image placeholder after first two sections */}
          {i === 1 && (
            <div className="mt-14 sm:mt-20 -mx-5 sm:-mx-8 md:-mx-16 lg:-mx-24">
              <div className="w-full bg-neutral-50 border-y border-neutral-100 h-[200px] sm:h-[300px] md:h-[420px] flex items-center justify-center">
                <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest">Project image coming soon</span>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Outcome */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 border-b border-neutral-100">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1">Outcome</p>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
            {project.outcome}
          </p>
        </div>
      </section>

      {/* Next project */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link
          href="/#work"
          className="text-sm text-neutral-400 hover:text-black transition-colors"
        >
          ← All work
        </Link>
        {(() => {
          const idx = projects.findIndex((p) => p.slug === slug)
          const next = projects[(idx + 1) % projects.length]
          return (
            <Link href={`/work/${next.slug}`} className="group flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400">{next.number}</span>
              <span className="text-sm font-bold uppercase tracking-tight group-hover:underline underline-offset-4 transition-all">
                {next.title} →
              </span>
            </Link>
          )
        })()}
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
