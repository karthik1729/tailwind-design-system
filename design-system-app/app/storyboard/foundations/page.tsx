"use client"

import Link from 'next/link'
import { 
  Palette,
  Type,
  Move,
  Sparkles,
  Sun,
  Moon,
  Square,
  Circle,
  Hexagon,
  Triangle,
  ArrowRight,
  Layers,
  Lightbulb,
  Zap,
  Code2
} from 'lucide-react'

const foundationSections = [
  {
    name: "Colors",
    description: "Comprehensive color system with semantic tokens",
    icon: Palette,
    href: "/storyboard/foundations/colors",
    details: [
      "11 foundation colors with full palettes (50-950)",
      "Semantic colors for all states (success, warning, info, destructive)",
      "Additional brand colors (pink, cyan, lime)",
      "Automatic dark mode color mapping"
    ],
    preview: {
      type: "colors",
      items: [
        { name: "Primary", class: "bg-primary" },
        { name: "Success", class: "bg-success" },
        { name: "Warning", class: "bg-warning" },
        { name: "Destructive", class: "bg-destructive" }
      ]
    }
  },
  {
    name: "Typography",
    description: "Type scale and text styling system",
    icon: Type,
    href: "/storyboard/foundations/typography",
    details: [
      "Responsive type scale from xs to 5xl",
      "Font weight variations (300-900)",
      "Line height and letter spacing",
      "Prose and display variants"
    ],
    preview: {
      type: "typography",
      items: [
        { name: "Display", class: "text-4xl font-bold" },
        { name: "Heading", class: "text-2xl font-semibold" },
        { name: "Body", class: "text-base" },
        { name: "Caption", class: "text-sm text-muted-foreground" }
      ]
    }
  },
  {
    name: "Spacing",
    description: "Consistent spacing scale and layout utilities",
    icon: Move,
    href: "/storyboard/foundations/spacing",
    details: [
      "4px base unit spacing scale",
      "Standard patterns: p-4, gap-4",
      "Container max-widths",
      "Grid and flexbox utilities"
    ],
    preview: {
      type: "spacing",
      items: [
        { name: "0", value: "0" },
        { name: "1", value: "0.25rem" },
        { name: "4", value: "1rem" },
        { name: "8", value: "2rem" }
      ]
    }
  },
  {
    name: "Effects",
    description: "Shadows, animations, and visual effects",
    icon: Sparkles,
    href: "/storyboard/foundations/effects",
    details: [
      "Foundation shadow scale (xs to 2xl)",
      "Colored shadow variants",
      "Z-index layering system",
      "Border radius & transition system"
    ],
    preview: {
      type: "effects",
      items: [
        { name: "Shadow SM", class: "shadow-sm" },
        { name: "Shadow", class: "shadow" },
        { name: "Shadow MD", class: "shadow-md" },
        { name: "Shadow LG", class: "shadow-lg" }
      ]
    }
  }
]

