import React from "react";
import { GameHeadingType } from "@/constants/games";
import { ResourceType } from "@/constants/resource";
import { game_heading } from "@/constants/games";
import GameList from "@/modules/home/Games";

type Props = {
  children: React.ReactNode;
};

type HeadingProps = { heading: GameHeadingType };

interface RootProps extends Props {
  game?: ResourceType;
  listGames?: boolean;
}

const GameRoot: React.FC<RootProps> = ({
  children,
  game,
  listGames = true,
}) => (
  <>
    <section>
      <div className="bg-primary-light min-h-[50vh] md:min-h-[75vh] p-4 rounded flex flex-col-reverse md:flex-row">
        {children}
      </div>
      {game && <GameHeading heading={game_heading[game]} />}
    </section>
    {listGames && (
      <GameList dailyRewards={!listGames} heading="More Games" />
    )}
  </>
);

const GameSidebar: React.FC<Props> = ({ children }) => (
  <aside className="flex flex-col space-y-4 flex-1 md:min-w-[13rem] md:max-w-[18rem] border-t md:border-t-0 md:border-r border-gray-800 p-4">
    {children}
  </aside>
);

const GameUI: React.FC<Props> = ({ children }) => (
  <div className="p-4 rounded flex items-center justify-center flex-col-reverse md:flex-row flex-[2] min-h-[18rem] w-full">
    {children}
  </div>
);

const GameHeading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <div className="bg-primary-light p-4 rounded">
      <h1 className="text-base">{heading.title}</h1>
      <p>{heading.description}</p>
    </div>
  );
};

const Game = {
  Root: GameRoot,
  Sidebar: GameSidebar,
  UI: GameUI,
};

export default Game;
