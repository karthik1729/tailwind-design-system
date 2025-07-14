'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { Theme } from '@/lib/theme-cookie'

export async function updateTheme(theme: Theme) {
  cookies().set('theme', theme, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })
  
  // Revalidate all pages to apply the new theme
  revalidatePath('/', 'layout')
}