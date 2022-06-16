import { ThemeProvider } from "@emotion/react";

const theme = {
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  );
}

export default App;
