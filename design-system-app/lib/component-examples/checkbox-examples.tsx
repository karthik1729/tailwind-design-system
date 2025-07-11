"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const checkboxExamples: ComponentExample[] = [
  {
    title: "Basic Checkbox",
    description: "A simple checkbox with a label.",
    code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
    component: () => (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    )
  },
  {
    title: "Checked by Default",
    description: "Checkbox with a default checked state.",
    code: `<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Checkbox id="marketing" defaultChecked />
    <Label htmlFor="marketing">Send me marketing emails</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="security" defaultChecked />
    <Label htmlFor="security">Enable two-factor authentication</Label>
  </div>
</div>`,
    component: () => (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" defaultChecked />
          <Label htmlFor="marketing">Send me marketing emails</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="security" defaultChecked />
          <Label htmlFor="security">Enable two-factor authentication</Label>
        </div>
      </div>
    )
  },
  {
    title: "Disabled State",
    description: "Checkboxes can be disabled to prevent interaction.",
    code: `<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-unchecked" disabled />
    <Label htmlFor="disabled-unchecked" className="opacity-50">
      Disabled unchecked
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checked" disabled defaultChecked />
    <Label htmlFor="disabled-checked" className="opacity-50">
      Disabled checked
    </Label>
  </div>
</div>`,
    component: () => (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-unchecked" disabled />
          <Label htmlFor="disabled-unchecked" className="opacity-50">
            Disabled unchecked
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-checked" disabled defaultChecked />
          <Label htmlFor="disabled-checked" className="opacity-50">
            Disabled checked
          </Label>
        </div>
      </div>
    )
  },
  {
    title: "Controlled Checkbox",
    description: "Checkbox with controlled state using React hooks.",
    code: `const [checked, setChecked] = useState(false)

return (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="controlled" 
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Label htmlFor="controlled">
        {checked ? "Checked" : "Unchecked"}
      </Label>
    </div>
    <p className="text-sm text-muted-foreground">
      The checkbox is {checked ? "checked" : "unchecked"}
    </p>
  </div>
)`,
    component: () => {
      const [checked, setChecked] = useState(false)
      return (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="controlled" 
              checked={checked}
              onCheckedChange={(value) => setChecked(value as boolean)}
            />
            <Label htmlFor="controlled">
              {checked ? "Checked" : "Unchecked"}
            </Label>
          </div>
          <p className="text-sm text-muted-foreground">
            The checkbox is {checked ? "checked" : "unchecked"}
          </p>
        </div>
      )
    }
  },
  {
    title: "Checkbox Group",
    description: "Multiple checkboxes working together.",
    code: `const [selectedItems, setSelectedItems] = useState<string[]>([])

const items = [
  { id: "react", label: "React" },
  { id: "vue", label: "Vue" },
  { id: "angular", label: "Angular" },
  { id: "svelte", label: "Svelte" },
]

return (
  <div className="space-y-4">
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox
            id={item.id}
            checked={selectedItems.includes(item.id)}
            onCheckedChange={(checked) => {
              setSelectedItems(
                checked
                  ? [...selectedItems, item.id]
                  : selectedItems.filter((value) => value !== item.id)
              )
            }}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </div>
    <p className="text-sm text-muted-foreground">
      Selected: {selectedItems.join(", ") || "None"}
    </p>
  </div>
)`,
    component: () => {
      const [selectedItems, setSelectedItems] = useState<string[]>([])
      const items = [
        { id: "react", label: "React" },
        { id: "vue", label: "Vue" },
        { id: "angular", label: "Angular" },
        { id: "svelte", label: "Svelte" },
      ]
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={item.id}
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={(checked) => {
                    setSelectedItems(
                      checked
                        ? [...selectedItems, item.id]
                        : selectedItems.filter((value) => value !== item.id)
                    )
                  }}
                />
                <Label htmlFor={item.id}>{item.label}</Label>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Selected: {selectedItems.join(", ") || "None"}
          </p>
        </div>
      )
    }
  },
  {
    title: "With Description",
    description: "Checkbox with additional description text.",
    code: `<div className="space-y-4">
  <div className="items-top flex space-x-2">
    <Checkbox id="notifications" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="notifications">
        Enable notifications
      </Label>
      <p className="text-sm text-muted-foreground">
        You will receive email notifications about important updates.
      </p>
    </div>
  </div>
  <div className="items-top flex space-x-2">
    <Checkbox id="analytics" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="analytics">
        Share usage data
      </Label>
      <p className="text-sm text-muted-foreground">
        Help us improve the product by sharing anonymous usage data.
      </p>
    </div>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="items-top flex space-x-2">
          <Checkbox id="notifications" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="notifications">
              Enable notifications
            </Label>
            <p className="text-sm text-muted-foreground">
              You will receive email notifications about important updates.
            </p>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox id="analytics" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="analytics">
              Share usage data
            </Label>
            <p className="text-sm text-muted-foreground">
              Help us improve the product by sharing anonymous usage data.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Form Example",
    description: "Checkboxes in a complete form context.",
    code: `<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
  <div className="space-y-4">
    <h4 className="text-sm font-medium">Email Preferences</h4>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="comments" />
        <Label htmlFor="comments">
          Email me when someone comments on my posts
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="candidates" />
        <Label htmlFor="candidates">
          Email me when a candidate applies for a job
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="offers" defaultChecked />
        <Label htmlFor="offers">
          Email me about new products and special offers
        </Label>
      </div>
    </div>
  </div>
  
  <div className="border-t pt-4">
    <div className="flex items-center space-x-2">
      <Checkbox id="agree" required />
      <Label htmlFor="agree">
        I agree to the{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
      </Label>
    </div>
  </div>
</form>`,
    component: () => (
      <form className="space-y-4 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Email Preferences</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="comments" />
              <Label htmlFor="comments">
                Email me when someone comments on my posts
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="candidates" />
              <Label htmlFor="candidates">
                Email me when a candidate applies for a job
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="offers" defaultChecked />
              <Label htmlFor="offers">
                Email me about new products and special offers
              </Label>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="agree" required />
            <Label htmlFor="agree">
              I agree to the{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </a>
            </Label>
          </div>
        </div>
      </form>
    )
  },
  {
    title: "Indeterminate State",
    description: "Checkbox with indeterminate state for parent-child relationships.",
    code: `const [parentChecked, setParentChecked] = useState<boolean | 'indeterminate'>('indeterminate')
const [childStates, setChildStates] = useState({
  child1: true,
  child2: false,
  child3: true,
})

const updateParentState = (states: typeof childStates) => {
  const values = Object.values(states)
  const allChecked = values.every(v => v)
  const someChecked = values.some(v => v)
  
  if (allChecked) setParentChecked(true)
  else if (someChecked) setParentChecked('indeterminate')
  else setParentChecked(false)
}

const handleParentChange = (checked: boolean | 'indeterminate') => {
  const newValue = checked === true
  setParentChecked(newValue)
  const newChildStates = {
    child1: newValue,
    child2: newValue,
    child3: newValue,
  }
  setChildStates(newChildStates)
}

const handleChildChange = (child: keyof typeof childStates, checked: boolean) => {
  const newStates = { ...childStates, [child]: checked }
  setChildStates(newStates)
  updateParentState(newStates)
}

return (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Checkbox
        id="parent"
        checked={parentChecked}
        onCheckedChange={handleParentChange}
      />
      <Label htmlFor="parent" className="font-medium">
        Select All
      </Label>
    </div>
    <div className="ml-6 space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="child1"
          checked={childStates.child1}
          onCheckedChange={(checked) => handleChildChange('child1', checked as boolean)}
        />
        <Label htmlFor="child1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="child2"
          checked={childStates.child2}
          onCheckedChange={(checked) => handleChildChange('child2', checked as boolean)}
        />
        <Label htmlFor="child2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="child3"
          checked={childStates.child3}
          onCheckedChange={(checked) => handleChildChange('child3', checked as boolean)}
        />
        <Label htmlFor="child3">Option 3</Label>
      </div>
    </div>
  </div>
)`,
    component: () => {
      const [parentChecked, setParentChecked] = useState<boolean | 'indeterminate'>('indeterminate')
      const [childStates, setChildStates] = useState({
        child1: true,
        child2: false,
        child3: true,
      })

      const updateParentState = (states: typeof childStates) => {
        const values = Object.values(states)
        const allChecked = values.every(v => v)
        const someChecked = values.some(v => v)
        
        if (allChecked) setParentChecked(true)
        else if (someChecked) setParentChecked('indeterminate')
        else setParentChecked(false)
      }

      const handleParentChange = (checked: boolean | 'indeterminate') => {
        const newValue = checked === true
        setParentChecked(newValue)
        const newChildStates = {
          child1: newValue,
          child2: newValue,
          child3: newValue,
        }
        setChildStates(newChildStates)
      }

      const handleChildChange = (child: keyof typeof childStates, checked: boolean) => {
        const newStates = { ...childStates, [child]: checked }
        setChildStates(newStates)
        updateParentState(newStates)
      }

      return (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="parent"
              checked={parentChecked}
              onCheckedChange={handleParentChange}
            />
            <Label htmlFor="parent" className="font-medium">
              Select All
            </Label>
          </div>
          <div className="ml-6 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="child1"
                checked={childStates.child1}
                onCheckedChange={(checked) => handleChildChange('child1', checked as boolean)}
              />
              <Label htmlFor="child1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="child2"
                checked={childStates.child2}
                onCheckedChange={(checked) => handleChildChange('child2', checked as boolean)}
              />
              <Label htmlFor="child2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="child3"
                checked={childStates.child3}
                onCheckedChange={(checked) => handleChildChange('child3', checked as boolean)}
              />
              <Label htmlFor="child3">Option 3</Label>
            </div>
          </div>
        </div>
      )
    }
  }
]