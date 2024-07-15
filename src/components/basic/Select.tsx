'use client'

import React, { useState, useEffect } from "react";

interface SelectProps {
  options: string[] | React.ReactNode[];
  onSelect: (optionIndex: number) => void;
  defaultSelectedOption?: number;
}

const Select: React.FC<SelectProps> = ({ options, onSelect, defaultSelectedOption = -1 }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultSelectedOption);

  useEffect(() => {
    if (defaultSelectedOption !== -1) {
      setSelectedIndex(defaultSelectedOption);
      onSelect(defaultSelectedOption);
    }
  }, [defaultSelectedOption, onSelect]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect(index);
  };

  return (
    <div className="flex gap-2">
      {options.map((item, index) => (
        <div
          key={index}
          className={`p-2 border border-gray-800 rounded cursor-pointer transition h-full ${
            index === selectedIndex ? "bg-gray-800 text-white" : "hover:bg-gray-900"
          }`}
          onClick={() => handleSelect(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Select;