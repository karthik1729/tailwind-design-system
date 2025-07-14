"use client"

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  CardAction 
} from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { Button } from "@/components/ui/button"
import { AccordionEnhancedExample } from "./accordion-enhanced-example"
import { CollapsibleExample } from "./collapsible-example"
import { TableExample } from "./table-example"
import { AvatarExample } from "./avatar-example"
import { ChartExample } from "./chart-example"
import { MoreHorizontal, Check, X, Clock } from "lucide-react"

export default function DataDisplayPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Data Display</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Components for presenting and organizing information in various formats.
        </p>
      </div>

      {/* Card Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <p className="text-muted-foreground mb-6">
            A versatile container component for grouping related content and actions.
          </p>
        </div>

        {/* Basic Card */}
        <PreviewContainer
          title="Basic Card"
          description="Simple card with header and content"
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content. You can put any content here.</p>
  </CardContent>
</Card>`}
          component={
            <div className="gap-4">
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the card content. You can put any content here.</p>
                </CardContent>
              </Card>
            </div>
          }
        />

        {/* Card with Footer */}
        <PreviewContainer
          title="Card with Footer"
          description="Card with header, content, and footer sections"
          code={`<Card>
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
    <CardDescription>Manage your account preferences</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Email notifications</span>
        <Badge>Active</Badge>
      </div>
      <div className="flex justify-between">
        <span>Two-factor authentication</span>
        <Badge variant="secondary">Disabled</Badge>
      </div>
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save changes</Button>
  </CardFooter>
</Card>`}
          component={
            <div className="gap-4">
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Email notifications</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Two-factor authentication</span>
                      <Badge variant="secondary">Disabled</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </div>
          }
        />

        {/* Card with Action */}
        <PreviewContainer
          title="Card with Action"
          description="Card with an action button in the header"
          code={`<Card>
  <CardHeader>
    <CardTitle>Recent Activity</CardTitle>
    <CardDescription>Your latest actions and events</CardDescription>
    <CardAction>
      <Button size="icon" variant="ghost">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span className="text-sm">John updated the project</span>
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <span className="text-sm">Alice added a comment</span>
      </div>
    </div>
  </CardContent>
</Card>`}
          component={
            <div className="gap-4">
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest actions and events</CardDescription>
                  <CardAction>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">John updated the project</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Alice added a comment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        />

        {/* Interactive Card */}
        <PreviewContainer
          title="Interactive Card"
          description="Clickable card with hover lift effects and focus states"
          code={`<Card 
  interactive 
  onClick={() => console.log('Card clicked')}
>
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Click or hover to see the interactive effects</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has hover lift effects, scale animations, and focus states for accessibility.</p>
    <div className="mt-4 flex items-center gap-2">
      <Badge>Interactive</Badge>
      <Badge variant="secondary">Accessible</Badge>
    </div>
  </CardContent>
</Card>`}
          component={
            <div className="gap-4">
              <Card 
                interactive 
                className="max-w-md"
                onClick={() => console.log('Card clicked')}
              >
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>Click or hover to see the interactive effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has hover lift effects, scale animations, and focus states for accessibility.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge>Interactive</Badge>
                    <Badge variant="secondary">Accessible</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        />

        {/* Card Variants */}
        <PreviewContainer
          title="Card Variants"
          description="Different card styles including elevated and flat variants"
          code={`{/* Default Card */}
<Card>
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
    <CardDescription>Standard shadow and border</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the default card style with subtle shadow.</p>
  </CardContent>
</Card>

{/* Elevated Card */}
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated Card</CardTitle>
    <CardDescription>Higher elevation with stronger shadows</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has enhanced shadows for more prominent appearance.</p>
  </CardContent>
</Card>

{/* Flat Card */}
<Card variant="flat">
  <CardHeader>
    <CardTitle>Flat Card</CardTitle>
    <CardDescription>Minimalist style without shadows or borders</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has no shadow or border for a clean, flat design.</p>
  </CardContent>
