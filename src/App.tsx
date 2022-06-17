import { Global } from "@emotion/react";
import { globalStyles } from "./utils/globals";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Dashboard />
    </>
  );
}

export default App;
