"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function InputExample() {
  const [inputValue, setInputValue] = useState("")

  return (
    <PreviewContainer
      title="Input"
      description="Basic input field with different states and variations"
      component={
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="default-input">Default Input</Label>
            <Input
              id="default-input"
              type="text"
              placeholder="Enter text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="disabled-input">Disabled Input</Label>
            <Input
              id="disabled-input"
              type="text"
              placeholder="Disabled input"
              disabled
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email-input">Email Input</Label>
            <Input
              id="email-input"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password-input">Password Input</Label>
            <Input
              id="password-input"
              type="password"
              placeholder="Enter password"
            />
          </div>
        </div>
      }
      code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputExample() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-2">
      <Label htmlFor="input">Default Input</Label>
      <Input
        id="input"
        type="text"
        placeholder="Enter text..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}`}
    />
  )
}