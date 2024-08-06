import Games from "@/modules/home/Games";
import HomeSwiper from "@/modules/home/HomeSwiper";
import React from "react";

const Page = () => {
  return (
    <main>
      <HomeSwiper />
      <Games heading="Retro Originals" size={150} />
    </main>
  );
};

export default Page;
