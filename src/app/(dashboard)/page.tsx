import Main from "@/components/basic/Main";
import Games from "@/modules/home/Games";
import HomeSwiper from "@/modules/home/HomeSwiper";
import React from "react";

const Page = () => {
  return (
    <Main>
      <HomeSwiper />
      <Games heading="Retro Originals" size={150} />
    </Main>
  );
};

export default Page;
