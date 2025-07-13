"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"

export function SwitchExample() {
  const [switchChecked, setSwitchChecked] = useState(false)

  return (
    <PreviewContainer
      title="Switch"
      description="Toggle switch component for boolean settings and preferences"
      component={
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Switch 
              id="airplane-mode" 
              checked={switchChecked}
              onCheckedChange={setSwitchChecked}
            />
            <Label htmlFor="airplane-mode">Airplane mode</Label>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="notifications" defaultChecked />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" />
              <Label htmlFor="dark-mode">Dark mode</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="analytics" defaultChecked />
              <Label htmlFor="analytics">Share analytics data</Label>
            </div>
          </div>
          
          <div className="space-y-4">
            <Label className="text-sm font-medium">Privacy Settings</Label>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="location" className="text-sm">
                  Location services
                </Label>
                <Switch id="location" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="cookies" className="text-sm">
                  Accept cookies
                </Label>
                <Switch id="cookies" />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="tracking" className="text-sm">
                  Allow tracking
                </Label>
                <Switch id="tracking" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="text-sm font-medium">Disabled States</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Switch id="disabled-off" disabled />
                <Label htmlFor="disabled-off" className="text-muted-foreground">
                  Disabled (off)
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="disabled-on" disabled defaultChecked />
                <Label htmlFor="disabled-on" className="text-muted-foreground">
                  Disabled (on)
                </Label>
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
    <div className="space-y-4">
      {/* Basic switch */}
      <div className="flex items-center space-x-2">
        <Switch 
          id="airplane-mode" 
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="airplane-mode">Airplane mode</Label>
      </div>

      {/* Multiple switches */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Switch id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode">Dark mode</Label>
        </div>
      </div>

      {/* Justified layout */}
      <div className="flex items-center justify-between">
        <Label htmlFor="location">Location services</Label>
        <Switch id="location" defaultChecked />
      </div>
    </div>
  )
}`}
    />
  )
}