export interface ComponentSection {
  id: string
  name: string
  description?: string
  items: ComponentItem[]
}

export interface ComponentItem {
  id: string
  name: string
  description: string
  variants?: number
  hasDemo?: boolean
  hasDarkMode?: boolean
  type?: 'token' | 'component' | 'pattern'
}

export interface Subcategory {
  id: string
  name: string
  count: number
  sections: ComponentSection[]
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  subcategories: Record<string, Subcategory>
}

// Updated registry with proper token/component distinction
export const componentRegistry: Record<string, Category> = {
  "foundations": {
    id: "foundations",
    name: "Foundations",
    description: "Core design tokens and visual language",
    icon: "palette",
    subcategories: {
      "colors": {
        id: "colors",
        name: "Colors",
        count: 6,
        sections: [
          {
            id: "color-palette",
            name: "Color Palette",
            description: "Complete color system with all shades",
            items: [
              { id: "primary", name: "Primary Colors", description: "Brand colors (Indigo)", type: "token" },
              { id: "grays", name: "Gray Scale", description: "Neutral colors for text and backgrounds", type: "token" },
              { id: "semantic", name: "Semantic Colors", description: "Success, warning, error states", type: "token" },
              { id: "usage", name: "Color Usage", description: "Guidelines for color application", type: "token" }
            ]
          }
        ]
      },
      "typography": {
        id: "typography",
        name: "Typography",
        count: 4,
        sections: [
          {
            id: "type-scale",
            name: "Type Scale",
            description: "Font sizes and hierarchy",
            items: [
              { id: "headings", name: "Headings", description: "H1-H6 styles and usage", type: "token" },
              { id: "body", name: "Body Text", description: "Paragraph and inline text", type: "token" },
              { id: "weights", name: "Font Weights", description: "Weight variations", type: "token" },
              { id: "line-height", name: "Line Heights", description: "Text spacing", type: "token" }
            ]
          }
        ]
      },
      "spacing": {
        id: "spacing",
        name: "Spacing",
        count: 3,
        sections: [
          {
            id: "spacing-scale",
            name: "Spacing Scale",
            description: "Consistent spacing system",
            items: [
              { id: "scale", name: "Spacing Scale", description: "0-96 spacing values", type: "token" },
              { id: "padding", name: "Padding Patterns", description: "Component padding standards", type: "token" },
              { id: "gaps", name: "Gap Utilities", description: "Space between elements", type: "token" }
            ]
          }
        ]
      },
      "effects": {
        id: "effects",
        name: "Effects",
        count: 4,
        sections: [
          {
            id: "shadows",
            name: "Shadows & Borders",
            description: "Elevation and border styles",
            items: [
              { id: "shadows", name: "Shadow Scale", description: "Elevation system", type: "token" },
              { id: "borders", name: "Border Styles", description: "Border widths and colors", type: "token" },
              { id: "radius", name: "Border Radius", description: "Corner rounding scale", type: "token" },
              { id: "states", name: "Interactive States", description: "Hover, focus, active states", type: "token" }
            ]
          }
        ]
      }
    }
  },
  "components": {
    id: "components",
    name: "Components",
    description: "Reusable UI components",
    icon: "blocks",
    subcategories: {
      "buttons": {
        id: "buttons",
        name: "Buttons & Actions",
        count: 8,
        sections: [
          {
            id: "buttons",
            name: "Buttons",
            description: "Interactive button components",
            items: [
              { id: "button", name: "Button", description: "Primary button component" },
              { id: "toggle", name: "Toggle", description: "Toggle button" },
              { id: "toggle-group", name: "Toggle Group", description: "Grouped toggle buttons" }
            ]
          }
        ]
      },
      "forms": {
        id: "forms",
        name: "Form Elements",
        count: 13,
        sections: [
          {
            id: "inputs",
            name: "Inputs",
            description: "Form input components",
            items: [
              { id: "input", name: "Input", description: "Text input field" },
              { id: "textarea", name: "Textarea", description: "Multi-line text input" },
              { id: "select", name: "Select", description: "Dropdown select" },
              { id: "checkbox", name: "Checkbox", description: "Checkbox input" },
              { id: "radio-group", name: "Radio Group", description: "Radio button group" },
              { id: "switch", name: "Switch", description: "Toggle switch" },
              { id: "slider", name: "Slider", description: "Range slider" },
              { id: "input-otp", name: "Input OTP", description: "One-time password input" },
              { id: "date-picker", name: "Date Picker", description: "Calendar-based date selection" }
            ]
          }
        ]
      },
      "feedback": {
        id: "feedback",
        name: "Feedback",
        count: 8,
        sections: [
          {
            id: "alerts",
            name: "Alerts & Notifications",
            description: "User feedback components",
            items: [
              { id: "alert", name: "Alert", description: "Inline alert messages" },
              { id: "toast", name: "Toast (Sonner)", description: "Toast notifications" },
              { id: "progress", name: "Progress", description: "Progress indicators" },
              { id: "skeleton", name: "Skeleton", description: "Loading placeholders" }
            ]
          },
          {
            id: "dialogs",
            name: "Dialogs & Overlays",
            description: "Modal and overlay components",
            items: [
              { id: "dialog", name: "Dialog", description: "Modal dialog" },
              { id: "alert-dialog", name: "Alert Dialog", description: "Confirmation dialog" },
              { id: "sheet", name: "Sheet", description: "Slide-out panel" },
              { id: "drawer", name: "Drawer", description: "Navigation drawer" }
            ]
          }
        ]
      },
      "navigation": {
        id: "navigation",
        name: "Navigation",
        count: 9,
        sections: [
          {
            id: "menus",
            name: "Menus & Navigation",
            description: "Navigation components",
            items: [
              { id: "navigation-menu", name: "Navigation Menu", description: "Main navigation" },
              { id: "dropdown-menu", name: "Dropdown Menu", description: "Dropdown menus" },
              { id: "context-menu", name: "Context Menu", description: "Right-click menu" },
              { id: "menubar", name: "Menubar", description: "Application menubar" },
              { id: "command", name: "Command", description: "Command palette" }
            ]
          },
          {
            id: "navigation-aids",
            name: "Navigation Aids",
            description: "Supporting navigation elements",
            items: [
              { id: "breadcrumb", name: "Breadcrumb", description: "Navigation trail" },
              { id: "pagination", name: "Pagination", description: "Page navigation" },
              { id: "tabs", name: "Tabs", description: "Tabbed interface" },
              { id: "sidebar", name: "Sidebar", description: "Side navigation" }
            ]
          }
        ]
      },
      "data-display": {
        id: "data-display",
        name: "Data Display",
        count: 10,
        sections: [
          {
            id: "content",
            name: "Content Display",
            description: "Components for displaying content",
            items: [
              { id: "card", name: "Card", description: "Content container" },
              { id: "accordion", name: "Accordion", description: "Collapsible sections" },
              { id: "collapsible", name: "Collapsible", description: "Collapsible content" },
              { id: "table", name: "Table", description: "Data tables" }
            ]
          },
          {
            id: "media",
            name: "Media & Visuals",
            description: "Media display components",
            items: [
              { id: "avatar", name: "Avatar", description: "User avatars" },
              { id: "badge", name: "Badge", description: "Status badges" },
              { id: "chart", name: "Chart", description: "Data visualization" },
              { id: "carousel", name: "Carousel", description: "Image carousel" },
              { id: "aspect-ratio", name: "Aspect Ratio", description: "Aspect ratio container" }
            ]
          },
          {
            id: "overlays",
            name: "Overlays & Tooltips",
            description: "Floating UI elements",
            items: [
              { id: "popover", name: "Popover", description: "Floating panel" },
              { id: "hover-card", name: "Hover Card", description: "Hover information" },
              { id: "tooltip", name: "Tooltip", description: "Helper tooltips" }
            ]
          }
        ]
      },
      "layout": {
        id: "layout",
        name: "Layout",
        count: 4,
        sections: [
          {
            id: "structure",
            name: "Layout Structure",
            description: "Layout and spacing components",
            items: [
              { id: "separator", name: "Separator", description: "Visual divider" },
              { id: "resizable", name: "Resizable", description: "Resizable panels" },
              { id: "scroll-area", name: "Scroll Area", description: "Custom scrollbars" },
              { id: "calendar", name: "Calendar", description: "Date picker calendar" }
            ]
          }
        ]
      }
    }
  },
  "patterns": {
    id: "patterns",
    name: "Patterns",
    description: "Common UI patterns and compositions",
    icon: "template",
    subcategories: {
      "form-patterns": {
        id: "form-patterns",
        name: "Form Patterns",
        count: 5,
        sections: [
          {
            id: "layouts",
            name: "Form Layouts",
            description: "Common form compositions",
            items: [
              { id: "stacked", name: "Stacked Form", description: "Vertical form layout" },
              { id: "horizontal", name: "Horizontal Form", description: "Labels beside inputs" },
              { id: "multi-column", name: "Multi-Column", description: "Complex form layouts" },
              { id: "stepped", name: "Stepped Form", description: "Multi-step forms" },
              { id: "inline", name: "Inline Editing", description: "In-place editing patterns" }
            ]
          }
        ]
      }
    }
  }
}

export function getCategory(categoryId: string): Category | undefined {
  return componentRegistry[categoryId]
}

export function getSubcategory(categoryId: string, subcategoryId: string): Subcategory | undefined {
  const category = getCategory(categoryId)
  return category?.subcategories[subcategoryId]
}

export function getSection(categoryId: string, subcategoryId: string, sectionId: string): ComponentSection | undefined {
  const subcategory = getSubcategory(categoryId, subcategoryId)
  return subcategory?.sections.find(s => s.id === sectionId)
}

export function searchComponents(query: string): ComponentItem[] {
  const results: ComponentItem[] = []
  const searchTerm = query.toLowerCase()

  Object.values(componentRegistry).forEach(category => {
    Object.values(category.subcategories).forEach(subcategory => {
      subcategory.sections.forEach(section => {
        section.items.forEach(item => {
          if (
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
          ) {
            results.push(item)
          }
        })
      })
    })
  })

  return results
}