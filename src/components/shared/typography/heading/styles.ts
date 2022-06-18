import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HeadingProps } from ".";
import { MediaQuery } from "../../../../utils/globals";

export const HeadingContainer = styled.h1<HeadingProps>`
  font-size: ${props =>
    (props.size === "extraLarge" && "24px") ||
    (props.size === "large" && "18px") ||
    (props.size === "medium" && "15px") ||
    "12px"};
  line-height: ${props =>
    (props.size === "extraLarge" && "30px") ||
    (props.size === "large" && "23px") ||
    (props.size === "medium" && "19px") ||
    "15px"};
  color: ${props => (props.size === "small" ? "var(--gray)" : "var(--text)")};
  font-weight: bold;
  letter-spacing: ${props => (props.size === "small" ? "2.4px" : "")};

  ${props =>
    props.size === "extraLarge" &&
    css`
      ${MediaQuery.md} {
        font-size: 20px;
        line-height: 25px;
      }

      ${MediaQuery.sm} {
        font-size: 18px;
        line-height: 23px;
      }
    `};
`;
