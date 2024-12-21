import React from "react";
import FormSection from "./components/FormSection";

const Page = () => {
  return (
    <div className="pt-[60px] sm:pt-24">
      <div className="max-w-[610px] mx-auto max-sm:px-9">
        <h1 className="text-3xl sm:text-6xl text-center font-medium">
          Your Opinion Matters <br /> Answer and Earn!
        </h1>

        <div className="max-w-[572px] mx-auto">
          <p className="mt-3 text-hazyPearl text-2xl font-neueMontreal font-medium text-center">
            Answer fun, engaging questions for a chance to win prizes and earn
            real money on ASKPPL.
          </p>
        </div>
      </div>

      <div className="mt-[62px] max-w-3xl mx-auto max-sm:px-9">
        <div></div>

        <FormSection />
      </div>

    </div>
  );
};

export default Page;
