import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const firaMono = localFont({ src: '../../public/fonts/Fira_Mono/FiraMono-Bold.ttf' })

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
            <body className={firaMono.className}>{children}</body>
        </html>
  )
}
