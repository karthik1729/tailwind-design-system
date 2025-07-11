"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel, SelectSeparator } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const selectExamples: ComponentExample[] = [
  {
    title: "Basic Select",
    description: "A simple select dropdown with options.",
    code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </SelectContent>
</Select>`,
    component: () => (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    )
  },
  {
    title: "Select with Label",
    description: "Select with an associated label for better accessibility.",
    code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email-select">Email notifications</Label>
  <Select>
    <SelectTrigger id="email-select">
      <SelectValue placeholder="Select frequency" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all">All emails</SelectItem>
      <SelectItem value="mentions">Mentions only</SelectItem>
      <SelectItem value="none">No emails</SelectItem>
    </SelectContent>
  </Select>
</div>`,
    component: () => (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email-select">Email notifications</Label>
        <Select>
          <SelectTrigger id="email-select">
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All emails</SelectItem>
            <SelectItem value="mentions">Mentions only</SelectItem>
            <SelectItem value="none">No emails</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  },
  {
    title: "Grouped Select",
    description: "Organize options into groups with labels.",
    code: `<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe & Africa</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
      <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
    component: () => (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  },
  {
    title: "Controlled Select",
    description: "Select with controlled state using React hooks.",
    code: `const [value, setValue] = useState("")

return (
  <div className="space-y-2">
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a position" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="frontend">Frontend Developer</SelectItem>
        <SelectItem value="backend">Backend Developer</SelectItem>
        <SelectItem value="fullstack">Fullstack Developer</SelectItem>
        <SelectItem value="designer">UI/UX Designer</SelectItem>
      </SelectContent>
    </Select>
    <p className="text-sm text-muted-foreground">
      Selected: {value || "None"}
    </p>
  </div>
)`,
    component: () => {
      const [value, setValue] = useState("")
      return (
        <div className="space-y-2">
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="frontend">Frontend Developer</SelectItem>
              <SelectItem value="backend">Backend Developer</SelectItem>
              <SelectItem value="fullstack">Fullstack Developer</SelectItem>
              <SelectItem value="designer">UI/UX Designer</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Selected: {value || "None"}
          </p>
        </div>
      )
    }
  },
  {
    title: "Disabled State",
    description: "Select can be disabled individually or have disabled options.",
    code: `<div className="space-y-4">
  <Select disabled>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Disabled select" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
    </SelectContent>
  </Select>
  
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select status" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="active">Active</SelectItem>
      <SelectItem value="inactive">Inactive</SelectItem>
      <SelectItem value="pending" disabled>Pending (Unavailable)</SelectItem>
      <SelectItem value="suspended" disabled>Suspended (Unavailable)</SelectItem>
    </SelectContent>
  </Select>
</div>`,
    component: () => (
      <div className="space-y-4">
        <Select disabled>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Disabled select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>
        
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="pending" disabled>Pending (Unavailable)</SelectItem>
            <SelectItem value="suspended" disabled>Suspended (Unavailable)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  },
  {
    title: "With Default Value",
    description: "Select with a pre-selected default value.",
    code: `<Select defaultValue="comfortable">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select spacing" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="compact">Compact</SelectItem>
    <SelectItem value="comfortable">Comfortable</SelectItem>
    <SelectItem value="spacious">Spacious</SelectItem>
  </SelectContent>
</Select>`,
    component: () => (
      <Select defaultValue="comfortable">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select spacing" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="compact">Compact</SelectItem>
          <SelectItem value="comfortable">Comfortable</SelectItem>
          <SelectItem value="spacious">Spacious</SelectItem>
        </SelectContent>
      </Select>
    )
  },
  {
    title: "Scrollable Select",
    description: "Long lists of options will automatically become scrollable.",
    code: `<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="us">United States</SelectItem>
    <SelectItem value="ca">Canada</SelectItem>
    <SelectItem value="mx">Mexico</SelectItem>
    <SelectItem value="gb">United Kingdom</SelectItem>
    <SelectItem value="fr">France</SelectItem>
    <SelectItem value="de">Germany</SelectItem>
    <SelectItem value="it">Italy</SelectItem>
    <SelectItem value="es">Spain</SelectItem>
    <SelectItem value="jp">Japan</SelectItem>
    <SelectItem value="cn">China</SelectItem>
    <SelectItem value="kr">South Korea</SelectItem>
    <SelectItem value="in">India</SelectItem>
    <SelectItem value="br">Brazil</SelectItem>
    <SelectItem value="ar">Argentina</SelectItem>
    <SelectItem value="au">Australia</SelectItem>
  </SelectContent>
</Select>`,
    component: () => (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="mx">Mexico</SelectItem>
          <SelectItem value="gb">United Kingdom</SelectItem>
          <SelectItem value="fr">France</SelectItem>
          <SelectItem value="de">Germany</SelectItem>
          <SelectItem value="it">Italy</SelectItem>
          <SelectItem value="es">Spain</SelectItem>
          <SelectItem value="jp">Japan</SelectItem>
          <SelectItem value="cn">China</SelectItem>
          <SelectItem value="kr">South Korea</SelectItem>
          <SelectItem value="in">India</SelectItem>
          <SelectItem value="br">Brazil</SelectItem>
          <SelectItem value="ar">Argentina</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
    )
  },
  {
    title: "Form Example",
    description: "Complete form example with multiple select fields.",
    code: `<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
  <div className="space-y-2">
    <Label htmlFor="role">Role</Label>
    <Select required>
      <SelectTrigger id="role">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="developer">Developer</SelectItem>
        <SelectItem value="designer">Designer</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="experience">Experience Level</Label>
    <Select required>
      <SelectTrigger id="experience">
        <SelectValue placeholder="Years of experience" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0-1">0-1 years</SelectItem>
        <SelectItem value="1-3">1-3 years</SelectItem>
        <SelectItem value="3-5">3-5 years</SelectItem>
        <SelectItem value="5+">5+ years</SelectItem>
      </SelectContent>
    </Select>
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="team-size">Team Size</Label>
    <Select>
      <SelectTrigger id="team-size">
        <SelectValue placeholder="Select team size" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="solo">Just me</SelectItem>
        <SelectItem value="small">2-5 people</SelectItem>
        <SelectItem value="medium">6-20 people</SelectItem>
        <SelectItem value="large">20+ people</SelectItem>
      </SelectContent>
    </Select>
  </div>
</form>`,
    component: () => (
      <form className="space-y-4 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select required>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Select required>
            <SelectTrigger id="experience">
              <SelectValue placeholder="Years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="team-size">Team Size</Label>
          <Select>
            <SelectTrigger id="team-size">
              <SelectValue placeholder="Select team size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solo">Just me</SelectItem>
              <SelectItem value="small">2-5 people</SelectItem>
              <SelectItem value="medium">6-20 people</SelectItem>
              <SelectItem value="large">20+ people</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    )
  }
]