import React from "react";
import FormSection from "./components/FormSection";
import StepsToWinSection from "./components/StepsToWinSection";
import InfluenceSection from "../../../components/InfluenceSection";
import QuestionSection from "./components/QuestionSection";
import SweepstakesEnded from "./components/SweepstakesEnded";
interface SearchParams {
  type?: string;
}

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { type } = await searchParams;
  return (
    <div className="pt-[60px] sm:pt-24">
      <div className="max-w-[610px] mx-auto max-sm:px-9">
        <h1 className="text-3xl sm:text-6xl text-center font-medium">
          Your Opinion Matters <br /> Answer and Earn!
        </h1>

        <div className="max-w-[572px] mx-auto">
          <p className="mt-6 sm:mt-3 text-hazyPearl text-lg sm:text-2xl font-neueMontreal font-medium text-center">
            Answer fun, engaging questions for a chance to win prizes and earn
            real money on ASKPPL.
          </p>
        </div>
      </div>

      <div className="mx-5">
        <div className="mt-[86px] sm:mt-[62px] max-w-3xl mx-auto">
          {type === "answere" ? (
            <SweepstakesEnded />
          ) : (
            <>
              <QuestionSection />
              <FormSection type={type} />
            </>
          )}
        </div>
      </div>

      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mt-[60px] sm:mt-[100px] mb-[30px] sm:mb-[52px] mx-auto max-w-screen-2xl">
          <StepsToWinSection />
        </div>
      </div>

      <InfluenceSection />
    </div>
  );
};

export default Page;
