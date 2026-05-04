'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const toys = ['Yarn', 'Mouse', 'Feather', 'Fish']

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [eggActive, setEggActive] = useState(false)
  const [activeToy, setActiveToy] = useState<string | null>(null)

  useEffect(() => {
    const tryInit = () => {
      if (typeof window === 'undefined') return
      const w = window as unknown as { CatGame?: { init: (opts: object) => void } }
      if (!w.CatGame || !canvasRef.current) return
      const canvas = canvasRef.current
      const dpr = window.devicePixelRatio || 1
      const cssWidth = canvas.offsetWidth
      const cssHeight = canvas.offsetHeight
      canvas.width = cssWidth * dpr
      canvas.height = cssHeight * dpr
      // Keep cat ~80px tall regardless of screen width
      // cat_css = 40 * cssWidth / gridW → gridW = 40 * cssWidth / targetCatCss
      const gridW = Math.round(40 * cssWidth / 80)
      const gridH = Math.round(gridW * (180 / 320))
      const groundY = Math.round(gridH * (152 / 180))
      w.CatGame.init({
        canvas,
        gridW,
        gridH,
        groundY,
        showBg: false,
        showGround: false,
        toys: true,
        toyPicker: '.toy-btn',
      })
    }
    const t = setInterval(() => {
      tryInit()
      const w = window as unknown as { CatGame?: object }
      if (w.CatGame) clearInterval(t)
    }, 100)
    return () => clearInterval(t)
  }, [])

  const handleToy = (toy: string) => {
    setActiveToy(toy)
    const btn = document.querySelector(`.toy-btn[data-toy="${toy.toLowerCase()}"]`) as HTMLElement
    btn?.click()
  }

  return (
    <>
      <Script src="/cat.js" strategy="afterInteractive" />

      {/* Cat canvas — fixed at bottom like coming soon */}
      <canvas
        ref={canvasRef}
        className="fixed bottom-0 left-0 w-full h-56 sm:h-72 z-10 pointer-events-none"
      />

      {/* Hidden toy buttons for CatGame to pick up */}
      <div className="hidden">
        {toys.map((toy) => (
          <button key={toy} className="toy-btn" data-toy={toy.toLowerCase()} />
        ))}
      </div>

      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-5 text-center pb-56 sm:pb-72">

        <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-neutral-500 mb-3">404</p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-4 cursor-pointer select-none"
          onClick={() => { setEggActive(true); (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', '404_easter_egg_clicked') }}
          title={eggActive ? undefined : 'psst'}
        >
          Well, almost nothing.
        </h1>

        {!eggActive ? (
          <p className="text-neutral-500 text-lg sm:text-xl mb-2 max-w-md">
            This page doesn't exist. The cat does, though.
          </p>
        ) : (
          <div className="mb-10 flex flex-col items-center gap-4">
            <p className="text-neutral-500 text-lg sm:text-xl">
              the cat disagrees:
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              {toys.map((toy) => (
                <button
                  key={toy}
                  onClick={() => handleToy(toy)}
                  className={`font-mono text-[10px] px-3 py-1.5 border uppercase tracking-[0.15em] transition-colors ${
                    activeToy === toy
                      ? 'bg-black text-white border-black'
                      : 'border-neutral-300 text-neutral-500 hover:border-black hover:text-black'
                  }`}
                >
                  {toy}
                </button>
              ))}
            </div>
          </div>
        )}

        <Link
          href="/"
          className="text-sm font-medium underline underline-offset-4 hover:opacity-50 transition-opacity"
        >
          ← Joanna Veloria
        </Link>

      </main>
    </>
  )
}
