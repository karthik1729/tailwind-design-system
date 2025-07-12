import Link from 'next/link'
import { 
  Palette, 
  Type, 
  Layers, 
  Sparkles, 
  Code2, 
  Layout, 
  BookOpen,
  Boxes,
  Zap
} from 'lucide-react'

export default function StoryboardPage() {
  return (
    <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            Design System Storyboard
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of 59 components built from design standards extracted from 410+ Tailwind UI elements
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <div className="text-sm">
              <span className="font-semibold text-foreground">59</span>
              <span className="text-muted-foreground"> Components</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">7</span>
              <span className="text-muted-foreground"> Categories</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">Light & Dark</span>
              <span className="text-muted-foreground"> Themes</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/storyboard/foundations" className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:bg-accent/50 hover:border-primary/20 transition-all duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <span className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Palette className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Foundations
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Core design tokens that power the entire system
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Colors
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Typography
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Spacing
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Effects
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/storyboard/components" className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:bg-accent/50 hover:border-primary/20 transition-all duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <span className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Boxes className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Components
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  59 production-ready UI components
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Buttons
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Forms
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Navigation
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    +4 more
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/storyboard/patterns" className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:bg-accent/50 hover:border-primary/20 transition-all duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <span className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Layout className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Patterns
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete sections and page templates
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Heroes
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Features
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    CTAs
                  </span>
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    +2 more
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Design Standards Quick Links */}
        <div className="rounded-lg border border-border bg-card/50">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Design Standards
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Comprehensive guidelines extracted from analyzing 410+ Tailwind UI components
            </p>
          </div>
          <div className="border-t border-border">
            <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
              <Link href="/storyboard/standards/visual-hierarchy" className="group p-6 hover:bg-accent/50 transition-colors">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  Visual Hierarchy & Emphasis
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Primary actions, spacing patterns, border radius usage
                </p>
              </Link>
              <Link href="/storyboard/standards/interaction-states" className="group p-6 hover:bg-accent/50 transition-colors">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  Interaction States
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Hover effects, focus states, transitions, micro-interactions
                </p>
              </Link>
              <Link href="/storyboard/standards/responsive-design" className="group p-6 hover:bg-accent/50 transition-colors">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  Responsive Design
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Mobile-first approach, breakpoints, progressive enhancement
                </p>
              </Link>
              <Link href="/storyboard/standards/accessibility" className="group p-6 hover:bg-accent/50 transition-colors">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  Accessibility
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  ARIA attributes, keyboard navigation, screen reader support
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Component Categories Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Component Categories
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">Buttons & Actions</h3>
              <p className="mt-1 text-sm text-muted-foreground">8 components</p>
              <div className="mt-3 text-xs text-muted-foreground">
                Button, IconButton, Toggle, ToggleGroup, Split Button, Button Group, Floating Action, Action Menu
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">Form Elements</h3>
              <p className="mt-1 text-sm text-muted-foreground">13 components</p>
              <div className="mt-3 text-xs text-muted-foreground">
                Input, Textarea, Select, Checkbox, Radio, Switch, Slider, DatePicker, TimePicker, ColorPicker, FileUpload, Form, OTP Input
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">Feedback</h3>
              <p className="mt-1 text-sm text-muted-foreground">8 components</p>
              <div className="mt-3 text-xs text-muted-foreground">
                Alert, Toast, Progress, Skeleton, Spinner, Badge, Notification, Empty State
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">Navigation</h3>
              <p className="mt-1 text-sm text-muted-foreground">9 components</p>
              <div className="mt-3 text-xs text-muted-foreground">
                Navbar, Sidebar, Tabs, Breadcrumb, Pagination, Stepper, Navigation Menu, Command Palette, Mobile Navigation
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">Data Display</h3>
              <p className="mt-1 text-sm text-muted-foreground">10 components</p>
              <div className="mt-3 text-xs text-muted-foreground">
                Table, List, Card, Accordion, Carousel, Timeline, Stats, Avatar, Image Gallery, Code Block
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">Overlay</h3>
              <p className="mt-1 text-sm text-muted-foreground">7 components</p>
              <div className="mt-3 text-xs text-muted-foreground">
                Modal, Popover, Tooltip, Dropdown, Context Menu, Command Menu, Sheet
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">Layout</h3>
              <p className="mt-1 text-sm text-muted-foreground">4 components</p>
              <div className="mt-3 text-xs text-muted-foreground">
                Container, Grid, Stack, Divider
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-primary/5 p-6">
            <Zap className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Production Ready
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every component is built with accessibility, performance, and real-world usage in mind
            </p>
          </div>

          <div className="rounded-lg bg-success/10 p-6">
            <Type className="h-8 w-8 text-success" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Consistent Design Language
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Unified spacing, typography, and interaction patterns across all components
            </p>
          </div>

          <div className="rounded-lg bg-info/10 p-6">
            <Code2 className="h-8 w-8 text-info" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Developer Experience
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Clean APIs, comprehensive examples, and TypeScript support throughout
            </p>
          </div>
        </div>
    </div>
  )
}