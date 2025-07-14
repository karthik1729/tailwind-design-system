"use client"

import { useState } from "react"
import { StoryboardNavigation } from "@/components/storyboard/navigation"
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Menu as MenuIcon } from "lucide-react"

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
]

interface LayoutWrapperProps {
  children: React.ReactNode
  currentTheme: 'light' | 'dark'
}

export function LayoutWrapper({ children, currentTheme }: LayoutWrapperProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex">
      <StoryboardNavigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentTheme={currentTheme} />
      
      <div className="flex-1 flex flex-col lg:pl-72">
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-muted-foreground hover:text-foreground"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" />
          </button>

          {/* Separator - only visible on desktop */}
          <div aria-hidden="true" className="hidden lg:block h-6 w-px bg-border" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form action="#" method="GET" className="grid flex-1 grid-cols-1">
              <input
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-foreground outline-none placeholder:text-muted-foreground sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-muted-foreground"
              />
            </form>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-muted-foreground hover:text-foreground">
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Separator */}
              <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="relative flex items-center">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <div className="size-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium">TC</span>
                  </div>
                  <span className="hidden lg:flex lg:items-center">
                    <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-foreground">
                      Tom Cook
                    </span>
                    <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-muted-foreground" />
                  </span>
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-card py-2 shadow-lg ring-1 ring-border transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-3 py-1 text-sm/6 text-foreground data-[focus]:bg-muted data-[focus]:outline-none"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}