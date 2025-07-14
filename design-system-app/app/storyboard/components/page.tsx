"use client"

import Link from 'next/link'
import { 
  ArrowRight,
  Square,
  ToggleLeft,
  FormInput,
  Bell,
  Navigation,
  Table2,
  Layers,
  Grid3x3,
  CheckSquare,
  Radio,
  Sliders,
  Calendar,
  Upload,
  MessageSquare,
  Loader,
  Tag,
  ChevronDown,
  Menu,
  CreditCard,
  BarChart3,
  Clock,
  Users,
  Image,
  Code,
  Command,
  Sheet,
  Container,
  Divide,
  Component,
  Sparkles,
  Zap,
  Shield,
  Gauge,
  Moon,
  Accessibility
} from 'lucide-react'

const colorStyles = [
  { bg: 'bg-primary/10', text: 'text-primary', icon: 'bg-primary/10', hover: 'hover:bg-primary/20', border: 'hover:border-primary/30' },
  { bg: 'bg-success/10', text: 'text-success', icon: 'bg-success/10', hover: 'hover:bg-success/20', border: 'hover:border-success/30' },
  { bg: 'bg-warning/10', text: 'text-warning', icon: 'bg-warning/10', hover: 'hover:bg-warning/20', border: 'hover:border-warning/30' },
  { bg: 'bg-info/10', text: 'text-info', icon: 'bg-info/10', hover: 'hover:bg-info/20', border: 'hover:border-info/30' },
  { bg: 'bg-destructive/10', text: 'text-destructive', icon: 'bg-destructive/10', hover: 'hover:bg-destructive/20', border: 'hover:border-destructive/30' },
  { bg: 'bg-accent/10', text: 'text-accent', icon: 'bg-accent/10', hover: 'hover:bg-accent/20', border: 'hover:border-accent/30' },
  { bg: 'bg-muted', text: 'text-muted-foreground', icon: 'bg-muted', hover: 'hover:bg-muted/80', border: 'hover:border-muted-foreground/30' }
]

