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