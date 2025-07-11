"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ComponentExample } from "@/lib/component-docs"
import { Plus, HelpCircle, Info, Settings, Download, Share2, Trash2, Edit } from "lucide-react"

export const tooltipExamples: ComponentExample[] = [
  {
    title: "Basic Tooltip",
    description: "A simple tooltip with text content.",
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
  {
    title: "Icon Button with Tooltip",
    description: "Tooltip on an icon-only button for accessibility.",
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon">
        <Plus className="h-4 w-4" />
        <span className="sr-only">Add new item</span>
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add new item</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add new item</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add new item</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
  {
    title: "Tooltip Positions",
    description: "Tooltips positioned on different sides.",
    code: `<TooltipProvider>
  <div className="flex gap-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip on top</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>Tooltip on right</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Tooltip on bottom</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left</Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Tooltip on left</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    )
  },
  {
    title: "Custom Delay",
    description: "Tooltip with custom open delay.",
    code: `<TooltipProvider delayDuration={800}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Delayed tooltip (800ms)</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This tooltip has a longer delay</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider delayDuration={800}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Delayed tooltip (800ms)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip has a longer delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
  {
    title: "Form Field Help",
    description: "Tooltip providing help for form fields.",
    code: `<TooltipProvider>
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Label htmlFor="email">Email</Label>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p>We'll never share your email with anyone</p>
        </TooltipContent>
      </Tooltip>
    </div>
    <Input type="email" id="email" placeholder="Enter your email" />
  </div>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>We'll never share your email with anyone</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
      </TooltipProvider>
    )
  },
  {
    title: "Action Bar with Tooltips",
    description: "Multiple tooltips in an action bar.",
    code: `<TooltipProvider>
  <div className="flex items-center gap-1 rounded-md border p-1">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Edit item</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Share item</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Download className="h-4 w-4" />
          <span className="sr-only">Download</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Download item</p>
      </TooltipContent>
    </Tooltip>
    
    <div className="mx-1 h-4 w-px bg-gray-300" />
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Delete item</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider>
        <div className="flex items-center gap-1 rounded-md border p-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit item</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share item</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download item</p>
            </TooltipContent>
          </Tooltip>
          
          <div className="mx-1 h-4 w-px bg-gray-300" />
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    )
  },
  {
    title: "Rich Content Tooltip",
    description: "Tooltip with multiple lines and rich content.",
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">
        <Info className="mr-2 h-4 w-4" />
        System Status
      </Button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs">
      <div className="space-y-2">
        <p className="font-semibold">All systems operational</p>
        <p className="text-sm text-muted-foreground">
          Last checked: 5 minutes ago
        </p>
        <div className="flex items-center gap-2 text-sm">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span>API: Online</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span>Database: Online</span>
        </div>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Info className="mr-2 h-4 w-4" />
              System Status
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <div className="space-y-2">
              <p className="font-semibold">All systems operational</p>
              <p className="text-sm text-muted-foreground">
                Last checked: 5 minutes ago
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>API: Online</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Database: Online</span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
  {
    title: "Keyboard Shortcut Tooltip",
    description: "Tooltip showing keyboard shortcuts.",
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <div className="flex items-center gap-2">
        <span>Open settings</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    component: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span>Open settings</span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
]