# Tailwind Design System Guidelines

## Core Principles

1. **Use tokens, not values** - `bg-background` not `bg-white`
2. **Space over borders** - Visual hierarchy through spacing and backgrounds
3. **Consistent feedback** - All interactions feel cohesive
4. **Accessible by default** - WCAG 2.1 AA minimum

## Color System

### Semantic Color Tokens

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|--------|
| `background` | white | gray-900 (#0f172a) | Page backgrounds |
| `foreground` | gray-900 | gray-50 | Primary text |
| `card` | white | gray-800 (#1e293b) | Card backgrounds |
| `muted` | gray-50 | gray-700 | Muted backgrounds |
| `muted-foreground` | gray-500 | gray-300 | Secondary text |
| `primary` | blue-500 | blue-400 | Primary actions |
| `destructive` | red-600 | red-500 | Destructive actions |
| `success` | green-600 | green-500 | Success states |
| `warning` | orange-500 | orange-500 | Warning states |
| `info` | blue-600 | blue-500 | Informational |

### Key Rules
- Always use tokens: `text-muted-foreground` not `text-gray-500`
- Dark mode uses vibrant colors (500 level) for visibility
- Light backgrounds → dark text, dark backgrounds → light text

## Layout

### Page Container
```jsx
<div className="container mx-auto px-4 py-12 max-w-7xl">
```

### Spacing Scale
- Small gaps: `space-y-2` or `space-y-4`
- Section breaks: `space-y-8` or `space-y-12`
- Visual hierarchy: spacing > backgrounds > typography > shadows

## Components

### Buttons
- **9 variants**: default, secondary, destructive, outline, ghost, link, success, warning, info
- **Interactions**: `shadow-sm` → `hover:shadow-md` → `active:shadow-none`
- **Active scale**: 0.99 (subtle), 75ms duration
- **All states**: color + shadow changes for clear feedback

### Common Patterns
```jsx
// Card
<div className="bg-card p-6 space-y-4 shadow-sm rounded-lg">

// Page layout
<div className="container mx-auto px-4 py-12 max-w-7xl">

// Overlay
<div className="bg-background/80 backdrop-blur-sm">
```

## States & Interactions

| State | Duration | Effect |
|-------|----------|--------|
| Hover | 200ms | Color shift, shadow-md, transforms |
| Active | 75ms | Scale 0.99, shadow-none, darker color |
| Focus | - | Ring with offset, `:focus-visible` only |
| Disabled | - | 50% opacity, cursor-not-allowed |

## Dark Mode

- **Backgrounds**: Base (gray-900) → Cards (gray-800) → Muted (gray-700)
- **Colors**: Use 400-500 level for vibrancy against dark backgrounds
- **Overlays**: `bg-background/80 backdrop-blur-sm`

## Quick Reference

✅ **Do**
- Use design tokens
- Test both themes
- Space over borders
- Clear feedback

❌ **Don't**
- Hardcode values
- Skip accessibility
- Use excessive animation
- Create one-offs