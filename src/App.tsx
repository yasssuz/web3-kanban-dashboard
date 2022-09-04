import { Global } from "@emotion/react";
import { globalStyles } from "./utils/cssGlobals";
import Dashboard from "./pages/dashboard";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/base-layout";
import { useEffect } from "react";
import { AuthProvider } from "./contexts/oauth";
import Login from "./pages/login";

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
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<BaseLayout />}>
            <Route index element={<Dashboard index />} />
            <Route path="/dashboard/:boardGuid" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
