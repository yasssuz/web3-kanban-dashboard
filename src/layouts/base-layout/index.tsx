import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

function BaseLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const { dashboardPath } = useParams();
  const fakeBoards = [
    {
      title: "Platform Launch",
      path: "platform-launch",
    },
    {
      title: "Marketing Plan",
      path: "marketing-plan",
    },
    {
      title: "Roadmap",
      path: "roadmap",
    },
  ];

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        boards={fakeBoards}
        dashboardPath={dashboardPath}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        boards={fakeBoards}
        dashboardPath={dashboardPath}
      />
      <Outlet />
    </>
  );
}

export default BaseLayout;
