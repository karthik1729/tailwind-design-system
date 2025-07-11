# Color Audit Plan - Remaining Components

## Completed ✅
1. **Alert** - All semantic variants implemented
2. **Badge** - All semantic variants (solid + subtle) implemented

## High Priority Components 🔴

### 1. Button Component
- Review destructive variant colors
- Ensure proper contrast in both themes
- Consider adding success/warning variants if applicable
- Check ghost and outline variants in dark mode

### 2. Alert Dialog
- Focus on destructive action buttons
- Ensure proper visual hierarchy
- Check cancel vs confirm button contrast

### 3. Form Elements (Error States)
- **Input** - Add destructive border/text for errors
- **Select** - Error state styling
- **Textarea** - Error state styling
- **Checkbox/Radio** - Error indicators
- Add consistent error message styling

## Medium Priority Components 🟡

### 4. Progress Component
- Add status variants:
  - Default (primary)
  - Success (green)
  - Warning (yellow)
  - Error (red)
  - Info (blue)

### 5. Toast/Sonner
- Add notification variants:
  - Success toast
  - Warning toast
  - Error toast
  - Info toast
- Ensure proper contrast with backgrounds

### 6. Card Component
- Consider status cards (optional):
  - Success card
  - Warning card
  - Error card
  - Info card
- Or status indicators/borders

## Low Priority Components 🟢

### 7. Table Component
- Status cell styling
- Row status indicators
- Consider subtle background colors

### 8. Other Components
- Review remaining components for semantic color opportunities
- Focus on components that display status or state

## Implementation Strategy

### For Each Component:
1. **Analyze current usage** - Check examples and common patterns
2. **Identify semantic needs** - Where status/state colors make sense
3. **Implement variants** - Add new variants or update existing ones
4. **Update examples** - Show proper usage in storyboard
5. **Test both themes** - Ensure contrast and visibility
6. **Document changes** - Update component docs if needed

### Color Application Rules:
- **Solid variants**: Use semantic color as background with white/dark foreground
- **Subtle variants**: Use light background with dark text (themed)
- **Ghost variants**: Transparent background with colored text
- **Outline variants**: Colored border with colored text

### Testing Checklist:
- [ ] Light theme visibility
- [ ] Dark theme visibility
- [ ] Contrast ratios (WCAG AA)
- [ ] Hover/focus states
- [ ] Disabled states
- [ ] Interactive feedback