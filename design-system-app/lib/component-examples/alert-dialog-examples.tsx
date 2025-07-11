"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"

export const alertDialogExamples: ComponentExample[] = [
  {
    title: "Basic Alert Dialog",
    description: "A simple alert dialog with confirm and cancel actions.",
    code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    component: () => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
  {
    title: "Destructive Action Dialog",
    description: "Alert dialog for destructive actions with styled buttons.",
    code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete Account</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to delete your account? All of your data 
        will be permanently removed. This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">
        Delete Account
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    component: () => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Account</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete your account? All of your data 
              will be permanently removed. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">
              Delete Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
  {
    title: "Controlled Alert Dialog",
    description: "Alert dialog with controlled open state.",
    code: `const [open, setOpen] = useState(false)

return (
  <>
    <Button onClick={() => setOpen(true)}>Open Dialog</Button>
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Controlled Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            This dialog's open state is controlled by React state. 
            Click continue to close it programmatically.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => {
            console.log("Action confirmed")
            setOpen(false)
          }}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </>
)`,
    component: () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Controlled Dialog</AlertDialogTitle>
                <AlertDialogDescription>
                  This dialog's open state is controlled by React state. 
                  Click continue to close it programmatically.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => {
                  console.log("Action confirmed")
                  setOpen(false)
                }}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )
    }
  },
  {
    title: "Save Changes Dialog",
    description: "Alert dialog for unsaved changes warning.",
    code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Leave Page</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Save your changes?</AlertDialogTitle>
      <AlertDialogDescription>
        You have unsaved changes. Do you want to save them before leaving?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Don't Save</AlertDialogCancel>
      <AlertDialogAction>Save Changes</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    component: () => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Leave Page</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save your changes?</AlertDialogTitle>
            <AlertDialogDescription>
              You have unsaved changes. Do you want to save them before leaving?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Don't Save</AlertDialogCancel>
            <AlertDialogAction>Save Changes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
  {
    title: "Custom Trigger Element",
    description: "Alert dialog with custom trigger element using asChild.",
    code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <span className="text-red-600 underline cursor-pointer">
      Remove item
    </span>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Remove this item?</AlertDialogTitle>
      <AlertDialogDescription>
        This will remove the item from your cart. You can always add it back later.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep Item</AlertDialogCancel>
      <AlertDialogAction>Remove Item</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    component: () => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <span className="text-red-600 underline cursor-pointer">
            Remove item
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove this item?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the item from your cart. You can always add it back later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep Item</AlertDialogCancel>
            <AlertDialogAction>Remove Item</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
  {
    title: "Logout Confirmation",
    description: "Alert dialog for logout confirmation.",
    code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="ghost">Logout</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Logout</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to logout? You'll need to login again to access your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
      <AlertDialogAction>Logout</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    component: () => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost">Logout</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout? You'll need to login again to access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
            <AlertDialogAction>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
  {
    title: "Terms Acceptance Dialog",
    description: "Alert dialog for accepting terms and conditions.",
    code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Continue to Checkout</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Terms & Conditions</AlertDialogTitle>
      <AlertDialogDescription>
        By continuing, you agree to our Terms of Service and Privacy Policy. 
        Please review them carefully before proceeding with your purchase.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Review Terms</AlertDialogCancel>
      <AlertDialogAction>I Agree</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    component: () => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Continue to Checkout</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Terms & Conditions</AlertDialogTitle>
            <AlertDialogDescription>
              By continuing, you agree to our Terms of Service and Privacy Policy. 
              Please review them carefully before proceeding with your purchase.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Review Terms</AlertDialogCancel>
            <AlertDialogAction>I Agree</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
  {
    title: "With Custom Actions",
    description: "Alert dialog with custom action handlers.",
    code: `const [result, setResult] = useState("")

return (
  <div className="space-y-4">
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Options</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Choose an action</AlertDialogTitle>
          <AlertDialogDescription>
            Select how you would like to proceed with this operation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setResult("Cancelled")}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant="outline"
            onClick={() => setResult("Saved as draft")}
          >
            Save Draft
          </Button>
          <AlertDialogAction onClick={() => setResult("Published")}>
            Publish
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    {result && (
      <p className="text-sm text-muted-foreground">
        Last action: <strong>{result}</strong>
      </p>
    )}
  </div>
)`,
    component: () => {
      const [result, setResult] = useState("")

      return (
        <div className="space-y-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Options</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Choose an action</AlertDialogTitle>
                <AlertDialogDescription>
                  Select how you would like to proceed with this operation.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setResult("Cancelled")}>
                  Cancel
                </AlertDialogCancel>
                <Button
                  variant="outline"
                  onClick={() => setResult("Saved as draft")}
                >
                  Save Draft
                </Button>
                <AlertDialogAction onClick={() => setResult("Published")}>
                  Publish
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {result && (
            <p className="text-sm text-muted-foreground">
              Last action: <strong>{result}</strong>
            </p>
          )}
        </div>
      )
    }
  }
]