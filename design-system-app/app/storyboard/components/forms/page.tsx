"use client"

import { InputExample } from "./input-example"
import { TextareaExample } from "./textarea-example"
import { SelectExample } from "./select-example"
import { CheckboxExample } from "./checkbox-example"
import { RadioGroupExample } from "./radio-group-example"
import { SwitchExample } from "./switch-example"
import { SliderExample } from "./slider-example"
import { InputOTPExample } from "./input-otp-example"
import { DatePickerExample } from "./date-picker-example"

export default function FormsPage() {
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

      <InputExample />
      <TextareaExample />
      <SelectExample />
      <CheckboxExample />
      <RadioGroupExample />
      <SwitchExample />
      <SliderExample />
      <InputOTPExample />
      <DatePickerExample />
    </div>
  )
}