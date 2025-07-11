export interface PropDefinition {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

export interface ComponentExample {
  title: string
  description?: string
  code: string
  component: () => JSX.Element
}

export interface ComponentDoc {
  name: string
  description: string
  props: PropDefinition[]
  examples: ComponentExample[]
}

// Accordion Component Documentation
export const accordionDoc: ComponentDoc = {
  name: "Accordion",
  description: "A vertically stacked set of interactive headings that each reveal an associated section of content.",
  props: [
    {
      name: "type",
      type: "single | multiple",
      required: true,
      description: "Determines whether one or multiple items can be opened at the same time"
    },
    {
      name: "value",
      type: "string | string[]",
      description: "The controlled value of the item(s) to expand (string for single, string[] for multiple)"
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      description: "The value of the item(s) to expand when initially rendered (uncontrolled)"
    },
    {
      name: "onValueChange",
      type: "(value: string | string[]) => void",
      description: "Event handler called when the expanded state changes"
    },
    {
      name: "collapsible",
      type: "boolean",
      default: "false",
      description: "When type is 'single', allows closing content when clicking trigger of open item"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the accordion"
    },
    {
      name: "dir",
      type: "ltr | rtl",
      default: "ltr",
      description: "The reading direction of the accordion"
    },
    {
      name: "orientation",
      type: "horizontal | vertical",
      default: "vertical",
      description: "The orientation of the accordion"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the accordion"
    }
  ],
  examples: []
}

// Accordion Item Documentation
export const accordionItemDoc: ComponentDoc = {
  name: "AccordionItem",
  description: "Contains all the parts of a collapsible section.",
  props: [
    {
      name: "value",
      type: "string",
      required: true,
      description: "A unique value for the item"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the item"
    }
  ],
  examples: []
}

// Accordion Trigger Documentation
export const accordionTriggerDoc: ComponentDoc = {
  name: "AccordionTrigger",
  description: "Toggles the collapsed state of its associated item.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the trigger"
    }
  ],
  examples: []
}

// Accordion Content Documentation
export const accordionContentDoc: ComponentDoc = {
  name: "AccordionContent",
  description: "Contains the collapsible content for an item.",
  props: [
    {
      name: "forceMount",
      type: "boolean",
      description: "Used to force mounting when more control is needed"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the content"
    }
  ],
  examples: []
}

// Button Component Documentation
export const buttonDoc: ComponentDoc = {
  name: "Button",
  description: "Buttons allow users to take actions and make choices with a single tap. They communicate actions that users can take.",
  props: [
    {
      name: "variant",
      type: "default | destructive | outline | secondary | ghost | link",
      default: "default",
      description: "The visual style variant of the button"
    },
    {
      name: "size",
      type: "default | sm | lg | icon",
      default: "default",
      description: "The size of the button"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the button"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the button"
    },
    {
      name: "onClick",
      type: "() => void",
      description: "Event handler called when the button is clicked"
    }
  ],
  examples: [] // Examples are loaded separately
}

// Card Component Documentation
export const cardDoc: ComponentDoc = {
  name: "Card",
  description: "A card is a flexible and extensible content container. It includes options for headers, footers, content, and a wide variety of content.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the card"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content of the card",
      required: true
    }
  ],
  examples: [] // Examples are loaded separately
}

// Card Header Documentation
export const cardHeaderDoc: ComponentDoc = {
  name: "CardHeader",
  description: "The header section of a card, typically containing the title and description.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the card header"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content of the card header"
    }
  ],
  examples: []
}

// Card Title Documentation
export const cardTitleDoc: ComponentDoc = {
  name: "CardTitle",
  description: "The title element of a card header.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the card title"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The title text"
    }
  ],
  examples: []
}

// Card Description Documentation
export const cardDescriptionDoc: ComponentDoc = {
  name: "CardDescription",
  description: "The description element of a card header.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the card description"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The description text"
    }
  ],
  examples: []
}

// Card Content Documentation
export const cardContentDoc: ComponentDoc = {
  name: "CardContent",
  description: "The main content area of a card.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the card content"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content of the card"
    }
  ],
  examples: []
}

// Card Footer Documentation
export const cardFooterDoc: ComponentDoc = {
  name: "CardFooter",
  description: "The footer section of a card, typically containing actions.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the card footer"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content of the card footer"
    }
  ],
  examples: []
}

// Input Component Documentation
export const inputDoc: ComponentDoc = {
  name: "Input",
  description: "Displays a form input field or a component that looks like an input field. Built on top of the native input element.",
  props: [
    {
      name: "type",
      type: "text | password | email | number | tel | url | search | date | time | datetime-local",
      default: "text",
      description: "The type of input"
    },
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text for the input"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the input"
    },
    {
      name: "value",
      type: "string | number",
      description: "The controlled value of the input"
    },
    {
      name: "defaultValue",
      type: "string | number",
      description: "The default value for uncontrolled input"
    },
    {
      name: "onChange",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
      description: "Event handler called when the input value changes"
    },
    {
      name: "onBlur",
      type: "(event: React.FocusEvent<HTMLInputElement>) => void",
      description: "Event handler called when the input loses focus"
    },
    {
      name: "onFocus",
      type: "(event: React.FocusEvent<HTMLInputElement>) => void",
      description: "Event handler called when the input gains focus"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the input"
    },
    {
      name: "id",
      type: "string",
      description: "The id of the input element"
    },
    {
      name: "name",
      type: "string",
      description: "The name of the input element"
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "When true, the input is required"
    },
    {
      name: "autoComplete",
      type: "string",
      description: "Hint for form autofill feature"
    },
    {
      name: "autoFocus",
      type: "boolean",
      default: "false",
      description: "When true, the input is focused on mount"
    }
  ],
  examples: []
}

// Badge Component Documentation
export const badgeDoc: ComponentDoc = {
  name: "Badge",
  description: "Displays a badge or label. Badges are used to highlight important information, indicate status, or show counts.",
  props: [
    {
      name: "variant",
      type: "default | secondary | destructive | outline",
      default: "default",
      description: "The visual style variant of the badge"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the badge"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to display inside the badge",
      required: true
    }
  ],
  examples: []
}

// Select Component Documentation
export const selectDoc: ComponentDoc = {
  name: "Select",
  description: "Displays a list of options for the user to pick from—triggered by a button. Built using Radix UI Select.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The controlled value of the select"
    },
    {
      name: "defaultValue",
      type: "string",
      description: "The value of the select when initially rendered (uncontrolled)"
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the value changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the select"
    },
    {
      name: "name",
      type: "string",
      description: "The name of the select. Submitted with its owning form as part of a name/value pair"
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "When true, indicates that the user must select a value before the form can be submitted"
    }
  ],
  examples: []
}

// SelectTrigger Component Documentation
export const selectTriggerDoc: ComponentDoc = {
  name: "SelectTrigger",
  description: "The button that toggles the select dropdown.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger content (usually SelectValue)"
    }
  ],
  examples: []
}

// SelectValue Component Documentation
export const selectValueDoc: ComponentDoc = {
  name: "SelectValue",
  description: "The part that reflects the selected value.",
  props: [
    {
      name: "placeholder",
      type: "string",
      description: "Text to display when no value is selected"
    }
  ],
  examples: []
}

// SelectContent Component Documentation
export const selectContentDoc: ComponentDoc = {
  name: "SelectContent",
  description: "The component that pops out when the select is open.",
  props: [
    {
      name: "position",
      type: "item-aligned | popper",
      default: "item-aligned",
      description: "The positioning mode for the select content"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// SelectItem Component Documentation
export const selectItemDoc: ComponentDoc = {
  name: "SelectItem",
  description: "The component that contains the select options.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The value given to this item",
      required: true
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content of the item"
    }
  ],
  examples: []
}

// Checkbox Component Documentation
export const checkboxDoc: ComponentDoc = {
  name: "Checkbox",
  description: "A control that allows the user to toggle between checked and not checked. Built using Radix UI Checkbox.",
  props: [
    {
      name: "checked",
      type: "boolean | 'indeterminate'",
      description: "The controlled checked state of the checkbox"
    },
    {
      name: "defaultChecked",
      type: "boolean",
      default: "false",
      description: "The checked state when initially rendered (uncontrolled)"
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean | 'indeterminate') => void",
      description: "Event handler called when the checked state changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the checkbox"
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "When true, indicates that the checkbox must be checked"
    },
    {
      name: "name",
      type: "string",
      description: "The name of the checkbox. Submitted with its owning form as part of a name/value pair"
    },
    {
      name: "value",
      type: "string",
      default: "on",
      description: "The value given as data when submitted with a name"
    },
    {
      name: "id",
      type: "string",
      description: "The id of the checkbox element"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the checkbox"
    }
  ],
  examples: []
}

// Switch Component Documentation
export const switchDoc: ComponentDoc = {
  name: "Switch",
  description: "A control that allows the user to toggle between checked and not checked. Switches are typically used for on/off states.",
  props: [
    {
      name: "checked",
      type: "boolean",
      description: "The controlled checked state of the switch"
    },
    {
      name: "defaultChecked",
      type: "boolean",
      default: "false",
      description: "The checked state when initially rendered (uncontrolled)"
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      description: "Event handler called when the checked state changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the switch"
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "When true, indicates that the switch must be checked"
    },
    {
      name: "name",
      type: "string",
      description: "The name of the switch. Submitted with its owning form as part of a name/value pair"
    },
    {
      name: "value",
      type: "string",
      default: "on",
      description: "The value given as data when submitted with a name"
    },
    {
      name: "id",
      type: "string",
      description: "The id of the switch element"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the switch"
    }
  ],
  examples: []
}

