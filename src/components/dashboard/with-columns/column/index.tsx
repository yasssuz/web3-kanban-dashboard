import { useState } from "react";
import { ColumnInterface, ColumnTask } from "../../../../utils/types";
import Modal from "../../../shared/modal";
import Text from "../../../shared/typography/text";
import Task from "../task";
import {
  Circle,
  ColumnTopArea,
  Container,
  CreateTask,
  TasksList,
} from "./styles";
import CreateOrEditTask from "../../../modal-states/create-or-edit-task";
import Heading from "../../../shared/typography/heading";

interface ColumnProps {
  column: ColumnInterface;
}

function Column({ column }: ColumnProps) {
  const [showCreateTaskModal, setShowCreateTaskModal] =
    useState<boolean>(false);

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
        <ColumnTopArea>
          <Circle color={"#49C4E5"} />
          <Text
            as="span"
            size="small"
            weight="bold"
            style={{ letterSpacing: "2.4px" }}
          >
            {column.title} ({getTasksByColumn(column.guid)?.length || 0})
          </Text>
        </ColumnTopArea>
        <TasksList>
          {getTasksByColumn(column.guid)?.map((task) => (
            <Task columnGuid={column.guid} task={task} key={task.guid} />
          ))}
          <CreateTask>
            <button type="button" onClick={() => setShowCreateTaskModal(true)}>
              <Heading as="h2" size="large" style={{ color: "var(--gray)" }}>
                + New Task
              </Heading>
            </button>
          </CreateTask>
        </TasksList>
      </Container>
      <Modal isOpen={showCreateTaskModal}>
        <CreateOrEditTask columnGuid={column.guid} />
      </Modal>
    </>
  );
}

export default Column;
