"use client"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ComponentExample } from "@/lib/component-docs"
import { ChevronRight, Home, Slash } from "lucide-react"
import Link from "next/link"

export const breadcrumbExamples: ComponentExample[] = [
  {
    title: "Basic Breadcrumb",
    description: "A simple breadcrumb navigation.",
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>T-Shirt</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    component: () => (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>T-Shirt</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
  {
    title: "With Icons",
    description: "Breadcrumb with home icon and custom separator.",
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="flex items-center gap-2">
        <Home className="h-4 w-4" />
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/documents">Documents</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Design System</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    component: () => (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/documents">Documents</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Design System</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
  {
    title: "With Ellipsis",
    description: "Breadcrumb with collapsed items shown as ellipsis.",
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    component: () => (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
  {
    title: "Custom Separator",
    description: "Breadcrumb with different separator styles.",
    code: `<div className="space-y-4">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash className="h-4 w-4" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/products">Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash className="h-4 w-4" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Details</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>•</BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>•</BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Article</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`,
    component: () => (
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>•</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>•</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Article</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    )
  },
  {
    title: "With Next.js Link",
    description: "Using asChild prop with Next.js Link component.",
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/dashboard">Dashboard</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/dashboard/settings">Settings</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Profile</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    component: () => (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
  {
    title: "Long Path with Truncation",
    description: "Breadcrumb with truncated long text.",
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/very-long-category-name-that-might-overflow" className="max-w-[80px] truncate">
        Very Long Category Name That Might Overflow
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/subcategory" className="max-w-[80px] truncate">
        Subcategory With Long Name
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className="max-w-[100px] truncate">
        Product with Very Long Name
      </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    component: () => (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/very-long-category-name-that-might-overflow" className="max-w-[80px] truncate">
              Very Long Category Name That Might Overflow
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/subcategory" className="max-w-[80px] truncate">
              Subcategory With Long Name
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-[100px] truncate">
              Product with Very Long Name
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
  {
    title: "Styled Breadcrumb",
    description: "Breadcrumb with custom styling.",
    code: `<Breadcrumb>
  <BreadcrumbList className="text-sm">
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="font-medium text-blue-600 hover:text-blue-800">
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/products" className="font-medium text-blue-600 hover:text-blue-800">
        Products
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/products/electronics" className="font-medium text-blue-600 hover:text-blue-800">
        Electronics
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage className="font-semibold text-gray-900">
        Laptop
      </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    component: () => (
      <Breadcrumb>
        <BreadcrumbList className="text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="font-medium text-blue-600 hover:text-blue-800">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products" className="font-medium text-blue-600 hover:text-blue-800">
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products/electronics" className="font-medium text-blue-600 hover:text-blue-800">
              Electronics
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-gray-900">
              Laptop
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
  {
    title: "Mobile Responsive",
    description: "Breadcrumb that adapts to mobile screens.",
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem className="hidden sm:block">
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="hidden sm:block" />
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink href="/category">Category</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="hidden md:block" />
    <BreadcrumbItem className="hidden lg:block">
      <BreadcrumbLink href="/category/subcategory">Subcategory</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="hidden lg:block" />
    <BreadcrumbItem className="block sm:hidden">
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator className="block sm:hidden" />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    component: () => (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden sm:block">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden sm:block" />
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem className="hidden lg:block">
            <BreadcrumbLink href="/category/subcategory">Subcategory</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden lg:block" />
          <BreadcrumbItem className="block sm:hidden">
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator className="block sm:hidden" />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }
]