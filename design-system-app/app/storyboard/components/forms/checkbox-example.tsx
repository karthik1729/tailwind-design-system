"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function CheckboxExample() {
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false)

  return (
    <PreviewContainer
      title="Checkbox"
      description="Checkbox component with various states and configurations"
      component={
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={checkboxChecked}
              onCheckedChange={(checked) => setCheckboxChecked(checked === true)}
            />
            <Label 
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" defaultChecked />
            <Label 
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subscribe to newsletter
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label 
              htmlFor="disabled"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled checkbox
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label 
              htmlFor="disabled-checked"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled and checked
            </Label>
          </div>
          
          <div className="space-y-3">
            <Label className="text-sm font-medium">Multiple Options</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-option1" />
                <Label htmlFor="checkbox-option1" className="text-sm">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-option2" />
                <Label htmlFor="checkbox-option2" className="text-sm">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-option3" />
                <Label htmlFor="checkbox-option3" className="text-sm">Option 3</Label>
              </div>
            </div>
          </div>
        </div>
      }
      code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxExample() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-4">
      {/* Basic checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label 
          htmlFor="terms"
          className="text-sm font-medium leading-none"
        >
          Accept terms and conditions
        </Label>
      </div>

      {/* Multiple checkboxes */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="checkbox-code-option1" />
          <Label htmlFor="checkbox-code-option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="checkbox-code-option2" />
          <Label htmlFor="checkbox-code-option2">Option 2</Label>
        </div>
      </div>
    </div>
  )
}`}
    />
  )
}