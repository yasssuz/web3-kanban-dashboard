import styled from "@emotion/styled";
import { MediaQuery } from "../../utils/globals";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: 209px 1fr;
  height: 96px;

  ${MediaQuery.md} {
    grid-template-columns: 200px 1fr;
    height: 81px;
  }

  ${MediaQuery.sm} {
    grid-template-columns: 56px 1fr;
    height: 64px;
  }
`;

export const LogoArea = styled.div`
  border-right: 1px solid var(--line);
  height: 100%;
  display: grid;
  place-content: center;

  ${MediaQuery.sm} {
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
