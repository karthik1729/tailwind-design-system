# Tailwind Design System Guidelines

## Core Principles

1. **Use tokens, not values** - `bg-background` not `bg-white`
2. **Borderless design** - Space and color for hierarchy, not borders
3. **Consistent micro-interactions** - Scale, rotate, and transition effects
4. **Accessible by default** - WCAG 2.1 AA minimum
5. **Performance-first** - Remove heavy effects like backdrop blur

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
- Hover states use defined tokens: `primary-subtle-hover`, `destructive-subtle-hover`

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

### Buttons & Triggers
- **9 button variants**: default, secondary, destructive, outline, ghost, link, success, warning, info
- **No shadows**: Clean, borderless design
- **Scale effects**: 
  - Buttons: `active:scale-[0.99]`
  - Triggers: `data-[state=open]:scale-[0.98]`, `active:scale-[0.97]`
- **Hover colors**:
  - Triggers: `hover:bg-primary hover:text-primary-foreground`
  - Menu items: `hover:bg-primary-subtle-hover`
- **Transitions**: 200ms for triggers, 150ms for menu items

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

### Interactive Elements
| Element | Hover | Active | Open | Transition |
|---------|-------|--------|------|------------|
| Button | Color shift | scale-[0.99] | - | 200ms |
| Trigger | bg-primary | scale-[0.97] | scale-[0.98] + primary | 200ms |
| Menu Item | bg-primary-subtle-hover | - | - | 150ms |
| Icon | scale-105 | - | - | 150ms |
| Chevron | - | - | rotate-180 or rotate-90 | 200ms |

### Animation Patterns
- **Easing**: Always use `ease-out` for consistency
- **Open/close**: 200ms open, 150ms close
- **Ripple effect**: Context menu right-click
- **Fade + zoom**: Checkbox/radio indicators

## Dark Mode

- **Backgrounds**: Base (gray-900) → Cards (gray-800) → Muted (gray-700)
- **Colors**: Use 400-500 level for vibrancy against dark backgrounds
- **Overlays**: `bg-background/80 backdrop-blur-sm`

## Quick Reference

✅ **Do**
- Use semantic color tokens
- Apply consistent micro-interactions
- Test in both light/dark themes
- Use borderless design patterns
- Follow established hover states

❌ **Don't**
- Hardcode hex values
- Add button shadows
- Use backdrop blur (performance)
- Create inconsistent animations
- Skip keyboard navigation

## Enhancement Progress
- **Buttons & Actions**: 8/8 ✅
- **Form Elements**: 8/13
- **Feedback**: 5/8
- **Navigation**: 5/9
- **Data Display**: 1/10
- **Total**: 30/59 (50.8%)

For detailed standards, see `design-system-app/DESIGN_STANDARDS.md`