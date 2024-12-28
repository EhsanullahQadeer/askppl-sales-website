import React from "react";
interface Iprops {
  step: number;
}
const EarningPathData = (props: Iprops) => {
  console.log('props: ', props);
  return (
    <div className="rounded-full h-full w-full">
      <div></div>
    </div>
  );
};

export default EarningPathData;
