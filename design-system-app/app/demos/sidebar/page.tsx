"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  HomeIcon, 
  ChartBarIcon, 
  UsersIcon, 
  FolderIcon, 
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  CogIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline"
import { Menu as MenuIcon } from "lucide-react"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarItem,
  SidebarLink,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Main",
    items: [
      { name: "Dashboard", href: "#", icon: HomeIcon },
      { name: "Projects", href: "#", icon: FolderIcon },
      { name: "Calendar", href: "#", icon: CalendarIcon },
    ]
  },
  {
    name: "Analytics",
    items: [
      { name: "Reports", href: "#", icon: ChartPieIcon },
      { name: "Team Insights", href: "#", icon: UsersIcon },
      { name: "Documents", href: "#", icon: DocumentDuplicateIcon },
    ]
  }
]

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H" },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T" },
  { id: 3, name: "Workcation", href: "#", initial: "W" },
]

const settings = [
  { name: "Profile", href: "#", icon: UsersIcon },
  { name: "Preferences", href: "#", icon: CogIcon },
]

export default function SidebarDemoPage() {
  const [open, setOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("Dashboard")
  const [activeTeam, setActiveTeam] = useState<number | null>(null)
  const [expandedSections, setExpandedSections] = useState<string[]>(["Main", "Teams"])
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  return (
    <div className="flex h-screen w-full relative overflow-hidden">
      {/* Mobile trigger */}
      <div className="lg:hidden absolute top-4 left-4 z-10">
        <SidebarTrigger icon={MenuIcon} onOpen={() => setOpen(true)} />
      </div>
      
      {/* Back to storyboard link */}
      <Link 
        href="/storyboard/components/navigation"
        className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to Navigation Components
      </Link>
      
      <Sidebar open={open} onOpenChange={setOpen}>
        <SidebarHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ChartBarIcon className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg">Acme Inc</span>
          </div>
        </SidebarHeader>
        
        <SidebarContent>
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            {/* Main Navigation */}
            <SidebarGroup>
              {navigation[0].items.map((item) => (
                <SidebarItem key={item.name}>
                  <SidebarLink
                    href={item.href}
                    active={activeNav === item.name}
                    icon={item.icon}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveNav(item.name)
                      setActiveTeam(null)
                    }}
                  >
                    {item.name}
                  </SidebarLink>
                </SidebarItem>
              ))}
            </SidebarGroup>
            
            {/* Categories with Collapsibles */}
            <SidebarGroup label="Categories">
              {navigation.slice(1).map((section) => (
                <SidebarItem key={section.name}>
                  <Collapsible
                    open={expandedSections.includes(section.name)}
                    onOpenChange={() => toggleSection(section.name)}
                  >
                    <CollapsibleTrigger asChild>
                      <button className="group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200">
                        <ChevronDownIcon
                          className={cn(
                            "size-5 shrink-0 transition-transform duration-200",
                            expandedSections.includes(section.name) && "rotate-180"
                          )}
                        />
                        <span className="truncate">{section.name}</span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <ul className="mt-1 space-y-1 px-2">
                        {section.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-md py-2 px-3 text-sm transition-colors duration-150",
                                activeNav === item.name
                                  ? "bg-muted text-primary font-semibold"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground font-normal"
                              )}
                              onClick={(e) => {
                                e.preventDefault()
                                setActiveNav(item.name)
                                setActiveTeam(null)
                              }}
                            >
                              <span className="flex items-center justify-between">
                                {item.name}
                                <span className="text-xs">3</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarItem>
              ))}
              
              {/* Teams Collapsible */}
              <SidebarItem>
                <Collapsible
                  open={expandedSections.includes("Teams")}
                  onOpenChange={() => toggleSection("Teams")}
                >
                  <CollapsibleTrigger asChild>
                    <button className="group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200">
                      <ChevronDownIcon
                        className={cn(
                          "size-5 shrink-0 transition-transform duration-200",
                          expandedSections.includes("Teams") && "rotate-180"
                        )}
                      />
                      <span className="truncate">Teams</span>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <ul className="mt-1 space-y-1 px-2">
                      {teams.map((team) => (
                        <li key={team.id}>
                          <Link
                            href={team.href}
                            className={cn(
                              "block rounded-md py-2 px-3 text-sm transition-colors duration-150",
                              activeTeam === team.id
                                ? "bg-muted text-primary font-semibold"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground font-normal"
                            )}
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveTeam(team.id)
                              setActiveNav("")
                            }}
                          >
                            <span className="flex items-center gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-[0.625rem] font-medium">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarItem>
            </SidebarGroup>
          </ul>
        </SidebarContent>
        
        <SidebarFooter>
          <div className="group flex gap-x-3 rounded-md p-2 text-sm/6 font-medium text-muted-foreground">
            <span className="flex-1">Theme</span>
            <ThemeSwitcher />
          </div>
        </SidebarFooter>
      </Sidebar>
      
      {/* Main content area */}
      <div className="flex-1 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground">
              {activeNav || (activeTeam && teams.find(t => t.id === activeTeam)?.name) || "Sidebar Demo"}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              This is a full-page demo of the sidebar component. The sidebar is responsive and automatically switches between desktop and mobile layouts.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-border p-6">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Responsive design with mobile drawer</li>
                  <li>• Multiple variants (default, subtle, ghost)</li>
                  <li>• Configurable sizes with max-width constraints</li>
                  <li>• Collapsible sections</li>
                  <li>• Active state management</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Smooth animations</li>
                  <li>• Dark mode support</li>
                </ul>
              </div>
              
              <div className="rounded-lg border border-border p-6">
                <h2 className="text-xl font-semibold mb-4">Usage</h2>
                <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
{`import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarItem,
  SidebarLink,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Mobile trigger (outside Sidebar)
<SidebarTrigger icon={MenuIcon} onOpen={() => setOpen(true)} />

// Sidebar component
<Sidebar open={open} onOpenChange={setOpen}>
  <SidebarHeader>
    {/* Header content */}
  </SidebarHeader>
  
  <SidebarContent>
    {/* Navigation items */}
  </SidebarContent>
  
  <SidebarFooter>
    {/* Footer content */}
  </SidebarFooter>
</Sidebar>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}