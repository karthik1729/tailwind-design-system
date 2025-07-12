import { Button } from "@/components/ui/button"
import { ComponentExample } from "@/lib/component-docs"
import { Mail, Loader2, ChevronRight, Plus, Download, Check, X, AlertCircle } from "lucide-react"

export const buttonExamples: ComponentExample[] = [
  {
    title: "Basic Variants",
    description: "Button comes with 6 basic variants for common use cases.",
    code: `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    )
  },
  {
    title: "Sizes",
    description: "Button comes in 4 text sizes and 3 icon sizes.",
    code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`,
    component: () => (
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    )
  },
  {
    title: "Icon Buttons",
    description: "Icon buttons come in 3 sizes with hover rotation effects.",
    code: `<Button size="icon-sm"><Mail className="h-4 w-4" /></Button>
<Button size="icon"><Mail className="h-4 w-4" /></Button>
<Button size="icon-lg"><Mail className="h-5 w-5" /></Button>`,
    component: () => (
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon-sm"><Mail className="h-4 w-4" /></Button>
        <Button size="icon"><Mail className="h-4 w-4" /></Button>
        <Button size="icon-lg"><Mail className="h-5 w-5" /></Button>
      </div>
    )
  },
  {
    title: "With Icons",
    description: "Add icons before or after text to enhance button meaning.",
    code: `<Button>
  <Mail className="mr-2 h-4 w-4" /> Email me
</Button>
<Button variant="secondary">
  Next <ChevronRight className="ml-2 h-4 w-4" />
</Button>
<Button variant="success">
  <Check className="mr-2 h-4 w-4" /> Approved
</Button>
<Button variant="outline" size="sm">
  <Download className="mr-2 h-4 w-4" /> Download
</Button>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Email me
        </Button>
        <Button variant="secondary">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="success">
          <Check className="mr-2 h-4 w-4" /> Approved
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
      </div>
    )
  },
  {
    title: "Loading State",
    description: "Show a loading state by adding a spinner icon and disabling the button.",
    code: `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`,
    component: () => (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    )
  },
  {
    title: "Disabled State",
    description: "Buttons can be disabled to prevent user interaction.",
    code: `<Button disabled>Disabled Default</Button>
<Button variant="secondary" disabled>Disabled Secondary</Button>
<Button variant="outline" disabled>Disabled Outline</Button>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <Button disabled>Disabled Default</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
    )
  },
  {
    title: "Semantic Color Variants",
    description: "Additional color variants for different semantic meanings with proper hover states.",
    code: `<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="destructive">Destructive</Button>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    )
  },
  {
    title: "All Variants Hover Test",
    description: "Hover over each button to see the color progression and micro-interactions.",
    code: `<div className="grid grid-cols-3 gap-4">
  <Button variant="default">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="info">Info</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`,
    component: () => (
      <div className="grid grid-cols-3 gap-4">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    )
  },
  {
    title: "Icon Button Variants",
    description: "Icon buttons work with all color variants.",
    code: `<Button size="icon" variant="default"><Plus className="h-4 w-4" /></Button>
<Button size="icon" variant="secondary"><Mail className="h-4 w-4" /></Button>
<Button size="icon" variant="success"><Check className="h-4 w-4" /></Button>
<Button size="icon" variant="warning"><AlertCircle className="h-4 w-4" /></Button>
<Button size="icon" variant="destructive"><X className="h-4 w-4" /></Button>
<Button size="icon" variant="outline"><Download className="h-4 w-4" /></Button>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <Button size="icon" variant="default"><Plus className="h-4 w-4" /></Button>
        <Button size="icon" variant="secondary"><Mail className="h-4 w-4" /></Button>
        <Button size="icon" variant="success"><Check className="h-4 w-4" /></Button>
        <Button size="icon" variant="warning"><AlertCircle className="h-4 w-4" /></Button>
        <Button size="icon" variant="destructive"><X className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><Download className="h-4 w-4" /></Button>
      </div>
    )
  },
  {
    title: "As Child",
    description: "The asChild prop allows you to change the rendered element. Useful for links styled as buttons.",
    code: `<Button asChild>
  <a href="/login">Login</a>
</Button>
<Button variant="outline" asChild>
  <a href="/docs">Documentation</a>
</Button>
<Button variant="ghost" size="sm" asChild>
  <a href="/support">Get Support</a>
</Button>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <a href="#login">Login</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#docs">Documentation</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#support">Get Support</a>
        </Button>
      </div>
    )
  }
]