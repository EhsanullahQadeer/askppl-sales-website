"use client";

import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem(props: Props) {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-froastedWhite py-5 sm:py-8 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-8">
        <h3 className="text-white text-base sm:text-lg -tracking-[0.36px] font-medium">
          {question}
        </h3>

        <div className="w-6 h-6 relative text-lightLime">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <MinusIcon />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <PlusIcon />
          </div>
        </div>
      </div>
      <div
        className={`text-sm sm:text-base text-hazyPearl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-2" : "max-h-0 mt-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
