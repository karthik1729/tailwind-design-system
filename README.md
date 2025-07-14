# Tailwind Design System

A comprehensive, production-ready design system built with **Tailwind CSS v4**, **Radix UI**, and **React**. Features 59+ meticulously crafted components with consistent micro-interactions, semantic color systems, and full light/dark theme support.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.0-38B2AC?logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)

## ✨ Features

- **59 Production-Ready Components** - Buttons, forms, navigation, data display, overlays, and more
- **Semantic Color System** - Success, warning, info, and destructive variants with consistent tokens
- **Full Theme Support** - Light and dark modes with server-side rendering (no flash)
- **Micro-interactions** - Smooth animations and transitions (200ms triggers, 150ms menu items)
- **Accessibility First** - WCAG 2.1 AA compliant with proper ARIA attributes and keyboard navigation
- **Performance Optimized** - No backdrop blurs, optimized bundle size, efficient animations
- **TypeScript Support** - Full type safety with comprehensive interfaces
- **Interactive Storyboard** - Live component documentation with examples

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/karthik1729/tailwind-design-system.git
cd tailwind-design-system

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the interactive storyboard.

## 📦 Component Library

### Categories

#### 🎯 Buttons & Actions (8 components)
- **Button** - 9 variants including semantic colors
- **IconButton** - Dedicated icon-only buttons with rotation effects
- **Toggle & ToggleGroup** - State toggles with smooth transitions
- **DropdownMenuTrigger** - Animated dropdown triggers
- **ContextMenuTrigger** - Right-click context menus
- **CommandItem** - Command palette items
- **MenubarTrigger** - Desktop-style menubar triggers

#### 📝 Form Elements (10 components)
- **Input** - Text inputs with smooth focus states
- **Textarea** - Auto-resizing with character count
- **Select** - Custom styled dropdowns
- **Checkbox** - Smooth check animations
- **RadioGroup** - Radio button groups
- **Switch** - Toggle switches with animations
- **Slider** - Range sliders with hover effects
- **InputOTP** - One-time password inputs
- **DatePicker** - Calendar date selection
- **FileUpload** - Drag-and-drop file uploads

#### 💬 Feedback (8 components)
- **Alert** - Semantic alert messages
- **Toast** - Notification toasts with positioning
- **Progress** - Progress bars with animations
- **Skeleton** - Loading placeholders
- **Dialog** - Modal dialogs
- **AlertDialog** - Confirmation dialogs
- **Sheet** - Slide-out panels
- **Drawer** - Mobile-friendly drawers

#### 🧭 Navigation (9 components)
- **NavigationMenu** - Multi-level navigation
- **DropdownMenu** - Dropdown menus
- **ContextMenu** - Context menus
- **Menubar** - Application menubars
- **Command** - Command palette
- **Breadcrumb** - Breadcrumb navigation
- **Pagination** - Page navigation
- **Tabs** - Tab interfaces
- **Sidebar** - Collapsible sidebars

#### 📊 Data Display (10 components)
- **Card** - Content cards with hover effects
- **Accordion** - Collapsible content sections
- **Collapsible** - Simple collapsible areas
- **Table** - Data tables with sorting
- **Avatar** - User avatars with fallbacks
- **Badge** - Status badges
- **Chart** - Data visualizations
- **Carousel** - Image/content carousels
- **AspectRatio** - Responsive media containers
- **ScrollArea** - Custom scrollbars

#### 🎨 Overlays (3 components)
- **Popover** - Floating content panels
- **HoverCard** - Hover-triggered cards
- **Tooltip** - Helpful tooltips

#### 📐 Layout (4 components)
- **Separator** - Visual separators
- **Resizable** - Resizable panels
- **Calendar** - Calendar widgets
- **Timeline** - Timeline displays

## 🎨 Design Tokens

### Color System

```css
/* Semantic Colors */
--color-success: 142.1 76.2% 36.3%;
--color-warning: 37.7 92.1% 50.2%;
--color-info: 199 89% 48%;
--color-destructive: 0 84.2% 60.2%;

/* Theme Colors */
--color-primary: 221.2 83.2% 53.3%;
--color-background: 0 0% 100%;
--color-foreground: 222.2 84% 4.9%;
/* ... and more */
```

### Animation Standards

- **Triggers**: 200ms transitions
- **Menu Items**: 150ms transitions
- **Scale Effects**: 0.98 on open, 0.97 on active
- **Easing**: ease-out for most animations

## 🛠️ Development

### Project Structure

```
tailwind-design-system/
├── design-system-app/          # Main application
│   ├── app/                    # Next.js app directory
│   │   ├── components/         # Component library
│   │   ├── storyboard/         # Interactive documentation
│   │   └── globals.css         # Tailwind v4 theme config
│   └── public/                 # Static assets
├── organized-components/       # Reference implementations
└── todo/                      # Project documentation
```

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm dev-bg       # Start server in background
pnpm logs         # View server logs

# Build
pnpm build        # Build for production
pnpm start        # Start production server

# Quality
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript checks
```

### Task Runner

This project uses `gotask` for task management:

```bash
task dev-bg       # Start dev server in background
task logs         # View development logs
task stop         # Stop all services
task restart      # Restart development server
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and patterns
- Ensure all components work in both light and dark themes
- Maintain WCAG 2.1 AA accessibility standards
- Test across different browsers
- Update the storyboard with examples for new components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Tailwind CSS v4](https://tailwindcss.com)
- UI primitives from [Radix UI](https://www.radix-ui.com)
- Icons from [Lucide](https://lucide.dev)
- Charts powered by [Recharts](https://recharts.org)

## 📸 Screenshots

### Light Theme
The design system features a clean, modern light theme with subtle shadows and clear hierarchy.

### Dark Theme
A carefully crafted dark theme with optimized contrast ratios and vibrant accent colors.

### Interactive Storyboard
Comprehensive documentation with live examples for all 59 components.

---

<p align="center">Made with ❤️ by <a href="https://github.com/karthik1729">Karthik</a></p>