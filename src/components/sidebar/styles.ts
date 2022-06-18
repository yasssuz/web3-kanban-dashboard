import styled from "@emotion/styled";

export const OpenSidebarButton = styled.button`
  background: var(--purplePrimary);
  border-radius: 0px 100px 100px 0px;
  width: 56px;
  height: 48px;
  display: grid;
  place-content: center;
  border: 0;
  position: fixed;
  left: 0;
  bottom: 32px;
  transition: background-color 0.3s ease-out;
  cursor: pointer;

  &:hover {
    background: var(--purpleSecondary);
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 300px;
  left: 0;
  height: 100%;
  background: var(--secondaryBg);
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0 47px;
`;

export const TopArea = styled.div`
  & > strong {
    padding-left: 32px;
    margin-bottom: 19px;
    display: inline-block;
  }
`;

export const BoardsList = styled.ul`
  list-style: none;
  padding-right: 24px;
`;

export const Board = styled.li`
  a {
    position: relative;
    text-decoration: none;
    border-radius: 0px 100px 100px 0px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 32px;
    transition: background-color 0.3s ease-out;

    &:hover {
      background: rgba(99, 95, 199, 0.1);
    }

    span {
      transition: color 0.3s ease;
    }
  }

  a::before {
    content: "";
    background: var(--purplePrimary);
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0px 100px 100px 0px;
    left: -100%;
    z-index: -1;
    transition: left 0.3s ease;
  }

  &.selected a {
    &::before {
      left: 0;
    }

    svg path {
      fill: var(--white);
    }

    span {
      color: var(--white) !important;
    }
  }
`;
