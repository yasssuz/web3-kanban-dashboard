import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

interface BaseLayout {
  children: ReactNode;
}

function BaseLayout({ children }: BaseLayout) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("dashboard") && (
        <>
          <Header isSidebarOpen={isSidebarOpen} />
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </>
      )}
      {children}
    </>
  );
}

export default BaseLayout;
