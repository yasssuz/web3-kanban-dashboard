import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { boards, columns } from "../../../data";
import Button from "../../shared/buttons";
import Input from "../../shared/input";
import Heading from "../../shared/typography/heading";
import {
  Container,
  DynamicColumns,
  ColumnsList,
  Column,
  DeleteColumnButton,
} from "./styles";

type EditOrCreateSelector =
  | { create: true; edit?: never }
  | { edit: true; create?: never };

type EditOrCreateBoardModalStateProps = {
  setIsModalOpen(state: boolean): void;
} & EditOrCreateSelector;

interface FormProps {
  boardName: string;
  dynamicColumns: { title: string }[];
}

function EditOrCreateBoardModalState({
  create,
  setIsModalOpen,
}: EditOrCreateBoardModalStateProps) {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "dynamicColumns",
  });
  const { dashboardPath } = useParams();

  const onSubmit: SubmitHandler<FormProps> = data => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setValue(
      "boardName",
      boards.find(board => board.path === dashboardPath)?.title || ""
    );
    columns && replace(columns);
  }, []);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Heading as='h2' size='medium'>
        {create ? "Create New Board" : "Edit Board"}
      </Heading>
      <Input
        id='boardName'
        placeholder='e.g. Web Design'
        label='Board Name'
        error={errors.boardName?.message}
        {...register("boardName", { required: "Can't be empty" })}
      />
      <DynamicColumns>
        <span>Columns</span>
        <ColumnsList>
          <AnimatePresence>
            {fields.map((field, index) => (
              <Column
                initial={{ height: 0, overflow: "hidden", marginTop: 0 }}
                animate={{ height: "41px", marginTop: 12 }}
                exit={{ height: 0, marginTop: 0 }}
                key={field.id}
              >
                <Input
                  id={`dynamicColumns.${index}.columnName`}
                  placeholder='e.g. Todo'
                  error={errors.dynamicColumns?.[index]?.title?.message}
                  {...register(`dynamicColumns.${index}.title`, {
                    required: "Can't be empty",
                  })}
                />
                <DeleteColumnButton onClick={() => remove(index)} type='button'>
                  <img src='/icons/icon-cross.svg' alt='delete' />
                </DeleteColumnButton>
              </Column>
            ))}
          </AnimatePresence>
        </ColumnsList>
        <Button
          variant='secondary'
          onClick={() => append({ title: "" })}
          type='button'
        >
          + Add New Column
        </Button>
      </DynamicColumns>
      <Button variant='primary' size='medium'>
        {create ? "Create New Board" : " Save Changes"}
      </Button>
    </Container>
  );
}

export default EditOrCreateBoardModalState;
