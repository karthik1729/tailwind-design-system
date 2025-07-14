import { cookies } from 'next/headers'

export type Theme = 'light' | 'dark'

const THEME_COOKIE_NAME = 'theme'

export function getTheme(): Theme {
  const cookieStore = cookies()
  const theme = cookieStore.get(THEME_COOKIE_NAME)?.value as Theme | undefined
  return theme || 'light'
}

export function setThemeCookie(theme: Theme) {
  const cookieStore = cookies()
  cookieStore.set(THEME_COOKIE_NAME, theme, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })
}