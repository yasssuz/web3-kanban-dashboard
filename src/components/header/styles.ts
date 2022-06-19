import styled from "@emotion/styled";
import { MediaQuery } from "../../utils/globals";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: min-content 1fr;
  height: 96px;
  background: var(--secondaryBg);
  transition: height 0.3s ease;

  ${MediaQuery.md} {
    height: 81px;
  }

  ${MediaQuery.sm} {
    height: 64px;
  }
`;

export const LogoArea = styled.div<{ isSidebarOpen: boolean }>`
  border-right: 1px solid var(--line);
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 32px;
  width: ${props => (props.isSidebarOpen ? "300px" : "209px")};
  transition: width ${props => (props.isSidebarOpen ? "0.3s" : "0.5s")}
      cubic-bezier(0.53, 0.21, 0, 1),
    padding-left 0.3s ease;
  transition-delay: ${props => (props.isSidebarOpen ? "0.27s" : "0s")};

  ${MediaQuery.md} {
    width: 200px;
    padding-left: 24px;
    width: 261px;
  }

  ${MediaQuery.sm} {
    width: 56px;
    padding-left: 16px;
    border-right: 0;
  }
`;

export const LogoDesktop = styled.img`
  ${MediaQuery.sm} {
    display: none;
  }
`;

export const LogoMobile = styled.img`
  display: none;

  ${MediaQuery.sm} {
    display: block;
  }
`;

export const InteractionArea = styled.div`
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  h1 {
    margin-right: auto;
  }

  button:nth-of-type(2) {
    display: none;
  }

  ${MediaQuery.md} {
    padding: 0 24px;
  }

  ${MediaQuery.sm} {
    padding: 0 16px 0 0;

    button:first-of-type {
      display: none;
    }

    button:nth-of-type(2) {
      display: grid;
      height: 32px;
    }
  }
`;

export const SettingsButton = styled.button`
  margin-left: 24px;
  line-height: 0;
  border: 0;
  background: none;
  cursor: pointer;

  ${MediaQuery.sm} {
    margin-left: 16px;
  }
`;
