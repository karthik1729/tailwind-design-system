"use client"

import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Link, List, ListOrdered } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { ComponentExample } from "@/lib/component-docs"

export const toggleExamples: ComponentExample[] = [
  {
    title: "Basic Toggle",
    description: "A simple toggle button that can be pressed and unpressed.",
    code: `<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`,
    component: () => (
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    )
  },
  {
    title: "Toggle with Text",
    description: "Toggle button with text label.",
    code: `<Toggle aria-label="Toggle bold">
  <Bold className="mr-2 h-4 w-4" />
  Bold
</Toggle>`,
    component: () => (
      <Toggle aria-label="Toggle bold">
        <Bold className="mr-2 h-4 w-4" />
        Bold
      </Toggle>
    )
  },
  {
    title: "Toggle Sizes",
    description: "Different sizes of toggle buttons.",
    code: `<div className="flex items-center gap-2">
  <Toggle size="sm" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="default" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="lg" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
</div>`,
    component: () => (
      <div className="flex items-center gap-2">
        <Toggle size="sm" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle size="default" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle size="lg" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
    )
  },
  {
    title: "Toggle Variants",
    description: "Different visual variants of toggle buttons.",
    code: `<div className="flex items-center gap-2">
  <Toggle variant="default" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle variant="outline" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
</div>`,
    component: () => (
      <div className="flex items-center gap-2">
        <Toggle variant="default" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
    )
  },
  {
    title: "Disabled Toggle",
    description: "Toggle button in disabled state.",
    code: `<div className="flex items-center gap-2">
  <Toggle disabled aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </Toggle>
  <Toggle disabled pressed aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`,
    component: () => (
      <div className="flex items-center gap-2">
        <Toggle disabled aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
        <Toggle disabled pressed aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    )
  },
  {
    title: "Text Formatting Toolbar",
    description: "Multiple toggles used as a formatting toolbar.",
    code: `<div className="flex items-center gap-1 rounded-md border p-1">
  <Toggle size="sm" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </Toggle>
  <div className="mx-1 h-4 w-px bg-gray-300" />
  <Toggle size="sm" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </Toggle>
</div>`,
    component: () => (
      <div className="flex items-center gap-1 rounded-md border p-1">
        <Toggle size="sm" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle size="sm" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle size="sm" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
        <div className="mx-1 h-4 w-px bg-gray-300" />
        <Toggle size="sm" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle size="sm" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle size="sm" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </Toggle>
      </div>
    )
  },
  {
    title: "Toggle with Custom Styling",
    description: "Toggle buttons with custom styles applied.",
    code: `<div className="flex items-center gap-2">
  <Toggle 
    className="data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
    aria-label="Toggle link"
  >
    <Link className="h-4 w-4" />
  </Toggle>
  <Toggle 
    className="data-[state=on]:bg-success data-[state=on]:text-success-foreground"
    aria-label="Toggle list"
  >
    <List className="h-4 w-4" />
  </Toggle>
  <Toggle 
    className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
    aria-label="Toggle ordered list"
  >
    <ListOrdered className="h-4 w-4" />
  </Toggle>
</div>`,
    component: () => (
      <div className="flex items-center gap-2">
        <Toggle 
          className="data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
          aria-label="Toggle link"
        >
          <Link className="h-4 w-4" />
        </Toggle>
        <Toggle 
          className="data-[state=on]:bg-success data-[state=on]:text-success-foreground"
          aria-label="Toggle list"
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle 
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          aria-label="Toggle ordered list"
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
      </div>
    )
  }
]