// Textarea Component Documentation
export const textareaDoc: ComponentDoc = {
  name: "Textarea",
  description: "Displays a form textarea or a component that looks like a textarea. Textareas are used for multi-line text input.",
  props: [
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text for the textarea"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the textarea"
    },
    {
      name: "value",
      type: "string",
      description: "The controlled value of the textarea"
    },
    {
      name: "defaultValue",
      type: "string",
      description: "The default value for uncontrolled textarea"
    },
    {
      name: "onChange",
      type: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void",
      description: "Event handler called when the textarea value changes"
    },
    {
      name: "onBlur",
      type: "(event: React.FocusEvent<HTMLTextAreaElement>) => void",
      description: "Event handler called when the textarea loses focus"
    },
    {
      name: "onFocus",
      type: "(event: React.FocusEvent<HTMLTextAreaElement>) => void",
      description: "Event handler called when the textarea gains focus"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the textarea"
    },
    {
      name: "id",
      type: "string",
      description: "The id of the textarea element"
    },
    {
      name: "name",
      type: "string",
      description: "The name of the textarea element"
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "When true, the textarea is required"
    },
    {
      name: "rows",
      type: "number",
      default: "3",
      description: "Number of visible text lines"
    },
    {
      name: "cols",
      type: "number",
      description: "Visible width of the text control in characters"
    },
    {
      name: "maxLength",
      type: "number",
      description: "Maximum number of characters allowed"
    },
    {
      name: "minLength",
      type: "number",
      description: "Minimum number of characters required"
    },
    {
      name: "readOnly",
      type: "boolean",
      default: "false",
      description: "When true, the textarea is read-only"
    },
    {
      name: "autoFocus",
      type: "boolean",
      default: "false",
      description: "When true, the textarea is focused on mount"
    }
  ],
  examples: []
}

// Radio Group Component Documentation
export const radioGroupDoc: ComponentDoc = {
  name: "RadioGroup",
  description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The controlled value of the radio item to check"
    },
    {
      name: "defaultValue",
      type: "string",
      description: "The value of the radio item that should be checked when initially rendered (uncontrolled)"
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the value changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with radio items"
    },
    {
      name: "name",
      type: "string",
      description: "The name of the group. Submitted with its owning form as part of a name/value pair"
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "When true, indicates that the user must check a radio item before the owning form can be submitted"
    },
    {
      name: "orientation",
      type: "horizontal | vertical",
      default: "vertical",
      description: "The orientation of the component"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the radio group"
    }
  ],
  examples: []
}

// RadioGroupItem Component Documentation
export const radioGroupItemDoc: ComponentDoc = {
  name: "RadioGroupItem",
  description: "An item in the radio group that can be checked.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The value given as data when submitted with a name",
      required: true
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the radio item"
    },
    {
      name: "id",
      type: "string",
      description: "The id of the radio item"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the radio item"
    }
  ],
  examples: []
}

// Alert Component Documentation
export const alertDoc: ComponentDoc = {
  name: "Alert",
  description: "Displays a callout for user attention. Alerts are used to communicate a state that affects a system, feature or page.",
  props: [
    {
      name: "variant",
      type: "default | destructive",
      default: "default",
      description: "The visual style variant of the alert"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the alert"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to display inside the alert",
      required: true
    }
  ],
  examples: []
}

// Alert Title Documentation
export const alertTitleDoc: ComponentDoc = {
  name: "AlertTitle",
  description: "The title of an alert.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the alert title"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The title text",
      required: true
    }
  ],
  examples: []
}

// Alert Description Documentation
export const alertDescriptionDoc: ComponentDoc = {
  name: "AlertDescription",
  description: "The description of an alert.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the alert description"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The description text",
      required: true
    }
  ],
  examples: []
}

// Alert Dialog Component Documentation
export const alertDialogDoc: ComponentDoc = {
  name: "AlertDialog",
  description: "A modal dialog that interrupts the user with important content and expects a response.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the dialog"
    },
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "The open state of the dialog when it is initially rendered (uncontrolled)"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger and content components",
      required: true
    }
  ],
  examples: []
}

// Alert Dialog Trigger Documentation
export const alertDialogTriggerDoc: ComponentDoc = {
  name: "AlertDialogTrigger",
  description: "The button that opens the dialog.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger element",
      required: true
    }
  ],
  examples: []
}

// Alert Dialog Content Documentation
export const alertDialogContentDoc: ComponentDoc = {
  name: "AlertDialogContent",
  description: "Contains content to be rendered in the open dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the content"
    },
    {
      name: "onEscapeKeyDown",
      type: "(event: KeyboardEvent) => void",
      description: "Event handler called when the escape key is down"
    },
    {
      name: "onPointerDownOutside",
      type: "(event: PointerDownOutsideEvent) => void",
      description: "Event handler called when a pointer event occurs outside the bounds"
    }
  ],
  examples: []
}

// Alert Dialog Header Documentation
export const alertDialogHeaderDoc: ComponentDoc = {
  name: "AlertDialogHeader",
  description: "Contains the header content of the dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Alert Dialog Footer Documentation
export const alertDialogFooterDoc: ComponentDoc = {
  name: "AlertDialogFooter",
  description: "Contains the footer content of the dialog, typically action buttons.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Alert Dialog Title Documentation
export const alertDialogTitleDoc: ComponentDoc = {
  name: "AlertDialogTitle",
  description: "The title of the dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Alert Dialog Description Documentation
export const alertDialogDescriptionDoc: ComponentDoc = {
  name: "AlertDialogDescription",
  description: "The description of the dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Alert Dialog Action Documentation
export const alertDialogActionDoc: ComponentDoc = {
  name: "AlertDialogAction",
  description: "The primary action button that closes the dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    }
  ],
  examples: []
}

// Alert Dialog Cancel Documentation
export const alertDialogCancelDoc: ComponentDoc = {
  name: "AlertDialogCancel",
  description: "The cancel button that closes the dialog without taking action.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    }
  ],
  examples: []
}

// Aspect Ratio Component Documentation
export const aspectRatioDoc: ComponentDoc = {
  name: "AspectRatio",
  description: "Displays content within a desired ratio. Aspect ratios are a common way to responsively handle image and video content.",
  props: [
    {
      name: "ratio",
      type: "number",
      default: "1",
      description: "The desired aspect ratio"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the aspect ratio container"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to display within the aspect ratio container",
      required: true
    }
  ],
  examples: []
}

// Avatar Component Documentation
export const avatarDoc: ComponentDoc = {
  name: "Avatar",
  description: "An image element with a fallback for representing the user.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the avatar"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The avatar image and fallback components",
      required: true
    }
  ],
  examples: []
}

// Avatar Image Documentation
export const avatarImageDoc: ComponentDoc = {
  name: "AvatarImage",
  description: "The image to render. By default it will only render when it has loaded.",
  props: [
    {
      name: "src",
      type: "string",
      description: "The image source URL",
      required: true
    },
    {
      name: "alt",
      type: "string",
      description: "Alternative text for the image",
      required: true
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the image"
    },
    {
      name: "onLoadingStatusChange",
      type: "(status: 'idle' | 'loading' | 'loaded' | 'error') => void",
      description: "A callback providing information about the loading status of the image"
    }
  ],
  examples: []
}

// Avatar Fallback Documentation
export const avatarFallbackDoc: ComponentDoc = {
  name: "AvatarFallback",
  description: "An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the fallback"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The fallback content (usually initials)",
      required: true
    },
    {
      name: "delayMs",
      type: "number",
      default: "0",
      description: "Delay in milliseconds before showing the fallback"
    }
  ],
  examples: []
}

// Breadcrumb Component Documentation
export const breadcrumbDoc: ComponentDoc = {
  name: "Breadcrumb",
  description: "Displays the path to the current resource using a hierarchy of links.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the breadcrumb"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The breadcrumb list component",
      required: true
    }
  ],
  examples: []
}

// Breadcrumb List Documentation
export const breadcrumbListDoc: ComponentDoc = {
  name: "BreadcrumbList",
  description: "Contains the breadcrumb items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The breadcrumb items",
      required: true
    }
  ],
  examples: []
}

// Breadcrumb Item Documentation
export const breadcrumbItemDoc: ComponentDoc = {
  name: "BreadcrumbItem",
  description: "A single breadcrumb item.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The item content",
      required: true
    }
  ],
  examples: []
}

// Breadcrumb Link Documentation
export const breadcrumbLinkDoc: ComponentDoc = {
  name: "BreadcrumbLink",
  description: "A breadcrumb link.",
  props: [
    {
      name: "href",
      type: "string",
      description: "The URL the link points to"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The link content",
      required: true
    }
  ],
  examples: []
}

// Breadcrumb Page Documentation
export const breadcrumbPageDoc: ComponentDoc = {
  name: "BreadcrumbPage",
  description: "The current page in the breadcrumb.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The page content",
      required: true
    }
  ],
  examples: []
}

// Breadcrumb Separator Documentation
export const breadcrumbSeparatorDoc: ComponentDoc = {
  name: "BreadcrumbSeparator",
  description: "A visual separator between breadcrumb items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "Custom separator content (defaults to /)"
    }
  ],
  examples: []
}

