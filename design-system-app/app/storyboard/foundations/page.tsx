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
  ArrowRight
} from 'lucide-react'

const foundationSections = [
  {
    name: "Colors",
    description: "Comprehensive color system with semantic tokens",
    icon: Palette,
    href: "/storyboard/foundations/colors",
    details: [
      "5 brand colors with full palettes (50-950)",
      "Semantic colors for success, warning, info, destructive",
      "Automatic dark mode color mapping",
      "Accessible contrast ratios"
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
      "Elevation shadow scale",
      "Transition timings and easings",
      "Hover and focus states",
      "Border radius system"
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
    <div className="space-y-12">
        {/* Hero Section */}
        <div>
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/storyboard" className="hover:text-foreground transition-colors">
            Storyboard
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Foundations</span>
        </nav>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Design Foundations
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          The core design tokens that power our entire system. These foundations ensure consistency and cohesion across all components and patterns.
        </p>
        
        {/* Theme Toggle Demo */}
        <div className="mt-8 inline-flex items-center gap-4 rounded-lg border border-border bg-card p-1">
          <button className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">
            <Sun className="h-4 w-4" />
            Light
          </button>
          <button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Moon className="h-4 w-4" />
            Dark
          </button>
        </div>
      </div>

      {/* Foundation Cards */}
      <section className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
        {foundationSections.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.name}
              href={section.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:bg-accent/50 hover:border-primary/20 transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {section.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {section.description}
                    </p>
                    
                    {/* Details List */}
                    <ul className="mt-4 space-y-1">
                      {section.details.map((detail, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/50 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Preview */}
                    <div className="mt-6">
                      {section.preview.type === "colors" && (
                        <div className="flex items-center gap-2">
                          {section.preview.items.map((item) => (
                            <div key={item.name} className="text-center">
                              <div className={`h-10 w-10 rounded-md ${item.class}`}></div>
                              <span className="mt-1 text-xs text-muted-foreground">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.preview.type === "typography" && (
                        <div className="space-y-2">
                          {section.preview.items.map((item) => (
                            <div key={item.name} className={item.class}>
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.preview.type === "spacing" && (
                        <div className="flex items-end gap-2">
                          {section.preview.items.map((item) => (
                            <div key={item.name} className="text-center">
                              <div 
                                className="bg-primary/20 rounded"
                                style={{ width: item.value, height: item.value }}
                              ></div>
                              <span className="mt-1 text-xs text-muted-foreground">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.preview.type === "effects" && (
                        <div className="grid grid-cols-2 gap-2">
                          {section.preview.items.map((item) => (
                            <div 
                              key={item.name} 
                              className={`h-12 rounded-md bg-background ${item.class} flex items-center justify-center`}
                            >
                              <span className="text-xs text-muted-foreground">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore {section.name.toLowerCase()}
                      <ArrowRight className="ml-1 h-4 w-4" />
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
      <section className="space-y-8">
        <div className="rounded-lg border border-border bg-card/50 p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Design Token Philosophy
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-medium text-foreground mb-3">Systematic Approach</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Every design decision is codified into reusable tokens, creating a single source of truth that scales across projects and teams.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Square className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-foreground">Predictable:</span>
                  <span className="text-muted-foreground"> Developers know exactly what to expect</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Circle className="h-4 w-4 text-success mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-foreground">Scalable:</span>
                  <span className="text-muted-foreground"> Easy to extend without breaking existing patterns</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Hexagon className="h-4 w-4 text-warning mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-foreground">Maintainable:</span>
                  <span className="text-muted-foreground"> Changes propagate automatically</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-3">Semantic Naming</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tokens are named by their purpose, not their appearance, making the system resilient to visual changes and theme variations.
            </p>
            <div className="rounded-md bg-muted/50 p-4 font-mono text-xs">
              <div className="text-success">/* Good - Semantic */</div>
              <div>background: <span className="text-primary">var(--color-background)</span>;</div>
              <div>color: <span className="text-primary">var(--color-foreground)</span>;</div>
              <div>border: <span className="text-primary">var(--color-border)</span>;</div>
              <div className="mt-3 text-destructive">/* Avoid - Literal */</div>
              <div className="line-through opacity-50">background: #ffffff;</div>
              <div className="line-through opacity-50">color: #000000;</div>
              <div className="line-through opacity-50">border: #e5e5e5;</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Token Categories */}
      <section className="space-y-8">
        <div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Token Categories in Detail
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <Palette className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-2">Color Tokens</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Background colors</li>
              <li>• Text colors</li>
              <li>• Border colors</li>
              <li>• Semantic colors</li>
              <li>• Brand colors</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-4">
            <Type className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-2">Typography Tokens</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Font families</li>
              <li>• Font sizes</li>
              <li>• Font weights</li>
              <li>• Line heights</li>
              <li>• Letter spacing</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-4">
            <Move className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-2">Spacing Tokens</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Padding scale</li>
              <li>• Margin scale</li>
              <li>• Gap scale</li>
              <li>• Container widths</li>
              <li>• Grid units</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-4">
            <Sparkles className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-2">Effect Tokens</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Shadow depths</li>
              <li>• Border radius</li>
              <li>• Transitions</li>
              <li>• Animations</li>
              <li>• Opacity levels</li>
            </ul>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}