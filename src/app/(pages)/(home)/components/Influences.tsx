import React from "react";
import StaticChat from "./StaticChat";
import AboutPeople from "./AboutPeople";
import Verification from "./Verification";
import MobilePlateform from "./MobilePlateform";
import EarnEffortless from "./EarnEffortless";
import EffortlessPayouts from "./EffortlessPayouts";
import DynamicContent from "./DynamicContent";

const Influences = () => {
  return (
    <>
      <div className="mx-5 sm:mx-[60px] lg:mx-[140px] pt-9 sm:pt-[50px] pb-[30px] sm:pb-[54px]">
        <div className="mx-auto max-w-screen-2xl">
          <div className="max-w-[500px] mx-auto">
            <h2 className="page-heading">
              Unlock the power of <br /> your influence
            </h2>
          </div>

          <div className="pt-8 sm:pt-20">
            <div className="grid grid-cols-2 gap-4 max-lg:hidden">
              <div className="flex flex-col gap-5">
                <StaticChat />
                <AboutPeople />
              </div>
              <div className="flex flex-col gap-5">
                <EarnEffortless />
                <EffortlessPayouts />
                <DynamicContent />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:hidden gap-5">
              <StaticChat />
              <EarnEffortless />
              <AboutPeople />
              <EffortlessPayouts />
              <DynamicContent />
            </div>

            <div className="mt-5 lg:mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4">
              <Verification />
              <MobilePlateform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Influences;
