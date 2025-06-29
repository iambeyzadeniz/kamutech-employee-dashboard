import React from "react";
import { clsx } from "clsx";

const Button = ({
  variant = "primary",
  figmaType = "default",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-figma transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
    secondary:
      "bg-white text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const figmaTypes = {
    today: "figma-button-today",
    timecard: "figma-button-timecard",
    default: "figma-button-today",
  };

  const classes = clsx(
    baseClasses,
    variants[variant],
    figmaTypes[figmaType],
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
