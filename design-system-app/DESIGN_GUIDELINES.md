# Design Guidelines - Visual Hierarchy Without Borders

## Core Principles

Our design system prioritizes creating visual hierarchy through spacing, typography, and subtle background treatments rather than relying on borders. This creates a cleaner, more modern interface that feels spacious and uncluttered.

## 1. Spacing and White Space

### Primary Spacing Scale
- **Between sections**: `space-y-8` or `space-y-12` 
- **Between related items**: `space-y-4` or `space-y-6`
- **Within components**: `p-4`, `p-6`, or `p-8`
- **Grid gaps**: `gap-4`, `gap-6`, or `gap-8`

### Guidelines
- Use generous padding inside containers
- Create rhythm with consistent vertical spacing
- Let white space define boundaries between sections

## 2. Background Hierarchy

### Background Palette
- **Page background**: `bg-gray-50` or `bg-background`
- **Primary containers**: `bg-white` or `bg-card`
- **Secondary areas**: `bg-gray-50` or `bg-muted`
- **Interactive hover**: `hover:bg-gray-50`
- **Striped patterns**: Alternate `even:bg-gray-50` for lists

### Usage
- Use background colors to create visual layers
- White cards on gray backgrounds create natural separation
- Subtle background changes indicate different content areas

## 3. Typography Hierarchy

### Font Weights
- **Page titles**: `font-bold text-3xl`
- **Section headings**: `font-semibold text-xl`
- **Subsection headings**: `font-semibold text-base`
- **Labels**: `font-medium text-sm`
- **Body text**: `font-normal text-base`

### Text Colors
- **Primary content**: `text-gray-900` or `text-foreground`
- **Secondary content**: `text-gray-700` 
- **Supporting text**: `text-gray-500` or `text-muted-foreground`
- **Disabled/placeholder**: `text-gray-400`

## 4. Minimal Border Usage

### When to Use Borders
- **Only when necessary** for clear delineation
- **Dividers between list items**: `divide-y divide-gray-100`
- **Form field borders**: Use the default input styling
- **Focus rings**: For accessibility

### Border Alternatives
- Use spacing instead of horizontal rules
- Use background colors for visual separation
- Use shadows for elevation

## 5. Depth and Elevation

### Shadow Scale
- **Cards**: `shadow-sm` or no shadow with `ring-1 ring-gray-900/5`
- **Dropdowns/Modals**: `shadow-lg`
- **Buttons**: `shadow-xs` or no shadow

### Creating Depth
- Layer white containers on gray backgrounds
- Use subtle shadows sparingly
- Focus on z-axis through background colors

## 6. Component Patterns

### Cards
```jsx
<div className="bg-white p-6 space-y-4">
  <h3 className="font-semibold text-base">Card Title</h3>
  <p className="text-sm text-gray-500">Card content</p>
</div>
```

### Sections
```jsx
<section className="space-y-8">
  <div>
    <h2 className="text-xl font-semibold text-gray-900">Section Title</h2>
    <p className="mt-2 text-sm text-gray-500">Section description</p>
  </div>
  <div className="bg-white p-6">
    {/* Section content */}
  </div>
</section>
```

### Lists Without Borders
```jsx
<ul className="space-y-4">
  <li className="p-4 hover:bg-gray-50 rounded-lg">
    {/* List item content */}
  </li>
</ul>
```

## 7. Interactive States

### Hover Effects
- Background color changes: `hover:bg-gray-50`
- Subtle transitions: `transition-colors`
- No border additions on hover

### Focus States
- Use ring utilities: `focus:ring-2 focus:ring-offset-2`
- Maintain accessibility while keeping design clean

## 8. Color Usage

### Accent Colors
- **Primary actions**: Use brand color (e.g., `bg-primary`)
- **Links**: `text-primary hover:text-primary/80`
- **Success/Error**: Use sparingly for status

### Neutral Palette
- Rely heavily on grays for UI elements
- Use color purposefully for actions and status

## 9. Layout Strategies

### Grid Layouts
- Use CSS Grid with gaps for natural separation
- No borders needed between grid items

### Asymmetric Layouts
- Create visual interest through layout variation
- Use 1/3 + 2/3 or similar proportions

## 10. Implementation Checklist

When designing a new component or page:
1. ❌ Remove unnecessary borders
2. ✅ Add appropriate spacing between elements
3. ✅ Use background colors for visual grouping
4. ✅ Apply proper typography hierarchy
5. ✅ Consider if shadows would help
6. ✅ Ensure sufficient white space
7. ✅ Test without any borders first

## Examples to Avoid

### ❌ Border-Heavy Design
```jsx
<div className="border border-gray-300 p-4">
  <h3 className="border-b border-gray-200 pb-2">Title</h3>
  <div className="border-t border-gray-200 pt-2 mt-2">
    Content
  </div>
</div>
```

### ✅ Modern Hierarchy
```jsx
<div className="bg-white p-6 space-y-4">
  <h3 className="font-semibold text-lg">Title</h3>
  <div className="space-y-2">
    Content
  </div>
</div>
```

## Conclusion

By following these guidelines, we create a modern, clean design system that feels spacious and organized without relying on borders. The key is using spacing, typography, and subtle backgrounds to create clear visual hierarchy.