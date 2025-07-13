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
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
import { addDays, format } from "date-fns"

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
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [appointmentDate, setAppointmentDate] = useState<Date>()
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()
  const [travelDates, setTravelDates] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()
  const [limitedDate, setLimitedDate] = useState<Date>()
  const [customFormatDate, setCustomFormatDate] = useState<Date>()

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
                <InputOTP maxLength={6} disabled value="123456" onChange={() => {}}>
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

        {/* Date Picker Component */}
        <PreviewContainer
          title="Date Picker"
          description="Enhanced calendar-based date selection with smooth interactions and visual feedback"
          component={
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Single Date Selection</Label>
                <DatePicker
                  date={selectedDate}
                  onSelect={setSelectedDate}
                  placeholder="Select a date"
                />
                {selectedDate && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {format(selectedDate, 'PPP')}
                  </p>
                )}
              </div>
              
              <div className="space-y-3">
                <Label>Date Range Selection</Label>
                <DateRangePicker
                  dateRange={dateRange}
                  onSelect={setDateRange}
                  placeholder="Select date range"
                />
                {dateRange?.from && (
                  <p className="text-sm text-muted-foreground">
                    {dateRange.to ? (
                      <>
                        From: {format(dateRange.from, 'PPP')} - To: {format(dateRange.to, 'PPP')}
                      </>
                    ) : (
                      <>Start: {format(dateRange.from, 'PPP')}</>
                    )}
                  </p>
                )}
              </div>
              
              <div className="space-y-3">
                <Label>With Custom Format</Label>
                <DatePicker
                  date={customFormatDate}
                  onSelect={setCustomFormatDate}
                  placeholder="MM/DD/YYYY"
                  formatStr="MM/dd/yyyy"
                />
                <p className="text-sm text-muted-foreground">
                  Using custom date format (MM/DD/YYYY)
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Appointment Booking</Label>
                <DatePicker
                  date={appointmentDate}
                  onSelect={setAppointmentDate}
                  placeholder="Choose appointment date"
                  disabledDates={(date: Date) => {
                    return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                           date.getDay() === 0 || 
                           date.getDay() === 6
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Weekends and past dates disabled
                </p>
                {appointmentDate && (
                  <div className="rounded-md bg-success/10 p-3 mt-2">
                    <p className="text-sm font-medium text-success">
                      Appointment scheduled for:
                    </p>
                    <p className="text-sm text-foreground mt-1">
                      {format(appointmentDate, 'EEEE, MMMM d, yyyy')}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <Label>Travel Dates</Label>
                <DateRangePicker
                  dateRange={travelDates}
                  onSelect={setTravelDates}
                  placeholder="Check-in - Check-out"
                  formatStr="MMM dd"
                  numberOfMonths={2}
                />
                <p className="text-sm text-muted-foreground">
                  Two-month view for easier range selection
                </p>
                {travelDates?.from && travelDates?.to && (
                  <div className="rounded-md bg-info/10 p-3 text-sm">
                    <p className="font-medium text-info">Travel Details:</p>
                    <div className="mt-2 space-y-1 text-foreground">
                      <p>Check-in: {format(travelDates.from, 'MM/dd/yyyy')}</p>
                      <p>Check-out: {format(travelDates.to, 'MM/dd/yyyy')}</p>
                      <p>Nights: {Math.ceil((travelDates.to.getTime() - travelDates.from.getTime()) / (1000 * 60 * 60 * 24))}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <Label>Year Selection with Date Limits</Label>
                <DatePicker
                  date={limitedDate}
                  onSelect={setLimitedDate}
                  placeholder="Pick a date (Mar 2024 - Sep 2025)"
                  fromDate={new Date(2024, 2, 15)}  // March 15, 2024
                  toDate={new Date(2025, 8, 20)}    // September 20, 2025
                />
                <p className="text-sm text-muted-foreground">
                  Limited range: March 15, 2024 - September 20, 2025
                </p>
                <div className="text-sm space-y-1">
                  <p className="text-muted-foreground">Try selecting:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-2">
                    <li>2024: Only March-December available</li>
                    <li>2025: Only January-September available</li>
                    <li>March 2024: Only dates from 15th onwards</li>
                    <li>September 2025: Only dates up to 20th</li>
                  </ul>
                </div>
                {limitedDate && (
                  <p className="text-sm font-medium text-foreground mt-2">
                    Selected: {format(limitedDate, 'MMMM d, yyyy')}
                  </p>
                )}
              </div>
              
              <div className="space-y-3">
                <Label>Disabled States</Label>
                <div className="flex flex-wrap gap-3">
                  <DatePicker
                    date={new Date()}
                    disabled={true}
                    placeholder="Disabled date picker"
                  />
                  <DateRangePicker
                    dateRange={{
                      from: new Date(),
                      to: addDays(new Date(), 7)
                    }}
                    disabled={true}
                    placeholder="Disabled range picker"
                  />
                </div>
              </div>
            </div>
          }
          code={`import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/label"
import { addDays } from "date-fns"

export function DatePickerExample() {
  const [date, setDate] = useState<Date>()
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()

  return (
    <div className="space-y-6">
      {/* Single date selection */}
      <div className="space-y-3">
        <Label>Single Date Selection</Label>
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Select a date"
        />
      </div>

      {/* Date range selection */}
      <div className="space-y-3">
        <Label>Date Range Selection</Label>
        <DateRangePicker
          dateRange={dateRange}
          onSelect={setDateRange}
          placeholder="Select date range"
        />
      </div>

      {/* Custom format */}
      <div className="space-y-3">
        <Label>With Custom Format</Label>
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="MM/DD/YYYY"
          formatStr="MM/dd/yyyy"
        />
      </div>

      {/* Appointment booking (weekends disabled) */}
      <div className="space-y-3">
        <Label>Appointment Booking</Label>
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Choose appointment date"
          disabledDates={(date: Date) => {
            return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                   date.getDay() === 0 || 
                   date.getDay() === 6
          }}
        />
      </div>

      {/* Travel dates with 2-month view */}
      <div className="space-y-3">
        <Label>Travel Dates</Label>
        <DateRangePicker
          dateRange={dateRange}
          onSelect={setDateRange}
          placeholder="Check-in - Check-out"
          formatStr="MMM dd"
          numberOfMonths={2}
        />
      </div>
    </div>
  )
}`}
        />
    </div>
  )
}