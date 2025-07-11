import { Badge } from "@/components/ui/badge"
import { ComponentExample } from "@/lib/component-docs"
import { CheckCircle2, XCircle, AlertCircle, Info, Clock, Star, TrendingUp, Package } from "lucide-react"

export const badgeExamples: ComponentExample[] = [
  {
    title: "Badge Variants",
    description: "Badge comes with 4 different variants to convey different meanings.",
    code: `<div className="flex gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`,
    component: () => (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    )
  },
  {
    title: "Status Badges",
    description: "Common status indicators using different badge variants.",
    code: `<div className="flex gap-2">
  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
    Active
  </Badge>
  <Badge variant="secondary">Pending</Badge>
  <Badge variant="destructive">Failed</Badge>
  <Badge variant="outline">Draft</Badge>
</div>`,
    component: () => (
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Active
        </Badge>
        <Badge variant="secondary">Pending</Badge>
        <Badge variant="destructive">Failed</Badge>
        <Badge variant="outline">Draft</Badge>
      </div>
    )
  },
  {
    title: "Badges with Icons",
    description: "Badges can include icons to enhance their meaning.",
    code: `<div className="flex gap-2">
  <Badge>
    <CheckCircle2 className="mr-1 h-3 w-3" />
    Success
  </Badge>
  <Badge variant="destructive">
    <XCircle className="mr-1 h-3 w-3" />
    Error
  </Badge>
  <Badge variant="secondary">
    <AlertCircle className="mr-1 h-3 w-3" />
    Warning
  </Badge>
  <Badge variant="outline">
    <Info className="mr-1 h-3 w-3" />
    Info
  </Badge>
</div>`,
    component: () => (
      <div className="flex flex-wrap gap-2">
        <Badge>
          <CheckCircle2 className="mr-1 h-3 w-3" />
          Success
        </Badge>
        <Badge variant="destructive">
          <XCircle className="mr-1 h-3 w-3" />
          Error
        </Badge>
        <Badge variant="secondary">
          <AlertCircle className="mr-1 h-3 w-3" />
          Warning
        </Badge>
        <Badge variant="outline">
          <Info className="mr-1 h-3 w-3" />
          Info
        </Badge>
      </div>
    )
  },
  {
    title: "Count Badges",
    description: "Badges displaying counts or numbers.",
    code: `<div className="flex gap-4">
  <div className="flex items-center gap-2">
    <span>Messages</span>
    <Badge>12</Badge>
  </div>
  <div className="flex items-center gap-2">
    <span>Notifications</span>
    <Badge variant="destructive">99+</Badge>
  </div>
  <div className="flex items-center gap-2">
    <span>Updates</span>
    <Badge variant="secondary">3 new</Badge>
  </div>
</div>`,
    component: () => (
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Messages</span>
          <Badge>12</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Notifications</span>
          <Badge variant="destructive">99+</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Updates</span>
          <Badge variant="secondary">3 new</Badge>
        </div>
      </div>
    )
  },
  {
    title: "Size Variations",
    description: "Adjust badge sizes using custom classes.",
    code: `<div className="flex items-center gap-2">
  <Badge className="text-xs px-2 py-0">Tiny</Badge>
  <Badge className="text-xs">Small</Badge>
  <Badge>Default</Badge>
  <Badge className="text-base px-3 py-1">Large</Badge>
  <Badge className="text-lg px-4 py-2">Extra Large</Badge>
</div>`,
    component: () => (
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="text-xs px-2 py-0">Tiny</Badge>
        <Badge className="text-xs">Small</Badge>
        <Badge>Default</Badge>
        <Badge className="text-base px-3 py-1">Large</Badge>
        <Badge className="text-lg px-4 py-2">Extra Large</Badge>
      </div>
    )
  },
  {
    title: "Category Badges",
    description: "Badges for categorizing or tagging content.",
    code: `<div className="flex flex-wrap gap-2">
  <Badge variant="outline">
    <Package className="mr-1 h-3 w-3" />
    Product
  </Badge>
  <Badge variant="outline">
    <TrendingUp className="mr-1 h-3 w-3" />
    Trending
  </Badge>
  <Badge variant="outline">
    <Star className="mr-1 h-3 w-3" />
    Featured
  </Badge>
  <Badge variant="outline">
    <Clock className="mr-1 h-3 w-3" />
    New
  </Badge>
</div>`,
    component: () => (
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">
          <Package className="mr-1 h-3 w-3" />
          Product
        </Badge>
        <Badge variant="outline">
          <TrendingUp className="mr-1 h-3 w-3" />
          Trending
        </Badge>
        <Badge variant="outline">
          <Star className="mr-1 h-3 w-3" />
          Featured
        </Badge>
        <Badge variant="outline">
          <Clock className="mr-1 h-3 w-3" />
          New
        </Badge>
      </div>
    )
  },
  {
    title: "Custom Colors",
    description: "Create custom colored badges using Tailwind classes.",
    code: `<div className="flex flex-wrap gap-2">
  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
    Purple
  </Badge>
  <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100">
    Pink
  </Badge>
  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
    Indigo
  </Badge>
  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
    Yellow
  </Badge>
  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
    Gradient
  </Badge>
</div>`,
    component: () => (
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
          Purple
        </Badge>
        <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100">
          Pink
        </Badge>
        <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
          Indigo
        </Badge>
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          Yellow
        </Badge>
        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
          Gradient
        </Badge>
      </div>
    )
  },
  {
    title: "In Context",
    description: "Examples of badges used in real UI contexts.",
    code: `<div className="space-y-4">
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h4 className="font-medium">API Documentation</h4>
      <p className="text-sm text-muted-foreground">Learn how to integrate our API</p>
    </div>
    <Badge variant="secondary">Updated</Badge>
  </div>
  
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h4 className="font-medium">Premium Plan</h4>
      <p className="text-sm text-muted-foreground">$29/month</p>
    </div>
    <Badge>Popular</Badge>
  </div>
  
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h4 className="font-medium">System Status</h4>
      <p className="text-sm text-muted-foreground">All services operational</p>
    </div>
    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
      <CheckCircle2 className="mr-1 h-3 w-3" />
      Operational
    </Badge>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4 w-full max-w-md">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">API Documentation</h4>
            <p className="text-sm text-muted-foreground">Learn how to integrate our API</p>
          </div>
          <Badge variant="secondary">Updated</Badge>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">Premium Plan</h4>
            <p className="text-sm text-muted-foreground">$29/month</p>
          </div>
          <Badge>Popular</Badge>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">System Status</h4>
            <p className="text-sm text-muted-foreground">All services operational</p>
          </div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Operational
          </Badge>
        </div>
      </div>
    )
  }
]