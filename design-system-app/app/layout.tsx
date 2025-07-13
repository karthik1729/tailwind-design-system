import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ToastProvider } from '@/components/ui/toast-provider'
import { Toaster } from '@/components/ui/toaster'
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(openSans.className, "overflow-hidden")} suppressHydrationWarning>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
        <div id="radix-portal-root" tabIndex={-1} aria-hidden="true" />
      </body>
    </html>
  )
}