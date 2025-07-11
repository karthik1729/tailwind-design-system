"use client"

import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { AlertCircle, CheckCircle2, InfoIcon, Terminal, TriangleAlert, XCircle } from "lucide-react"

export default function FeedbackPage() {
  const [progress, setProgress] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)

  // Simulate progress for demo
  const simulateProgress = () => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Feedback Components</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Components for displaying feedback, alerts, loading states, and user confirmations.
        </p>
      </div>

      {/* Alert Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Alert</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Displays important messages to users with various severity levels.
          </p>
        </div>

        {/* Default Alert */}
        <PreviewContainer
          title="Default Alert"
          description="Standard alert for general information"
          code={`<Alert>
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}
          component={
            <div className="w-full max-w-2xl p-6 space-y-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components and dependencies to your app using the cli.
                </AlertDescription>
              </Alert>
            </div>
          }
        />

        {/* Destructive Alert */}
        <PreviewContainer
          title="Destructive Alert"
          description="Alert for errors or destructive actions"
          code={`<Alert variant="destructive">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
          component={
            <div className="w-full max-w-2xl p-6 space-y-4">
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          }
        />

        {/* Alert Variants */}
        <PreviewContainer
          title="Alert Variants"
          description="Different alert styles for various contexts"
          code={`{/* Success Alert - Using the new success variant */}
<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>

{/* Warning Alert - Using the new warning variant */}
<Alert variant="warning">
  <TriangleAlert className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Your API usage is approaching the monthly limit.
  </AlertDescription>
</Alert>

{/* Info Alert - Using the new info variant */}
<Alert variant="info">
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    A new update is available. Click here to learn more.
  </AlertDescription>
</Alert>`}
          component={
            <div className="w-full max-w-2xl p-6 space-y-4">
              <Alert variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>

              <Alert variant="warning">
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Your API usage is approaching the monthly limit.
                </AlertDescription>
              </Alert>

              <Alert variant="info">
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  A new update is available. Click here to learn more.
                </AlertDescription>
              </Alert>
            </div>
          }
        />

        {/* Alert with Actions */}
        <PreviewContainer
          title="Alert with Actions"
          description="Alert with interactive elements"
          code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Terminal</AlertTitle>
  <AlertDescription className="flex items-center justify-between">
    <span>You can add components from the command line.</span>
    <Button size="sm" variant="outline" className="ml-4">
      Learn More
    </Button>
  </AlertDescription>
</Alert>`}
          component={
            <div className="w-full max-w-2xl p-6">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Terminal</AlertTitle>
                <AlertDescription className="flex items-center justify-between">
                  <span>You can add components from the command line.</span>
                  <Button size="sm" variant="outline" className="ml-4">
                    Learn More
                  </Button>
                </AlertDescription>
              </Alert>
            </div>
          }
        />
      </section>

      {/* Progress Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Progress</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Shows the completion progress of a task or process.
          </p>
        </div>

        {/* Basic Progress */}
        <PreviewContainer
          title="Basic Progress"
          description="Simple progress indicator with different values"
          code={`<Progress value={33} className="w-full" />
<Progress value={66} className="w-full" />
<Progress value={100} className="w-full" />`}
          component={
            <div className="w-full max-w-2xl p-6 space-y-4">
              <Progress value={33} className="w-full" />
              <Progress value={66} className="w-full" />
              <Progress value={100} className="w-full" />
            </div>
          }
        />

        {/* Progress with Label */}
        <PreviewContainer
          title="Progress with Label"
          description="Progress bar with percentage label"
          code={`<div className="space-y-2">
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium">Uploading files...</span>
    <span className="text-sm text-gray-500">{progress}%</span>
  </div>
  <Progress value={progress} className="w-full" />
</div>`}
          component={
            <div className="w-full max-w-2xl p-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Uploading files...</span>
                  <span className="text-sm text-gray-500">{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
                <Button onClick={simulateProgress} size="sm" className="mt-2">
                  Simulate Progress
                </Button>
              </div>
            </div>
          }
        />

        {/* Styled Progress */}
        <PreviewContainer
          title="Styled Progress"
          description="Progress bars with custom styling"
          code={`{/* Different Heights */}
<Progress value={60} className="w-full h-1" />
<Progress value={60} className="w-full h-2" />
<Progress value={60} className="w-full h-3" />
<Progress value={60} className="w-full h-4" />

{/* Custom Colors */}
<Progress value={80} className="w-full [&>div]:bg-green-500" />
<Progress value={50} className="w-full [&>div]:bg-yellow-500" />
<Progress value={30} className="w-full [&>div]:bg-red-500" />`}
          component={
            <div className="w-full max-w-2xl p-6 space-y-4">
              <div className="space-y-2">
                <Progress value={60} className="w-full h-1" />
                <Progress value={60} className="w-full h-2" />
                <Progress value={60} className="w-full h-3" />
                <Progress value={60} className="w-full h-4" />
              </div>
              <div className="space-y-2 mt-6">
                <Progress value={80} className="w-full [&>div]:bg-green-500" />
                <Progress value={50} className="w-full [&>div]:bg-yellow-500" />
                <Progress value={30} className="w-full [&>div]:bg-red-500" />
              </div>
            </div>
          }
        />
      </section>

      {/* Skeleton Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skeleton</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Placeholder loading states that indicate content is being fetched.
          </p>
        </div>

        {/* Basic Skeleton */}
        <PreviewContainer
          title="Basic Skeleton"
          description="Simple skeleton loading states"
          code={`<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
  <Skeleton className="h-4 w-[150px]" />
</div>`}
          component={
            <div className="w-full max-w-2xl p-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          }
        />

        {/* Card Skeleton */}
        <PreviewContainer
          title="Card Skeleton"
          description="Skeleton loading state for card content"
          code={`<Card>
  <CardHeader>
    <Skeleton className="h-6 w-[180px]" />
    <Skeleton className="h-4 w-[240px]" />
  </CardHeader>
  <CardContent className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </CardContent>
  <CardFooter>
    <Skeleton className="h-10 w-[120px]" />
  </CardFooter>
</Card>`}
          component={
            <div className="w-full max-w-md p-6">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-[180px]" />
                  <Skeleton className="h-4 w-[240px]" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-[120px]" />
                </CardFooter>
              </Card>
            </div>
          }
        />

        {/* Complex Skeleton Layout */}
        <PreviewContainer
          title="Complex Skeleton Layout"
          description="Skeleton for more complex content layouts"
          code={`<div className="flex items-start space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
    <div className="flex items-center space-x-4 pt-2">
      <Skeleton className="h-8 w-[80px]" />
      <Skeleton className="h-8 w-[80px]" />
      <Skeleton className="h-8 w-[80px]" />
    </div>
  </div>
</div>`}
          component={
            <div className="w-full max-w-2xl p-6">
              <div className="flex items-start space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <div className="flex items-center space-x-4 pt-2">
                    <Skeleton className="h-8 w-[80px]" />
                    <Skeleton className="h-8 w-[80px]" />
                    <Skeleton className="h-8 w-[80px]" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </section>

      {/* Dialog Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Modal dialogs for presenting content or gathering user input.
          </p>
        </div>

        {/* Basic Dialog */}
        <PreviewContainer
          title="Basic Dialog"
          description="Simple dialog with header and content"
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
          component={
            <div className="p-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          }
        />

        {/* Dialog with Form */}
        <PreviewContainer
          title="Dialog with Form"
          description="Dialog containing a form with actions"
          code={`<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
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
        <label htmlFor="name" className="text-right">
          Name
        </label>
        <input
          id="name"
          defaultValue="Pedro Duarte"
          className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="username" className="text-right">
          Username
        </label>
        <input
          id="username"
          defaultValue="@peduarte"
          className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit" onClick={() => setDialogOpen(false)}>
        Save changes
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          component={
            <div className="p-6">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Edit Profile</Button>
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
                      <label htmlFor="name" className="text-right">
                        Name
                      </label>
                      <input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="username" className="text-right">
                        Username
                      </label>
                      <input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setDialogOpen(false)}>
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          }
        />
      </section>

      {/* Alert Dialog Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Alert Dialog</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Modal dialogs that interrupt the user with important information and require a response.
          </p>
        </div>

        {/* Basic Alert Dialog */}
        <PreviewContainer
          title="Basic Alert Dialog"
          description="Simple confirmation dialog"
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
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
</AlertDialog>`}
          component={
            <div className="p-6">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Account</Button>
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
            </div>
          }
        />

        {/* Custom Alert Dialog */}
        <PreviewContainer
          title="Custom Alert Dialog"
          description="Alert dialog with custom styling and content"
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">
      <TriangleAlert className="h-4 w-4 mr-2" />
      Show Warning
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-full">
          <TriangleAlert className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
        </div>
        <AlertDialogTitle>Warning: Unsaved Changes</AlertDialogTitle>
      </div>
      <AlertDialogDescription className="mt-3">
        You have unsaved changes. If you leave this page, your changes will be lost.
        Do you want to save your changes before continuing?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="flex-col sm:flex-row gap-2">
      <AlertDialogCancel className="sm:order-1">Don't Save</AlertDialogCancel>
      <AlertDialogCancel className="sm:order-2">Cancel</AlertDialogCancel>
      <AlertDialogAction className="sm:order-3">Save Changes</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
          component={
            <div className="p-6">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">
                    <TriangleAlert className="h-4 w-4 mr-2" />
                    Show Warning
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                        <TriangleAlert className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <AlertDialogTitle>Warning: Unsaved Changes</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className="mt-3">
                      You have unsaved changes. If you leave this page, your changes will be lost.
                      Do you want to save your changes before continuing?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                    <AlertDialogCancel className="sm:order-1">Don't Save</AlertDialogCancel>
                    <AlertDialogCancel className="sm:order-2">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="sm:order-3">Save Changes</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          }
        />
      </section>
    </div>
  )
}