import './globals.css'

export const metadata = {
  title: 'Cine Seek',
  description: 'Movie discovery PWA',
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
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}