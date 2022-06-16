import { Global } from "@emotion/react";
import { globalStyles } from "./utils/globals";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
    </>
  );
}

export default App;
