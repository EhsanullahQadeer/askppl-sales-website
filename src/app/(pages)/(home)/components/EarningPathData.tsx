import React from "react";
interface Iprops {
  step: number;
}
const EarningPathData = (props: Iprops) => {
  console.log('props: ', props);
  return (
    <div className="bg-white rounded-full h-full w-full flex justify-center items-start">
      <div className="text-black text-sm">hello</div>
    </div>
  );
};

export default EarningPathData;