// Breadcrumb Ellipsis Documentation
export const breadcrumbEllipsisDoc: ComponentDoc = {
  name: "BreadcrumbEllipsis",
  description: "Renders an ellipsis when breadcrumb items are collapsed.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Calendar Component Documentation
export const calendarDoc: ComponentDoc = {
  name: "Calendar",
  description: "A date picker component built on top of React DayPicker.",
  props: [
    {
      name: "mode",
      type: "single | multiple | range",
      default: "single",
      description: "The selection mode of the calendar"
    },
    {
      name: "selected",
      type: "Date | Date[] | DateRange | undefined",
      description: "The selected date(s)"
    },
    {
      name: "onSelect",
      type: "(date: Date | Date[] | DateRange | undefined) => void",
      description: "Event handler called when a date is selected"
    },
    {
      name: "disabled",
      type: "Matcher | Matcher[]",
      description: "Disable specific dates"
    },
    {
      name: "initialFocus",
      type: "boolean",
      default: "false",
      description: "When true, the calendar will focus the selected date"
    },
    {
      name: "numberOfMonths",
      type: "number",
      default: "1",
      description: "The number of months to display"
    },
    {
      name: "defaultMonth",
      type: "Date",
      description: "The month to display by default"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the calendar"
    },
    {
      name: "classNames",
      type: "ClassNames",
      description: "Classnames to apply to the calendar elements"
    },
    {
      name: "showOutsideDays",
      type: "boolean",
      default: "true",
      description: "Display days outside the current month"
    },
    {
      name: "fixedWeeks",
      type: "boolean",
      default: "false",
      description: "Always display 6 weeks per month"
    }
  ],
  examples: []
}

// Carousel Component Documentation
export const carouselDoc: ComponentDoc = {
  name: "Carousel",
  description: "A carousel component built using Embla Carousel.",
  props: [
    {
      name: "opts",
      type: "CarouselOptions",
      description: "Options for configuring the carousel behavior"
    },
    {
      name: "plugins",
      type: "CarouselPlugin[]",
      description: "Array of Embla Carousel plugins"
    },
    {
      name: "orientation",
      type: "horizontal | vertical",
      default: "horizontal",
      description: "The orientation of the carousel"
    },
    {
      name: "setApi",
      type: "(api: CarouselApi) => void",
      description: "A function to set the carousel API instance"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the carousel"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The carousel content",
      required: true
    }
  ],
  examples: []
}

// Carousel Content Documentation
export const carouselContentDoc: ComponentDoc = {
  name: "CarouselContent",
  description: "Contains the carousel items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The carousel items",
      required: true
    }
  ],
  examples: []
}

// Carousel Item Documentation
export const carouselItemDoc: ComponentDoc = {
  name: "CarouselItem",
  description: "A single item within the carousel.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The item content",
      required: true
    }
  ],
  examples: []
}

// Carousel Previous Documentation
export const carouselPreviousDoc: ComponentDoc = {
  name: "CarouselPrevious",
  description: "Button to navigate to the previous carousel item.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "variant",
      type: "default | outline | ghost",
      default: "outline",
      description: "The button variant"
    },
    {
      name: "size",
      type: "default | sm | lg | icon",
      default: "icon",
      description: "The button size"
    }
  ],
  examples: []
}

// Carousel Next Documentation
export const carouselNextDoc: ComponentDoc = {
  name: "CarouselNext",
  description: "Button to navigate to the next carousel item.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "variant",
      type: "default | outline | ghost",
      default: "outline",
      description: "The button variant"
    },
    {
      name: "size",
      type: "default | sm | lg | icon",
      default: "icon",
      description: "The button size"
    }
  ],
  examples: []
}

// Chart Component Documentation
export const chartDoc: ComponentDoc = {
  name: "Chart",
  description: "Charts powered by Recharts with theming support.",
  props: [
    {
      name: "config",
      type: "ChartConfig",
      description: "Configuration object for chart colors and labels",
      required: true
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the chart container"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The chart content",
      required: true
    }
  ],
  examples: []
}

// ChartTooltip Documentation
export const chartTooltipDoc: ComponentDoc = {
  name: "ChartTooltip",
  description: "A customized tooltip for charts.",
  props: [
    {
      name: "cursor",
      type: "boolean",
      default: "true",
      description: "Whether to show cursor on hover"
    },
    {
      name: "content",
      type: "React.ComponentType<any>",
      description: "Custom tooltip content component"
    }
  ],
  examples: []
}

// ChartTooltipContent Documentation
export const chartTooltipContentDoc: ComponentDoc = {
  name: "ChartTooltipContent",
  description: "Default tooltip content component.",
  props: [
    {
      name: "active",
      type: "boolean",
      description: "Whether the tooltip is active"
    },
    {
      name: "payload",
      type: "any[]",
      description: "The data payload for the tooltip"
    },
    {
      name: "label",
      type: "string",
      description: "The label for the tooltip"
    },
    {
      name: "labelFormatter",
      type: "(value: any) => string",
      description: "Function to format the label"
    },
    {
      name: "hideLabel",
      type: "boolean",
      default: "false",
      description: "Whether to hide the label"
    },
    {
      name: "hideIndicator",
      type: "boolean",
      default: "false",
      description: "Whether to hide the indicator"
    }
  ],
  examples: []
}

// ChartLegend Documentation
export const chartLegendDoc: ComponentDoc = {
  name: "ChartLegend",
  description: "A customized legend for charts.",
  props: [
    {
      name: "content",
      type: "React.ComponentType<any>",
      description: "Custom legend content component"
    },
    {
      name: "verticalAlign",
      type: "top | middle | bottom",
      default: "bottom",
      description: "Vertical alignment of the legend"
    }
  ],
  examples: []
}

// ChartLegendContent Documentation
export const chartLegendContentDoc: ComponentDoc = {
  name: "ChartLegendContent",
  description: "Default legend content component.",
  props: [
    {
      name: "payload",
      type: "any[]",
      description: "The legend items data"
    },
    {
      name: "verticalAlign",
      type: "top | middle | bottom",
      description: "Vertical alignment of the legend"
    },
    {
      name: "nameKey",
      type: "string",
      description: "The key to use for the legend item name"
    },
    {
      name: "hideIcon",
      type: "boolean",
      default: "false",
      description: "Whether to hide the legend icon"
    }
  ],
  examples: []
}

// Collapsible Component Documentation
export const collapsibleDoc: ComponentDoc = {
  name: "Collapsible",
  description: "An interactive component which expands/collapses a panel.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the collapsible"
    },
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "The open state of the collapsible when it is initially rendered (uncontrolled)"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the collapsible"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the collapsible"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The collapsible content",
      required: true
    }
  ],
  examples: []
}

// Collapsible Trigger Documentation
export const collapsibleTriggerDoc: ComponentDoc = {
  name: "CollapsibleTrigger",
  description: "The button that toggles the collapsible.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger content",
      required: true
    }
  ],
  examples: []
}

// Collapsible Content Documentation
export const collapsibleContentDoc: ComponentDoc = {
  name: "CollapsibleContent",
  description: "The component that contains the collapsible content.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "forceMount",
      type: "boolean",
      description: "Used to force mounting when more control is needed"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The collapsible content",
      required: true
    }
  ],
  examples: []
}

