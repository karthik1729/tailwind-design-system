import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:transition-[transform,box-shadow] active:duration-100",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md hover:-translate-y-px active:bg-primary-active active:shadow-sm active:translate-y-0 focus-visible:ring-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive-hover hover:shadow-md hover:-translate-y-px active:bg-destructive-active active:shadow-sm active:translate-y-0 focus-visible:ring-destructive",
        outline:
          "border border-input bg-background hover:border-primary hover:text-primary focus-visible:ring-ring",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active focus-visible:ring-ring",
        ghost:
          "hover:text-primary focus-visible:ring-ring",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover focus-visible:ring-ring",
        success:
          "bg-success text-success-foreground shadow-sm hover:bg-success-hover hover:shadow-md hover:-translate-y-px active:bg-success-active active:shadow-sm active:translate-y-0 focus-visible:ring-success",
        warning:
          "bg-warning text-warning-foreground shadow-sm hover:bg-warning-hover hover:shadow-md hover:-translate-y-px active:bg-warning-active active:shadow-sm active:translate-y-0 focus-visible:ring-warning",
        info:
          "bg-info text-info-foreground shadow-sm hover:bg-info-hover hover:shadow-md hover:-translate-y-px active:bg-info-active active:shadow-sm active:translate-y-0 focus-visible:ring-info",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-11 rounded-md px-8 text-base gap-3 has-[>svg]:px-5",
        xl: "h-12 rounded-md px-10 text-lg gap-3 has-[>svg]:px-6",
        icon: "size-9 hover:[&_svg]:rotate-12 active:[&_svg]:rotate-0 active:[&_svg]:scale-90",
        "icon-sm": "size-8 hover:[&_svg]:rotate-12 active:[&_svg]:rotate-0 active:[&_svg]:scale-90",
        "icon-lg": "size-11 hover:[&_svg]:rotate-12 active:[&_svg]:rotate-0 active:[&_svg]:scale-90",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
