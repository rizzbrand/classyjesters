import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Classy Jesters - AI Creator Ecosystem',
  description: 'Empower your creative journey with AI tools, courses, and resources designed for modern creators',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                try {
                  Object.defineProperty(window, 'ethereum', {
                    writable: false,
                    configurable: false,
                    value: window.ethereum || undefined
                  });
                } catch (e) {
                  // Extension already set ethereum, ignore
                }
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
