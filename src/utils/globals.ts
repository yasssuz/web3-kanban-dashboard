import { css } from "@emotion/react";

export const MediaQuery = {
  sm: "@media (max-width: 768px)",
  md: "@media (max-width: 1024px)",
};

export const globalStyles = css`
  :root {
    --white: #ffffff;
    --black: #000112;
    --gray: #828fa3;
    --purplePrimary: #635fc7;
    --purpleSecondary: #a8a4ff;
    --redPrimary: #ea5555;
    --redSecondary: #ff9898;
    --text: #000112;
    --line: #e4ebfa;
    --primaryBg: #f4f7fd;
    --secondaryBg: #ffffff;
    --logo: #000112;
  }

  [data-theme="dark"] {
    --text: #ffffff;
    --line: #3e3f4e;
    --primaryBg: #20212c;
    --secondaryBg: #2b2c37;
    --logo: #ffffff;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.25s cubic-bezier(0.53, 0.21, 0, 1);
  }

  body {
    font-family: "Plus Jakarta Sans", sans-serif;
    background: var(--primaryBg);
  }
`;
