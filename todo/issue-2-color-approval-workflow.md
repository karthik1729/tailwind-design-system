# Color Enhancement Approval Workflow

## Process
For each color change, we will:
1. Present the current color usage
2. Propose the enhancement with visual examples
3. Wait for your approval before implementing
4. Apply the change across all affected components

## Color Changes Requiring Approval

### 1. Semantic Color Additions
**Current State**: Success and warning colors are defined but underutilized

#### Proposed Success Colors
- **Light Mode**: 
  - Background: `green-50` (#f0fdf4)
  - Border: `green-200` (#bbf7d0)
  - Text: `green-900` (#14532d)
  - Icon: `green-600` (#16a34a)
  
- **Dark Mode**:
  - Background: `green-950/20` (with opacity)
  - Border: `green-800` (#166534)
  - Text: `green-50` (#f0fdf4)
  - Icon: `green-500` (#22c55e)

**Components to Update**: Alert, Badge, Toast, Button (new success variant)

#### Proposed Warning Colors
- **Light Mode**:
  - Background: `yellow-50` (#fefce8)
  - Border: `yellow-200` (#fef08a)
  - Text: `yellow-900` (#713f12)
  - Icon: `yellow-600` (#ca8a04)

- **Dark Mode**:
  - Background: `yellow-950/20` (with opacity)
  - Border: `yellow-800` (#854d0e)
  - Text: `yellow-50` (#fefce8)
  - Icon: `yellow-500` (#eab308)

**Components to Update**: Alert, Badge, Toast

#### Proposed Info Colors
- **Light Mode**:
  - Background: `blue-50` (#eff6ff)
  - Border: `blue-200` (#bfdbfe)
  - Text: `blue-900` (#1e3a8a)
  - Icon: `blue-600` (#2563eb)

- **Dark Mode**:
  - Background: `blue-950/20` (with opacity)
  - Border: `blue-800` (#1e40af)
  - Text: `blue-50` (#eff6ff)
  - Icon: `blue-500` (#3b82f6)

**Components to Update**: Alert, Badge, Toast

### 2. Hover State Color Standardization
**Current State**: Inconsistent hover colors across components

#### Proposed Hover States
- **Primary Elements**: `primary-hover` (blue-700 light / blue-400 dark)
- **Secondary Elements**: `muted-hover` (gray-100 light / gray-800 dark)
- **Destructive Elements**: `destructive-hover` (red-700 light / red-400 dark)
- **Success Elements**: `success-hover` (green-700 light / green-400 dark)
- **Warning Elements**: `warning-hover` (yellow-700 light / yellow-400 dark)

### 3. Focus Ring Colors
**Current State**: All components use the same focus ring color

#### Proposed Focus Rings
- **Default**: Keep current (ring-offset-background + ring-ring)
- **Destructive**: `ring-red-500/50` with 2px offset
- **Success**: `ring-green-500/50` with 2px offset
- **Warning**: `ring-yellow-500/50` with 2px offset

### 4. Disabled State Colors
**Current State**: opacity-50 on all disabled elements

#### Proposed Disabled States
- **Text**: `text-muted-foreground/60` (more subtle)
- **Backgrounds**: `bg-muted/50` 
- **Borders**: `border-muted/30`

### 5. Dark Mode Contrast Improvements
**Current State**: Some text has insufficient contrast in dark mode

#### Proposed Adjustments
- **Secondary Text**: Change from `gray-400` to `gray-300` in dark mode
- **Muted Backgrounds**: Adjust from `/30` to `/20` opacity for better layering
- **Border Colors**: Increase contrast from `gray-800` to `gray-700`

## Approval Format
For each change, I'll show:
```
CURRENT:
[Component] - [Current color/style]
[Visual example or code snippet]

PROPOSED:
[Component] - [New color/style]
[Visual example or code snippet]

RATIONALE:
[Why this change improves the design system]

Do you approve this change? (yes/no/modify)
```

## Implementation Order
1. Semantic colors (success, warning, info)
2. Hover state standardization
3. Focus ring variations
4. Disabled state refinements
5. Dark mode contrast improvements

Ready to start with the first color change approval?