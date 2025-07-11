"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const inputExamples: ComponentExample[] = [
  {
    title: "Basic Input",
    description: "A simple input field with label.",
    code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`,
    component: () => (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    )
  },
  {
    title: "Input Types",
    description: "Input supports all HTML input types.",
    code: `<div className="space-y-4">
  <Input type="text" placeholder="Text input" />
  <Input type="email" placeholder="Email input" />
  <Input type="password" placeholder="Password input" />
  <Input type="number" placeholder="Number input" />
  <Input type="search" placeholder="Search input" />
  <Input type="tel" placeholder="Phone input" />
  <Input type="url" placeholder="URL input" />
  <Input type="date" />
  <Input type="time" />
</div>`,
    component: () => (
      <div className="space-y-4 w-full max-w-sm">
        <Input type="text" placeholder="Text input" />
        <Input type="email" placeholder="Email input" />
        <Input type="password" placeholder="Password input" />
        <Input type="number" placeholder="Number input" />
        <Input type="search" placeholder="Search input" />
        <Input type="tel" placeholder="Phone input" />
        <Input type="url" placeholder="URL input" />
        <Input type="date" />
        <Input type="time" />
      </div>
    )
  },
  {
    title: "Disabled State",
    description: "Input can be disabled to prevent user interaction.",
    code: `<div className="space-y-4">
  <Input disabled type="email" placeholder="Disabled input" />
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="disabled">Disabled with Label</Label>
    <Input disabled type="text" id="disabled" placeholder="Can't type here" />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4 w-full max-w-sm">
        <Input disabled type="email" placeholder="Disabled input" />
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="disabled">Disabled with Label</Label>
          <Input disabled type="text" id="disabled" placeholder="Can't type here" />
        </div>
      </div>
    )
  },
  {
    title: "With Default Value",
    description: "Input can have a default value for uncontrolled components.",
    code: `<div className="space-y-4">
  <Input type="text" defaultValue="Default text" />
  <Input type="email" defaultValue="john@example.com" />
</div>`,
    component: () => (
      <div className="space-y-4 w-full max-w-sm">
        <Input type="text" defaultValue="Default text" />
        <Input type="email" defaultValue="john@example.com" />
      </div>
    )
  },
  {
    title: "Controlled Input",
    description: "Input can be controlled with React state.",
    code: `const [value, setValue] = useState("")

return (
  <div className="space-y-2">
    <Input
      type="text"
      placeholder="Type something..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <p className="text-sm text-muted-foreground">
      You typed: {value}
    </p>
  </div>
)`,
    component: () => {
      const [value, setValue] = useState("")
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Input
            type="text"
            placeholder="Type something..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p className="text-sm text-muted-foreground">
            You typed: {value}
          </p>
        </div>
      )
    }
  },
  {
    title: "Form Example",
    description: "Complete form example with multiple inputs.",
    code: `<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="johndoe" required />
  </div>
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="john@example.com" required />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" required />
  </div>
  <div className="space-y-2">
    <Label htmlFor="bio">Bio</Label>
    <Input id="bio" placeholder="Tell us about yourself" />
  </div>
</form>`,
    component: () => (
      <form className="space-y-4 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="johndoe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="form-email">Email</Label>
          <Input id="form-email" type="email" placeholder="john@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="form-password">Password</Label>
          <Input id="form-password" type="password" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" placeholder="Tell us about yourself" />
        </div>
      </form>
    )
  },
  {
    title: "With File Input",
    description: "File input styling.",
    code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`,
    component: () => (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    )
  },
  {
    title: "With Autocomplete",
    description: "Input with autocomplete attributes for better UX.",
    code: `<form className="space-y-4">
  <Input
    type="text"
    placeholder="Full name"
    autoComplete="name"
  />
  <Input
    type="email"
    placeholder="Email address"
    autoComplete="email"
  />
  <Input
    type="tel"
    placeholder="Phone number"
    autoComplete="tel"
  />
</form>`,
    component: () => (
      <form className="space-y-4 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="Full name"
          autoComplete="name"
        />
        <Input
          type="email"
          placeholder="Email address"
          autoComplete="email"
        />
        <Input
          type="tel"
          placeholder="Phone number"
          autoComplete="tel"
        />
      </form>
    )
  },
  {
    title: "Error State",
    description: "Input with error state showing destructive border and focus ring.",
    code: `<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="error-email">Email</Label>
    <Input 
      id="error-email" 
      type="email" 
      placeholder="john@example.com"
      aria-invalid="true"
      aria-describedby="error-email-message"
    />
    <p id="error-email-message" className="text-sm text-destructive">
      Please enter a valid email address
    </p>
  </div>
  <div className="space-y-2">
    <Label htmlFor="error-password">Password</Label>
    <Input 
      id="error-password" 
      type="password" 
      aria-invalid="true"
      aria-describedby="error-password-message"
    />
    <p id="error-password-message" className="text-sm text-destructive">
      Password must be at least 8 characters
    </p>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4 w-full max-w-sm">
        <div className="space-y-2">
          <Label htmlFor="error-email">Email</Label>
          <Input 
            id="error-email" 
            type="email" 
            placeholder="john@example.com"
            aria-invalid="true"
            aria-describedby="error-email-message"
          />
          <p id="error-email-message" className="text-sm text-destructive">
            Please enter a valid email address
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="error-password">Password</Label>
          <Input 
            id="error-password" 
            type="password" 
            aria-invalid="true"
            aria-describedby="error-password-message"
          />
          <p id="error-password-message" className="text-sm text-destructive">
            Password must be at least 8 characters
          </p>
        </div>
      </div>
    )
  }
]