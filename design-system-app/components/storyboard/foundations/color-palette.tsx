"use client"

import React from 'react'

interface ColorSwatch {
  name: string
  value: string
  class: string
  textColor?: string
}

interface ColorGroup {
  title: string
  description?: string
  colors: ColorSwatch[]
}

const ColorPalette: React.FC = () => {
  const colorGroups: ColorGroup[] = [
    {
      title: "Primary Colors (Blue)",
      description: "The primary brand color palette used for main actions, links, and brand identity",
      colors: [
        { name: "Primary 50", value: "#eff6ff", class: "bg-primary-50", textColor: "text-gray-900" },
        { name: "Primary 100", value: "#dbeafe", class: "bg-primary-100", textColor: "text-gray-900" },
        { name: "Primary 200", value: "#bfdbfe", class: "bg-primary-200", textColor: "text-gray-900" },
        { name: "Primary 300", value: "#93c5fd", class: "bg-primary-300", textColor: "text-gray-900" },
        { name: "Primary 400", value: "#60a5fa", class: "bg-primary-400", textColor: "text-white" },
        { name: "Primary 500", value: "#3b82f6", class: "bg-primary-500", textColor: "text-white" },
        { name: "Primary 600", value: "#2563eb", class: "bg-primary-600", textColor: "text-white" },
        { name: "Primary 700", value: "#1d4ed8", class: "bg-primary-700", textColor: "text-white" },
        { name: "Primary 800", value: "#1e40af", class: "bg-primary-800", textColor: "text-white" },
        { name: "Primary 900", value: "#1e3a8a", class: "bg-primary-900", textColor: "text-white" },
        { name: "Primary 950", value: "#172554", class: "bg-primary-950", textColor: "text-white" }
      ]
    },
    {
      title: "Accent Colors (Indigo)",
      description: "Secondary accent color for complementary design elements",
      colors: [
        { name: "Accent 50", value: "#eef2ff", class: "bg-accent-50", textColor: "text-gray-900" },
        { name: "Accent 100", value: "#e0e7ff", class: "bg-accent-100", textColor: "text-gray-900" },
        { name: "Accent 200", value: "#c7d2fe", class: "bg-accent-200", textColor: "text-gray-900" },
        { name: "Accent 300", value: "#a5b4fc", class: "bg-accent-300", textColor: "text-gray-900" },
        { name: "Accent 400", value: "#818cf8", class: "bg-accent-400", textColor: "text-white" },
        { name: "Accent 500", value: "#6366f1", class: "bg-accent-500", textColor: "text-white" },
        { name: "Accent 600", value: "#4f46e5", class: "bg-accent-600", textColor: "text-white" },
        { name: "Accent 700", value: "#4338ca", class: "bg-accent-700", textColor: "text-white" },
        { name: "Accent 800", value: "#3730a3", class: "bg-accent-800", textColor: "text-white" },
        { name: "Accent 900", value: "#312e81", class: "bg-accent-900", textColor: "text-white" },
        { name: "Accent 950", value: "#1e1b4b", class: "bg-accent-950", textColor: "text-white" }
      ]
    },
    {
      title: "Gray Scale",
      description: "Neutral colors for text, backgrounds, borders, and UI elements",
      colors: [
        { name: "Gray 50", value: "#f9fafb", class: "bg-gray-50", textColor: "text-foreground" },
        { name: "Gray 100", value: "#f3f4f6", class: "bg-gray-100", textColor: "text-foreground" },
        { name: "Gray 200", value: "#e5e7eb", class: "bg-gray-200", textColor: "text-foreground" },
        { name: "Gray 300", value: "#d1d5db", class: "bg-gray-300", textColor: "text-foreground" },
        { name: "Gray 400", value: "#9ca3af", class: "bg-gray-400", textColor: "text-white" },
        { name: "Gray 500", value: "#6b7280", class: "bg-gray-500", textColor: "text-white" },
        { name: "Gray 600", value: "#4b5563", class: "bg-gray-600", textColor: "text-white" },
        { name: "Gray 700", value: "#374151", class: "bg-gray-700", textColor: "text-white" },
        { name: "Gray 800", value: "#1f2937", class: "bg-gray-800", textColor: "text-white" },
        { name: "Gray 900", value: "#111827", class: "bg-gray-900", textColor: "text-white" },
        { name: "Gray 950", value: "#030712", class: "bg-gray-950", textColor: "text-white" }
      ]
    },
    {
      title: "Semantic Colors - Success (Green)",
      description: "Used for positive actions, success states, and confirmations",
      colors: [
        { name: "Green 50", value: "#f0fdf4", class: "bg-green-50", textColor: "text-gray-900" },
        { name: "Green 100", value: "#dcfce7", class: "bg-green-100", textColor: "text-gray-900" },
        { name: "Green 200", value: "#bbf7d0", class: "bg-green-200", textColor: "text-gray-900" },
        { name: "Green 300", value: "#86efac", class: "bg-green-300", textColor: "text-gray-900" },
        { name: "Green 400", value: "#4ade80", class: "bg-green-400", textColor: "text-gray-900" },
        { name: "Green 500", value: "#22c55e", class: "bg-green-500", textColor: "text-white" },
        { name: "Green 600", value: "#16a34a", class: "bg-green-600", textColor: "text-white" },
        { name: "Green 700", value: "#15803d", class: "bg-green-700", textColor: "text-white" },
        { name: "Green 800", value: "#166534", class: "bg-green-800", textColor: "text-white" },
        { name: "Green 900", value: "#14532d", class: "bg-green-900", textColor: "text-white" }
      ]
    },
    {
      title: "Semantic Colors - Warning (Yellow)",
      description: "Used for warnings, cautions, and attention-grabbing elements",
      colors: [
        { name: "Yellow 50", value: "#fefce8", class: "bg-yellow-50", textColor: "text-gray-900" },
        { name: "Yellow 100", value: "#fef9c3", class: "bg-yellow-100", textColor: "text-gray-900" },
        { name: "Yellow 200", value: "#fef08a", class: "bg-yellow-200", textColor: "text-gray-900" },
        { name: "Yellow 300", value: "#fde047", class: "bg-yellow-300", textColor: "text-gray-900" },
        { name: "Yellow 400", value: "#facc15", class: "bg-yellow-400", textColor: "text-gray-900" },
        { name: "Yellow 500", value: "#eab308", class: "bg-yellow-500", textColor: "text-gray-900" },
        { name: "Yellow 600", value: "#ca8a04", class: "bg-yellow-600", textColor: "text-white" },
        { name: "Yellow 700", value: "#a16207", class: "bg-yellow-700", textColor: "text-white" },
        { name: "Yellow 800", value: "#854d0e", class: "bg-yellow-800", textColor: "text-white" },
        { name: "Yellow 900", value: "#713f12", class: "bg-yellow-900", textColor: "text-white" }
      ]
    },
    {
      title: "Semantic Colors - Error/Destructive (Red)",
      description: "Used for errors, destructive actions, and critical alerts",
      colors: [
        { name: "Red 50", value: "#fef2f2", class: "bg-red-50", textColor: "text-gray-900" },
        { name: "Red 100", value: "#fee2e2", class: "bg-red-100", textColor: "text-gray-900" },
        { name: "Red 200", value: "#fecaca", class: "bg-red-200", textColor: "text-gray-900" },
        { name: "Red 300", value: "#fca5a5", class: "bg-red-300", textColor: "text-gray-900" },
        { name: "Red 400", value: "#f87171", class: "bg-red-400", textColor: "text-gray-900" },
        { name: "Red 500", value: "#ef4444", class: "bg-red-500", textColor: "text-white" },
        { name: "Red 600", value: "#dc2626", class: "bg-red-600", textColor: "text-white" },
        { name: "Red 700", value: "#b91c1c", class: "bg-red-700", textColor: "text-white" },
        { name: "Red 800", value: "#991b1b", class: "bg-red-800", textColor: "text-white" },
        { name: "Red 900", value: "#7f1d1d", class: "bg-red-900", textColor: "text-white" },
        { name: "Red 950", value: "#450a0a", class: "bg-red-950", textColor: "text-white" }
      ]
    },
    {
      title: "Supplementary Colors - Purple",
      description: "Used for special accents, highlights, and creative elements",
      colors: [
        { name: "Purple 50", value: "#faf5ff", class: "bg-purple-50", textColor: "text-gray-900" },
        { name: "Purple 100", value: "#f3e8ff", class: "bg-purple-100", textColor: "text-gray-900" },
        { name: "Purple 200", value: "#e9d5ff", class: "bg-purple-200", textColor: "text-gray-900" },
        { name: "Purple 300", value: "#d8b4fe", class: "bg-purple-300", textColor: "text-gray-900" },
        { name: "Purple 400", value: "#c084fc", class: "bg-purple-400", textColor: "text-white" },
        { name: "Purple 500", value: "#a855f7", class: "bg-purple-500", textColor: "text-white" },
        { name: "Purple 600", value: "#9333ea", class: "bg-purple-600", textColor: "text-white" },
        { name: "Purple 700", value: "#7c3aed", class: "bg-purple-700", textColor: "text-white" },
        { name: "Purple 800", value: "#6b21a8", class: "bg-purple-800", textColor: "text-white" },
        { name: "Purple 900", value: "#581c87", class: "bg-purple-900", textColor: "text-white" },
        { name: "Purple 950", value: "#3b0764", class: "bg-purple-950", textColor: "text-white" }
      ]
    },
    {
      title: "Supplementary Colors - Teal",
      description: "Used for informational elements and alternative success states",
      colors: [
        { name: "Teal 50", value: "#f0fdfa", class: "bg-teal-50", textColor: "text-gray-900" },
        { name: "Teal 100", value: "#ccfbf1", class: "bg-teal-100", textColor: "text-gray-900" },
        { name: "Teal 200", value: "#99f6e4", class: "bg-teal-200", textColor: "text-gray-900" },
        { name: "Teal 300", value: "#5eead4", class: "bg-teal-300", textColor: "text-gray-900" },
        { name: "Teal 400", value: "#2dd4bf", class: "bg-teal-400", textColor: "text-gray-900" },
        { name: "Teal 500", value: "#14b8a6", class: "bg-teal-500", textColor: "text-white" },
        { name: "Teal 600", value: "#0d9488", class: "bg-teal-600", textColor: "text-white" },
        { name: "Teal 700", value: "#0f766e", class: "bg-teal-700", textColor: "text-white" },
        { name: "Teal 800", value: "#115e59", class: "bg-teal-800", textColor: "text-white" },
        { name: "Teal 900", value: "#134e4a", class: "bg-teal-900", textColor: "text-white" },
        { name: "Teal 950", value: "#042f2e", class: "bg-teal-950", textColor: "text-white" }
      ]
    },
    {
      title: "Supplementary Colors - Orange",
      description: "Used for attention-grabbing elements and alternative warning states",
      colors: [
        { name: "Orange 50", value: "#fff7ed", class: "bg-orange-50", textColor: "text-gray-900" },
        { name: "Orange 100", value: "#ffedd5", class: "bg-orange-100", textColor: "text-gray-900" },
        { name: "Orange 200", value: "#fed7aa", class: "bg-orange-200", textColor: "text-gray-900" },
        { name: "Orange 300", value: "#fdba74", class: "bg-orange-300", textColor: "text-gray-900" },
        { name: "Orange 400", value: "#fb923c", class: "bg-orange-400", textColor: "text-gray-900" },
        { name: "Orange 500", value: "#f97316", class: "bg-orange-500", textColor: "text-white" },
        { name: "Orange 600", value: "#ea580c", class: "bg-orange-600", textColor: "text-white" },
        { name: "Orange 700", value: "#c2410c", class: "bg-orange-700", textColor: "text-white" },
        { name: "Orange 800", value: "#9a3412", class: "bg-orange-800", textColor: "text-white" },
        { name: "Orange 900", value: "#7c2d12", class: "bg-orange-900", textColor: "text-white" },
        { name: "Orange 950", value: "#431407", class: "bg-orange-950", textColor: "text-white" }
      ]
    },
    {
      title: "Additional Brand Colors - Pink",
      description: "Used for creative accents and special highlights",
      colors: [
        { name: "Pink 50", value: "#fdf2f8", class: "bg-pink-50", textColor: "text-gray-900" },
        { name: "Pink 100", value: "#fce7f3", class: "bg-pink-100", textColor: "text-gray-900" },
        { name: "Pink 200", value: "#fbcfe8", class: "bg-pink-200", textColor: "text-gray-900" },
        { name: "Pink 300", value: "#f9a8d4", class: "bg-pink-300", textColor: "text-gray-900" },
        { name: "Pink 400", value: "#f472b6", class: "bg-pink-400", textColor: "text-white" },
        { name: "Pink 500", value: "#ec4899", class: "bg-pink-500", textColor: "text-white" },
        { name: "Pink 600", value: "#db2777", class: "bg-pink-600", textColor: "text-white" },
        { name: "Pink 700", value: "#be185d", class: "bg-pink-700", textColor: "text-white" },
        { name: "Pink 800", value: "#9d174d", class: "bg-pink-800", textColor: "text-white" },
        { name: "Pink 900", value: "#831843", class: "bg-pink-900", textColor: "text-white" },
        { name: "Pink 950", value: "#500724", class: "bg-pink-950", textColor: "text-white" }
      ]
    },
    {
      title: "Additional Brand Colors - Cyan",
      description: "Used for informational highlights and alternative accent colors",
      colors: [
        { name: "Cyan 50", value: "#ecfeff", class: "bg-cyan-50", textColor: "text-gray-900" },
        { name: "Cyan 100", value: "#cffafe", class: "bg-cyan-100", textColor: "text-gray-900" },
        { name: "Cyan 200", value: "#a5f3fc", class: "bg-cyan-200", textColor: "text-gray-900" },
        { name: "Cyan 300", value: "#67e8f9", class: "bg-cyan-300", textColor: "text-gray-900" },
        { name: "Cyan 400", value: "#22d3ee", class: "bg-cyan-400", textColor: "text-gray-900" },
        { name: "Cyan 500", value: "#06b6d4", class: "bg-cyan-500", textColor: "text-white" },
        { name: "Cyan 600", value: "#0891b2", class: "bg-cyan-600", textColor: "text-white" },
        { name: "Cyan 700", value: "#0e7490", class: "bg-cyan-700", textColor: "text-white" },
        { name: "Cyan 800", value: "#155e75", class: "bg-cyan-800", textColor: "text-white" },
        { name: "Cyan 900", value: "#164e63", class: "bg-cyan-900", textColor: "text-white" },
        { name: "Cyan 950", value: "#083344", class: "bg-cyan-950", textColor: "text-white" }
      ]
    },
    {
      title: "Additional Brand Colors - Lime",
      description: "Used for positive indicators and success highlights",
      colors: [
        { name: "Lime 50", value: "#f7fee7", class: "bg-lime-50", textColor: "text-gray-900" },
        { name: "Lime 100", value: "#ecfccb", class: "bg-lime-100", textColor: "text-gray-900" },
        { name: "Lime 200", value: "#d9f99d", class: "bg-lime-200", textColor: "text-gray-900" },
        { name: "Lime 300", value: "#bef264", class: "bg-lime-300", textColor: "text-gray-900" },
        { name: "Lime 400", value: "#a3e635", class: "bg-lime-400", textColor: "text-gray-900" },
        { name: "Lime 500", value: "#84cc16", class: "bg-lime-500", textColor: "text-gray-900" },
        { name: "Lime 600", value: "#65a30d", class: "bg-lime-600", textColor: "text-white" },
        { name: "Lime 700", value: "#4d7c0f", class: "bg-lime-700", textColor: "text-white" },
        { name: "Lime 800", value: "#3f6212", class: "bg-lime-800", textColor: "text-white" },
        { name: "Lime 900", value: "#365314", class: "bg-lime-900", textColor: "text-white" },
        { name: "Lime 950", value: "#1a2e05", class: "bg-lime-950", textColor: "text-white" }
      ]
    },
    {
      title: "Semantic Colors - Warning (Amber)",
      description: "Alternative warning color palette for more nuanced warning states",
      colors: [
        { name: "Amber 50", value: "#fffbeb", class: "bg-amber-50", textColor: "text-gray-900" },
        { name: "Amber 100", value: "#fef3c7", class: "bg-amber-100", textColor: "text-gray-900" },
        { name: "Amber 200", value: "#fde68a", class: "bg-amber-200", textColor: "text-gray-900" },
        { name: "Amber 300", value: "#fcd34d", class: "bg-amber-300", textColor: "text-gray-900" },
        { name: "Amber 400", value: "#fbbf24", class: "bg-amber-400", textColor: "text-gray-900" },
        { name: "Amber 500", value: "#f59e0b", class: "bg-amber-500", textColor: "text-gray-900" },
        { name: "Amber 600", value: "#d97706", class: "bg-amber-600", textColor: "text-white" },
        { name: "Amber 700", value: "#b45309", class: "bg-amber-700", textColor: "text-white" },
        { name: "Amber 800", value: "#92400e", class: "bg-amber-800", textColor: "text-white" },
        { name: "Amber 900", value: "#78350f", class: "bg-amber-900", textColor: "text-white" },
        { name: "Amber 950", value: "#451a03", class: "bg-amber-950", textColor: "text-white" }
      ]
    }
  ]

  const usageGuidelines = [
    {
      title: "Primary Colors",
      guidelines: [
        "Use primary-600 (#2563eb) as the main brand color for CTAs and primary actions",
        "Use primary-500 (#3b82f6) for hover states and interactive elements",
        "Use lighter shades (50-200) for backgrounds and subtle highlights",
        "Use darker shades (700-950) for text on light backgrounds"
      ]
    },
    {
      title: "Gray Scale",
      guidelines: [
        "Use gray-900 (#111827) for primary text content",
        "Use gray-500 (#6b7280) for secondary text and labels",
        "Use gray-400 (#9ca3af) for tertiary text and placeholders",
        "Use gray-200 (#e5e7eb) for borders and dividers",
        "Use gray-50 (#f9fafb) and gray-100 (#f3f4f6) for subtle backgrounds"
      ]
    },
    {
      title: "Semantic Colors",
      guidelines: [
        "Green: Use for success messages, positive actions, and confirmations",
        "Yellow: Use for warnings, pending states, and attention-grabbing elements",
        "Red: Use for errors, destructive actions, and critical alerts",
        "Always ensure sufficient contrast for accessibility (WCAG AA minimum)"
      ]
    },
    {
      title: "Dark Mode",
      guidelines: [
        "Colors automatically adjust in dark mode via CSS variables",
        "Primary colors shift to lighter shades for better visibility",
        "Backgrounds invert from light to dark grays",
        "Maintain consistent semantic meaning across themes"
      ]
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Color Palette
        </h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive color system designed for consistency, accessibility, and visual harmony across all components.
        </p>
      </div>

      {/* Color Groups */}
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              {group.title}
            </h2>
            {group.description && (
              <p className="text-muted-foreground">
                {group.description}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {group.colors.map((color, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border hover:shadow-lg transition-shadow duration-200"
              >
                <div
                  className={`h-24 w-full ${color.class} flex items-center justify-center`}
                >
                  <span className={`text-sm font-medium ${color.textColor || 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                    {color.value}
                  </span>
                </div>
                <div className="p-3 bg-background space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    {color.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {color.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {color.class}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Usage Guidelines */}
      <div className="space-y-6 border-t border-border pt-12">
        <h2 className="text-3xl font-bold text-foreground">
          Usage Guidelines
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {usageGuidelines.map((section, index) => (
            <div
              key={index}
              className="space-y-3 p-6 bg-muted rounded-lg border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.guidelines.map((guideline, guideIndex) => (
                  <li
                    key={guideIndex}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-2 flex-shrink-0" />
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reference */}
      <div className="space-y-4 border-t border-border pt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Quick Reference
        </h2>
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 bg-muted rounded-lg border border-border">
            <h3 className="font-medium text-foreground mb-2">Text Colors</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">text-gray-900</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Secondary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">text-gray-500</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tertiary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">text-gray-400</code>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-muted rounded-lg border border-border">
            <h3 className="font-medium text-foreground mb-2">Background Colors</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">bg-white</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Secondary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">bg-gray-50</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tertiary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">bg-gray-100</code>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-muted rounded-lg border border-border">
            <h3 className="font-medium text-foreground mb-2">Border Colors</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">border-gray-300</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Secondary:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">border-gray-200</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Brand:</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">border-primary-600</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPalette