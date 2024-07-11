import React from "react";

type Props = {
  children: React.ReactNode;
};

const GameRoot: React.FC<Props> = ({ children }) => (
  <section className="bg-primary-light min-h-[80vh] p-4 rounded flex flex-col-reverse md:flex-row">
    {children}
  </section>
);

const GameSidebar: React.FC<Props> = ({ children }) => (
  <aside className="flex flex-col space-y-4 flex-1 md:max-w-[18rem] border-t md:border-t-0 md:border-r border-gray-800 p-4">
    {children}
  </aside>
);

const GameUI: React.FC<Props> = ({ children }) => (
  <div className="p-4 rounded flex items-center justify-center flex-col-reverse md:flex-row flex-[2] min-h-[25rem] w-full">
    {children}
  </div>
);

const Game = {
  Root: GameRoot,
  Sidebar: GameSidebar,
  UI: GameUI,
};

export default Game;
