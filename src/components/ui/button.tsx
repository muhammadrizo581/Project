import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function SimpleButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base styles
  let buttonClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ";

  // Size variants
  if (size === "sm") {
    buttonClasses += "px-3 py-1.5 text-sm ";
  } else if (size === "lg") {
    buttonClasses += "px-6 py-3 text-lg ";
  } else {
    buttonClasses += "px-4 py-2 text-base ";
  }

  // Color variants
  if (variant === "primary") {
    buttonClasses +=
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 ";
  } else if (variant === "secondary") {
    buttonClasses +=
      "bg-amber-100 text-amber-800 hover:bg-amber-200 focus:ring-amber-500 ";
  } else if (variant === "outline") {
    buttonClasses +=
      "border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-orange-50 focus:ring-orange-500 ";
  }

  // Add custom className
  buttonClasses += className;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
