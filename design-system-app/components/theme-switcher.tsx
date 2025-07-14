"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { updateTheme } from "@/app/actions/theme"
import { Theme } from "@/lib/theme-cookie"

interface ThemeSwitcherProps {
  currentTheme: Theme
}

export function ThemeSwitcher({ currentTheme }: ThemeSwitcherProps) {
  const [isPending, startTransition] = useTransition()

  const toggleTheme = () => {
    const newTheme: Theme = currentTheme === "light" ? "dark" : "light"
    
    startTransition(async () => {
      await updateTheme(newTheme)
      // The page will be revalidated and the new theme will be applied
    })
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-8 w-8"
      aria-label="Toggle theme"
      disabled={isPending}
    >
      {currentTheme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  )
}