import styled from "@emotion/styled";

export const Container = styled.ul`
  margin-top: 121px;
  padding: 0 24px;
  list-style: none;
  display: flex;
  gap: 24px;
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
