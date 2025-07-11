"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Cloud, CreditCard, Github, Home, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, Store, User, UserPlus, Users, FileText, BarChart3 } from "lucide-react"
import Link from "next/link"
import React from "react"
import { cn } from "@/lib/utils"

export default function NavigationPage() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)
  const [position, setPosition] = React.useState("bottom")

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Navigation</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Essential navigation components for organizing content and improving user experience.
        </p>
      </div>

      {/* Navigation Menu */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            A sophisticated navigation menu component with dropdown capabilities for complex site structures.
          </p>
        </div>

        <PreviewContainer
          title="Basic Navigation Menu"
          description="A navigation menu with dropdown items and links"
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  Design System
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Beautiful components built with Radix UI and Tailwind CSS.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Typography">
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          <ListItem href="/components/alert-dialog" title="Alert Dialog">
            A modal dialog that interrupts with important content.
          </ListItem>
          <ListItem href="/components/button" title="Button">
            Displays a button or a component that looks like a button.
          </ListItem>
          <ListItem href="/components/dropdown-menu" title="Dropdown Menu">
            Displays a menu to the user triggered by a button.
          </ListItem>
          <ListItem href="/components/navigation-menu" title="Navigation Menu">
            A collection of links for navigating websites.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/docs" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
          Documentation
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          component={
            <div className="flex items-center justify-center p-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Design System
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautiful components built with Radix UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind CSS.
                        </ListItem>
                        <ListItem href="/docs/installation" title="Installation">
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="Typography">
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/components/alert-dialog" title="Alert Dialog">
                          A modal dialog that interrupts with important content.
                        </ListItem>
                        <ListItem href="/components/button" title="Button">
                          Displays a button or a component that looks like a button.
                        </ListItem>
                        <ListItem href="/components/dropdown-menu" title="Dropdown Menu">
                          Displays a menu to the user triggered by a button.
                        </ListItem>
                        <ListItem href="/components/navigation-menu" title="Navigation Menu">
                          A collection of links for navigating websites.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/docs" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Documentation
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          }
        />
      </section>

      {/* Dropdown Menu */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dropdown Menu</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            A comprehensive dropdown menu component with support for submenus, groups, and keyboard shortcuts.
          </p>
        </div>

        <PreviewContainer
          title="Basic Dropdown"
          description="Simple dropdown menu with various action items"
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Open Menu
      <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Keyboard className="mr-2 h-4 w-4" />
        <span>Keyboard shortcuts</span>
        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <Users className="mr-2 h-4 w-4" />
        <span>Team</span>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <UserPlus className="mr-2 h-4 w-4" />
          <span>Invite users</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Message</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>More...</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem>
        <Plus className="mr-2 h-4 w-4" />
        <span>New Team</span>
        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Github className="mr-2 h-4 w-4" />
      <span>GitHub</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <LifeBuoy className="mr-2 h-4 w-4" />
      <span>Support</span>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <Cloud className="mr-2 h-4 w-4" />
      <span>API</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
          component={
            <div className="flex items-center justify-center p-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Open Menu
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Keyboard className="mr-2 h-4 w-4" />
                      <span>Keyboard shortcuts</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          }
        />

        <PreviewContainer
          title="Icon Dropdown"
          description="Dropdown triggered by an icon button"
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <Settings className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Preferences</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
          component={
            <div className="flex items-center justify-center p-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Preferences</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          }
        />

        <PreviewContainer
          title="Dropdown with Checkboxes and Radio"
          description="Dropdown menu with checkbox and radio items showing active states"
          code={`const [showStatusBar, setShowStatusBar] = useState(true)
const [showActivityBar, setShowActivityBar] = useState(false)
const [showPanel, setShowPanel] = useState(false)
const [position, setPosition] = useState("bottom")

return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        View Options
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        checked={showStatusBar}
        onCheckedChange={setShowStatusBar}
      >
        Show Status Bar
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={showActivityBar}
        onCheckedChange={setShowActivityBar}
      >
        Show Activity Bar
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={showPanel}
        onCheckedChange={setShowPanel}
      >
        Show Panel
      </DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Position</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)`}
          component={
            <div className="flex items-center justify-center p-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    View Options
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Show Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                  >
                    Show Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                  >
                    Show Panel
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          }
        />
      </section>

      {/* Breadcrumb */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Breadcrumb</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Shows the user's current location within a website's hierarchy and enables navigation.
          </p>
        </div>

        <PreviewContainer
          title="Basic Breadcrumb"
          description="Simple breadcrumb navigation"
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          }
        />

        <PreviewContainer
          title="Breadcrumb with Icons"
          description="Breadcrumb with home icon and custom separators"
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">
        <Home className="h-4 w-4" />
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard/analytics">Analytics</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Reports</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/analytics">Analytics</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Reports</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          }
        />

        <PreviewContainer
          title="Collapsed Breadcrumb"
          description="Breadcrumb with collapsed items using ellipsis"
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis className="h-4 w-4" />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Navigation</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Navigation</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          }
        />
      </section>

      {/* Tabs */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Organize content into different sections that users can switch between.
          </p>
        </div>

        <PreviewContainer
          title="Basic Tabs"
          description="Simple tab component with content panels"
          code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="team">Team</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Account settings content goes here.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Password change form goes here.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="team">
    <Card>
      <CardHeader>
        <CardTitle>Team</CardTitle>
        <CardDescription>
          Manage your team members and their permissions here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Team management interface goes here.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="billing">
    <Card>
      <CardHeader>
        <CardTitle>Billing</CardTitle>
        <CardDescription>
          Manage your subscription and billing details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Billing information goes here.</p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when you're done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Account settings content goes here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you'll be logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Password change form goes here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="team">
                  <Card>
                    <CardHeader>
                      <CardTitle>Team</CardTitle>
                      <CardDescription>
                        Manage your team members and their permissions here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Team management interface goes here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="billing">
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing</CardTitle>
                      <CardDescription>
                        Manage your subscription and billing details.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Billing information goes here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          }
        />

        <PreviewContainer
          title="Tabs with Icons"
          description="Tab triggers with icons for better visual context"
          code={`<Tabs defaultValue="dashboard" className="w-[500px]">
  <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="dashboard">
      <Home className="h-4 w-4 mr-2" />
      Dashboard
    </TabsTrigger>
    <TabsTrigger value="analytics">
      <BarChart3 className="h-4 w-4 mr-2" />
      Analytics
    </TabsTrigger>
    <TabsTrigger value="reports">
      <FileText className="h-4 w-4 mr-2" />
      Reports
    </TabsTrigger>
    <TabsTrigger value="store">
      <Store className="h-4 w-4 mr-2" />
      Store
    </TabsTrigger>
  </TabsList>
  <TabsContent value="dashboard">
    <Card>
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Your dashboard content and metrics.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="analytics">
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Detailed analytics and insights.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="reports">
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Generated reports and downloads.</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="store">
    <Card>
      <CardHeader>
        <CardTitle>Store Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Manage your store settings and inventory.</p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Tabs defaultValue="dashboard" className="w-[500px]">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="dashboard">
                    <Home className="h-4 w-4 mr-2" />
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger value="analytics">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger value="reports">
                    <FileText className="h-4 w-4 mr-2" />
                    Reports
                  </TabsTrigger>
                  <TabsTrigger value="store">
                    <Store className="h-4 w-4 mr-2" />
                    Store
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dashboard Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Your dashboard content and metrics.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="analytics">
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Detailed analytics and insights.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reports">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Generated reports and downloads.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="store">
                  <Card>
                    <CardHeader>
                      <CardTitle>Store Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Manage your store settings and inventory.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          }
        />
      </section>

      {/* Pagination */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Pagination</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Navigate through multiple pages of content with various pagination styles.
          </p>
        </div>

        <PreviewContainer
          title="Basic Pagination"
          description="Standard pagination with previous and next buttons"
          code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
        />

        <PreviewContainer
          title="Pagination with Ellipsis"
          description="Large page sets with ellipsis for better navigation"
          code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">67</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">68</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">67</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">68</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
        />

        <PreviewContainer
          title="Simple Pagination"
          description="Minimal pagination with just previous and next buttons"
          code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <span className="px-4 text-sm text-muted-foreground">
        Page 2 of 10
      </span>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          component={
            <div className="flex items-center justify-center p-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <span className="px-4 text-sm text-muted-foreground">
                      Page 2 of 10
                    </span>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          }
        />
      </section>
    </div>
  )
}

// Helper component for NavigationMenu list items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"