"use client"

import { cn } from "@/lib/utils"
import { buttonExamples } from "@/lib/component-examples/button-examples"
import { cardExamples } from "@/lib/component-examples/card-examples"
import { inputExamples } from "@/lib/component-examples/input-examples"
import { badgeExamples } from "@/lib/component-examples/badge-examples"
import { selectExamples } from "@/lib/component-examples/select-examples"
import { checkboxExamples } from "@/lib/component-examples/checkbox-examples"
import { switchExamples } from "@/lib/component-examples/switch-examples"
import { textareaExamples } from "@/lib/component-examples/textarea-examples"
import { radioGroupExamples } from "@/lib/component-examples/radio-group-examples"
import { alertExamples } from "@/lib/component-examples/alert-examples"
import { alertDialogExamples } from "@/lib/component-examples/alert-dialog-examples"
import { aspectRatioExamples } from "@/lib/component-examples/aspect-ratio-examples"
import { avatarExamples } from "@/lib/component-examples/avatar-examples"
import { breadcrumbExamples } from "@/lib/component-examples/breadcrumb-examples"
import { calendarExamples } from "@/lib/component-examples/calendar-examples"
import { carouselExamples } from "@/lib/component-examples/carousel-examples"
import { chartExamples } from "@/lib/component-examples/chart-examples"
import { collapsibleExamples } from "@/lib/component-examples/collapsible-examples"
import { commandExamples } from "@/lib/component-examples/command-examples"
import { contextMenuExamples } from "@/lib/component-examples/context-menu-examples"
import { dialogExamples } from "@/lib/component-examples/dialog-examples"
import { drawerExamples } from "@/lib/component-examples/drawer-examples"
import { dropdownMenuExamples } from "@/lib/component-examples/dropdown-menu-examples"
import { formExamples } from "@/lib/component-examples/form-examples"
import { hoverCardExamples } from "@/lib/component-examples/hover-card-examples"
import { inputOTPExamples } from "@/lib/component-examples/input-otp-examples"
import { labelExamples } from "@/lib/component-examples/label-examples"
import { menubarExamples } from "@/lib/component-examples/menubar-examples"
import { navigationMenuExamples } from "@/lib/component-examples/navigation-menu-examples"
import { paginationExamples } from "@/lib/component-examples/pagination-examples"
import { popoverExamples } from "@/lib/component-examples/popover-examples"
import { progressExamples } from "@/lib/component-examples/progress-examples"
import { resizableExamples } from "@/lib/component-examples/resizable-examples"
import { scrollAreaExamples } from "@/lib/component-examples/scroll-area-examples"
import { separatorExamples } from "@/lib/component-examples/separator-examples"
import { sheetExamples } from "@/lib/component-examples/sheet-examples"
import { sidebarExamples } from "@/lib/component-examples/sidebar-examples"
import { skeletonExamples } from "@/lib/component-examples/skeleton-examples"
import { sliderExamples } from "@/lib/component-examples/slider-examples"
import { sonnerExamples } from "@/lib/component-examples/sonner-examples"
import { tableExamples } from "@/lib/component-examples/table-examples"
import { tabsExamples } from "@/lib/component-examples/tabs-examples"
import { toggleExamples } from "@/lib/component-examples/toggle-examples"
import { toggleGroupExamples } from "@/lib/component-examples/toggle-group-examples"
import { tooltipExamples } from "@/lib/component-examples/tooltip-examples"
import { accordionExamples } from "@/lib/component-examples/accordion-examples"

// Map examples to components
const componentExamples: Record<string, any> = {
  accordion: accordionExamples,
  button: buttonExamples,
  card: cardExamples,
  input: inputExamples,
  badge: badgeExamples,
  select: selectExamples,
  checkbox: checkboxExamples,
  switch: switchExamples,
  textarea: textareaExamples,
  "radio-group": radioGroupExamples,
  alert: alertExamples,
  "alert-dialog": alertDialogExamples,
  "aspect-ratio": aspectRatioExamples,
  avatar: avatarExamples,
  breadcrumb: breadcrumbExamples,
  calendar: calendarExamples,
  carousel: carouselExamples,
  chart: chartExamples,
  collapsible: collapsibleExamples,
  command: commandExamples,
  "context-menu": contextMenuExamples,
  dialog: dialogExamples,
  drawer: drawerExamples,
  "dropdown-menu": dropdownMenuExamples,
  form: formExamples,
  "hover-card": hoverCardExamples,
  "input-otp": inputOTPExamples,
  label: labelExamples,
  menubar: menubarExamples,
  "navigation-menu": navigationMenuExamples,
  pagination: paginationExamples,
  popover: popoverExamples,
  progress: progressExamples,
  resizable: resizableExamples,
  "scroll-area": scrollAreaExamples,
  separator: separatorExamples,
  sheet: sheetExamples,
  sidebar: sidebarExamples,
  skeleton: skeletonExamples,
  slider: sliderExamples,
  sonner: sonnerExamples,
  table: tableExamples,
  tabs: tabsExamples,
  toggle: toggleExamples,
  "toggle-group": toggleGroupExamples,
  tooltip: tooltipExamples,
}

export function ComponentExamples({ slug }: { slug: string }) {
  const examples = componentExamples[slug] || []

  return (
    <div className="space-y-12">
      {examples.map((example: any, index: number) => (
        <div key={index} className="space-y-6">
          {/* Example Header */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{example.title}</h3>
            {example.description && (
              <p className="text-sm text-muted-foreground">{example.description}</p>
            )}
          </div>
          
          {/* Preview Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Preview</h4>
            <div className="p-8 bg-card rounded-lg">
              <example.component />
            </div>
          </div>
          
          {/* Code Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Code</h4>
            <div className="overflow-hidden rounded-lg bg-muted/50">
              <pre className="p-6 overflow-x-auto" tabIndex={-1}>
                <code className="text-sm font-mono text-foreground">
                  {example.code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}