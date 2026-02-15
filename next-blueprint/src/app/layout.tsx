import type { Metadata } from 'next'
import { Providers } from './providers'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Synthiv Consulting | Strategy, Delivery, Digital',
  description: 'Strategy that ships. Systems that scale. We help teams deliver modern digital experiences.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
