import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-2 aria-invalid:ring-destructive aria-invalid:border-destructive transition-all duration-200 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground focus-visible:ring-ring [[href]&]:hover:bg-primary/90 [[href]&]:active:bg-primary/80 [button&]:hover:bg-primary/90 [button&]:active:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground focus-visible:ring-ring [[href]&]:hover:bg-muted [[href]&]:active:bg-muted/80 [button&]:hover:bg-muted [button&]:active:bg-muted/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground focus-visible:ring-destructive [[href]&]:hover:bg-destructive/90 [[href]&]:active:bg-destructive/80 [button&]:hover:bg-destructive/90 [button&]:active:bg-destructive/80",
        outline:
          "border-border bg-background text-foreground focus-visible:ring-ring [[href]&]:hover:bg-muted [[href]&]:active:bg-secondary [button&]:hover:bg-muted [button&]:active:bg-secondary",
        success:
          "border-transparent bg-success text-success-foreground focus-visible:ring-success [[href]&]:hover:bg-success/90 [[href]&]:active:bg-success/80 [button&]:hover:bg-success/90 [button&]:active:bg-success/80",
        warning:
          "border-transparent bg-warning text-warning-foreground focus-visible:ring-warning [[href]&]:hover:bg-warning/90 [[href]&]:active:bg-warning/80 [button&]:hover:bg-warning/90 [button&]:active:bg-warning/80",
        info:
          "border-transparent bg-info text-info-foreground focus-visible:ring-info [[href]&]:hover:bg-info/90 [[href]&]:active:bg-info/80 [button&]:hover:bg-info/90 [button&]:active:bg-info/80",
        "success-subtle":
          "border-success-border bg-success-background text-success-text focus-visible:ring-success [[href]&]:hover:bg-success-border/20 [[href]&]:active:bg-success-border/30 [button&]:hover:bg-success-border/20 [button&]:active:bg-success-border/30",
        "warning-subtle":
          "border-warning-border bg-warning-background text-warning-text focus-visible:ring-warning [[href]&]:hover:bg-warning-border/20 [[href]&]:active:bg-warning-border/30 [button&]:hover:bg-warning-border/20 [button&]:active:bg-warning-border/30",
        "info-subtle":
          "border-info-border bg-info-background text-info-text focus-visible:ring-info [[href]&]:hover:bg-info-border/20 [[href]&]:active:bg-info-border/30 [button&]:hover:bg-info-border/20 [button&]:active:bg-info-border/30",
        "destructive-subtle":
          "border-destructive-border bg-destructive-background text-destructive-text focus-visible:ring-destructive [[href]&]:hover:bg-destructive-border/20 [[href]&]:active:bg-destructive-border/30 [button&]:hover:bg-destructive-border/20 [button&]:active:bg-destructive-border/30",
      },
      interactive: {
        true: "cursor-pointer select-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  }
)

function Badge({
  className,
  variant,
  interactive,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, interactive }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
