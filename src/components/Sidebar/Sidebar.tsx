"use client";

import React, { useState, useCallback } from "react";
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

  const renderNavContent = useCallback(
    () => (
      <>
        {navbars.map((navbar, navbarIndex: number) => (
          <div
            className="p-4 border border-gray-800 border-t-0"
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
        <div className="p-4 border border-gray-800 border-t-0">
          <div className="grid grid-cols-2 gap-4">
            <NavButton name="X Handle" href="#x-handle" />
            <NavButton name="Discord" href="#discord" />
            <NavButton
              name="Terms and Conditions"
              href="#terms-and-conditions"
            />
            <NavButton name="Support" href="#support" />
          </div>
        </div>
      </>
    ),
    []
  );

  return (
    <>
      <nav className="hidden md:block float-left pt-0 text-white h-[calc(100vh-3.5rem)] max-w-[250px]">
        {renderNavContent()}
      </nav>

      <button
        className="md:hidden fixed bottom-4 right-4 bg-gray-600 text-white p-3 rounded-full shadow-lg z-50"
        onClick={toggleDrawer}
      >
        <FiMenu size={24} />
      </button>

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
