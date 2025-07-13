"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function SliderExample() {
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <PreviewContainer
      title="Slider"
      description="Enhanced range slider with smooth track interactions and visual feedback"
      component={
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Interactive Slider - Volume: {sliderValue[0]}%</Label>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              min={0}
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
              min={0}
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
              min={0}
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
            <Label className="text-muted-foreground">Disabled Slider</Label>
            <Slider
              defaultValue={[70]}
              max={100}
              min={0}
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

  return (
    <div className="space-y-6">
      {/* Basic slider */}
      <div className="space-y-3">
        <Label>Volume: {value[0]}%</Label>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          min={0}
          step={1}
          className="w-full"
        />
      </div>

      {/* Range slider */}
      <div className="space-y-3">
        <Label>Price Range ($0 - $1000)</Label>
        <Slider
          defaultValue={[200, 800]}
          max={1000}
          min={0}
          step={50}
          className="w-full"
        />
      </div>

      {/* With custom step */}
      <div className="space-y-3">
        <Label>Quality (Step by 25)</Label>
        <Slider
          defaultValue={[50]}
          max={100}
          min={0}
          step={25}
          className="w-full"
        />
      </div>
    </div>
  )
}`}
    />
  )
}