</Card>`}
          component={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>Standard shadow and border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the default card style with subtle shadow.</p>
                </CardContent>
              </Card>
              
              <Card variant="elevated" className="max-w-md">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>Higher elevation with stronger shadows</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has enhanced shadows for more prominent appearance.</p>
                </CardContent>
              </Card>
              
              <Card variant="flat" className="max-w-md">
                <CardHeader>
                  <CardTitle>Flat Card</CardTitle>
                  <CardDescription>Minimalist style without shadows or borders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has no shadow or border for a clean, flat design.</p>
                </CardContent>
              </Card>
            </div>
          }
        />

        {/* Interactive Card Grid */}
        <PreviewContainer
          title="Interactive Card Grid"
          description="Grid of interactive cards showcasing hover effects together"
          code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card interactive variant="elevated">
    <CardHeader>
      <CardTitle>Project Alpha</CardTitle>
      <CardDescription>Web application development</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Progress</span>
          <Badge>75%</Badge>
        </div>
        <div className="flex justify-between">
          <span>Due Date</span>
          <span className="text-sm text-muted-foreground">Dec 15, 2024</span>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card interactive variant="elevated">
    <CardHeader>
      <CardTitle>Project Beta</CardTitle>
      <CardDescription>Mobile app redesign</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Progress</span>
          <Badge variant="secondary">45%</Badge>
        </div>
        <div className="flex justify-between">
          <span>Due Date</span>
          <span className="text-sm text-muted-foreground">Jan 20, 2025</span>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card interactive variant="elevated">
    <CardHeader>
      <CardTitle>Project Gamma</CardTitle>
      <CardDescription>API development</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Progress</span>
          <Badge>90%</Badge>
        </div>
        <div className="flex justify-between">
          <span>Due Date</span>
          <span className="text-sm text-muted-foreground">Nov 30, 2024</span>
        </div>
      </div>
    </CardContent>
  </Card>
</div>`}
          component={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card interactive variant="elevated">
                <CardHeader>
                  <CardTitle>Project Alpha</CardTitle>
                  <CardDescription>Web application development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Progress</span>
                      <Badge>75%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Due Date</span>
                      <span className="text-sm text-muted-foreground">Dec 15, 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card interactive variant="elevated">
                <CardHeader>
                  <CardTitle>Project Beta</CardTitle>
                  <CardDescription>Mobile app redesign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Progress</span>
                      <Badge variant="secondary">45%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Due Date</span>
                      <span className="text-sm text-muted-foreground">Jan 20, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card interactive variant="elevated">
                <CardHeader>
                  <CardTitle>Project Gamma</CardTitle>
                  <CardDescription>API development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Progress</span>
                      <Badge>90%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Due Date</span>
                      <span className="text-sm text-muted-foreground">Nov 30, 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        />
      </section>

      {/* Table Component */}
      <TableExample />

      {/* Avatar Component */}
      <AvatarExample />

      {/* Badge Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Badge</h2>
          <p className="text-muted-foreground mb-6">
            Small status indicators and labels for highlighting information.
          </p>
        </div>

        {/* Badge Variants */}
        <PreviewContainer
          title="Badge Variants"
          description="Different badge styles for various use cases"
          code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
          component={
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          }
        />

        {/* Badge with Icons */}
        <PreviewContainer
          title="Badges with Icons"
          description="Badges combined with icons for enhanced visual communication"
          code={`<Badge>
  <Check className="h-3 w-3" />
  Success
</Badge>
<Badge variant="destructive">
  <X className="h-3 w-3" />
  Error
</Badge>
<Badge variant="secondary">
  <Clock className="h-3 w-3" />
  Pending
</Badge>`}
          component={
            <div className="flex flex-wrap items-center gap-4">
              <Badge>
                <Check className="h-3 w-3" />
                Success
              </Badge>
              <Badge variant="destructive">
                <X className="h-3 w-3" />
                Error
              </Badge>
              <Badge variant="secondary">
                <Clock className="h-3 w-3" />
                Pending
              </Badge>
            </div>
          }
        />

        {/* Badge as Link */}
        <PreviewContainer
          title="Interactive Badges"
          description="Badges that can be used as clickable elements"
          code={`<Badge asChild>
  <a href="#">Link Badge</a>
</Badge>
<Badge asChild variant="outline">
  <button>Button Badge</button>
</Badge>`}
          component={
            <div className="flex flex-wrap items-center gap-4">
              <Badge asChild>
                <a href="#">Link Badge</a>
              </Badge>
              <Badge asChild variant="outline">
                <button>Button Badge</button>
              </Badge>
            </div>
          }
        />
      </section>

      {/* Accordion Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
          <p className="text-muted-foreground mb-6">
            Collapsible content panels for organizing information hierarchically.
          </p>
        </div>

        {/* Single Accordion */}
        <PreviewContainer
          title="Single Accordion"
          description="Allow only one item to be expanded at a time"
          code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is this component?</AccordionTrigger>
    <AccordionContent>
      This is an accordion component that allows you to show and hide content
      in a collapsible manner. It's useful for FAQs and organizing content.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How do I use it?</AccordionTrigger>
    <AccordionContent>
      Simply import the Accordion components and wrap your content. You can
      control whether multiple items can be open at once with the type prop.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Can I customize it?</AccordionTrigger>
    <AccordionContent>
      Yes! The accordion component accepts className props and can be styled
      with Tailwind CSS classes. You can also control its behavior through props.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          component={
            <div className="max-w-2xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is this component?</AccordionTrigger>
                  <AccordionContent>
                    This is an accordion component that allows you to show and hide content
                    in a collapsible manner. It's useful for FAQs and organizing content.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I use it?</AccordionTrigger>
                  <AccordionContent>
                    Simply import the Accordion components and wrap your content. You can
                    control whether multiple items can be open at once with the type prop.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I customize it?</AccordionTrigger>
                  <AccordionContent>
                    Yes! The accordion component accepts className props and can be styled
                    with Tailwind CSS classes. You can also control its behavior through props.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
        />

        {/* Multiple Accordion */}
        <PreviewContainer
          title="Multiple Accordion"
          description="Allow multiple items to be expanded simultaneously"
          code={`<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Features</AccordionTrigger>
    <AccordionContent>
      <ul className="list-disc pl-4 space-y-1">
        <li>Smooth animations</li>
        <li>Keyboard navigation</li>
        <li>Accessible by default</li>
        <li>Customizable styling</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Benefits</AccordionTrigger>
    <AccordionContent>
      <ul className="list-disc pl-4 space-y-1">
        <li>Saves space on the page</li>
        <li>Improves content organization</li>
        <li>Enhances user experience</li>
        <li>Progressive disclosure of information</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          component={
            <div className="max-w-2xl">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Smooth animations</li>
                      <li>Keyboard navigation</li>
                      <li>Accessible by default</li>
                      <li>Customizable styling</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Saves space on the page</li>
                      <li>Improves content organization</li>
                      <li>Enhances user experience</li>
                      <li>Progressive disclosure of information</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
        />

        {/* Enhanced Accordion Examples */}
        <AccordionEnhancedExample />
      </section>

      {/* Collapsible Component */}
      <CollapsibleExample />

      {/* Chart Component */}
      <ChartExample />
    </div>
  )
}