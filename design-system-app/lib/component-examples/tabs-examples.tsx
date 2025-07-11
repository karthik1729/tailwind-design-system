"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentExample } from "@/lib/component-docs"

export const tabsExamples: ComponentExample[] = [
  {
    title: "Basic Tabs",
    description: "Simple tabs with two panels.",
    code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Make changes to your account here.
  </TabsContent>
  <TabsContent value="password">
    Change your password here.
  </TabsContent>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
    )
  },
  {
    title: "Tabs with Cards",
    description: "Tabs containing card components with forms.",
    code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </div>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    )
  },
  {
    title: "Vertical Tabs",
    description: "Tabs arranged vertically.",
    code: `<Tabs defaultValue="overview" className="flex gap-4" orientation="vertical">
  <TabsList className="flex-col h-auto">
    <TabsTrigger value="overview" className="justify-start">Overview</TabsTrigger>
    <TabsTrigger value="analytics" className="justify-start">Analytics</TabsTrigger>
    <TabsTrigger value="reports" className="justify-start">Reports</TabsTrigger>
    <TabsTrigger value="notifications" className="justify-start">Notifications</TabsTrigger>
  </TabsList>
  <div className="flex-1">
    <TabsContent value="overview" className="mt-0">
      <h3 className="text-lg font-medium">Overview</h3>
      <p className="text-sm text-muted-foreground">
        Your business at a glance. View key metrics and recent activity.
      </p>
    </TabsContent>
    <TabsContent value="analytics" className="mt-0">
      <h3 className="text-lg font-medium">Analytics</h3>
      <p className="text-sm text-muted-foreground">
        Detailed analytics and insights about your performance.
      </p>
    </TabsContent>
    <TabsContent value="reports" className="mt-0">
      <h3 className="text-lg font-medium">Reports</h3>
      <p className="text-sm text-muted-foreground">
        Generate and download comprehensive reports.
      </p>
    </TabsContent>
    <TabsContent value="notifications" className="mt-0">
      <h3 className="text-lg font-medium">Notifications</h3>
      <p className="text-sm text-muted-foreground">
        Manage your notification preferences and settings.
      </p>
    </TabsContent>
  </div>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="overview" className="flex gap-4" orientation="vertical">
        <TabsList className="flex-col h-auto">
          <TabsTrigger value="overview" className="justify-start">Overview</TabsTrigger>
          <TabsTrigger value="analytics" className="justify-start">Analytics</TabsTrigger>
          <TabsTrigger value="reports" className="justify-start">Reports</TabsTrigger>
          <TabsTrigger value="notifications" className="justify-start">Notifications</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="overview" className="mt-0">
            <h3 className="text-lg font-medium">Overview</h3>
            <p className="text-sm text-muted-foreground">
              Your business at a glance. View key metrics and recent activity.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="mt-0">
            <h3 className="text-lg font-medium">Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Detailed analytics and insights about your performance.
            </p>
          </TabsContent>
          <TabsContent value="reports" className="mt-0">
            <h3 className="text-lg font-medium">Reports</h3>
            <p className="text-sm text-muted-foreground">
              Generate and download comprehensive reports.
            </p>
          </TabsContent>
          <TabsContent value="notifications" className="mt-0">
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-sm text-muted-foreground">
              Manage your notification preferences and settings.
            </p>
          </TabsContent>
        </div>
      </Tabs>
    )
  },
  {
    title: "Disabled Tab",
    description: "Tabs with a disabled option.",
    code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
    <TabsTrigger value="admin" disabled>Admin</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Access your account information here.
  </TabsContent>
  <TabsContent value="settings">
    Manage your application settings.
  </TabsContent>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="admin" disabled>Admin</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Access your account information here.
        </TabsContent>
        <TabsContent value="settings">
          Manage your application settings.
        </TabsContent>
      </Tabs>
    )
  },
  {
    title: "Tabs with Icons",
    description: "Tabs with icons and labels.",
    code: `<Tabs defaultValue="dashboard" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="dashboard" className="flex items-center gap-2">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Dashboard
    </TabsTrigger>
    <TabsTrigger value="users" className="flex items-center gap-2">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      Users
    </TabsTrigger>
    <TabsTrigger value="settings" className="flex items-center gap-2">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="dashboard">
    Dashboard content with charts and metrics.
  </TabsContent>
  <TabsContent value="users">
    User management interface.
  </TabsContent>
  <TabsContent value="settings">
    Application settings and configuration.
  </TabsContent>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="dashboard" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="dashboard" className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Users
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          Dashboard content with charts and metrics.
        </TabsContent>
        <TabsContent value="users">
          User management interface.
        </TabsContent>
        <TabsContent value="settings">
          Application settings and configuration.
        </TabsContent>
      </Tabs>
    )
  },
  {
    title: "Full Width Tabs",
    description: "Tabs that span the full width of their container.",
    code: `<Tabs defaultValue="all" className="w-full">
  <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="draft">Draft</TabsTrigger>
    <TabsTrigger value="archived">Archived</TabsTrigger>
  </TabsList>
  <TabsContent value="all" className="mt-4">
    <div className="text-sm text-muted-foreground">
      Showing all items (120)
    </div>
  </TabsContent>
  <TabsContent value="active" className="mt-4">
    <div className="text-sm text-muted-foreground">
      Showing active items (87)
    </div>
  </TabsContent>
  <TabsContent value="draft" className="mt-4">
    <div className="text-sm text-muted-foreground">
      Showing draft items (23)
    </div>
  </TabsContent>
  <TabsContent value="archived" className="mt-4">
    <div className="text-sm text-muted-foreground">
      Showing archived items (10)
    </div>
  </TabsContent>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="text-sm text-muted-foreground">
            Showing all items (120)
          </div>
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <div className="text-sm text-muted-foreground">
            Showing active items (87)
          </div>
        </TabsContent>
        <TabsContent value="draft" className="mt-4">
          <div className="text-sm text-muted-foreground">
            Showing draft items (23)
          </div>
        </TabsContent>
        <TabsContent value="archived" className="mt-4">
          <div className="text-sm text-muted-foreground">
            Showing archived items (10)
          </div>
        </TabsContent>
      </Tabs>
    )
  },
  {
    title: "Custom Styled Tabs",
    description: "Tabs with custom styling.",
    code: `<Tabs defaultValue="tab1" className="w-[400px]">
  <TabsList className="bg-muted/50">
    <TabsTrigger 
      value="tab1" 
      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
    >
      Tab 1
    </TabsTrigger>
    <TabsTrigger 
      value="tab2"
      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
    >
      Tab 2
    </TabsTrigger>
    <TabsTrigger 
      value="tab3"
      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
    >
      Tab 3
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="mt-4">
    <div className="rounded-lg border p-4">
      Content for Tab 1
    </div>
  </TabsContent>
  <TabsContent value="tab2" className="mt-4">
    <div className="rounded-lg border p-4">
      Content for Tab 2
    </div>
  </TabsContent>
  <TabsContent value="tab3" className="mt-4">
    <div className="rounded-lg border p-4">
      Content for Tab 3
    </div>
  </TabsContent>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="tab1" className="w-[400px]">
        <TabsList className="bg-muted/50">
          <TabsTrigger 
            value="tab1" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Tab 1
          </TabsTrigger>
          <TabsTrigger 
            value="tab2"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Tab 2
          </TabsTrigger>
          <TabsTrigger 
            value="tab3"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Tab 3
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="mt-4">
          <div className="rounded-lg border p-4">
            Content for Tab 1
          </div>
        </TabsContent>
        <TabsContent value="tab2" className="mt-4">
          <div className="rounded-lg border p-4">
            Content for Tab 2
          </div>
        </TabsContent>
        <TabsContent value="tab3" className="mt-4">
          <div className="rounded-lg border p-4">
            Content for Tab 3
          </div>
        </TabsContent>
      </Tabs>
    )
  },
  {
    title: "Tabs with Badges",
    description: "Tabs with notification badges.",
    code: `<Tabs defaultValue="inbox" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="inbox" className="relative">
      Inbox
      <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
        3
      </span>
    </TabsTrigger>
    <TabsTrigger value="sent">Sent</TabsTrigger>
    <TabsTrigger value="drafts" className="relative">
      Drafts
      <span className="ml-2 rounded-full bg-muted-foreground px-2 py-0.5 text-xs text-background">
        1
      </span>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="inbox">
    You have 3 new messages in your inbox.
  </TabsContent>
  <TabsContent value="sent">
    Your sent messages appear here.
  </TabsContent>
  <TabsContent value="drafts">
    You have 1 draft message.
  </TabsContent>
</Tabs>`,
    component: () => (
      <Tabs defaultValue="inbox" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="inbox" className="relative">
            Inbox
            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              3
            </span>
          </TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="drafts" className="relative">
            Drafts
            <span className="ml-2 rounded-full bg-muted-foreground px-2 py-0.5 text-xs text-background">
              1
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="inbox">
          You have 3 new messages in your inbox.
        </TabsContent>
        <TabsContent value="sent">
          Your sent messages appear here.
        </TabsContent>
        <TabsContent value="drafts">
          You have 1 draft message.
        </TabsContent>
      </Tabs>
    )
  }
]