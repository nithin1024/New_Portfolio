import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[-0.01em] transition-colors duration-300",
  {
    variants: {
      variant: {
        default:
          "border-primary/20 bg-primary/[0.08] text-primary hover:border-primary/35",
        secondary:
          "border-white/[0.08] bg-white/[0.035] text-secondary hover:border-white/15 hover:text-white/90",
        accent:
          "border-accent/20 bg-accent/[0.08] text-accent hover:border-accent/35",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
