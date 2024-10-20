import React from "react";

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input ref={ref} className={`border rounded p-2 ${className}`} {...props} />
  );
});

Input.displayName = "Input";