export default function FoundationsOverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-primary-100),transparent_50%)] opacity-20 dark:opacity-10" />
        
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
              <span className="text-foreground font-medium">Foundations</span>
            </nav>
            
            <div className="flex items-start justify-between">
              <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                    <div className="relative inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                      <Layers className="h-8 w-8" />
                    </div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                    Design Foundations
                  </h1>
                </div>
                
                <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                  The core design tokens that power our entire system. These foundations ensure consistency and cohesion across all <span className="text-foreground font-medium">59 components</span> and patterns.
                </p>
                
                {/* Theme Toggle Demo */}
                <div className="mt-8 inline-flex items-center rounded-xl border border-border bg-card/80 backdrop-blur-sm p-1.5 shadow-sm">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-200">
                    <Sun className="h-4 w-4" />
                    Light
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200">
                    <Moon className="h-4 w-4" />
                    Dark
                  </button>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-success/20 blur-3xl" />
                <div className="relative grid grid-cols-2 gap-3 rotate-12">
                  <div className="h-24 w-24 rounded-xl bg-primary/10 backdrop-blur-sm" />
                  <div className="h-24 w-24 rounded-xl bg-accent/10 backdrop-blur-sm" />
                  <div className="h-24 w-24 rounded-xl bg-success/10 backdrop-blur-sm" />
                  <div className="h-24 w-24 rounded-xl bg-warning/10 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 py-12 space-y-16 max-w-7xl mx-auto">

        {/* Foundation Cards */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Core Foundation Layers</h2>
            <p className="mt-3 text-muted-foreground">Four essential layers that form the building blocks of every interface</p>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
          {foundationSections.map((section, index) => {
            const Icon = section.icon
            const colorClasses = [
              { bg: 'bg-primary/10', text: 'text-primary', hover: 'group-hover:bg-primary/20', gradient: 'from-primary/5', bullet: 'bg-primary/60' },
              { bg: 'bg-accent/10', text: 'text-accent', hover: 'group-hover:bg-accent/20', gradient: 'from-accent/5', bullet: 'bg-accent/60' },
              { bg: 'bg-success/10', text: 'text-success', hover: 'group-hover:bg-success/20', gradient: 'from-success/5', bullet: 'bg-success/60' },
              { bg: 'bg-warning/10', text: 'text-warning', hover: 'group-hover:bg-warning/20', gradient: 'from-warning/5', bullet: 'bg-warning/60' }
            ]
            const colorClass = colorClasses[index % colorClasses.length]
            
            return (
              <Link
                key={section.name}
                href={section.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex rounded-xl ${colorClass.bg} p-3 ${colorClass.text} ${colorClass.hover} transition-colors duration-200`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {section.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {section.description}
                      </p>
                      
                      {/* Details List */}
                      <ul className="mt-4 space-y-1.5">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground/70 transition-colors duration-200">
                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${colorClass.bullet} flex-shrink-0`}></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Preview */}
                      <div className="mt-6 p-4 rounded-lg bg-background/50 border border-border/50">
                        {section.preview.type === "colors" && (
                          <div className="flex items-center justify-between gap-3">
                            {section.preview.items.map((item) => (
                              <div key={item.name} className="flex-1 text-center">
                                <div className={`h-12 w-full rounded-lg ${item.class} shadow-sm transition-transform duration-200 hover:scale-105`}></div>
                                <span className="mt-2 block text-xs font-medium text-foreground/70">{item.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {section.preview.type === "typography" && (
                          <div className="space-y-3">
                            {section.preview.items.map((item) => (
                              <div key={item.name} className={`${item.class} flex items-baseline justify-between`}>
                                <span>{item.name}</span>
                                <span className="text-xs text-muted-foreground font-mono ml-4">{item.class.match(/text-(\w+)/)?.[1] || 'base'}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {section.preview.type === "spacing" && (
                          <div className="flex items-end justify-between gap-2">
                            {section.preview.items.map((item) => (
                              <div key={item.name} className="flex-1 text-center">
                                <div 
                                  className="bg-primary/20 rounded mx-auto transition-all duration-200 hover:bg-primary/30"
                                  style={{ width: item.value, height: item.value }}
                                ></div>
                                <span className="mt-2 block text-xs font-medium text-foreground/70">{item.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {section.preview.type === "effects" && (
                          <div className="grid grid-cols-2 gap-3">
                            {section.preview.items.map((item) => (
                              <div 
                                key={item.name} 
                                className={`h-14 rounded-lg bg-card ${item.class} flex items-center justify-center transition-all duration-200 hover:scale-105`}
                              >
                                <span className="text-xs font-medium text-foreground/70">{item.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Explore {section.name.toLowerCase()}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
          </div>
        </section>

        {/* Design Token Philosophy */}
        <section className="relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex justify-center mb-4">
              <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <Lightbulb className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Design Token Philosophy</h2>
            <p className="mt-3 text-muted-foreground">Building scalable interfaces through systematic design decisions</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Systematic Approach */}
            <div className="relative rounded-xl border border-border bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Systematic Approach</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Every design decision is codified into reusable tokens, creating a single source of truth that scales across projects and teams.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200">
                    <Square className="h-4 w-4 text-primary mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium text-foreground">Predictable</span>
                      <span className="text-muted-foreground block">Developers know exactly what to expect</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200">
                    <Circle className="h-4 w-4 text-success mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium text-foreground">Scalable</span>
                      <span className="text-muted-foreground block">Easy to extend without breaking existing patterns</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200">
                    <Hexagon className="h-4 w-4 text-warning mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium text-foreground">Maintainable</span>
                      <span className="text-muted-foreground block">Changes propagate automatically</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Semantic Naming */}
            <div className="relative rounded-xl border border-border bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex rounded-lg bg-accent/10 p-2 text-accent">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Semantic Naming</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Tokens are named by their purpose, not their appearance, making the system resilient to visual changes and theme variations.
                </p>
                <div className="rounded-lg bg-muted/30 p-4 font-mono text-xs overflow-x-auto">
                  <div className="text-success mb-2">/* ✓ Good - Semantic */</div>
                  <div className="space-y-1 mb-4">
                    <div>background: <span className="text-primary">var(--color-background)</span>;</div>
                    <div>color: <span className="text-primary">var(--color-foreground)</span>;</div>
                    <div>border: <span className="text-primary">var(--color-border)</span>;</div>
                  </div>
                  <div className="text-destructive mb-2">/* ✗ Avoid - Literal */</div>
                  <div className="space-y-1 opacity-50">
                    <div className="line-through">background: #ffffff;</div>
                    <div className="line-through">color: #000000;</div>
                    <div className="line-through">border: #e5e5e5;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Categories */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Token Categories in Detail</h2>
            <p className="mt-3 text-muted-foreground">Organized tokens for every aspect of your interface</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Color Tokens */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Color Tokens</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary/60" />
                  Background colors
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary/60" />
                  Text colors
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary/60" />
                  Border colors
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary/60" />
                  Semantic colors
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary/60" />
                  Brand colors
                </li>
              </ul>
            </div>
            
            {/* Typography Tokens */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-accent/30 hover:shadow-md transition-all duration-200">
              <div className="inline-flex rounded-lg bg-accent/10 p-2 text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-200">
                <Type className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Typography Tokens</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-accent/60" />
                  Font families
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-accent/60" />
                  Font sizes
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-accent/60" />
                  Font weights
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-accent/60" />
                  Line heights
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-accent/60" />
                  Letter spacing
                </li>
              </ul>
            </div>
            
            {/* Spacing Tokens */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-success/30 hover:shadow-md transition-all duration-200">
              <div className="inline-flex rounded-lg bg-success/10 p-2 text-success mb-4 group-hover:bg-success/20 transition-colors duration-200">
                <Move className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Spacing Tokens</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-success/60" />
                  Padding scale
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-success/60" />
                  Margin scale
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-success/60" />
                  Gap scale
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-success/60" />
                  Container widths
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-success/60" />
                  Grid units
                </li>
              </ul>
            </div>
            
            {/* Effect Tokens */}
            <div className="group rounded-xl border border-border bg-card p-5 hover:border-warning/30 hover:shadow-md transition-all duration-200">
              <div className="inline-flex rounded-lg bg-warning/10 p-2 text-warning mb-4 group-hover:bg-warning/20 transition-colors duration-200">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Effect Tokens</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-warning/60" />
                  Shadow depths
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-warning/60" />
                  Border radius
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-warning/60" />
                  Transitions
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-warning/60" />
                  Animations
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-warning/60" />
                  Opacity levels
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-success/5 p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="relative space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Ready to Explore?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive into each foundation layer to understand how our design tokens work together to create cohesive experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link 
                href="/storyboard/foundations/colors" 
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
              >
                Start with Colors
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