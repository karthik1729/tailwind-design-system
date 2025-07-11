"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComponentExample } from "@/lib/component-docs"

export const avatarExamples: ComponentExample[] = [
  {
    title: "Basic Avatar",
    description: "A simple avatar with an image.",
    code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
    component: () => (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  },
  {
    title: "Avatar with Fallback",
    description: "Avatar showing fallback when image fails to load.",
    code: `<Avatar>
  <AvatarImage src="/broken-image.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    component: () => (
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )
  },
  {
    title: "Different Sizes",
    description: "Avatars in various sizes using Tailwind classes.",
    code: `<div className="flex items-center space-x-4">
  <Avatar className="h-8 w-8">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback className="text-xs">CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="h-14 w-14">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback className="text-lg">CN</AvatarFallback>
  </Avatar>
  <Avatar className="h-20 w-20">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback className="text-2xl">CN</AvatarFallback>
  </Avatar>
</div>`,
    component: () => (
      <div className="flex items-center space-x-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-xs">CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-lg">CN</AvatarFallback>
        </Avatar>
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-2xl">CN</AvatarFallback>
        </Avatar>
      </div>
    )
  },
  {
    title: "Avatar Group",
    description: "Multiple avatars displayed together.",
    code: `<div className="flex -space-x-3">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User 3" />
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+5</AvatarFallback>
  </Avatar>
</div>`,
    component: () => (
      <div className="flex -space-x-3">
        <Avatar className="border-2 border-background">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User 1" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User 2" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User 3" />
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarFallback>+5</AvatarFallback>
        </Avatar>
      </div>
    )
  },
  {
    title: "Avatar with Status Indicator",
    description: "Avatar with online/offline status indicator.",
    code: `<div className="flex items-center space-x-4">
  <div className="relative">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
  </div>
  <div className="relative">
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-white" />
  </div>
  <div className="relative">
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 ring-2 ring-white" />
  </div>
</div>`,
    component: () => (
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
        </div>
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-white" />
        </div>
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 ring-2 ring-white" />
        </div>
      </div>
    )
  },
  {
    title: "Custom Styled Avatars",
    description: "Avatars with custom background colors and styles.",
    code: `<div className="flex items-center space-x-4">
  <Avatar>
    <AvatarFallback className="bg-purple-500 text-white">PU</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-blue-500 text-white">BL</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-green-500 text-white">GR</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-500 text-white">
      GD
    </AvatarFallback>
  </Avatar>
</div>`,
    component: () => (
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarFallback className="bg-purple-500 text-white">PU</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-blue-500 text-white">BL</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-green-500 text-white">GR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-500 text-white">
            GD
          </AvatarFallback>
        </Avatar>
      </div>
    )
  },
  {
    title: "Avatar in User Card",
    description: "Avatar used within a user information card.",
    code: `<div className="flex items-center space-x-4 rounded-lg border p-4">
  <Avatar className="h-12 w-12">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <div className="space-y-1">
    <h4 className="text-sm font-semibold">@shadcn</h4>
    <p className="text-sm text-muted-foreground">
      Building user interfaces with Radix UI and Tailwind CSS.
    </p>
  </div>
</div>`,
    component: () => (
      <div className="flex items-center space-x-4 rounded-lg border p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@shadcn</h4>
          <p className="text-sm text-muted-foreground">
            Building user interfaces with Radix UI and Tailwind CSS.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Square Avatar",
    description: "Avatar with rounded corners instead of circular shape.",
    code: `<div className="flex items-center space-x-4">
  <Avatar className="rounded-lg">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
  </Avatar>
  <Avatar className="rounded-md">
    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
    <AvatarFallback className="rounded-md">JD</AvatarFallback>
  </Avatar>
  <Avatar className="rounded">
    <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User" />
    <AvatarFallback className="rounded">AB</AvatarFallback>
  </Avatar>
</div>`,
    component: () => (
      <div className="flex items-center space-x-4">
        <Avatar className="rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
          <AvatarFallback className="rounded-md">JD</AvatarFallback>
        </Avatar>
        <Avatar className="rounded">
          <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User" />
          <AvatarFallback className="rounded">AB</AvatarFallback>
        </Avatar>
      </div>
    )
  }
]