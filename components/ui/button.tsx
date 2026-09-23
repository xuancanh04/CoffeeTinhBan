import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white shadow-soft hover:bg-accent-hover focus-visible:outline-accent",
        primary:
          "bg-primary text-white shadow-soft hover:bg-primary/90 focus-visible:outline-primary",
        outline:
          "border border-primary/12 bg-surface-card/80 text-primary shadow-card hover:border-accent/35 hover:bg-cream/60 focus-visible:outline-accent",
        ghost:
          "text-secondary hover:bg-cream/70 hover:text-primary focus-visible:outline-accent",
        soft:
          "border border-white/35 bg-white/12 text-white backdrop-blur-sm hover:bg-white/22 focus-visible:outline-white",
        zalo:
          "bg-[#0068FF] text-white shadow-soft hover:opacity-95 focus-visible:outline-[#0068FF]",
      },
      size: {
        default: "min-h-[48px] px-7 py-3",
        sm: "min-h-[40px] px-4 py-2 text-sm",
        lg: "min-h-[52px] min-w-[160px] px-8 py-3.5",
        icon: "h-12 w-12",
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
