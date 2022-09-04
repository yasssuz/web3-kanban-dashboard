import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoColumns from "../../components/dashboard/no-columns";
import WithColumns from "../../components/dashboard/with-columns";
import { useAuth } from "../../hooks";
import { BoardColumn } from "../../utils/types";
import { DashboardContainer } from "./styles";

interface DashboardProps {
  index?: boolean;
}

function Dashboard({ index }: DashboardProps) {
  const [boardColumnsList, setBoardColumnsList] = useState<
    BoardColumn["columns"]
  >([]);

  const { boardGuid } = useParams(),
    { authMethod } = useAuth();

  useEffect(() => {
    if (authMethod === "local") {
      setBoardColumnsList(
        JSON.parse(localStorage.getItem("@Kanban:columns") as string)?.find(
          (column: BoardColumn) => column.boardGuid === boardGuid
        )?.columns
      );
    }
  }, [authMethod, boardGuid]);

  return (
    <DashboardContainer isCentralized={!boardColumnsList?.length || !!index}>
      {(index && <h1>index</h1>) ||
        (!boardColumnsList?.length && <NoColumns />) || (
          <WithColumns
            boardColumnsList={boardColumnsList}
            setBoardColumnsList={setBoardColumnsList}
            boardGuid={boardGuid as string}
          />
        )}
    </DashboardContainer>
  );
}

export default Dashboard;
