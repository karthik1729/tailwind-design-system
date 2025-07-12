# Design System Quick Reference

## Core Rules
1. **Use semantic tokens** - `bg-primary` not `bg-blue-500`
2. **No shadows on buttons** - Clean, borderless design
3. **Smooth transitions** - 200ms for hover, 75ms for active
4. **Test both themes** - Everything must work in light/dark

## Essential Classes

### Layout
```jsx
// Page container
<div className="container mx-auto px-4 py-12 max-w-7xl">

// Section spacing
<section className="space-y-8">

// Component spacing
<div className="space-y-4">
```

### Colors
```jsx
// Backgrounds
bg-background    // Main page background
bg-card         // Card/elevated content
bg-muted        // Subtle backgrounds
bg-primary      // Primary actions (blue)

// Text
text-foreground       // Primary text
text-muted-foreground // Secondary text
text-primary-foreground // White text on primary bg
```

### Interactive States
```jsx
// Button pattern
<Button className="
  hover:bg-primary-hover 
  active:bg-primary-active 
  active:scale-[0.99]
  transition-all duration-200
">

// Input pattern  
<Input className="
  focus:ring-2 
  focus:ring-primary
  transition-all duration-200
">
```

### Typography Scale
```jsx
text-4xl font-bold      // Page titles
text-2xl font-semibold  // Section headers
text-lg font-medium     // Subsections
text-base              // Body text
text-sm                // Small text/labels
```

## Component Examples

### Card
```jsx
<Card className="bg-card p-6 space-y-4">
  <h3 className="text-lg font-semibold text-foreground">Title</h3>
  <p className="text-muted-foreground">Description</p>
</Card>
```

### Form Field
```jsx
<div className="space-y-2">
  <Label>Email</Label>
  <Input 
    type="email" 
    placeholder="Enter email"
    className="transition-all duration-200"
  />
</div>
```

### Alert
```jsx
<Alert variant="info" className="space-y-2">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>Message here</AlertDescription>
</Alert>
```

## Don'ts
- ❌ No hardcoded colors: `text-gray-500`
- ❌ No button shadows: `shadow-lg`
- ❌ No heavy borders: `border-2`
- ❌ No instant transitions: `duration-0`

## Do's
- ✅ Semantic tokens: `text-muted-foreground`
- ✅ Clean buttons: No shadows
- ✅ Subtle borders: `border` only when needed
- ✅ Smooth animations: `duration-200`

---
For detailed guidelines, see DESIGN_GUIDELINES.md