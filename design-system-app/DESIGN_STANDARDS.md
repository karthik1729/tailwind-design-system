# Design System Standards & Best Practices

This document outlines the comprehensive design standards and best practices for the Tailwind Design System project.

## Core Principles

1. **Token-Based Design**: Everything references design tokens, no hardcoded values
2. **Accessibility First**: All components meet WCAG 2.1 AA standards
3. **Consistent Interactions**: Predictable micro-interactions across all components
4. **Theme Coherence**: Seamless light/dark mode transitions
5. **Performance**: Minimal bundle size, optimized animations

## 1. Color System Standards

### Token Usage
- **NEVER hardcode hex values** - Always use CSS variables or tokens
- Reference tokens like `var(--color-primary-400)` or semantic tokens like `var(--destructive)`
- All colors must work in both light and dark themes

### Semantic Color Mapping
```css
/* Example of proper token usage */
.alert-destructive {
  color: var(--destructive); /* NOT #ef4444 */
  background: var(--destructive-background);
  border-color: var(--destructive-border);
}
```

### Color Palette Structure
- **Primary**: Blue shades (50-950) - Main brand color
- **Accent**: Indigo shades - Secondary brand color
- **Semantic Colors**:
  - Destructive: Red tones for errors/deletions
  - Success: Green tones for confirmations
  - Warning: Orange tones (NOT yellow) for alerts
  - Info: Blue tones for information
- **Supplementary**: Purple, Teal, Orange - Full palettes available

### Dark Mode Considerations
- Use lighter variants (300-400) for text/icons in dark mode
- Ensure sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Test all color combinations in both themes

## 2. Component Design Standards

### Button Component
- **9 Variants**: default, secondary, destructive, outline, ghost, link, success, warning, info
- **4 Text Sizes**: sm, default, lg, xl
- **3 Icon Sizes**: icon-sm, icon, icon-lg
- **Interaction States**:
  - Hover: Background color change + shadow
  - Active: Scale to 0.98 (NO additional color change)
  - Focus: Ring with offset
  - Disabled: 50% opacity

### Icon Button
- Default variant: `outline` (not ghost)
- Rounded corners: `rounded-lg`
- Hover effect: Icon rotation (12deg)
- Active effect: Scale reduction

### Toggle Component
- **Default**: Subtle background (`bg-muted/50`)
- **Ghost**: Transparent, shows `bg-primary/10` when active
- **Outline**: Border-based design
- Active state uses primary color

### Form Elements
- Consistent focus rings
- Clear error states
- Smooth transitions on all interactions
- Proper disabled states

## 3. Micro-Interactions

### Standard Transitions
```css
/* Default transition */
transition: all 200ms ease-in-out;

/* Exit transitions */
transition: all 150ms ease-in-out;

/* Scale effects */
active:scale-[0.98]
```

### Animation Patterns
- **Button Click**: Scale reduction (0.98)
- **Icon Hover**: Rotation (12deg) or scale (1.1)
- **Dropdown/Menu**: Scale + fade (zoom-in-90 to zoom-in-100)
- **Checkbox/Radio**: Fade + zoom for indicators
- **Context Menu**: Ripple effect on right-click
- **Chevrons**: 90deg rotation for expanded state

### Timing Guidelines
- Instant feedback: 100ms
- Quick transitions: 150-200ms
- Smooth animations: 300ms
- Never exceed 400ms for UI animations

## 4. Visual Hierarchy

### Borderless Design Philosophy
- **Spacing over borders**: Use white space to separate elements
- **Background layers**: Create depth with background colors
- **Typography hierarchy**: Use font weights and sizes
- **Minimal shadows**: Only when necessary for elevation

### Spacing Scale
```css
/* Consistent spacing based on 4px unit */
space-y-2 (8px)
space-y-4 (16px)
space-y-6 (24px)
space-y-8 (32px)
space-y-12 (48px)
```

### Background Hierarchy
1. Page background: `bg-background` or `bg-gray-50`
2. Primary containers: `bg-card` or `bg-white`
3. Secondary areas: `bg-muted` or `bg-gray-50`
4. Interactive hover: `bg-muted` or `bg-gray-100`

## 5. Typography Standards

### Font Hierarchy
```css
/* Headings */
text-3xl font-bold    /* Page titles */
text-2xl font-semibold /* Major sections */
text-xl font-semibold  /* Section headings */
text-lg font-medium    /* Subsections */
text-base font-medium  /* Labels */
text-sm               /* Body text */
text-xs               /* Supporting text */
```

### Text Colors
- Primary content: `text-foreground`
- Secondary content: `text-muted-foreground`
- Disabled/placeholder: `text-muted-foreground/50`
- Links: `text-primary hover:text-primary-hover`

## 6. State Management

### Interactive States Priority
1. Disabled (highest priority)
2. Active/Pressed
3. Hover
4. Focus
5. Default (lowest priority)

### Focus Management
- Always visible focus rings for keyboard navigation
- Use `focus-visible` for better UX
- Consistent ring colors across components
- Proper focus trap in modals/dialogs

## 7. Accessibility Standards

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum
- Test with color blindness simulators

### Keyboard Navigation
- All interactive elements keyboard accessible
- Logical tab order
- Escape key closes modals/dropdowns
- Arrow keys for menu navigation

### Screen Reader Support
- Proper ARIA labels
- Semantic HTML elements
- Role attributes where needed
- Live regions for dynamic content

## 8. Performance Guidelines

### CSS Optimization
- Use Tailwind's JIT compiler
- Avoid arbitrary values when possible
- Group related utilities
- Minimize custom CSS

### Animation Performance
- Use `transform` and `opacity` for animations
- Avoid animating layout properties
- Use `will-change` sparingly
- Test on low-end devices

## 9. Code Standards

### Component Structure
```tsx
// Consistent prop interfaces
interface ComponentProps {
  className?: string
  variant?: VariantType
  size?: SizeType
  children?: React.ReactNode
}

// Use forwardRef for all components
const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    // Implementation
  }
)
```

### Styling Approach
- Use `cva` for variant management
- Consistent use of `cn()` utility
- Logical grouping of utilities
- Clear variant definitions

## 10. Testing & Validation

### Component Testing Checklist
- [ ] All variants render correctly
- [ ] Hover/focus/active states work
- [ ] Dark mode appearance
- [ ] Keyboard navigation
- [ ] Screen reader announcement
- [ ] Mobile touch interactions
- [ ] Animation performance
- [ ] Color contrast ratios

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Implementation Examples

### ❌ Incorrect (Hardcoded)
```tsx
<button className="bg-#3b82f6 hover:bg-#2563eb">
  Click me
</button>
```

### ✅ Correct (Token-based)
```tsx
<Button variant="default" className="hover:bg-primary-hover">
  Click me
</Button>
```

### ❌ Incorrect (Border-heavy)
```tsx
<div className="border border-gray-300 divide-y">
  <div className="border-b p-4">Item 1</div>
  <div className="border-b p-4">Item 2</div>
</div>
```

### ✅ Correct (Spacing-based)
```tsx
<div className="space-y-4">
  <div className="p-4 bg-white rounded">Item 1</div>
  <div className="p-4 bg-white rounded">Item 2</div>
</div>
```

## Conclusion

These standards ensure a consistent, accessible, and maintainable design system. Always prioritize:
1. Design tokens over hardcoded values
2. Accessibility over aesthetics
3. Performance over complexity
4. Consistency over creativity

When in doubt, refer to existing patterns or consult the design system documentation.