"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import {
  Copy,
  Share,
  Plus,
  Settings,
  CreditCard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  Twitter,
  Facebook,
  Check,
  AlertCircle,
} from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const dialogExamples: ComponentExample[] = [
  {
    title: "Basic Dialog",
    description: "A simple dialog with header, content, and footer.",
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          id="name"
          defaultValue="Pedro Duarte"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input
          id="username"
          defaultValue="@peduarte"
          className="col-span-3"
        />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    component: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  {
    title: "Share Dialog",
    description: "Dialog for sharing content via different platforms.",
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">
      <Share className="mr-2 h-4 w-4" />
      Share
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Share link</DialogTitle>
      <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2">
        <Label htmlFor="link" className="sr-only">
          Link
        </Label>
        <Input
          id="link"
          defaultValue="https://ui.shadcn.com/docs/installation"
          readOnly
        />
      </div>
      <Button type="submit" size="sm" className="px-3">
        <span className="sr-only">Copy</span>
        <Copy className="h-4 w-4" />
      </Button>
    </div>
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button" variant="secondary">
          Close
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    component: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  {
    title: "Custom Close Button",
    description: "Dialog with custom close button and actions.",
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button>
      <Settings className="mr-2 h-4 w-4" />
      Open Settings
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Settings</DialogTitle>
      <DialogDescription>
        Manage your account settings and preferences.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="theme">Theme</Label>
        <Select defaultValue="system">
          <SelectTrigger id="theme">
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="language">Language</Label>
        <Select defaultValue="en">
          <SelectTrigger id="language">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save preferences</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    component: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Open Settings
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Manage your account settings and preferences.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="theme">Theme</Label>
              <Select defaultValue="system">
                <SelectTrigger id="theme">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  {
    title: "Scrollable Dialog",
    description: "Dialog with scrollable content area.",
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">View Terms</Button>
  </DialogTrigger>
  <DialogContent className="max-h-[80vh]">
    <DialogHeader>
      <DialogTitle>Terms of Service</DialogTitle>
      <DialogDescription>
        Last updated: January 1, 2024
      </DialogDescription>
    </DialogHeader>
    <div className="overflow-y-auto max-h-[50vh] pr-2">
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-medium">1. Acceptance of Terms</h4>
          <p className="text-gray-600 mt-1">
            By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </div>
        <div>
          <h4 className="font-medium">2. Use License</h4>
          <p className="text-gray-600 mt-1">
            Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.
          </p>
        </div>
        <div>
          <h4 className="font-medium">3. Disclaimer</h4>
          <p className="text-gray-600 mt-1">
            The materials on this service are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>
        <div>
          <h4 className="font-medium">4. Limitations</h4>
          <p className="text-gray-600 mt-1">
            In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our service.
          </p>
        </div>
        <div>
          <h4 className="font-medium">5. Privacy Policy</h4>
          <p className="text-gray-600 mt-1">
            Your privacy is important to us. Our privacy policy explains how we collect, use, and protect your information when you use our service.
          </p>
        </div>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Decline</Button>
      </DialogClose>
      <Button>Accept</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    component: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View Terms</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Last updated: January 1, 2024
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[50vh] pr-2">
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium">1. Acceptance of Terms</h4>
                <p className="text-gray-600 mt-1">
                  By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>
              <div>
                <h4 className="font-medium">2. Use License</h4>
                <p className="text-gray-600 mt-1">
                  Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.
                </p>
              </div>
              <div>
                <h4 className="font-medium">3. Disclaimer</h4>
                <p className="text-gray-600 mt-1">
                  The materials on this service are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
              <div>
                <h4 className="font-medium">4. Limitations</h4>
                <p className="text-gray-600 mt-1">
                  In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our service.
                </p>
              </div>
              <div>
                <h4 className="font-medium">5. Privacy Policy</h4>
                <p className="text-gray-600 mt-1">
                  Your privacy is important to us. Our privacy policy explains how we collect, use, and protect your information when you use our service.
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Decline</Button>
            </DialogClose>
            <Button>Accept</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  {
    title: "Team Members Dialog",
    description: "Dialog for managing team members.",
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button>
      <Users className="mr-2 h-4 w-4" />
      Team Members
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[550px]">
    <DialogHeader>
      <DialogTitle>Team Members</DialogTitle>
      <DialogDescription>
        Invite new team members and manage existing ones.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">Current Members</h4>
        <Button size="sm">
          <UserPlus className="mr-2 h-4 w-4" />
          Invite
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div>
              <p className="text-sm font-medium">Alice Johnson</p>
              <p className="text-xs text-gray-500">alice@example.com</p>
            </div>
          </div>
          <span className="text-xs text-gray-500">Admin</span>
        </div>
        <div className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div>
              <p className="text-sm font-medium">Bob Smith</p>
              <p className="text-xs text-gray-500">bob@example.com</p>
            </div>
          </div>
          <span className="text-xs text-gray-500">Member</span>
        </div>
        <div className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div>
              <p className="text-sm font-medium">Carol Davis</p>
              <p className="text-xs text-gray-500">carol@example.com</p>
            </div>
          </div>
          <span className="text-xs text-gray-500">Member</span>
        </div>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Close</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    component: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Team Members
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Team Members</DialogTitle>
            <DialogDescription>
              Invite new team members and manage existing ones.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Current Members</h4>
              <Button size="sm">
                <UserPlus className="mr-2 h-4 w-4" />
                Invite
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium">Alice Johnson</p>
                    <p className="text-xs text-gray-500">alice@example.com</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Admin</span>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium">Bob Smith</p>
                    <p className="text-xs text-gray-500">bob@example.com</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Member</span>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium">Carol Davis</p>
                    <p className="text-xs text-gray-500">carol@example.com</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Member</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  {
    title: "Create Post Dialog",
    description: "Dialog for creating a new post with multiple fields.",
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Create Post
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Create New Post</DialogTitle>
      <DialogDescription>
        Share your thoughts with the community.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Enter post title" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="content">Content</Label>
        <Textarea 
          id="content" 
          placeholder="What's on your mind?" 
          rows={4}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Select>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="tech">Technology</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          id="comments" 
          className="rounded"
        />
        <Label htmlFor="comments" className="text-sm font-normal">
          Allow comments on this post
        </Label>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Publish Post</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    component: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
            <DialogDescription>
              Share your thoughts with the community.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter post title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea 
                id="content" 
                placeholder="What's on your mind?" 
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="comments" 
                className="rounded"
              />
              <Label htmlFor="comments" className="text-sm font-normal">
                Allow comments on this post
              </Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Publish Post</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  {
    title: "Payment Method Dialog",
    description: "Dialog for adding a new payment method.",
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">
      <CreditCard className="mr-2 h-4 w-4" />
      Add Payment Method
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[475px]">
    <DialogHeader>
      <DialogTitle>Add Payment Method</DialogTitle>
      <DialogDescription>
        Add a new payment method to your account.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="card-number">Card Number</Label>
        <Input 
          id="card-number" 
          placeholder="1234 5678 9012 3456"
          type="text"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="expiry">Expiry Date</Label>
          <Input 
            id="expiry" 
            placeholder="MM/YY"
            type="text"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input 
            id="cvc" 
            placeholder="123"
            type="text"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="name">Cardholder Name</Label>
        <Input 
          id="name" 
          placeholder="John Doe"
          type="text"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="country">Country</Label>
        <Select>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Add Card</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    component: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <CreditCard className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>
              Add a new payment method to your account.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input 
                id="card-number" 
                placeholder="1234 5678 9012 3456"
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input 
                  id="expiry" 
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input 
                  id="cvc" 
                  placeholder="123"
                  type="text"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Add Card</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  {
    title: "Confirmation Dialog",
    description: "Dialog for confirming important actions.",
    code: `const [showDeleteDialog, setShowDeleteDialog] = useState(false)

return (
  <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
    <DialogTrigger asChild>
      <Button variant="destructive">Delete Account</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          Are you absolutely sure?
        </DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <p className="text-sm text-muted-foreground">
          Please type <span className="font-mono font-medium">DELETE</span> to confirm.
        </p>
        <Input 
          className="mt-2"
          placeholder="Type DELETE to confirm"
        />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button 
          variant="destructive"
          onClick={() => setShowDeleteDialog(false)}
        >
          Delete Account
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)`,
    component: () => {
      const [showDeleteDialog, setShowDeleteDialog] = useState(false)

      return (
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                Are you absolutely sure?
              </DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Please type <span className="font-mono font-medium">DELETE</span> to confirm.
              </p>
              <Input 
                className="mt-2"
                placeholder="Type DELETE to confirm"
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button 
                variant="destructive"
                onClick={() => setShowDeleteDialog(false)}
              >
                Delete Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }
  }
]