'use client'

import React, { useState } from 'react'
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  Home,
  Search,
  Settings,
  User,
  ChevronRight,
  FileText,
  Calendar,
  Mail,
  Bell,
  CreditCard,
  LogOut,
  HelpCircle,
  Moon,
  Sun,
  Monitor,
  Laptop,
  Smartphone,
  Package,
  Users,
  BarChart,
  Shield,
  Zap,
  Database,
  Cloud,
  Lock,
  Key,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Inbox,
  Send,
  Archive,
  Trash,
  Star,
  Tag,
  Folder,
  FolderOpen,
  Download,
  Upload,
  Share,
  Copy,
  Clipboard,
  Edit,
  Save,
  RefreshCw,
  RotateCw,
  Loader,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  Eye,
  EyeOff,
  Heart,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Flag,
  Pin,
  MapPin,
  Navigation,
  Compass,
  Map,
  Globe,
  Wifi,
  WifiOff,
  Bluetooth,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Volume,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Video,
  VideoOff,
  Phone,
  PhoneOff,
  Voicemail,
  Headphones,
  Speaker,
  Music,
  Radio,
  Tv,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet,
  Watch,
  Cpu,
  HardDrive,
  Server,
  Activity,
  Airplay,
  Cast,
  Code,
  Terminal,
  Command,
  Cloud as CloudIcon,
  CloudOff,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Sunrise,
  Sunset,
  Wind,
  Droplet,
  Umbrella,
  Thermometer,
  PlusCircle,
  MinusCircle,
  Plus,
  Minus,
  X,
  Check,
  Square,
  Circle,
  Triangle,
  Heart as HeartIcon,
  Star as StarIcon,
  Hexagon,
  Octagon,
  PauseCircle,
  PlayCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Repeat,
  Repeat1,
  Shuffle
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Example component to show keyboard shortcuts
function KeyboardShortcuts() {
  const { toggleSidebar } = useSidebar()

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  return null
}

