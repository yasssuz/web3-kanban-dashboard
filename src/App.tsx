import { Global } from "@emotion/react";
import { globalStyles } from "./utils/globals";
import Dashboard from "./components/dashboard";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/base-layout";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem("data-theme");

    document.body.setAttribute(
      "data-theme",
      (currentTheme === "dark" && "dark") ||
        (currentTheme === "light" && "light") ||
        "light"
    );
    if (currentTheme === "dark")
      (document.getElementById("themeSwitcher") as HTMLInputElement).checked =
        true;
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path='/dashboard' element={<BaseLayout />}>
          <Route index element={<Dashboard index />} />
          <Route path='/dashboard/:dashboardPath' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<h1>nothing here</h1>} />
      </Routes>
    </>
  );
}

export default App;
