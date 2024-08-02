import Games from "@/modules/home/Games";
import HomeSwiper from "@/modules/home/HomeSwiper";
import React from "react";

const Page = () => {
  return (
    <main className="space-y-4">
      <HomeSwiper />
      <Games heading="Our Games" />
    </main>
  );
};

export default Page;
