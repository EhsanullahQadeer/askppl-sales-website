'use client'
import ArrowDown from "@/assets/icons/ArrowDown";
import ArrowUp from "@/assets/icons/ArrowUp";
import { useState, useEffect, useRef } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SelectField: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

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

  return (
    <div
      ref={dropdownRef}
      className="relative max-w-[335px] w-full sm:w-[260px]"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-clouded-white-gradient text-white tex-base p-3 flex justify-between items-center rounded-xl border border-mistWhite"
      >
        <span>
          {options.find((option) => option.value === value)?.label ||
            placeholder}
        </span>

        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </button>

      {isOpen && (
        <div
          className="backdrop-50 absolute z-10 w-full mt-2.5 bg-charcoal-mist-gradient px-5 pb-4 text-white rounded-xl"
        >
          {options.map((option, idx) => (
            <div
              key={option.value}
              className={`px-2 py-4 border-froastedWhite text-sm transition cursor-pointer ${
                options.length === idx + 1 ? "border-b-0" : "border-b"
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;
