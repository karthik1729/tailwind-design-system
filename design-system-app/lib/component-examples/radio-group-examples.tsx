"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const radioGroupExamples: ComponentExample[] = [
  {
    title: "Basic Radio Group",
    description: "A simple radio group with options.",
    code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>`,
    component: () => (
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    )
  },
  {
    title: "With Default Selection",
    description: "Radio group with a pre-selected option.",
    code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable (Recommended)</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`,
    component: () => (
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable (Recommended)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    )
  },
  {
    title: "Disabled Options",
    description: "Radio group with some disabled options.",
    code: `<RadioGroup defaultValue="card">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="card" id="card" />
    <Label htmlFor="card">Credit Card</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="paypal" id="paypal" />
    <Label htmlFor="paypal">PayPal</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="apple" id="apple" disabled />
    <Label htmlFor="apple" className="opacity-50">
      Apple Pay (Coming Soon)
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="bitcoin" id="bitcoin" disabled />
    <Label htmlFor="bitcoin" className="opacity-50">
      Bitcoin (Coming Soon)
    </Label>
  </div>
</RadioGroup>`,
    component: () => (
      <RadioGroup defaultValue="card">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Credit Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal">PayPal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="apple" id="apple" disabled />
          <Label htmlFor="apple" className="opacity-50">
            Apple Pay (Coming Soon)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bitcoin" id="bitcoin" disabled />
          <Label htmlFor="bitcoin" className="opacity-50">
            Bitcoin (Coming Soon)
          </Label>
        </div>
      </RadioGroup>
    )
  },
  {
    title: "Controlled Radio Group",
    description: "Radio group with controlled state.",
    code: `const [value, setValue] = useState("email")

return (
  <div className="space-y-4">
    <RadioGroup value={value} onValueChange={setValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="email" id="email" />
        <Label htmlFor="email">Email</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="sms" id="sms" />
        <Label htmlFor="sms">SMS</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="push" id="push" />
        <Label htmlFor="push">Push Notification</Label>
      </div>
    </RadioGroup>
    <p className="text-sm text-muted-foreground">
      Selected notification method: <strong>{value}</strong>
    </p>
  </div>
)`,
    component: () => {
      const [value, setValue] = useState("email")

      return (
        <div className="space-y-4">
          <RadioGroup value={value} onValueChange={setValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="sms" />
              <Label htmlFor="sms">SMS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="push" id="push" />
              <Label htmlFor="push">Push Notification</Label>
            </div>
          </RadioGroup>
          <p className="text-sm text-muted-foreground">
            Selected notification method: <strong>{value}</strong>
          </p>
        </div>
      )
    }
  },
  {
    title: "With Descriptions",
    description: "Radio options with additional description text.",
    code: `<RadioGroup defaultValue="standard">
  <div className="space-y-4">
    <div className="flex items-start space-x-3">
      <RadioGroupItem value="standard" id="standard" className="mt-1" />
      <div className="grid gap-1.5">
        <Label htmlFor="standard">Standard Shipping</Label>
        <p className="text-sm text-muted-foreground">
          Delivered in 5-7 business days • $5.00
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <RadioGroupItem value="express" id="express" className="mt-1" />
      <div className="grid gap-1.5">
        <Label htmlFor="express">Express Shipping</Label>
        <p className="text-sm text-muted-foreground">
          Delivered in 2-3 business days • $15.00
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <RadioGroupItem value="overnight" id="overnight" className="mt-1" />
      <div className="grid gap-1.5">
        <Label htmlFor="overnight">Overnight Shipping</Label>
        <p className="text-sm text-muted-foreground">
          Delivered next business day • $30.00
        </p>
      </div>
    </div>
  </div>
</RadioGroup>`,
    component: () => (
      <RadioGroup defaultValue="standard">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="standard" id="standard" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="standard">Standard Shipping</Label>
              <p className="text-sm text-muted-foreground">
                Delivered in 5-7 business days • $5.00
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="express" id="express" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="express">Express Shipping</Label>
              <p className="text-sm text-muted-foreground">
                Delivered in 2-3 business days • $15.00
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="overnight" id="overnight" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="overnight">Overnight Shipping</Label>
              <p className="text-sm text-muted-foreground">
                Delivered next business day • $30.00
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>
    )
  },
  {
    title: "Card Style Options",
    description: "Radio group with card-styled options.",
    code: `<RadioGroup defaultValue="team">
  <div className="grid grid-cols-3 gap-4">
    <div>
      <RadioGroupItem value="personal" id="personal" className="peer sr-only" />
      <Label
        htmlFor="personal"
        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        <span className="text-sm font-medium">Personal</span>
        <span className="text-xs text-muted-foreground">Just you</span>
      </Label>
    </div>
    <div>
      <RadioGroupItem value="team" id="team" className="peer sr-only" />
      <Label
        htmlFor="team"
        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        <span className="text-sm font-medium">Team</span>
        <span className="text-xs text-muted-foreground">2-10 users</span>
      </Label>
    </div>
    <div>
      <RadioGroupItem value="enterprise" id="enterprise" className="peer sr-only" />
      <Label
        htmlFor="enterprise"
        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        <span className="text-sm font-medium">Enterprise</span>
        <span className="text-xs text-muted-foreground">10+ users</span>
      </Label>
    </div>
  </div>
</RadioGroup>`,
    component: () => (
      <RadioGroup defaultValue="team">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem value="personal" id="personal" className="peer sr-only" />
            <Label
              htmlFor="personal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-sm font-medium">Personal</span>
              <span className="text-xs text-muted-foreground">Just you</span>
            </Label>
          </div>
          <div>
            <RadioGroupItem value="team" id="team" className="peer sr-only" />
            <Label
              htmlFor="team"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-sm font-medium">Team</span>
              <span className="text-xs text-muted-foreground">2-10 users</span>
            </Label>
          </div>
          <div>
            <RadioGroupItem value="enterprise" id="enterprise" className="peer sr-only" />
            <Label
              htmlFor="enterprise"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-sm font-medium">Enterprise</span>
              <span className="text-xs text-muted-foreground">10+ users</span>
            </Label>
          </div>
        </div>
      </RadioGroup>
    )
  },
  {
    title: "Form Integration",
    description: "Radio group integrated within a form.",
    code: `<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
  <div className="space-y-3">
    <Label>Select your plan</Label>
    <RadioGroup defaultValue="pro" required>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="free" id="free" />
          <Label htmlFor="free">
            Free Plan - $0/month
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pro" id="pro" />
          <Label htmlFor="pro">
            Pro Plan - $10/month
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="business" id="business" />
          <Label htmlFor="business">
            Business Plan - $25/month
          </Label>
        </div>
      </div>
    </RadioGroup>
  </div>
  
  <div className="space-y-3">
    <Label>Billing cycle</Label>
    <RadioGroup defaultValue="monthly">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="monthly" id="monthly" />
        <Label htmlFor="monthly">Monthly billing</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="annual" id="annual" />
        <Label htmlFor="annual">
          Annual billing <span className="text-green-600">(Save 20%)</span>
        </Label>
      </div>
    </RadioGroup>
  </div>
  
  <Button type="submit">Continue to Payment</Button>
</form>`,
    component: () => (
      <form className="space-y-6 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-3">
          <Label>Select your plan</Label>
          <RadioGroup defaultValue="pro" required>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="free" />
                <Label htmlFor="free">
                  Free Plan - $0/month
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pro" id="pro" />
                <Label htmlFor="pro">
                  Pro Plan - $10/month
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">
                  Business Plan - $25/month
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-3">
          <Label>Billing cycle</Label>
          <RadioGroup defaultValue="monthly">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly billing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="annual" id="annual" />
              <Label htmlFor="annual">
                Annual billing <span className="text-green-600">(Save 20%)</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button type="submit">Continue to Payment</Button>
      </form>
    )
  },
  {
    title: "Horizontal Layout",
    description: "Radio group with horizontal orientation.",
    code: `<div className="space-y-4">
  <div>
    <Label>Size</Label>
    <RadioGroup defaultValue="medium" className="flex flex-row space-x-4 mt-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="small" />
        <Label htmlFor="small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="medium" />
        <Label htmlFor="medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="large" />
        <Label htmlFor="large">Large</Label>
      </div>
    </RadioGroup>
  </div>
  
  <div>
    <Label>Color</Label>
    <RadioGroup defaultValue="blue" className="flex flex-row space-x-4 mt-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="red" id="red" />
        <Label htmlFor="red">Red</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="blue" id="blue" />
        <Label htmlFor="blue">Blue</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="green" id="green" />
        <Label htmlFor="green">Green</Label>
      </div>
    </RadioGroup>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div>
          <Label>Size</Label>
          <RadioGroup defaultValue="medium" className="flex flex-row space-x-4 mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="small" />
              <Label htmlFor="small">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="large" />
              <Label htmlFor="large">Large</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label>Color</Label>
          <RadioGroup defaultValue="blue" className="flex flex-row space-x-4 mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="red" id="red" />
              <Label htmlFor="red">Red</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="blue" id="blue" />
              <Label htmlFor="blue">Blue</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="green" id="green" />
              <Label htmlFor="green">Green</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    )
  }
]

// Need to import Button for form example
import { Button } from "@/components/ui/button"