"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function RadioGroupExample() {
  const [radioValue, setRadioValue] = useState("option1")

  return (
    <PreviewContainer
      title="Radio Group"
      description="Radio button group for single selection from multiple options"
      component={
        <div className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Choose your plan</Label>
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1">Free plan</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2">Pro plan</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="option3" />
                <Label htmlFor="option3">Enterprise plan</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-3">
            <Label className="text-sm font-medium">Notification preferences</Label>
            <RadioGroup defaultValue="email">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">Email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sms" id="sms" />
                <Label htmlFor="sms">SMS notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="push" id="push" />
                <Label htmlFor="push">Push notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">No notifications</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-3">
            <Label className="text-sm font-medium">Disabled options</Label>
            <RadioGroup defaultValue="available">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="available" id="available" />
                <Label htmlFor="available">Available option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled" id="disabled" disabled />
                <Label htmlFor="disabled" className="text-muted-foreground">
                  Disabled option
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="another" id="another" />
                <Label htmlFor="another">Another option</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      }
      code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupExample() {
  const [value, setValue] = useState("option1")

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Choose your plan</Label>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Free plan</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Pro plan</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <Label htmlFor="option3">Enterprise plan</Label>
        </div>
      </RadioGroup>
    </div>
  )
}`}
    />
  )
}