"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ComponentExample } from "@/lib/component-docs"

export const resizableExamples: ComponentExample[] = [
  {
    title: "Basic Resizable",
    description: "Two panels with a resizable divider between them.",
    code: `<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  },
  {
    title: "Vertical Resizable",
    description: "Panels stacked vertically with horizontal resizing.",
    code: `<ResizablePanelGroup direction="vertical" className="min-h-[200px] max-w-md rounded-lg border">
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
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="vertical" className="min-h-[200px] max-w-md rounded-lg border">
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
    )
  },
  {
    title: "Three Panels",
    description: "Three resizable panels in a row.",
    code: `<ResizablePanelGroup direction="horizontal" className="max-w-2xl rounded-lg border">
  <ResizablePanel defaultSize={25}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={25}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Aside</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="horizontal" className="max-w-2xl rounded-lg border">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Aside</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  },
  {
    title: "With Min and Max Sizes",
    description: "Panels with minimum and maximum size constraints.",
    code: `<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Min: 20% Max: 40%</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={70}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Flexible</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
        <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Min: 20% Max: 40%</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Flexible</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  },
  {
    title: "Collapsible Panel",
    description: "Panel that can be collapsed to minimum size.",
    code: `<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={25} minSize={15} collapsible={true} collapsedSize={5}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Collapsible</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Main Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
        <ResizablePanel defaultSize={25} minSize={15} collapsible={true} collapsedSize={5}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Collapsible</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Main Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  },
  {
    title: "Nested Groups",
    description: "Resizable panels with nested groups.",
    code: `<ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-2xl rounded-lg border">
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Top</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Bottom</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-2xl rounded-lg border">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Top</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Bottom</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  },
  {
    title: "Custom Handle",
    description: "Resizable panels with custom handle styling.",
    code: `<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Left</span>
    </div>
  </ResizablePanel>
  <ResizableHandle className="w-2 bg-primary/10 hover:bg-primary/20 transition-colors" />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Right</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Left</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-primary/10 hover:bg-primary/20 transition-colors" />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Right</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  },
  {
    title: "Layout Example",
    description: "A practical layout example with resizable panels.",
    code: `<ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-5xl rounded-lg border">
  <ResizablePanel defaultSize={20} minSize={15}>
    <div className="h-full p-4">
      <h3 className="font-semibold mb-4">Navigation</h3>
      <div className="space-y-2">
        <div className="p-2 rounded bg-muted">Dashboard</div>
        <div className="p-2 rounded bg-muted">Projects</div>
        <div className="p-2 rounded bg-muted">Settings</div>
      </div>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={60}>
    <div className="h-full p-6">
      <h2 className="text-2xl font-bold mb-4">Main Content</h2>
      <p className="text-muted-foreground">
        This is the main content area. Resize the panels to see how the layout adapts.
      </p>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={20} minSize={15}>
    <div className="h-full p-4">
      <h3 className="font-semibold mb-4">Details</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>Additional information</p>
        <p>Related items</p>
        <p>Quick actions</p>
      </div>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`,
    component: () => (
      <ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-5xl rounded-lg border">
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="h-full p-4">
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <div className="p-2 rounded bg-muted">Dashboard</div>
              <div className="p-2 rounded bg-muted">Projects</div>
              <div className="p-2 rounded bg-muted">Settings</div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="h-full p-6">
            <h2 className="text-2xl font-bold mb-4">Main Content</h2>
            <p className="text-muted-foreground">
              This is the main content area. Resize the panels to see how the layout adapts.
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="h-full p-4">
            <h3 className="font-semibold mb-4">Details</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Additional information</p>
              <p>Related items</p>
              <p>Quick actions</p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
]