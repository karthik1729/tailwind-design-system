import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import { cn } from '@/lib/utils'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Design System - Tailwind UI Components',
  description: 'Professional design system built from 410 analyzed Tailwind UI elements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(openSans.className, "overflow-hidden")}>
        {children}
        <Toaster position="top-right" />
        <div id="radix-portal-root" tabIndex={-1} aria-hidden="true" />
      </body>
    </html>
  )
}