import Image from "next/image";
import askppllogo from "../../../../assets/images/askppl-logo.svg";
import logo from "../../../../assets/images/logo.svg";
import creator from "../../../../assets/images/creator-img1.png";
import VerticalDots from "@/assets/icons/VerticalDots";
import BagOutline from "@/assets/icons/BagOutline";
import { earningPathStepsData } from "../lib/data/data";

interface Iprops {
  step: number;
}
const EarningPathData = (props: Iprops) => {
  const { step } = props;

  const currentStep = earningPathStepsData.find((item) => item.step === step);

  return (
    <div className="transition-all duration-300 ease-in-outrelative w-full h-full flex items-center justify-center p-4">
      <div className="flex flex-col justify-center items-center">
        <p className="text-center text-[5px] leading-tight tracking-normal transition-all duration-1000 ease-linear">
          {currentStep?.title}
        </p>

        <div className="mt-1 bg-vantaBlack w-full rounded-sm">
          <div className="flex justify-between items-center border-b-[0.1px] border-stealth w-full p-0.5 ">
            <div>
              <Image src={askppllogo} alt="logo" className="w-5" />
            </div>

            <div>
              <VerticalDots className="w-1 h-1" />
            </div>
          </div>

          <div className="px-0.5 py-0.5 flex gap-0.5">
            <div>
              <Image
                src={creator}
                alt="logo"
                className="rounded-full w-5 aspect-square object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold text-[4px] leading-tight tracking-normal">
                Olivia Reynolds
              </h4>

              <div className="flex gap-[1px] items-center text-[3px] leading-loose tracking-normal mt-[1px]">
                <BagOutline className="w-1 h-1" />

                <span className="font-light">Lifestyle Influencer</span>
              </div>

              <p className="text-[3px] leading-tight tracking-normal mt-[1px]">
                Just your go-to bestie for all things fashion, wellness, and
                travel
              </p>

              <div className="mt-[1px] flex items-center gap-0.5">
                <Image src={logo} alt="logo" className="w-1" />
                <span className="text-[3px] leading-loose tracking-normal font-light">
                  Ask me question!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[3px]">
          <p className="font-neueMontreal text-softWhite text-[3px] leading-tight tracking-normal text-center transition-all duration-1000 ease-linear">
            {currentStep?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarningPathData;
