import { Global } from "@emotion/react";
import { globalStyles } from "./utils/globals";
import Dashboard from "./components/dashboard";
import { Link, Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/base-layout";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BaseLayout>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/:dashboardName' element={<Dashboard />} />
          <Route path='*' element={<h1>nothing here</h1>} />
        </Routes>
      </BaseLayout>
    </>
  );
}

export default App;
