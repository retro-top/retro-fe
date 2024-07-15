import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  options: string[] | React.ReactNode[];
  onSelect: (optionIndex: number) => void;
  defaultSelectedOption?: number;
  placeholder?: string;
  maxHeight?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  defaultSelectedOption = -1,
  placeholder = "Select an option",
  maxHeight = 200,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(
    defaultSelectedOption
  );
  const [expandUpwards, setExpandUpwards] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
    onSelect(index);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && dropdownRef.current && optionsRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const optionsRect = optionsRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const spaceBelow = viewportHeight - dropdownRect.bottom;
      const spaceAbove = dropdownRect.top;

      const shouldExpandUpwards = spaceBelow < optionsRect.height && spaceAbove > spaceBelow;
      setExpandUpwards(shouldExpandUpwards);
    }
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="flex items-center justify-between w-full px-4 py-2 border border-gray-800 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate text-sm">
          {selectedOption !== -1 ? options[selectedOption] : placeholder}
        </span>
        {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={optionsRef}
            initial={{ opacity: 0, y: expandUpwards ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: expandUpwards ? 10 : -10 }}
            className={`absolute left-0 right-0 w-full mt-1 bg-primary border border-gray-800 rounded shadow-lg z-10 overflow-y-auto ${
              expandUpwards ? 'bottom-full mb-1' : 'top-full mt-1'
            }`}
            style={{ maxHeight: `${maxHeight}px` }}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-primary-light text-sm"
                onClick={() => handleSelect(index)}
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