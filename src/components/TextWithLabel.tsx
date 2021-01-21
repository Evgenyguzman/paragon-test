import React from "react";

interface TextWithLabelProps {
  label: string;
  text: string;
}

export const TextWithLabel = ({ label, text }: TextWithLabelProps) => {
  return (
    <p>
      <strong>{`${label}: `}</strong>
      {text}
    </p>
  );
};
