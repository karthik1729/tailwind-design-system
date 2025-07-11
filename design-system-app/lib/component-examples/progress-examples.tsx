"use client"

import { Progress } from "@/components/ui/progress"
import { ComponentExample } from "@/lib/component-docs"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export const progressExamples: ComponentExample[] = [
  {
    title: "Basic Progress",
    description: "A simple progress bar with fixed value.",
    code: `<Progress value={33} />`,
    component: () => <Progress value={33} />
  },
  {
    title: "Different Values",
    description: "Progress bars with various completion states.",
    code: `<div className="space-y-4">
  <div>
    <p className="text-sm font-medium mb-2">0% Complete</p>
    <Progress value={0} />
  </div>
  <div>
    <p className="text-sm font-medium mb-2">25% Complete</p>
    <Progress value={25} />
  </div>
  <div>
    <p className="text-sm font-medium mb-2">50% Complete</p>
    <Progress value={50} />
  </div>
  <div>
    <p className="text-sm font-medium mb-2">75% Complete</p>
    <Progress value={75} />
  </div>
  <div>
    <p className="text-sm font-medium mb-2">100% Complete</p>
    <Progress value={100} />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">0% Complete</p>
          <Progress value={0} />
        </div>
        <div>
          <p className="text-sm font-medium mb-2">25% Complete</p>
          <Progress value={25} />
        </div>
        <div>
          <p className="text-sm font-medium mb-2">50% Complete</p>
          <Progress value={50} />
        </div>
        <div>
          <p className="text-sm font-medium mb-2">75% Complete</p>
          <Progress value={75} />
        </div>
        <div>
          <p className="text-sm font-medium mb-2">100% Complete</p>
          <Progress value={100} />
        </div>
      </div>
    )
  },
  {
    title: "Animated Progress",
    description: "Progress bar that animates to completion.",
    code: `const [progress, setProgress] = useState(0)

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

return (
  <div className="space-y-2">
    <Progress value={progress} />
    <p className="text-sm text-muted-foreground">{progress}% Complete</p>
  </div>
)`,
    component: () => {
      const [progress, setProgress] = useState(0)

      useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])

      return (
        <div className="space-y-2">
          <Progress value={progress} />
          <p className="text-sm text-muted-foreground">{progress}% Complete</p>
        </div>
      )
    }
  },
  {
    title: "Controlled Progress",
    description: "Progress bar with manual controls.",
    code: `const [progress, setProgress] = useState(30)

return (
  <div className="space-y-4">
    <Progress value={progress} />
    <div className="flex gap-2">
      <Button
        size="sm"
        onClick={() => setProgress(Math.max(0, progress - 10))}
        disabled={progress === 0}
      >
        Decrease
      </Button>
      <Button
        size="sm"
        onClick={() => setProgress(Math.min(100, progress + 10))}
        disabled={progress === 100}
      >
        Increase
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setProgress(0)}
      >
        Reset
      </Button>
    </div>
    <p className="text-sm text-muted-foreground">
      Current progress: {progress}%
    </p>
  </div>
)`,
    component: () => {
      const [progress, setProgress] = useState(30)

      return (
        <div className="space-y-4">
          <Progress value={progress} />
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => setProgress(Math.max(0, progress - 10))}
              disabled={progress === 0}
            >
              Decrease
            </Button>
            <Button
              size="sm"
              onClick={() => setProgress(Math.min(100, progress + 10))}
              disabled={progress === 100}
            >
              Increase
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setProgress(0)}
            >
              Reset
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Current progress: {progress}%
          </p>
        </div>
      )
    }
  },
  {
    title: "Auto Progress",
    description: "Progress bar that automatically fills over time.",
    code: `const [progress, setProgress] = useState(0)
const [isRunning, setIsRunning] = useState(false)

useEffect(() => {
  if (isRunning && progress < 100) {
    const timer = setTimeout(() => {
      setProgress(prev => Math.min(100, prev + 1))
    }, 50)
    return () => clearTimeout(timer)
  } else if (progress === 100) {
    setIsRunning(false)
  }
}, [progress, isRunning])

return (
  <div className="space-y-4">
    <Progress value={progress} />
    <div className="flex gap-2">
      <Button
        size="sm"
        onClick={() => {
          setIsRunning(!isRunning)
        }}
        disabled={progress === 100}
      >
        {isRunning ? "Pause" : "Start"}
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          setProgress(0)
          setIsRunning(false)
        }}
      >
        Reset
      </Button>
    </div>
    <p className="text-sm text-muted-foreground">
      {progress === 100 ? "Complete!" : \`Loading... \${progress}%\`}
    </p>
  </div>
)`,
    component: () => {
      const [progress, setProgress] = useState(0)
      const [isRunning, setIsRunning] = useState(false)

      useEffect(() => {
        if (isRunning && progress < 100) {
          const timer = setTimeout(() => {
            setProgress(prev => Math.min(100, prev + 1))
          }, 50)
          return () => clearTimeout(timer)
        } else if (progress === 100) {
          setIsRunning(false)
        }
      }, [progress, isRunning])

      return (
        <div className="space-y-4">
          <Progress value={progress} />
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => {
                setIsRunning(!isRunning)
              }}
              disabled={progress === 100}
            >
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setProgress(0)
                setIsRunning(false)
              }}
            >
              Reset
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {progress === 100 ? "Complete!" : `Loading... ${progress}%`}
          </p>
        </div>
      )
    }
  },
  {
    title: "With Label",
    description: "Progress bars with descriptive labels.",
    code: `<div className="space-y-6">
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">File Upload</span>
      <span className="text-sm text-muted-foreground">45%</span>
    </div>
    <Progress value={45} />
  </div>
  
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Processing</span>
      <span className="text-sm text-muted-foreground">78%</span>
    </div>
    <Progress value={78} />
  </div>
  
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Download</span>
      <span className="text-sm text-muted-foreground">92%</span>
    </div>
    <Progress value={92} />
  </div>
</div>`,
    component: () => (
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">File Upload</span>
            <span className="text-sm text-muted-foreground">45%</span>
          </div>
          <Progress value={45} />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Processing</span>
            <span className="text-sm text-muted-foreground">78%</span>
          </div>
          <Progress value={78} />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Download</span>
            <span className="text-sm text-muted-foreground">92%</span>
          </div>
          <Progress value={92} />
        </div>
      </div>
    )
  },
  {
    title: "Custom Styling",
    description: "Progress bars with custom colors and sizes.",
    code: `<div className="space-y-4">
  <div>
    <p className="text-sm font-medium mb-2">Small</p>
    <Progress value={60} className="h-1" />
  </div>
  
  <div>
    <p className="text-sm font-medium mb-2">Default</p>
    <Progress value={60} />
  </div>
  
  <div>
    <p className="text-sm font-medium mb-2">Large</p>
    <Progress value={60} className="h-4" />
  </div>
  
  <div>
    <p className="text-sm font-medium mb-2">Custom Color</p>
    <Progress 
      value={60} 
      className="[&>div]:bg-green-500" 
    />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Small</p>
          <Progress value={60} className="h-1" />
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Default</p>
          <Progress value={60} />
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Large</p>
          <Progress value={60} className="h-4" />
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Custom Color</p>
          <Progress 
            value={60} 
            className="[&>div]:bg-green-500" 
          />
        </div>
      </div>
    )
  },
  {
    title: "Multi-Step Progress",
    description: "Progress indicator for multi-step processes.",
    code: `const steps = ["Account", "Profile", "Settings", "Complete"]
const [currentStep, setCurrentStep] = useState(1)
const progress = (currentStep / steps.length) * 100

return (
  <div className="space-y-4">
    <div className="flex justify-between text-sm">
      {steps.map((step, index) => (
        <span
          key={step}
          className={index < currentStep ? "font-medium" : "text-muted-foreground"}
        >
          {step}
        </span>
      ))}
    </div>
    <Progress value={progress} />
    <div className="flex gap-2">
      <Button
        size="sm"
        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
        disabled={currentStep === 0}
      >
        Previous
      </Button>
      <Button
        size="sm"
        onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
        disabled={currentStep === steps.length}
      >
        Next
      </Button>
    </div>
    <p className="text-sm text-muted-foreground">
      Step {currentStep} of {steps.length}
    </p>
  </div>
)`,
    component: () => {
      const steps = ["Account", "Profile", "Settings", "Complete"]
      const [currentStep, setCurrentStep] = useState(1)
      const progress = (currentStep / steps.length) * 100

      return (
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            {steps.map((step, index) => (
              <span
                key={step}
                className={index < currentStep ? "font-medium" : "text-muted-foreground"}
              >
                {step}
              </span>
            ))}
          </div>
          <Progress value={progress} />
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              size="sm"
              onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
              disabled={currentStep === steps.length}
            >
              Next
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Step {currentStep} of {steps.length}
          </p>
        </div>
      )
    }
  }
]