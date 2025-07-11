"use client"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import {
  Minus,
  Plus,
  Settings,
  ShoppingCart,
  Filter,
  Menu,
  X,
  Home,
  FileText,
  Users,
  BarChart,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

export const drawerExamples: ComponentExample[] = [
  {
    title: "Basic Drawer",
    description: "A simple drawer that slides in from the right.",
    code: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit Profile</DrawerTitle>
      <DrawerDescription>
        Make changes to your profile here. Click save when you're done.
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4 pb-0">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="pedro@example.com" />
        </div>
      </div>
    </div>
    <DrawerFooter>
      <Button>Save changes</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    component: () => (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="pedro@example.com" />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  {
    title: "Shopping Cart Drawer",
    description: "A drawer for displaying shopping cart items.",
    code: `const [cartOpen, setCartOpen] = useState(false)
const [quantity, setQuantity] = useState(1)

return (
  <Drawer open={cartOpen} onOpenChange={setCartOpen}>
    <DrawerTrigger asChild>
      <Button>
        <ShoppingCart className="mr-2 h-4 w-4" />
        Cart (3)
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Shopping Cart</DrawerTitle>
        <DrawerDescription>
          You have 3 items in your cart
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold">Product Name</h4>
              <p className="text-sm text-gray-500">Size: M, Color: Blue</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <span className="text-sm font-semibold">$29.99</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">$89.97</span>
          </div>
        </div>
      </div>
      <DrawerFooter>
        <Button className="w-full">Checkout</Button>
        <DrawerClose asChild>
          <Button variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)`,
    component: () => {
      const [cartOpen, setCartOpen] = useState(false)
      const [quantity, setQuantity] = useState(1)

      return (
        <Drawer open={cartOpen} onOpenChange={setCartOpen}>
          <DrawerTrigger asChild>
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart (3)
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Shopping Cart</DrawerTitle>
              <DrawerDescription>
                You have 3 items in your cart
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">Product Name</h4>
                    <p className="text-sm text-gray-500">Size: M, Color: Blue</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(Math.max(0, quantity - 1))}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="text-sm font-semibold">$29.99</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">$89.97</span>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Button className="w-full">Checkout</Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
    }
  },
  {
    title: "Navigation Drawer",
    description: "A drawer used for mobile navigation menu.",
    code: `<Drawer direction="left">
  <DrawerTrigger asChild>
    <Button variant="ghost" size="icon">
      <Menu className="h-5 w-5" />
    </Button>
  </DrawerTrigger>
  <DrawerContent className="h-full w-[300px]">
    <DrawerHeader className="text-left">
      <DrawerTitle>Navigation</DrawerTitle>
    </DrawerHeader>
    <div className="p-4 pb-0">
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Documents
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          Team
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <BarChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        <Separator className="my-4" />
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help
        </Button>
      </div>
    </div>
    <div className="mt-auto p-4">
      <Button variant="ghost" className="w-full justify-start text-red-600">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  </DrawerContent>
</Drawer>`,
    component: () => (
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-[300px]">
          <DrawerHeader className="text-left">
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Documents
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Team
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart className="mr-2 h-4 w-4" />
                Analytics
              </Button>
              <Separator className="my-4" />
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Button>
            </div>
          </div>
          <div className="mt-auto p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    )
  },
  {
    title: "Filter Drawer",
    description: "A drawer for applying filters to a list or grid.",
    code: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">
      <Filter className="mr-2 h-4 w-4" />
      Filters
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Filter Options</DrawerTitle>
      <DrawerDescription>
        Narrow down your search results
      </DrawerDescription>
    </DrawerHeader>
    <ScrollArea className="h-[400px] px-4">
      <div className="space-y-6 py-4">
        <div>
          <h4 className="font-medium mb-3">Category</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Electronics</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Clothing</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Home & Garden</span>
            </label>
          </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-medium mb-3">Price Range</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="price" className="rounded-full" />
              <span className="text-sm">Under $25</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="price" className="rounded-full" />
              <span className="text-sm">$25 - $50</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="price" className="rounded-full" />
              <span className="text-sm">$50 - $100</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="price" className="rounded-full" />
              <span className="text-sm">Over $100</span>
            </label>
          </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-medium mb-3">Rating</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">4 stars & up</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">3 stars & up</span>
            </label>
          </div>
        </div>
      </div>
    </ScrollArea>
    <DrawerFooter>
      <Button className="w-full">Apply Filters</Button>
      <DrawerClose asChild>
        <Button variant="outline" className="w-full">
          Clear All
        </Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    component: () => (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filter Options</DrawerTitle>
            <DrawerDescription>
              Narrow down your search results
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[400px] px-4">
            <div className="space-y-6 py-4">
              <div>
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Electronics</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Clothing</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Home & Garden</span>
                  </label>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="price" className="rounded-full" />
                    <span className="text-sm">Under $25</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="price" className="rounded-full" />
                    <span className="text-sm">$25 - $50</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="price" className="rounded-full" />
                    <span className="text-sm">$50 - $100</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="price" className="rounded-full" />
                    <span className="text-sm">Over $100</span>
                  </label>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-3">Rating</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">4 stars & up</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">3 stars & up</span>
                  </label>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DrawerFooter>
            <Button className="w-full">Apply Filters</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Clear All
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  {
    title: "Settings Drawer",
    description: "A drawer for application settings.",
    code: `<Drawer>
  <DrawerTrigger asChild>
    <Button>
      <Settings className="mr-2 h-4 w-4" />
      Settings
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
      <DrawerDescription>
        Customize your application preferences
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4 pb-0">
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Appearance</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="theme">Theme</Label>
              <select 
                id="theme" 
                className="w-32 rounded-md border px-3 py-1"
              >
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="font-size">Font Size</Label>
              <select 
                id="font-size" 
                className="w-32 rounded-md border px-3 py-1"
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <h4 className="font-medium mb-3">Notifications</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notif">Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive email updates</p>
              </div>
              <input 
                type="checkbox" 
                id="email-notif" 
                className="rounded"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="push-notif">Push Notifications</Label>
                <p className="text-sm text-gray-500">Receive push alerts</p>
              </div>
              <input 
                type="checkbox" 
                id="push-notif" 
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <DrawerFooter>
      <Button>Save Settings</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    component: () => (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerDescription>
              Customize your application preferences
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Appearance</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="theme">Theme</Label>
                    <select 
                      id="theme" 
                      className="w-32 rounded-md border px-3 py-1"
                    >
                      <option>Light</option>
                      <option>Dark</option>
                      <option>System</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-size">Font Size</Label>
                    <select 
                      id="font-size" 
                      className="w-32 rounded-md border px-3 py-1"
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-3">Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notif">Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive email updates</p>
                    </div>
                    <input 
                      type="checkbox" 
                      id="email-notif" 
                      className="rounded"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notif">Push Notifications</Label>
                      <p className="text-sm text-gray-500">Receive push alerts</p>
                    </div>
                    <input 
                      type="checkbox" 
                      id="push-notif" 
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Save Settings</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  {
    title: "Notification Drawer",
    description: "A drawer for displaying notifications.",
    code: `<Drawer direction="top">
  <DrawerTrigger asChild>
    <Button variant="outline" size="icon" className="relative">
      <Bell className="h-4 w-4" />
      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0">
        3
      </Badge>
    </Button>
  </DrawerTrigger>
  <DrawerContent className="h-[400px]">
    <DrawerHeader>
      <DrawerTitle>Notifications</DrawerTitle>
      <DrawerDescription>
        You have 3 unread notifications
      </DrawerDescription>
    </DrawerHeader>
    <ScrollArea className="flex-1 px-4">
      <div className="space-y-4 py-4">
        <div className="flex items-start space-x-4 rounded-lg border p-3">
          <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New message from Alice</p>
            <p className="text-sm text-gray-500">
              Hey! Just wanted to check in about the project...
            </p>
            <p className="text-xs text-gray-400">2 hours ago</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 rounded-lg border p-3">
          <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Task completed</p>
            <p className="text-sm text-gray-500">
              Your deployment has been completed successfully
            </p>
            <p className="text-xs text-gray-400">5 hours ago</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 rounded-lg border p-3">
          <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">System update available</p>
            <p className="text-sm text-gray-500">
              A new version is available. Update now?
            </p>
            <p className="text-xs text-gray-400">1 day ago</p>
          </div>
        </div>
      </div>
    </ScrollArea>
    <DrawerFooter>
      <Button variant="outline" className="w-full">
        Mark all as read
      </Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    component: () => (
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0">
              3
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[400px]">
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              You have 3 unread notifications
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-4 py-4">
              <div className="flex items-start space-x-4 rounded-lg border p-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New message from Alice</p>
                  <p className="text-sm text-gray-500">
                    Hey! Just wanted to check in about the project...
                  </p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border p-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Task completed</p>
                  <p className="text-sm text-gray-500">
                    Your deployment has been completed successfully
                  </p>
                  <p className="text-xs text-gray-400">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border p-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">System update available</p>
                  <p className="text-sm text-gray-500">
                    A new version is available. Update now?
                  </p>
                  <p className="text-xs text-gray-400">1 day ago</p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DrawerFooter>
            <Button variant="outline" className="w-full">
              Mark all as read
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  {
    title: "Search Drawer",
    description: "A drawer for search functionality.",
    code: `<Drawer direction="top">
  <DrawerTrigger asChild>
    <Button variant="outline">
      <Search className="mr-2 h-4 w-4" />
      Search
    </Button>
  </DrawerTrigger>
  <DrawerContent className="h-[500px]">
    <DrawerHeader>
      <DrawerTitle>Search</DrawerTitle>
      <DrawerDescription>
        Search for documents, people, or projects
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input 
          placeholder="Type to search..." 
          className="pl-10"
        />
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-500 mb-2">Recent searches</p>
        <Button variant="ghost" className="w-full justify-start text-left">
          <FileText className="mr-2 h-4 w-4" />
          Q4 Financial Report
        </Button>
        <Button variant="ghost" className="w-full justify-start text-left">
          <User className="mr-2 h-4 w-4" />
          John Doe - Developer
        </Button>
        <Button variant="ghost" className="w-full justify-start text-left">
          <FileText className="mr-2 h-4 w-4" />
          Project Roadmap 2024
        </Button>
      </div>
    </div>
  </DrawerContent>
</Drawer>`,
    component: () => (
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[500px]">
          <DrawerHeader>
            <DrawerTitle>Search</DrawerTitle>
            <DrawerDescription>
              Search for documents, people, or projects
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Type to search..." 
                className="pl-10"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500 mb-2">Recent searches</p>
              <Button variant="ghost" className="w-full justify-start text-left">
                <FileText className="mr-2 h-4 w-4" />
                Q4 Financial Report
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left">
                <User className="mr-2 h-4 w-4" />
                John Doe - Developer
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left">
                <FileText className="mr-2 h-4 w-4" />
                Project Roadmap 2024
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    )
  },
  {
    title: "Multi-Step Form Drawer",
    description: "A drawer with a multi-step form process.",
    code: `const [step, setStep] = useState(1)

return (
  <Drawer>
    <DrawerTrigger asChild>
      <Button>Start Application</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Application Form</DrawerTitle>
        <DrawerDescription>
          Step {step} of 3
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-medium">Personal Information</h3>
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-medium">Contact Details</h3>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-medium">Review & Submit</h3>
            <div className="rounded-lg border p-4 space-y-2">
              <p className="text-sm"><strong>Name:</strong> John Doe</p>
              <p className="text-sm"><strong>Email:</strong> john@example.com</p>
              <p className="text-sm"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        )}
      </div>
      <DrawerFooter>
        <div className="flex gap-2 w-full">
          {step > 1 && (
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)}
              className="flex-1"
            >
              Previous
            </Button>
          )}
          {step < 3 ? (
            <Button 
              onClick={() => setStep(step + 1)}
              className="flex-1"
            >
              Next
            </Button>
          ) : (
            <Button className="flex-1">
              Submit Application
            </Button>
          )}
        </div>
        <DrawerClose asChild>
          <Button variant="ghost" className="w-full">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)`,
    component: () => {
      const [step, setStep] = useState(1)

      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Start Application</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Application Form</DrawerTitle>
              <DrawerDescription>
                Step {step} of 3
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-medium">Personal Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-medium">Contact Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-medium">Review & Submit</h3>
                  <div className="rounded-lg border p-4 space-y-2">
                    <p className="text-sm"><strong>Name:</strong> John Doe</p>
                    <p className="text-sm"><strong>Email:</strong> john@example.com</p>
                    <p className="text-sm"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              )}
            </div>
            <DrawerFooter>
              <div className="flex gap-2 w-full">
                {step > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                )}
                {step < 3 ? (
                  <Button 
                    onClick={() => setStep(step + 1)}
                    className="flex-1"
                  >
                    Next
                  </Button>
                ) : (
                  <Button className="flex-1">
                    Submit Application
                  </Button>
                )}
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" className="w-full">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
    }
  }
]