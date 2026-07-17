import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  icon,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {icon && (
        <span className="btn-icon">
          {icon}
        </span>
      )}
    </button>
  );
}