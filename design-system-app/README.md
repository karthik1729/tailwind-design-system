# Tailwind CSS v4 Design System App

A clean Next.js application configured with Tailwind CSS v4 and a custom theme extracted from analyzing 410 Tailwind UI components.

## Features

- **Tailwind CSS v4**: Using the latest alpha version with `@theme` directive
- **Extracted Design System**: Theme based on real usage patterns from 410 components
- **No Configuration Files**: Tailwind v4 is configured directly in CSS
- **Clean Slate**: No components, ready for your implementation

## Theme Configuration

The theme is defined in `app/globals.css` using the `@theme` directive:

```css
@theme {
  /* Colors from extracted theme */
  --color-primary-600: #2563eb;
  --color-gray-900: #111827;
  /* ... and more */
}
```

## Key Design Insights

Based on component analysis:
- **Most used text color**: gray-900 (247 uses)
- **Most used spacing**: padding-4 / 1rem (106 uses)
- **Dominant font weights**: medium (500) and semibold (600)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Tailwind CSS v4 Notes

- No `tailwind.config.js` needed
- Theme configuration in CSS using `@theme`
- Import with `@import "tailwindcss"`
- CSS variables are automatically available