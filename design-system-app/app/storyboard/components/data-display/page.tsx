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
import { AspectRatioExample } from "./aspect-ratio-example"
import { CarouselExample } from "./carousel-example"
import { ScrollAreaExample } from "./scroll-area-example"
import { MoreHorizontal, Check, X, Clock, Settings, Info, Calendar } from "lucide-react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

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

      {/* Aspect Ratio Component */}
      <AspectRatioExample />

      {/* Carousel Component */}
      <CarouselExample />

      {/* Scroll Area Component */}
      <ScrollAreaExample />

      {/* Hover Card Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hover Card</h2>
          <p className="text-muted-foreground mb-6">
            Contextual information displayed on hover, perfect for user profiles and quick previews.
          </p>
        </div>

        {/* Basic Hover Card */}
        <PreviewContainer
          title="Basic Hover Card"
          description="Simple hover card with user information"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@vercel</h4>
        <p className="text-sm">
          The React Framework for Production
        </p>
        <div className="flex items-center pt-2">
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
          component={
            <div className="gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@vercel</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@vercel</h4>
                      <p className="text-sm">
                        The React Framework for Production
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          }
        />

        {/* Profile Hover Card */}
        <PreviewContainer
          title="Profile Hover Card"
          description="Detailed user profile information with stats"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="ghost" className="flex items-center gap-2">
      <Avatar className="h-6 w-6">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      John Doe
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-semibold">John Doe</h4>
          <p className="text-sm text-muted-foreground">@johndoe</p>
        </div>
      </div>
      <p className="text-sm">
        Senior Software Engineer at TechCorp. Building amazing user experiences
        with React and TypeScript.
      </p>
      <div className="flex space-x-6">
        <div className="text-center">
          <div className="text-sm font-semibold">1.2K</div>
          <div className="text-xs text-muted-foreground">Following</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold">5.4K</div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold">432</div>
          <div className="text-xs text-muted-foreground">Posts</div>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
          component={
            <div className="gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    John Doe
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">John Doe</h4>
                        <p className="text-sm text-muted-foreground">@johndoe</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Senior Software Engineer at TechCorp. Building amazing user experiences
                      with React and TypeScript.
                    </p>
                    <div className="flex space-x-6">
                      <div className="text-center">
                        <div className="text-sm font-semibold">1.2K</div>
                        <div className="text-xs text-muted-foreground">Following</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold">5.4K</div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold">432</div>
                        <div className="text-xs text-muted-foreground">Posts</div>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          }
        />

        {/* Product Hover Card */}
        <PreviewContainer
          title="Product Preview Card"
          description="Product information displayed on hover"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Card className="w-48 cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="aspect-square bg-muted rounded-md mb-2"></div>
        <h4 className="font-semibold text-sm">Wireless Headphones</h4>
        <p className="text-sm text-muted-foreground">$199.99</p>
      </CardContent>
    </Card>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-4">
      <div className="aspect-video bg-muted rounded-md"></div>
      <div>
        <h4 className="font-semibold">Premium Wireless Headphones</h4>
        <p className="text-sm text-muted-foreground mt-1">
          High-quality audio with noise cancellation and 30-hour battery life.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">$199.99</span>
        <div className="flex items-center gap-2">
          <Badge>4.8★</Badge>
          <span className="text-sm text-muted-foreground">(124 reviews)</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-600" />
          <span className="text-sm">In stock</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-600" />
          <span className="text-sm">Free shipping</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
          component={
            <div className="gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="w-48 cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-md mb-2"></div>
                      <h4 className="font-semibold text-sm">Wireless Headphones</h4>
                      <p className="text-sm text-muted-foreground">$199.99</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-md"></div>
                    <div>
                      <h4 className="font-semibold">Premium Wireless Headphones</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        High-quality audio with noise cancellation and 30-hour battery life.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">$199.99</span>
                      <div className="flex items-center gap-2">
                        <Badge>4.8★</Badge>
                        <span className="text-sm text-muted-foreground">(124 reviews)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">In stock</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Free shipping</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          }
        />

        {/* Help Hover Card */}
        <PreviewContainer
          title="Help Information Card"
          description="Contextual help and documentation on hover"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="ghost" size="icon" className="h-5 w-5">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-3">
      <h4 className="font-semibold">Password Requirements</h4>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-600" />
          At least 8 characters long
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-600" />
          Contains uppercase letter
        </li>
        <li className="flex items-center gap-2">
          <X className="h-3 w-3 text-red-600" />
          Contains lowercase letter
        </li>
        <li className="flex items-center gap-2">
          <X className="h-3 w-3 text-red-600" />
          Contains number or symbol
        </li>
      </ul>
      <p className="text-xs text-muted-foreground">
        Strong passwords help protect your account from unauthorized access.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
          component={
            <div className="gap-4 flex items-center">
              <span className="text-sm">Password</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Password Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-green-600" />
                        At least 8 characters long
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-green-600" />
                        Contains uppercase letter
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="h-3 w-3 text-red-600" />
                        Contains lowercase letter
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="h-3 w-3 text-red-600" />
                        Contains number or symbol
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground">
                      Strong passwords help protect your account from unauthorized access.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          }
        />
      </section>

      {/* Popover Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Popover</h2>
          <p className="text-muted-foreground mb-6">
            Floating panels for displaying interactive content when triggered by user actions.
          </p>
        </div>

        {/* Basic Popover */}
        <PreviewContainer
          title="Basic Popover"
          description="Simple popover with settings content"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Settings className="h-4 w-4 mr-2" />
      Settings
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="popover-width">Width</Label>
          <Input
            id="popover-width"
            defaultValue="100%"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="popover-maxWidth">Max. width</Label>
          <Input
            id="popover-maxWidth"
            defaultValue="300px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="popover-height">Height</Label>
          <Input
            id="popover-height"
            defaultValue="25px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="popover-maxHeight">Max. height</Label>
          <Input
            id="popover-maxHeight"
            defaultValue="none"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
          component={
            <div className="gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="popover-width">Width</Label>
                        <Input
                          id="popover-width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="popover-maxWidth">Max. width</Label>
                        <Input
                          id="popover-maxWidth"
                          defaultValue="300px"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="popover-height">Height</Label>
                        <Input
                          id="popover-height"
                          defaultValue="25px"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="popover-maxHeight">Max. height</Label>
                        <Input
                          id="popover-maxHeight"
                          defaultValue="none"
                          className="col-span-2 h-8"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          }
        />

        {/* Popover with Forms */}
        <PreviewContainer
          title="Form Popover"
          description="Popover containing form controls"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Configure</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Preferences</h4>
        <p className="text-sm text-muted-foreground">
          Configure your preferences for the application.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center space-x-2">
          <Switch id="popover-notifications" />
          <Label htmlFor="popover-notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="popover-marketing" />
          <Label htmlFor="popover-marketing">Marketing emails</Label>
        </div>
        <div className="space-y-2">
          <Label>Volume</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
          component={
            <div className="gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Configure</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Preferences</h4>
                      <p className="text-sm text-muted-foreground">
                        Configure your preferences for the application.
                      </p>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="popover-notifications" />
                        <Label htmlFor="popover-notifications">Enable notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="popover-marketing" />
                        <Label htmlFor="popover-marketing">Marketing emails</Label>
                      </div>
                      <div className="space-y-2">
                        <Label>Volume</Label>
                        <Slider defaultValue={[50]} max={100} step={1} />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          }
        />

        {/* Custom Positioned Popover */}
        <PreviewContainer
          title="Custom Positioned Popover"
          description="Popover with different alignment and side options"
          code={`<div className="flex gap-4">
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Left</Button>
    </PopoverTrigger>
    <PopoverContent side="left">
      <div className="text-sm">
        This popover appears on the left side
      </div>
    </PopoverContent>
  </Popover>

  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Top</Button>
    </PopoverTrigger>
    <PopoverContent side="top">
      <div className="text-sm">
        This popover appears on the top
      </div>
    </PopoverContent>
  </Popover>

  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Right</Button>
    </PopoverTrigger>
    <PopoverContent side="right">
      <div className="text-sm">
        This popover appears on the right side
      </div>
    </PopoverContent>
  </Popover>

  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom">
      <div className="text-sm">
        This popover appears on the bottom
      </div>
    </PopoverContent>
  </Popover>
</div>`}
          component={
            <div className="flex gap-4 justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">
                  <div className="text-sm">
                    This popover appears on the left side
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top">
                  <div className="text-sm">
                    This popover appears on the top
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">
                  <div className="text-sm">
                    This popover appears on the right side
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <div className="text-sm">
                    This popover appears on the bottom
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          }
        />

        {/* Info Card Popover */}
        <PreviewContainer
          title="Info Card Popover"
          description="Popover displaying detailed information"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="icon">
      <Info className="h-4 w-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Info className="h-4 w-4 text-blue-500" />
        <h4 className="font-semibold">About this feature</h4>
      </div>
      <p className="text-sm text-muted-foreground">
        This feature allows you to customize your workspace layout and preferences. 
        Changes are saved automatically and synced across all your devices.
      </p>
      <div className="pt-3 border-t">
        <Button size="sm" className="w-full">Learn more</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
          component={
            <div className="gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Info className="h-4 w-4 text-blue-500" />
                      <h4 className="font-semibold">About this feature</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This feature allows you to customize your workspace layout and preferences. 
                      Changes are saved automatically and synced across all your devices.
                    </p>
                    <div className="pt-3 border-t">
                      <Button size="sm" className="w-full">Learn more</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          }
        />
      </section>

      {/* Tooltip Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
          <p className="text-muted-foreground mb-6">
            Small contextual overlays that display brief helper text on hover or focus.
          </p>
        </div>

        {/* Basic Tooltip */}
        <PreviewContainer
          title="Basic Tooltip"
          description="Simple tooltip with text content"
          code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a helpful tooltip</p>
  </TooltipContent>
</Tooltip>`}
          component={
            <div className="gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a helpful tooltip</p>
                </TooltipContent>
              </Tooltip>
            </div>
          }
        />

        {/* Tooltips with Different Positions */}
        <PreviewContainer
          title="Tooltip Positions"
          description="Tooltips appearing on different sides"
          code={`<div className="flex gap-4">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Tooltip on top</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Right</Button>
    </TooltipTrigger>
    <TooltipContent side="right">
      <p>Tooltip on right</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <p>Tooltip on bottom</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Left</Button>
    </TooltipTrigger>
    <TooltipContent side="left">
      <p>Tooltip on left</p>
    </TooltipContent>
  </Tooltip>
</div>`}
          component={
            <div className="flex gap-4 justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip on top</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip on right</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Tooltip on bottom</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip on left</p>
                </TooltipContent>
              </Tooltip>
            </div>
          }
        />

        {/* Icon Tooltips */}
        <PreviewContainer
          title="Icon Tooltips"
          description="Tooltips on icon buttons for accessibility"
          code={`<div className="flex gap-4">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Settings</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <Calendar className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Calendar</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <Info className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>More information</p>
    </TooltipContent>
  </Tooltip>
</div>`}
          component={
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Calendar</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More information</p>
                </TooltipContent>
              </Tooltip>
            </div>
          }
        />

        {/* Keyboard Shortcut Tooltip */}
        <PreviewContainer
          title="Keyboard Shortcut Tooltip"
          description="Tooltip showing keyboard shortcuts"
          code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">
      Save
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p className="flex items-center gap-2">
      Save document
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
        <span className="text-xs">⌘</span>S
      </kbd>
    </p>
  </TooltipContent>
</Tooltip>`}
          component={
            <div className="gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    Save
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="flex items-center gap-2">
                    Save document
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                      <span className="text-xs">⌘</span>S
                    </kbd>
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          }
        />
      </section>

      {/* Label Component */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Label</h2>
          <p className="text-muted-foreground mb-6">
            Accessible form labels with support for required fields, error states, and descriptions.
          </p>
        </div>

        {/* Basic Label */}
        <PreviewContainer
          title="Basic Label"
          description="Simple label for form inputs"
          code={`<div className="space-y-2">
  <Label htmlFor="label-email">Email</Label>
  <Input type="email" id="label-email" placeholder="Enter your email" />
</div>`}
          component={
            <div className="max-w-sm">
              <div className="space-y-2">
                <Label htmlFor="label-email">Email</Label>
                <Input type="email" id="label-email" placeholder="Enter your email" />
              </div>
            </div>
          }
        />

        {/* Required Field Label */}
        <PreviewContainer
          title="Required Field"
          description="Label with required field indicator"
          code={`<div className="space-y-2">
  <Label htmlFor="label-name" data-required="true">Name</Label>
  <Input type="text" id="label-name" placeholder="Enter your name" />
</div>`}
          component={
            <div className="max-w-sm">
              <div className="space-y-2">
                <Label htmlFor="label-name" data-required="true">Name</Label>
                <Input type="text" id="label-name" placeholder="Enter your name" />
              </div>
            </div>
          }
        />

        {/* Label with Description */}
        <PreviewContainer
          title="Label with Description"
          description="Label accompanied by helper text"
          code={`<div className="space-y-2">
  <Label htmlFor="label-bio">Bio</Label>
  <p className="text-sm text-muted-foreground">
    Write a short bio to tell people about yourself.
  </p>
  <Textarea id="label-bio" placeholder="Tell us about yourself..." />
</div>`}
          component={
            <div className="max-w-sm">
              <div className="space-y-2">
                <Label htmlFor="label-bio">Bio</Label>
                <p className="text-sm text-muted-foreground">
                  Write a short bio to tell people about yourself.
                </p>
                <Textarea id="label-bio" placeholder="Tell us about yourself..." />
              </div>
            </div>
          }
        />

        {/* Label with Error State */}
        <PreviewContainer
          title="Error State"
          description="Label showing error state"
          code={`<div className="space-y-2">
  <Label htmlFor="label-password" data-invalid="true">Password</Label>
  <Input type="password" id="label-password" className="border-destructive" />
  <p className="text-sm text-destructive">
    Password must be at least 8 characters long
  </p>
</div>`}
          component={
            <div className="max-w-sm">
              <div className="space-y-2">
                <Label htmlFor="label-password" data-invalid="true">Password</Label>
                <Input type="password" id="label-password" className="border-destructive" />
                <p className="text-sm text-destructive">
                  Password must be at least 8 characters long
                </p>
              </div>
            </div>
          }
        />

        {/* Labels with Different Form Controls */}
        <PreviewContainer
          title="Various Form Controls"
          description="Labels used with different form elements"
          code={`<div className="space-y-6">
  <div className="flex items-center space-x-2">
    <Switch id="label-airplane-mode" />
    <Label htmlFor="label-airplane-mode">Airplane Mode</Label>
  </div>

  <div className="flex items-center space-x-2">
    <Checkbox id="label-terms" />
    <Label htmlFor="label-terms">
      I agree to the terms and conditions
    </Label>
  </div>

  <div className="space-y-2">
    <Label>Notification Volume</Label>
    <Slider defaultValue={[33]} max={100} step={1} />
  </div>
</div>`}
          component={
            <div className="max-w-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Switch id="label-airplane-mode" />
                  <Label htmlFor="label-airplane-mode">Airplane Mode</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="label-terms" />
                  <Label htmlFor="label-terms">
                    I agree to the terms and conditions
                  </Label>
                </div>

                <div className="space-y-2">
                  <Label>Notification Volume</Label>
                  <Slider defaultValue={[33]} max={100} step={1} />
                </div>
              </div>
            </div>
          }
        />
      </section>
    </div>
  )
}