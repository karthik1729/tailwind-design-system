# Design System Project Guidelines

## Visual Hierarchy Principles

This project follows a modern approach to visual hierarchy that minimizes the use of borders. Instead, we create structure through:

1. **Spacing** - Generous padding and margins to create visual separation
2. **Backgrounds** - Subtle background colors to define content areas
3. **Typography** - Clear font weight and color hierarchy
4. **Shadows** - Minimal use of shadows for depth

## Key Design Rules

### ❌ Avoid
- Heavy borders between sections
- Border-based layouts
- Excessive dividing lines
- Dark borders for containers

### ✅ Prefer
- White space for separation (space-y-8, space-y-12)
- Background colors for grouping (bg-white on bg-gray-50)
- Typography contrast (font-semibold, text-gray-500)
- Subtle shadows when needed (shadow-sm)

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