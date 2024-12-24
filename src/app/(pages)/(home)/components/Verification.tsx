import React from "react";

const Verification = () => {
  return (
    <>
      <div className="lg:p-[42px] p-5 flex flex-col gap-2 rounded-[20px] bg-ghostWhite">
        <h4 className="text-3xl font-medium ">
          Built-in trust and verification{" "}
        </h4>
        <p className="sm:text-lg text-sm text-hazyPearl font-medium sm:w-4/5 ">
          In order to join the app as a person who can answer questions you must
          verify you are human!
        </p>
      </div>
    </>
  );
};

export default Verification;
