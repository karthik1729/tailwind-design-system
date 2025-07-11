"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ComponentExample } from "@/lib/component-docs"
import { Terminal, AlertCircle, InfoIcon, CheckCircle2, AlertTriangle } from "lucide-react"

export const alertExamples: ComponentExample[] = [
  {
    title: "Basic Alert",
    description: "A simple alert with title and description.",
    code: `<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Destructive Alert",
    description: "Alert with destructive variant for errors or warnings.",
    code: `<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Information Alert",
    description: "Alert styled for informational messages.",
    code: `<Alert className="border-blue-200 bg-blue-50 text-blue-900">
  <InfoIcon className="h-4 w-4 text-blue-600" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription className="text-blue-800">
    Your account has been upgraded to Pro. Enjoy all the new features!
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert className="border-blue-200 bg-blue-50 text-blue-900">
        <InfoIcon className="h-4 w-4 text-blue-600" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription className="text-blue-800">
          Your account has been upgraded to Pro. Enjoy all the new features!
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Success Alert",
    description: "Alert styled for success messages.",
    code: `<Alert className="border-green-200 bg-green-50 text-green-900">
  <CheckCircle2 className="h-4 w-4 text-green-600" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription className="text-green-800">
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert className="border-green-200 bg-green-50 text-green-900">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription className="text-green-800">
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Warning Alert",
    description: "Alert styled for warning messages.",
    code: `<Alert className="border-yellow-200 bg-yellow-50 text-yellow-900">
  <AlertTriangle className="h-4 w-4 text-yellow-600" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription className="text-yellow-800">
    Your subscription is about to expire in 3 days.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900">
        <AlertTriangle className="h-4 w-4 text-yellow-600" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription className="text-yellow-800">
          Your subscription is about to expire in 3 days.
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Alert without Icon",
    description: "Simple alert without an icon.",
    code: `<Alert>
  <AlertTitle>System Update</AlertTitle>
  <AlertDescription>
    We'll be performing scheduled maintenance on Sunday, December 15th from 2:00 AM to 4:00 AM EST.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert>
        <AlertTitle>System Update</AlertTitle>
        <AlertDescription>
          We'll be performing scheduled maintenance on Sunday, December 15th from 2:00 AM to 4:00 AM EST.
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Alert with Only Description",
    description: "Alert with description only, no title.",
    code: `<Alert>
  <InfoIcon className="h-4 w-4" />
  <AlertDescription>
    Use the command palette to quickly navigate between pages.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          Use the command palette to quickly navigate between pages.
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Alert with Action",
    description: "Alert with an action button or link.",
    code: `<Alert>
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Verification Required</AlertTitle>
  <AlertDescription>
    Please verify your email address to continue.{" "}
    <a href="#" className="font-medium underline underline-offset-4">
      Resend verification email
    </a>
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Verification Required</AlertTitle>
        <AlertDescription>
          Please verify your email address to continue.{" "}
          <a href="#" className="font-medium underline underline-offset-4">
            Resend verification email
          </a>
        </AlertDescription>
      </Alert>
    )
  }
]