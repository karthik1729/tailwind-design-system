"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "@/components/theme-switcher"

const components = [
  { name: "Accordion", slug: "accordion" },
  { name: "Alert", slug: "alert" },
  { name: "Alert Dialog", slug: "alert-dialog" },
  { name: "Aspect Ratio", slug: "aspect-ratio" },
  { name: "Avatar", slug: "avatar" },
  { name: "Badge", slug: "badge" },
  { name: "Breadcrumb", slug: "breadcrumb" },
  { name: "Button", slug: "button" },
  { name: "Calendar", slug: "calendar" },
  { name: "Card", slug: "card" },
  { name: "Carousel", slug: "carousel" },
  { name: "Chart", slug: "chart" },
  { name: "Checkbox", slug: "checkbox" },
  { name: "Collapsible", slug: "collapsible" },
  { name: "Command", slug: "command" },
  { name: "Context Menu", slug: "context-menu" },
  { name: "Dialog", slug: "dialog" },
  { name: "Drawer", slug: "drawer" },
  { name: "Dropdown Menu", slug: "dropdown-menu" },
  { name: "Form", slug: "form" },
  { name: "Hover Card", slug: "hover-card" },
  { name: "Input", slug: "input" },
  { name: "Input OTP", slug: "input-otp" },
  { name: "Label", slug: "label" },
  { name: "Menubar", slug: "menubar" },
  { name: "Navigation Menu", slug: "navigation-menu" },
  { name: "Pagination", slug: "pagination" },
  { name: "Popover", slug: "popover" },
  { name: "Progress", slug: "progress" },
  { name: "Radio Group", slug: "radio-group" },
  { name: "Resizable", slug: "resizable" },
  { name: "Scroll Area", slug: "scroll-area" },
  { name: "Select", slug: "select" },
  { name: "Separator", slug: "separator" },
  { name: "Sheet", slug: "sheet" },
  { name: "Sidebar", slug: "sidebar" },
  { name: "Skeleton", slug: "skeleton" },
  { name: "Slider", slug: "slider" },
  { name: "Sonner", slug: "sonner" },
  { name: "Switch", slug: "switch" },
  { name: "Table", slug: "table" },
  { name: "Tabs", slug: "tabs" },
  { name: "Textarea", slug: "textarea" },
  { name: "Toggle", slug: "toggle" },
  { name: "Toggle Group", slug: "toggle-group" },
  { name: "Tooltip", slug: "tooltip" },
]

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Using background color instead of border */}
      <aside className="w-64 flex-shrink-0 bg-muted/30 flex flex-col h-full">
        {/* Sidebar Header - Using spacing instead of border */}
        <div className="p-6 flex flex-col gap-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
              Design System
            </Link>
            <ThemeSwitcher />
          </div>
          <div className="flex gap-2">
            <Link 
              href="/components" 
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-sm font-medium text-center transition-colors",
                pathname.startsWith("/components")
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              Components
            </Link>
            <Link 
              href="/storyboard" 
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-sm font-medium text-center transition-colors",
                pathname.startsWith("/storyboard")
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              Storyboard
            </Link>
          </div>
        </div>
        
        {/* Sidebar Navigation - More spacing, better hover states */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
          {components.map((component) => {
            const isActive = pathname === `/components/${component.slug}`
            return (
              <Link
                key={component.slug}
                href={`/components/${component.slug}`}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm transition-all duration-200",
                  isActive
                    ? "bg-background text-foreground font-medium shadow-sm"
                    : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                )}
              >
                {component.name}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main content - Clean background */}
      <main className="flex-1 overflow-y-auto bg-background" style={{ scrollbarGutter: "stable" }}>
        {children}
      </main>
    </div>
  )
}