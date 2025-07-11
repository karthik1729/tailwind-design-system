"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const sheetExamples: ComponentExample[] = [
  {
    title: "Basic Sheet",
    description: "A simple sheet with content that slides in from the right.",
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
    component: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
  },
  {
    title: "Sheet with Form",
    description: "A sheet containing a form with input fields and actions.",
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input id="username" value="@peduarte" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    component: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
  {
    title: "Sheet Positions",
    description: "Sheets can open from different sides of the viewport.",
    code: `<div className="grid grid-cols-2 gap-2">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Top</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Sheet from top</SheetTitle>
        <SheetDescription>
          This sheet slides in from the top of the viewport.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Right</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Sheet from right</SheetTitle>
        <SheetDescription>
          This sheet slides in from the right of the viewport.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Sheet from bottom</SheetTitle>
        <SheetDescription>
          This sheet slides in from the bottom of the viewport.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Left</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Sheet from left</SheetTitle>
        <SheetDescription>
          This sheet slides in from the left of the viewport.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</div>`,
    component: () => (
      <div className="grid grid-cols-2 gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Top</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Sheet from top</SheetTitle>
              <SheetDescription>
                This sheet slides in from the top of the viewport.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Right</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Sheet from right</SheetTitle>
              <SheetDescription>
                This sheet slides in from the right of the viewport.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Sheet from bottom</SheetTitle>
              <SheetDescription>
                This sheet slides in from the bottom of the viewport.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Left</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Sheet from left</SheetTitle>
              <SheetDescription>
                This sheet slides in from the left of the viewport.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    )
  },
  {
    title: "Controlled Sheet",
    description: "Control the sheet's open state programmatically.",
    code: `function ControlledSheet() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <p className="text-sm text-muted-foreground mb-2">
        Sheet is {open ? "open" : "closed"}
      </p>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
            <SheetDescription>
              This sheet's state is controlled programmatically.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <Button onClick={() => setOpen(false)}>
              Close from inside
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}`,
    component: () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <p className="text-sm text-muted-foreground mb-2">
            Sheet is {open ? "open" : "closed"}
          </p>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Controlled Sheet</SheetTitle>
                <SheetDescription>
                  This sheet's state is controlled programmatically.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <Button onClick={() => setOpen(false)}>
                  Close from inside
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )
    }
  },
  {
    title: "Custom Width",
    description: "Sheet with custom width and content.",
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Wide Sheet</Button>
  </SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Custom Width Sheet</SheetTitle>
      <SheetDescription>
        This sheet has a custom width to accommodate more content.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="space-y-2">
        <h4 className="font-medium">Overview</h4>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="font-medium">Details</h4>
        <p className="text-sm text-muted-foreground">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </SheetContent>
</Sheet>`,
    component: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Wide Sheet</Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Custom Width Sheet</SheetTitle>
            <SheetDescription>
              This sheet has a custom width to accommodate more content.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h4 className="font-medium">Overview</h4>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Details</h4>
              <p className="text-sm text-muted-foreground">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  },
  {
    title: "Settings Sheet",
    description: "A more complex sheet with various settings options.",
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Settings</Button>
  </SheetTrigger>
  <SheetContent className="overflow-y-auto">
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>
        Manage your account settings and preferences.
      </SheetDescription>
    </SheetHeader>
    <div className="py-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Account</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="user@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Email Notifications</Label>
            <input type="checkbox" id="notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing">Marketing Emails</Label>
            <input type="checkbox" id="marketing" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Danger Zone</h3>
        <Button variant="destructive" className="w-full">
          Delete Account
        </Button>
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    component: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Settings</Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>
              Manage your account settings and preferences.
            </SheetDescription>
          </SheetHeader>
          <div className="py-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Account</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="user@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <input type="checkbox" id="notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing">Marketing Emails</Label>
                  <input type="checkbox" id="marketing" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Danger Zone</h3>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
  {
    title: "Shopping Cart Sheet",
    description: "A sheet displaying shopping cart items.",
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      Cart (3)
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Shopping Cart</SheetTitle>
      <SheetDescription>
        You have 3 items in your cart
      </SheetDescription>
    </SheetHeader>
    <div className="py-6 space-y-4">
      <div className="flex gap-4">
        <div className="h-16 w-16 rounded bg-muted" />
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-medium">Product 1</h4>
          <p className="text-sm text-muted-foreground">Size: M</p>
          <p className="text-sm font-medium">$29.99</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-16 w-16 rounded bg-muted" />
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-medium">Product 2</h4>
          <p className="text-sm text-muted-foreground">Size: L</p>
          <p className="text-sm font-medium">$39.99</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-16 w-16 rounded bg-muted" />
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-medium">Product 3</h4>
          <p className="text-sm text-muted-foreground">Size: S</p>
          <p className="text-sm font-medium">$19.99</p>
        </div>
      </div>
    </div>
    <div className="border-t pt-4">
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span className="font-medium">$89.97</span>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <span>Tax</span>
        <span className="font-medium">$7.20</span>
      </div>
      <div className="flex justify-between font-medium mt-4">
        <span>Total</span>
        <span>$97.17</span>
      </div>
    </div>
    <SheetFooter className="mt-6">
      <Button className="w-full">Checkout</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    component: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            Cart (3)
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>
              You have 3 items in your cart
            </SheetDescription>
          </SheetHeader>
          <div className="py-6 space-y-4">
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded bg-muted" />
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-medium">Product 1</h4>
                <p className="text-sm text-muted-foreground">Size: M</p>
                <p className="text-sm font-medium">$29.99</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded bg-muted" />
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-medium">Product 2</h4>
                <p className="text-sm text-muted-foreground">Size: L</p>
                <p className="text-sm font-medium">$39.99</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded bg-muted" />
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-medium">Product 3</h4>
                <p className="text-sm text-muted-foreground">Size: S</p>
                <p className="text-sm font-medium">$19.99</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">$89.97</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Tax</span>
              <span className="font-medium">$7.20</span>
            </div>
            <div className="flex justify-between font-medium mt-4">
              <span>Total</span>
              <span>$97.17</span>
            </div>
          </div>
          <SheetFooter className="mt-6">
            <Button className="w-full">Checkout</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
  {
    title: "No Overlay",
    description: "Sheet without background overlay.",
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">No Overlay</Button>
  </SheetTrigger>
  <SheetContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
    <SheetHeader>
      <SheetTitle>No Overlay Sheet</SheetTitle>
      <SheetDescription>
        This sheet appears without a background overlay, allowing 
        interaction with the content behind it.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p className="text-sm text-muted-foreground">
        The page content behind this sheet remains interactive 
        because there's no overlay blocking it.
      </p>
    </div>
  </SheetContent>
</Sheet>`,
    component: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">No Overlay</Button>
        </SheetTrigger>
        <SheetContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <SheetHeader>
            <SheetTitle>No Overlay Sheet</SheetTitle>
            <SheetDescription>
              This sheet appears without a background overlay, allowing 
              interaction with the content behind it.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              The page content behind this sheet remains interactive 
              because there's no overlay blocking it.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    )
  }
]