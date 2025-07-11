"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { ComponentExample } from "@/lib/component-docs"

export const skeletonExamples: ComponentExample[] = [
  {
    title: "Basic Skeleton",
    description: "A simple skeleton loader.",
    code: `<Skeleton className="w-[100px] h-[20px] rounded-full" />`,
    component: () => (
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    )
  },
  {
    title: "Card Skeleton",
    description: "Skeleton loader for a card component.",
    code: `<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
    component: () => (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  },
  {
    title: "List Skeleton",
    description: "Skeleton loader for list items.",
    code: `<div className="space-y-4">
  {[...Array(3)].map((_, i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ))}
</div>`,
    component: () => (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Table Skeleton",
    description: "Skeleton loader for table rows.",
    code: `<div className="w-full space-y-3">
  <div className="flex items-center justify-between">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-4 w-[60px]" />
    <Skeleton className="h-4 w-[80px]" />
  </div>
  <div className="flex items-center justify-between">
    <Skeleton className="h-4 w-[120px]" />
    <Skeleton className="h-4 w-[40px]" />
    <Skeleton className="h-4 w-[100px]" />
  </div>
  <div className="flex items-center justify-between">
    <Skeleton className="h-4 w-[90px]" />
    <Skeleton className="h-4 w-[70px]" />
    <Skeleton className="h-4 w-[90px]" />
  </div>
</div>`,
    component: () => (
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[60px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[40px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-[90px]" />
          <Skeleton className="h-4 w-[70px]" />
          <Skeleton className="h-4 w-[90px]" />
        </div>
      </div>
    )
  },
  {
    title: "Form Skeleton",
    description: "Skeleton loader for form elements.",
    code: `<div className="space-y-6">
  <div className="space-y-2">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-10 w-full" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-[120px]" />
    <Skeleton className="h-10 w-full" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-20 w-full" />
  </div>
  <Skeleton className="h-10 w-[120px]" />
</div>`,
    component: () => (
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-20 w-full" />
        </div>
        <Skeleton className="h-10 w-[120px]" />
      </div>
    )
  },
  {
    title: "Article Skeleton",
    description: "Skeleton loader for article content.",
    code: `<div className="space-y-4">
  <Skeleton className="h-8 w-[300px]" />
  <div className="flex items-center space-x-4">
    <Skeleton className="h-10 w-10 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-3 w-[100px]" />
    </div>
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-[80%]" />
  </div>
  <Skeleton className="h-[200px] w-full rounded-lg" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-[60%]" />
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <Skeleton className="h-8 w-[300px]" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
      </div>
    )
  },
  {
    title: "Grid Skeleton",
    description: "Skeleton loader for grid layouts.",
    code: `<div className="grid grid-cols-3 gap-4">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="space-y-3">
      <Skeleton className="h-[125px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  ))}
</div>`,
    component: () => (
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-[125px] w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Custom Shapes",
    description: "Various custom skeleton shapes.",
    code: `<div className="space-y-8">
  <div className="space-y-2">
    <h4 className="text-sm font-medium">Circle</h4>
    <Skeleton className="h-24 w-24 rounded-full" />
  </div>
  
  <div className="space-y-2">
    <h4 className="text-sm font-medium">Square</h4>
    <Skeleton className="h-24 w-24" />
  </div>
  
  <div className="space-y-2">
    <h4 className="text-sm font-medium">Rounded</h4>
    <Skeleton className="h-24 w-48 rounded-2xl" />
  </div>
  
  <div className="space-y-2">
    <h4 className="text-sm font-medium">Text Lines</h4>
    <div className="space-y-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-[90%]" />
      <Skeleton className="h-3 w-[75%]" />
    </div>
  </div>
</div>`,
    component: () => (
      <div className="space-y-8">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Circle</h4>
          <Skeleton className="h-24 w-24 rounded-full" />
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Square</h4>
          <Skeleton className="h-24 w-24" />
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Rounded</h4>
          <Skeleton className="h-24 w-48 rounded-2xl" />
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Text Lines</h4>
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-[90%]" />
            <Skeleton className="h-3 w-[75%]" />
          </div>
        </div>
      </div>
    )
  }
]