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
}

export function PreviewContainer({
  component,
  code,
  className,
  title,
  description
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
          {title && <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</h3>}
          {description && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
      )}

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-md bg-gray-100 p-1 dark:bg-gray-800">
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-7 w-7 p-0", viewport === "desktop" && "bg-white dark:bg-gray-900")}
                onClick={() => setViewport("desktop")}
              >
                <Monitor className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-7 w-7 p-0", viewport === "tablet" && "bg-white dark:bg-gray-900")}
                onClick={() => setViewport("tablet")}
              >
                <Tablet className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-7 w-7 p-0", viewport === "mobile" && "bg-white dark:bg-gray-900")}
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
          <Card className="overflow-hidden">
            <div className="flex items-center justify-center bg-gray-50 p-8 dark:bg-gray-900">
              <div className={cn(
                "w-full transition-all duration-300",
                getViewportWidth(),
                className
              )}>
                <div className="bg-background p-8 rounded-lg">
                  {component}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <CodePreview code={code} />
        </TabsContent>
      </Tabs>
    </div>
  )
}