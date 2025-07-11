"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CodePreviewProps {
  code: string
  language?: string
  className?: string
}

export function CodePreview({ 
  code, 
  language = "tsx",
  className 
}: CodePreviewProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="rounded-lg bg-gray-950 p-4">
        <pre className="text-sm text-gray-400">
          <code>{code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className={cn(
      "overflow-hidden rounded-lg bg-gray-950",
      className
    )}>
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
        <span className="text-xs text-gray-400">{language}</span>
      </div>
      <div className="overflow-auto p-4">
        <pre className="text-sm">
          <code className="language-tsx text-gray-300">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}