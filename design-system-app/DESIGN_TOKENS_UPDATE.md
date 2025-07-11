# Design Tokens Update Summary

## Overview
This document summarizes the design token updates made to the shadcn theme based on analysis of 410+ organized Tailwind UI components.

## Key Changes

### 1. Primary Brand Color Updated to Indigo
- **Previous**: Blue-based primary colors
- **Updated**: Indigo-based primary colors (indigo-600 as primary)
- **Rationale**: Indigo-600 appeared 380 times vs blue-600 only 71 times in the component analysis

### 2. Added Missing Shadow Token
- **Added**: `--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **Usage**: Found in 196 components (custom shadow-xs class)

### 3. Enhanced Semantic Color Tokens
Added semantic color variables for better maintainability:
```css
--color-text-primary: var(--color-gray-900);
--color-text-secondary: var(--color-gray-500);
--color-text-tertiary: var(--color-gray-400);
--color-text-brand: var(--color-indigo-600);

--color-bg-primary: #ffffff;
--color-bg-secondary: var(--color-gray-50);
--color-bg-tertiary: var(--color-gray-100);
--color-bg-inverse: var(--color-gray-900);

--color-border-primary: var(--color-gray-300);
--color-border-secondary: var(--color-gray-200);
--color-border-brand: var(--color-indigo-600);
```

### 4. Component-Specific Spacing Patterns
Added common spacing patterns for consistency:
```css
--spacing-form-x: var(--spacing-3);      /* px-3 */
--spacing-form-y: var(--spacing-1_5);    /* py-1.5 */
--spacing-button-x: var(--spacing-3_5);  /* px-3.5 */
--spacing-button-y: var(--spacing-2_5);  /* py-2.5 */
--spacing-card: var(--spacing-6);        /* p-6 */
--spacing-card-lg: var(--spacing-8);     /* p-8 */
```

### 5. Updated Default Radius
- **Previous**: `--radius: 0.625rem`
- **Updated**: `--radius: 0.375rem` (matches most used rounded-md)

### 6. Complete Color Scales
Added full color scales for:
- Indigo (primary brand color)
- Gray (all shades 50-950)
- Green (success states)
- Yellow (warning states)
- Red (error/destructive states)
- Blue (secondary brand color)

### 7. Updated Color Mappings
Light mode:
- Primary: indigo-600 → white
- Secondary: gray-100 → gray-900
- Muted: gray-50 → gray-500
- Border: gray-200
- Destructive: red-600 → white

Dark mode:
- Background: gray-950
- Foreground: gray-50
- Primary: indigo-500 → gray-950
- Border: gray-700

## Usage Patterns from Analysis

### Most Used Design Tokens

**Text Colors** (Top 5):
1. text-gray-900 (1,944 uses) - Primary text
2. text-gray-500 (908 uses) - Secondary text
3. text-gray-400 (825 uses) - Muted text
4. text-gray-700 (492 uses)
5. text-gray-600 (478 uses)

**Background Colors** (Top 5):
1. bg-indigo-600 (353 uses) - Primary actions
2. bg-gray-100 (303 uses) - Light backgrounds
3. bg-gray-50 (292 uses) - Subtle backgrounds
4. bg-gray-900 (206 uses) - Dark sections
5. bg-indigo-500 (113 uses) - Hover states

**Spacing** (Top 5):
1. px-4 (693 uses)
2. px-6 (581 uses)
3. px-8 (572 uses)
4. py-2 (436 uses)
5. gap-x-8 (307 uses)

**Typography**:
- Most common font size: text-sm (2,668 uses)
- Most common font weight: font-medium (1,716 uses)
- Second most common weight: font-semibold (1,150 uses)

**Border Radius**:
- Most common: rounded-md (844 uses)
- Circular: rounded-full (333 uses)
- Large: rounded-lg (328 uses)

## Migration Guide

### For Existing Components

1. **Update primary color references**:
   - Replace `blue-600` with `indigo-600`
   - Replace `blue-500` with `indigo-500`

2. **Use semantic tokens where possible**:
   - Replace `text-gray-900` with `text-foreground`
   - Replace `text-gray-500` with `text-muted-foreground`
   - Replace `border-gray-200` with `border-border`

3. **Apply component spacing patterns**:
   - Forms: Use `px-form-x py-form-y` instead of `px-3 py-1.5`
   - Buttons: Use `px-button-x py-button-y` instead of `px-3.5 py-2.5`
   - Cards: Use `p-card` or `p-card-lg` instead of `p-6` or `p-8`

### Benefits

1. **Better alignment** with actual usage patterns from 410+ production components
2. **Improved consistency** through semantic tokens and component patterns
3. **Enhanced maintainability** with clear token naming
4. **Full color scale support** for all major colors used
5. **Dark mode optimization** with properly mapped color values