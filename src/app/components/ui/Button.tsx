import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  dark: boolean;
}

function Button({ label, dark }: ButtonProps) {
  return <button>{label}</button>;
}

export default Button;
