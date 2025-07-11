"use client"

import { Slider } from "@/components/ui/slider"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const sliderExamples: ComponentExample[] = [
  {
    title: "Basic Slider",
    description: "A simple slider with default settings.",
    code: `<Slider defaultValue={[50]} max={100} step={1} />`,
    component: () => (
      <Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />
    )
  },
  {
    title: "Range Slider",
    description: "A slider with two handles for selecting a range.",
    code: `<Slider defaultValue={[25, 75]} max={100} step={1} />`,
    component: () => (
      <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[300px]" />
    )
  },
  {
    title: "Custom Step",
    description: "Slider with custom step increments.",
    code: `<div className="space-y-4">
  <div>
    <label className="text-sm font-medium">Step: 10</label>
    <Slider defaultValue={[50]} max={100} step={10} />
  </div>
  <div>
    <label className="text-sm font-medium">Step: 25</label>
    <Slider defaultValue={[50]} max={100} step={25} />
  </div>
  <div>
    <label className="text-sm font-medium">Step: 0.1</label>
    <Slider defaultValue={[0.5]} max={1} step={0.1} />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4 w-[300px]">
        <div>
          <label className="text-sm font-medium">Step: 10</label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
        <div>
          <label className="text-sm font-medium">Step: 25</label>
          <Slider defaultValue={[50]} max={100} step={25} />
        </div>
        <div>
          <label className="text-sm font-medium">Step: 0.1</label>
          <Slider defaultValue={[0.5]} max={1} step={0.1} />
        </div>
      </div>
    )
  },
  {
    title: "Controlled Slider",
    description: "Slider with controlled state and value display.",
    code: `function ControlledSlider() {
  const [value, setValue] = useState([50])

  return (
    <div className="space-y-4">
      <Slider 
        value={value} 
        onValueChange={setValue}
        max={100} 
        step={1} 
      />
      <div className="text-center">
        <span className="text-2xl font-semibold">{value[0]}</span>
        <span className="text-sm text-muted-foreground"> / 100</span>
      </div>
    </div>
  )
}`,
    component: () => {
      const [value, setValue] = useState([50])

      return (
        <div className="space-y-4 w-[300px]">
          <Slider 
            value={value} 
            onValueChange={setValue}
            max={100} 
            step={1} 
          />
          <div className="text-center">
            <span className="text-2xl font-semibold">{value[0]}</span>
            <span className="text-sm text-muted-foreground"> / 100</span>
          </div>
        </div>
      )
    }
  },
  {
    title: "Volume Control",
    description: "Slider used as a volume control with icon indicators.",
    code: `function VolumeSlider() {
  const [volume, setVolume] = useState([60])

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
        <Slider 
          value={volume} 
          onValueChange={setVolume}
          max={100} 
          step={1}
          className="flex-1" 
        />
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Volume: {volume[0]}%
      </p>
    </div>
  )
}`,
    component: () => {
      const [volume, setVolume] = useState([60])

      return (
        <div className="space-y-4 w-[400px]">
          <div className="flex items-center space-x-4">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
            <Slider 
              value={volume} 
              onValueChange={setVolume}
              max={100} 
              step={1}
              className="flex-1" 
            />
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Volume: {volume[0]}%
          </p>
        </div>
      )
    }
  },
  {
    title: "Price Range",
    description: "Range slider for filtering by price.",
    code: `function PriceRangeSlider() {
  const [range, setRange] = useState([20, 80])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <span>Min: \${range[0]}</span>
        <span>Max: \${range[1]}</span>
      </div>
      <Slider 
        value={range} 
        onValueChange={setRange}
        max={100} 
        step={5}
        minStepsBetweenThumbs={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>$0</span>
        <span>$100</span>
      </div>
    </div>
  )
}`,
    component: () => {
      const [range, setRange] = useState([20, 80])

      return (
        <div className="space-y-4 w-[300px]">
          <div className="flex justify-between text-sm">
            <span>Min: ${range[0]}</span>
            <span>Max: ${range[1]}</span>
          </div>
          <Slider 
            value={range} 
            onValueChange={setRange}
            max={100} 
            step={5}
            minStepsBetweenThumbs={1}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      )
    }
  },
  {
    title: "Disabled Slider",
    description: "Slider in disabled state.",
    code: `<div className="space-y-4">
  <Slider defaultValue={[50]} max={100} step={1} disabled />
  <Slider defaultValue={[25, 75]} max={100} step={1} disabled />
</div>`,
    component: () => (
      <div className="space-y-4 w-[300px]">
        <Slider defaultValue={[50]} max={100} step={1} disabled />
        <Slider defaultValue={[25, 75]} max={100} step={1} disabled />
      </div>
    )
  },
  {
    title: "Custom Colors",
    description: "Sliders with custom styling.",
    code: `<div className="space-y-6">
  <div>
    <label className="text-sm font-medium">Default</label>
    <Slider defaultValue={[50]} max={100} step={1} />
  </div>
  <div>
    <label className="text-sm font-medium">Success</label>
    <Slider 
      defaultValue={[70]} 
      max={100} 
      step={1} 
      className="[&>[data-role=slider-track]]:bg-green-100 [&>[data-role=slider-track]>[data-role=slider-range]]:bg-green-500 [&_[data-role=slider-thumb]]:border-green-500"
    />
  </div>
  <div>
    <label className="text-sm font-medium">Warning</label>
    <Slider 
      defaultValue={[40]} 
      max={100} 
      step={1} 
      className="[&>[data-role=slider-track]]:bg-yellow-100 [&>[data-role=slider-track]>[data-role=slider-range]]:bg-yellow-500 [&_[data-role=slider-thumb]]:border-yellow-500"
    />
  </div>
  <div>
    <label className="text-sm font-medium">Danger</label>
    <Slider 
      defaultValue={[20]} 
      max={100} 
      step={1} 
      className="[&>[data-role=slider-track]]:bg-red-100 [&>[data-role=slider-track]>[data-role=slider-range]]:bg-red-500 [&_[data-role=slider-thumb]]:border-red-500"
    />
  </div>
</div>`,
    component: () => (
      <div className="space-y-6 w-[300px]">
        <div>
          <label className="text-sm font-medium">Default</label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div>
          <label className="text-sm font-medium">Success</label>
          <Slider 
            defaultValue={[70]} 
            max={100} 
            step={1} 
            className="[&>[data-role=slider-track]]:bg-green-100 [&>[data-role=slider-track]>[data-role=slider-range]]:bg-green-500 [&_[data-role=slider-thumb]]:border-green-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Warning</label>
          <Slider 
            defaultValue={[40]} 
            max={100} 
            step={1} 
            className="[&>[data-role=slider-track]]:bg-yellow-100 [&>[data-role=slider-track]>[data-role=slider-range]]:bg-yellow-500 [&_[data-role=slider-thumb]]:border-yellow-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Danger</label>
          <Slider 
            defaultValue={[20]} 
            max={100} 
            step={1} 
            className="[&>[data-role=slider-track]]:bg-red-100 [&>[data-role=slider-track]>[data-role=slider-range]]:bg-red-500 [&_[data-role=slider-thumb]]:border-red-500"
          />
        </div>
      </div>
    )
  }
]