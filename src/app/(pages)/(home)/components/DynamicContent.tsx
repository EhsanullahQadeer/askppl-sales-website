import Image from "next/image";
import VerticalDots from "@/assets/icons/VerticalDots";
import female from "../../../../assets/images/jadaImg.png";

const DynamicContent = () => {
  return (
    <div className="flex-1 lg:px-[42px] lg:pt-[42px] px-5 pt-5 rounded-[20px] bg-vanishing-light-gradient flex flex-col justify-between">
      <div>
        <h4 className="text-lg sm:text-3xl font-medium tracking-[-0.36px]">
          Dynamic content on your public feed
        </h4>
        <p className="mt-2.5 sm:text-lg text-sm tracking-normal text-softWhite font-medium pr-2 font-neueMontreal">
          Highlight your top public answers on your profile, giving new
          followers a taste of your personality and expertise.
        </p>
      </div>

      <div className="sm:px-[19px] px-3 mx-4 mt-16 py-[11px] border border-ghostWhite rounded-t-3xl bg-green-white-Color backdrop-60">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-doveGray">
            <div>
              <Image
                src={female}
                height={27}
                width={27}
                alt="jade"
                className="rounded-full"
              />
            </div>

            <div className="flex gap-1 items-center text-[10px] sm:text-base">
              <span className="text-white">Jada</span>
              <span>•</span>
              <span>17h Ago</span>
            </div>
          </div>
          <VerticalDots />
        </div>
        <p className="sm:text-[21px] text-sm mt-6 max-w-[416px]">
          What’s your trick for looking put- together on days you’re totally
          exhausted?
        </p>
      </div>
    </div>
  );
};

export default DynamicContent;
