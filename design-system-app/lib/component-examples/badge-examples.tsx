import { Badge } from "@/components/ui/badge"
import { ComponentExample } from "@/lib/component-docs"
import { CheckCircle2, XCircle, AlertCircle, Info, Clock, Star, TrendingUp, Package } from "lucide-react"

export const badgeExamples: ComponentExample[] = [
  {
    title: "All Badge Variants",
    description: "Complete showcase of all badge variants organized by type.",
    code: `<div className="space-y-6">
  {/* Basic Variants */}
  <div>
    <h4 className="text-sm font-medium text-muted-foreground mb-3">Basic</h4>
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  </div>

  {/* Semantic Solid Variants */}
  <div>
    <h4 className="text-sm font-medium text-muted-foreground mb-3">Semantic (Solid)</h4>
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  </div>

  {/* Semantic Subtle Variants */}
  <div>
    <h4 className="text-sm font-medium text-muted-foreground mb-3">Semantic (Subtle)</h4>
    <div className="flex flex-wrap gap-2">
      <Badge variant="success-subtle">Success</Badge>
      <Badge variant="warning-subtle">Warning</Badge>
      <Badge variant="info-subtle">Info</Badge>
      <Badge variant="destructive-subtle">Destructive</Badge>
    </div>
  </div>
</div>`,
    component: () => (
      <div className="space-y-6">
        {/* Basic Variants */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Basic</h4>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Semantic Solid Variants */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Semantic (Solid)</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        {/* Semantic Subtle Variants */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Semantic (Subtle)</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success-subtle">Success</Badge>
            <Badge variant="warning-subtle">Warning</Badge>
            <Badge variant="info-subtle">Info</Badge>
            <Badge variant="destructive-subtle">Destructive</Badge>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Badges with Icons",
    description: "Badges with icons using semantic colors for clear visual communication.",
    code: `<div className="flex flex-wrap gap-2">
  <Badge variant="success">
    <CheckCircle2 className="mr-1 h-3 w-3" />
    Success
  </Badge>
  <Badge variant="warning">
    <AlertCircle className="mr-1 h-3 w-3" />
    Warning
  </Badge>
  <Badge variant="info">
    <Info className="mr-1 h-3 w-3" />
    Info
  </Badge>
  <Badge variant="destructive">
    <XCircle className="mr-1 h-3 w-3" />
    Error
  </Badge>
</div>`,
    component: () => (
      <div className="flex flex-wrap gap-2">
        <Badge variant="success">
          <CheckCircle2 className="mr-1 h-3 w-3" />
          Success
        </Badge>
        <Badge variant="warning">
          <AlertCircle className="mr-1 h-3 w-3" />
          Warning
        </Badge>
        <Badge variant="info">
          <Info className="mr-1 h-3 w-3" />
          Info
        </Badge>
        <Badge variant="destructive">
          <XCircle className="mr-1 h-3 w-3" />
          Error
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
    title: "Status Examples",
    description: "Common status indicators using semantic badges.",
    code: `<div className="space-y-4">
  <div className="flex items-center gap-2">
    <span className="text-sm">Build Status:</span>
    <Badge variant="success">Passed</Badge>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-sm">Deployment:</span>
    <Badge variant="warning">In Progress</Badge>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-sm">API Status:</span>
    <Badge variant="destructive">Failed</Badge>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-sm">Environment:</span>
    <Badge variant="info">Staging</Badge>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Build Status:</span>
          <Badge variant="success">Passed</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Deployment:</span>
          <Badge variant="warning">In Progress</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">API Status:</span>
          <Badge variant="destructive">Failed</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Environment:</span>
          <Badge variant="info">Staging</Badge>
        </div>
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
    <Badge variant="info-subtle">v2.0.0</Badge>
  </div>
  
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h4 className="font-medium">Premium Plan</h4>
      <p className="text-sm text-muted-foreground">$29/month</p>
    </div>
    <div className="flex gap-2">
      <Badge>Popular</Badge>
      <Badge variant="success-subtle">20% off</Badge>
    </div>
  </div>
  
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h4 className="font-medium">System Status</h4>
      <p className="text-sm text-muted-foreground">All services operational</p>
    </div>
    <Badge variant="success">
      <CheckCircle2 className="mr-1 h-3 w-3" />
      Operational
    </Badge>
  </div>
  
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h4 className="font-medium">Database Backup</h4>
      <p className="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
    </div>
    <Badge variant="warning-subtle">
      <AlertCircle className="mr-1 h-3 w-3" />
      Scheduled
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
          <Badge variant="info-subtle">v2.0.0</Badge>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">Premium Plan</h4>
            <p className="text-sm text-muted-foreground">$29/month</p>
          </div>
          <div className="flex gap-2">
            <Badge>Popular</Badge>
            <Badge variant="success-subtle">20% off</Badge>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">System Status</h4>
            <p className="text-sm text-muted-foreground">All services operational</p>
          </div>
          <Badge variant="success">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Operational
          </Badge>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">Database Backup</h4>
            <p className="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
          </div>
          <Badge variant="warning-subtle">
            <AlertCircle className="mr-1 h-3 w-3" />
            Scheduled
          </Badge>
        </div>
      </div>
    )
  }
]