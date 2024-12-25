import React from "react";
import StaticChat from "./StaticChat";
import EffortlessEarns from "./EffortlessEarns";
import AboutPeople from "./AboutPeople";
import Verification from "./Verification";
import MobilePlateform from "./MobilePlateform";

const Influences = () => {
  return (
    <>
      <div className=" py-14 px-4 lg:px-[140px] ">
        <div className="flex justify-center items-center ">
          <h2 className="sm:text-6xl text-4xl md:w-[500px] text-center font-medium pb-[80px]  ">
            Unlock the power of your influence
          </h2>
        </div>
        <div className="flex flex-wrap gap-5 items-start ">
          <div className="flex flex-col gap-5 flex-1">
          <StaticChat />
          <AboutPeople />
            <Verification />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <EffortlessEarns />
            <MobilePlateform />
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Influences;
