import { useState } from "react";
import { BoardColumn, ColumnTask } from "../../../utils/types";
import EditOrCreateBoardModalState from "../../modal-states/edit-or-create-board";
import Modal from "../../shared/modal";
import Heading from "../../shared/typography/heading";
import Text from "../../shared/typography/text";
import {
  Container,
  Column,
  TasksList,
  Task,
  CreateTask,
  CreateColumn,
  ColumnTopArea,
  Circle,
} from "./styles";

interface WithColumnsProps {
  boardColumns: BoardColumn["columns"];
}

function WithColumns({ boardColumns }: WithColumnsProps) {
  const [showEditBoardModal, setShowEditBoardModal] = useState<boolean>(false);

  const columnsTasks: ColumnTask[] = JSON.parse(
    localStorage.getItem("@Kanban:tasks") as string
  );

  function getTasksByColumn(columnGuid: string): ColumnTask["tasks"] {
    return columnsTasks?.find(
      (task: ColumnTask) => task.columnGuid === columnGuid
    )?.tasks as ColumnTask["tasks"];
  }

  return (
    <>
      <Container>
        {boardColumns?.map(column => (
          <Column key={column.guid}>
            <ColumnTopArea>
              <Circle color={"#49C4E5"} />
              <Text
                as='span'
                size='small'
                weight='bold'
                style={{ letterSpacing: "2.4px" }}
              >
                {column.title} ({getTasksByColumn(column.guid)?.length || 0})
              </Text>
            </ColumnTopArea>
            <TasksList>
              {getTasksByColumn(column.guid)?.map(task => (
                <Task key={task.guid}></Task>
              ))}
              <CreateTask>
                <button>
                  <Heading
                    as='h2'
                    size='large'
                    style={{ color: "var(--gray)" }}
                  >
                    + New Task
                  </Heading>
                </button>
              </CreateTask>
            </TasksList>
          </Column>
        ))}
        <CreateColumn>
          <button onClick={() => setShowEditBoardModal(true)}>
            <Heading as='h2' size='large' style={{ color: "var(--gray)" }}>
              + New Column
            </Heading>
          </button>
        </CreateColumn>
      </Container>
      <Modal isOpen={showEditBoardModal}>
        <EditOrCreateBoardModalState
          edit
          setIsModalOpen={setShowEditBoardModal}
        />
      </Modal>
    </>
  );
}

export default WithColumns;
