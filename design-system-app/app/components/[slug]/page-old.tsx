"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar } from "@/components/ui/calendar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ChevronRight, ChevronDown, AlertCircle, Info, Bold, Italic } from "lucide-react"
import { useState } from "react"

// Component examples for each component
const componentExamples: Record<string, () => JSX.Element> = {
  "button": () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button disabled>Disabled</Button>
        <Button>
          <AlertCircle className="mr-2 h-4 w-4" />
          With Icon
        </Button>
      </div>
    </div>
  ),

  "card": () => (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content. You can put any content here.</p>
        </CardContent>
      </Card>
    </div>
  ),

  "input": () => (
    <div className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div>
        <Label htmlFor="disabled">Disabled</Label>
        <Input id="disabled" placeholder="Disabled input" disabled />
      </div>
    </div>
  ),

  "badge": () => (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),

  "alert": () => (
    <div className="space-y-4 max-w-lg">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert with an icon and description.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          This is a destructive alert variant.
        </AlertDescription>
      </Alert>
    </div>
  ),

  "checkbox": () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled checkbox</Label>
      </div>
    </div>
  ),

  "radio-group": () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),

  "select": () => (
    <div className="w-64">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),

  "textarea": () => (
    <div className="w-full max-w-md">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),

  "switch": () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  ),

  "slider": () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <Label>Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
      </div>
      <div>
        <Label>Range</Label>
        <Slider defaultValue={[25, 75]} max={100} step={1} className="mt-2" />
      </div>
    </div>
  ),

  "progress": () => (
    <div className="w-full max-w-md space-y-4">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  ),

  "tabs": () => (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Account settings content</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Password settings content</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your settings here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>General settings content</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),

  "avatar": () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  ),

  "toggle": () => (
    <div className="flex gap-4">
      <Toggle>
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle>
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  ),

  "toggle-group": () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),

  "separator": () => (
    <div className="w-full max-w-md">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),

  "scroll-area": () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm py-2">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),

  "skeleton": () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-32 w-full max-w-md" />
    </div>
  ),

  "accordion": () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),

  "alert-dialog": () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),

  "dialog": () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),

  "dropdown-menu": () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),

  "hover-card": () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
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
  ),

  "popover": () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
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
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),

  "tooltip": () => (
    <TooltipProvider>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Info className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>More information</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),

  "calendar": () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  },

  "navigation-menu": () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs">Introduction</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs/installation">Installation</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs/primitives/typography">Typography</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs/primitives/alert-dialog">Alert Dialog</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs/primitives/hover-card">Hover Card</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs/primitives/progress">Progress</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs/primitives/scroll-area">Scroll Area</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),

  "breadcrumb": () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),

  "context-menu": () => (
    <div className="flex items-center justify-center w-64 h-32 border-2 border-dashed rounded-lg">
      <ContextMenu>
        <ContextMenuTrigger>Right click me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuItem>Save Page As...</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),

  "menubar": () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
          <MenubarItem>Always Show Full URLs</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),

  "sheet": () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),

  "drawer": () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerTrigger>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),

  "pagination": () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),

  "command": () => (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),

  "collapsible": () => {
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
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
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
  },

  "carousel": () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),

  "table": () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),

  "aspect-ratio": () => (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),

  "sonner": () => (
    <div className="flex gap-4">
      <Button
        onClick={() => {
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }}
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.success("Event has been created")
        }}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.error("Event has not been created")
        }}
      >
        Error
      </Button>
    </div>
  ),

  "label": () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div>
        <Label htmlFor="terms" className="flex items-center gap-2">
          <Checkbox id="terms" />
          Accept terms and conditions
        </Label>
      </div>
    </div>
  ),

  // Placeholder for components that need more complex setup
  "form": () => (
    <div className="text-center p-8 border-2 border-dashed rounded-lg">
      <p className="text-muted-foreground">
        Form component requires React Hook Form setup.
        <br />
        See the documentation for implementation details.
      </p>
    </div>
  ),

  "chart": () => (
    <div className="text-center p-8 border-2 border-dashed rounded-lg">
      <p className="text-muted-foreground">
        Chart component requires Recharts setup.
        <br />
        See the documentation for implementation details.
      </p>
    </div>
  ),

  "sidebar": () => (
    <div className="text-center p-8 border-2 border-dashed rounded-lg">
      <p className="text-muted-foreground">
        Sidebar component requires layout integration.
        <br />
        See the documentation for implementation details.
      </p>
    </div>
  ),

  "resizable": () => (
    <div className="text-center p-8 border-2 border-dashed rounded-lg">
      <p className="text-muted-foreground">
        Resizable component requires react-resizable-panels.
        <br />
        See the documentation for implementation details.
      </p>
    </div>
  ),

  "input-otp": () => (
    <div className="text-center p-8 border-2 border-dashed rounded-lg">
      <p className="text-muted-foreground">
        Input OTP component requires additional setup.
        <br />
        See the documentation for implementation details.
      </p>
    </div>
  ),
}