// Command Component Documentation
export const commandDoc: ComponentDoc = {
  name: "Command",
  description: "Fast, composable, unstyled command menu for React.",
  props: [
    {
      name: "label",
      type: "string",
      description: "Accessible label for the command menu"
    },
    {
      name: "shouldFilter",
      type: "boolean",
      default: "true",
      description: "Whether to filter items based on input"
    },
    {
      name: "filter",
      type: "(value: string, search: string) => number",
      description: "Custom filter function"
    },
    {
      name: "value",
      type: "string",
      description: "Controlled value for the search input"
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the search value changes"
    },
    {
      name: "loop",
      type: "boolean",
      default: "false",
      description: "Whether the keyboard navigation should loop"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Command Dialog Documentation
export const commandDialogDoc: ComponentDoc = {
  name: "CommandDialog",
  description: "Command menu in a dialog overlay.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "Controlled open state of the dialog"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    }
  ],
  examples: []
}

// Command Input Documentation
export const commandInputDoc: ComponentDoc = {
  name: "CommandInput",
  description: "Command menu input search.",
  props: [
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text for the input"
    },
    {
      name: "value",
      type: "string",
      description: "Controlled value for the input"
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the input value changes"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Command List Documentation
export const commandListDoc: ComponentDoc = {
  name: "CommandList",
  description: "Contains command items and groups.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Command Empty Documentation
export const commandEmptyDoc: ComponentDoc = {
  name: "CommandEmpty",
  description: "Rendered when there are no results.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Command Group Documentation
export const commandGroupDoc: ComponentDoc = {
  name: "CommandGroup",
  description: "Groups command items together.",
  props: [
    {
      name: "heading",
      type: "string",
      description: "Optional heading for the group"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Command Item Documentation
export const commandItemDoc: ComponentDoc = {
  name: "CommandItem",
  description: "A single command item.",
  props: [
    {
      name: "value",
      type: "string",
      description: "Value for the item (used for filtering)"
    },
    {
      name: "onSelect",
      type: "(value: string) => void",
      description: "Event handler called when the item is selected"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the item is disabled"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Command Shortcut Documentation
export const commandShortcutDoc: ComponentDoc = {
  name: "CommandShortcut",
  description: "Displays keyboard shortcut hint.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Command Separator Documentation
export const commandSeparatorDoc: ComponentDoc = {
  name: "CommandSeparator",
  description: "Visually separates items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Context Menu Documentation
export const contextMenuDoc: ComponentDoc = {
  name: "ContextMenu",
  description: "Displays a menu to the user — such as a set of actions or functions — triggered by a right-click.",
  props: [
    {
      name: "modal",
      type: "boolean",
      default: "true",
      description: "Whether the context menu should be modal"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger and content components",
      required: true
    }
  ],
  examples: []
}

// Context Menu Trigger Documentation
export const contextMenuTriggerDoc: ComponentDoc = {
  name: "ContextMenuTrigger",
  description: "The area that opens the context menu. Wrap it around the target area.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the trigger"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger element",
      required: true
    }
  ],
  examples: []
}

// Context Menu Content Documentation
export const contextMenuContentDoc: ComponentDoc = {
  name: "ContextMenuContent",
  description: "The component that pops out when the context menu is open.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "0",
      description: "The distance in pixels from the anchor"
    },
    {
      name: "collisionPadding",
      type: "number | Partial<Record<Side, number>>",
      default: "0",
      description: "The distance in pixels from the boundary edges where collision detection should occur"
    },
    {
      name: "onEscapeKeyDown",
      type: "(event: KeyboardEvent) => void",
      description: "Event handler called when the escape key is down"
    },
    {
      name: "onPointerDownOutside",
      type: "(event: PointerDownOutsideEvent) => void",
      description: "Event handler called when a pointer event occurs outside the bounds"
    }
  ],
  examples: []
}

// Context Menu Item Documentation
export const contextMenuItemDoc: ComponentDoc = {
  name: "ContextMenuItem",
  description: "A context menu item.",
  props: [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "onSelect",
      type: "(event: Event) => void",
      description: "Event handler called when the user selects an item"
    },
    {
      name: "textValue",
      type: "string",
      description: "The textual value of the item for accessibility"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "inset",
      type: "boolean",
      default: "false",
      description: "When true, adds left padding to align with sub-trigger items"
    }
  ],
  examples: []
}

// Context Menu Checkbox Item Documentation
export const contextMenuCheckboxItemDoc: ComponentDoc = {
  name: "ContextMenuCheckboxItem",
  description: "An item that can be checked or unchecked.",
  props: [
    {
      name: "checked",
      type: "boolean | 'indeterminate'",
      description: "The controlled checked state of the item"
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      description: "Event handler called when the checked state changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "onSelect",
      type: "(event: Event) => void",
      description: "Event handler called when the user selects an item"
    }
  ],
  examples: []
}

// Context Menu Radio Group Documentation
export const contextMenuRadioGroupDoc: ComponentDoc = {
  name: "ContextMenuRadioGroup",
  description: "A group of radio items where only one can be checked at a time.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The value of the selected radio item"
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the value changes"
    }
  ],
  examples: []
}

// Context Menu Radio Item Documentation
export const contextMenuRadioItemDoc: ComponentDoc = {
  name: "ContextMenuRadioItem",
  description: "An item that can be controlled as a radio button.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The unique value of the radio item",
      required: true
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "onSelect",
      type: "(event: Event) => void",
      description: "Event handler called when the user selects an item"
    }
  ],
  examples: []
}

// Context Menu Label Documentation
export const contextMenuLabelDoc: ComponentDoc = {
  name: "ContextMenuLabel",
  description: "Used to render a label. It won't be focusable using arrow keys.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "inset",
      type: "boolean",
      default: "false",
      description: "When true, adds left padding to align with other items"
    }
  ],
  examples: []
}

// Context Menu Separator Documentation
export const contextMenuSeparatorDoc: ComponentDoc = {
  name: "ContextMenuSeparator",
  description: "Used to visually separate items in the context menu.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Context Menu Shortcut Documentation
export const contextMenuShortcutDoc: ComponentDoc = {
  name: "ContextMenuShortcut",
  description: "Used to display a keyboard shortcut.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Context Menu Sub Documentation
export const contextMenuSubDoc: ComponentDoc = {
  name: "ContextMenuSub",
  description: "Used to nest submenus.",
  props: [
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "The open state of the submenu when it is initially rendered"
    },
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the submenu"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    }
  ],
  examples: []
}

// Context Menu Sub Trigger Documentation
export const contextMenuSubTriggerDoc: ComponentDoc = {
  name: "ContextMenuSubTrigger",
  description: "An item that opens a submenu.",
  props: [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "inset",
      type: "boolean",
      default: "false",
      description: "When true, adds left padding to align with other items"
    }
  ],
  examples: []
}

// Context Menu Sub Content Documentation
export const contextMenuSubContentDoc: ComponentDoc = {
  name: "ContextMenuSubContent",
  description: "The content of the submenu.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "0",
      description: "The distance in pixels from the anchor"
    },
    {
      name: "collisionPadding",
      type: "number | Partial<Record<Side, number>>",
      default: "0",
      description: "The distance in pixels from the boundary edges where collision detection should occur"
    }
  ],
  examples: []
}

// Dialog Documentation
export const dialogDoc: ComponentDoc = {
  name: "Dialog",
  description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
  props: [
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "The open state of the dialog when it is initially rendered"
    },
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the dialog"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state of the dialog changes"
    },
    {
      name: "modal",
      type: "boolean",
      default: "true",
      description: "Whether the dialog should be modal"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger and content components",
      required: true
    }
  ],
  examples: []
}

// Dialog Trigger Documentation
export const dialogTriggerDoc: ComponentDoc = {
  name: "DialogTrigger",
  description: "The button that opens the dialog.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger element",
      required: true
    }
  ],
  examples: []
}

// Dialog Content Documentation
export const dialogContentDoc: ComponentDoc = {
  name: "DialogContent",
  description: "Contains content to be rendered in the open dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the content"
    },
    {
      name: "onOpenAutoFocus",
      type: "(event: Event) => void",
      description: "Event handler called when focus moves into the component after opening"
    },
    {
      name: "onCloseAutoFocus",
      type: "(event: Event) => void",
      description: "Event handler called when focus moves to the trigger after closing"
    },
    {
      name: "onEscapeKeyDown",
      type: "(event: KeyboardEvent) => void",
      description: "Event handler called when the escape key is down"
    },
    {
      name: "onPointerDownOutside",
      type: "(event: PointerDownOutsideEvent) => void",
      description: "Event handler called when a pointer event occurs outside the bounds"
    },
    {
      name: "onInteractOutside",
      type: "(event: InteractOutsideEvent) => void",
      description: "Event handler called when an interaction occurs outside the bounds"
    }
  ],
  examples: []
}

// Dialog Header Documentation
export const dialogHeaderDoc: ComponentDoc = {
  name: "DialogHeader",
  description: "Contains the header content of the dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Dialog Footer Documentation
export const dialogFooterDoc: ComponentDoc = {
  name: "DialogFooter",
  description: "Contains the footer content of the dialog, typically action buttons.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Dialog Title Documentation
export const dialogTitleDoc: ComponentDoc = {
  name: "DialogTitle",
  description: "The title of the dialog.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    }
  ],
  examples: []
}

// Dialog Description Documentation
export const dialogDescriptionDoc: ComponentDoc = {
  name: "DialogDescription",
  description: "An accessible description to be announced when the dialog is opened.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    }
  ],
  examples: []
}

// Dialog Close Documentation
export const dialogCloseDoc: ComponentDoc = {
  name: "DialogClose",
  description: "A button that closes the dialog.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Drawer Documentation
export const drawerDoc: ComponentDoc = {
  name: "Drawer",
  description: "A drawer component that slides in from the edge of the screen.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the drawer"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state of the drawer changes"
    },
    {
      name: "direction",
      type: "top | right | bottom | left",
      default: "right",
      description: "The direction the drawer opens from"
    },
    {
      name: "shouldScaleBackground",
      type: "boolean",
      default: "true",
      description: "Whether to scale the background when the drawer is open"
    },
    {
      name: "modal",
      type: "boolean",
      default: "true",
      description: "Whether the drawer should be modal"
    }
  ],
  examples: []
}

// Drawer Trigger Documentation
export const drawerTriggerDoc: ComponentDoc = {
  name: "DrawerTrigger",
  description: "The button that opens the drawer.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The trigger element",
      required: true
    }
  ],
  examples: []
}

// Drawer Content Documentation
export const drawerContentDoc: ComponentDoc = {
  name: "DrawerContent",
  description: "Contains content to be rendered in the open drawer.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the content"
    },
    {
      name: "onOpenAutoFocus",
      type: "(event: Event) => void",
      description: "Event handler called when focus moves into the component after opening"
    },
    {
      name: "onCloseAutoFocus",
      type: "(event: Event) => void",
      description: "Event handler called when focus moves to the trigger after closing"
    }
  ],
  examples: []
}

// Drawer Header Documentation
export const drawerHeaderDoc: ComponentDoc = {
  name: "DrawerHeader",
  description: "Contains the header content of the drawer.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Drawer Footer Documentation
export const drawerFooterDoc: ComponentDoc = {
  name: "DrawerFooter",
  description: "Contains the footer content of the drawer, typically action buttons.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Drawer Title Documentation
export const drawerTitleDoc: ComponentDoc = {
  name: "DrawerTitle",
  description: "The title of the drawer.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Drawer Description Documentation
export const drawerDescriptionDoc: ComponentDoc = {
  name: "DrawerDescription",
  description: "An accessible description to be announced when the drawer is opened.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Drawer Close Documentation
export const drawerCloseDoc: ComponentDoc = {
  name: "DrawerClose",
  description: "A button that closes the drawer.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Dropdown Menu Documentation
export const dropdownMenuDoc: ComponentDoc = {
  name: "DropdownMenu",
  description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
  props: [
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "The open state of the dropdown menu when it is initially rendered"
    },
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the dropdown menu"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state of the dropdown menu changes"
    },
    {
      name: "modal",
      type: "boolean",
      default: "true",
      description: "Whether the dropdown menu should be modal"
    },
    {
      name: "dir",
      type: "ltr | rtl",
      description: "The reading direction"
    }
  ],
  examples: []
}

// Dropdown Menu Trigger Documentation
export const dropdownMenuTriggerDoc: ComponentDoc = {
  name: "DropdownMenuTrigger",
  description: "The button that toggles the dropdown menu.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the trigger"
    }
  ],
  examples: []
}

// Dropdown Menu Content Documentation
export const dropdownMenuContentDoc: ComponentDoc = {
  name: "DropdownMenuContent",
  description: "The component that pops out when the dropdown menu is open.",
  props: [
    {
      name: "align",
      type: "start | center | end",
      default: "center",
      description: "The preferred alignment against the trigger"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "0",
      description: "An offset in pixels from the 'start' or 'end' alignment options"
    },
    {
      name: "side",
      type: "top | right | bottom | left",
      default: "bottom",
      description: "The preferred side of the trigger to render against"
    },
    {
      name: "sideOffset",
      type: "number",
      default: "0",
      description: "The distance in pixels from the trigger"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Dropdown Menu Item Documentation
export const dropdownMenuItemDoc: ComponentDoc = {
  name: "DropdownMenuItem",
  description: "A dropdown menu item.",
  props: [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "onSelect",
      type: "(event: Event) => void",
      description: "Event handler called when the user selects an item"
    },
    {
      name: "textValue",
      type: "string",
      description: "The textual value of the item for accessibility"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "inset",
      type: "boolean",
      default: "false",
      description: "When true, adds left padding to align with sub-trigger items"
    }
  ],
  examples: []
}

// Dropdown Menu Checkbox Item Documentation
export const dropdownMenuCheckboxItemDoc: ComponentDoc = {
  name: "DropdownMenuCheckboxItem",
  description: "An item that can be checked or unchecked.",
  props: [
    {
      name: "checked",
      type: "boolean | 'indeterminate'",
      description: "The controlled checked state of the item"
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      description: "Event handler called when the checked state changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    }
  ],
  examples: []
}

// Dropdown Menu Radio Group Documentation
export const dropdownMenuRadioGroupDoc: ComponentDoc = {
  name: "DropdownMenuRadioGroup",
  description: "A group of radio items where only one can be checked at a time.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The value of the selected radio item"
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the value changes"
    }
  ],
  examples: []
}

// Dropdown Menu Radio Item Documentation
export const dropdownMenuRadioItemDoc: ComponentDoc = {
  name: "DropdownMenuRadioItem",
  description: "An item that can be controlled as a radio button.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The unique value of the radio item",
      required: true
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    }
  ],
  examples: []
}

