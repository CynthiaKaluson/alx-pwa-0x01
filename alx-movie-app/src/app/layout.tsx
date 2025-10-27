import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0070f3',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Cine Seek',
  description: 'Movie discovery app',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cine Seek" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
        <meta name="msapplication-TileColor" content="#0070f3" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
