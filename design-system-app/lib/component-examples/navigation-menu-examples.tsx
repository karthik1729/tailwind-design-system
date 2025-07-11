"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ComponentExample } from "@/lib/component-docs"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const navigationMenuExamples: ComponentExample[] = [
  {
    title: "Basic Navigation Menu",
    description: "A simple navigation menu with links.",
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/components" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Components
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/examples" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Examples
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Components
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Examples
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  },
  {
    title: "With Dropdown Content",
    description: "Navigation menu with dropdown content.",
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  shadcn/ui
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Beautifully designed components built with Radix UI and
                  Tailwind CSS.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Typography">
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="#"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="#" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  },
  {
    title: "With Components Grid",
    description: "Navigation menu with a grid of components.",
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href="#"
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  },
  {
    title: "Multiple Triggers",
    description: "Navigation menu with multiple dropdown triggers.",
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="#" title="Product One">
            Description of product one features.
          </ListItem>
          <ListItem href="#" title="Product Two">
            Description of product two features.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
          <ListItem href="#" title="Enterprise">
            Solutions for large organizations.
          </ListItem>
          <ListItem href="#" title="Teams">
            Collaborative tools for teams.
          </ListItem>
          <ListItem href="#" title="Individuals">
            Personal productivity solutions.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="#" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Pricing
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="#" title="Product One">
                  Description of product one features.
                </ListItem>
                <ListItem href="#" title="Product Two">
                  Description of product two features.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <ListItem href="#" title="Enterprise">
                  Solutions for large organizations.
                </ListItem>
                <ListItem href="#" title="Teams">
                  Collaborative tools for teams.
                </ListItem>
                <ListItem href="#" title="Individuals">
                  Personal productivity solutions.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  },
  {
    title: "With Featured Content",
    description: "Navigation menu with featured content sections.",
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[800px] p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-medium">Documentation</h3>
              <ul className="space-y-2">
                <ListItem href="#" title="Getting Started">
                  Quick start guide for new users
                </ListItem>
                <ListItem href="#" title="API Reference">
                  Complete API documentation
                </ListItem>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium">Community</h3>
              <ul className="space-y-2">
                <ListItem href="#" title="Discord">
                  Join our Discord community
                </ListItem>
                <ListItem href="#" title="GitHub">
                  Contribute on GitHub
                </ListItem>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium">Support</h3>
              <ul className="space-y-2">
                <ListItem href="#" title="Help Center">
                  Get help with common issues
                </ListItem>
                <ListItem href="#" title="Contact">
                  Reach out to our team
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-3">
                    <h3 className="font-medium">Documentation</h3>
                    <ul className="space-y-2">
                      <ListItem href="#" title="Getting Started">
                        Quick start guide for new users
                      </ListItem>
                      <ListItem href="#" title="API Reference">
                        Complete API documentation
                      </ListItem>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-medium">Community</h3>
                    <ul className="space-y-2">
                      <ListItem href="#" title="Discord">
                        Join our Discord community
                      </ListItem>
                      <ListItem href="#" title="GitHub">
                        Contribute on GitHub
                      </ListItem>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-medium">Support</h3>
                    <ul className="space-y-2">
                      <ListItem href="#" title="Help Center">
                        Get help with common issues
                      </ListItem>
                      <ListItem href="#" title="Contact">
                        Reach out to our team
                      </ListItem>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  },
  {
    title: "Vertical Orientation",
    description: "Navigation menu in vertical orientation.",
    code: `<NavigationMenu orientation="vertical" className="max-w-xs">
  <NavigationMenuList className="flex-col items-start">
    <NavigationMenuItem>
      <NavigationMenuTrigger>Account</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[200px]">
          <ListItem href="#" title="Profile">
            View and edit profile
          </ListItem>
          <ListItem href="#" title="Settings">
            Account settings
          </ListItem>
          <ListItem href="#" title="Logout">
            Sign out of account
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="#" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Dashboard
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu orientation="vertical" className="max-w-xs">
        <NavigationMenuList className="flex-col items-start">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Account</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[200px]">
                <ListItem href="#" title="Profile">
                  View and edit profile
                </ListItem>
                <ListItem href="#" title="Settings">
                  Account settings
                </ListItem>
                <ListItem href="#" title="Logout">
                  Sign out of account
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  },
  {
    title: "Custom Styling",
    description: "Navigation menu with custom styling.",
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90">
        Featured
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px]">
          <li className="rounded-md bg-gradient-to-r from-primary/10 to-primary/5 p-3">
            <NavigationMenuLink asChild>
              <a href="#" className="block space-y-1">
                <div className="text-sm font-medium">Special Offer</div>
                <p className="text-sm text-muted-foreground">
                  Limited time promotion
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90">
              Featured
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px]">
                <li className="rounded-md bg-gradient-to-r from-primary/10 to-primary/5 p-3">
                  <NavigationMenuLink asChild>
                    <a href="#" className="block space-y-1">
                      <div className="text-sm font-medium">Special Offer</div>
                      <p className="text-sm text-muted-foreground">
                        Limited time promotion
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  },
  {
    title: "With Icons",
    description: "Navigation menu items with icons.",
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[300px]">
          <ListItem href="#" title="Dashboard">
            Main dashboard view
          </ListItem>
          <ListItem href="#" title="Analytics">
            View your analytics
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    component: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[300px]">
                <ListItem href="#" title="Dashboard">
                  Main dashboard view
                </ListItem>
                <ListItem href="#" title="Analytics">
                  View your analytics
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"