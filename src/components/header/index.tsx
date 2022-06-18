import Button from "../shared/buttons";
import Heading from "../shared/typography/heading";
import {
  HeaderContainer,
  InteractionArea,
  LogoArea,
  LogoDesktop,
  LogoMobile,
  SettingsButton,
} from "./styles";

interface HeaderProps {
  isSidebarOpen: boolean;
  boards: { title: string; path: string }[];
  dashboardPath: string | undefined;
}

function Header({ isSidebarOpen, boards, dashboardPath }: HeaderProps) {
  return (
    <HeaderContainer>
      <LogoArea>
        <LogoDesktop src='/logos/logo-dark.svg' alt='kanban' />
        <LogoMobile src='/logos/logo-mobile.svg' alt='kanban' />
      </LogoArea>
      <InteractionArea>
        <Heading as='h1' size='extraLarge'>
          {boards.find(board => board.path === dashboardPath)?.title}
        </Heading>
        <Button
          variant='primary'
          size='large'
          width='164px'
          type='button'
          disabled
        >
          + Add New Task
        </Button>
        <Button
          variant='primary'
          size='large'
          width='48px'
          type='button'
          disabled
        >
          <img src='/icons/icon-add-task-mobile.svg' alt='add' />
        </Button>
        <SettingsButton>
          <img src='/icons/icon-vertical-ellipsis.svg' alt='settings' />
        </SettingsButton>
      </InteractionArea>
    </HeaderContainer>
  );
}

export default Header;
