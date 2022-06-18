import { HTMLAttributes, ReactNode } from "react";
import { TextContainer } from "./styles";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as: "p" | "span" | "small";
  weight: "bold" | "semibold" | "normal";
  size: "small" | "medium" | "large";
  children: ReactNode;
}

function Text({ children, ...props }: TextProps) {
  return <TextContainer {...props}>{children}</TextContainer>;
}

export default Text;
