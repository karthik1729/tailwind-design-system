"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function SelectExample() {
  const [selectValue, setSelectValue] = useState("")

  return (
    <PreviewContainer
      title="Select"
      description="Dropdown selection component for choosing from a list of options"
      component={
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="default-select">Default Select</Label>
            <Select value={selectValue} onValueChange={setSelectValue}>
              <SelectTrigger id="default-select">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
                <SelectItem value="option4">Option 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="fruits-select">Fruits Selection</Label>
            <Select>
              <SelectTrigger id="fruits-select">
                <SelectValue placeholder="Choose your favorite fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">🍎 Apple</SelectItem>
                <SelectItem value="banana">🍌 Banana</SelectItem>
                <SelectItem value="orange">🍊 Orange</SelectItem>
                <SelectItem value="grape">🍇 Grape</SelectItem>
                <SelectItem value="strawberry">🍓 Strawberry</SelectItem>
                <SelectItem value="pineapple">🍍 Pineapple</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="disabled-select">Disabled Select</Label>
            <Select disabled>
              <SelectTrigger id="disabled-select">
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="countries-select">Countries</Label>
            <Select>
              <SelectTrigger id="countries-select">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">🇺🇸 United States</SelectItem>
                <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                <SelectItem value="ca">🇨🇦 Canada</SelectItem>
                <SelectItem value="de">🇩🇪 Germany</SelectItem>
                <SelectItem value="fr">🇫🇷 France</SelectItem>
                <SelectItem value="jp">🇯🇵 Japan</SelectItem>
                <SelectItem value="au">🇦🇺 Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      }
      code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function SelectExample() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-2">
      <Label htmlFor="select">Select Option</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger id="select">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4">Option 4</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}`}
    />
  )
}