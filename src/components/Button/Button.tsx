import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};
