"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { 
  ChevronsUpDown, 
  ChevronDown,
  Plus,
  X,
  Settings,
  Code,
  FileText,
  User,
  Bell,
  Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false)
  const [codeOpen, setCodeOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Collapsible</h2>
        <p className="text-muted-foreground mb-6">
          An interactive component which expands/collapses a panel. Note: Unlike Accordion, 
          Collapsible has instant show/hide behavior without smooth height animations.
        </p>
      </div>

      {/* Basic Collapsible */}
      <PreviewContainer
        title="Basic Collapsible"
        description="A simple collapsible with toggle button"
        code={`const [isOpen, setIsOpen] = useState(false)

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
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-foreground">
      @radix-ui/primitives
    </div>
    <CollapsibleContent className="space-y-2">
      <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-foreground">
        @radix-ui/colors
      </div>
      <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-foreground">
        @stitches/react
      </div>
    </CollapsibleContent>
  </Collapsible>
)`}
        component={
          <div className="flex justify-center">
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
                    <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-foreground">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-foreground">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm text-foreground">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        }
      />

      {/* Collapsible with Chevron Animation */}
      <PreviewContainer
        title="With Animated Chevron"
        description="Collapsible with rotating chevron icon"
        code={`<Collapsible className="w-full max-w-md">
  <Card>
    <CollapsibleTrigger className="block w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Project Details</CardTitle>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </div>
      </CardHeader>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <Badge>Active</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Created</span>
            <span className="text-sm">Jan 15, 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Members</span>
            <span className="text-sm">12</span>
          </div>
        </div>
      </CardContent>
    </CollapsibleContent>
  </Card>
</Collapsible>`}
        component={
          <div className="flex justify-center">
            <Collapsible className="w-full max-w-md">
              <Card>
                <CollapsibleTrigger className="block w-full">
                  <CardHeader className="hover:bg-muted/50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Project Details</CardTitle>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Status</span>
                        <Badge>Active</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Created</span>
                        <span className="text-sm">Jan 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Members</span>
                        <span className="text-sm">12</span>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        }
      />

      {/* Code Block Collapsible */}
      <PreviewContainer
        title="Code Block Example"
        description="Collapsible code snippet viewer"
        code={`const [isOpen, setIsOpen] = useState(false)

return (
  <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-full max-w-2xl"
  >
    <Card>
      <CollapsibleTrigger className="block w-full" asChild>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <code className="text-sm font-mono">useAuth.ts</code>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <span>{isOpen ? "Hide" : "Show"} Code</span>
            </Button>
          </div>
        </CardHeader>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent className="pt-0">
          <pre className="overflow-x-auto rounded-md bg-muted/50 p-4">
            <code className="text-sm text-foreground">{\`import { useState, useEffect } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Auth logic here
    setLoading(false)
  }, [])
  
  return { user, loading }
}\`}</code>
          </pre>
        </CardContent>
      </CollapsibleContent>
    </Card>
  </Collapsible>
)`}
        component={
          <div className="flex justify-center">
            <Collapsible
              open={codeOpen}
              onOpenChange={setCodeOpen}
              className="w-full max-w-2xl"
            >
              <Card>
                <CollapsibleTrigger className="block w-full" asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-muted-foreground" />
                        <code className="text-sm font-mono text-foreground">useAuth.ts</code>
                      </div>
                      <Button variant="ghost" size="sm">
                        {codeOpen ? "Hide" : "Show"} Code
                      </Button>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <pre className="overflow-x-auto rounded-md bg-muted/50 p-4">
                      <code className="text-sm text-foreground">{`import { useState, useEffect } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Auth logic here
    setLoading(false)
  }, [])
  
  return { user, loading }
}`}</code>
                    </pre>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        }
      />

      {/* Settings Panel Collapsible */}
      <PreviewContainer
        title="Settings Panel"
        description="Collapsible settings sections with icons"
        code={`const [isOpen, setIsOpen] = useState(false)

return (
  <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-full max-w-md"
  >
    <div className="rounded-lg border border-border">
      <CollapsibleTrigger className="flex w-full items-center gap-3 p-4 hover:bg-muted/50 transition-colors duration-200">
        <div className={\`rounded-lg p-2 transition-colors duration-200 \${
          isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted'
        }\`}>
          <Settings className="h-4 w-4" />
        </div>
        <span className="flex-1 text-left font-medium text-foreground">Advanced Settings</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="border-t px-4 pb-4 pt-3">
          <div className="space-y-3">
            <button className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-muted/50 transition-colors duration-200">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Profile Settings</div>
                <div className="text-xs text-muted-foreground">Manage your profile</div>
              </div>
            </button>
            <button className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-muted/50 transition-colors duration-200">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Notifications</div>
                <div className="text-xs text-muted-foreground">Configure alerts</div>
              </div>
            </button>
            <button className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-muted/50 transition-colors duration-200">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Privacy</div>
                <div className="text-xs text-muted-foreground">Data preferences</div>
              </div>
            </button>
          </div>
        </div>
      </CollapsibleContent>
    </div>
  </Collapsible>
)`}
        component={
          <div className="flex justify-center">
            <Collapsible
              open={settingsOpen}
              onOpenChange={setSettingsOpen}
              className="w-full max-w-md"
            >
              <div className="rounded-lg border">
                <CollapsibleTrigger className="flex w-full items-center gap-3 p-4 hover:bg-muted/50 transition-colors duration-200">
                  <div className={`rounded-lg p-2 transition-colors duration-200 ${
                    settingsOpen ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <Settings className="h-4 w-4" />
                  </div>
                  <span className="flex-1 text-left font-medium text-foreground">Advanced Settings</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border-t border-border px-4 pb-4 pt-3">
                    <div className="space-y-3">
                      <button className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-muted/50 transition-colors duration-200">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium text-foreground">Profile Settings</div>
                          <div className="text-xs text-muted-foreground">Manage your profile</div>
                        </div>
                      </button>
                      <button className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-muted/50 transition-colors duration-200">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium text-foreground">Notifications</div>
                          <div className="text-xs text-muted-foreground">Configure alerts</div>
                        </div>
                      </button>
                      <button className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-muted/50 transition-colors duration-200">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium text-foreground">Privacy</div>
                          <div className="text-xs text-muted-foreground">Data preferences</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        }
      />

      {/* FAQ Style */}
      <PreviewContainer
        title="FAQ Style"
        description="Multiple collapsible sections for frequently asked questions"
        code={`const faqs = [
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
  <div className="w-full max-w-2xl space-y-2">
    {faqs.map((faq, index) => (
      <Collapsible key={index}>
        <div className="rounded-lg border">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors duration-200">
            <span className="font-medium pr-4">{faq.question}</span>
            <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="border-t px-4 pb-4 pt-3">
              <p className="text-sm text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    ))}
  </div>
)`}
        component={
          <div className="flex justify-center">
            <div className="w-full max-w-2xl space-y-2">
              {[
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
              ].map((faq, index) => (
                <Collapsible key={index}>
                  <div className="rounded-lg border border-border">
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors duration-200">
                      <span className="font-medium pr-4 text-foreground">{faq.question}</span>
                      <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="border-t border-border px-4 pb-4 pt-3">
                        <p className="text-sm text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))}
            </div>
          </div>
        }
      />

      {/* Default Open */}
      <PreviewContainer
        title="Default Open State"
        description="Collapsible that starts in the open state"
        code={`<Collapsible defaultOpen className="w-full max-w-md">
  <div className="rounded-lg border bg-card">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4" />
        <span className="font-medium">Documentation</span>
      </div>
      <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className="border-t p-4">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground">•</span>
            Getting Started Guide
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground">•</span>
            API Reference
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground">•</span>
            Examples & Tutorials
          </li>
        </ul>
      </div>
    </CollapsibleContent>
  </div>
</Collapsible>`}
        component={
          <div className="flex justify-center">
            <Collapsible defaultOpen className="w-full max-w-md">
              <div className="rounded-lg border border-border bg-card">
                <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">Documentation</span>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border-t p-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-muted-foreground">•</span>
                        Getting Started Guide
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-muted-foreground">•</span>
                        API Reference
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-muted-foreground">•</span>
                        Examples & Tutorials
                      </li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        }
      />
    </section>
  )
}