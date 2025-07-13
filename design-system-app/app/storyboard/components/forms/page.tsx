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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function FormsPage() {
  const [inputValue, setInputValue] = useState("")
  const [textareaValue, setTextareaValue] = useState("")
  const [charCountValue, setCharCountValue] = useState("")
  const [autoResizeValue, setAutoResizeValue] = useState("")
  const [combinedValue, setCombinedValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [otpValue, setOtpValue] = useState("")

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
          description="Multi-line text input with auto-resize and character count features"
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
                <Label htmlFor="auto-resize-textarea">Auto-resize Textarea</Label>
                <Textarea
                  id="auto-resize-textarea"
                  placeholder="This textarea will grow as you type..."
                  value={autoResizeValue}
                  onChange={(e) => setAutoResizeValue(e.target.value)}
                  autoResize
                  minRows={2}
                  maxRows={8}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="character-count-textarea">With Character Count</Label>
                <Textarea
                  id="character-count-textarea"
                  placeholder="Type up to 100 characters..."
                  value={charCountValue}
                  onChange={(e) => setCharCountValue(e.target.value)}
                  showCharacterCount
                  maxLength={100}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="combined-textarea">Auto-resize with Character Count</Label>
                <Textarea
                  id="combined-textarea"
                  placeholder="This combines both features..."
                  value={combinedValue}
                  onChange={(e) => setCombinedValue(e.target.value)}
                  autoResize
                  showCharacterCount
                  maxLength={200}
                  minRows={3}
                  maxRows={6}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
                <Textarea
                  id="disabled-textarea"
                  placeholder="Disabled textarea"
                  disabled
                  defaultValue="This textarea is disabled and cannot be edited."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="custom-textarea">Fixed Rows Textarea</Label>
                <Textarea
                  id="custom-textarea"
                  placeholder="With fixed row count..."
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
    <div className="space-y-4">
      {/* Basic usage */}
      <div className="space-y-2">
        <Label htmlFor="textarea">Default Textarea</Label>
        <Textarea
          id="textarea"
          placeholder="Type your message here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {/* Auto-resize */}
      <div className="space-y-2">
        <Label htmlFor="auto-resize">Auto-resize Textarea</Label>
        <Textarea
          id="auto-resize"
          placeholder="This textarea will grow as you type..."
          autoResize
          minRows={2}
          maxRows={8}
        />
      </div>

      {/* Character count */}
      <div className="space-y-2">
        <Label htmlFor="char-count">With Character Count</Label>
        <Textarea
          id="char-count"
          placeholder="Type up to 100 characters..."
          showCharacterCount
          maxLength={100}
        />
      </div>

      {/* Combined features */}
      <div className="space-y-2">
        <Label htmlFor="combined">Auto-resize with Character Count</Label>
        <Textarea
          id="combined"
          placeholder="This combines both features..."
          autoResize
          showCharacterCount
          maxLength={200}
          minRows={3}
          maxRows={6}
        />
      </div>
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
          description="Enhanced range slider with smooth track interactions and visual feedback"
          component={
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Interactive Slider</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Value: {sliderValue[0]}</span>
                  <span className="text-xs">Try hovering and dragging the thumb</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Precise Control Slider</Label>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Step increments of 5 for precise control
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Wide Range Slider</Label>
                <Slider
                  defaultValue={[250]}
                  max={1000}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Range: 0 - 1000, Step: 10
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Range Selection Slider</Label>
                <Slider
                  defaultValue={[20, 80]}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Select a range with multiple thumbs
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Fine-tuned Range</Label>
                <Slider
                  defaultValue={[33, 66]}
                  max={100}
                  min={0}
                  step={0.1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Decimal precision with step: 0.1
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Disabled Slider</Label>
                <Slider
                  defaultValue={[70]}
                  max={100}
                  step={1}
                  disabled
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Non-interactive state
                </p>
              </div>
            </div>
          }
          code={`import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export function SliderExample() {
  const [value, setValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([20, 80])

  return (
    <div className="space-y-6">
      {/* Single value slider */}
      <div className="space-y-3">
        <Label>Interactive Slider</Label>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Value: {value[0]}</span>
          <span className="text-xs">Try hovering and dragging the thumb</span>
        </div>
      </div>

      {/* Range selection slider */}
      <div className="space-y-3">
        <Label>Range Selection</Label>
        <Slider
          value={rangeValue}
          onValueChange={setRangeValue}
          max={100}
          step={1}
          className="w-full"
        />
        <p className="text-sm text-muted-foreground">
          Range: {rangeValue[0]} - {rangeValue[1]}
        </p>
      </div>

      {/* Custom range with steps */}
      <div className="space-y-3">
        <Label>Wide Range Slider</Label>
        <Slider
          defaultValue={[500]}
          max={1000}
          min={0}
          step={10}
          className="w-full"
        />
        <p className="text-sm text-muted-foreground">
          Range: 0 - 1000, Step: 10
        </p>
      </div>
    </div>
  )
}`}
        />

        {/* InputOTP Component */}
        <PreviewContainer
          title="Input OTP"
          description="Enhanced one-time password input with individual digit focus states and visual feedback"
          component={
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>6-Digit Verification Code</Label>
                <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="text-center text-sm text-muted-foreground">
                  {otpValue ? `Entered: ${otpValue}` : "Enter your verification code"}
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>With Separator</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                  Visual separation for better readability
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>4-Digit PIN</Label>
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                  Try focusing on individual digits
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>8-Digit Code with Groups</Label>
                <InputOTP maxLength={8}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                    <InputOTPSlot index={6} />
                    <InputOTPSlot index={7} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                  Extended code with visual grouping
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Custom Styled Slots</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup className="gap-3">
                    <InputOTPSlot index={0} className="!rounded-xl h-12 w-12 !border" />
                    <InputOTPSlot index={1} className="!rounded-xl h-12 w-12 !border" />
                    <InputOTPSlot index={2} className="!rounded-xl h-12 w-12 !border" />
                    <InputOTPSlot index={3} className="!rounded-xl h-12 w-12 !border" />
                    <InputOTPSlot index={4} className="!rounded-xl h-12 w-12 !border" />
                    <InputOTPSlot index={5} className="!rounded-xl h-12 w-12 !border" />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                  Larger slots with rounded corners
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Disabled State</Label>
                <InputOTP maxLength={6} disabled defaultValue="123456">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                  Non-interactive disabled state
                </p>
              </div>
            </div>
          }
          code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

export function InputOTPExample() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-6">
      {/* Basic 6-digit OTP */}
      <div className="space-y-3">
        <Label>6-Digit Verification Code</Label>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm text-muted-foreground">
          {value ? \`Entered: \${value}\` : "Enter your verification code"}
        </div>
      </div>

      {/* With separator */}
      <div className="space-y-3">
        <Label>With Separator</Label>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* 4-digit PIN */}
      <div className="space-y-3">
        <Label>4-Digit PIN</Label>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* Custom styled */}
      <div className="space-y-3">
        <Label>Custom Styled Slots</Label>
        <InputOTP maxLength={6}>
          <InputOTPGroup className="gap-3">
            <InputOTPSlot index={0} className="!rounded-xl h-12 w-12 !border" />
            <InputOTPSlot index={1} className="!rounded-xl h-12 w-12 !border" />
            <InputOTPSlot index={2} className="!rounded-xl h-12 w-12 !border" />
            <InputOTPSlot index={3} className="!rounded-xl h-12 w-12 !border" />
            <InputOTPSlot index={4} className="!rounded-xl h-12 w-12 !border" />
            <InputOTPSlot index={5} className="!rounded-xl h-12 w-12 !border" />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  )
}`}
        />
    </div>
  )
}