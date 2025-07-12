# Design System Project Guidelines

## Core Design Principles

1. **Token-Based Design**: NEVER hardcode colors or values - always use design tokens
2. **Borderless Hierarchy**: Create visual structure through spacing, not borders
3. **Consistent Interactions**: Predictable micro-interactions across all components
4. **Accessibility First**: All components meet WCAG 2.1 AA standards

## Design Standards

### Color Usage
- **Always use tokens**: `var(--color-primary-400)` or semantic tokens like `var(--destructive)`
- **Never hardcode**: No hex values like `#3b82f6` in components
- **Dark mode aware**: Use lighter variants (300-400) for visibility in dark mode
- **Semantic meanings**:
  - Destructive: Red tones
  - Success: Green tones
  - Warning: Orange tones (NOT yellow)
  - Info: Blue tones

### Component Patterns
- **Buttons**: 9 variants with consistent hover/active states
- **Active states**: Use scale effects (`active:scale-[0.98]`), not color changes
- **Icon buttons**: `rounded-lg` borders, outline variant by default
- **Micro-interactions**: 200ms transitions, smooth easing

### Visual Hierarchy Rules

#### ❌ Avoid
- Heavy borders between sections
- Border-based layouts
- Excessive dividing lines
- Dark borders for containers
- Hardcoded color values

#### ✅ Prefer
- White space for separation (space-y-8, space-y-12)
- Background colors for grouping (bg-white on bg-gray-50)
- Typography contrast (font-semibold, text-gray-500)
- Subtle shadows when needed (shadow-sm)
- Token-based colors and spacing

## Component Patterns

### Cards
```jsx
// Instead of borders, use background and spacing
<div className="bg-white p-6 space-y-4 shadow-sm rounded-lg">
  <h3 className="font-semibold text-lg">Title</h3>
  <p className="text-gray-500">Content</p>
</div>
```

### Sections
```jsx
// Use spacing instead of border dividers
<div className="space-y-12">
  <section className="space-y-4">
    <h2 className="text-xl font-semibold">Section Title</h2>
    <div className="bg-white p-6 rounded-lg">
      {/* Content */}
    </div>
  </section>
</div>
```

### Lists
```jsx
// Use spacing or subtle backgrounds instead of borders
<ul className="space-y-2">
  <li className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
    {/* Item content */}
  </li>
</ul>
```

## Implementation Notes

When updating existing components:
1. Remove border-based separators
2. Add appropriate spacing (usually space-y-4, 6, or 8)
3. Use background colors for visual grouping
4. Apply consistent typography hierarchy
5. Test the visual hierarchy without any borders first

See DESIGN_GUIDELINES.md for the complete design system documentation.