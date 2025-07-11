"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ComponentExample } from "@/lib/component-docs"
import { 
  Home, 
  Settings, 
  User, 
  FileText, 
  Search,
  Bell,
  Calendar,
  Mail,
  BarChart,
  Folder,
  ChevronRight,
  LogOut,
  HelpCircle
} from "lucide-react"

export const sidebarExamples: ComponentExample[] = [
  {
    title: "Basic Sidebar",
    description: "A simple sidebar with navigation items.",
    code: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="h-4 w-4" />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <main className="flex-1 p-6">
    <SidebarTrigger />
    <p>Main content goes here</p>
  </main>
</SidebarProvider>`,
    component: () => (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Application</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-6">
              <SidebarTrigger />
              <p>Main content goes here</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )
  },
  {
    title: "Sidebar with Header and Footer",
    description: "Complete sidebar layout with header and footer sections.",
    code: `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <div className="flex items-center gap-2 px-2 py-1.5">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
          A
        </div>
        <span className="font-semibold">Acme Corp</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <User className="h-4 w-4" />
            <span>John Doe</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</SidebarProvider>`,
    component: () => (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar>
              <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-1.5">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                    A
                  </div>
                  <span className="font-semibold">Acme Corp</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <FileText className="h-4 w-4" />
                          <span>Documents</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <User className="h-4 w-4" />
                      <span>John Doe</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
            <main className="flex-1 p-6">
              <SidebarTrigger />
              <p>Main content area</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )
  },
  {
    title: "Multiple Groups",
    description: "Sidebar with multiple grouped sections.",
    code: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <BarChart className="h-4 w-4" />
                <span>Analytics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      
      <SidebarGroup>
        <SidebarGroupLabel>Communication</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Mail className="h-4 w-4" />
                <span>Messages</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      
      <SidebarGroup>
        <SidebarGroupLabel>Support</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <HelpCircle className="h-4 w-4" />
                <span>Help Center</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`,
    component: () => (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Main</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <BarChart className="h-4 w-4" />
                          <span>Analytics</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarGroup>
                  <SidebarGroupLabel>Communication</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Mail className="h-4 w-4" />
                          <span>Messages</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Bell className="h-4 w-4" />
                          <span>Notifications</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarGroup>
                  <SidebarGroupLabel>Support</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <HelpCircle className="h-4 w-4" />
                          <span>Help Center</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-6">
              <SidebarTrigger />
              <p>Main content area</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )
  },
  {
    title: "Nested Menu Items",
    description: "Sidebar with submenu items.",
    code: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Folder className="h-4 w-4" />
                <span>Projects</span>
                <ChevronRight className="ml-auto h-4 w-4" />
              </SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>
                    <span>Project Alpha</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>
                    <span>Project Beta</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>
                    <span>Project Gamma</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`,
    component: () => (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Folder className="h-4 w-4" />
                          <span>Projects</span>
                          <ChevronRight className="ml-auto h-4 w-4" />
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>Project Alpha</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>Project Beta</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>Project Gamma</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-6">
              <SidebarTrigger />
              <p>Main content area</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )
  },
  {
    title: "Active States",
    description: "Sidebar with active and hover states.",
    code: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <BarChart className="h-4 w-4" />
                <span>Analytics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="h-4 w-4" />
                <span>Users</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton disabled>
                <Settings className="h-4 w-4" />
                <span>Settings (Disabled)</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`,
    component: () => (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <Home className="h-4 w-4" />
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <BarChart className="h-4 w-4" />
                          <span>Analytics</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <User className="h-4 w-4" />
                          <span>Users</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton disabled>
                          <Settings className="h-4 w-4" />
                          <span>Settings (Disabled)</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-6">
              <SidebarTrigger />
              <p>Dashboard content</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )
  },
  {
    title: "Complete Application Sidebar",
    description: "Full-featured sidebar with search, navigation, and user menu.",
    code: `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <div className="px-2 py-1.5">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            A
          </div>
          <span className="font-semibold">Acme Inc</span>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input 
            type="search" 
            placeholder="Search..." 
            className="w-full pl-8 pr-3 py-2 rounded-md border border-input bg-background text-sm"
          />
        </div>
      </div>
    </SidebarHeader>
    
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Calendar className="h-4 w-4" />
                <span>Calendar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Mail className="h-4 w-4" />
                <span>Messages</span>
                <span className="ml-auto text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      
      <SidebarGroup>
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Folder className="h-4 w-4" />
                <span>Project Alpha</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Folder className="h-4 w-4" />
                <span>Project Beta</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HelpCircle className="h-4 w-4" />
            <span>Help & Support</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <div className="border-t pt-4 mt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-muted" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
    </SidebarFooter>
  </Sidebar>
</SidebarProvider>`,
    component: () => (
      <div className="h-[600px] w-full border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar>
              <SidebarHeader>
                <div className="px-2 py-1.5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      A
                    </div>
                    <span className="font-semibold">Acme Inc</span>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input 
                      type="search" 
                      placeholder="Search..." 
                      className="w-full pl-8 pr-3 py-2 rounded-md border border-input bg-background text-sm"
                    />
                  </div>
                </div>
              </SidebarHeader>
              
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <Home className="h-4 w-4" />
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <FileText className="h-4 w-4" />
                          <span>Documents</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Calendar className="h-4 w-4" />
                          <span>Calendar</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Mail className="h-4 w-4" />
                          <span>Messages</span>
                          <span className="ml-auto text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
                            3
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarGroup>
                  <SidebarGroupLabel>Projects</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Folder className="h-4 w-4" />
                          <span>Project Alpha</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Folder className="h-4 w-4" />
                          <span>Project Beta</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <HelpCircle className="h-4 w-4" />
                      <span>Help & Support</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LogOut className="h-4 w-4" />
                      <span>Log Out</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
                <div className="border-t pt-4 mt-4">
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-muted" />
                          <div className="flex-1 text-left">
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-muted-foreground">john@example.com</p>
                          </div>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </div>
              </SidebarFooter>
            </Sidebar>
            <main className="flex-1 p-6">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold mt-4">Dashboard</h1>
              <p className="text-muted-foreground mt-2">Welcome back, John!</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )
  },
  {
    title: "Collapsible Sidebar",
    description: "Sidebar that can be collapsed to icon-only mode.",
    code: `<SidebarProvider defaultOpen={false}>
  <div className="flex h-full">
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                A
              </div>
              <span>Acme Inc</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Home">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Analytics">
                  <BarChart className="h-4 w-4" />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    
    <main className="flex-1 p-6">
      <SidebarTrigger />
      <p>Click the trigger to toggle the sidebar</p>
    </main>
  </div>
</SidebarProvider>`,
    component: () => (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden">
        <SidebarProvider defaultOpen={false}>
          <div className="flex h-full">
            <Sidebar collapsible="icon">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        A
                      </div>
                      <span>Acme Inc</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Home">
                          <Home className="h-4 w-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Analytics">
                          <BarChart className="h-4 w-4" />
                          <span>Analytics</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Settings">
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            
            <main className="flex-1 p-6">
              <SidebarTrigger />
              <p>Click the trigger to toggle the sidebar</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    )
  }
]