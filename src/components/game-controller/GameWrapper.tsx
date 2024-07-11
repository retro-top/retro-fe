import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameWrapper = ({ children }: Props) => {
  return (
    <div className="p-4 rounded flex items-center justify-center flex-col-reverse md:flex-row flex-[2] min-h-[25rem] w-full">
      {children}
    </div>
  );
};

export default GameWrapper;
