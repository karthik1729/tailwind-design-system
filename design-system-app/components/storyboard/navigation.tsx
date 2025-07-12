"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  SwatchIcon,
  CubeIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline"
import { Dialog, DialogPanel, DialogBackdrop, TransitionChild } from "@headlessui/react"
import { componentRegistry } from "@/lib/component-registry"
import { ThemeSwitcher } from "@/components/theme-switcher"

const navigation = [
  { name: "Overview", href: "/storyboard", icon: HomeIcon, current: false },
  { name: "Foundations", href: "/storyboard/foundations", icon: SwatchIcon, current: false },
  { name: "Components", href: "/storyboard/components", icon: CubeIcon, current: false },
  { name: "Patterns", href: "/storyboard/patterns", icon: DocumentTextIcon, current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export function StoryboardNavigation() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["foundations", "components", "patterns"])

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
    <>
      {/* Mobile sidebar */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-foreground" />
                </button>
              </div>
            </TransitionChild>

            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <Link href="/storyboard" className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <CubeIcon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-lg">Design System</span>
                </Link>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={classNames(
                              pathname === item.href
                                ? "bg-muted text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                                "size-6 shrink-0"
                              )}
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div className="text-xs/6 font-semibold text-muted-foreground">Categories</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {Object.entries(componentRegistry).map(([key, category]) => (
                        <li key={key}>
                          <button
                            onClick={() => toggleCategory(key)}
                            className="group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            <ChevronDownIcon
                              className={classNames(
                                "size-5 shrink-0 transition-transform",
                                expandedCategories.includes(key) && "rotate-180"
                              )}
                            />
                            <span className="truncate">{category.name}</span>
                            <span className="ml-auto text-xs">{Object.keys(category.subcategories).length}</span>
                          </button>
                          {expandedCategories.includes(key) && (
                            <ul className="mt-1 space-y-1 px-2">
                              {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                                <li key={subKey}>
                                  <Link
                                    href={`/storyboard/${key}/${subKey}`}
                                    className={classNames(
                                      pathname === `/storyboard/${key}/${subKey}`
                                        ? "bg-muted text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                      "block rounded-md py-2 px-3 text-sm"
                                    )}
                                  >
                                    <span className="flex items-center justify-between">
                                      {subcategory.name}
                                      <span className="text-xs">{subcategory.count}</span>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="mt-auto">
                    <Link
                      href="#"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <Cog6ToothIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-muted-foreground group-hover:text-foreground"
                      />
                      Settings
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/storyboard" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CubeIcon className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg">Design System</span>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? "bg-muted text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                            "size-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs/6 font-semibold text-muted-foreground">Categories</div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {Object.entries(componentRegistry).map(([key, category]) => (
                    <li key={key}>
                      <button
                        onClick={() => toggleCategory(key)}
                        className="group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <ChevronDownIcon
                          className={classNames(
                            "size-5 shrink-0 transition-transform",
                            expandedCategories.includes(key) && "rotate-180"
                          )}
                        />
                        <span className="truncate">{category.name}</span>
                        <span className="ml-auto text-xs">{Object.keys(category.subcategories).length}</span>
                      </button>
                      {expandedCategories.includes(key) && (
                        <ul className="mt-1 space-y-1 px-2">
                          {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
                            <li key={subKey}>
                              <Link
                                href={`/storyboard/${key}/${subKey}`}
                                className={classNames(
                                  pathname === `/storyboard/${key}/${subKey}`
                                    ? "bg-muted text-primary"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                  "block rounded-md py-2 px-3 text-sm"
                                )}
                              >
                                <span className="flex items-center justify-between">
                                  {subcategory.name}
                                  <span className="text-xs">{subcategory.count}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <div className="flex items-center justify-between rounded-md bg-muted p-2">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-40 -m-2.5 p-2.5 text-foreground"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
    </>
  )
}