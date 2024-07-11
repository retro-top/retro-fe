"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

const GameLayout = ({ children }: Props) => {
  return (
    <section className="bg-primary-light min-h-[80vh] p-4 rounded flex flex-col-reverse md:flex-row">
      {children}
    </section>
  );
};

export default GameLayout;
