import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.02em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:pointer-events-none disabled:opacity-45 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-white text-[#050505] hover:bg-[#f0f0f0] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_1px_0_rgba(255,255,255,0.12)_inset,0_10px_32px_-12px_rgba(56,189,248,0.35)]",
        secondary:
          "bg-white/[0.03] text-white border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.06]",
        outline:
          "border border-primary/30 text-primary hover:bg-primary/[0.08] hover:border-primary/50",
        ghost: "text-secondary hover:text-white hover:bg-white/[0.05]",
        accent:
          "bg-accent text-white hover:bg-accent/90 shadow-[0_10px_32px_-12px_rgba(249,115,22,0.4)]",
      },
      size: {
        default: "h-11 min-h-11 px-5",
        sm: "h-9 min-h-9 px-4 text-[13px]",
        lg: "h-12 min-h-12 px-7 text-[15px]",
        icon: "h-10 w-10 min-h-10 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
