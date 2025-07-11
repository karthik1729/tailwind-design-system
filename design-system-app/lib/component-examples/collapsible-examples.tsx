"use client"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

export const collapsibleExamples: ComponentExample[] = [
  {
    title: "Basic Collapsible",
    description: "A simple collapsible with toggle button.",
    code: `const [isOpen, setIsOpen] = useState(false)

return (
  <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-[350px] space-y-2"
  >
    <div className="flex items-center justify-between space-x-4 px-4">
      <h4 className="text-sm font-semibold">
        @peduarte starred 3 repositories
      </h4>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 p-0">
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/primitives
    </div>
    <CollapsibleContent className="space-y-2">
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/colors
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @stitches/react
      </div>
    </CollapsibleContent>
  </Collapsible>
)`,
    component: () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
  },
  {
    title: "With Default Open",
    description: "Collapsible that starts in the open state.",
    code: `<Collapsible defaultOpen className="w-[350px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">Session Details</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-2">
      <div className="font-semibold">User ID</div>
      <div className="text-sm text-muted-foreground">usr_123456789</div>
    </div>
    <div className="rounded-md border px-4 py-2">
      <div className="font-semibold">Session ID</div>
      <div className="text-sm text-muted-foreground">sess_987654321</div>
    </div>
    <div className="rounded-md border px-4 py-2">
      <div className="font-semibold">IP Address</div>
      <div className="text-sm text-muted-foreground">192.168.1.1</div>
    </div>
  </CollapsibleContent>
</Collapsible>`,
    component: () => (
      <Collapsible defaultOpen className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Session Details</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2">
            <div className="font-semibold">User ID</div>
            <div className="text-sm text-muted-foreground">usr_123456789</div>
          </div>
          <div className="rounded-md border px-4 py-2">
            <div className="font-semibold">Session ID</div>
            <div className="text-sm text-muted-foreground">sess_987654321</div>
          </div>
          <div className="rounded-md border px-4 py-2">
            <div className="font-semibold">IP Address</div>
            <div className="text-sm text-muted-foreground">192.168.1.1</div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
  {
    title: "FAQ Style",
    description: "Collapsible sections for frequently asked questions.",
    code: `const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee for all new customers."
  }
]

return (
  <div className="w-full max-w-md space-y-2">
    {faqs.map((faq, index) => (
      <Collapsible key={index}>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 text-left hover:bg-accent">
          <span className="font-medium">{faq.question}</span>
          <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-4 pt-2">
          <p className="text-sm text-muted-foreground">{faq.answer}</p>
        </CollapsibleContent>
      </Collapsible>
    ))}
  </div>
)`,
    component: () => {
      const faqs = [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 30-day money-back guarantee for all new customers."
        }
      ]

      return (
        <div className="w-full max-w-md space-y-2">
          {faqs.map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 text-left hover:bg-accent">
                <span className="font-medium">{faq.question}</span>
                <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4 pt-2">
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      )
    }
  },
  {
    title: "With Custom Trigger",
    description: "Collapsible with custom styled trigger.",
    code: `const [isOpen, setIsOpen] = useState(false)

return (
  <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-[350px]"
  >
    <CollapsibleTrigger className="group w-full">
      <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4 hover:bg-primary/20">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-primary p-1">
            <Plus className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-medium">Advanced Settings</span>
        </div>
        <ChevronsUpDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2 space-y-2 px-4">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="rounded" />
        <span className="text-sm">Enable notifications</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="rounded" />
        <span className="text-sm">Show advanced options</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="rounded" />
        <span className="text-sm">Enable developer mode</span>
      </label>
    </CollapsibleContent>
  </Collapsible>
)`,
    component: () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px]"
        >
          <CollapsibleTrigger className="group w-full">
            <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4 hover:bg-primary/20">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary p-1">
                  <Plus className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-medium">Advanced Settings</span>
              </div>
              <ChevronsUpDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2 px-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Enable notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Show advanced options</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Enable developer mode</span>
            </label>
          </CollapsibleContent>
        </Collapsible>
      )
    }
  },
  {
    title: "Multiple Sections",
    description: "Multiple collapsible sections that can be independently controlled.",
    code: `const [openSections, setOpenSections] = useState<string[]>([])

const toggleSection = (section: string) => {
  setOpenSections(prev =>
    prev.includes(section)
      ? prev.filter(s => s !== section)
      : [...prev, section]
  )
}

const sections = [
  {
    id: "general",
    title: "General Settings",
    items: ["Profile", "Account", "Notifications"]
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    items: ["Two-factor Auth", "Sessions", "Data Export"]
  },
  {
    id: "billing",
    title: "Billing & Plans",
    items: ["Current Plan", "Payment Methods", "Billing History"]
  }
]

return (
  <div className="w-full max-w-md space-y-2">
    {sections.map((section) => (
      <Collapsible
        key={section.id}
        open={openSections.includes(section.id)}
        onOpenChange={() => toggleSection(section.id)}
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-accent">
          <span className="font-medium">{section.title}</span>
          <ChevronsUpDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-4 pb-4">
            {section.items.map((item) => (
              <button
                key={item}
                className="flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-accent"
              >
                {item}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    ))}
  </div>
)`,
    component: () => {
      const [openSections, setOpenSections] = useState<string[]>([])

      const toggleSection = (section: string) => {
        setOpenSections(prev =>
          prev.includes(section)
            ? prev.filter(s => s !== section)
            : [...prev, section]
        )
      }

      const sections = [
        {
          id: "general",
          title: "General Settings",
          items: ["Profile", "Account", "Notifications"]
        },
        {
          id: "privacy",
          title: "Privacy & Security",
          items: ["Two-factor Auth", "Sessions", "Data Export"]
        },
        {
          id: "billing",
          title: "Billing & Plans",
          items: ["Current Plan", "Payment Methods", "Billing History"]
        }
      ]

      return (
        <div className="w-full max-w-md space-y-2">
          {sections.map((section) => (
            <Collapsible
              key={section.id}
              open={openSections.includes(section.id)}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-accent">
                <span className="font-medium">{section.title}</span>
                <ChevronsUpDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4">
                  {section.items.map((item) => (
                    <button
                      key={item}
                      className="flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-accent"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      )
    }
  },
  {
    title: "Code Block Example",
    description: "Collapsible code snippets with syntax highlighting.",
    code: `const [isOpen, setIsOpen] = useState(false)

return (
  <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-full max-w-md"
  >
    <div className="rounded-md border">
      <div className="flex items-center justify-between bg-muted/50 px-4 py-2">
        <code className="text-sm font-mono">example.tsx</code>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? "Hide" : "Show"} Code
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <pre className="overflow-x-auto p-4">
          <code className="text-sm">{\`import React from 'react'

export function Example() {
  return (
    <div className="p-4">
      <h1>Hello World</h1>
    </div>
  )
}\`}</code>
        </pre>
      </CollapsibleContent>
    </div>
  </Collapsible>
)`,
    component: () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full max-w-md"
        >
          <div className="rounded-md border">
            <div className="flex items-center justify-between bg-muted/50 px-4 py-2">
              <code className="text-sm font-mono">example.tsx</code>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {isOpen ? "Hide" : "Show"} Code
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <pre className="overflow-x-auto p-4">
                <code className="text-sm">{`import React from 'react'

export function Example() {
  return (
    <div className="p-4">
      <h1>Hello World</h1>
    </div>
  )
}`}</code>
              </pre>
            </CollapsibleContent>
          </div>
        </Collapsible>
      )
    }
  }
]