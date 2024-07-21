import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import Label from "./Label";

interface DropdownProps {
  options: string[] | React.ReactNode[];
  onSelect: (optionIndex: number) => void;
  defaultSelectedOption?: number;
  placeholder?: string;
  maxHeight?: number;
  label?: string;
  about?: string;
  alert?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label = "",
  about = "",
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

  const memoizedOptions = useMemo(() => options, [options]);

  const handleSelect = useCallback(
    (index: number) => {
      setSelectedOption(index);
      onSelect(index);
      setIsOpen(false);
    },
    [onSelect]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const calculateExpandDirection = () => {
        const dropdownRect = dropdownRef.current!.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - dropdownRect.bottom;
        const spaceAbove = dropdownRect.top;
        return spaceBelow < maxHeight && spaceAbove > spaceBelow;
      };

      const handleResize = () => {
        setExpandUpwards(calculateExpandDirection());
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isOpen, maxHeight]);

  return (
    <div className="relative w-full flex flex-col" ref={dropdownRef}>
      <Label about={about} label={label} />
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full px-4 py-2 border bg-transparent hover:bg-gray-800 border-gray-800 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate text-sm">
          {selectedOption !== -1
            ? memoizedOptions[selectedOption]
            : placeholder}
        </span>
        {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            aria-activedescendant={
              selectedOption !== -1 ? `option-${selectedOption}` : undefined
            }
            tabIndex={-1}
            ref={optionsRef}
            initial={{ opacity: 0, y: expandUpwards ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: expandUpwards ? 10 : -10 }}
            className={`absolute left-0 right-0 w-full mt-1 bg-primary border border-gray-800 rounded shadow-lg z-10 overflow-y-auto ${
              expandUpwards ? "bottom-full mb-1" : "top-full mt-1"
            }`}
            style={{ maxHeight: `${maxHeight}px` }}
          >
            {memoizedOptions.map((option, index) => (
              <li
                id={`option-${index}`}
                key={index}
                role="option"
                aria-selected={index === selectedOption}
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
