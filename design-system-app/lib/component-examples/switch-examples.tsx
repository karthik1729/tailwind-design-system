"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import { Wifi, Plane, Moon, Bell, Lock, Eye, Mic, Camera } from "lucide-react"

export const switchExamples: ComponentExample[] = [
  {
    title: "Basic Switch",
    description: "A simple switch toggle.",
    code: `<Switch />`,
    component: () => (
      <Switch />
    )
  },
  {
    title: "Switch with Label",
    description: "Switch with an associated label for better accessibility.",
    code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
    component: () => (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    )
  },
  {
    title: "Default Checked",
    description: "Switch with a default checked state.",
    code: `<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="notifications" defaultChecked />
    <Label htmlFor="notifications">Enable notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="marketing" defaultChecked />
    <Label htmlFor="marketing">Marketing emails</Label>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="marketing" defaultChecked />
          <Label htmlFor="marketing">Marketing emails</Label>
        </div>
      </div>
    )
  },
  {
    title: "Disabled State",
    description: "Switches can be disabled to prevent interaction.",
    code: `<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-off" disabled />
    <Label htmlFor="disabled-off" className="opacity-50">
      Disabled (off)
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-on" disabled defaultChecked />
    <Label htmlFor="disabled-on" className="opacity-50">
      Disabled (on)
    </Label>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="disabled-off" disabled />
          <Label htmlFor="disabled-off" className="opacity-50">
            Disabled (off)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="disabled-on" disabled defaultChecked />
          <Label htmlFor="disabled-on" className="opacity-50">
            Disabled (on)
          </Label>
        </div>
      </div>
    )
  },
  {
    title: "Controlled Switch",
    description: "Switch with controlled state using React hooks.",
    code: `const [isEnabled, setIsEnabled] = useState(false)

return (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Switch
        id="controlled"
        checked={isEnabled}
        onCheckedChange={setIsEnabled}
      />
      <Label htmlFor="controlled">
        {isEnabled ? "Enabled" : "Disabled"}
      </Label>
    </div>
    <p className="text-sm text-muted-foreground">
      The switch is currently {isEnabled ? "on" : "off"}
    </p>
  </div>
)`,
    component: () => {
      const [isEnabled, setIsEnabled] = useState(false)
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="controlled"
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
            />
            <Label htmlFor="controlled">
              {isEnabled ? "Enabled" : "Disabled"}
            </Label>
          </div>
          <p className="text-sm text-muted-foreground">
            The switch is currently {isEnabled ? "on" : "off"}
          </p>
        </div>
      )
    }
  },
  {
    title: "Switch with Icons",
    description: "Enhance switches with icons for better visual context.",
    code: `<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Wifi className="h-4 w-4" />
    <Switch id="wifi" defaultChecked />
    <Label htmlFor="wifi">Wi-Fi</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Plane className="h-4 w-4" />
    <Switch id="airplane" />
    <Label htmlFor="airplane">Airplane Mode</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Moon className="h-4 w-4" />
    <Switch id="dark-mode" />
    <Label htmlFor="dark-mode">Dark Mode</Label>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Wifi className="h-4 w-4" />
          <Switch id="wifi" defaultChecked />
          <Label htmlFor="wifi">Wi-Fi</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Plane className="h-4 w-4" />
          <Switch id="airplane" />
          <Label htmlFor="airplane">Airplane Mode</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Moon className="h-4 w-4" />
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
      </div>
    )
  },
  {
    title: "Settings Panel",
    description: "Complete settings panel with multiple switches.",
    code: `<div className="w-full max-w-sm space-y-4">
  <div>
    <h3 className="text-lg font-medium">Privacy Settings</h3>
    <p className="text-sm text-muted-foreground">
      Manage your privacy preferences
    </p>
  </div>
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="public-profile">Public Profile</Label>
        <p className="text-sm text-muted-foreground">
          Make your profile visible to everyone
        </p>
      </div>
      <Switch id="public-profile" />
    </div>
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="activity-status">Activity Status</Label>
        <p className="text-sm text-muted-foreground">
          Show when you're active
        </p>
      </div>
      <Switch id="activity-status" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="allow-messages">Allow Messages</Label>
        <p className="text-sm text-muted-foreground">
          Let others send you direct messages
        </p>
      </div>
      <Switch id="allow-messages" defaultChecked />
    </div>
  </div>
</div>`,
    component: () => (
      <div className="w-full max-w-sm space-y-4">
        <div>
          <h3 className="text-lg font-medium">Privacy Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your privacy preferences
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="public-profile">Public Profile</Label>
              <p className="text-sm text-muted-foreground">
                Make your profile visible to everyone
              </p>
            </div>
            <Switch id="public-profile" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="activity-status">Activity Status</Label>
              <p className="text-sm text-muted-foreground">
                Show when you're active
              </p>
            </div>
            <Switch id="activity-status" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="allow-messages">Allow Messages</Label>
              <p className="text-sm text-muted-foreground">
                Let others send you direct messages
              </p>
            </div>
            <Switch id="allow-messages" defaultChecked />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Feature Toggles",
    description: "Use switches to enable/disable features with visual feedback.",
    code: `const [features, setFeatures] = useState({
  notifications: true,
  autoSave: true,
  syncData: false,
  betaFeatures: false,
})

const toggleFeature = (feature: keyof typeof features) => {
  setFeatures(prev => ({ ...prev, [feature]: !prev[feature] }))
}

return (
  <div className="space-y-4">
    <div className="grid gap-4">
      <div className="flex items-center space-x-4 rounded-lg border p-4">
        <Bell className={features.notifications ? "h-4 w-4" : "h-4 w-4 opacity-50"} />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            Notifications
          </p>
          <p className="text-sm text-muted-foreground">
            Receive notifications about updates
          </p>
        </div>
        <Switch
          checked={features.notifications}
          onCheckedChange={() => toggleFeature('notifications')}
        />
      </div>
      
      <div className="flex items-center space-x-4 rounded-lg border p-4">
        <Eye className={features.autoSave ? "h-4 w-4" : "h-4 w-4 opacity-50"} />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            Auto-save
          </p>
          <p className="text-sm text-muted-foreground">
            Automatically save your changes
          </p>
        </div>
        <Switch
          checked={features.autoSave}
          onCheckedChange={() => toggleFeature('autoSave')}
        />
      </div>
      
      <div className="flex items-center space-x-4 rounded-lg border p-4">
        <Lock className={features.syncData ? "h-4 w-4" : "h-4 w-4 opacity-50"} />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            Sync Data
          </p>
          <p className="text-sm text-muted-foreground">
            Sync data across all devices
          </p>
        </div>
        <Switch
          checked={features.syncData}
          onCheckedChange={() => toggleFeature('syncData')}
        />
      </div>
    </div>
    
    <div className="rounded-lg bg-muted p-3">
      <p className="text-sm">
        Active features: {Object.entries(features).filter(([_, v]) => v).map(([k]) => k).join(', ') || 'None'}
      </p>
    </div>
  </div>
)`,
    component: () => {
      const [features, setFeatures] = useState({
        notifications: true,
        autoSave: true,
        syncData: false,
        betaFeatures: false,
      })

      const toggleFeature = (feature: keyof typeof features) => {
        setFeatures(prev => ({ ...prev, [feature]: !prev[feature] }))
      }

      return (
        <div className="space-y-4 w-full max-w-md">
          <div className="grid gap-4">
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Bell className={features.notifications ? "h-4 w-4" : "h-4 w-4 opacity-50"} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Receive notifications about updates
                </p>
              </div>
              <Switch
                checked={features.notifications}
                onCheckedChange={() => toggleFeature('notifications')}
              />
            </div>
            
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Eye className={features.autoSave ? "h-4 w-4" : "h-4 w-4 opacity-50"} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Auto-save
                </p>
                <p className="text-sm text-muted-foreground">
                  Automatically save your changes
                </p>
              </div>
              <Switch
                checked={features.autoSave}
                onCheckedChange={() => toggleFeature('autoSave')}
              />
            </div>
            
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Lock className={features.syncData ? "h-4 w-4" : "h-4 w-4 opacity-50"} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Sync Data
                </p>
                <p className="text-sm text-muted-foreground">
                  Sync data across all devices
                </p>
              </div>
              <Switch
                checked={features.syncData}
                onCheckedChange={() => toggleFeature('syncData')}
              />
            </div>
          </div>
          
          <div className="rounded-lg bg-muted p-3">
            <p className="text-sm">
              Active features: {Object.entries(features).filter(([_, v]) => v).map(([k]) => k).join(', ') || 'None'}
            </p>
          </div>
        </div>
      )
    }
  },
  {
    title: "Form Integration",
    description: "Switches integrated within a form context.",
    code: `<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
  <div className="space-y-4">
    <h4 className="text-sm font-medium">Communication Preferences</h4>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
          <span>Email notifications</span>
          <span className="font-normal text-sm text-muted-foreground">
            Receive emails about your account activity
          </span>
        </Label>
        <Switch id="email-notifications" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="sms-notifications" className="flex flex-col space-y-1">
          <span>SMS notifications</span>
          <span className="font-normal text-sm text-muted-foreground">
            Receive text messages for important updates
          </span>
        </Label>
        <Switch id="sms-notifications" />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="push-notifications" className="flex flex-col space-y-1">
          <span>Push notifications</span>
          <span className="font-normal text-sm text-muted-foreground">
            Receive push notifications on your devices
          </span>
        </Label>
        <Switch id="push-notifications" defaultChecked />
      </div>
    </div>
  </div>
  
  <div className="border-t pt-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="all-notifications" className="flex flex-col space-y-1">
        <span className="font-medium">Master switch</span>
        <span className="font-normal text-sm text-muted-foreground">
          Enable or disable all notifications
        </span>
      </Label>
      <Switch id="all-notifications" defaultChecked />
    </div>
  </div>
</form>`,
    component: () => (
      <form className="space-y-6 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Communication Preferences</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                <span>Email notifications</span>
                <span className="font-normal text-sm text-muted-foreground">
                  Receive emails about your account activity
                </span>
              </Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications" className="flex flex-col space-y-1">
                <span>SMS notifications</span>
                <span className="font-normal text-sm text-muted-foreground">
                  Receive text messages for important updates
                </span>
              </Label>
              <Switch id="sms-notifications" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications" className="flex flex-col space-y-1">
                <span>Push notifications</span>
                <span className="font-normal text-sm text-muted-foreground">
                  Receive push notifications on your devices
                </span>
              </Label>
              <Switch id="push-notifications" defaultChecked />
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="all-notifications" className="flex flex-col space-y-1">
              <span className="font-medium">Master switch</span>
              <span className="font-normal text-sm text-muted-foreground">
                Enable or disable all notifications
              </span>
            </Label>
            <Switch id="all-notifications" defaultChecked />
          </div>
        </div>
      </form>
    )
  }
]