import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, disabled, type = "button", ...props }, ref) => {
        return (
            <button
                className={cn(
                    `
                    w-auto
                    border-transparent 
                    px-7 
                    py-3 
                    disabled:cursor-not-allowed 
                    disabled:opacity-50 
                    font-semibold 
                    hover:opacity-75 
                    transition`,
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";