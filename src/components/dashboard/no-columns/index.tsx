import Button from "../../shared/buttons";
import Heading from "../../shared/typography/heading";
import Text from "../../shared/typography/text";
import { Container } from "./styles";

function NoColumns() {
  return (
    <Container>
      <Heading as='h2' size='medium'>
        This board is empty. Create a new column to get started.
      </Heading>
      <Button variant='primary' size='large' width='174px'>
        + Add New Column
      </Button>
    </Container>
  );
}

export default NoColumns;
