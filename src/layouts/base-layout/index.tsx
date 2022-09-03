import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { useAuth } from "../../hooks";
import { BoardInterface } from "../../utils/types";

function BaseLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [boardsList, setBoardsList] = useState<BoardInterface[]>([]);

  const { authMethod } = useAuth();
  const { boardGuid } = useParams();

  useEffect(() => {
    if (authMethod === "local") {
      localStorage.getItem("@Kanban:boards") &&
        setBoardsList(
          JSON.parse(
            localStorage.getItem("@Kanban:boards") as string
          ) as BoardInterface[]
        );
    }
  }, [authMethod]);

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        boards={boardsList}
        boardGuid={boardGuid}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        boards={boardsList}
        boardGuid={boardGuid}
      />
      <Outlet />
    </>
  );
}

export default BaseLayout;
