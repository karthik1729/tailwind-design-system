# Tailwind Design System Project

## Important Guidelines
- The `organized-components` directory is for **reference only** - do not import from it
- Recreate components independently in `design-system-app/`
- **Always use Taskfile commands** to manage the project (never use pnpm/npm directly for server operations)
- **For any task, analyze if it can be divided into subtasks and start subagents to finish the task quicker**

## Project Structure
- `design-system-app/` - Next.js 15 showcase app with App Router
- Theme configuration is in `design-system-app/app/globals.css` using Tailwind v4's `@theme` directive
- Using Tailwind CSS v4.0.0-alpha.20 with CSS-first configuration approach
- Components use Radix UI primitives for accessibility
- Styling uses class-variance-authority (cva) for variant management

## Design System Overview
- **59 Total Components** organized into categories:
  - Buttons & Actions (8 components)
  - Form Elements (13 components)
  - Feedback Components (8 components)
  - Navigation Components (9 components)
  - Data Display (10 components)
  - Overlay Components (3 components)
  - Layout Components (4 components)
  - Additional specialized components
- **Theme Support**: Light and dark themes with CSS custom properties
- **Design Principles**: Borderless design, consistent spacing (p-4, gap-4), typography-first approach

## Task Commands
Use these commands to manage the project:
- `task dev-bg` - Start development server in background
- `task stop` - Stop all running services
- `task restart` - Restart development server
- `task logs` - View development server logs
- `task clean` - Clean build files and logs

## Development Workflow
1. Always check task status with `task status` before starting work
2. Use `task dev-bg` to start the development server
3. View logs with `task logs` if needed
4. Make changes to components in `design-system-app/`
5. Stop services with `task stop` when done

## Component Enhancement Plan
Currently working on systematic enhancement of all components focusing on:
- Consistent interaction states (hover, focus, active, disabled)
- Theme coherence across light/dark modes
- Accessibility improvements
- Micro-interactions and smooth transitions
See GitHub Issue #2 for detailed tracking

### Color System Architecture
- **Semantic Color Tokens**: Complete system for success, warning, info, and destructive states
- **Brand Colors**: Primary (blue), Accent (indigo), Purple, Teal, Orange - all with full palettes (50-950)
- **Each semantic color includes**: background, border, text, text-muted, and foreground variants
- **Theme-aware**: All colors properly adapt between light and dark modes
- **Single source of truth**: All theme configuration in `globals.css` using Tailwind v4's `@theme` directive
- **NO HARDCODED COLORS**: Always use design tokens, never hardcode hex values

### Design Standards & Best Practices

#### 1. Color Usage
- **Always use tokens**: Reference color tokens like `var(--color-primary-400)` or semantic tokens
- **Dark mode optimization**: Use lighter color variants (300-400) for icons/text in dark mode
- **Semantic colors**: 
  - Destructive: Red tones for errors/deletions
  - Success: Green tones for confirmations
  - Warning: Orange tones (not yellow) for warnings
  - Info: Blue tones for information
- **Hover states**: 
  - Triggers: `bg-primary` with `text-primary-foreground`
  - Menu items: `bg-primary-subtle-hover` for subtle feedback
  - Destructive items: `bg-destructive-subtle-hover`
- **Active states**: Use scale effects instead of color changes for buttons

#### 2. Component Patterns
- **Button variants**: 9 total - default, secondary, destructive, outline, ghost, link, success, warning, info
- **Icon buttons**: Use `rounded-lg` for more rounded appearance, default to outline variant
- **Toggle components**: 
  - Default variant has subtle background
  - Ghost variant uses transparent background with primary color when active
  - Outline variant has borders
- **Micro-interactions**: 
  - Scale effects on click (`active:scale-[0.98]`)
  - Icon rotation on hover for icon buttons
  - Smooth transitions (200ms default)
  - Chevron rotation for expandable items

#### 3. Interaction States
- **Hover**: Subtle background changes, icon scaling, text color shifts
- **Focus**: Ring utilities with proper offset
- **Active**: Scale reduction for tactile feedback
- **Disabled**: 50% opacity, pointer-events-none

#### 4. Animation Guidelines
- **Transition duration**: 
  - Triggers: 200ms for hover/active states
  - Menu items: 150ms for quick feedback
  - Open/close animations: 200ms open, 150ms close
- **Easing**: Use `ease-out` for consistent feel
- **Scale effects**:
  - Triggers: `scale-[0.98]` on open, `scale-[0.97]` on active
  - Icons: `scale-105` on hover
- **Rotation effects**:
  - Chevrons: 180° for dropdowns, 90° for submenus
  - Icon buttons: Custom rotation on hover
- **Special animations**:
  - Context menu: Ripple effect on right-click
  - Checkbox/Radio: Fade and zoom indicators

#### 5. Visual Hierarchy (Borderless Design)
- **Spacing over borders**: Use white space for separation
- **Background layers**: Create depth with background colors
- **Typography hierarchy**: Use font weights and colors
- **Minimal shadows**: Only when necessary for elevation

### Component Enhancement Standards

#### Trigger Components (Completed ✅)
All trigger components follow these patterns:
- **Hover**: Primary background with white text
- **Open state**: Scale to 0.98 with primary colors maintained
- **Active**: Scale to 0.97 for tactile feedback
- **Chevron rotation**: 180° for dropdowns, 90° for submenus
- **Transitions**: 200ms duration with ease-out

#### Menu Items
Consistent styling across all menu components:
- **Hover**: `bg-primary-subtle-hover` for subtle feedback
- **Border radius**: `rounded-[2px]` for crisp edges
- **Padding**: `px-2 py-1.5` standard spacing
- **Icons**: Scale to 105% on hover with 150ms transition
- **Checked states**: Primary background for checkbox/radio items

## Task Management
- All tasks are tracked in the `todo/` folder
- Task files are named after GitHub issue numbers (e.g., `todo/issue-2.md`)
- Each task file contains detailed progress tracking and checklists
- See `todo/README.md` for the task tracking system documentation

## Progress Summary
- **Buttons & Actions**: 8/8 components enhanced ✅
- **Form Elements**: 2/13 components enhanced
- **Feedback Components**: 5/8 components enhanced
- **Navigation Components**: 5/9 components enhanced
- **Data Display**: 1/10 components enhanced
- **Total**: 24/59 components enhanced (40.7%)