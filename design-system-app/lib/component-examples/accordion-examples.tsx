"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ComponentExample } from "@/lib/component-docs"

export const accordionExamples: ComponentExample[] = [
  {
    title: "Basic Accordion",
    description: "A basic accordion with three items.",
    code: `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other
      components' aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    component: () => (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components' aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    title: "Multiple Open Items",
    description: "Allow multiple accordion items to be open at the same time.",
    code: `<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is React?</AccordionTrigger>
    <AccordionContent>
      React is a JavaScript library for building user interfaces. It lets you create reusable UI components.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What is Next.js?</AccordionTrigger>
    <AccordionContent>
      Next.js is a React framework that enables functionality such as server-side rendering and static site generation.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
    <AccordionContent>
      Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    component: () => (
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces. It lets you create reusable UI components.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is Next.js?</AccordionTrigger>
          <AccordionContent>
            Next.js is a React framework that enables functionality such as server-side rendering and static site generation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
          <AccordionContent>
            Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    title: "Default Open Item",
    description: "Accordion with a default open item.",
    code: `<Accordion type="single" collapsible defaultValue="item-2" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Getting Started</AccordionTrigger>
    <AccordionContent>
      Follow our quickstart guide to get up and running in minutes.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Installation</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-2">
        <p>Install the package using your preferred package manager:</p>
        <pre className="rounded bg-muted p-2">
          <code>npm install @radix-ui/react-accordion</code>
        </pre>
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Configuration</AccordionTrigger>
    <AccordionContent>
      Configure the component by passing props to customize its behavior.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    component: () => (
      <Accordion type="single" collapsible defaultValue="item-2" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            Follow our quickstart guide to get up and running in minutes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Installation</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Install the package using your preferred package manager:</p>
              <pre className="rounded bg-muted p-2">
                <code>npm install @radix-ui/react-accordion</code>
              </pre>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Configuration</AccordionTrigger>
          <AccordionContent>
            Configure the component by passing props to customize its behavior.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    title: "FAQ Accordion",
    description: "Accordion used for frequently asked questions.",
    code: `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="faq-1">
    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
    <AccordionContent>
      We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
    <AccordionContent>
      You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-3">
    <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
    <AccordionContent>
      Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, contact support within 30 days of purchase for a full refund.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-4">
    <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
    <AccordionContent>
      Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    component: () => (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
          <AccordionContent>
            You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, contact support within 30 days of purchase for a full refund.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
          <AccordionContent>
            Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    title: "Nested Content",
    description: "Accordion with rich nested content.",
    code: `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="features">
    <AccordionTrigger>Product Features</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Core Features</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Real-time collaboration</li>
            <li>Version control</li>
            <li>Cloud storage</li>
            <li>Cross-platform sync</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Advanced Features</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>API access</li>
            <li>Custom integrations</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="pricing">
    <AccordionTrigger>Pricing Plans</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 border rounded-lg">
          <div>
            <p className="font-medium">Starter</p>
            <p className="text-sm text-muted-foreground">For individuals</p>
          </div>
          <p className="font-bold">$9/mo</p>
        </div>
        <div className="flex justify-between items-center p-3 border rounded-lg">
          <div>
            <p className="font-medium">Pro</p>
            <p className="text-sm text-muted-foreground">For teams</p>
          </div>
          <p className="font-bold">$29/mo</p>
        </div>
        <div className="flex justify-between items-center p-3 border rounded-lg">
          <div>
            <p className="font-medium">Enterprise</p>
            <p className="text-sm text-muted-foreground">For organizations</p>
          </div>
          <p className="font-bold">Custom</p>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    component: () => (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="features">
          <AccordionTrigger>Product Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Core Features</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Real-time collaboration</li>
                  <li>Version control</li>
                  <li>Cloud storage</li>
                  <li>Cross-platform sync</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Advanced Features</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>API access</li>
                  <li>Custom integrations</li>
                  <li>Advanced analytics</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="pricing">
          <AccordionTrigger>Pricing Plans</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Starter</p>
                  <p className="text-sm text-muted-foreground">For individuals</p>
                </div>
                <p className="font-bold">$9/mo</p>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Pro</p>
                  <p className="text-sm text-muted-foreground">For teams</p>
                </div>
                <p className="font-bold">$29/mo</p>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Enterprise</p>
                  <p className="text-sm text-muted-foreground">For organizations</p>
                </div>
                <p className="font-bold">Custom</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    title: "Customized Styling",
    description: "Accordion with custom styling.",
    code: `<Accordion type="single" collapsible className="w-full space-y-2">
  <AccordionItem value="item-1" className="border rounded-lg px-4">
    <AccordionTrigger className="hover:no-underline">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-500" />
        Custom styled trigger
      </div>
    </AccordionTrigger>
    <AccordionContent>
      This accordion item has custom styling with rounded borders and padding.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" className="border rounded-lg px-4">
    <AccordionTrigger className="hover:no-underline">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        Another custom item
      </div>
    </AccordionTrigger>
    <AccordionContent>
      Each item can have its own unique styling while maintaining consistency.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3" className="border rounded-lg px-4">
    <AccordionTrigger className="hover:no-underline">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-purple-500" />
        Third styled item
      </div>
    </AccordionTrigger>
    <AccordionContent>
      The styling can be customized to match your design system.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    component: () => (
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              Custom styled trigger
            </div>
          </AccordionTrigger>
          <AccordionContent>
            This accordion item has custom styling with rounded borders and padding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Another custom item
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Each item can have its own unique styling while maintaining consistency.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              Third styled item
            </div>
          </AccordionTrigger>
          <AccordionContent>
            The styling can be customized to match your design system.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    title: "Code Examples Accordion",
    description: "Accordion showing code examples.",
    code: `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="react">
    <AccordionTrigger>React Example</AccordionTrigger>
    <AccordionContent>
      <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
        <code>{&\`function Component() {
  return <div>Hello World</div>
}&\`}</code>
      </pre>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="vue">
    <AccordionTrigger>Vue Example</AccordionTrigger>
    <AccordionContent>
      <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
        <code>{&\`<template>
  <div>Hello World</div>
</template>&\`}</code>
      </pre>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="angular">
    <AccordionTrigger>Angular Example</AccordionTrigger>
    <AccordionContent>
      <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
        <code>{&\`@Component({
  template: '<div>Hello World</div>'
})&\`}</code>
      </pre>
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    component: () => (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="react">
          <AccordionTrigger>React Example</AccordionTrigger>
          <AccordionContent>
            <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`function Component() {
  return <div>Hello World</div>
}`}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="vue">
          <AccordionTrigger>Vue Example</AccordionTrigger>
          <AccordionContent>
            <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`<template>
  <div>Hello World</div>
</template>`}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="angular">
          <AccordionTrigger>Angular Example</AccordionTrigger>
          <AccordionContent>
            <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`@Component({
  template: '<div>Hello World</div>'
})`}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
]