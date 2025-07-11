"use client"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ComponentExample } from "@/lib/component-docs"
import { useState, useEffect } from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  File,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Music,
  Plane,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const commandExamples: ComponentExample[] = [
  {
    title: "Basic Command Menu",
    description: "A simple command menu with search functionality.",
    code: `<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    component: () => (
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  },
  {
    title: "Command Dialog",
    description: "Command menu in a modal dialog.",
    code: `const [open, setOpen] = useState(false)

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

return (
  <>
    <p className="text-sm text-muted-foreground">
      Press{" "}
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>J
      </kbd>
    </p>
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => setOpen(false)}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </>
)`,
    component: () => {
      const [open, setOpen] = useState(false)

      useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
          }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
      }, [])

      return (
        <>
          <p className="text-sm text-muted-foreground">
            Press{" "}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>J
            </kbd>
          </p>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem onSelect={() => setOpen(false)}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </>
      )
    }
  },
  {
    title: "With Disabled Items",
    description: "Command menu with some disabled items.",
    code: `<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Search features..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Features">
      <CommandItem>
        <Plus className="mr-2 h-4 w-4" />
        <span>New Document</span>
      </CommandItem>
      <CommandItem>
        <File className="mr-2 h-4 w-4" />
        <span>Open File</span>
      </CommandItem>
      <CommandItem disabled>
        <PlusCircle className="mr-2 h-4 w-4" />
        <span>Create Team</span>
        <span className="ml-auto text-xs text-muted-foreground">Pro</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Advanced">
      <CommandItem disabled>
        <Music className="mr-2 h-4 w-4" />
        <span>Music Library</span>
        <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    component: () => (
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search features..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Features">
            <CommandItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Document</span>
            </CommandItem>
            <CommandItem>
              <File className="mr-2 h-4 w-4" />
              <span>Open File</span>
            </CommandItem>
            <CommandItem disabled>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>Create Team</span>
              <span className="ml-auto text-xs text-muted-foreground">Pro</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Advanced">
            <CommandItem disabled>
              <Music className="mr-2 h-4 w-4" />
              <span>Music Library</span>
              <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  },
  {
    title: "With Item Selection",
    description: "Command menu that handles item selection.",
    code: `const [selectedItem, setSelectedItem] = useState("")

const items = [
  { value: "email", label: "Email", icon: Mail },
  { value: "message", label: "Message", icon: MessageSquare },
  { value: "calendar", label: "Calendar", icon: Calendar },
  { value: "search", label: "Search", icon: Search },
]

return (
  <div className="space-y-4">
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Select an action..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          {items.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              onSelect={(value) => {
                setSelectedItem(value)
              }}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
              {selectedItem === item.value && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
    {selectedItem && (
      <p className="text-sm text-muted-foreground">
        Selected: <strong>{selectedItem}</strong>
      </p>
    )}
  </div>
)`,
    component: () => {
      const [selectedItem, setSelectedItem] = useState("")

      const items = [
        { value: "email", label: "Email", icon: Mail },
        { value: "message", label: "Message", icon: MessageSquare },
        { value: "calendar", label: "Calendar", icon: Calendar },
        { value: "search", label: "Search", icon: Search },
      ]

      return (
        <div className="space-y-4">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Select an action..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Actions">
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(value) => {
                      setSelectedItem(value)
                    }}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                    {selectedItem === item.value && (
                      <span className="ml-auto text-xs">✓</span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          {selectedItem && (
            <p className="text-sm text-muted-foreground">
              Selected: <strong>{selectedItem}</strong>
            </p>
          )}
        </div>
      )
    }
  },
  {
    title: "Theme Switcher",
    description: "Command menu for switching themes.",
    code: `const [theme, setTheme] = useState("system")

return (
  <Command className="rounded-lg border shadow-md">
    <CommandInput placeholder="Change theme..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Theme">
        <CommandItem
          value="light"
          onSelect={() => setTheme("light")}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
          {theme === "light" && (
            <span className="ml-auto text-xs">✓</span>
          )}
        </CommandItem>
        <CommandItem
          value="dark"
          onSelect={() => setTheme("dark")}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && (
            <span className="ml-auto text-xs">✓</span>
          )}
        </CommandItem>
        <CommandItem
          value="system"
          onSelect={() => setTheme("system")}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>System</span>
          {theme === "system" && (
            <span className="ml-auto text-xs">✓</span>
          )}
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
)`,
    component: () => {
      const [theme, setTheme] = useState("system")

      return (
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Change theme..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Theme">
              <CommandItem
                value="light"
                onSelect={() => setTheme("light")}
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
                {theme === "light" && (
                  <span className="ml-auto text-xs">✓</span>
                )}
              </CommandItem>
              <CommandItem
                value="dark"
                onSelect={() => setTheme("dark")}
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
                {theme === "dark" && (
                  <span className="ml-auto text-xs">✓</span>
                )}
              </CommandItem>
              <CommandItem
                value="system"
                onSelect={() => setTheme("system")}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>System</span>
                {theme === "system" && (
                  <span className="ml-auto text-xs">✓</span>
                )}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )
    }
  },
  {
    title: "Search with Categories",
    description: "Command menu with categorized search results.",
    code: `const [search, setSearch] = useState("")

const allItems = {
  documents: [
    { id: 1, name: "Project Proposal.pdf", type: "PDF" },
    { id: 2, name: "Meeting Notes.docx", type: "Word" },
    { id: 3, name: "Budget 2024.xlsx", type: "Excel" },
  ],
  people: [
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Bob Johnson", role: "Manager" },
  ],
  actions: [
    { id: 1, name: "Create New Document", shortcut: "⌘N" },
    { id: 2, name: "Share File", shortcut: "⌘S" },
    { id: 3, name: "Download", shortcut: "⌘D" },
  ],
}

return (
  <Command className="rounded-lg border shadow-md">
    <CommandInput
      placeholder="Search everything..."
      value={search}
      onValueChange={setSearch}
    />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      
      {search && (
        <>
          <CommandGroup heading="Documents">
            {allItems.documents.map((doc) => (
              <CommandItem key={\`doc-\${doc.id}\`} value={doc.name}>
                <File className="mr-2 h-4 w-4" />
                <span>{doc.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {doc.type}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="People">
            {allItems.people.map((person) => (
              <CommandItem key={\`person-\${person.id}\`} value={person.name}>
                <User className="mr-2 h-4 w-4" />
                <span>{person.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {person.role}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Actions">
            {allItems.actions.map((action) => (
              <CommandItem key={\`action-\${action.id}\`} value={action.name}>
                <Plus className="mr-2 h-4 w-4" />
                <span>{action.name}</span>
                <CommandShortcut>{action.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </>
      )}
    </CommandList>
  </Command>
)`,
    component: () => {
      const [search, setSearch] = useState("")

      const allItems = {
        documents: [
          { id: 1, name: "Project Proposal.pdf", type: "PDF" },
          { id: 2, name: "Meeting Notes.docx", type: "Word" },
          { id: 3, name: "Budget 2024.xlsx", type: "Excel" },
        ],
        people: [
          { id: 1, name: "John Doe", role: "Developer" },
          { id: 2, name: "Jane Smith", role: "Designer" },
          { id: 3, name: "Bob Johnson", role: "Manager" },
        ],
        actions: [
          { id: 1, name: "Create New Document", shortcut: "⌘N" },
          { id: 2, name: "Share File", shortcut: "⌘S" },
          { id: 3, name: "Download", shortcut: "⌘D" },
        ],
      }

      return (
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Search everything..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            {search && (
              <>
                <CommandGroup heading="Documents">
                  {allItems.documents.map((doc) => (
                    <CommandItem key={`doc-${doc.id}`} value={doc.name}>
                      <File className="mr-2 h-4 w-4" />
                      <span>{doc.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {doc.type}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="People">
                  {allItems.people.map((person) => (
                    <CommandItem key={`person-${person.id}`} value={person.name}>
                      <User className="mr-2 h-4 w-4" />
                      <span>{person.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {person.role}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="Actions">
                  {allItems.actions.map((action) => (
                    <CommandItem key={`action-${action.id}`} value={action.name}>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>{action.name}</span>
                      <CommandShortcut>{action.shortcut}</CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      )
    }
  }
]