// Demo controls component
function DemoControls({ 
  collapsible, 
  setCollapsible, 
  variant, 
  setVariant,
  side,
  setSide,
  theme,
  setTheme 
}: {
  collapsible: 'icon' | 'offcanvas' | 'none'
  setCollapsible: (value: 'icon' | 'offcanvas' | 'none') => void
  variant: 'sidebar' | 'floating' | 'inset'
  setVariant: (value: 'sidebar' | 'floating' | 'inset') => void
  side: 'left' | 'right'
  setSide: (value: 'left' | 'right') => void
  theme: 'light' | 'dark' | 'system'
  setTheme: (value: 'light' | 'dark' | 'system') => void
}) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Sidebar Controls</CardTitle>
        <CardDescription>Adjust sidebar settings to test different configurations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Collapsible Mode</Label>
          <RadioGroup value={collapsible} onValueChange={(value) => setCollapsible(value as any)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="icon" id="icon" />
              <Label htmlFor="icon">Icon (Collapse to icons)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="offcanvas" id="offcanvas" />
              <Label htmlFor="offcanvas">Offcanvas (Hide completely)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none">None (Always visible)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Variant</Label>
          <RadioGroup value={variant} onValueChange={(value) => setVariant(value as any)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sidebar" id="sidebar" />
              <Label htmlFor="sidebar">Sidebar (Default)</Label>
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
        </div>

        <div className="space-y-2">
          <Label>Side</Label>
          <RadioGroup value={side} onValueChange={(value) => setSide(value as any)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="left" id="left" />
              <Label htmlFor="left">Left</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="right" id="right" />
              <Label htmlFor="right">Right</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Theme</Label>
          <RadioGroup value={theme} onValueChange={(value) => setTheme(value as any)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="theme-light" />
              <Label htmlFor="theme-light">Light</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="theme-dark" />
              <Label htmlFor="theme-dark">Dark</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="theme-system" />
              <Label htmlFor="theme-system">System</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-4 border-t space-y-2">
          <p className="text-sm text-muted-foreground">
            <kbd className="px-2 py-1 text-xs bg-muted rounded">Cmd/Ctrl + B</kbd> Toggle sidebar
          </p>
          <p className="text-sm text-muted-foreground">
            Click the trigger button or use keyboard shortcut to toggle
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Example content variations
const contentVariations = {
  basic: {
    name: 'Basic Navigation',
    content: (
      <>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Home className="mr-2 h-4 w-4" />
              Home
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Search className="mr-2 h-4 w-4" />
              Search
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <FileText className="mr-2 h-4 w-4" />
              Documents
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </>
    )
  },
  grouped: {
    name: 'Grouped with Labels',
    content: (
      <>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Messages</span>
                  <Badge className="ml-auto">12</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </>
    )
  },
  nested: {
    name: 'Nested Menus',
    content: (
      <>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Home className="mr-2 h-4 w-4" />
              Home
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Package className="mr-2 h-4 w-4" />
              Products
              <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
            </SidebarMenuButton>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>
                  <Grid className="mr-2 h-3 w-3" />
                  All Products
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>
                  <Star className="mr-2 h-3 w-3" />
                  Featured
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>
                  <Archive className="mr-2 h-3 w-3" />
                  Archived
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Users className="mr-2 h-4 w-4" />
              Team
              <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
            </SidebarMenuButton>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>
                  <User className="mr-2 h-3 w-3" />
                  Members
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>
                  <Shield className="mr-2 h-3 w-3" />
                  Roles
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
        </SidebarMenu>
      </>
    )
  },
  rich: {
    name: 'Rich Content',
    content: (
      <>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </div>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="p-4 space-y-2">
              <Button variant="secondary" size="sm" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                New Document
              </Button>
              <Button variant="secondary" size="sm" className="w-full justify-start">
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Inbox className="mr-2 h-4 w-4" />
              <span>Inbox</span>
              <Badge variant="destructive" className="ml-auto">99+</Badge>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Send className="mr-2 h-4 w-4" />
              <span>Sent</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </>
    )
  },
  interactive: {
    name: 'Interactive Elements',
    content: (
      <>
        <div className="p-4 space-y-4">
          <div>
            <Label htmlFor="search" className="text-xs">Quick Search</Label>
            <div className="relative mt-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search..."
                className="pl-8 h-9"
              />
            </div>
          </div>
        </div>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Preferences</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-4 space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="text-sm">Notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sync" className="text-sm">Auto Sync</Label>
                <Switch id="sync" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="offline" className="text-sm">Offline Mode</Label>
                <Switch id="offline" />
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton variant="ghost" className="text-destructive hover:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </>
    )
  }
}

export default function SidebarTestPage() {
  const [collapsible, setCollapsible] = useState<'icon' | 'offcanvas' | 'none'>('icon')
  const [variant, setVariant] = useState<'sidebar' | 'floating' | 'inset'>('sidebar')
  const [side, setSide] = useState<'left' | 'right'>('left')
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [activeContent, setActiveContent] = useState<keyof typeof contentVariations>('basic')

  // Apply theme
  React.useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      // System theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (mediaQuery.matches) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider defaultOpen={true}>
        <KeyboardShortcuts />
        <div className="flex h-screen w-full">
          <Sidebar collapsible={collapsible} variant={variant} side={side}>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="font-semibold">Sidebar Test</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              {contentVariations[activeContent].content}
            </SidebarContent>
            <SidebarFooter>
              <div className="p-4 text-xs text-muted-foreground">
                © 2024 Sidebar Test
              </div>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          
          <SidebarInset>
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-6">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-lg font-semibold">Sidebar Component Test Environment</h1>
              </div>
              <Badge variant="outline">{variant} variant</Badge>
            </header>
            
            <main className="flex-1 p-6">
              <div className="max-w-4xl mx-auto space-y-6">
                <DemoControls
                  collapsible={collapsible}
                  setCollapsible={setCollapsible}
                  variant={variant}
                  setVariant={setVariant}
                  side={side}
                  setSide={setSide}
                  theme={theme}
                  setTheme={setTheme}
                />

                <Card>
                  <CardHeader>
                    <CardTitle>Content Variations</CardTitle>
                    <CardDescription>Test different sidebar content configurations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={activeContent} onValueChange={(value) => setActiveContent(value as any)}>
                      <TabsList className="grid grid-cols-5 w-full">
                        {Object.entries(contentVariations).map(([key, { name }]) => (
                          <TabsTrigger key={key} value={key}>{name}</TabsTrigger>
                        ))}
                      </TabsList>
                      <TabsContent value={activeContent} className="mt-4">
                        <div className="rounded-lg border p-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            Current variation: <strong>{contentVariations[activeContent].name}</strong>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            The sidebar on the left is showing this content variation. Try toggling the sidebar, 
                            changing modes, or switching themes to see how it behaves.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Features & Behavior</CardTitle>
                    <CardDescription>Test these features with the current configuration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Interactions</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Click trigger button to toggle</li>
                          <li>• Use Cmd/Ctrl + B shortcut</li>
                          <li>• Hover over menu items</li>
                          <li>• Click nested menu items</li>
                          <li>• Try different screen sizes</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Responsive Behavior</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Mobile: Always collapsed</li>
                          <li>• Tablet: Collapsible modes</li>
                          <li>• Desktop: Full featured</li>
                          <li>• Smooth transitions</li>
                          <li>• Touch-friendly on mobile</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Test Scenarios</CardTitle>
                    <CardDescription>Try these test cases to verify functionality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">1. Collapse Modes</h4>
                        <p className="text-sm text-muted-foreground">
                          Switch between icon, offcanvas, and none modes. Verify smooth transitions and proper icon alignment.
                        </p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">2. Mobile Responsiveness</h4>
                        <p className="text-sm text-muted-foreground">
                          Resize your browser window to mobile size. The sidebar should automatically collapse and show the trigger.
                        </p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">3. Keyboard Navigation</h4>
                        <p className="text-sm text-muted-foreground">
                          Use Tab to navigate through menu items. Press Enter to select. Use Cmd/Ctrl + B to toggle.
                        </p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">4. Theme Switching</h4>
                        <p className="text-sm text-muted-foreground">
                          Switch between light and dark themes. All colors and contrasts should adjust appropriately.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}