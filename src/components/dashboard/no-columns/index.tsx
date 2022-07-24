import { useState } from "react";
import EditOrCreateBoardModalState from "../../modal-states/edit-or-create-board";
import Button from "../../shared/buttons";
import Modal from "../../shared/modal";
import Heading from "../../shared/typography/heading";
import { Container } from "./styles";

function NoColumns() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Container>
        <Heading as='h2' size='medium'>
          This board is empty. Create a new column to get started.
        </Heading>
        <Button
          variant='primary'
          size='large'
          width='174px'
          onClick={() => setIsModalOpen(true)}
        >
          + Add New Column
        </Button>
      </Container>
      <Modal isOpen={isModalOpen}>
        <EditOrCreateBoardModalState edit setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}

export default NoColumns;
