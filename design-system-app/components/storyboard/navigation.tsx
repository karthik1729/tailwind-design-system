"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  HomeIcon,
  SwatchIcon,
  CubeIcon,
  DocumentTextIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"
import { componentRegistry } from "@/lib/component-registry"
import { ThemeSwitcher } from "@/components/theme-switcher"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarItem,
  SidebarLink,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navigation = [
  { name: "Overview", href: "/storyboard", icon: HomeIcon, current: false },
  { name: "Foundations", href: "/storyboard/foundations", icon: SwatchIcon, current: false },
  { name: "Components", href: "/storyboard/components", icon: CubeIcon, current: false },
  { name: "Patterns", href: "/storyboard/patterns", icon: DocumentTextIcon, current: false },
]


interface StoryboardNavigationProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  currentTheme: 'light' | 'dark'
}

export function StoryboardNavigation({ sidebarOpen, setSidebarOpen, currentTheme }: StoryboardNavigationProps) {
  const pathname = usePathname()
  // Start with all categories expanded to prevent flicker
  const [expandedCategories, setExpandedCategories] = useState<string[]>(() => {
    // Get all category keys to expand them by default
    return Object.keys(componentRegistry)
  })

  const NavigationContent = () => (
    <>
      <SidebarHeader>
        <Link href="/storyboard" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CubeIcon className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg">Design System</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <SidebarGroup>
            {navigation.map((item) => (
              <SidebarItem key={item.name}>
                <SidebarLink
                  href={item.href}
                  active={pathname === item.href}
                  icon={item.icon}
                >
                  {item.name}
                </SidebarLink>
              </SidebarItem>
            ))}
          </SidebarGroup>
          
          <SidebarGroup label="Categories">
            {Object.entries(componentRegistry).map(([key, category]) => {
              const isExpanded = expandedCategories.includes(key)
              return (
                <SidebarItem key={key}>
                  <div>
                    <button 
                      onClick={() => {
                        if (isExpanded) {
                          setExpandedCategories(prev => prev.filter(c => c !== key))
                        } else {
                          setExpandedCategories(prev => [...prev, key])
                        }
                      }}
                      className="group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
                    >
                      <ChevronDownIcon
                        className={cn(
                          "size-5 shrink-0 transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                      />
                      <span className="truncate">{category.name}</span>
                    </button>
                    {/* Always render the content, just hide it with CSS */}
                    <ul className={cn(
                      "mt-1 space-y-1 px-2 overflow-hidden transition-all duration-200",
                      isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                        <li key={subKey}>
                          <Link
                            href={`/storyboard/${key}/${subKey}`}
                            className={cn(
                              "block rounded-md py-2 px-3 text-sm transition-colors duration-150",
                              pathname === `/storyboard/${key}/${subKey}`
                                ? "bg-muted text-primary font-semibold"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground font-normal"
                            )}
                          >
                            <span className="flex items-center justify-between">
                              {subcategory.name}
                              <span className="text-xs">{subcategory.count}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SidebarItem>
              )
            })}
          </SidebarGroup>
        </ul>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="group flex gap-x-3 rounded-md p-2 text-sm/6 font-medium text-muted-foreground">
          <span className="flex-1">Theme</span>
          <ThemeSwitcher currentTheme={currentTheme} />
        </div>
      </SidebarFooter>
    </>
  )

  return (
    <Sidebar
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
      showMobileCloseButton
    >
      <NavigationContent />
    </Sidebar>
  )
}