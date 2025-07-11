"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComponentExample } from "@/lib/component-docs"
import { Calendar, CalendarDays, Link2, MapPin, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const hoverCardExamples: ComponentExample[] = [
  {
    title: "Basic Hover Card",
    description: "A simple hover card with text content.",
    code: `<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>`,
    component: () => (
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    )
  },
  {
    title: "Profile Hover Card",
    description: "Hover card showing user profile information.",
    code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="/placeholder-avatar.jpg" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
    component: () => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
  {
    title: "With Links",
    description: "Hover card containing clickable links.",
    code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="outline">View Company</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Acme Corporation</h4>
      <p className="text-sm text-muted-foreground">
        Leading provider of innovative solutions.
      </p>
      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center text-sm text-primary hover:underline">
          <Link2 className="mr-2 h-4 w-4" />
          acme.com
        </a>
        <a href="#" className="flex items-center text-sm text-primary hover:underline">
          <Twitter className="mr-2 h-4 w-4" />
          @acmecorp
        </a>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
    component: () => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">View Company</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Acme Corporation</h4>
            <p className="text-sm text-muted-foreground">
              Leading provider of innovative solutions.
            </p>
            <div className="flex flex-col gap-1">
              <a href="#" className="flex items-center text-sm text-primary hover:underline">
                <Link2 className="mr-2 h-4 w-4" />
                acme.com
              </a>
              <a href="#" className="flex items-center text-sm text-primary hover:underline">
                <Twitter className="mr-2 h-4 w-4" />
                @acmecorp
              </a>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
  {
    title: "Custom Alignment",
    description: "Hover card with custom alignment options.",
    code: `<div className="flex gap-4">
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="outline">Align Start</Button>
    </HoverCardTrigger>
    <HoverCardContent align="start">
      Content aligned to start
    </HoverCardContent>
  </HoverCard>
  
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="outline">Align End</Button>
    </HoverCardTrigger>
    <HoverCardContent align="end">
      Content aligned to end
    </HoverCardContent>
  </HoverCard>
</div>`,
    component: () => (
      <div className="flex gap-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Align Start</Button>
          </HoverCardTrigger>
          <HoverCardContent align="start">
            Content aligned to start
          </HoverCardContent>
        </HoverCard>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Align End</Button>
          </HoverCardTrigger>
          <HoverCardContent align="end">
            Content aligned to end
          </HoverCardContent>
        </HoverCard>
      </div>
    )
  },
  {
    title: "With Side Offset",
    description: "Hover card with custom side and offset positioning.",
    code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button>Hover for offset content</Button>
  </HoverCardTrigger>
  <HoverCardContent side="right" sideOffset={16}>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Custom Offset</h4>
      <p className="text-sm">
        This content appears to the right with a 16px offset.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`,
    component: () => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Hover for offset content</Button>
        </HoverCardTrigger>
        <HoverCardContent side="right" sideOffset={16}>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Custom Offset</h4>
            <p className="text-sm">
              This content appears to the right with a 16px offset.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
  {
    title: "Event Details Card",
    description: "Hover card showing event information.",
    code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Badge variant="secondary" className="cursor-pointer">
      Tech Conference 2024
    </Badge>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-3">
      <div>
        <h4 className="text-sm font-semibold">Tech Conference 2024</h4>
        <p className="text-sm text-muted-foreground">
          Annual technology conference featuring the latest innovations
        </p>
      </div>
      <div className="space-y-1 text-sm">
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4 opacity-70" />
          <span>March 15-17, 2024</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 h-4 w-4 opacity-70" />
          <span>San Francisco, CA</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Badge>Keynotes</Badge>
        <Badge>Workshops</Badge>
        <Badge>Networking</Badge>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
    component: () => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Badge variant="secondary" className="cursor-pointer">
            Tech Conference 2024
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold">Tech Conference 2024</h4>
              <p className="text-sm text-muted-foreground">
                Annual technology conference featuring the latest innovations
              </p>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span>March 15-17, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 opacity-70" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge>Keynotes</Badge>
              <Badge>Workshops</Badge>
              <Badge>Networking</Badge>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
  {
    title: "Open Delay",
    description: "Hover card with custom open and close delays.",
    code: `<HoverCard openDelay={200} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="outline">Quick hover</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="text-sm">
      This hover card opens quickly (200ms) and closes fast (100ms).
    </p>
  </HoverCardContent>
</HoverCard>`,
    component: () => (
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Quick hover</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-sm">
            This hover card opens quickly (200ms) and closes fast (100ms).
          </p>
        </HoverCardContent>
      </HoverCard>
    )
  },
  {
    title: "With Form Elements",
    description: "Hover card containing interactive form elements.",
    code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="outline">Settings Preview</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">Quick Settings</h4>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm">Notifications</label>
          <Badge variant="outline">Enabled</Badge>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm">Auto-save</label>
          <Badge variant="outline">Every 5 min</Badge>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm">Theme</label>
          <Badge variant="outline">Dark</Badge>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
    component: () => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Settings Preview</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Settings</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm">Notifications</label>
                <Badge variant="outline">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Auto-save</label>
                <Badge variant="outline">Every 5 min</Badge>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Theme</label>
                <Badge variant="outline">Dark</Badge>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  }
]