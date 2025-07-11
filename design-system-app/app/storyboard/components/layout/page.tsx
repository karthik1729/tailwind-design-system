"use client"

import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import Image from "next/image"

export default function LayoutPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Layout Components</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Essential layout components for spacing, scrolling, aspect ratios, and resizable panels.
        </p>
      </div>

      {/* Separator Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Separator</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Visual divider to separate content sections with horizontal or vertical orientation.
          </p>
        </div>

        {/* Horizontal Separator */}
        <PreviewContainer
          title="Horizontal Separator"
          description="Default horizontal separator for dividing content"
          code={`<div className="space-y-4">
  <div>
    <h4 className="text-sm font-medium">Account Settings</h4>
    <p className="text-sm text-gray-600">Manage your account preferences</p>
  </div>
  <Separator />
  <div>
    <h4 className="text-sm font-medium">Privacy Settings</h4>
    <p className="text-sm text-gray-600">Control your privacy and data</p>
  </div>
</div>`}
          component={
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">Account Settings</h4>
                  <p className="text-sm text-gray-600">Manage your account preferences</p>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium">Privacy Settings</h4>
                  <p className="text-sm text-gray-600">Control your privacy and data</p>
                </div>
              </div>
            </div>
          }
        />

        {/* Vertical Separator */}
        <PreviewContainer
          title="Vertical Separator"
          description="Vertical separator for dividing inline content"
          code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>About</div>
  <Separator orientation="vertical" />
  <div>Contact</div>
</div>`}
          component={
            <div className="p-6">
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>About</div>
                <Separator orientation="vertical" />
                <div>Contact</div>
              </div>
            </div>
          }
        />

        {/* Custom Styled Separator */}
        <PreviewContainer
          title="Custom Styled Separator"
          description="Separator with custom styling"
          code={`<div className="space-y-4">
  <Separator className="bg-blue-200" />
  <Separator className="bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  <Separator className="my-8" />
