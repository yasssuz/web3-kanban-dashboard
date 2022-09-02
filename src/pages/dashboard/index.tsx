import { useParams } from "react-router-dom";
import NoColumns from "../../components/dashboard/no-columns";
import WithColumns from "../../components/dashboard/with-columns";
import { BoardColumn } from "../../utils/types";
import { DashboardContainer } from "./styles";

interface DashboardProps {
  index?: boolean;
}

function Dashboard({ index }: DashboardProps) {
  const { boardGuid } = useParams();
  const boardColumns: BoardColumn["columns"] = JSON.parse(
    localStorage.getItem("@Kanban:columns") as string
  )?.find((column: BoardColumn) => column.boardGuid === boardGuid)?.columns;

  return (
    <DashboardContainer isCentralized={!boardColumns?.length || !!index}>
      {(index && <h1>index</h1>) ||
        (!boardColumns?.length && <NoColumns />) || (
          <WithColumns boardColumns={boardColumns} />
        )}
    </DashboardContainer>
  );
}

export default Dashboard;
