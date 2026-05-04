import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <p className="text-sm font-mono text-neutral-400 mb-4">404</p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Page not found</h1>
      <p className="text-neutral-500 mb-8">This page doesn't exist or has been moved.</p>
      <Link
        href="/"
        className="text-sm font-medium underline underline-offset-4 hover:opacity-60 transition-opacity"
      >
        Go home
      </Link>
    </main>
  )
}
