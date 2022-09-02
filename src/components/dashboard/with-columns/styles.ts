import styled from "@emotion/styled";

export const Container = styled.ul`
  margin-top: 121px;
  padding: 0 24px;
  list-style: none;
  display: flex;
  gap: 24px;
  overflow-x: auto;
`;

export const Column = styled.li`
  width: 280px;
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
  background: ${props => props.color};
  border-radius: 50%;
`;

export const CreateColumn = styled.li`
  margin-top: 39px;

  button {
    background: var(--linearGradientBg);
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    width: 280px;
    padding: 32px 16px;
    height: 100%;
  }
`;

export const TasksList = styled.ul`
  list-style: none;
  display: grid;
  gap: 24px;
`;

export const Task = styled.li``;

export const CreateTask = styled(CreateColumn)`
  margin-top: 0;
  button {
    width: 100%;
    height: min-content;
  }
`;
