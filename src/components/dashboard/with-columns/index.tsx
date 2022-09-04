import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks";
import { BoardColumn, ColumnTask } from "../../../utils/types";
import EditOrCreateBoardModalState from "../../modal-states/edit-or-create-board";
import Modal from "../../shared/modal";
import Heading from "../../shared/typography/heading";
import Column from "./column";
import { Container, CreateColumn } from "./styles";

interface WithColumnsProps {
  boardColumnsList: BoardColumn["columns"];
  setBoardColumnsList(state: BoardColumn["columns"]): void;
  boardGuid: string;
}

function WithColumns({
  boardGuid,
  boardColumnsList,
  setBoardColumnsList,
}: WithColumnsProps) {
  const [showEditBoardModal, setShowEditBoardModal] = useState<boolean>(false);

  const { authMethod } = useAuth();

  useEffect(() => {
    if (authMethod === "local") {
      setBoardColumnsList(
        JSON.parse(localStorage.getItem("@Kanban:columns") as string)?.find(
          (column: BoardColumn) => column.boardGuid === boardGuid
        )?.columns
      );
    }
  }, [showEditBoardModal]);

  return (
    <>
      <Container>
        {boardColumnsList?.map((column) => (
          <Column column={column} key={column.guid} />
        ))}
        <CreateColumn>
          <button type="button" onClick={() => setShowEditBoardModal(true)}>
            <Heading as="h2" size="large" style={{ color: "var(--gray)" }}>
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
