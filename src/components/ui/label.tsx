import * as React from "react";
import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-normal text-gray leading-tight mb-2 block",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label };


