import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'

const saans = localFont({
  src: [
    { path: '../fonts/Saans-TRIAL-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/Saans-TRIAL-RegularItalic.otf', weight: '400', style: 'italic' },
    { path: '../fonts/Saans-TRIAL-Medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/Saans-TRIAL-SemiBold.otf', weight: '600', style: 'normal' },
    { path: '../fonts/Saans-TRIAL-Bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/Saans-TRIAL-Heavy.otf', weight: '800', style: 'normal' },
  ],
  variable: '--font-saans',
})

const saansMono = localFont({
  src: [
    { path: '../fonts/SaansMono-TRIAL-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/SaansMono-TRIAL-Medium.otf', weight: '500', style: 'normal' },
  ],
  variable: '--font-saans-mono',
})

export const metadata: Metadata = {
  title: 'Joanna Veloria',
  description: 'Product designer crafting thoughtful digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${saans.variable} ${saansMono.variable}`}>
      <body className="font-sans bg-white text-neutral-900 antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HEGSY3D6SF" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HEGSY3D6SF');
        `}</Script>
        {children}
      </body>
    </html>
  )
}
