import { HTMLAttributes, ReactNode } from "react";
import { HeadingContainer } from "./styles";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong";
  size: "extraLarge" | "large" | "medium" | "small";
  children: ReactNode;
}

function Heading({ children, ...props }: HeadingProps) {
  return <HeadingContainer {...props}>{children}</HeadingContainer>;
}

export default Heading;
