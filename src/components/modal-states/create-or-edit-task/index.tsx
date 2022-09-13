import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Heading from "../../shared/typography/heading";
import { Container } from "./styles";

interface CreateTaskProps {
  columnGuid: string;
  create?: true;
}

interface FormProps {
  title: string;
  description: string;
  dynamicSubtasks: { title: string }[];
}

function CreateOrEditTask({ columnGuid, create }: CreateTaskProps) {
  const { control, register, handleSubmit } = useForm<FormProps>();
  const { append, remove, replace } = useFieldArray({
    control,
    name: "dynamicSubtasks",
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => {};

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" size="medium">
        {create ? "Create New Board" : "Edit Board"}
      </Heading>
    </Container>
  );
}

export default CreateOrEditTask;
