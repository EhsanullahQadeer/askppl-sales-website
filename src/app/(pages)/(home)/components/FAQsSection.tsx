import React from "react";
import { faqData } from "../data/data";
import FAQItem from "./FAQItem";

const FAQsSection = () => {
  return (
    <div className="mx-5 sm:mx-[60px] lg:mx-[140px] mt-[30px] sm:mt-20 pt-9 sm:pt-[50px] pb-[30px] sm:pb-[88px]">
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-[500px] mx-auto">
          <h2 className="page-heading">
            Any questions? <br /> We got you!
          </h2>
        </div>

        <div className="mt-8 sm:mt-[50px]">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