// Component information
const componentInfo: Record<string, { name: string; description: string }> = {
  "button": { name: "Button", description: "Displays a button or a component that looks like a button." },
  "card": { name: "Card", description: "Displays a card with header, content, and footer." },
  "input": { name: "Input", description: "Displays a form input field or a component that looks like an input field." },
  "badge": { name: "Badge", description: "Displays a badge or a component that looks like a badge." },
  "alert": { name: "Alert", description: "Displays a callout for user attention." },
  "checkbox": { name: "Checkbox", description: "A control that allows the user to toggle between checked and not checked." },
  "radio-group": { name: "Radio Group", description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time." },
  "select": { name: "Select", description: "Displays a list of options for the user to pick from—triggered by a button." },
  "textarea": { name: "Textarea", description: "Displays a form textarea or a component that looks like a textarea." },
  "switch": { name: "Switch", description: "A control that allows the user to toggle between checked and not checked." },
  "slider": { name: "Slider", description: "An input where the user selects a value from within a given range." },
  "progress": { name: "Progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." },
  "tabs": { name: "Tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time." },
  "avatar": { name: "Avatar", description: "An image element with a fallback for representing the user." },
  "toggle": { name: "Toggle", description: "A two-state button that can be either on or off." },
  "toggle-group": { name: "Toggle Group", description: "A set of two-state buttons that can be toggled on or off." },
  "separator": { name: "Separator", description: "Visually or semantically separates content." },
  "scroll-area": { name: "Scroll Area", description: "Augments native scroll functionality for custom, cross-browser styling." },
  "skeleton": { name: "Skeleton", description: "Use to show a placeholder while content is loading." },
  "accordion": { name: "Accordion", description: "A vertically stacked set of interactive headings that each reveal an associated section of content." },
  "alert-dialog": { name: "Alert Dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  "dialog": { name: "Dialog", description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." },
  "dropdown-menu": { name: "Dropdown Menu", description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button." },
  "hover-card": { name: "Hover Card", description: "For sighted users to preview content available behind a link." },
  "popover": { name: "Popover", description: "Displays rich content in a portal, triggered by a button." },
  "tooltip": { name: "Tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
  "calendar": { name: "Calendar", description: "A date field component that allows users to enter and edit date." },
  "navigation-menu": { name: "Navigation Menu", description: "A collection of links for navigating websites." },
  "breadcrumb": { name: "Breadcrumb", description: "Displays the path to the current resource using a hierarchy of links." },
  "context-menu": { name: "Context Menu", description: "Displays a menu located at the pointer, triggered by a right-click or a long-press." },
  "menubar": { name: "Menubar", description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands." },
  "sheet": { name: "Sheet", description: "Extends the Dialog component to display content that complements the main content of the screen." },
  "drawer": { name: "Drawer", description: "A draggable dialog that is attached to any side of the viewport." },
  "pagination": { name: "Pagination", description: "Pagination with page navigation, next and previous links." },
  "command": { name: "Command", description: "Fast, composable, unstyled command menu for React." },
  "collapsible": { name: "Collapsible", description: "An interactive component which expands/collapses a panel." },
  "carousel": { name: "Carousel", description: "A carousel with motion and swipe built using Embla." },
  "table": { name: "Table", description: "A responsive table component." },
  "aspect-ratio": { name: "Aspect Ratio", description: "Displays content within a desired ratio." },
  "sonner": { name: "Sonner", description: "An opinionated toast component for React." },
  "label": { name: "Label", description: "Renders an accessible label associated with controls." },
  "form": { name: "Form", description: "Building forms with React Hook Form and Zod." },
  "chart": { name: "Chart", description: "Beautiful charts built using Recharts." },
  "sidebar": { name: "Sidebar", description: "A composable, themeable and customizable sidebar component." },
  "resizable": { name: "Resizable", description: "Accessible resizable panel groups and layouts with keyboard support." },
  "input-otp": { name: "Input OTP", description: "Accessible one-time password component with copy paste functionality." },
}

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const info = componentInfo[params.slug]
  const Example = componentExamples[params.slug]

  if (!info || !Example) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{info.name}</h1>
        <p className="mt-2 text-lg text-gray-600">{info.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="border rounded-lg p-8 bg-white">
          <Example />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="text-sm bg-gray-50 p-4 rounded-md overflow-x-auto">
              <code>{`import { ${info.name} } from "@/components/ui/${params.slug}"`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}