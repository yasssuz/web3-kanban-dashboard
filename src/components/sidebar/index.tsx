import { Link, useParams } from "react-router-dom";
import Heading from "../shared/typography/heading";
import Text from "../shared/typography/text";
import {
  Board,
  BoardsList,
  OpenSidebarButton,
  SidebarContainer,
  TopArea,
} from "./styles";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen(state: (prevState: boolean) => boolean): void;
}

function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const { dashboardName } = useParams();
  const fakeBoards = [
    {
      title: "Platform Launch",
      path: "platform-launch",
    },
    {
      title: "Marketing Plan",
      path: "marketing-plan",
    },
    {
      title: "Roadmap",
      path: "roadmap",
    },
  ];

  return (
    <>
      {!isSidebarOpen && (
        <OpenSidebarButton
          type='button'
          onClick={() => setIsSidebarOpen(prev => !prev)}
        >
          <img src='/icons/icon-show-sidebar.svg' alt='open sidebar' />
        </OpenSidebarButton>
      )}
      {isSidebarOpen && (
        <SidebarContainer>
          <TopArea>
            <Heading as='strong' size='small'>
              ALL BOARDS ({fakeBoards.length})
            </Heading>
            <BoardsList>
              {fakeBoards.map(({ title, path }, index) => (
                <Board
                  className={dashboardName === path ? "selected" : ""}
                  key={index}
                >
                  <Link to={`/dashboard/${path}`}>
                    <svg
                      width='16'
                      height='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                        fill='#828FA3'
                      />
                    </svg>
                    <Text as='span' size='large' weight='bold'>
                      {title}
                    </Text>
                  </Link>
                </Board>
              ))}
            </BoardsList>
          </TopArea>
          {/* <BottomArea></BottomArea> */}
        </SidebarContainer>
      )}
    </>
  );
}

export default Sidebar;
