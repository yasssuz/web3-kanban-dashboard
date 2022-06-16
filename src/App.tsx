import { Global, ThemeProvider } from "@emotion/react";
import { theme, globalStyles } from "./utils/globals";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  );
}

export default App;
