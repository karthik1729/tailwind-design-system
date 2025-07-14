"use client"

import Link from 'next/link'
import { 
  Sparkles,
  Layout,
  Grid,
  Users,
  ShoppingBag,
  BarChart3,
  FileText,
  Settings,
  Lock,
  Home,
  Megaphone,
  Zap,
  ArrowRight,
  Code,
  Palette,
  Layers
} from 'lucide-react'

const patternCategories = [
  {
    name: "Marketing Sections",
    description: "Hero sections, features, CTAs, and landing page patterns",
    icon: Megaphone,
    color: "primary",
    patterns: [
      {
        name: "Hero Sections",
        description: "Eye-catching introductory sections with various layouts",
        variants: ["Centered", "Split", "Background Image", "Video", "Animated"]
      },
      {
        name: "Feature Sections",
        description: "Showcase product features and benefits",
        variants: ["Grid", "Alternating", "Cards", "Timeline", "Comparison"]
      },
      {
        name: "CTA Sections",
        description: "Call-to-action sections to drive conversions",
        variants: ["Simple", "Split", "Background", "Multi-CTA", "Newsletter"]
      },
      {
        name: "Testimonials",
        description: "Social proof and customer feedback displays",
        variants: ["Grid", "Carousel", "Simple", "With Avatar", "Case Study"]
      },
      {
        name: "Pricing",
        description: "Pricing tables and plan comparisons",
        variants: ["Simple", "Comparison", "Toggle", "Feature List", "Enterprise"]
      }
    ]
  },
  {
    name: "Application Shells",
    description: "Complete application layouts and navigation patterns",
    icon: Layout,
    color: "success",
    patterns: [
      {
        name: "Dashboard Layouts",
        description: "Admin and analytics dashboard structures",
        variants: ["Sidebar", "Top Nav", "Dual Navigation", "Collapsible", "Mobile-First"]
      },
      {
        name: "Settings Pages",
        description: "User preference and configuration interfaces",
        variants: ["Tabbed", "Sidebar", "Sectioned", "Cards", "Mobile"]
      },
      {
        name: "List Views",
        description: "Data listing and management interfaces",
        variants: ["Table", "Cards", "Kanban", "Timeline", "Grid"]
      },
      {
        name: "Detail Views",
        description: "Single item detail and edit layouts",
        variants: ["Split", "Tabbed", "Accordion", "Sidebar", "Full Width"]
      },
      {
        name: "Empty States",
        description: "No-content and onboarding patterns",
        variants: ["Simple", "Illustrated", "Action", "Search", "Error"]
      }
    ]
  },
  {
    name: "E-commerce Patterns",
    description: "Shopping and product showcase patterns",
    icon: ShoppingBag,
    color: "warning",
    patterns: [
      {
        name: "Product Grids",
        description: "Product listing and browsing layouts",
        variants: ["Simple", "With Filters", "Masonry", "List View", "Quick View"]
      },
      {
        name: "Product Details",
        description: "Individual product presentation",
        variants: ["Gallery", "Split", "Tabbed", "Accordion", "Sticky"]
      },
      {
        name: "Shopping Cart",
        description: "Cart and checkout interfaces",
        variants: ["Dropdown", "Sidebar", "Page", "Multi-Step", "One-Page"]
      },
      {
        name: "Category Pages",
        description: "Product category browsing",
        variants: ["Grid", "List", "Mixed", "Mega Menu", "Filtered"]
      }
    ]
  },
  {
    name: "Content Patterns",
    description: "Blog, documentation, and content layouts",
    icon: FileText,
    color: "info",
    patterns: [
      {
        name: "Blog Layouts",
        description: "Article listing and reading experiences",
        variants: ["Grid", "List", "Magazine", "Minimal", "With Sidebar"]
      },
      {
        name: "Article Pages",
        description: "Individual article and post layouts",
        variants: ["Simple", "With TOC", "Magazine", "Technical", "Newsletter"]
      },
      {
        name: "Documentation",
        description: "Technical documentation layouts",
        variants: ["Sidebar Nav", "Version Picker", "Search", "API Reference", "Guides"]
      },
      {
        name: "FAQ Sections",
        description: "Frequently asked questions layouts",
        variants: ["Accordion", "Categories", "Search", "Two Column", "With Contact"]
      }
    ]
  },
  {
    name: "Authentication",
    description: "Sign in, sign up, and account management",
    icon: Lock,
    color: "destructive",
    patterns: [
      {
        name: "Sign In",
        description: "User login interfaces",
        variants: ["Simple", "Split", "Social", "Two-Factor", "Magic Link"]
      },
      {
        name: "Sign Up",
        description: "User registration flows",
        variants: ["Simple", "Multi-Step", "Social", "With Benefits", "Invitation"]
      },
      {
        name: "Password Reset",
        description: "Account recovery patterns",
        variants: ["Email", "SMS", "Security Questions", "Two-Step", "Success"]
      },
      {
        name: "Account Settings",
        description: "Profile and account management",
        variants: ["Profile", "Security", "Preferences", "Billing", "Team"]
      }
    ]
  }
]

