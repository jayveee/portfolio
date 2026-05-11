'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    CatGame: { init: (opts: Record<string, unknown>) => void }
  }
}

const TOYS = ['yarn', 'mouse', 'feather', 'fish', 'laser']

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const dot = document.getElementById('dot-easter')
    if (!dot) return
    let logged = false
    const handleClick = (e: Event) => {
      e.stopPropagation()
      if (!logged) {
        logged = true
        console.log(
          '%c\n  ✦ SECRET AREA DISCOVERED\n\n' +
          '  DESIGNER    Joanna Veloria\n' +
          '  CLASS       Main Character\n' +
          '  COMPANION   Pixel  [ status: napping ]\n' +
          '  PROGRESS    ████████░░  portfolio incoming\n\n' +
          '  you opened devtools on a portfolio site.\n' +
          '  bold move. respect.\n\n' +
          "  either you're curious — or you're hiring.\n" +
          '  hi either way.  ✦\n',
          'color:#e7e5e4;background:#1c1917;font-family:monospace;font-size:12px;line-height:2;padding:16px 24px;display:block;'
        )
      }
      document.dispatchEvent(new CustomEvent('pixel:react'))
    }
    dot.addEventListener('click', handleClick)
    return () => dot.removeEventListener('click', handleClick)
  }, [])

  function initCat() {
    if (!window.CatGame || !canvasRef.current) return
    window.CatGame.init({
      canvas: canvasRef.current,
      scale: 2,
      fitToWindow: true,
      adaptiveWidth: true,
      adaptiveHeight: true,
      groundFromBottom: window.innerWidth >= 640 ? 12 : 18,
      showBg: false,
      showGround: false,
      toys: true,
      toyPicker: '.toy-btn',
      obstacleSelector: window.innerWidth >= 640 ? 'h1' : null,
      obstaclePadding: 1,
    })
  }

  return (
    <>
      <Script src="/cat.js" strategy="afterInteractive" onLoad={initCat} />

      <div className="flex flex-col min-h-screen bg-stone-50 overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-stone-50 px-6 sm:px-10 pt-8 sm:pt-10 pb-3 sm:pb-0">
          <div className="max-w-[1600px] mx-auto flex items-center justify-between font-mono text-xs tracking-[0.2em] uppercase text-stone-500">
            <span>Joanna Veloria</span>
            <button
              id="dot-easter"
              className="flex items-center gap-2 cursor-pointer select-none relative z-20"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-stone-900"
                style={{ animation: 'blink 1.4s steps(1, end) infinite' }}
              />
              In progress
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex flex-col justify-end px-6 sm:px-10 pt-16 sm:pt-24 pb-40 sm:pb-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <h1
              className="font-extrabold leading-[0.88] sm:pl-[8vw]"
              style={{
                fontSize: 'clamp(3rem, 14vw, 11rem)',
                letterSpacing: '-0.045em',
              }}
            >
              Under<br />
              <span className="text-stone-300">construction,</span><br />
              for now.
            </h1>

            <div
              className="font-mono text-xs tracking-[0.2em] uppercase text-stone-500 mt-8 sm:mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 sm:pl-[8vw]"
              style={{ position: 'relative', zIndex: 20 }}
            >
              <span>In the meantime — visit my</span>
              <a
                href="https://www.linkedin.com/in/joannaveloria/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 hover:opacity-50 transition"
                style={{ position: 'relative', zIndex: 20 }}
              >
                LinkedIn ↗
              </a>
              <span>or play with Pixel:</span>
              <span className="flex gap-1" style={{ position: 'relative', zIndex: 20 }}>
                {TOYS.map((toy) => (
                  <button
                    key={toy}
                    data-toy={toy}
                    className="toy-btn font-mono text-[10px] px-2 py-1 border border-stone-300 uppercase tracking-[0.15em] text-stone-500"
                    style={{ position: 'relative', zIndex: 20 }}
                  >
                    {toy.charAt(0).toUpperCase() + toy.slice(1)}
                  </button>
                ))}
                <button
                  id="toy-clear"
                  className="font-mono text-[10px] border uppercase tracking-[0.15em] transition hover:opacity-70 px-3 py-2 sm:px-2 sm:py-1"
                  style={{
                    display: 'none',
                    position: 'relative',
                    zIndex: 20,
                    background: '#e7e5e4',
                    borderColor: '#e7e5e4',
                    color: '#1c1917',
                  }}
                >
                  <span className="sm:hidden">×</span>
                  <span className="hidden sm:inline">× Put away</span>
                </button>
              </span>
            </div>
          </div>
        </main>
      </div>

      {/* Full-viewport canvas — cat lives here */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-10"
        style={{ imageRendering: 'pixelated', cursor: 'grab', display: 'block' }}
      />
    </>
  )
}
