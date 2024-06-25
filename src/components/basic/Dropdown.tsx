"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <div
        className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption || "Select an option"}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg"
          >
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
