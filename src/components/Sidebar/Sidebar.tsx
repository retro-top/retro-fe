"use client";

import React, { useState, useCallback } from "react";
import { RiSearchLine, RiGift2Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import NavButton from "./NavButton";
import MobileDrawer from "./MobileDrawer";
import navbars from "@/constants/navbar";

const Sidebar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  const navItems = [
    { name: "Menu", icon: FiMenu, onclick: () => toggleDrawer() },
    { name: "Search", icon: RiSearchLine, onclick: () => {} },
    { name: "Rewards", icon: RiGift2Line, onclick: () => {} },
  ];

  const renderNavContent = useCallback(
    () => (
      <>
        {navbars.map((navbar, navbarIndex: number) => (
          <div
            className="p-4 border-t-2 md:border-t-0 md:border-r-0 md:border border-gray-800"
            key={navbarIndex}
          >
            <h1 className="text-sm font-semibold pb-2 select-none">
              {navbar.heading}
            </h1>
            <div className="space-y-1">
              {navbar.options.map((item, index) => {
                return (
                  <NavButton
                    icon={item.icon}
                    name={item.name}
                    href={item.href}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </>
    ),
    []
  );

  return (
    <>
      <nav className="hidden md:block float-left pt-0 text-white h-[calc(100vh-3.5rem)] max-w-[280px] md:border-r border-gray-800">
        {renderNavContent()}
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 shadow-lg z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full"
              onClick={item.onclick}
            >
              <item.icon className="text-2xl text-gray-600" size={16} />
              <span className="text-xs mt-1 text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {isDrawerOpen && (
          <MobileDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
            {renderNavContent()}
          </MobileDrawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
