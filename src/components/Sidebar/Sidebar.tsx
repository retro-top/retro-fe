import React from "react";
import NavButton from "./NavButton";
import navbars from "@/constants/navbar";

const Sidebar = () => {
  return (
    <nav className="float-left p-4 pt-0 text-white space-y-4 h-[calc(100vh-3.5rem)]">
      {navbars.map((navbar, navbarIndex) => (
        <div
          className="p-4 rounded-lg shadow-lg bg-emerald-800 min-w-40 md:min-w-60"
          key={navbarIndex}
        >
          <h1 className="text-sm font-semibold pb-2 select-none">
            {navbar.heading}
          </h1>
          <div className="space-y-1">
            {navbar.options.map((item, index) => (
              <NavButton
                icon={item.icon}
                name={item.name}
                href={item.href}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;

const sidebarOptions = [
  {
    name: "Home",
    href: "/",
    icon: <></>,
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: <></>,
  },
];