</div>`}
          component={
            <div className="p-6">
              <div className="space-y-4">
                <Separator className="bg-blue-200" />
                <Separator className="bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                <Separator className="my-8" />
              </div>
            </div>
          }
        />
      </section>

      {/* Scroll Area Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Scroll Area</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Custom scrollable area with styled scrollbars for consistent cross-browser experience.
          </p>
        </div>

        {/* Basic Scroll Area */}
        <PreviewContainer
          title="Basic Scroll Area"
          description="Scrollable area with custom scrollbar"
          code={`<ScrollArea className="h-72 w-full rounded-md border p-4">
  <div className="space-y-4">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="text-sm">
        <div className="font-medium">Item {i + 1}</div>
        <div className="text-gray-600">
          Description for item {i + 1}. This is some example content that demonstrates scrolling.
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`}
          component={
            <div className="p-6">
              <ScrollArea className="h-72 w-full rounded-md border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      <div className="font-medium">Item {i + 1}</div>
                      <div className="text-gray-600">
                        Description for item {i + 1}. This is some example content that demonstrates scrolling.
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          }
        />

        {/* Horizontal Scroll Area */}
        <PreviewContainer
          title="Horizontal Scroll Area"
          description="Scroll area with horizontal scrolling"
          code={`<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="flex h-20 w-32 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800"
      >
        Card {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`}
          component={
            <div className="p-6">
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex h-20 w-32 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800"
                    >
                      Card {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          }
        />

        {/* Scroll Area with Tags */}
        <PreviewContainer
          title="Scroll Area with Tags Example"
          description="Common use case for scroll areas with tag lists"
          code={`<ScrollArea className="h-40 w-full rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    <div className="flex flex-wrap gap-2">
      {[
        "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS",
        "Node.js", "GraphQL", "REST API", "MongoDB", "PostgreSQL",
        "Docker", "Kubernetes", "AWS", "Azure", "Git", "CI/CD",
        "Testing", "Performance", "Security", "Accessibility"
      ].map((tag) => (
        <div
          key={tag}
          className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-gray-800"
        >
          {tag}
        </div>
      ))}
    </div>
  </div>
</ScrollArea>`}
          component={
            <div className="p-6">
              <ScrollArea className="h-40 w-full rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS",
                      "Node.js", "GraphQL", "REST API", "MongoDB", "PostgreSQL",
                      "Docker", "Kubernetes", "AWS", "Azure", "Git", "CI/CD",
                      "Testing", "Performance", "Security", "Accessibility"
                    ].map((tag) => (
                      <div
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-gray-800"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          }
        />
      </section>

      {/* Aspect Ratio Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Aspect Ratio</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Maintain consistent aspect ratios for images and video content.
          </p>
        </div>

        {/* 16:9 Aspect Ratio */}
        <PreviewContainer
          title="16:9 Aspect Ratio"
          description="Common widescreen aspect ratio for videos"
          code={`<div className="w-full max-w-md">
  <AspectRatio ratio={16 / 9}>
    <Image
      src="/placeholder.svg"
      alt="Video thumbnail"
      fill
      className="rounded-md object-cover"
    />
  </AspectRatio>
</div>`}
          component={
            <div className="p-6">
              <div className="w-full max-w-md">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                    <span className="text-sm text-gray-600 dark:text-gray-400">16:9</span>
                  </div>
                </AspectRatio>
              </div>
            </div>
          }
        />

        {/* Square Aspect Ratio */}
        <PreviewContainer
          title="Square Aspect Ratio"
          description="1:1 aspect ratio for profile pictures and thumbnails"
          code={`<div className="w-full max-w-xs">
  <AspectRatio ratio={1}>
    <Image
      src="/placeholder.svg"
      alt="Profile picture"
      fill
      className="rounded-full object-cover"
    />
  </AspectRatio>
</div>`}
          component={
            <div className="p-6">
              <div className="w-full max-w-xs">
                <AspectRatio ratio={1}>
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    <span className="text-sm text-gray-600 dark:text-gray-400">1:1</span>
                  </div>
                </AspectRatio>
              </div>
            </div>
          }
        />

        {/* Multiple Aspect Ratios */}
        <PreviewContainer
          title="Common Aspect Ratios"
          description="Various aspect ratios for different use cases"
          code={`<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
  <div>
    <p className="mb-2 text-sm font-medium">4:3 (Classic)</p>
    <AspectRatio ratio={4 / 3}>
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
        <span className="text-sm">4:3</span>
      </div>
    </AspectRatio>
  </div>
  <div>
    <p className="mb-2 text-sm font-medium">16:9 (Widescreen)</p>
    <AspectRatio ratio={16 / 9}>
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
        <span className="text-sm">16:9</span>
      </div>
    </AspectRatio>
  </div>
  <div>
    <p className="mb-2 text-sm font-medium">21:9 (Ultrawide)</p>
    <AspectRatio ratio={21 / 9}>
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
        <span className="text-sm">21:9</span>
      </div>
    </AspectRatio>
  </div>
</div>`}
          component={
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-sm font-medium">4:3 (Classic)</p>
                  <AspectRatio ratio={4 / 3}>
                    <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                      <span className="text-sm">4:3</span>
                    </div>
                  </AspectRatio>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium">16:9 (Widescreen)</p>
                  <AspectRatio ratio={16 / 9}>
                    <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                      <span className="text-sm">16:9</span>
                    </div>
                  </AspectRatio>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium">21:9 (Ultrawide)</p>
                  <AspectRatio ratio={21 / 9}>
                    <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                      <span className="text-sm">21:9</span>
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </div>
          }
        />
      </section>

      {/* Resizable Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Resizable</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Create resizable panel layouts with draggable handles.
          </p>
        </div>

        {/* Basic Resizable */}
        <PreviewContainer
          title="Horizontal Resizable Panels"
          description="Two panels with horizontal resizing"
          code={`<ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel 1</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel 2</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
          component={
            <div className="p-6">
              <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Panel 1</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Panel 2</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          }
        />

        {/* Vertical Resizable */}
        <PreviewContainer
          title="Vertical Resizable Panels"
          description="Panels with vertical resizing"
          code={`<ResizablePanelGroup direction="vertical" className="min-h-[400px] rounded-lg border">
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
          component={
            <div className="p-6">
              <ResizablePanelGroup direction="vertical" className="min-h-[400px] rounded-lg border">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Header</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          }
        />

        {/* Complex Layout */}
        <PreviewContainer
          title="Complex Resizable Layout"
          description="Three-panel layout with nested resizable panels"
          code={`<ResizablePanelGroup direction="horizontal" className="min-h-[400px] rounded-lg border">
  <ResizablePanel defaultSize={20} minSize={15}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={60}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Main Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Details</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={20} minSize={15}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Right Panel</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
          component={
            <div className="p-6">
              <ResizablePanelGroup direction="horizontal" className="min-h-[400px] rounded-lg border">
                <ResizablePanel defaultSize={20} minSize={15}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={60}>
                  <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Main Content</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Details</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={20} minSize={15}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Right Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          }
        />

        {/* Collapsible Panel */}
        <PreviewContainer
          title="Collapsible Panels"
          description="Panels that can be collapsed to minimum size"
          code={`<ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
  <ResizablePanel defaultSize={25} minSize={10} collapsible>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Collapsible</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Main Panel</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
          component={
            <div className="p-6">
              <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
                <ResizablePanel defaultSize={25} minSize={10} collapsible>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Collapsible</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Main Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          }
        />
      </section>
    </div>
  )
}