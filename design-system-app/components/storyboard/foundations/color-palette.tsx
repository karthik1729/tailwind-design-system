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
      title: "Primary Colors (Blue/Indigo)",
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
      title: "Indigo Accent",
      description: "Secondary accent color for complementary design elements",
      colors: [
        { name: "Indigo 50", value: "#eef2ff", class: "bg-indigo-50", textColor: "text-gray-900" },
        { name: "Indigo 100", value: "#e0e7ff", class: "bg-indigo-100", textColor: "text-gray-900" },
        { name: "Indigo 200", value: "#c7d2fe", class: "bg-indigo-200", textColor: "text-gray-900" },
        { name: "Indigo 300", value: "#a5b4fc", class: "bg-indigo-300", textColor: "text-gray-900" },
        { name: "Indigo 400", value: "#818cf8", class: "bg-indigo-400", textColor: "text-white" },
        { name: "Indigo 500", value: "#6366f1", class: "bg-indigo-500", textColor: "text-white" },
        { name: "Indigo 600", value: "#4f46e5", class: "bg-indigo-600", textColor: "text-white" },
        { name: "Indigo 700", value: "#4338ca", class: "bg-indigo-700", textColor: "text-white" },
        { name: "Indigo 800", value: "#3730a3", class: "bg-indigo-800", textColor: "text-white" },
        { name: "Indigo 900", value: "#312e81", class: "bg-indigo-900", textColor: "text-white" }
      ]
    },
    {
      title: "Gray Scale",
      description: "Neutral colors for text, backgrounds, borders, and UI elements",
      colors: [
        { name: "Gray 50", value: "#f9fafb", class: "bg-gray-50", textColor: "text-gray-900" },
        { name: "Gray 100", value: "#f3f4f6", class: "bg-gray-100", textColor: "text-gray-900" },
        { name: "Gray 200", value: "#e5e7eb", class: "bg-gray-200", textColor: "text-gray-900" },
        { name: "Gray 300", value: "#d1d5db", class: "bg-gray-300", textColor: "text-gray-900" },
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
        { name: "Red 900", value: "#7f1d1d", class: "bg-red-900", textColor: "text-white" }
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
          Color Palette
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A comprehensive color system designed for consistency, accessibility, and visual harmony across all components.
        </p>
      </div>

      {/* Color Groups */}
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {group.title}
            </h2>
            {group.description && (
              <p className="text-gray-600 dark:text-gray-400">
                {group.description}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {group.colors.map((color, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
              >
                <div
                  className={`h-24 w-full ${color.class} flex items-center justify-center`}
                >
                  <span className={`text-sm font-medium ${color.textColor || 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                    {color.value}
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 space-y-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {color.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {color.value}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-mono">
                    {color.class}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Usage Guidelines */}
      <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          Usage Guidelines
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {usageGuidelines.map((section, index) => (
            <div
              key={index}
              className="space-y-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.guidelines.map((guideline, guideIndex) => (
                  <li
                    key={guideIndex}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
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
      <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Quick Reference
        </h2>
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Text Colors</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Primary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">text-gray-900</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Secondary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">text-gray-500</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tertiary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">text-gray-400</code>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Background Colors</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Primary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">bg-white</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Secondary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">bg-gray-50</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tertiary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">bg-gray-100</code>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Border Colors</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Primary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">border-gray-300</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Secondary:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">border-gray-200</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Brand:</span>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">border-primary-600</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPalette