"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import React, { useEffect, useRef, useState } from "react";

type Props = { placeholder: string; suggestions: string[] };

const SearchField = (props: Props) => {
  const { placeholder, suggestions } = props;

  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    if (userInput.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }

    const matches = suggestions.filter((item) =>
      item.toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredSuggestions(matches);
  };

  const handleSuggestionClick = (item: string) => {
    setInputValue(item);
    setIsFocused(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={inputRef}>
      <div className="relative z-10">
        <input
          type="text"
          onFocus={() => setIsFocused(true)}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full bg-dark outline-none text-base px-4 pr-10 py-3 border border-etherealWhite focus-within:border-white rounded-xl font-medium text-white"
        />
        <span className="text-white absolute top-1/2 -translate-y-1/2 right-4">
          <SearchIcon />
        </span>
      </div>

      {!!filteredSuggestions.length && isFocused && (
        <ul className="backdrop-50 absolute w-full -mt-4 pt-4 bg-glass-white-gradient text-white rounded-b-xl shadow-md shadow-grey z-[2]">
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(item)}
              className="px-4 py-2 cursor-pointer text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchField;