export default function PatternsOverviewPage() {
  return (
    <div className="space-y-12">
        {/* Hero Section */}
        <div>
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/storyboard" className="hover:text-foreground transition-colors">
            Storyboard
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Patterns</span>
        </nav>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          UI Patterns
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Complete UI sections and page templates built from our component library. These patterns demonstrate real-world usage and best practices for common interface needs.
        </p>
        
        {/* Pattern Stats */}
        <div className="mt-8 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success"></div>
            <span className="text-muted-foreground">5 Pattern Categories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">60+ Variations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-warning"></div>
            <span className="text-muted-foreground">Production Ready</span>
          </div>
        </div>
      </div>

      {/* Pattern Categories */}
      <section className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
        {patternCategories.map((category) => {
          const Icon = category.icon
          return (
            <div
              key={category.name}
              className="relative overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <span className={`inline-flex rounded-lg bg-${category.color}/10 p-3 text-${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                {/* Pattern List */}
                <div className="space-y-4">
                  {category.patterns.map((pattern) => (
                    <div key={pattern.name} className="group">
                      <h4 className="font-medium text-foreground flex items-center gap-2 mb-2">
                        {pattern.name}
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {pattern.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {pattern.variants.map((variant) => (
                          <span
                            key={variant}
                            className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {variant}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </section>

      {/* Pattern Examples Grid */}
      <section className="space-y-8">
        <div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Featured Pattern Examples
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Home className="h-12 w-12 text-primary/40" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">Hero with Split Layout</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Classic hero section with text on one side and image on the other
              </p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center">
              <BarChart3 className="h-12 w-12 text-success/40" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">Analytics Dashboard</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Data-rich dashboard with charts, stats, and tables
              </p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-warning/20 to-warning/5 flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-warning/40" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">Product Grid with Filters</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                E-commerce product browsing with sidebar filters
              </p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-info/20 to-info/5 flex items-center justify-center">
              <FileText className="h-12 w-12 text-info/40" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">Blog Article Layout</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Clean article layout with author info and related posts
              </p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center">
              <Lock className="h-12 w-12 text-destructive/40" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">Sign In with Social</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Authentication form with social login options
              </p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
              <Settings className="h-12 w-12 text-secondary/40" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">Settings with Tabs</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Organized settings page with tabbed navigation
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Pattern Benefits */}
      <section className="space-y-8">
        <div className="rounded-lg border border-border bg-card/50 p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Why Use UI Patterns?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Accelerate Development</h3>
            <p className="text-sm text-muted-foreground">
              Start with proven patterns instead of designing from scratch. Each pattern is thoroughly tested and optimized.
            </p>
          </div>
          
          <div>
            <div className="inline-flex rounded-lg bg-success/10 p-3 text-success mb-4">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Consistent Experience</h3>
            <p className="text-sm text-muted-foreground">
              Patterns ensure consistency across your application, making it easier for users to navigate and understand.
            </p>
          </div>
          
          <div>
            <div className="inline-flex rounded-lg bg-warning/10 p-3 text-warning mb-4">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Best Practices Built-in</h3>
            <p className="text-sm text-muted-foreground">
              Each pattern follows accessibility guidelines, responsive design principles, and performance optimizations.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Pattern Principles */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Pattern Principles</h2>
        <p className="text-muted-foreground mb-6">Core principles that guide all our UI patterns.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="font-medium text-foreground mb-2">Modular</h3>
          <p className="text-sm text-muted-foreground">
            Patterns are built from smaller components, making them easy to customize
          </p>
        </div>
        
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="font-medium text-foreground mb-2">Responsive</h3>
          <p className="text-sm text-muted-foreground">
            Every pattern works seamlessly across desktop, tablet, and mobile devices
          </p>
        </div>
        
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="font-medium text-foreground mb-2">Accessible</h3>
          <p className="text-sm text-muted-foreground">
            Built with WCAG guidelines in mind, including keyboard navigation
          </p>
        </div>
        
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="font-medium text-foreground mb-2">Themeable</h3>
          <p className="text-sm text-muted-foreground">
            Patterns adapt to your brand colors and design tokens automatically
          </p>
        </div>
        </div>
      </section>
    </div>
  )
}