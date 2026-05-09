const toys = ['Yarn', 'Mouse', 'Feather', 'Fish', 'Laser']

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-stone-50 px-6 sm:px-10 pt-8 pb-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between font-mono text-xs tracking-[0.2em] uppercase text-stone-500">
          <span>Joanna Veloria</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900 animate-pulse" />
            Available for work
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-end px-6 sm:px-10 pt-16 pb-40 sm:pb-24">
        <div className="max-w-[1600px] mx-auto w-full">
          <h1
            className="text-[14vw] leading-[0.88] sm:pl-[8vw]"
            style={{ fontWeight: 800, letterSpacing: '-0.045em' }}
          >
            under{' '}
            <span className="text-stone-300">construction,</span>
          </h1>

          <div className="font-mono text-xs tracking-[0.2em] uppercase text-stone-500 mt-8 sm:mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 sm:pl-[8vw]">
            <span>Portfolio WIP</span>
            <span className="text-stone-300">·</span>
            <a
              href="https://www.linkedin.com/in/joannaveloria/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 hover:opacity-50 transition-opacity"
            >
              LinkedIn ↗
            </a>
            <span className="text-stone-300">·</span>
            <span className="flex gap-1">
              {toys.map((toy) => (
                <button
                  key={toy}
                  className="font-mono text-[10px] px-2 py-1 border border-stone-300 uppercase tracking-[0.15em] text-stone-500 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-colors"
                >
                  {toy}
                </button>
              ))}
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
