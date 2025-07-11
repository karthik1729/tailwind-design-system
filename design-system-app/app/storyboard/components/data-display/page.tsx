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
import { MoreHorizontal, Check, X, Clock } from "lucide-react"

export default function DataDisplayPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Display</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Components for presenting and organizing information in various formats.
        </p>
      </div>

      {/* Card Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
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
            <div className="p-6">
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
            <div className="p-6">
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
            <div className="p-6">
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
      </section>

      {/* Table Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Table</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Display tabular data with support for headers, footers, and responsive scrolling.
          </p>
        </div>

        {/* Basic Table */}
        <PreviewContainer
          title="Basic Table"
          description="Simple table with header and body"
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>
        <Badge>Active</Badge>
      </TableCell>
      <TableCell>Admin</TableCell>
      <TableCell className="text-right">
        <Button size="sm" variant="ghost">Edit</Button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>
        <Badge variant="secondary">Inactive</Badge>
      </TableCell>
      <TableCell>User</TableCell>
      <TableCell className="text-right">
        <Button size="sm" variant="ghost">Edit</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          component={
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>
                      <Badge>Active</Badge>
                    </TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Inactive</Badge>
                    </TableCell>
                    <TableCell>User</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          }
        />

        {/* Table with Footer and Caption */}
        <PreviewContainer
          title="Table with Footer and Caption"
          description="Complete table with all sections"
          code={`<Table>
  <TableCaption>A list of recent transactions</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>
        <Badge>Paid</Badge>
      </TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>INV-002</TableCell>
      <TableCell>
        <Badge variant="secondary">Pending</Badge>
      </TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$400.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
          component={
            <div className="p-6">
              <Table>
                <TableCaption>A list of recent transactions</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>INV-001</TableCell>
                    <TableCell>
                      <Badge>Paid</Badge>
                    </TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV-002</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Pending</Badge>
                    </TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$400.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          }
        />
      </section>

      {/* Avatar Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Display user profile images with fallback support.
          </p>
        </div>

        {/* Avatar Variations */}
        <PreviewContainer
          title="Avatar Variations"
          description="Different avatar states and sizes"
          code={`{/* With Image */}
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

{/* Fallback Only */}
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

{/* Different Sizes */}
<Avatar className="h-6 w-6">
  <AvatarFallback className="text-xs">A</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>MD</AvatarFallback>
</Avatar>
<Avatar className="h-12 w-12">
  <AvatarFallback className="text-lg">LG</AvatarFallback>
</Avatar>`}
          component={
            <div className="flex items-center gap-4 p-6">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">A</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="text-lg">LG</AvatarFallback>
              </Avatar>
            </div>
          }
        />

        {/* Avatar Group */}
        <PreviewContainer
          title="Avatar Group"
          description="Display multiple avatars together"
          code={`<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>AS</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`}
          component={
            <div className="p-6">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback>+3</AvatarFallback>
                </Avatar>
              </div>
            </div>
          }
        />
      </section>

      {/* Badge Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Badge</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
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
            <div className="flex flex-wrap items-center gap-4 p-6">
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
            <div className="flex flex-wrap items-center gap-4 p-6">
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
            <div className="flex flex-wrap items-center gap-4 p-6">
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
          <p className="text-gray-600 dark:text-gray-400 mb-6">
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
            <div className="p-6 max-w-2xl">
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
            <div className="p-6 max-w-2xl">
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
      </section>
    </div>
  )
}