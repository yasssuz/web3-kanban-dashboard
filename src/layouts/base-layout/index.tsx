import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { boards } from "../../data";

function BaseLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const { dashboardPath } = useParams();

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        boards={boards}
        dashboardPath={dashboardPath}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        boards={boards}
        dashboardPath={dashboardPath}
      />
      <Outlet />
    </>
  );
}

export default BaseLayout;
