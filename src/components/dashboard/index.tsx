import NoColumns from "./no-columns";
import { DashboardContainer } from "./styles";

interface DashboardProps {
  index?: boolean;
}

function Dashboard({ index }: DashboardProps) {
  const columns = [];

  return (
    <DashboardContainer isCentralized={!columns.length || !!index}>
      {(index && <h1>index</h1>) || (!columns.length && <NoColumns />) || (
        <h1>has colums</h1>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
