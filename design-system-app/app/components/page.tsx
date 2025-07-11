import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const componentCategories = [
  {
    title: "Layout",
    components: [
      { name: "Aspect Ratio", slug: "aspect-ratio", description: "Displays content within a desired ratio" },
      { name: "Resizable", slug: "resizable", description: "Resizable panel layouts" },
      { name: "Scroll Area", slug: "scroll-area", description: "Augments native scroll functionality" },
      { name: "Separator", slug: "separator", description: "Visually separates content" },
    ]
  },
  {
    title: "Navigation",
    components: [
      { name: "Breadcrumb", slug: "breadcrumb", description: "Shows the current page location" },
      { name: "Navigation Menu", slug: "navigation-menu", description: "Website navigation with dropdowns" },
      { name: "Pagination", slug: "pagination", description: "Navigate between pages" },
      { name: "Sidebar", slug: "sidebar", description: "Collapsible side navigation" },
      { name: "Tabs", slug: "tabs", description: "Tabbed interface for content" },
    ]
  },
  {
    title: "Forms",
    components: [
      { name: "Button", slug: "button", description: "Interactive button component" },
      { name: "Checkbox", slug: "checkbox", description: "Checkbox input element" },
      { name: "Form", slug: "form", description: "Complete form solution with validation" },
      { name: "Input", slug: "input", description: "Text input field" },
      { name: "Input OTP", slug: "input-otp", description: "One-time password input" },
      { name: "Label", slug: "label", description: "Accessible label for form elements" },
      { name: "Radio Group", slug: "radio-group", description: "Radio button group" },
      { name: "Select", slug: "select", description: "Select dropdown component" },
      { name: "Slider", slug: "slider", description: "Range slider input" },
      { name: "Switch", slug: "switch", description: "Toggle switch component" },
      { name: "Textarea", slug: "textarea", description: "Multi-line text input" },
      { name: "Toggle", slug: "toggle", description: "Toggle button component" },
      { name: "Toggle Group", slug: "toggle-group", description: "Group of toggle buttons" },
    ]
  },
  {
    title: "Data Display",
    components: [
      { name: "Avatar", slug: "avatar", description: "User avatar display" },
      { name: "Badge", slug: "badge", description: "Small status indicator" },
      { name: "Card", slug: "card", description: "Container for grouped content" },
      { name: "Chart", slug: "chart", description: "Data visualization charts" },
      { name: "Table", slug: "table", description: "Data table component" },
    ]
  },
  {
    title: "Feedback",
    components: [
      { name: "Alert", slug: "alert", description: "Display alert messages" },
      { name: "Alert Dialog", slug: "alert-dialog", description: "Modal alert dialog" },
      { name: "Dialog", slug: "dialog", description: "Modal dialog window" },
      { name: "Drawer", slug: "drawer", description: "Sliding panel overlay" },
      { name: "Progress", slug: "progress", description: "Progress indicator" },
      { name: "Skeleton", slug: "skeleton", description: "Loading placeholder" },
      { name: "Sonner", slug: "sonner", description: "Toast notifications" },
      { name: "Tooltip", slug: "tooltip", description: "Contextual information on hover" },
    ]
  },
  {
    title: "Overlays",
    components: [
      { name: "Accordion", slug: "accordion", description: "Collapsible content panels" },
      { name: "Collapsible", slug: "collapsible", description: "Collapsible content container" },
      { name: "Command", slug: "command", description: "Command menu interface" },
      { name: "Context Menu", slug: "context-menu", description: "Right-click context menu" },
      { name: "Dropdown Menu", slug: "dropdown-menu", description: "Dropdown menu component" },
      { name: "Hover Card", slug: "hover-card", description: "Card displayed on hover" },
      { name: "Menubar", slug: "menubar", description: "Application menu bar" },
      { name: "Popover", slug: "popover", description: "Floating content panel" },
      { name: "Sheet", slug: "sheet", description: "Side or bottom sheet overlay" },
    ]
  },
  {
    title: "Media",
    components: [
      { name: "Calendar", slug: "calendar", description: "Date picker calendar" },
      { name: "Carousel", slug: "carousel", description: "Image/content carousel" },
    ]
  }
]

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Components</h1>
        <p className="mt-2 text-lg text-gray-600">
          Beautifully designed components built with Radix UI and Tailwind CSS.
        </p>
      </div>

      <div className="space-y-12">
        {componentCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.components.map((component) => (
                <Link key={component.slug} href={`/components/${component.slug}`}>
                  <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-base">{component.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {component.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}