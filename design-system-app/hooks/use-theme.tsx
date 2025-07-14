"use client"

import { useEffect, useState } from 'react'
import { Theme } from '@/lib/theme-cookie'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  
  useEffect(() => {
    // Get theme from HTML element
    const htmlTheme = document.documentElement.className as Theme
    if (htmlTheme === 'dark' || htmlTheme === 'light') {
      setTheme(htmlTheme)
    }
    
    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const newTheme = document.documentElement.className as Theme
          if (newTheme === 'dark' || newTheme === 'light') {
            setTheme(newTheme)
          }
        }
      })
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])
  
  return theme
}