"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ComponentExample } from "@/lib/component-docs"
import { Terminal, AlertCircle, InfoIcon, CheckCircle2, AlertTriangle } from "lucide-react"

export const alertExamples: ComponentExample[] = [
  {
    title: "Basic Alert",
    description: "A simple alert with title and description.",
    code: `<Alert>
  <Terminal />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert>
        <Terminal />
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
  <AlertCircle />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert variant="destructive">
        <AlertCircle />
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
    code: `<Alert variant="info">
  <InfoIcon />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Your account has been upgraded to Pro. Enjoy all the new features!
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          Your account has been upgraded to Pro. Enjoy all the new features!
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Success Alert",
    description: "Alert styled for success messages.",
    code: `<Alert variant="success">
  <CheckCircle2 />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert variant="success">
        <CheckCircle2 />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    )
  },
  {
    title: "Warning Alert",
    description: "Alert styled for warning messages.",
    code: `<Alert variant="warning">
  <AlertTriangle />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Your subscription is about to expire in 3 days.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert variant="warning">
        <AlertTriangle />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
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
  <InfoIcon />
  <AlertDescription>
    Use the command palette to quickly navigate between pages.
  </AlertDescription>
</Alert>`,
    component: () => (
      <Alert>
        <InfoIcon />
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
  <AlertTriangle />
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
        <AlertTriangle />
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