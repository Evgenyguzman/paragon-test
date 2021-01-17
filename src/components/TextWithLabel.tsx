import React from "react";

interface TextWithLabelProps {
  label: string;
  text: string;
}

export const TextWithLabel = React.memo(
  ({ label, text }: TextWithLabelProps) => {
    return (
      <p>
        <strong>{`${label}: `}</strong>
        {text}
      </p>
    );
  }
);
