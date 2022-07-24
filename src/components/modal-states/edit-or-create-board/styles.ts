import styled from "@emotion/styled";
import { m } from "framer-motion";

export const Container = styled.form`
  gap: 20px;
  display: grid;
`;

export const DynamicColumns = styled.div`
  span {
    font-weight: bold;
    font-size: 0.75rem;
    color: var(--gray);
    line-height: 0.93rem;
  }

  & > button {
    margin-top: 12px;
  }
`;

export const ColumnsList = styled.ul`
  list-style: none;
  display: grid;
`;

export const Column = styled(m.li)`
  display: flex;
  align-items: center;
  height: 41px;

  div {
    width: 100%;
  }
`;

export const DeleteColumnButton = styled.button`
  line-height: 0;
  background: none;
  margin-left: 16px;
  cursor: pointer;
  padding: 0;
  border: none;
`;