const componentCategories = [
  {
    name: "Buttons & Actions",
    description: "Interactive elements for user actions",
    count: 8,
    icon: Square,
    colorIndex: 0,
    href: "/storyboard/components/buttons",
    components: [
      { name: "Button", description: "Primary interactive element", icon: Square },
      { name: "IconButton", description: "Icon-only button variant", icon: Square },
      { name: "Toggle", description: "Binary state switch", icon: ToggleLeft },
      { name: "ToggleGroup", description: "Grouped toggle buttons", icon: ToggleLeft },
      { name: "Split Button", description: "Button with dropdown", icon: ChevronDown },
      { name: "Button Group", description: "Related action buttons", icon: Square },
      { name: "Floating Action", description: "Prominent floating button", icon: Square },
      { name: "Action Menu", description: "Contextual actions menu", icon: Menu }
    ]
  },
  {
    name: "Form Elements",
    description: "Input controls and form building blocks",
    count: 13,
    icon: FormInput,
    colorIndex: 1,
    href: "/storyboard/components/forms",
    components: [
      { name: "Input", description: "Text input field", icon: FormInput },
      { name: "Textarea", description: "Multi-line text input", icon: FormInput },
      { name: "Select", description: "Dropdown selection", icon: ChevronDown },
      { name: "Checkbox", description: "Multiple choice selection", icon: CheckSquare },
      { name: "Radio", description: "Single choice selection", icon: Radio },
      { name: "Switch", description: "On/off toggle", icon: ToggleLeft },
      { name: "Slider", description: "Range selection", icon: Sliders },
      { name: "DatePicker", description: "Date selection", icon: Calendar },
      { name: "TimePicker", description: "Time selection", icon: Clock },
      { name: "ColorPicker", description: "Color selection", icon: Square },
      { name: "FileUpload", description: "File input", icon: Upload },
      { name: "Form", description: "Form container", icon: FormInput },
      { name: "OTP Input", description: "One-time password", icon: FormInput }
    ]
  },
  {
    name: "Feedback Components",
    description: "System feedback and status indicators",
    count: 8,
    icon: Bell,
    colorIndex: 2,
    href: "/storyboard/components/feedback",
    components: [
      { name: "Alert", description: "Important messages", icon: Bell },
      { name: "Toast", description: "Temporary notifications", icon: MessageSquare },
      { name: "Progress", description: "Task progress indicator", icon: Loader },
      { name: "Skeleton", description: "Loading placeholder", icon: Square },
      { name: "Spinner", description: "Loading animation", icon: Loader },
      { name: "Badge", description: "Status indicator", icon: Tag },
      { name: "Notification", description: "System notification", icon: Bell },
      { name: "Empty State", description: "No content placeholder", icon: Square }
    ]
  },
  {
    name: "Navigation Components",
    description: "Wayfinding and navigation patterns",
    count: 9,
    icon: Navigation,
    colorIndex: 3,
    href: "/storyboard/components/navigation",
    components: [
      { name: "Navbar", description: "Top navigation bar", icon: Navigation },
      { name: "Sidebar", description: "Side navigation", icon: Menu },
      { name: "Tabs", description: "Tabbed navigation", icon: Square },
      { name: "Breadcrumb", description: "Path navigation", icon: ChevronDown },
      { name: "Pagination", description: "Page navigation", icon: ChevronDown },
      { name: "Stepper", description: "Step-by-step navigation", icon: Navigation },
      { name: "Navigation Menu", description: "Dropdown navigation", icon: Menu },
      { name: "Command Palette", description: "Search command menu", icon: Command },
      { name: "Mobile Navigation", description: "Mobile-first nav", icon: Menu }
    ]
  },
  {
    name: "Data Display",
    description: "Content presentation components",
    count: 10,
    icon: Table2,
    colorIndex: 4,
    href: "/storyboard/components/data-display",
    components: [
      { name: "Table", description: "Data table", icon: Table2 },
      { name: "List", description: "Item list", icon: Menu },
      { name: "Card", description: "Content container", icon: CreditCard },
      { name: "Accordion", description: "Collapsible content", icon: ChevronDown },
      { name: "Carousel", description: "Content slider", icon: ChevronDown },
      { name: "Timeline", description: "Chronological display", icon: Clock },
      { name: "Stats", description: "Statistics display", icon: BarChart3 },
      { name: "Avatar", description: "User representation", icon: Users },
      { name: "Image Gallery", description: "Image grid", icon: Image },
      { name: "Code Block", description: "Code display", icon: Code }
    ]
  },
  {
    name: "Overlay Components",
    description: "Floating and overlay elements",
    count: 7,
    icon: Layers,
    colorIndex: 5,
    href: "/storyboard/components/overlay",
    components: [
      { name: "Modal", description: "Dialog window", icon: Square },
      { name: "Popover", description: "Floating content", icon: MessageSquare },
      { name: "Tooltip", description: "Hover information", icon: MessageSquare },
      { name: "Dropdown", description: "Dropdown menu", icon: ChevronDown },
      { name: "Context Menu", description: "Right-click menu", icon: Menu },
      { name: "Command Menu", description: "Command interface", icon: Command },
      { name: "Sheet", description: "Slide-out panel", icon: Sheet }
    ]
  },
  {
    name: "Layout Components",
    description: "Structural and layout utilities",
    count: 4,
    icon: Grid3x3,
    colorIndex: 6,
    href: "/storyboard/components/layout",
    components: [
      { name: "Container", description: "Content wrapper", icon: Container },
      { name: "Grid", description: "Grid layout", icon: Grid3x3 },
      { name: "Stack", description: "Stacked layout", icon: Layers },
      { name: "Divider", description: "Content separator", icon: Divide }
    ]
  }
]