// Dropdown Menu Label Documentation
export const dropdownMenuLabelDoc: ComponentDoc = {
  name: "DropdownMenuLabel",
  description: "Used to render a label. It won't be focusable using arrow keys.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "inset",
      type: "boolean",
      default: "false",
      description: "When true, adds left padding to align with other items"
    }
  ],
  examples: []
}

// Dropdown Menu Separator Documentation
export const dropdownMenuSeparatorDoc: ComponentDoc = {
  name: "DropdownMenuSeparator",
  description: "Used to visually separate items in the dropdown menu.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Dropdown Menu Shortcut Documentation
export const dropdownMenuShortcutDoc: ComponentDoc = {
  name: "DropdownMenuShortcut",
  description: "Used to display a keyboard shortcut.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Dropdown Menu Sub Documentation
export const dropdownMenuSubDoc: ComponentDoc = {
  name: "DropdownMenuSub",
  description: "Used to nest submenus.",
  props: [
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "The open state of the submenu when it is initially rendered"
    },
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the submenu"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    }
  ],
  examples: []
}

// Dropdown Menu Sub Trigger Documentation
export const dropdownMenuSubTriggerDoc: ComponentDoc = {
  name: "DropdownMenuSubTrigger",
  description: "An item that opens a submenu.",
  props: [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "inset",
      type: "boolean",
      default: "false",
      description: "When true, adds left padding to align with other items"
    }
  ],
  examples: []
}

// Dropdown Menu Sub Content Documentation
export const dropdownMenuSubContentDoc: ComponentDoc = {
  name: "DropdownMenuSubContent",
  description: "The content of the submenu.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "-5",
      description: "An offset in pixels from the 'start' or 'end' alignment options"
    },
    {
      name: "sideOffset",
      type: "number",
      default: "2",
      description: "The distance in pixels from the trigger"
    }
  ],
  examples: []
}

// Form Documentation
export const formDoc: ComponentDoc = {
  name: "Form",
  description: "Building forms with React Hook Form and Zod validation.",
  props: [
    {
      name: "...props",
      type: "React.FormHTMLAttributes<HTMLFormElement>",
      description: "All standard form element props"
    }
  ],
  examples: []
}

// Form Field Documentation
export const formFieldDoc: ComponentDoc = {
  name: "FormField",
  description: "A form field component that connects inputs to React Hook Form.",
  props: [
    {
      name: "control",
      type: "Control<FieldValues>",
      description: "Control object from useForm hook",
      required: true
    },
    {
      name: "name",
      type: "FieldPath<FieldValues>",
      description: "The name of the field",
      required: true
    },
    {
      name: "render",
      type: "({ field }) => React.ReactElement",
      description: "Render function for the field",
      required: true
    }
  ],
  examples: []
}

// Form Item Documentation
export const formItemDoc: ComponentDoc = {
  name: "FormItem",
  description: "Wraps a form field with proper spacing.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Form Label Documentation
export const formLabelDoc: ComponentDoc = {
  name: "FormLabel",
  description: "A label element for form fields.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "htmlFor",
      type: "string",
      description: "The ID of the form element this label is for"
    }
  ],
  examples: []
}

// Form Control Documentation
export const formControlDoc: ComponentDoc = {
  name: "FormControl",
  description: "Wraps form controls and passes down field props.",
  props: [
    {
      name: "children",
      type: "React.ReactElement",
      description: "The form control element",
      required: true
    }
  ],
  examples: []
}

// Form Description Documentation
export const formDescriptionDoc: ComponentDoc = {
  name: "FormDescription",
  description: "A description or helper text for form fields.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Form Message Documentation
export const formMessageDoc: ComponentDoc = {
  name: "FormMessage",
  description: "Displays validation error messages for form fields.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Hover Card Documentation
export const hoverCardDoc: ComponentDoc = {
  name: "HoverCard",
  description: "For sighted users to preview content available behind a link.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the hover card"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "openDelay",
      type: "number",
      default: "700",
      description: "The duration from when the mouse enters the trigger until the hover card opens"
    },
    {
      name: "closeDelay",
      type: "number",
      default: "300",
      description: "The duration from when the mouse leaves the trigger until the hover card closes"
    }
  ],
  examples: []
}

