"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentExample } from "@/lib/component-docs"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, Settings } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const popoverExamples: ComponentExample[] = [
  {
    title: "Basic Popover",
    description: "A simple popover with text content.",
    code: `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    Place content for the popover here.
  </PopoverContent>
</Popover>`,
    component: () => (
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          Place content for the popover here.
        </PopoverContent>
      </Popover>
    )
  },
  {
    title: "With Button Trigger",
    description: "Popover triggered by a button component.",
    code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            defaultValue="100%"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input
            id="maxWidth"
            defaultValue="300px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            defaultValue="25px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input
            id="maxHeight"
            defaultValue="none"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
    component: () => (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
  {
    title: "Date Picker Popover",
    description: "Popover with calendar for date selection.",
    code: `const [date, setDate] = useState<Date>()

return (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-[280px] justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        initialFocus
      />
    </PopoverContent>
  </Popover>
)`,
    component: () => {
      const [date, setDate] = useState<Date>()

      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )
    }
  },
  {
    title: "Controlled Popover",
    description: "Popover with controlled open state.",
    code: `const [open, setOpen] = useState(false)

return (
  <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button variant="outline">
        {open ? "Close" : "Open"} popover
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-2">
        <p className="text-sm">This is a controlled popover.</p>
        <Button
          size="sm"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </div>
    </PopoverContent>
  </Popover>
)`,
    component: () => {
      const [open, setOpen] = useState(false)

      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline">
              {open ? "Close" : "Open"} popover
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <p className="text-sm">This is a controlled popover.</p>
              <Button
                size="sm"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )
    }
  },
  {
    title: "Settings Popover",
    description: "Popover with form controls for settings.",
    code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" size="icon">
      <Settings className="h-4 w-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Settings</h4>
        <p className="text-sm text-muted-foreground">
          Manage your preferences
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label htmlFor="theme">Theme</Label>
          <Select defaultValue="system">
            <SelectTrigger id="theme">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1">
          <Label htmlFor="language">Language</Label>
          <Select defaultValue="en">
            <SelectTrigger id="language">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
    component: () => (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Settings</h4>
              <p className="text-sm text-muted-foreground">
                Manage your preferences
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label htmlFor="theme">Theme</Label>
                <Select defaultValue="system">
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
  {
    title: "With Custom Positioning",
    description: "Popover with custom side and alignment.",
    code: `<div className="flex gap-4">
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Right</Button>
    </PopoverTrigger>
    <PopoverContent side="right" align="start">
      <p>Content on the right</p>
    </PopoverContent>
  </Popover>
  
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Top</Button>
    </PopoverTrigger>
    <PopoverContent side="top">
      <p>Content on top</p>
    </PopoverContent>
  </Popover>
  
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom">
      <p>Content on bottom</p>
    </PopoverContent>
  </Popover>
</div>`,
    component: () => (
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right" align="start">
            <p>Content on the right</p>
          </PopoverContent>
        </Popover>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p>Content on top</p>
          </PopoverContent>
        </Popover>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <p>Content on bottom</p>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
  {
    title: "With Offset",
    description: "Popover with custom offset from trigger.",
    code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open with offset</Button>
  </PopoverTrigger>
  <PopoverContent sideOffset={16}>
    <p className="text-sm">
      This popover has a 16px offset from the trigger.
    </p>
  </PopoverContent>
</Popover>`,
    component: () => (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open with offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={16}>
          <p className="text-sm">
            This popover has a 16px offset from the trigger.
          </p>
        </PopoverContent>
      </Popover>
    )
  },
  {
    title: "With Custom Width",
    description: "Popover with different width options.",
    code: `<div className="flex gap-4 flex-wrap">
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Small</Button>
    </PopoverTrigger>
    <PopoverContent className="w-40">
      <p className="text-sm">Small popover content</p>
    </PopoverContent>
  </Popover>
  
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Medium</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <p className="text-sm">Medium width popover with more content space</p>
    </PopoverContent>
  </Popover>
  
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Large</Button>
    </PopoverTrigger>
    <PopoverContent className="w-[480px]">
      <p className="text-sm">Large popover with plenty of room for complex content</p>
    </PopoverContent>
  </Popover>
</div>`,
    component: () => (
      <div className="flex gap-4 flex-wrap">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Small</Button>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <p className="text-sm">Small popover content</p>
          </PopoverContent>
        </Popover>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Medium</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <p className="text-sm">Medium width popover with more content space</p>
          </PopoverContent>
        </Popover>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Large</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[480px]">
            <p className="text-sm">Large popover with plenty of room for complex content</p>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
]