export default function ComponentsOverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent-100),transparent_50%)] opacity-20 dark:opacity-10" />
        
        <div className="relative px-6 sm:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/storyboard" className="hover:text-foreground transition-colors duration-200">
                Storyboard
              </Link>
              <svg className="h-4 w-4 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-foreground font-medium">Components</span>
            </nav>
            
            <div className="flex items-start justify-between">
              <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-2xl" />
                    <div className="relative inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                      <Component className="h-8 w-8" />
                    </div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                    Components
                  </h1>
                </div>
                
                <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                  A comprehensive collection of <span className="text-foreground font-medium">59 production-ready components</span>, organized into 7 categories. Each component follows our design standards and includes interactive examples.
                </p>
                
                {/* Quick Stats */}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm font-medium text-foreground">59 Total Components</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-foreground">7 Categories</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50">
                    <div className="h-2 w-2 rounded-full bg-warning animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Full TypeScript Support</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-success/20 blur-3xl" />
                <div className="relative">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <Square className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-16 w-16 rounded-lg bg-success/10 backdrop-blur-sm flex items-center justify-center">
                      <FormInput className="h-6 w-6 text-success" />
                    </div>
                    <div className="h-16 w-16 rounded-lg bg-warning/10 backdrop-blur-sm flex items-center justify-center">
                      <Bell className="h-6 w-6 text-warning" />
                    </div>
                    <div className="h-16 w-16 rounded-lg bg-info/10 backdrop-blur-sm flex items-center justify-center">
                      <Navigation className="h-6 w-6 text-info" />
                    </div>
                    <div className="h-16 w-16 rounded-lg bg-destructive/10 backdrop-blur-sm flex items-center justify-center">
                      <Table2 className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="h-16 w-16 rounded-lg bg-accent/10 backdrop-blur-sm flex items-center justify-center">
                      <Layers className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 py-12 space-y-16 max-w-7xl mx-auto">

        {/* Category Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Component Categories</h2>
            <p className="mt-3 text-muted-foreground">Browse components organized by their purpose and functionality</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {componentCategories.map((category) => {
            const Icon = category.icon
            const colorStyle = colorStyles[category.colorIndex]
            
            return (
              <Link
                key={category.name}
                href={category.href}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg ${colorStyle.border} hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ background: `linear-gradient(to bottom right, ${colorStyle.bg.replace('/10', '/5')}, transparent)` }} />
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex rounded-xl p-3 ${colorStyle.icon} ${colorStyle.text} ${colorStyle.hover} transition-colors duration-200`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colorStyle.bg} ${colorStyle.text}`}>
                      {category.count} components
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-semibold text-foreground mb-3 group-hover:${colorStyle.text} transition-colors duration-200`}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  
                  {/* Component Preview List */}
                  <div className="space-y-2 mb-6">
                    {category.components.slice(0, 3).map((component, idx) => {
                      const ComponentIcon = component.icon
                      return (
                        <div key={component.name} className="flex items-center gap-3 text-sm group/item">
                          <ComponentIcon className={`h-4 w-4 text-muted-foreground group-hover/item:${colorStyle.text} transition-colors duration-200`} />
                          <span className="text-foreground/70 group-hover/item:text-foreground transition-colors duration-200">{component.name}</span>
                        </div>
                      )
                    })}
                    {category.components.length > 3 && (
                      <div className="text-sm text-muted-foreground pl-7">
                        +{category.components.length - 3} more
                      </div>
                    )}
                  </div>
                  
                  <div className={`flex items-center text-sm font-medium ${colorStyle.text} opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                    View all {category.name.toLowerCase()}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
          </div>
        </section>

        {/* All Components Table */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="inline-flex rounded-xl bg-info/10 p-3 text-info">
                <Table2 className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">All Components</h2>
            <p className="mt-3 text-muted-foreground">Complete listing of every component in the design system</p>
          </div>
          
          <div className="rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Component
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {componentCategories.flatMap((category) => {
                    const colorStyle = colorStyles[category.colorIndex]
                    return category.components.map((component) => {
                      const ComponentIcon = component.icon
                      return (
                        <tr key={`${category.name}-${component.name}`} className="hover:bg-muted/20 transition-colors duration-200">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <ComponentIcon className={`h-4 w-4 ${colorStyle.text}`} />
                              <span className="text-sm font-medium text-foreground">{component.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${colorStyle.bg} ${colorStyle.text}`}>
                              {category.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 hidden sm:table-cell">
                            <span className="text-sm text-muted-foreground">{component.description}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                              <div className="h-1.5 w-1.5 rounded-full bg-success" />
                              Ready
                            </span>
                          </td>
                        </tr>
                      )
                    })
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex justify-center mb-4">
              <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Component Design Principles</h2>
            <p className="mt-3 text-muted-foreground">The core principles that guide every component in our system</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Consistency */}
            <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Consistency</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All components follow the same patterns for spacing, colors, and interactions, ensuring a cohesive experience.
                </p>
              </div>
            </div>
            
            {/* Accessibility */}
            <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-success/30 hover:shadow-md transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="inline-flex rounded-lg bg-success/10 p-2 text-success mb-4 group-hover:bg-success/20 transition-colors duration-200">
                  <Accessibility className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation for inclusive design.
                </p>
              </div>
            </div>
            
            {/* Flexibility */}
            <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-warning/30 hover:shadow-md transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="inline-flex rounded-lg bg-warning/10 p-2 text-warning mb-4 group-hover:bg-warning/20 transition-colors duration-200">
                  <Sliders className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Flexibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Variants and props for different use cases while maintaining visual coherence across the system.
                </p>
              </div>
            </div>
            
            {/* Performance */}
            <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-info/30 hover:shadow-md transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-info/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="inline-flex rounded-lg bg-info/10 p-2 text-info mb-4 group-hover:bg-info/20 transition-colors duration-200">
                  <Gauge className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimized for bundle size and runtime performance with lazy loading and tree-shaking support.
                </p>
              </div>
            </div>
            
            {/* Dark Mode */}
            <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-accent/30 hover:shadow-md transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="inline-flex rounded-lg bg-accent/10 p-2 text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-200">
                  <Moon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Dark Mode</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every component works seamlessly in both light and dark themes with automatic color adjustments.
                </p>
              </div>
            </div>
            
            {/* Developer Experience */}
            <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-destructive/30 hover:shadow-md transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="inline-flex rounded-lg bg-destructive/10 p-2 text-destructive mb-4 group-hover:bg-destructive/20 transition-colors duration-200">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Developer Experience</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  TypeScript support, clear APIs, and comprehensive documentation for rapid development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-success/5 p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="relative space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Start Building Today</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our component categories to find exactly what you need for your next project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link 
                href="/storyboard/components/buttons" 
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
              >
                Browse Buttons & Actions
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}