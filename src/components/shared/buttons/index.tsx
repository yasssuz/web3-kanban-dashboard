import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { ButtonContainer } from "./styles";

type ButtonSizeSelector =
  | { variant: "primary"; size: "large" | "medium" }
  | { variant: "secondary" | "tertiary"; size?: never };

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonSizeSelector & {
    variant: "primary" | "secondary" | "tertiary";
    children: ReactNode;
    width?: string;
  };

function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;
