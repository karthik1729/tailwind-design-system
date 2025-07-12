# Design System Quick Reference

## Key Rules
1. **Use tokens only** - `bg-background` not `bg-white`
2. **Space over borders** - Create hierarchy with spacing
3. **Consistent interactions** - All buttons/components feel cohesive
4. **Dark mode aware** - Everything works in both themes

## Common Tokens
- `bg-background`, `text-foreground` - Main colors
- `bg-card`, `bg-muted`, `text-muted-foreground` - Secondary
- `bg-primary`, `bg-destructive`, `bg-success` - Actions
- Container: `container mx-auto px-4 py-12 max-w-7xl`

## Button Pattern
- Scale: `active:scale-[0.99]` (subtle)
- Shadows: `shadow-sm` → `hover:shadow-md` → `active:shadow-none`
- Timing: 200ms hover, 75ms active

## Examples

```jsx
// Card
<div className="bg-card p-6 space-y-4 shadow-sm rounded-lg">
  <h3 className="font-semibold text-lg text-foreground">Title</h3>
  <p className="text-muted-foreground">Content</p>
</div>

// Page
<div className="container mx-auto px-4 py-12 max-w-7xl">
  <h1 className="text-4xl font-bold text-foreground mb-4">Title</h1>
  {/* Content */}
</div>
```

See DESIGN_GUIDELINES.md for detailed documentation.