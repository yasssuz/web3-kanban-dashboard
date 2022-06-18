import { ReactNode, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

function BaseLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
    </>
  );
}

export default BaseLayout;
