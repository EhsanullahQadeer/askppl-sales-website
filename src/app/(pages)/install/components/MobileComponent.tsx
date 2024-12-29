import Image from "next/image";
import mobileCardPic from "../../../../assets/images/mobile-card-install.svg";
import ImagesSlider from "@/components/ImagesSlider";
import AppleStoreIcon from "@/assets/icons/AppleStoreIcon";
import PlayStoreIcon from "@/assets/icons/PlayStoreIcon";
import StarRating from "./StarRating";
import creatorImg from "../../../../assets/images/installing.png";

const MobileCardData = [
  { image: mobileCardPic },
  { image: mobileCardPic },
  { image: mobileCardPic },
  { image: mobileCardPic },
];
const rating = 4.7;

const MobileComponent = () => {
  const imagesArr = MobileCardData.map((item) => item.image);
  return (
    <>
      <div className="flex flex-col max-lg:items-center lg:flex-row gap-4 lg:gap-8">
        <div className="w-full sm:w-[405px] lg:[474px] h-[400px] lg:h-[552px] relative pt-[36px] pb-5 px-[30px] sm:px-[1.5%] rounded-20 border border-ghostWhite bg-vanishing-light-gradient">
          <ImagesSlider
            {...{
              sliderItems: imagesArr,
              paginationBtnPosition: "0px",
              paginationBtnHeight: "4px",
              backgroundGradient: "bg-subtle-dark-fade",
              imageObjectFit: "object-contain",
            }}
          />

          <div className="absolute bottom-0 left-0 h-1/2 w-full bg-subtle-dark-fade rounded-20"></div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="p-5 border rounded-[20px] border-ghostWhite bg-grey">
            <div className="flex items-center lg:justify-start gap-[10px] mb-[24px]">
              <StarRating rating={rating} />
              <span className="text-sm text-softWhite">•</span>
              <span className="text-sm text-softWhite font-neueMontreal">
                {rating} rating
              </span>
              <div className="flex items-center gap-[8px]">
                <AppleStoreIcon />

                <PlayStoreIcon />
              </div>
            </div>

            <h2 className="sm:text-6xl text-3xl font-medium mb-[20px] xl:pr-4">
              Get ASKPPL on your device for a seamless experience.
            </h2>

            <p className="text-gray-400 sm:text-lg font-medium sm:pr-2">
              Unlock the full potential of ASKPPL by installing our Progressive
              Web App (PWA) on your device. Seamlessly ask questions, connect
              with verified individuals, and monetize your expertise with just a
              few taps anytime, anywhere.
            </p>
          </div>
          <div className="sm:py-[35px] bg-forest p-5 sm:px-6 border rounded-[20px] border-ghostWhite ">
            <div className="flex items-start gap-5">
              <div className="w-fit">
                <div className="flex bg-lightGray p-1 w-[64px] h-[64px] justify-center items-center rounded-full">
                  <Image
                    className="rounded-full w-full h-full object-cover"
                    src={creatorImg}
                    alt="Creator"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="italic sm:text-lg">
                  {`“Installing ASKPPL on my phone was a game changer. Now I can
                    respond to questions and connect with my community
                    effortlessly. It's fast, reliable, and feels like a native
                    app!"`}
                </p>
                <span className="text-softWhite font-medium sm:text-base text-sm font-neueMontreal">
                  Thomas Clark., Content Creator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileComponent;
