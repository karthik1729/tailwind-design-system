# Tailwind Design System Project

## Critical Rules
- **Never import from** `organized-components/` - it's reference only
- **Always use task commands** (`task dev-bg`, not `pnpm dev`)
- **Always use design tokens** - no hardcoded hex values
- **Development server runs in background** - don't start it again

## Quick Reference
- Theme config: `design-system-app/app/globals.css` (Tailwind v4 `@theme`)
- Components: Radix UI + CVA for variants
- Total: 59 components across 7 categories
- Current focus: Component enhancements (Issue #2)

## Key Patterns to Remember

### Colors
- Use semantic tokens (success, warning, info, destructive)
- Dark mode: Use lighter variants (300-400) for text/icons
- Hover states: `bg-primary-subtle-hover` for menus, `bg-primary` for triggers

### Animations
- Transitions: 200ms (triggers), 150ms (menu items)
- Scale: `active:scale-[0.98]` for buttons
- Chevrons: 180° (dropdowns), 90° (submenus)

### Component Standards
- **Triggers**: Primary bg on hover, scale on active
- **Menu items**: Subtle hover, `rounded-[2px]`, `px-2 py-1.5`
- **Forms**: Focus rings, smooth transitions

## Task Commands
- `task dev-bg` - Start dev server (background)
- `task logs` - View server logs
- `task stop` - Stop all services
- `task restart` - Restart server

## Current Progress
- Enhancing components: 25/59 done (42.4%)
- Active: Form Elements (3/13 complete)
- Details: See `todo/issue-2.md`