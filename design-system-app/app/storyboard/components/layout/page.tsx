"use client"

import { Separator } from "@/components/ui/separator"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export default function LayoutPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Layout Components</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Essential layout components for spacing, scrolling, aspect ratios, and resizable panels.
        </p>
      </div>

      {/* Separator Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Separator</h2>
          <p className="text-muted-foreground mb-6">
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
    <p className="text-sm text-muted-foreground">Manage your account preferences</p>
  </div>
  <Separator />
  <div>
    <h4 className="text-sm font-medium">Privacy Settings</h4>
    <p className="text-sm text-muted-foreground">Control your privacy and data</p>
  </div>
</div>`}
          component={
            <div className="gap-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">Account Settings</h4>
                  <p className="text-sm text-muted-foreground">Manage your account preferences</p>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium">Privacy Settings</h4>
                  <p className="text-sm text-muted-foreground">Control your privacy and data</p>
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
            <div className="gap-4">
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
            <div className="gap-4">
              <div className="space-y-4">
                <Separator className="bg-blue-200" />
                <Separator className="bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                <Separator className="my-8" />
              </div>
            </div>
          }
        />
      </section>



      {/* Resizable Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Resizable</h2>
          <p className="text-muted-foreground mb-6">
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
            <div className="gap-4">
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
            <div className="gap-4">
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
            <div className="gap-4">
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
            <div className="gap-4">
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