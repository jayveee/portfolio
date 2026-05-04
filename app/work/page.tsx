import Link from 'next/link'

const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'A brief description of this case study.',
    year: '2024',
    tags: ['Product Design', 'Research'],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'A brief description of this case study.',
    year: '2023',
    tags: ['UX', 'Systems'],
  },
]

export const metadata = {
  title: 'Work — Joanna Veloria',
}

export default function WorkPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <header className="flex items-center justify-between mb-20">
        <Link href="/" className="font-semibold tracking-tight hover:opacity-60 transition-opacity">
          Joanna Veloria
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/work" className="font-medium">Work</Link>
          <Link href="/about" className="hover:opacity-60 transition-opacity">About</Link>
        </nav>
      </header>

      <h1 className="text-2xl font-bold tracking-tight mb-12">Selected work</h1>

      <ul className="divide-y divide-neutral-100">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 py-8 hover:opacity-60 transition-opacity"
            >
              <div>
                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                <p className="text-neutral-500 text-sm">{project.description}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400 shrink-0">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-neutral-200 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
                <span>{project.year}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
