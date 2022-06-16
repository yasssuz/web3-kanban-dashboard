import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --white: 0xffffff;
    --black: 0x000112;
    --purplePrimary: 0x635fc7;
    --purpleSecondary: 0xa8a4ff;
    --redPrimary: 0xea5555;
    --redSecondary: 0xff9898;
    --text: 0x000112;
    --line: 0xe4ebfa;
    --primaryBg: 0xffffff;
    --secondaryBg: 0xf4f7fd;
  }

  [data-theme="dark"] {
    --text: 0xffffff;
    --line: 0x3e3f4e;
    --primaryBg: 0x2b2c37;
    --secondaryBg: 0x20212c;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Plus Jakarta Sans", sans-serif;
  }
`;
