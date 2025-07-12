"use client"

import { useState } from "react"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export default function FormsPage() {
  const [inputValue, setInputValue] = useState("")
  const [textareaValue, setTextareaValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Form Elements
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive collection of form components with various states and configurations
          </p>
        </div>

        {/* Input Component */}
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

        {/* Textarea Component */}
        <PreviewContainer
          title="Textarea"
          description="Multi-line text input for longer content"
          component={
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-textarea">Default Textarea</Label>
                <Textarea
                  id="default-textarea"
                  placeholder="Type your message here..."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
                <Textarea
                  id="disabled-textarea"
                  placeholder="Disabled textarea"
                  disabled
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="custom-textarea">Custom Rows Textarea</Label>
                <Textarea
                  id="custom-textarea"
                  placeholder="With custom row count..."
                  rows={6}
                />
              </div>
            </div>
          }
          code={`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TextareaExample() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-2">
      <Label htmlFor="textarea">Default Textarea</Label>
      <Textarea
        id="textarea"
        placeholder="Type your message here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}`}
        />

        {/* Select Component */}
        <PreviewContainer
          title="Select"
          description="Dropdown selection component with search functionality"
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
                <Label htmlFor="disabled-select">Disabled Select</Label>
                <Select disabled>
                  <SelectTrigger id="disabled-select">
                    <SelectValue placeholder="Disabled select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="grouped-select">Grouped Select</Label>
                <Select>
                  <SelectTrigger id="grouped-select">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="grape">Grape</SelectItem>
                    <SelectItem value="watermelon">Watermelon</SelectItem>
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
      <Label htmlFor="select">Default Select</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger id="select">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}`}
        />

        {/* Checkbox Component */}
        <PreviewContainer
          title="Checkbox"
          description="Checkbox input for boolean values and multiple selections"
          component={
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="default-checkbox"
                  checked={checkboxChecked}
                  onCheckedChange={setCheckboxChecked}
                />
                <Label htmlFor="default-checkbox">
                  Accept terms and conditions
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checkbox" disabled />
                <Label htmlFor="disabled-checkbox" className="text-muted-foreground">
                  Disabled checkbox
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="checked-disabled" disabled checked />
                <Label htmlFor="checked-disabled" className="text-muted-foreground">
                  Checked and disabled
                </Label>
              </div>
              
              <div className="space-y-2">
                <Label>Multiple checkboxes</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option-1" />
                    <Label htmlFor="option-1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option-2" />
                    <Label htmlFor="option-2">Option 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option-3" />
                    <Label htmlFor="option-3">Option 3</Label>
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
    <div className="flex items-center space-x-2">
      <Checkbox
        id="checkbox"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Label htmlFor="checkbox">
        Accept terms and conditions
      </Label>
    </div>
  )
}`}
        />

        {/* Radio Group Component */}
        <PreviewContainer
          title="Radio Group"
          description="Radio buttons for single selection from multiple options"
          component={
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select an option</Label>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="radio-1" />
                    <Label htmlFor="radio-1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="radio-2" />
                    <Label htmlFor="radio-2">Option 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="radio-3" />
                    <Label htmlFor="radio-3">Option 3</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Disabled Radio Group</Label>
                <RadioGroup disabled defaultValue="option1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="radio-disabled-1" />
                    <Label htmlFor="radio-disabled-1" className="text-muted-foreground">
                      Disabled Option 1
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="radio-disabled-2" />
                    <Label htmlFor="radio-disabled-2" className="text-muted-foreground">
                      Disabled Option 2
                    </Label>
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
    <div className="space-y-2">
      <Label>Select an option</Label>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="radio-1" />
          <Label htmlFor="radio-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="radio-2" />
          <Label htmlFor="radio-2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="radio-3" />
          <Label htmlFor="radio-3">Option 3</Label>
        </div>
      </RadioGroup>
    </div>
  )
}`}
        />

        {/* Switch Component */}
        <PreviewContainer
          title="Switch"
          description="Toggle switch for on/off states"
          component={
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="default-switch"
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                />
                <Label htmlFor="default-switch">Enable notifications</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="disabled-switch" disabled />
                <Label htmlFor="disabled-switch" className="text-muted-foreground">
                  Disabled switch
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="checked-disabled-switch" disabled checked />
                <Label htmlFor="checked-disabled-switch" className="text-muted-foreground">
                  Checked and disabled
                </Label>
              </div>
              
              <div className="space-y-4">
                <Label>Multiple switches</Label>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="switch-1">Marketing emails</Label>
                    <Switch id="switch-1" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="switch-2">Security alerts</Label>
                    <Switch id="switch-2" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="switch-3">Newsletter</Label>
                    <Switch id="switch-3" />
                  </div>
                </div>
              </div>
            </div>
          }
          code={`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SwitchExample() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="switch"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Label htmlFor="switch">Enable notifications</Label>
    </div>
  )
}`}
        />

        {/* Slider Component */}
        <PreviewContainer
          title="Slider"
          description="Range slider for selecting numeric values"
          component={
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Default Slider</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Value: {sliderValue[0]}
                </p>
              </div>
              
              <div className="space-y-2">
                <Label>Disabled Slider</Label>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  disabled
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Custom Range Slider</Label>
                <Slider
                  defaultValue={[25]}
                  max={200}
                  min={0}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Range: 0 - 200, Step: 5
                </p>
              </div>
              
              <div className="space-y-2">
                <Label>Multiple Values Slider</Label>
                <Slider
                  defaultValue={[25, 75]}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Range selection
                </p>
              </div>
            </div>
          }
          code={`import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export function SliderExample() {
  const [value, setValue] = useState([50])

  return (
    <div className="space-y-2">
      <Label>Default Slider</Label>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="w-full"
      />
      <p className="text-sm text-muted-foreground">
        Value: {value[0]}
      </p>
    </div>
  )
}`}
        />
    </div>
  )
}