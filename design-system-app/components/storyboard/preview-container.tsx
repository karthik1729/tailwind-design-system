"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Copy, Monitor, Smartphone, Tablet } from "lucide-react"
import { CodePreview } from "./code-preview"

interface PreviewContainerProps {
  component: React.ReactNode
  code: string
  className?: string
  title?: string
  description?: string
  allowOverflow?: boolean
  minHeight?: string
  contentAlignment?: "center" | "top" | "bottom"
}

export function PreviewContainer({
  component,
  code,
  className,
  title,
  description,
  allowOverflow = false,
  minHeight = "min-h-[200px]",
  contentAlignment = "center"
}: PreviewContainerProps) {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-[375px]"
      case "tablet":
        return "max-w-[768px]"
      default:
        return "w-full"
    }
  }

  return (
    <div className="space-y-4">
      {(title || description) && (
        <div>
          {title && <h3 className="text-lg font-medium text-foreground">{title}</h3>}
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
      )}

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-md bg-muted p-1">
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-7 w-7 p-0", viewport === "desktop" && "bg-background")}
                onClick={() => setViewport("desktop")}
              >
                <Monitor className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-7 w-7 p-0", viewport === "tablet" && "bg-background")}
                onClick={() => setViewport("tablet")}
              >
                <Tablet className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-7 w-7 p-0", viewport === "mobile" && "bg-background")}
                onClick={() => setViewport("mobile")}
              >
                <Smartphone className="h-3.5 w-3.5" />
              </Button>
            </div>


            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        <TabsContent value="preview" className="mt-4">
          <div className={cn("rounded-lg border", !allowOverflow && "overflow-hidden")}>
            <div className={cn(
              "flex bg-muted/30 p-6",
              contentAlignment === "top" ? "items-start" : contentAlignment === "bottom" ? "items-end" : "items-center",
              "justify-center",
              minHeight
            )}>
              <div className={cn(
                "w-full transition-all duration-300",
                getViewportWidth(),
                className
              )}>
                {component}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <CodePreview code={code} />
        </TabsContent>
      </Tabs>
    </div>
  )
}