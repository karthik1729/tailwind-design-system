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
      description="Range slider component for selecting numerical values within a range"
      component={
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Volume: {sliderValue[0]}%</Label>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              min={0}
              step={1}
              className="w-full"
            />
          </div>
          
          <div className="space-y-3">
            <Label>Brightness (Default 75%)</Label>
            <Slider
              defaultValue={[75]}
              max={100}
              min={0}
              step={5}
              className="w-full"
            />
          </div>
          
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
          
          <div className="space-y-3">
            <Label>Temperature (-10°C to 40°C)</Label>
            <Slider
              defaultValue={[20]}
              max={40}
              min={-10}
              step={1}
              className="w-full"
            />
          </div>
          
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
          
          <div className="space-y-3">
            <Label className="text-muted-foreground">Disabled Slider</Label>
            <Slider
              defaultValue={[60]}
              max={100}
              min={0}
              step={10}
              disabled
              className="w-full"
            />
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