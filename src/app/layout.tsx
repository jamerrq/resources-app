import './globals.css'
import type { Metadata } from 'next'
import { Fira_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

// const inter = Inter({ subsets: ['latin'] });
// const fira_code = Fira_Code({ subsets: ['latin'] });
const firaMono = Fira_Mono({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Resources App',
  description: 'A Next.js app with Tailwind CSS and TypeScript'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={firaMono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
