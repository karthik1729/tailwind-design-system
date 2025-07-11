"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ComponentExample } from "@/lib/component-docs"

export const labelExamples: ComponentExample[] = [
  {
    title: "Basic Label",
    description: "A simple label for form elements.",
    code: `<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Enter your email" />
</div>`,
    component: () => (
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </div>
    )
  },
  {
    title: "Label with Required Indicator",
    description: "Label showing a required field indicator.",
    code: `<div className="space-y-2">
  <Label htmlFor="name">
    Name <span className="text-red-500">*</span>
  </Label>
  <Input id="name" placeholder="Enter your name" required />
</div>`,
    component: () => (
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" placeholder="Enter your name" required />
      </div>
    )
  },
  {
    title: "Label with Helper Text",
    description: "Label with additional helper information.",
    code: `<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Choose a username" />
  <p className="text-sm text-muted-foreground">
    This will be your public display name.
  </p>
</div>`,
    component: () => (
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Choose a username" />
        <p className="text-sm text-muted-foreground">
          This will be your public display name.
        </p>
      </div>
    )
  },
  {
    title: "Label with Checkbox",
    description: "Label used with checkbox component.",
    code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label 
    htmlFor="terms" 
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </Label>
</div>`,
    component: () => (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label 
          htmlFor="terms" 
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
    )
  },
  {
    title: "Label with Radio Group",
    description: "Labels used within radio group options.",
    code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Default option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Comfortable option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Compact option</Label>
  </div>
</RadioGroup>`,
    component: () => (
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Default option</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Comfortable option</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Compact option</Label>
        </div>
      </RadioGroup>
    )
  },
  {
    title: "Label with Switch",
    description: "Label used with switch component.",
    code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
    component: () => (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    )
  },
  {
    title: "Label with Textarea",
    description: "Label for textarea elements.",
    code: `<div className="space-y-2">
  <Label htmlFor="message">Your message</Label>
  <Textarea
    id="message"
    placeholder="Type your message here..."
    rows={4}
  />
</div>`,
    component: () => (
      <div className="space-y-2">
        <Label htmlFor="message">Your message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          rows={4}
        />
      </div>
    )
  },
  {
    title: "Disabled Label",
    description: "Label styling for disabled form elements.",
    code: `<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="disabled-input" className="opacity-70">
      Disabled field
    </Label>
    <Input id="disabled-input" disabled placeholder="This field is disabled" />
  </div>
  
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checkbox" disabled />
    <Label htmlFor="disabled-checkbox" className="opacity-70 cursor-not-allowed">
      Disabled option
    </Label>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="disabled-input" className="opacity-70">
            Disabled field
          </Label>
          <Input id="disabled-input" disabled placeholder="This field is disabled" />
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-checkbox" disabled />
          <Label htmlFor="disabled-checkbox" className="opacity-70 cursor-not-allowed">
            Disabled option
          </Label>
        </div>
      </div>
    )
  }
]