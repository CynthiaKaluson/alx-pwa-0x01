import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Configure Inter font with local fallback
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Better performance
  preload: true,
  fallback: ['system-ui', 'arial'] // Fallback fonts
})

export const metadata: Metadata = {
  title: 'Cine Seek',
  description: 'Movie discovery app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}