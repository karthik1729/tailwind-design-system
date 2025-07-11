"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { ComponentExample } from "@/lib/component-docs"

export const sonnerExamples: ComponentExample[] = [
  {
    title: "Basic Toast",
    description: "Simple toast notification.",
    code: `<Button 
  variant="outline" 
  onClick={() => toast("Event has been created")}
>
  Show Toast
</Button>`,
    component: () => (
      <Button 
        variant="outline" 
        onClick={() => toast("Event has been created")}
      >
        Show Toast
      </Button>
    )
  },
  {
    title: "Toast with Description",
    description: "Toast notification with a description.",
    code: `<Button 
  variant="outline" 
  onClick={() => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    })
  }}
>
  Show Toast
</Button>`,
    component: () => (
      <Button 
        variant="outline" 
        onClick={() => {
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }}
      >
        Show Toast
      </Button>
    )
  },
  {
    title: "Success Toast",
    description: "Success toast notification.",
    code: `<Button 
  variant="outline" 
  onClick={() => {
    toast.success("Event has been created successfully")
  }}
>
  Show Success
</Button>`,
    component: () => (
      <Button 
        variant="outline" 
        onClick={() => {
          toast.success("Event has been created successfully")
        }}
      >
        Show Success
      </Button>
    )
  },
  {
    title: "Error Toast",
    description: "Error toast notification.",
    code: `<Button 
  variant="outline" 
  onClick={() => {
    toast.error("Unable to create event", {
      description: "There was a problem with your request.",
    })
  }}
>
  Show Error
</Button>`,
    component: () => (
      <Button 
        variant="outline" 
        onClick={() => {
          toast.error("Unable to create event", {
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Error
      </Button>
    )
  },
  {
    title: "Promise Toast",
    description: "Toast that reflects the state of a promise.",
    code: `<Button 
  variant="outline" 
  onClick={() => {
    const promise = () => new Promise((resolve) => 
      setTimeout(() => resolve({ name: 'Sonner' }), 2000)
    );

    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => {
        return \`\${data.name} toast has been added\`;
      },
      error: 'Error',
    });
  }}
>
  Show Promise
</Button>`,
    component: () => (
      <Button 
        variant="outline" 
        onClick={() => {
          const promise = () => new Promise((resolve) => 
            setTimeout(() => resolve({ name: 'Sonner' }), 2000)
          );

          toast.promise(promise, {
            loading: 'Loading...',
            success: (data: any) => {
              return `${data.name} toast has been added`;
            },
            error: 'Error',
          });
        }}
      >
        Show Promise
      </Button>
    )
  },
  {
    title: "Toast with Action",
    description: "Toast notification with action buttons.",
    code: `<Button 
  variant="outline" 
  onClick={() => {
    toast("Event has been created", {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo")
      },
    })
  }}
>
  Show Toast with Action
</Button>`,
    component: () => (
      <Button 
        variant="outline" 
        onClick={() => {
          toast("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo")
            },
          })
        }}
      >
        Show Toast with Action
      </Button>
    )
  },
  {
    title: "Custom Duration",
    description: "Toast with custom duration.",
    code: `<div className="flex gap-2">
  <Button 
    variant="outline" 
    onClick={() => {
      toast("This will close in 1 second", {
        duration: 1000,
      })
    }}
  >
    1 Second
  </Button>
  <Button 
    variant="outline" 
    onClick={() => {
      toast("This will close in 5 seconds", {
        duration: 5000,
      })
    }}
  >
    5 Seconds
  </Button>
  <Button 
    variant="outline" 
    onClick={() => {
      toast("This will stay until dismissed", {
        duration: Infinity,
      })
    }}
  >
    Persistent
  </Button>
</div>`,
    component: () => (
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          onClick={() => {
            toast("This will close in 1 second", {
              duration: 1000,
            })
          }}
        >
          1 Second
        </Button>
        <Button 
          variant="outline" 
          onClick={() => {
            toast("This will close in 5 seconds", {
              duration: 5000,
            })
          }}
        >
          5 Seconds
        </Button>
        <Button 
          variant="outline" 
          onClick={() => {
            toast("This will stay until dismissed", {
              duration: Infinity,
            })
          }}
        >
          Persistent
        </Button>
      </div>
    )
  },
  {
    title: "Rich Content",
    description: "Toast with custom JSX content.",
    code: `<Button 
  variant="outline" 
  onClick={() => {
    toast(
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-blue-500" />
        <div>
          <p className="font-semibold">New message</p>
          <p className="text-sm">From John Doe</p>
        </div>
      </div>
    )
  }}
>
  Rich Content Toast
</Button>`,
    component: () => (
      <Button 
        variant="outline" 
        onClick={() => {
          toast(
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500" />
              <div>
                <p className="font-semibold">New message</p>
                <p className="text-sm">From John Doe</p>
              </div>
            </div>
          )
        }}
      >
        Rich Content Toast
      </Button>
    )
  }
]