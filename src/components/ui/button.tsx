import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[980px] text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#1A3A6B] text-white hover:opacity-88 px-[26px] py-[13px]",
        secondary: "bg-[#E8E8ED] text-[#1D1D1F] hover:bg-[#DDDDE3] px-[26px] py-[13px]",
        ghost: "bg-white/10 text-white/75 hover:bg-white/20 px-[26px] py-[13px]",
        white: "bg-white text-[#1D1D1F] hover:opacity-90 px-[26px] py-[13px]",
        navCta: "bg-[#09152E] text-white hover:opacity-88 px-[20px] py-[9px] text-[13px]",
        outline: "border border-white/20 text-white hover:bg-white/10 px-[26px] py-[13px]",
      },
      size: {
        default: "text-[14px] font-medium",
        sm: "text-[13px] font-medium",
        lg: "text-[15px] font-medium px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
