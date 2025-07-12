"use client"

import { Button } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { ArrowRight, Download, Heart, Mail, Plus, Settings, Trash2, Loader2, CheckCircle, AlertCircle, Info, Sparkles, Share2, Bookmark, MoreVertical, Search, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Link, List, ListOrdered } from "lucide-react"

export default function ButtonsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="space-y-12">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Buttons</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A collection of button components with various styles, sizes, and states.
          </p>
        </div>

        {/* Button Variants */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Variants</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Nine distinct button variants for different use cases and visual hierarchies, including semantic color options.
            </p>
          </div>

          {/* Default Variant */}
          <PreviewContainer
          title="Default"
          description="Primary action button with solid background"
          code={`<Button>Click me</Button>
<Button>
  <Mail className="h-4 w-4" />
  Send Email
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button>Click me</Button>
              <Button>
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
            </div>
          }
        />

          {/* Destructive Variant */}
          <PreviewContainer
          title="Destructive"
          description="Used for dangerous or irreversible actions"
          code={`<Button variant="destructive">Delete</Button>
<Button variant="destructive">
  <Trash2 className="h-4 w-4" />
  Remove Item
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="destructive">Delete</Button>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4" />
                Remove Item
              </Button>
            </div>
          }
        />

          {/* Outline Variant */}
          <PreviewContainer
          title="Outline"
          description="Secondary action with border styling"
          code={`<Button variant="outline">Outline</Button>
<Button variant="outline">
  <Download className="h-4 w-4" />
  Download
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="outline">Outline</Button>
              <Button variant="outline">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          }
        />

          {/* Secondary Variant */}
          <PreviewContainer
          title="Secondary"
          description="Alternative secondary action style"
          code={`<Button variant="secondary">Secondary</Button>
<Button variant="secondary">
  <Settings className="h-4 w-4" />
  Settings
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </div>
          }
        />

          {/* Ghost Variant */}
          <PreviewContainer
          title="Ghost"
          description="Minimal button style for less prominent actions"
          code={`<Button variant="ghost">Ghost</Button>
<Button variant="ghost">
  <Heart className="h-4 w-4" />
  Like
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="ghost">Ghost</Button>
              <Button variant="ghost">
                <Heart className="h-4 w-4" />
                Like
              </Button>
            </div>
          }
        />

          {/* Link Variant */}
          <PreviewContainer
          title="Link"
          description="Styled as a link for navigation actions"
          code={`<Button variant="link">Link Button</Button>
<Button variant="link">
  Learn more
  <ArrowRight className="h-4 w-4" />
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="link">Link Button</Button>
              <Button variant="link">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          }
        />

          {/* Success Variant */}
          <PreviewContainer
          title="Success"
          description="For positive actions and confirmations"
          code={`<Button variant="success">Success</Button>
<Button variant="success">
  <CheckCircle className="h-4 w-4" />
  Confirm
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="success">Success</Button>
              <Button variant="success">
                <CheckCircle className="h-4 w-4" />
                Confirm
              </Button>
            </div>
          }
        />

          {/* Warning Variant */}
          <PreviewContainer
          title="Warning"
          description="For actions that need user attention"
          code={`<Button variant="warning">Warning</Button>
<Button variant="warning">
  <AlertCircle className="h-4 w-4" />
  Proceed with Caution
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="warning">Warning</Button>
              <Button variant="warning">
                <AlertCircle className="h-4 w-4" />
                Proceed with Caution
              </Button>
            </div>
          }
        />

          {/* Info Variant */}
          <PreviewContainer
          title="Info"
          description="For informational actions"
          code={`<Button variant="info">Info</Button>
<Button variant="info">
  <Info className="h-4 w-4" />
  Learn More
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button variant="info">Info</Button>
              <Button variant="info">
                <Info className="h-4 w-4" />
                Learn More
              </Button>
            </div>
          }
          />
        </section>

        {/* Button Sizes */}
        <section className="space-y-8">
          <div>
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Four size options to fit different contexts and layouts.
          </p>
          </div>

          <PreviewContainer
          title="Size Variations"
          description="Available button sizes from small to extra large, including icon-only variants"
          code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon-sm">
  <Plus className="h-4 w-4" />
</Button>
<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>
<Button size="icon-lg">
  <Plus className="h-5 w-5" />
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
              <Button size="icon-sm">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon-lg">
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          }
        />

        {/* All Variants in Different Sizes */}
        <PreviewContainer
          title="Size Comparison Across Variants"
          description="How different variants look in various sizes"
          code={`{/* Small Size */}
<Button size="sm">Default</Button>
<Button size="sm" variant="secondary">Secondary</Button>
<Button size="sm" variant="outline">Outline</Button>

{/* Default Size */}
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

{/* Large Size */}
<Button size="lg">Default</Button>
<Button size="lg" variant="secondary">Secondary</Button>
<Button size="lg" variant="outline">Outline</Button>`}
          component={
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Default</Button>
                <Button size="sm" variant="secondary">Secondary</Button>
                <Button size="sm" variant="outline">Outline</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg">Default</Button>
                <Button size="lg" variant="secondary">Secondary</Button>
                <Button size="lg" variant="outline">Outline</Button>
              </div>
            </div>
          }
          />
        </section>

        {/* Button States */}
        <section className="space-y-8">
          <div>
          <h2 className="text-2xl font-semibold mb-4">States</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interactive states including disabled and loading states.
          </p>
        </div>

        {/* Disabled State */}
        <PreviewContainer
          title="Disabled State"
          description="Buttons in disabled state across all variants"
          code={`<Button disabled>Default</Button>
<Button variant="destructive" disabled>Destructive</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="link" disabled>Link</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button disabled>Default</Button>
              <Button variant="destructive" disabled>Destructive</Button>
              <Button variant="outline" disabled>Outline</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="ghost" disabled>Ghost</Button>
              <Button variant="link" disabled>Link</Button>
            </div>
          }
        />

        {/* Loading State */}
        <PreviewContainer
          title="Loading State"
          description="Buttons with loading spinner indicator"
          code={`<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin" />
  Loading...
</Button>
<Button variant="outline" disabled>
  <Loader2 className="h-4 w-4 animate-spin" />
  Please wait
</Button>
<Button variant="secondary" disabled>
  <Loader2 className="h-4 w-4 animate-spin" />
  Processing
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading...
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Please wait
              </Button>
              <Button variant="secondary" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing
              </Button>
            </div>
          }
          />
        </section>

        {/* Icon Buttons */}
        <section className="space-y-8">
          <div>
          <h2 className="text-2xl font-semibold mb-4">Icon Buttons</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Icon-only buttons for compact interfaces and toolbars with rotation micro-interactions.
          </p>
          </div>

          <PreviewContainer
          title="Icon Button Variants with Micro-interactions"
          description="Icon buttons rotate on hover and scale on click"
          code={`<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>
<Button size="icon" variant="outline">
  <Settings className="h-4 w-4" />
</Button>
<Button size="icon" variant="ghost">
  <Heart className="h-4 w-4" />
</Button>
<Button size="icon" variant="secondary">
  <Mail className="h-4 w-4" />
</Button>
<Button size="icon" variant="destructive">
  <Trash2 className="h-4 w-4" />
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button size="icon" aria-label="Add">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Settings">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Like">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="destructive" aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          }
        />

        <PreviewContainer
          title="Enhanced IconButton Component"
          description="Dedicated IconButton with built-in accessibility and hover effects"
          code={`<IconButton label="Share" variant="ghost">
  <Share2 className="h-4 w-4" />
</IconButton>
<IconButton label="Bookmark" variant="outline">
  <Bookmark className="h-4 w-4" />
</IconButton>
<IconButton label="More options">
  <MoreVertical className="h-4 w-4" />
</IconButton>
<IconButton label="Search" variant="secondary">
  <Search className="h-4 w-4" />
</IconButton>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <IconButton label="Share" variant="ghost">
                <Share2 className="h-4 w-4" />
              </IconButton>
              <IconButton label="Bookmark" variant="outline">
                <Bookmark className="h-4 w-4" />
              </IconButton>
              <IconButton label="More options">
                <MoreVertical className="h-4 w-4" />
              </IconButton>
              <IconButton label="Search" variant="secondary">
                <Search className="h-4 w-4" />
              </IconButton>
            </div>
          }
        />

        <PreviewContainer
          title="Icon Button Sizes"
          description="Different sizes for various use cases"
          code={`<IconButton size="sm" label="Small">
  <Heart className="h-3.5 w-3.5" />
</IconButton>
<IconButton label="Default">
  <Heart className="h-4 w-4" />
</IconButton>
<IconButton size="lg" label="Large">
  <Heart className="h-5 w-5" />
</IconButton>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <IconButton size="sm" label="Small">
                <Heart className="h-3.5 w-3.5" />
              </IconButton>
              <IconButton label="Default">
                <Heart className="h-4 w-4" />
              </IconButton>
              <IconButton size="lg" label="Large">
                <Heart className="h-5 w-5" />
              </IconButton>
            </div>
          }
          />
        </section>

        {/* Interaction States */}
        <section className="space-y-8">
          <div>
          <h2 className="text-2xl font-semibold mb-4">Interaction States</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Buttons include smooth transitions and micro-interactions for better user feedback.
          </p>
          </div>

          <PreviewContainer
          title="Hover & Active States"
          description="Buttons lift on hover and scale down on click for tactile feedback"
          code={`{/* These buttons have built-in hover and active states */}
<Button>Hover over me</Button>
<Button variant="secondary">Click and hold</Button>
<Button variant="success">
  <Sparkles className="h-4 w-4" />
  Interactive
</Button>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Button>Hover over me</Button>
              <Button variant="secondary">Click and hold</Button>
              <Button variant="success">
                <Sparkles className="h-4 w-4" />
                Interactive
              </Button>
            </div>
          }
          />
        </section>

        {/* Toggle Buttons */}
        <section className="space-y-8">
          <div>
          <h2 className="text-2xl font-semibold mb-4">Toggle Buttons</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interactive toggle buttons for switching between states with smooth transitions.
          </p>
          </div>

          <PreviewContainer
          title="Toggle Variants"
          description="Toggle buttons now use primary color when active, inheriting button styles"
          code={`<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>
<Toggle variant="outline" aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle variant="secondary" aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
</Toggle>
<Toggle variant="ghost" aria-label="Toggle link">
  <Link className="h-4 w-4" />
</Toggle>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="secondary" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Toggle variant="ghost" aria-label="Toggle link">
                <Link className="h-4 w-4" />
              </Toggle>
            </div>
          }
        />

        <PreviewContainer
          title="Toggle with Text"
          description="Toggle buttons with text labels"
          code={`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
  Bold
</Toggle>
<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
  Italic
</Toggle>
<Toggle variant="secondary" aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
  Underline
</Toggle>
<Toggle variant="ghost" aria-label="Toggle link">
  <Link className="h-4 w-4" />
  Link
</Toggle>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
                Bold
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
                Italic
              </Toggle>
              <Toggle variant="secondary" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
                Underline
              </Toggle>
              <Toggle variant="ghost" aria-label="Toggle link">
                <Link className="h-4 w-4" />
                Link
              </Toggle>
            </div>
          }
        />

        <PreviewContainer
          title="Toggle Sizes"
          description="Different sizes for various use cases"
          code={`<Toggle size="sm" aria-label="Small toggle">
  <Bold className="h-3.5 w-3.5" />
</Toggle>
<Toggle aria-label="Default toggle">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle size="lg" aria-label="Large toggle">
  <Bold className="h-5 w-5" />
</Toggle>
<Toggle size="icon" aria-label="Icon toggle">
  <Bold className="h-4 w-4" />
</Toggle>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Toggle size="sm" aria-label="Small toggle">
                <Bold className="h-3.5 w-3.5" />
              </Toggle>
              <Toggle aria-label="Default toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" aria-label="Large toggle">
                <Bold className="h-5 w-5" />
              </Toggle>
              <Toggle size="icon" aria-label="Icon toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
          }
        />

        <PreviewContainer
          title="Toggle States"
          description="Disabled and pressed states"
          code={`<Toggle defaultPressed aria-label="Pressed toggle">
  <Bold className="h-4 w-4" />
  Pressed
</Toggle>
<Toggle disabled aria-label="Disabled toggle">
  <Italic className="h-4 w-4" />
  Disabled
</Toggle>
<Toggle disabled defaultPressed aria-label="Disabled pressed">
  <Underline className="h-4 w-4" />
  Disabled & Pressed
</Toggle>`}
          component={
            <div className="flex flex-wrap items-center gap-4 p-6">
              <Toggle defaultPressed aria-label="Pressed toggle">
                <Bold className="h-4 w-4" />
                Pressed
              </Toggle>
              <Toggle disabled aria-label="Disabled toggle">
                <Italic className="h-4 w-4" />
                Disabled
              </Toggle>
              <Toggle disabled defaultPressed aria-label="Disabled pressed">
                <Underline className="h-4 w-4" />
                Disabled & Pressed
              </Toggle>
            </div>
          }
          />
        </section>

        {/* Toggle Groups */}
        <section className="space-y-8">
          <div>
          <h2 className="text-2xl font-semibold mb-4">Toggle Groups</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Group related toggles together for exclusive or multiple selections.
          </p>
          </div>

          <PreviewContainer
          title="Text Formatting Toolbar"
          description="Single selection toggle group for text formatting"
          code={`<ToggleGroup type="single" defaultValue="bold">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          component={
            <div className="p-6">
              <ToggleGroup type="single" defaultValue="bold">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          }
        />

        <PreviewContainer
          title="Text Alignment"
          description="Exclusive selection for text alignment"
          code={`<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          component={
            <div className="p-6">
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          }
        />

        <PreviewContainer
          title="Multiple Selection"
          description="Allow multiple items to be selected"
          code={`<ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          component={
            <div className="p-6">
              <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          }
        />

        <PreviewContainer
          title="Toggle Group Variants"
          description="Different visual styles for toggle groups"
          code={`{/* Default variant */}
<ToggleGroup type="single" variant="default">
  <ToggleGroupItem value="list" aria-label="Bullet list">
    <List className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="ordered" aria-label="Numbered list">
    <ListOrdered className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>

{/* Outline variant */}
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="list" aria-label="Bullet list">
    <List className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="ordered" aria-label="Numbered list">
    <ListOrdered className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          component={
            <div className="space-y-4 p-6">
              <ToggleGroup type="single" variant="default">
                <ToggleGroupItem value="list" aria-label="Bullet list">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="ordered" aria-label="Numbered list">
                  <ListOrdered className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" variant="outline">
                <ToggleGroupItem value="list" aria-label="Bullet list">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="ordered" aria-label="Numbered list">
                  <ListOrdered className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          }
        />

        <PreviewContainer
          title="Toggle Group Sizes"
          description="Different sizes for various contexts"
          code={`<ToggleGroup type="single" size="sm">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="h-3.5 w-3.5" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="h-3.5 w-3.5" />
  </ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" size="default">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" size="lg">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="h-5 w-5" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="h-5 w-5" />
  </ToggleGroupItem>
</ToggleGroup>`}
          component={
            <div className="space-y-4 p-6">
              <ToggleGroup type="single" size="sm">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-3.5 w-3.5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-3.5 w-3.5" />
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" size="default">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" size="lg">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          }
          />
        </section>

        {/* Button Groups */}
        <section className="space-y-8">
          <div>
          <h2 className="text-2xl font-semibold mb-4">Button Compositions</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Common button group patterns and compositions.
          </p>
          </div>

          <PreviewContainer
          title="Button Group"
          description="Grouped buttons for related actions"
          code={`<div className="flex items-center gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Save Changes</Button>
</div>

<div className="flex items-center gap-2">
  <Button variant="ghost">Back</Button>
  <Button variant="outline">Skip</Button>
  <Button>Continue</Button>
</div>`}
          component={
            <div className="space-y-4 p-6">
              <div className="flex items-center gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost">Back</Button>
                <Button variant="outline">Skip</Button>
                <Button>Continue</Button>
              </div>
            </div>
          }
        />

        <PreviewContainer
          title="Full Width Buttons"
          description="Buttons that span the full width of their container"
          code={`<div className="w-full max-w-sm space-y-2">
  <Button className="w-full">Sign In</Button>
  <Button variant="outline" className="w-full">
    Create Account
  </Button>
</div>`}
          component={
            <div className="p-6">
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">Sign In</Button>
                <Button variant="outline" className="w-full">
                  Create Account
                </Button>
              </div>
            </div>
          }
          />
        </section>
      </div>
    </div>
  )
}