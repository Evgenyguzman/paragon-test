import React from "react";

interface ButtonProps {
  value: number;
  children: React.ReactChild;
  onClick: () => void;
}

export const Button = React.memo(
  ({ value, children, onClick }: ButtonProps) => {
    return (
      <button type="button" value={value} onClick={onClick}>
        {children}
      </button>
    );
  }
);
