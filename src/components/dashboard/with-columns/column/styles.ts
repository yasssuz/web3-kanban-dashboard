import styled from "@emotion/styled";
import { CreateColumn } from "../styles";

export const Container = styled.li`
  width: 280px;
  min-width: 280px;
`;

export const ColumnTopArea = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
`;

export const Circle = styled.span<{ color: string }>`
  width: 15px;
  min-width: 15px;
  height: 15px;
  min-height: 15px;
  background: ${(props) => props.color};
  border-radius: 50%;
`;

export const TasksList = styled.ul`
  list-style: none;
  display: grid;
  gap: 24px;
`;

export const CreateTask = styled(CreateColumn)`
  margin-top: 0;

  button {
    width: 100%;
    height: min-content;
  }
`;
