"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { ContextMenuExample } from "./context-menu-example"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Cloud, CreditCard, Github, Home, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, Store, User, UserPlus, Users, FileText, BarChart3, Calculator, Calendar, Search, Smile, CreditCard as CreditCardIcon } from "lucide-react"
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
        <h1 className="text-4xl font-bold text-foreground">Navigation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Essential navigation components for organizing content and improving user experience.
        </p>
      </div>

      {/* Navigation Menu */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
          <p className="text-muted-foreground mb-6">
            A sophisticated navigation menu component with dropdown capabilities for complex site structures.
          </p>
        </div>

        <PreviewContainer
          title="Basic Navigation Menu"
          description="A navigation menu with dropdown items and links"
          className="!overflow-visible"
          minHeight="min-h-[500px]"
          contentAlignment="top"
          allowOverflow={true}
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="group flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:from-primary hover:to-primary hover:text-primary-foreground focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium text-foreground group-hover:text-primary-foreground">
                  Design System
                </div>
                <p className="text-sm leading-tight text-muted-foreground group-hover:text-primary-foreground">
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
        <Link href="/docs" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50">
          Documentation
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          component={
            <div className="relative flex items-center justify-center gap-4 overflow-visible">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="group flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:from-primary hover:to-primary hover:text-primary-foreground focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-foreground group-hover:text-primary-foreground">
                                Design System
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground group-hover:text-primary-foreground">
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
                      <Link href="/docs" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50">
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
          <p className="text-muted-foreground mb-6">
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
            <div className="flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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

      {/* Menubar */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Menubar</h2>
          <p className="text-muted-foreground mb-6">
            A horizontal menu bar typically used for application-level navigation and commands.
          </p>
        </div>

        <PreviewContainer
          title="Basic Menubar"
          description="Standard menubar with dropdown menus"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem disabled>New Incognito Window</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email link</MenubarItem>
          <MenubarItem>Messages</MenubarItem>
          <MenubarItem>Notes</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>
        Print... <MenubarShortcut>⌘P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Find</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Search the web</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Find...</MenubarItem>
          <MenubarItem>Find Next</MenubarItem>
          <MenubarItem>Find Previous</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
      <MenubarCheckboxItem checked>
        Always Show Full URLs
      </MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarItem inset>
        Reload <MenubarShortcut>⌘R</MenubarShortcut>
      </MenubarItem>
      <MenubarItem disabled inset>
        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem inset>Toggle Fullscreen</MenubarItem>
      <MenubarSeparator />
      <MenubarItem inset>Hide Sidebar</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarRadioGroup value="john">
        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
        <MenubarRadioItem value="john">John</MenubarRadioItem>
        <MenubarRadioItem value="julia">Julia</MenubarRadioItem>
      </MenubarRadioGroup>
      <MenubarSeparator />
      <MenubarItem inset>Edit...</MenubarItem>
      <MenubarSeparator />
      <MenubarItem inset>Add Profile...</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          component={
            <div className="flex items-center justify-center">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Email link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Find</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Search the web</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Find...</MenubarItem>
                        <MenubarItem>Find Next</MenubarItem>
                        <MenubarItem>Find Previous</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                      Always Show Full URLs
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                      Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                      Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Profiles</MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioGroup value="john">
                      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="john">John</MenubarRadioItem>
                      <MenubarRadioItem value="julia">Julia</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Profile...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          }
        />

        <PreviewContainer
          title="Menubar with Icons"
          description="Menubar with icons in menu items"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Account</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
      </MenubarItem>
      <MenubarItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
      </MenubarItem>
      <MenubarItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Help</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        <LifeBuoy className="mr-2 h-4 w-4" />
        <span>Support</span>
      </MenubarItem>
      <MenubarItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>Documentation</span>
      </MenubarItem>
      <MenubarItem>
        <Keyboard className="mr-2 h-4 w-4" />
        <span>Keyboard shortcuts</span>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          component={
            <div className="flex items-center justify-center">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Account</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </MenubarItem>
                    <MenubarItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </MenubarItem>
                    <MenubarItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Help</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <span>Support</span>
                    </MenubarItem>
                    <MenubarItem>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Documentation</span>
                    </MenubarItem>
                    <MenubarItem>
                      <Keyboard className="mr-2 h-4 w-4" />
                      <span>Keyboard shortcuts</span>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          }
        />
      </section>

      {/* Breadcrumb */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Breadcrumb</h2>
          <p className="text-muted-foreground mb-6">
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
            <div className="flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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
          <p className="text-muted-foreground mb-6">
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
            <div className="flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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
          <p className="text-muted-foreground mb-6">
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
            <div className="flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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

      {/* Context Menu */}
      <ContextMenuExample />

      {/* Command */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Command</h2>
          <p className="text-muted-foreground mb-6">
            Fast, composable command menu with keyboard navigation, search, and item selection.
          </p>
        </div>

        <PreviewContainer
          title="Basic Command Menu"
          description="Command palette with search and keyboard navigation"
          code={`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          component={
            <div className="flex items-center justify-center">
              <Command className="rounded-lg border shadow-md w-[450px]">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 h-4 w-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCardIcon className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          }
        />

        <PreviewContainer
          title="Command Dialog"
          description="Command menu in a dialog/modal format"
          code={`const [open, setOpen] = React.useState(false)

React.useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

return (
  <>
    <p className="text-sm text-muted-foreground">
      Press{" "}
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
    </p>
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => { console.log("Calendar"); setOpen(false) }}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem onSelect={() => { console.log("Search Emoji"); setOpen(false) }}>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem onSelect={() => { console.log("Calculator"); setOpen(false) }}>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => { console.log("Profile"); setOpen(false) }}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => { console.log("Billing"); setOpen(false) }}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => { console.log("Settings"); setOpen(false) }}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </>
)`}
          component={
            <CommandDialogDemo />
          }
        />

        <PreviewContainer
          title="Command with Disabled Items"
          description="Command menu with some disabled items"
          code={`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Search features..." />
  <CommandList>
    <CommandEmpty>No features found.</CommandEmpty>
    <CommandGroup heading="Features">
      <CommandItem>
        <Search className="mr-2 h-4 w-4" />
        <span>Search</span>
      </CommandItem>
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>Documents</span>
      </CommandItem>
      <CommandItem disabled>
        <Cloud className="mr-2 h-4 w-4" />
        <span>Cloud Sync</span>
        <span className="ml-auto text-xs text-muted-foreground">Coming soon</span>
      </CommandItem>
      <CommandItem>
        <Github className="mr-2 h-4 w-4" />
        <span>GitHub Integration</span>
      </CommandItem>
      <CommandItem disabled>
        <BarChart3 className="mr-2 h-4 w-4" />
        <span>Analytics</span>
        <span className="ml-auto text-xs text-muted-foreground">Pro only</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          component={
            <div className="flex items-center justify-center">
              <Command className="rounded-lg border shadow-md w-[450px]">
                <CommandInput placeholder="Search features..." />
                <CommandList>
                  <CommandEmpty>No features found.</CommandEmpty>
                  <CommandGroup heading="Features">
                    <CommandItem>
                      <Search className="mr-2 h-4 w-4" />
                      <span>Search</span>
                    </CommandItem>
                    <CommandItem>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Documents</span>
                    </CommandItem>
                    <CommandItem disabled>
                      <Cloud className="mr-2 h-4 w-4" />
                      <span>Cloud Sync</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming soon</span>
                    </CommandItem>
                    <CommandItem>
                      <Github className="mr-2 h-4 w-4" />
                      <span>GitHub Integration</span>
                    </CommandItem>
                    <CommandItem disabled>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      <span>Analytics</span>
                      <span className="ml-auto text-xs text-muted-foreground">Pro only</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
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
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-foreground group-hover:text-primary-foreground group-focus:text-primary-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-foreground group-focus:text-primary-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// Command Dialog Demo Component
function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
        <Button onClick={() => setOpen(true)} variant="outline">
          Open Command Menu
        </Button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => { console.log("Calendar"); setOpen(false) }}>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => { console.log("Search Emoji"); setOpen(false) }}>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem onSelect={() => { console.log("Calculator"); setOpen(false) }}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => { console.log("Profile"); setOpen(false) }}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { console.log("Billing"); setOpen(false) }}>
              <CreditCardIcon className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { console.log("Settings"); setOpen(false) }}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}