// Hover Card Trigger Documentation
export const hoverCardTriggerDoc: ComponentDoc = {
  name: "HoverCardTrigger",
  description: "The element that triggers the hover card when hovered.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Hover Card Content Documentation
export const hoverCardContentDoc: ComponentDoc = {
  name: "HoverCardContent",
  description: "The content of the hover card.",
  props: [
    {
      name: "align",
      type: "\"start\" | \"center\" | \"end\"",
      default: "\"center\"",
      description: "The preferred alignment against the trigger"
    },
    {
      name: "side",
      type: "\"top\" | \"right\" | \"bottom\" | \"left\"",
      default: "\"bottom\"",
      description: "The preferred side of the trigger to render against"
    },
    {
      name: "sideOffset",
      type: "number",
      default: "0",
      description: "Distance in pixels from the trigger"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "0",
      description: "An offset in pixels from the alignment option"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "avoidCollisions",
      type: "boolean",
      default: "true",
      description: "When true, repositions the content to avoid colliding with boundary edges"
    }
  ],
  examples: []
}

// Input OTP Documentation
export const inputOTPDoc: ComponentDoc = {
  name: "InputOTP",
  description: "Accessible one-time password component with copy paste functionality.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The controlled value of the OTP input"
    },
    {
      name: "onChange",
      type: "(value: string) => void",
      description: "Event handler called when the value changes"
    },
    {
      name: "maxLength",
      type: "number",
      required: true,
      description: "Maximum number of characters for the OTP"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents user from interacting with the input"
    },
    {
      name: "pattern",
      type: "string",
      description: "Pattern to validate the input against"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Input OTP Group Documentation
export const inputOTPGroupDoc: ComponentDoc = {
  name: "InputOTPGroup",
  description: "Groups input slots together.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Input OTP Slot Documentation
export const inputOTPSlotDoc: ComponentDoc = {
  name: "InputOTPSlot",
  description: "Individual input slot for OTP characters.",
  props: [
    {
      name: "index",
      type: "number",
      required: true,
      description: "Index of the slot in the OTP sequence"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Input OTP Separator Documentation
export const inputOTPSeparatorDoc: ComponentDoc = {
  name: "InputOTPSeparator",
  description: "Visual separator between OTP groups.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Label Documentation
export const labelDoc: ComponentDoc = {
  name: "Label",
  description: "Renders an accessible label associated with controls.",
  props: [
    {
      name: "htmlFor",
      type: "string",
      description: "The id of the form element that the label is associated with"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content of the label",
      required: true
    },
    {
      name: "...props",
      type: "React.LabelHTMLAttributes<HTMLLabelElement>",
      description: "All standard label element props"
    }
  ],
  examples: []
}

// Menubar Documentation
export const menubarDoc: ComponentDoc = {
  name: "Menubar",
  description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "MenubarMenu components",
      required: true
    }
  ],
  examples: []
}

// Menubar Menu Documentation
export const menubarMenuDoc: ComponentDoc = {
  name: "MenubarMenu",
  description: "Contains all the parts of a menu.",
  props: [
    {
      name: "value",
      type: "string",
      description: "The controlled value of the menu"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "MenubarTrigger and MenubarContent",
      required: true
    }
  ],
  examples: []
}

// Menubar Trigger Documentation
export const menubarTriggerDoc: ComponentDoc = {
  name: "MenubarTrigger",
  description: "The button that toggles the menu.",
  props: [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the trigger"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Menubar Content Documentation
export const menubarContentDoc: ComponentDoc = {
  name: "MenubarContent",
  description: "The component that pops out when a menu is open.",
  props: [
    {
      name: "align",
      type: "\"start\" | \"center\" | \"end\"",
      default: "\"start\"",
      description: "The preferred alignment against the trigger"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "-4",
      description: "An offset in pixels from the alignment option"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Menubar Item Documentation
export const menubarItemDoc: ComponentDoc = {
  name: "MenubarItem",
  description: "The component that contains the menu items.",
  props: [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "inset",
      type: "boolean",
      default: "false",
      description: "When true, adds left padding to align with other items"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Navigation Menu Documentation
export const navigationMenuDoc: ComponentDoc = {
  name: "NavigationMenu",
  description: "A collection of links for navigating websites.",
  props: [
    {
      name: "orientation",
      type: "\"horizontal\" | \"vertical\"",
      default: "\"horizontal\"",
      description: "The orientation of the navigation menu"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "NavigationMenuList component",
      required: true
    }
  ],
  examples: []
}

// Navigation Menu List Documentation
export const navigationMenuListDoc: ComponentDoc = {
  name: "NavigationMenuList",
  description: "Contains the navigation items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Navigation Menu Item Documentation
export const navigationMenuItemDoc: ComponentDoc = {
  name: "NavigationMenuItem",
  description: "A navigation menu item.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Navigation Menu Trigger Documentation
export const navigationMenuTriggerDoc: ComponentDoc = {
  name: "NavigationMenuTrigger",
  description: "The button that toggles the content.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Navigation Menu Content Documentation
export const navigationMenuContentDoc: ComponentDoc = {
  name: "NavigationMenuContent",
  description: "The component that pops out when a trigger is activated.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Navigation Menu Link Documentation
export const navigationMenuLinkDoc: ComponentDoc = {
  name: "NavigationMenuLink",
  description: "A navigational link.",
  props: [
    {
      name: "active",
      type: "boolean",
      default: "false",
      description: "When true, applies active state styling"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Pagination Documentation
export const paginationDoc: ComponentDoc = {
  name: "Pagination",
  description: "Pagination with page navigation, next and previous links.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Pagination Content Documentation
export const paginationContentDoc: ComponentDoc = {
  name: "PaginationContent",
  description: "Container for pagination items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Pagination Item Documentation
export const paginationItemDoc: ComponentDoc = {
  name: "PaginationItem",
  description: "Container for individual pagination elements.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Pagination Link Documentation
export const paginationLinkDoc: ComponentDoc = {
  name: "PaginationLink",
  description: "A pagination link.",
  props: [
    {
      name: "isActive",
      type: "boolean",
      default: "false",
      description: "When true, applies active state styling"
    },
    {
      name: "size",
      type: "\"default\" | \"sm\" | \"lg\" | \"icon\"",
      default: "\"icon\"",
      description: "The size of the pagination link"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "href",
      type: "string",
      description: "The URL to navigate to"
    },
    {
      name: "onClick",
      type: "(event: React.MouseEvent) => void",
      description: "Event handler for click events"
    }
  ],
  examples: []
}

// Pagination Previous Documentation
export const paginationPreviousDoc: ComponentDoc = {
  name: "PaginationPrevious",
  description: "Previous page navigation button.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "href",
      type: "string",
      description: "The URL to navigate to"
    },
    {
      name: "onClick",
      type: "(event: React.MouseEvent) => void",
      description: "Event handler for click events"
    }
  ],
  examples: []
}

// Pagination Next Documentation
export const paginationNextDoc: ComponentDoc = {
  name: "PaginationNext",
  description: "Next page navigation button.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "href",
      type: "string",
      description: "The URL to navigate to"
    },
    {
      name: "onClick",
      type: "(event: React.MouseEvent) => void",
      description: "Event handler for click events"
    }
  ],
  examples: []
}

// Pagination Ellipsis Documentation
export const paginationEllipsisDoc: ComponentDoc = {
  name: "PaginationEllipsis",
  description: "Shows an ellipsis for skipped pages.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Popover Documentation
export const popoverDoc: ComponentDoc = {
  name: "Popover",
  description: "Displays rich content in a portal, triggered by a button.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the popover"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "modal",
      type: "boolean",
      default: "false",
      description: "When true, the popover will render in a portal and trap focus"
    }
  ],
  examples: []
}

// Popover Trigger Documentation
export const popoverTriggerDoc: ComponentDoc = {
  name: "PopoverTrigger",
  description: "The element that triggers the popover.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Popover Content Documentation
export const popoverContentDoc: ComponentDoc = {
  name: "PopoverContent",
  description: "The component that pops out when the popover is open.",
  props: [
    {
      name: "align",
      type: "\"start\" | \"center\" | \"end\"",
      default: "\"center\"",
      description: "The preferred alignment against the trigger"
    },
    {
      name: "side",
      type: "\"top\" | \"right\" | \"bottom\" | \"left\"",
      default: "\"bottom\"",
      description: "The preferred side of the trigger to render against"
    },
    {
      name: "sideOffset",
      type: "number",
      default: "0",
      description: "Distance in pixels from the trigger"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "0",
      description: "An offset in pixels from the alignment option"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "avoidCollisions",
      type: "boolean",
      default: "true",
      description: "When true, repositions the content to avoid colliding with boundary edges"
    },
    {
      name: "collisionPadding",
      type: "number | { top?: number; right?: number; bottom?: number; left?: number }",
      default: "0",
      description: "The distance from the boundary edges where collision detection should occur"
    }
  ],
  examples: []
}

// Progress Documentation
export const progressDoc: ComponentDoc = {
  name: "Progress",
  description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  props: [
    {
      name: "value",
      type: "number",
      default: "0",
      description: "The progress value between 0 and 100"
    },
    {
      name: "max",
      type: "number",
      default: "100",
      description: "The maximum progress value"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "getValueLabel",
      type: "(value: number, max: number) => string",
      description: "A function to get the accessible label text representing the current value"
    }
  ],
  examples: []
}

// Resizable Panel Group Documentation
export const resizablePanelGroupDoc: ComponentDoc = {
  name: "ResizablePanelGroup",
  description: "A container for resizable panels.",
  props: [
    {
      name: "direction",
      type: "\"horizontal\" | \"vertical\"",
      required: true,
      description: "The direction of the resizable panels"
    },
    {
      name: "onLayout",
      type: "(sizes: number[]) => void",
      description: "Callback when the layout changes"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Resizable Panel Documentation
export const resizablePanelDoc: ComponentDoc = {
  name: "ResizablePanel",
  description: "A panel that can be resized.",
  props: [
    {
      name: "defaultSize",
      type: "number",
      description: "The default size of the panel as a percentage"
    },
    {
      name: "minSize",
      type: "number",
      description: "The minimum size of the panel as a percentage"
    },
    {
      name: "maxSize",
      type: "number",
      description: "The maximum size of the panel as a percentage"
    },
    {
      name: "collapsible",
      type: "boolean",
      default: "false",
      description: "Whether the panel can be collapsed"
    },
    {
      name: "collapsedSize",
      type: "number",
      description: "The size of the panel when collapsed"
    },
    {
      name: "onResize",
      type: "(size: number) => void",
      description: "Callback when the panel is resized"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Resizable Handle Documentation
export const resizableHandleDoc: ComponentDoc = {
  name: "ResizableHandle",
  description: "A handle that allows resizing panels.",
  props: [
    {
      name: "withHandle",
      type: "boolean",
      default: "false",
      description: "Whether to show a visual handle"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the handle is disabled"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Scroll Area Documentation
export const scrollAreaDoc: ComponentDoc = {
  name: "ScrollArea",
  description: "Augments native scroll functionality for custom, cross-browser styling.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "orientation",
      type: "\"vertical\" | \"horizontal\"",
      default: "\"vertical\"",
      description: "The orientation of the scrollbar"
    },
    {
      name: "scrollHideDelay",
      type: "number",
      default: "600",
      description: "The delay in milliseconds before hiding the scrollbars"
    },
    {
      name: "type",
      type: "\"auto\" | \"always\" | \"scroll\" | \"hover\"",
      default: "\"hover\"",
      description: "Controls when scrollbars are visible"
    },
    {
      name: "dir",
      type: "\"ltr\" | \"rtl\"",
      description: "The reading direction of the scroll area"
    }
  ],
  examples: []
}

// Separator Documentation
export const separatorDoc: ComponentDoc = {
  name: "Separator",
  description: "Visually or semantically separates content.",
  props: [
    {
      name: "orientation",
      type: "\"horizontal\" | \"vertical\"",
      default: "\"horizontal\"",
      description: "The orientation of the separator"
    },
    {
      name: "decorative",
      type: "boolean",
      default: "false",
      description: "When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sheet Documentation
export const sheetDoc: ComponentDoc = {
  name: "Sheet",
  description: "Extends the Dialog component to display content that complements the main content of the screen.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the sheet"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "defaultOpen",
      type: "boolean",
      description: "The open state of the sheet when initially rendered"
    },
    {
      name: "modal",
      type: "boolean",
      default: "true",
      description: "When false, allows interaction with content outside the sheet"
    }
  ],
  examples: []
}

// Sheet Trigger Documentation
export const sheetTriggerDoc: ComponentDoc = {
  name: "SheetTrigger",
  description: "The element that opens the sheet when interacted with.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sheet Content Documentation
export const sheetContentDoc: ComponentDoc = {
  name: "SheetContent",
  description: "The component that contains the sheet's content.",
  props: [
    {
      name: "side",
      type: "\"top\" | \"right\" | \"bottom\" | \"left\"",
      default: "\"right\"",
      description: "The side of the screen from which the sheet will appear"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "onEscapeKeyDown",
      type: "(event: KeyboardEvent) => void",
      description: "Event handler called when the escape key is pressed"
    },
    {
      name: "onPointerDownOutside",
      type: "(event: PointerDownOutsideEvent) => void",
      description: "Event handler called when a pointer event occurs outside the sheet"
    },
    {
      name: "onInteractOutside",
      type: "(event: Event) => void",
      description: "Event handler called when an interaction happens outside the sheet"
    }
  ],
  examples: []
}

// Sheet Header Documentation
export const sheetHeaderDoc: ComponentDoc = {
  name: "SheetHeader",
  description: "The header section of the sheet.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sheet Footer Documentation
export const sheetFooterDoc: ComponentDoc = {
  name: "SheetFooter",
  description: "The footer section of the sheet.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sheet Title Documentation
export const sheetTitleDoc: ComponentDoc = {
  name: "SheetTitle",
  description: "The title of the sheet.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sheet Description Documentation
export const sheetDescriptionDoc: ComponentDoc = {
  name: "SheetDescription",
  description: "The description of the sheet.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sheet Close Documentation
export const sheetCloseDoc: ComponentDoc = {
  name: "SheetClose",
  description: "A button that closes the sheet.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Documentation
export const sidebarDoc: ComponentDoc = {
  name: "Sidebar",
  description: "A sidebar component for navigation and content organization.",
  props: [
    {
      name: "collapsible",
      type: "\"offcanvas\" | \"icon\" | \"none\"",
      default: "\"offcanvas\"",
      description: "The collapsible behavior of the sidebar"
    },
    {
      name: "variant",
      type: "\"sidebar\" | \"floating\" | \"inset\"",
      default: "\"sidebar\"",
      description: "The visual variant of the sidebar"
    },
    {
      name: "side",
      type: "\"left\" | \"right\"",
      default: "\"left\"",
      description: "The side of the screen the sidebar appears on"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Provider Documentation
export const sidebarProviderDoc: ComponentDoc = {
  name: "SidebarProvider",
  description: "Provides context for sidebar components.",
  props: [
    {
      name: "defaultOpen",
      type: "boolean",
      default: "true",
      description: "The default open state of the sidebar"
    },
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the sidebar"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The sidebar and main content"
    }
  ],
  examples: []
}

// Sidebar Trigger Documentation
export const sidebarTriggerDoc: ComponentDoc = {
  name: "SidebarTrigger",
  description: "A button that toggles the sidebar.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "onClick",
      type: "() => void",
      description: "Event handler called when the trigger is clicked"
    }
  ],
  examples: []
}

// Sidebar Content Documentation
export const sidebarContentDoc: ComponentDoc = {
  name: "SidebarContent",
  description: "The scrollable content area of the sidebar.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Header Documentation
export const sidebarHeaderDoc: ComponentDoc = {
  name: "SidebarHeader",
  description: "The header section of the sidebar.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Footer Documentation
export const sidebarFooterDoc: ComponentDoc = {
  name: "SidebarFooter",
  description: "The footer section of the sidebar.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Group Documentation
export const sidebarGroupDoc: ComponentDoc = {
  name: "SidebarGroup",
  description: "Groups related sidebar items together.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Group Label Documentation
export const sidebarGroupLabelDoc: ComponentDoc = {
  name: "SidebarGroupLabel",
  description: "A label for a sidebar group.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    }
  ],
  examples: []
}

// Sidebar Group Content Documentation
export const sidebarGroupContentDoc: ComponentDoc = {
  name: "SidebarGroupContent",
  description: "The content area of a sidebar group.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Menu Documentation
export const sidebarMenuDoc: ComponentDoc = {
  name: "SidebarMenu",
  description: "A menu container for sidebar items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Menu Item Documentation
export const sidebarMenuItemDoc: ComponentDoc = {
  name: "SidebarMenuItem",
  description: "An individual menu item in the sidebar.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Menu Button Documentation
export const sidebarMenuButtonDoc: ComponentDoc = {
  name: "SidebarMenuButton",
  description: "A button within a sidebar menu item.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "isActive",
      type: "boolean",
      default: "false",
      description: "Whether the menu item is currently active"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the button is disabled"
    },
    {
      name: "size",
      type: "\"sm\" | \"default\" | \"lg\"",
      default: "\"default\"",
      description: "The size of the button"
    },
    {
      name: "tooltip",
      type: "string | React.ReactNode",
      description: "Tooltip content to show when sidebar is collapsed"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Menu Sub Documentation
export const sidebarMenuSubDoc: ComponentDoc = {
  name: "SidebarMenuSub",
  description: "A submenu container for nested menu items.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Menu Sub Item Documentation
export const sidebarMenuSubItemDoc: ComponentDoc = {
  name: "SidebarMenuSubItem",
  description: "An individual item within a submenu.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sidebar Menu Sub Button Documentation
export const sidebarMenuSubButtonDoc: ComponentDoc = {
  name: "SidebarMenuSubButton",
  description: "A button within a submenu item.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "isActive",
      type: "boolean",
      default: "false",
      description: "Whether the submenu item is currently active"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Skeleton Documentation
export const skeletonDoc: ComponentDoc = {
  name: "Skeleton",
  description: "Use to show a placeholder while content is loading.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to customize the skeleton's appearance"
    }
  ],
  examples: []
}

// Slider Documentation
export const sliderDoc: ComponentDoc = {
  name: "Slider",
  description: "An input where the user selects a value from within a given range.",
  props: [
    {
      name: "defaultValue",
      type: "number[]",
      description: "The value of the slider when initially rendered"
    },
    {
      name: "value",
      type: "number[]",
      description: "The controlled value of the slider"
    },
    {
      name: "onValueChange",
      type: "(value: number[]) => void",
      description: "Event handler called when the value changes"
    },
    {
      name: "onValueCommit",
      type: "(value: number[]) => void",
      description: "Event handler called when the value changes at the end of an interaction"
    },
    {
      name: "name",
      type: "string",
      description: "The name of the slider for form submission"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the slider"
    },
    {
      name: "orientation",
      type: "\"horizontal\" | \"vertical\"",
      default: "\"horizontal\"",
      description: "The orientation of the slider"
    },
    {
      name: "dir",
      type: "\"ltr\" | \"rtl\"",
      description: "The reading direction of the slider"
    },
    {
      name: "inverted",
      type: "boolean",
      default: "false",
      description: "Whether the slider is visually inverted"
    },
    {
      name: "min",
      type: "number",
      default: "0",
      description: "The minimum value for the range"
    },
    {
      name: "max",
      type: "number",
      default: "100",
      description: "The maximum value for the range"
    },
    {
      name: "step",
      type: "number",
      default: "1",
      description: "The stepping interval"
    },
    {
      name: "minStepsBetweenThumbs",
      type: "number",
      default: "0",
      description: "The minimum permitted steps between multiple thumbs"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Sonner Documentation
export const sonnerDoc: ComponentDoc = {
  name: "Sonner",
  description: "An opinionated toast component for React.",
  props: [
    {
      name: "theme",
      type: "\"light\" | \"dark\" | \"system\"",
      default: "\"system\"",
      description: "Theme for the toasts"
    },
    {
      name: "position",
      type: "\"top-left\" | \"top-center\" | \"top-right\" | \"bottom-left\" | \"bottom-center\" | \"bottom-right\"",
      default: "\"bottom-right\"",
      description: "Position of the toasts on the screen"
    },
    {
      name: "hotkey",
      type: "string[]",
      default: "['altKey', 'KeyT']",
      description: "Keyboard shortcut to open/close toasts"
    },
    {
      name: "richColors",
      type: "boolean",
      default: "false",
      description: "Enable rich colors for different toast types"
    },
    {
      name: "expand",
      type: "boolean",
      default: "false",
      description: "Expand toasts by default"
    },
    {
      name: "duration",
      type: "number",
      default: "4000",
      description: "Duration in milliseconds before toast auto-dismisses"
    },
    {
      name: "visibleToasts",
      type: "number",
      default: "3",
      description: "Maximum number of toasts visible at once"
    },
    {
      name: "closeButton",
      type: "boolean",
      default: "false",
      description: "Show close button on toasts"
    },
    {
      name: "toastOptions",
      type: "ToastOptions",
      description: "Default options for all toasts"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "style",
      type: "React.CSSProperties",
      description: "Inline styles for the toast container"
    },
    {
      name: "offset",
      type: "string | number",
      description: "Offset from the edge of the screen"
    }
  ],
  examples: []
}

// Table Documentation
export const tableDoc: ComponentDoc = {
  name: "Table",
  description: "A responsive table component.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the table"
    }
  ],
  examples: []
}

// Table Header Documentation
export const tableHeaderDoc: ComponentDoc = {
  name: "TableHeader",
  description: "The header section of the table.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Table Body Documentation
export const tableBodyDoc: ComponentDoc = {
  name: "TableBody",
  description: "The body section of the table.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Table Footer Documentation
export const tableFooterDoc: ComponentDoc = {
  name: "TableFooter",
  description: "The footer section of the table.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Table Row Documentation
export const tableRowDoc: ComponentDoc = {
  name: "TableRow",
  description: "A row in the table.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Table Head Documentation
export const tableHeadDoc: ComponentDoc = {
  name: "TableHead",
  description: "A header cell in the table.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "colSpan",
      type: "number",
      description: "Number of columns the cell should span"
    },
    {
      name: "rowSpan",
      type: "number",
      description: "Number of rows the cell should span"
    }
  ],
  examples: []
}

// Table Cell Documentation
export const tableCellDoc: ComponentDoc = {
  name: "TableCell",
  description: "A data cell in the table.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "colSpan",
      type: "number",
      description: "Number of columns the cell should span"
    },
    {
      name: "rowSpan",
      type: "number",
      description: "Number of rows the cell should span"
    }
  ],
  examples: []
}

// Table Caption Documentation
export const tableCaptionDoc: ComponentDoc = {
  name: "TableCaption",
  description: "A caption for the table, typically displayed at the bottom.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Tabs Documentation
export const tabsDoc: ComponentDoc = {
  name: "Tabs",
  description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  props: [
    {
      name: "defaultValue",
      type: "string",
      description: "The value of the tab that should be active when initially rendered"
    },
    {
      name: "value",
      type: "string",
      description: "The controlled value of the tab to activate"
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Event handler called when the value changes"
    },
    {
      name: "orientation",
      type: "\"horizontal\" | \"vertical\"",
      default: "\"horizontal\"",
      description: "The orientation of the component"
    },
    {
      name: "dir",
      type: "\"ltr\" | \"rtl\"",
      description: "The reading direction of the tabs"
    },
    {
      name: "activationMode",
      type: "\"automatic\" | \"manual\"",
      default: "\"automatic\"",
      description: "Whether tabs are activated automatically or manually"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Tabs List Documentation
export const tabsListDoc: ComponentDoc = {
  name: "TabsList",
  description: "Contains the tabs that are aligned along the edge of the active tab panel.",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    },
    {
      name: "loop",
      type: "boolean",
      default: "true",
      description: "When true, keyboard navigation will loop from last tab to first, and vice versa"
    }
  ],
  examples: []
}

// Tabs Trigger Documentation
export const tabsTriggerDoc: ComponentDoc = {
  name: "TabsTrigger",
  description: "The button that activates its associated tab panel.",
  props: [
    {
      name: "value",
      type: "string",
      required: true,
      description: "A unique value that associates the trigger with a content"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the tab"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Tabs Content Documentation
export const tabsContentDoc: ComponentDoc = {
  name: "TabsContent",
  description: "Contains the content associated with each trigger.",
  props: [
    {
      name: "value",
      type: "string",
      required: true,
      description: "A unique value that associates the content with a trigger"
    },
    {
      name: "forceMount",
      type: "boolean",
      description: "Used to force mounting when more control is needed"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply"
    }
  ],
  examples: []
}

// Tooltip Documentation
export const tooltipDoc: ComponentDoc = {
  name: "Tooltip",
  description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "The controlled open state of the tooltip"
    },
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "The open state of the tooltip when it is initially rendered (uncontrolled)"
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Event handler called when the open state changes"
    },
    {
      name: "delayDuration",
      type: "number",
      default: "700",
      description: "The duration from when the trigger is hovered until the tooltip opens"
    },
    {
      name: "disableHoverableContent",
      type: "boolean",
      default: "false",
      description: "When true, trying to hover the content will result in the tooltip closing"
    }
  ],
  examples: []
}

// Tooltip Provider Documentation
export const tooltipProviderDoc: ComponentDoc = {
  name: "TooltipProvider",
  description: "Wraps your app to provide global tooltip functionality.",
  props: [
    {
      name: "delayDuration",
      type: "number",
      default: "700",
      description: "The duration from when the trigger is hovered until the tooltip opens"
    },
    {
      name: "skipDelayDuration",
      type: "number",
      default: "300",
      description: "How much time a user has to enter another trigger without incurring a delay again"
    },
    {
      name: "disableHoverableContent",
      type: "boolean",
      default: "false",
      description: "When true, trying to hover the content will result in the tooltip closing"
    }
  ],
  examples: []
}

// Tooltip Trigger Documentation
export const tooltipTriggerDoc: ComponentDoc = {
  name: "TooltipTrigger",
  description: "The element that triggers the tooltip.",
  props: [
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    }
  ],
  examples: []
}

// Tooltip Content Documentation
export const tooltipContentDoc: ComponentDoc = {
  name: "TooltipContent",
  description: "The component that pops out when the tooltip is open.",
  props: [
    {
      name: "side",
      type: "top | right | bottom | left",
      default: "top",
      description: "The preferred side of the trigger to render against"
    },
    {
      name: "sideOffset",
      type: "number",
      default: "0",
      description: "The distance in pixels from the trigger"
    },
    {
      name: "align",
      type: "start | center | end",
      default: "center",
      description: "The preferred alignment against the trigger"
    },
    {
      name: "alignOffset",
      type: "number",
      default: "0",
      description: "An offset in pixels from the \"start\" or \"end\" alignment options"
    },
    {
      name: "avoidCollisions",
      type: "boolean",
      default: "true",
      description: "When true, overrides the side and align preferences to prevent collisions"
    },
    {
      name: "collisionBoundary",
      type: "Element | null | Element[]",
      default: "[]",
      description: "The element used as the collision boundary"
    },
    {
      name: "collisionPadding",
      type: "number | Partial<Record<Side, number>>",
      default: "0",
      description: "The distance in pixels from the boundary edges where collision detection should occur"
    },
    {
      name: "arrowPadding",
      type: "number",
      default: "0",
      description: "The padding between the arrow and the edges of the content"
    },
    {
      name: "sticky",
      type: "partial | always",
      default: "partial",
      description: "The sticky behavior on the align axis"
    },
    {
      name: "hideWhenDetached",
      type: "boolean",
      default: "false",
      description: "Whether to hide the content when the trigger becomes fully occluded"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the tooltip content"
    }
  ],
  examples: []
}

// Toggle Group Documentation
export const toggleGroupDoc: ComponentDoc = {
  name: "ToggleGroup",
  description: "A set of two-state buttons that can be toggled on or off.",
  props: [
    {
      name: "type",
      type: "single | multiple",
      required: true,
      description: "Determines whether a single or multiple items can be pressed at a time"
    },
    {
      name: "value",
      type: "string | string[]",
      description: "The controlled value of the pressed items (string for single, string[] for multiple)"
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      description: "The value of the items that should be pressed when initially rendered (uncontrolled)"
    },
    {
      name: "onValueChange",
      type: "(value: string | string[]) => void",
      description: "Event handler called when the pressed items change"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with toggle group items"
    },
    {
      name: "rovingFocus",
      type: "boolean",
      default: "true",
      description: "When false, navigating through items using arrow keys will be disabled"
    },
    {
      name: "orientation",
      type: "horizontal | vertical",
      default: "horizontal",
      description: "The orientation of the toggle group"
    },
    {
      name: "variant",
      type: "default | outline",
      default: "default",
      description: "The visual style variant of the toggle group"
    },
    {
      name: "size",
      type: "default | sm | lg",
      default: "default",
      description: "The size of the toggle group"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the toggle group"
    }
  ],
  examples: []
}

// Toggle Group Item Documentation
export const toggleGroupItemDoc: ComponentDoc = {
  name: "ToggleGroupItem",
  description: "An item in the toggle group.",
  props: [
    {
      name: "value",
      type: "string",
      required: true,
      description: "A unique value for the item"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the item"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the item"
    }
  ],
  examples: []
}

// Toggle Documentation
export const toggleDoc: ComponentDoc = {
  name: "Toggle",
  description: "A two-state button that can be either on or off.",
  props: [
    {
      name: "pressed",
      type: "boolean",
      description: "The controlled pressed state of the toggle"
    },
    {
      name: "defaultPressed",
      type: "boolean",
      default: "false",
      description: "The pressed state when initially rendered (uncontrolled)"
    },
    {
      name: "onPressedChange",
      type: "(pressed: boolean) => void",
      description: "Event handler called when the pressed state changes"
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, prevents the user from interacting with the toggle"
    },
    {
      name: "variant",
      type: "default | outline",
      default: "default",
      description: "The visual style variant of the toggle"
    },
    {
      name: "size",
      type: "default | sm | lg",
      default: "default",
      description: "The size of the toggle"
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child"
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the toggle"
    }
  ],
  examples: []
}

// Map of all component docs
export const componentDocs: Record<string, ComponentDoc> = {
  accordion: accordionDoc,
  "accordion-item": accordionItemDoc,
  "accordion-trigger": accordionTriggerDoc,
  "accordion-content": accordionContentDoc,
  button: buttonDoc,
  card: cardDoc,
  input: inputDoc,
  badge: badgeDoc,
  select: selectDoc,
  checkbox: checkboxDoc,
  switch: switchDoc,
  textarea: textareaDoc,
  "radio-group": radioGroupDoc,
  alert: alertDoc,
  "alert-dialog": alertDialogDoc,
  "aspect-ratio": aspectRatioDoc,
  avatar: avatarDoc,
  breadcrumb: breadcrumbDoc,
  calendar: calendarDoc,
  carousel: carouselDoc,
  chart: chartDoc,
  collapsible: collapsibleDoc,
  command: commandDoc,
  "context-menu": contextMenuDoc,
  dialog: dialogDoc,
  drawer: drawerDoc,
  "dropdown-menu": dropdownMenuDoc,
  form: formDoc,
  "hover-card": hoverCardDoc,
  "input-otp": inputOTPDoc,
  label: labelDoc,
  menubar: menubarDoc,
  "navigation-menu": navigationMenuDoc,
  pagination: paginationDoc,
  popover: popoverDoc,
  progress: progressDoc,
  resizable: resizablePanelGroupDoc,
  "scroll-area": scrollAreaDoc,
  separator: separatorDoc,
  sheet: sheetDoc,
  "sheet-trigger": sheetTriggerDoc,
  "sheet-content": sheetContentDoc,
  "sheet-header": sheetHeaderDoc,
  "sheet-footer": sheetFooterDoc,
  "sheet-title": sheetTitleDoc,
  "sheet-description": sheetDescriptionDoc,
  "sheet-close": sheetCloseDoc,
  sidebar: sidebarDoc,
  "sidebar-provider": sidebarProviderDoc,
  "sidebar-trigger": sidebarTriggerDoc,
  "sidebar-content": sidebarContentDoc,
  "sidebar-header": sidebarHeaderDoc,
  "sidebar-footer": sidebarFooterDoc,
  "sidebar-group": sidebarGroupDoc,
  "sidebar-group-label": sidebarGroupLabelDoc,
  "sidebar-group-content": sidebarGroupContentDoc,
  "sidebar-menu": sidebarMenuDoc,
  "sidebar-menu-item": sidebarMenuItemDoc,
  "sidebar-menu-button": sidebarMenuButtonDoc,
  "sidebar-menu-sub": sidebarMenuSubDoc,
  "sidebar-menu-sub-item": sidebarMenuSubItemDoc,
  "sidebar-menu-sub-button": sidebarMenuSubButtonDoc,
  skeleton: skeletonDoc,
  slider: sliderDoc,
  sonner: sonnerDoc,
  table: tableDoc,
  "table-header": tableHeaderDoc,
  "table-body": tableBodyDoc,
  "table-footer": tableFooterDoc,
  "table-row": tableRowDoc,
  "table-head": tableHeadDoc,
  "table-cell": tableCellDoc,
  "table-caption": tableCaptionDoc,
  tabs: tabsDoc,
  "tabs-list": tabsListDoc,
  "tabs-trigger": tabsTriggerDoc,
  "tabs-content": tabsContentDoc,
  toggle: toggleDoc,
  "toggle-group": toggleGroupDoc,
  "toggle-group-item": toggleGroupItemDoc,
  tooltip: tooltipDoc,
  "tooltip-provider": tooltipProviderDoc,
  "tooltip-trigger": tooltipTriggerDoc,
  "tooltip-content": tooltipContentDoc,
  // Add more components here
}