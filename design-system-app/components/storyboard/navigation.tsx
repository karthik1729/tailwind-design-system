"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

import { componentRegistry } from "@/lib/component-registry"

const categoryIcons = {
  foundations: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  components: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  patterns: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )
}

export function StoryboardNavigation() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["foundations", "components"])

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  // Calculate total design elements count
  const totalElements = Object.values(componentRegistry).reduce((total, category) => {
    return total + Object.values(category.subcategories).reduce((catTotal, subcat) => catTotal + subcat.count, 0)
  }, 0)

  return (
    <aside className="w-80 border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex h-full flex-col">
        <div className="border-b border-gray-200 p-4 dark:border-gray-800">
          <Link href="/storyboard" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Design System
            </span>
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              v4
            </span>
          </Link>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {totalElements} design elements
          </p>
        </div>

        <div className="border-b border-gray-200 p-4 dark:border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search design elements..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-6">
            {Object.entries(componentRegistry).map(([key, category]) => (
              <li key={key}>
                <button
                  onClick={() => toggleCategory(key)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 dark:text-gray-500">
                      {categoryIcons[key as keyof typeof categoryIcons]}
                    </span>
                    <span>{category.name}</span>
                  </div>
                  <svg
                    className={cn(
                      "h-4 w-4 text-gray-400 transition-transform",
                      expandedCategories.includes(key) && "rotate-90"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {expandedCategories.includes(key) && (
                  <ul className="mt-2 space-y-1 pl-11">
                    {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                      <li key={subKey}>
                        <Link
                          href={`/storyboard/${key}/${subKey}`}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800",
                            pathname === `/storyboard/${key}/${subKey}`
                              ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                              : "text-gray-700 dark:text-gray-300"
                          )}
                        >
                          <span>{subcategory.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {subcategory.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 p-4 dark:border-gray-800">
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <p className="text-xs font-medium text-gray-900 dark:text-gray-100">
              Quick Links
            </p>
            <div className="mt-2 space-y-1">
              <Link
                href="/components"
                className="block text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Component Library
              </Link>
              <Link
                href="/"
                className="block text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}