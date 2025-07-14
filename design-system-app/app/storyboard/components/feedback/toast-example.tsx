"use client"

import { Button } from "@/components/ui/button"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle2, XCircle, InfoIcon, TriangleAlert, Loader2, Undo } from "lucide-react"

export function ToastExample() {

  const simulatePromise = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "Task" })
      }, 3000)
    })
    
    toast.promise(promise, {
      loading: "Processing your request...",
      success: (data) => {
        return `${data.name} completed successfully!`
      },
      error: "Something went wrong",
    })
  }

  const showProgressToast = () => {
    const toastId = toast("Uploading file...", {
      description: "0% complete",
      duration: 100000,
    })

    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      if (progress <= 100) {
        toast.update(toastId, {
          title: "Uploading file...",
          description: `${progress}% complete`,
        })
      }
      if (progress === 100) {
        clearInterval(interval)
        setTimeout(() => {
          toast.update(toastId, {
            title: "Upload complete!",
            description: "Your file has been uploaded successfully",
            variant: "success",
            duration: 4000,
          })
        }, 500)
      }
    }, 500)
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Toast</h2>
        <p className="text-muted-foreground mb-6">
          Temporary notifications that slide in and out with smooth animations.
        </p>
      </div>

      {/* Basic Toast Types */}
      <PreviewContainer
        title="Basic Toast Types"
        description="Different toast types for various feedback scenarios"
        code={`// Basic toast
toast("Meeting scheduled successfully")

// Success toast
toast.success("Your changes have been saved")

// Error toast
toast.error("Failed to delete the file")

// Info toast
toast.info("New update available")

// Warning toast
toast.warning("API rate limit approaching")`}
        component={
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              onClick={() => toast("Meeting scheduled successfully")}
            >
              Basic Toast
            </Button>
            <Button 
              variant="outline" 
              onClick={() => toast.success("Your changes have been saved")}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Success
            </Button>
            <Button 
              variant="outline" 
              onClick={() => toast.error("Failed to delete the file")}
            >
              <XCircle className="w-4 h-4 mr-2" />
              Error
            </Button>
            <Button 
              variant="outline" 
              onClick={() => toast.info("New update available")}
            >
              <InfoIcon className="w-4 h-4 mr-2" />
              Info
            </Button>
            <Button 
              variant="outline" 
              onClick={() => toast.warning("API rate limit approaching")}
            >
              <TriangleAlert className="w-4 h-4 mr-2" />
              Warning
            </Button>
          </div>
        }
      />

      {/* Toast with Description */}
      <PreviewContainer
        title="Toast with Description"
        description="Toasts with additional context and descriptions"
        code={`toast("Event has been created", {
  description: "Monday, January 3rd at 6:00pm",
})

toast.success("Welcome back!", {
  description: "Your session has been restored",
})`}
        component={
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              onClick={() => 
                toast("Event has been created", {
                  description: "Monday, January 3rd at 6:00pm",
                })
              }
            >
              With Description
            </Button>
            <Button 
              variant="outline" 
              onClick={() => 
                toast.success("Welcome back!", {
                  description: "Your session has been restored",
                })
              }
            >
              Success with Description
            </Button>
          </div>
        }
      />

      {/* Toast with Action */}
      <PreviewContainer
        title="Toast with Action"
        description="Interactive toasts with action buttons"
        code={`toast("File deleted", {
  description: "resume.pdf has been deleted",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
})

toast.error("Failed to send email", {
  action: {
    label: "Retry",
    onClick: () => console.log("Retrying..."),
  },
})`}
        component={
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              onClick={() => 
                toast("File deleted", {
                  description: "resume.pdf has been deleted",
                  action: {
                    label: "Undo",
                    onClick: () => {
                      toast.success("File restored")
                    },
                  },
                })
              }
            >
              <Undo className="w-4 h-4 mr-2" />
              With Undo Action
            </Button>
            <Button 
              variant="outline" 
              onClick={() => 
                toast.error("Failed to send email", {
                  action: {
                    label: "Retry",
                    onClick: () => {
                      toast.success("Email sent successfully")
                    },
                  },
                })
              }
            >
              Error with Retry
            </Button>
          </div>
        }
      />

      {/* Promise Toast */}
      <PreviewContainer
        title="Promise Toast"
        description="Automatically updating toasts based on promise state"
        code={`const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: "Task" })
  }, 3000)
})

toast.promise(promise, {
  loading: "Processing your request...",
  success: (data) => {
    return \`\${data.name} completed successfully!\`
  },
  error: "Something went wrong",
})`}
        component={
          <Button 
            variant="outline" 
            onClick={simulatePromise}
            className="transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Loader2 className="w-4 h-4 mr-2" />
            Show Promise Toast
          </Button>
        }
      />

      {/* Progress Toast */}
      <PreviewContainer
        title="Progress Toast"
        description="Toast with updating progress indicator"
        code={`const toastId = toast("Uploading file...", {
  description: "0% complete",
  duration: 100000,
})

// Update the existing toast
toast.update(toastId, {
  title: "Uploading file...",
  description: "50% complete",
})

// Complete with success
toast.update(toastId, {
  title: "Upload complete!",
  description: "Your file has been uploaded successfully",
  variant: "success",
  duration: 4000,
})`}
        component={
          <Button 
            variant="outline" 
            onClick={showProgressToast}
          >
            Show Progress Toast
          </Button>
        }
      />

      {/* Custom Styled Toast */}
      <PreviewContainer
        title="Custom Styled Toast"
        description="Toast with custom styling and content"
        code={`toast.custom(
  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg shadow-lg">
    <CheckCircle2 className="w-5 h-5" />
    <div>
      <p className="font-semibold">Premium Feature Unlocked!</p>
      <p className="text-sm opacity-90">You now have access to all features</p>
    </div>
  </div>
)`}
        component={
          <Button 
            variant="outline" 
            onClick={() => 
              toast.custom(
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg shadow-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Premium Feature Unlocked!</p>
                    <p className="text-sm opacity-90">You now have access to all features</p>
                  </div>
                </div>
              )
            }
          >
            Custom Styled Toast
          </Button>
        }
      />

      {/* Positioning */}
      <PreviewContainer
        title="Toast Positioning"
        description="Different positions for toast notifications"
        code={`// Per toast positioning
toast("Top left message", {
  position: "top-left",
})

toast.success("Bottom center success", {
  position: "bottom-center",
})`}
        component={
          <div className="flex flex-wrap gap-2">
            {["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"].map((position) => (
              <Button
                key={position}
                variant="outline"
                size="sm"
                onClick={() => 
                  toast(`Toast at ${position}`, {
                    position: position as any,
                  })
                }
              >
                {position}
              </Button>
            ))}
          </div>
        }
      />
    </>
  )
}