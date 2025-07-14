"use client"

import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Link, List, ListOrdered, Type, Palette, Settings } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ComponentExample } from "@/lib/component-docs"

export const toggleGroupExamples: ComponentExample[] = [
  {
    title: "Basic Toggle Group",
    description: "A group of toggle buttons with single selection.",
    code: `<ToggleGroup type="single">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
    component: () => (
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  },
  {
    title: "Multiple Selection",
    description: "Toggle group that allows multiple selections.",
    code: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
    component: () => (
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  },
  {
    title: "Text Alignment Group",
    description: "Toggle group for text alignment with default value.",
    code: `<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="justify" aria-label="Align justify">
    <AlignJustify className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
    component: () => (
      <ToggleGroup type="single" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Align justify">
          <AlignJustify className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  },
  {
    title: "Toggle Group Sizes",
    description: "Different sizes of toggle groups.",
    code: `<div className="space-y-4">
  <ToggleGroup type="single" size="sm">
    <ToggleGroupItem value="1" aria-label="Option 1">1</ToggleGroupItem>
    <ToggleGroupItem value="2" aria-label="Option 2">2</ToggleGroupItem>
    <ToggleGroupItem value="3" aria-label="Option 3">3</ToggleGroupItem>
  </ToggleGroup>
  
  <ToggleGroup type="single" size="default">
    <ToggleGroupItem value="1" aria-label="Option 1">1</ToggleGroupItem>
    <ToggleGroupItem value="2" aria-label="Option 2">2</ToggleGroupItem>
    <ToggleGroupItem value="3" aria-label="Option 3">3</ToggleGroupItem>
  </ToggleGroup>
  
  <ToggleGroup type="single" size="lg">
    <ToggleGroupItem value="1" aria-label="Option 1">1</ToggleGroupItem>
    <ToggleGroupItem value="2" aria-label="Option 2">2</ToggleGroupItem>
    <ToggleGroupItem value="3" aria-label="Option 3">3</ToggleGroupItem>
  </ToggleGroup>
</div>`,
    component: () => (
      <div className="space-y-4">
        <ToggleGroup type="single" size="sm">
          <ToggleGroupItem value="1" aria-label="Option 1">1</ToggleGroupItem>
          <ToggleGroupItem value="2" aria-label="Option 2">2</ToggleGroupItem>
          <ToggleGroupItem value="3" aria-label="Option 3">3</ToggleGroupItem>
        </ToggleGroup>
        
        <ToggleGroup type="single" size="default">
          <ToggleGroupItem value="1" aria-label="Option 1">1</ToggleGroupItem>
          <ToggleGroupItem value="2" aria-label="Option 2">2</ToggleGroupItem>
          <ToggleGroupItem value="3" aria-label="Option 3">3</ToggleGroupItem>
        </ToggleGroup>
        
        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem value="1" aria-label="Option 1">1</ToggleGroupItem>
          <ToggleGroupItem value="2" aria-label="Option 2">2</ToggleGroupItem>
          <ToggleGroupItem value="3" aria-label="Option 3">3</ToggleGroupItem>
        </ToggleGroup>
      </div>
    )
  },
  {
    title: "Toggle Group Variants",
    description: "Different visual variants of toggle groups.",
    code: `<div className="space-y-4">
  <ToggleGroup type="single" variant="default">
    <ToggleGroupItem value="1">Default</ToggleGroupItem>
    <ToggleGroupItem value="2">Style</ToggleGroupItem>
    <ToggleGroupItem value="3">Group</ToggleGroupItem>
  </ToggleGroup>
  
  <ToggleGroup type="single" variant="outline">
    <ToggleGroupItem value="1">Outline</ToggleGroupItem>
    <ToggleGroupItem value="2">Style</ToggleGroupItem>
    <ToggleGroupItem value="3">Group</ToggleGroupItem>
  </ToggleGroup>
</div>`,
    component: () => (
      <div className="space-y-4">
        <ToggleGroup type="single" variant="default">
          <ToggleGroupItem value="1">Default</ToggleGroupItem>
          <ToggleGroupItem value="2">Style</ToggleGroupItem>
          <ToggleGroupItem value="3">Group</ToggleGroupItem>
        </ToggleGroup>
        
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="1">Outline</ToggleGroupItem>
          <ToggleGroupItem value="2">Style</ToggleGroupItem>
          <ToggleGroupItem value="3">Group</ToggleGroupItem>
        </ToggleGroup>
      </div>
    )
  },
  {
    title: "Disabled Items",
    description: "Toggle group with disabled items.",
    code: `<ToggleGroup type="single">
  <ToggleGroupItem value="link" aria-label="Toggle link">
    <Link className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="list" disabled aria-label="Toggle list">
    <List className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="ordered" aria-label="Toggle ordered list">
    <ListOrdered className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
    component: () => (
      <ToggleGroup type="single">
        <ToggleGroupItem value="link" aria-label="Toggle link">
          <Link className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" disabled aria-label="Toggle list">
          <List className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="ordered" aria-label="Toggle ordered list">
          <ListOrdered className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  },
  {
    title: "Icon and Text Combined",
    description: "Toggle group items with both icons and text.",
    code: `<ToggleGroup type="single">
  <ToggleGroupItem value="text" aria-label="Text mode">
    <Type className="mr-2 h-4 w-4" />
    Text
  </ToggleGroupItem>
  <ToggleGroupItem value="color" aria-label="Color mode">
    <Palette className="mr-2 h-4 w-4" />
    Color
  </ToggleGroupItem>
  <ToggleGroupItem value="settings" aria-label="Settings mode">
    <Settings className="mr-2 h-4 w-4" />
    Settings
  </ToggleGroupItem>
</ToggleGroup>`,
    component: () => (
      <ToggleGroup type="single">
        <ToggleGroupItem value="text" aria-label="Text mode">
          <Type className="mr-2 h-4 w-4" />
          Text
        </ToggleGroupItem>
        <ToggleGroupItem value="color" aria-label="Color mode">
          <Palette className="mr-2 h-4 w-4" />
          Color
        </ToggleGroupItem>
        <ToggleGroupItem value="settings" aria-label="Settings mode">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </ToggleGroupItem>
      </ToggleGroup>
    )
  },
  {
    title: "Custom Styled Toggle Group",
    description: "Toggle group with custom styling.",
    code: `<ToggleGroup 
  type="single" 
  className="rounded-full border p-1"
>
  <ToggleGroupItem 
    value="day" 
    className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
  >
    Day
  </ToggleGroupItem>
  <ToggleGroupItem 
    value="week" 
    className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
  >
    Week
  </ToggleGroupItem>
  <ToggleGroupItem 
    value="month" 
    className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
  >
    Month
  </ToggleGroupItem>
  <ToggleGroupItem 
    value="year" 
    className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
  >
    Year
  </ToggleGroupItem>
</ToggleGroup>`,
    component: () => (
      <ToggleGroup 
        type="single" 
        className="rounded-full border p-1"
      >
        <ToggleGroupItem 
          value="day" 
          className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
        >
          Day
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="week" 
          className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
        >
          Week
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="month" 
          className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
        >
          Month
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="year" 
          className="rounded-full data-[state=on]:bg-purple data-[state=on]:text-purple-foreground"
        >
          Year
        </ToggleGroupItem>
      </ToggleGroup>
    )
  }
]