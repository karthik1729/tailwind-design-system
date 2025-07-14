"use client"

import { ThemeSwitcher } from './theme-switcher'
import { useTheme } from '@/hooks/use-theme'

export function ThemeSwitcherClient() {
  const theme = useTheme()
  
  return <ThemeSwitcher currentTheme={theme} />
}