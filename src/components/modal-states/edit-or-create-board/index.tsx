import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createGuid } from "../../../utils/generators";
import { BoardColumn, BoardInterface } from "../../../utils/types";
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
  dynamicColumns: BoardColumn["columns"];
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
  const { boardGuid } = useParams();

  const onSubmit: SubmitHandler<FormProps> = ({
    boardName,
    dynamicColumns,
  }) => {
    const storedBoards: BoardInterface[] = JSON.parse(
      localStorage.getItem("@Kanban:boards") as string
    );
    const storedColumns: BoardColumn[] = JSON.parse(
      localStorage.getItem("@Kanban:columns") as string
    );

    create
      ? createBoard(boardName, dynamicColumns, storedBoards, storedColumns)
      : editBoard(boardName, dynamicColumns, storedBoards, storedColumns);
    setIsModalOpen(false);
  };

  function createBoard(
    boardName: string,
    dynamicColumns: BoardColumn["columns"],
    storedBoards: BoardInterface[],
    storedColumns: BoardColumn[]
  ) {
    const newBoard = { title: boardName, guid: createGuid() };

    localStorage.setItem(
      "@Kanban:boards",
      JSON.stringify([
        ...(storedBoards ? storedBoards : []),
        newBoard,
      ] as BoardInterface[])
    );
    localStorage.setItem(
      "@Kanban:columns",
      JSON.stringify([
        ...(storedColumns ? storedColumns : []),
        { boardGuid: newBoard.guid, columns: dynamicColumns },
      ] as BoardColumn[])
    );
  }

  function editBoard(
    boardName: string,
    dynamicColumns: BoardColumn["columns"],
    storedBoards: BoardInterface[],
    storedColumns: BoardColumn[]
  ) {
    const currentBoard: BoardInterface = JSON.parse(
      localStorage.getItem("@Kanban:boards") as string
    )?.find((board: BoardInterface) => board.guid === boardGuid);
    const updatedColumns = [
      ...storedColumns?.map((column: BoardColumn) => {
        if (column.boardGuid === currentBoard.guid)
          return { ...column, columns: dynamicColumns };
        return column;
      }),
    ];
    const updatedBoards = [
      ...storedBoards?.map((board: BoardInterface) => {
        if (board.guid === currentBoard.guid)
          return { ...board, title: boardName };
        return board;
      }),
    ];

    localStorage.setItem("@Kanban:columns", JSON.stringify(updatedColumns));
    localStorage.setItem("@Kanban:boards", JSON.stringify(updatedBoards));
  }

  useEffect(() => {
    if (create) return;
    const title = JSON.parse(
      localStorage.getItem("@Kanban:boards") as string
    )?.find((boardObj: BoardInterface) => boardObj.guid === boardGuid)?.title;
    const columns: BoardColumn["columns"] = JSON.parse(
      localStorage.getItem("@Kanban:columns") as string
    )?.find(
      (columnObj: BoardColumn) => columnObj.boardGuid === boardGuid
    )?.columns;

    setValue("boardName", title || "");
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
          onClick={() => append({ title: "", guid: createGuid() })}
          type='button'
        >
          + Add New Column
        </Button>
      </DynamicColumns>
      <Button variant='primary' size='medium'>
        {create ? "Create New Board" : "Save Changes"}
      </Button>
    </Container>
  );
}

export default EditOrCreateBoardModalState;
