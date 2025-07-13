# Tailwind Design System Guide

## File Organization

### Storyboard Structure
**Keep storyboard pages clean and modular:**

```
app/storyboard/components/forms/
├── page.tsx                 // Main page - imports only
├── input-example.tsx        // Input component examples
├── textarea-example.tsx     // Textarea component examples
├── select-example.tsx       // Select component examples
└── ...                      // One file per component type
```

**Main page pattern:**
```tsx
// page.tsx - Keep it simple
import { InputExample } from "./input-example"
import { TextareaExample } from "./textarea-example"

export default function FormsPage() {
  return (
    <div className="space-y-12">
      <h1>Form Elements</h1>
      <InputExample />
      <TextareaExample />
    </div>
  )
}
```

**Component example pattern:**
```tsx
// input-example.tsx - Complete, isolated component
"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function InputExample() {
  const [value, setValue] = useState("")
  
  return (
    <PreviewContainer
      title="Input"
      description="Input field variations"
      component={<Input value={value} onChange={setValue} />}
      code={`// Code example here`}
    />
  )
}
```

## Design Rules

### 1. Colors - Use Semantic Tokens
```tsx
bg-primary              // Primary actions (blue)
bg-background           // Main page background  
bg-card                 // Card/elevated content
text-foreground         // Primary text
text-muted-foreground   // Secondary text
```

### 2. Interactions - Smooth & Consistent
```tsx
// Button states
hover:bg-primary-hover 
active:scale-[0.99]
transition-all duration-200

// Input focus
focus:ring-2 focus:ring-primary
transition-all duration-200
```

### 3. Typography - Clear Hierarchy
```tsx
text-4xl font-bold      // Page titles
text-2xl font-semibold  // Section headers  
text-lg font-medium     // Subsections
text-base               // Body text
text-sm                 // Labels/small text
```

### 4. Spacing - Consistent Scale
```tsx
space-y-12              // Between major sections
space-y-6               // Between components
space-y-4               // Between form fields
space-y-2               // Label to input
```

## Component Patterns

### Form Field
```tsx
<div className="space-y-2">
  <Label>Email</Label>
  <Input 
    type="email" 
    placeholder="Enter email"
    className="transition-all duration-200"
  />
</div>
```

### Card Layout
```tsx
<Card className="bg-card p-6 space-y-4">
  <h3 className="text-lg font-semibold">Title</h3>
  <p className="text-muted-foreground">Description</p>
</Card>
```

## Quick Rules

### ✅ Do
- Use semantic color tokens
- Clean button design (no shadows)
- Smooth animations (200ms)
- Modular file organization
- One component example per file

### ❌ Don't  
- Hardcode colors (`text-gray-500`)
- Add button shadows (`shadow-lg`)
- Create massive page files
- Mix multiple components in one example file
- Skip transitions (`duration-0`)

---

Keep it simple. Keep it modular. Keep it semantic.