"use client"

import { Separator } from "@/components/ui/separator"
import { ComponentExample } from "@/lib/component-docs"

export const separatorExamples: ComponentExample[] = [
  {
    title: "Basic Separator",
    description: "A horizontal separator to divide content.",
    code: `<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`,
    component: () => (
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    )
  },
  {
    title: "Vertical Separator",
    description: "Vertical separators for inline content.",
    code: `<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" />
  <div>Item 3</div>
</div>`,
    component: () => (
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Item 1</div>
        <Separator orientation="vertical" />
        <div>Item 2</div>
        <Separator orientation="vertical" />
        <div>Item 3</div>
      </div>
    )
  },
  {
    title: "Custom Styling",
    description: "Separators with custom colors and thickness.",
    code: `<div className="space-y-4">
  <Separator className="bg-primary" />
  <Separator className="bg-red-500 h-0.5" />
  <Separator className="bg-gradient-to-r from-blue-500 to-purple-500 h-1" />
  <Separator className="border-dashed border-t-2 border-gray-300 bg-transparent" />
</div>`,
    component: () => (
      <div className="space-y-4">
        <Separator className="bg-primary" />
        <Separator className="bg-red-500 h-0.5" />
        <Separator className="bg-gradient-to-r from-blue-500 to-purple-500 h-1" />
        <Separator className="border-dashed border-t-2 border-gray-300 bg-transparent" />
      </div>
    )
  },
  {
    title: "With Text",
    description: "Separator with centered text.",
    code: `<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <Separator />
  </div>
  <div className="relative flex justify-center text-xs uppercase">
    <span className="bg-background px-2 text-muted-foreground">
      Or continue with
    </span>
  </div>
</div>`,
    component: () => (
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    )
  },
  {
    title: "Section Dividers",
    description: "Separators used to divide sections of content.",
    code: `<div className="space-y-8">
  <section>
    <h3 className="text-lg font-semibold mb-4">Section 1</h3>
    <p className="text-sm text-muted-foreground">
      This is the first section of content. It contains some important information.
    </p>
  </section>
  
  <Separator decorative />
  
  <section>
    <h3 className="text-lg font-semibold mb-4">Section 2</h3>
    <p className="text-sm text-muted-foreground">
      This is the second section of content. It's separated from the first by a decorative separator.
    </p>
  </section>
</div>`,
    component: () => (
      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold mb-4">Section 1</h3>
          <p className="text-sm text-muted-foreground">
            This is the first section of content. It contains some important information.
          </p>
        </section>
        
        <Separator decorative />
        
        <section>
          <h3 className="text-lg font-semibold mb-4">Section 2</h3>
          <p className="text-sm text-muted-foreground">
            This is the second section of content. It's separated from the first by a decorative separator.
          </p>
        </section>
      </div>
    )
  },
  {
    title: "Menu Separators",
    description: "Separators in dropdown menus or lists.",
    code: `<div className="w-64 rounded-lg border p-1">
  <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
    Profile
  </div>
  <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
    Settings
  </div>
  <Separator className="my-1" />
  <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
    Support
  </div>
  <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
    About
  </div>
  <Separator className="my-1" />
  <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer text-red-600">
    Log out
  </div>
</div>`,
    component: () => (
      <div className="w-64 rounded-lg border p-1">
        <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
          Profile
        </div>
        <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
          Settings
        </div>
        <Separator className="my-1" />
        <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
          Support
        </div>
        <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer">
          About
        </div>
        <Separator className="my-1" />
        <div className="px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded cursor-pointer text-red-600">
          Log out
        </div>
      </div>
    )
  },
  {
    title: "Card Separators",
    description: "Using separators within card components.",
    code: `<div className="w-72 rounded-lg border">
  <div className="p-6">
    <h3 className="font-semibold text-lg">Account Settings</h3>
    <p className="text-sm text-muted-foreground mt-1">
      Manage your account preferences
    </p>
  </div>
  <Separator />
  <div className="p-6 space-y-4">
    <div className="flex items-center justify-between">
      <span className="text-sm">Email notifications</span>
      <span className="text-sm text-muted-foreground">On</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm">Two-factor auth</span>
      <span className="text-sm text-muted-foreground">Off</span>
    </div>
  </div>
  <Separator />
  <div className="p-4">
    <button className="text-sm text-primary hover:underline">
      View all settings
    </button>
  </div>
</div>`,
    component: () => (
      <div className="w-72 rounded-lg border">
        <div className="p-6">
          <h3 className="font-semibold text-lg">Account Settings</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your account preferences
          </p>
        </div>
        <Separator />
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Email notifications</span>
            <span className="text-sm text-muted-foreground">On</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Two-factor auth</span>
            <span className="text-sm text-muted-foreground">Off</span>
          </div>
        </div>
        <Separator />
        <div className="p-4">
          <button className="text-sm text-primary hover:underline">
            View all settings
          </button>
        </div>
      </div>
    )
  },
  {
    title: "Icon Separator",
    description: "Separator with an icon in the middle.",
    code: `<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <Separator />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-background px-3">
      <svg
        className="h-4 w-4 text-muted-foreground"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </span>
  </div>
</div>`,
    component: () => (
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-3">
            <svg
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span>
        </div>
      </div>
    )
  }
]