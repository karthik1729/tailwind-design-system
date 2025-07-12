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
  Divide
} from 'lucide-react'

const componentCategories = [
  {
    name: "Buttons & Actions",
    description: "Interactive elements for user actions",
    count: 8,
    icon: Square,
    color: "primary",
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
    color: "success",
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
    color: "warning",
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
    color: "info",
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
    color: "destructive",
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
    color: "secondary",
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
    color: "muted",
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
    <div className="space-y-12">
        {/* Hero Section */}
        <div>
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/storyboard" className="hover:text-foreground transition-colors">
            Storyboard
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Components</span>
        </nav>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Components
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          A comprehensive collection of 59 production-ready components, organized into 7 categories. Each component follows our design standards and includes interactive examples.
        </p>
        
        {/* Quick Stats */}
        <div className="mt-8 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success"></div>
            <span className="text-muted-foreground">59 Total Components</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">7 Categories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-warning"></div>
            <span className="text-muted-foreground">Full TypeScript Support</span>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <section className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {componentCategories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:bg-accent/50 hover:border-primary/20 transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-flex rounded-lg bg-${category.color}/10 p-3 text-${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {category.count} components
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                {/* Component Preview List */}
                <div className="space-y-1">
                  {category.components.slice(0, 3).map((component) => (
                    <div key={component.name} className="text-xs text-muted-foreground flex items-center gap-2">
                      <component.icon className="h-3 w-3" />
                      <span>{component.name}</span>
                    </div>
                  ))}
                  {category.components.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      +{category.components.length - 3} more
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View components
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          )
        })}
        </div>
      </section>

      {/* All Components Table */}
      <section className="space-y-8">
        <div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          All Components
        </h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Component
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {componentCategories.flatMap((category) =>
                  category.components.map((component) => (
                    <tr key={`${category.name}-${component.name}`} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <component.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{component.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-muted-foreground">{category.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">{component.description}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
                          Ready
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="space-y-8">
        <div className="rounded-lg border border-border bg-card/50 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Component Design Principles
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-medium text-foreground mb-2">Consistency</h3>
            <p className="text-sm text-muted-foreground">
              All components follow the same patterns for spacing, colors, and interactions
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Accessibility</h3>
            <p className="text-sm text-muted-foreground">
              WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Flexibility</h3>
            <p className="text-sm text-muted-foreground">
              Variants and props for different use cases while maintaining visual coherence
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Performance</h3>
            <p className="text-sm text-muted-foreground">
              Optimized for bundle size and runtime performance with lazy loading
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Dark Mode</h3>
            <p className="text-sm text-muted-foreground">
              Every component works seamlessly in both light and dark themes
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Developer Experience</h3>
            <p className="text-sm text-muted-foreground">
              TypeScript support, clear APIs, and comprehensive documentation
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}