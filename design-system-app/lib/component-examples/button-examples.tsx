import { Button } from "@/components/ui/button"
import { ComponentExample } from "@/lib/component-docs"
import { Mail, Loader2 } from "lucide-react"

export const buttonExamples: ComponentExample[] = [
  {
    title: "Variants",
    description: "Button comes with 6 different variants to fit different use cases.",
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
    description: "Button comes in 4 sizes. The default size is 'default'.",
    code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Mail className="h-4 w-4" /></Button>`,
    component: () => (
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon"><Mail className="h-4 w-4" /></Button>
      </div>
    )
  },
  {
    title: "With Icons",
    description: "You can add icons to buttons to enhance their meaning.",
    code: `<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>
<Button variant="secondary">
  <Mail className="mr-2 h-4 w-4" /> Email
</Button>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="secondary">
          <Mail className="mr-2 h-4 w-4" /> Email
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
    title: "As Child",
    description: "The asChild prop allows you to change the rendered element. Useful for links styled as buttons.",
    code: `<Button asChild>
  <a href="/login">Login</a>
</Button>`,
    component: () => (
      <Button asChild>
        <a href="#as-child-example">Login</a>
      </Button>
    )
  }
]