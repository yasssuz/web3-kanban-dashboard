import { useState } from "react";
import { TaskInterface } from "../../../../utils/types";
import Heading from "../../../shared/typography/heading";
import Text from "../../../shared/typography/text";
import { TaskContainer } from "./styles";

interface TaskProps {
  columnGuid: string;
  task: TaskInterface;
}

function Task({ columnGuid, task }: TaskProps) {
  const [isTaskOpen, setIsTaskOpen] = useState<boolean>(false);

  return (
    <>
      <TaskContainer>
        <Heading as="h2" size="small">
          {task.title}
        </Heading>
        <Text as="span" size="small" weight="bold">
          0 of 6 subtasks
        </Text>
      </TaskContainer>
      {isTaskOpen && (
        <>
          <h1>hello</h1>
        </>
      )}
    </>
  );
}

export default Task;
