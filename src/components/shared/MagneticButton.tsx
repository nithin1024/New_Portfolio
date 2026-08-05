"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MagneticButton({
  className,
  children,
  ...props
}: ButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.28);

  return (
    <Button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("transition-transform duration-200 will-change-transform", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
