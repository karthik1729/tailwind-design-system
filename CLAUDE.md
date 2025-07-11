# Tailwind Design System Project

## Important Guidelines
- The `organized-components` directory is for **reference only** - do not import from it
- Recreate components independently in `design-system-app/`
- **Always use Taskfile commands** to manage the project (never use pnpm/npm directly for server operations)

## Project Structure
- `design-system-app/` - Next.js showcase app
- `tailwind-final-theme.json` - Extracted theme from 410 components
- `theme-variables.css` - CSS custom properties for Tailwind v4

## Task Commands
Use these commands to manage the project:
- `task dev-bg` - Start development server in background
- `task stop` - Stop all running services
- `task restart` - Restart development server
- `task logs` - View development server logs
- `task clean` - Clean build files and logs