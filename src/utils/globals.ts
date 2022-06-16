import { css } from "@emotion/react";

export const theme = {
  colors: {
    white: 0xffffff,
    black: 0x000112,
    purple: {
      primary: 0x635fc7,
      secondary: 0xa8a4ff,
    },
    red: {
      primary: 0xea5555,
      secondary: 0xff9898,
    },
    dark: {
      primary: 0x20212c,
      secondary: 0x2b2c37,
      tertiary: 0x3e3f4e,
    },
    light: {
      primary: 0x828fa3,
      secondary: 0xe4ebfa,
      tertiary: 0xf4f7fd,
    },
  },
};

export const globalStyles = css`
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
