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
  Zap,
  Component,
  Lightbulb,
  Accessibility
} from 'lucide-react'

export default function StoryboardPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-100),transparent_50%)] opacity-20 dark:opacity-10" />
        
        <div className="relative px-6 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl" />
                <Component className="relative h-16 w-16 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Design System
              <span className="block text-primary mt-2">Storyboard</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of <span className="text-foreground font-medium">59 components</span> built from design standards extracted from <span className="text-foreground font-medium">410+ Tailwind UI elements</span>
            </p>
            
            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-foreground">59 Components</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-foreground">7 Categories</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Light & Dark Themes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 py-12 space-y-16 max-w-7xl mx-auto">

        {/* Main Navigation Cards */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Explore the System</h2>
            <p className="mt-3 text-muted-foreground">Start with foundations, build with components, scale with patterns</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Foundations Card */}
            <Link href="/storyboard/foundations" className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 space-y-4">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors duration-200">
                  <Palette className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    Foundations
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Core design tokens that power the entire system
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    Colors
                  </span>
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    Typography
                  </span>
                  <span className="inline-flex items-center rounded-md bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    Spacing
                  </span>
                  <span className="inline-flex items-center rounded-md bg-info/10 px-2.5 py-1 text-xs font-medium text-info">
                    Effects
                  </span>
                </div>
              </div>
            </Link>

            {/* Components Card */}
            <Link href="/storyboard/components" className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 space-y-4">
                <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent group-hover:bg-accent/20 transition-colors duration-200">
                  <Boxes className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    Components
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    59 production-ready UI components
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    Buttons
                  </span>
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    Forms
                  </span>
                  <span className="inline-flex items-center rounded-md bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    Navigation
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    +4 more
                  </span>
                </div>
              </div>
            </Link>

            {/* Patterns Card */}
            <Link href="/storyboard/patterns" className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 space-y-4">
                <div className="inline-flex rounded-xl bg-success/10 p-3 text-success group-hover:bg-success/20 transition-colors duration-200">
                  <Layout className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-success transition-colors duration-200">
                    Patterns
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Complete sections and page templates
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    Heroes
                  </span>
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    Features
                  </span>
                  <span className="inline-flex items-center rounded-md bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    CTAs
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    +2 more
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Design Standards Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-success/5 blur-3xl opacity-30" />
          <div className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Design Standards</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Comprehensive guidelines extracted from analyzing 410+ Tailwind UI components. These standards ensure consistency and quality across your entire design system.
              </p>
            </div>
            
            <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
              <Link href="/storyboard/standards/visual-hierarchy" className="group relative p-6 hover:bg-primary/5 transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Visual Hierarchy & Emphasis
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Primary actions, spacing patterns, border radius usage
                  </p>
                </div>
              </Link>
              
              <Link href="/storyboard/standards/interaction-states" className="group relative p-6 hover:bg-accent/5 transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Interaction States
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hover effects, focus states, transitions, micro-interactions
                  </p>
                </div>
              </Link>
              
              <Link href="/storyboard/standards/responsive-design" className="group relative p-6 hover:bg-success/5 transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <Layout className="h-5 w-5 text-success" />
                    <h3 className="font-semibold text-foreground group-hover:text-success transition-colors">
                      Responsive Design
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mobile-first approach, breakpoints, progressive enhancement
                  </p>
                </div>
              </Link>
              
              <Link href="/storyboard/standards/accessibility" className="group relative p-6 hover:bg-info/5 transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-br from-info/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <Accessibility className="h-5 w-5 text-info" />
                    <h3 className="font-semibold text-foreground group-hover:text-info transition-colors">
                      Accessibility
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ARIA attributes, keyboard navigation, screen reader support
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Component Categories Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Component Categories</h2>
            <p className="mt-3 text-muted-foreground">Organized into 7 categories for easy discovery and implementation</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Buttons & Actions */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Buttons & Actions</h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">8</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Button, IconButton, Toggle, ToggleGroup, Split Button, Button Group, Floating Action, Action Menu
                </p>
              </div>
            </div>
            
            {/* Form Elements */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-accent/30 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Form Elements</h3>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-md">13</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Input, Textarea, Select, Checkbox, Radio, Switch, Slider, DatePicker, TimePicker, ColorPicker, FileUpload, Form, OTP Input
                </p>
              </div>
            </div>
            
            {/* Feedback */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-success/30 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Feedback</h3>
                  <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-md">8</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alert, Toast, Progress, Skeleton, Spinner, Badge, Notification, Empty State
                </p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-info/30 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Navigation</h3>
                  <span className="text-xs font-medium text-info bg-info/10 px-2 py-1 rounded-md">9</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Navbar, Sidebar, Tabs, Breadcrumb, Pagination, Stepper, Navigation Menu, Command Palette, Mobile Navigation
                </p>
              </div>
            </div>
            
            {/* Data Display */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-warning/30 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Data Display</h3>
                  <span className="text-xs font-medium text-warning bg-warning/10 px-2 py-1 rounded-md">10</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Table, List, Card, Accordion, Carousel, Timeline, Stats, Avatar, Image Gallery, Code Block
                </p>
              </div>
            </div>
            
            {/* Overlay */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-destructive/30 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Overlay</h3>
                  <span className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-md">7</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Modal, Popover, Tooltip, Dropdown, Context Menu, Command Menu, Sheet
                </p>
              </div>
            </div>
            
            {/* Layout */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Layout</h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">4</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Container, Grid, Stack, Divider
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex justify-center mb-4">
              <div className="inline-flex rounded-xl bg-success/10 p-3 text-success">
                <Lightbulb className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Why Choose This System?</h2>
            <p className="mt-3 text-muted-foreground">Built with modern development practices and user experience at its core</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Production Ready */}
            <div className="group relative rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-6 hover:from-primary/10 hover:to-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors duration-200">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Production Ready
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Every component is built with accessibility, performance, and real-world usage in mind
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            {/* Consistent Design */}
            <div className="group relative rounded-xl bg-gradient-to-br from-success/5 to-success/10 p-6 hover:from-success/10 hover:to-success/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex rounded-xl bg-success/10 p-3 text-success group-hover:bg-success/20 transition-colors duration-200">
                  <Type className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Consistent Design Language
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Unified spacing, typography, and interaction patterns across all components
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-success/20 to-transparent" />
            </div>

            {/* Developer Experience */}
            <div className="group relative rounded-xl bg-gradient-to-br from-info/5 to-info/10 p-6 hover:from-info/10 hover:to-info/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex rounded-xl bg-info/10 p-3 text-info group-hover:bg-info/20 transition-colors duration-200">
                  <Code2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Developer Experience
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Clean APIs, comprehensive examples, and TypeScript support throughout
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-info/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-success/5 p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="relative space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Ready to Build?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with our foundations, explore components, and create beautiful interfaces with confidence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link 
                href="/storyboard/foundations" 
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
              >
                Get Started
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/storyboard/components" 
                className="inline-flex items-center gap-2 rounded-lg bg-card border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent/10 hover:border-accent/30 active:scale-[0.98] transition-all duration-200"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}