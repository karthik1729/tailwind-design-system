"use client"

import * as React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  BarChart3,
  FileText,
  Home,
  Settings,
  Users,
  Building2,
  Package,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react"

const collapsibleModes = [
  { value: "icon", label: "Icon Mode" },
  { value: "offcanvas", label: "Off-canvas" },
  { value: "none", label: "Always Visible" },
]

export default function SidebarDemoPage() {
  const [variant, setVariant] = React.useState<"sidebar" | "floating" | "inset">("sidebar")
  const [collapsible, setCollapsible] = React.useState<"icon" | "offcanvas" | "none">("icon")
  const [activeItem, setActiveItem] = React.useState("dashboard")

  return (
    <div className="flex min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex h-full w-full overflow-hidden">
            <Sidebar
              variant={variant}
              collapsible={collapsible}
              className="border-r"
            >
              <SidebarHeader className="px-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Building2 className="size-5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0 leading-none">
                    <span className="font-semibold text-lg truncate">Acme Inc</span>
                    <span className="text-sm text-muted-foreground truncate">Dashboard</span>
                  </div>
                </div>
              </SidebarHeader>

              <SidebarContent>
                {/* Main Navigation */}
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "dashboard"}
                          onClick={() => setActiveItem("dashboard")}
                          tooltip="Dashboard"
                        >
                          <Home className="shrink-0" />
                          <span className="truncate">Dashboard</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "analytics"}
                          onClick={() => setActiveItem("analytics")}
                          tooltip="Analytics"
                        >
                          <BarChart3 className="shrink-0" />
                          <span className="truncate">Analytics</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "products"}
                          onClick={() => setActiveItem("products")}
                          tooltip="Products"
                        >
                          <Package className="shrink-0" />
                          <span className="truncate">Products</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "customers"}
                          onClick={() => setActiveItem("customers")}
                          tooltip="Customers"
                        >
                          <Users className="shrink-0" />
                          <span className="truncate">Customers</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "documents"}
                          onClick={() => setActiveItem("documents")}
                          tooltip="Documents"
                        >
                          <FileText className="shrink-0" />
                          <span className="truncate">Documents</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                {/* Teams */}
                <SidebarGroup>
                  <SidebarGroupLabel>Your teams</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "engineering"}
                          onClick={() => setActiveItem("engineering")}
                        >
                          <span className="ml-1 truncate">Engineering</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "sales"}
                          onClick={() => setActiveItem("sales")}
                        >
                          <span className="ml-1 truncate">Sales</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={activeItem === "marketing"}
                          onClick={() => setActiveItem("marketing")}
                        >
                          <span className="ml-1 truncate">Marketing</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>

              <SidebarFooter className="px-6 pb-4">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Billing"
                      onClick={() => setActiveItem("billing")}
                    >
                      <CreditCard className="shrink-0" />
                      <span className="truncate">Billing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Settings"
                      onClick={() => setActiveItem("settings")}
                    >
                      <Settings className="shrink-0" />
                      <span className="truncate">Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarSeparator className="my-2" />
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Avatar className="h-10 w-10 shrink-0">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 min-w-0 text-left leading-tight">
                        <span className="truncate font-semibold text-sm">John Doe</span>
                        <span className="truncate text-sm text-muted-foreground">
                          john@acme.com
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
              <SidebarRail />
            </Sidebar>

            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <div className="mx-2 h-4 w-px bg-border" />
                <div className="flex flex-1 items-center gap-2 text-sm">
                  <span className="font-medium capitalize">{activeItem.replace(/-/g, " ")}</span>
                </div>
              </header>

              {/* Main Content Area */}
              <div className="flex-1 p-6 overflow-auto">
                <div className="max-w-6xl mx-auto">
                  {/* Back link and configuration */}
                  <div className="mb-8">
                    <Link href="/storyboard/components/navigation" className="inline-flex items-center gap-2 mb-6 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back to Navigation</span>
                    </Link>
                    
                    <div className="mb-8">
                      <h1 className="text-3xl font-bold mb-2">Professional Sidebar Demo</h1>
                      <p className="text-muted-foreground">
                        A clean, professional sidebar implementation following Tailwind Plus design standards.
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 max-w-2xl mb-8">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Sidebar Variant</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <RadioGroup value={variant} onValueChange={(v) => setVariant(v as any)}>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sidebar" id="sidebar" />
                              <Label htmlFor="sidebar">Default</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="floating" id="floating" />
                              <Label htmlFor="floating">Floating</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="inset" id="inset" />
                              <Label htmlFor="inset">Inset</Label>
                            </div>
                          </RadioGroup>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Collapse Mode</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <RadioGroup value={collapsible} onValueChange={(v) => setCollapsible(v as any)}>
                            {collapsibleModes.map((mode) => (
                              <div key={mode.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={mode.value} id={mode.value} />
                                <Label htmlFor={mode.value}>{mode.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Demo content */}
                  <DemoContent activeItem={activeItem} />
                </div>
              </div>
            </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}

// Demo content component to show different content based on active item
function DemoContent({ activeItem }: { activeItem: string }) {
  const content = {
    dashboard: {
      title: "Dashboard",
      description: "Monitor key metrics and business performance.",
      icon: Home,
    },
    analytics: {
      title: "Analytics",
      description: "View detailed analytics and generate reports.",
      icon: BarChart3,
    },
    products: {
      title: "Products",
      description: "Manage your product catalog and inventory.",
      icon: Package,
    },
    customers: {
      title: "Customers",
      description: "View and manage customer information.",
      icon: Users,
    },
    documents: {
      title: "Documents",
      description: "Access and manage your documents.",
      icon: FileText,
    },
    engineering: {
      title: "Engineering Team",
      description: "Engineering team workspace and resources.",
      icon: Users,
    },
    sales: {
      title: "Sales Team",
      description: "Sales team workspace and resources.",
      icon: Users,
    },
    marketing: {
      title: "Marketing Team",
      description: "Marketing team workspace and resources.",
      icon: Users,
    },
    billing: {
      title: "Billing",
      description: "Manage your subscription and payment methods.",
      icon: CreditCard,
    },
    settings: {
      title: "Settings",
      description: "Configure your account and preferences.",
      icon: Settings,
    },
  }

  const currentContent = content[activeItem as keyof typeof content] || content.dashboard
  const Icon = currentContent.icon

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{currentContent.title}</h1>
        <p className="text-muted-foreground">{currentContent.description}</p>
      </div>

      {/* Main content area */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>

      {/* Content placeholder */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] rounded-lg bg-muted/50 flex items-center justify-center">
            <div className="text-center space-y-2">
              <Icon className="h-12 w-12 text-muted-foreground/50 mx-auto" />
              <p className="text-sm text-muted-foreground max-w-md">
                This is where the main {currentContent.title.toLowerCase()} content would be displayed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}