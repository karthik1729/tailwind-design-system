# Design System Guidelines

## Core Philosophy
A modern, borderless design system that creates visual hierarchy through spacing, typography, and subtle backgrounds.

## Design Tokens

### Colors
Always use semantic tokens that adapt to light/dark themes:
- **Backgrounds**: `bg-background`, `bg-card`, `bg-muted`
- **Text**: `text-foreground`, `text-muted-foreground`
- **Interactive**: `bg-primary`, `hover:bg-primary-hover`, `active:bg-primary-active`
- **Semantic**: `bg-success`, `bg-warning`, `bg-destructive`, `bg-info`

### Spacing
- **Sections**: `space-y-8` between major sections
- **Components**: `space-y-4` within components
- **Padding**: `p-4` (tight), `p-6` (default), `p-8` (spacious)
- **Container**: `container mx-auto px-4 py-12 max-w-7xl`

### Typography
- **Headings**: `text-4xl font-bold` → `text-2xl font-semibold` → `text-lg font-medium`
- **Body**: `text-base` with `text-muted-foreground` for secondary text
- **Small**: `text-sm` for labels and captions

## Component Patterns

### Buttons
```jsx
// No shadows, subtle interactions
<Button className="active:scale-[0.99] transition-all duration-200">
  Click me
</Button>
```

### Cards
```jsx
// Clean, borderless with subtle background
<Card className="bg-card p-6 space-y-4">
  <CardHeader className="font-semibold text-lg">Title</CardHeader>
  <CardContent className="text-muted-foreground">Content</CardContent>
</Card>
```

### Forms
```jsx
// Smooth focus transitions
<Input className="transition-all duration-200 focus:ring-2" />
```

## Interaction States

### Hover
- Background changes: `hover:bg-muted` or `hover:bg-primary`
- Text changes: `hover:text-primary-foreground`
- No shadow or border additions

### Focus
- Ring effect: `focus:ring-2 focus:ring-primary`
- Smooth transitions: `transition-all duration-200`

### Active
- Subtle scale: `active:scale-[0.99]`
- Quick response: `duration-75`

## Best Practices

1. **Borderless First**: Try spacing and backgrounds before adding borders
2. **Semantic Colors**: Use theme tokens, never hardcode hex values
3. **Smooth Transitions**: 200ms for hover, 75ms for active states
4. **Accessible Contrast**: Test in both light and dark modes
5. **Consistent Spacing**: Use the spacing scale consistently

## Common Mistakes to Avoid

❌ **Don't**
```jsx
<div className="border border-gray-300 shadow-lg hover:shadow-xl">
  <h3 className="border-b pb-2 text-gray-800">Title</h3>
</div>
```

✅ **Do**
```jsx
<div className="bg-card p-6 space-y-4">
  <h3 className="font-semibold text-lg text-foreground">Title</h3>
</div>
```

## Quick Reference

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `bg-background` (white) | `bg-background` (gray-900) |
| Card | `bg-card` (white) | `bg-card` (gray-800) |
| Muted | `bg-muted` (gray-100) | `bg-muted` (gray-800) |
| Primary | `bg-primary` (blue-500) | `bg-primary` (blue-500) |
| Text | `text-foreground` (gray-900) | `text-foreground` (gray-50) |

Remember: The goal is a clean, modern interface that feels spacious and organized without relying on borders or heavy shadows.