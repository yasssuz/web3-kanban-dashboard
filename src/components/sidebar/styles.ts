import styled from "@emotion/styled";

export const OpenSidebarButton = styled.button<{ isSidebarOpen: boolean }>`
  background: var(--purplePrimary);
  border-radius: 0px 100px 100px 0px;
  width: 56px;
  height: 48px;
  display: grid;
  place-content: center;
  border: 0;
  position: fixed;
  left: ${props => (props.isSidebarOpen ? "-56px" : "0px")};
  bottom: 32px;
  transition: left 0.3s cubic-bezier(0.53, 0.21, 0, 1);
  transition-delay: ${props => (props.isSidebarOpen ? "0s" : "0.4s")};
  cursor: pointer;
  overflow: hidden;

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &::before {
    content: "";
    position: absolute;
    height: 48px;
    width: 100%;
    background: var(--purpleSecondary);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  }
`;

export const SidebarContainer = styled.aside<{ isSidebarOpen: boolean }>`
  position: fixed;
  width: 300px;
  height: 100%;
  left: ${props => (props.isSidebarOpen ? "0px" : "-300px")};
  background: var(--secondaryBg);
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0 47px;
  transition: left 0.5s cubic-bezier(0.53, 0.21, 0, 1);
  transition-delay: ${props => (props.isSidebarOpen ? "0.25s" : "0s")};
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
    overflow: hidden;

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

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  a::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background: rgba(99, 95, 199, 0.1);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
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
