import ImagesSlider from "@/components/ImagesSlider";
import { SlideItem } from "./types";

interface Props {
  artistData: SlideItem;
}

const StoryContent = (props: Props) => {
  const { artistData } = props;

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-[60px]">
      <div className="md:flex-[376_1_0%] max-md:w-full max-md:h-[412px] relative">
        <div className="w-full md:pb-[123.4%] max-md:h-full relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full md:max-h-[464px] relative">
              <ImagesSlider
                {...{
                  sliderItems: artistData?.images,
                  isBorderRequired: true,
                  paginationBtnPosition: "24px",
                  paginationBtnHeight: "2px",
                  backgroundGradient: "bg-dark-dade-gradient"
                }}
              />

              <div className="absolute bottom-14 left-0 w-full text-lg sm:text-xl text-center z-10">
                {artistData?.title}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex-[724_1_0%] max-md:w-full flex flex-col gap-10 md:gap-[60px]">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-xl sm:text-3xl font-medium">Introduction</h3>

          <p className="text-base sm:text-lg text-softWhite font-neueMontreal font-normal sm:font-medium">
            Meet Alexis, a passionate content creator who has transformed her
            online presence into a thriving business with ASKPPL. Known for her
            engaging vlogs and lifestyle tips, Alexis now uses ASKPPL to connect
            directly with her audience, answering their burning questions and
            sharing personalized advice. Here’s a look at her day, her unique
            perspective, and how she crafts engaging questions to keep her
            audience hooked.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-xl sm:text-3xl font-medium">
            A Day in the Life of Alexis
          </h3>

          <p className="text-base sm:text-lg text-softWhite font-neueMontreal font-normal sm:font-medium">
            Meet Alexis, a passionate content creator who has transformed her
            online presence into a thriving business with ASKPPL. Known for her
            engaging vlogs and lifestyle tips, Alexis now uses ASKPPL to connect
            directly with her audience, answering their burning questions and
            sharing personalized advice. Here’s a look at her day, her unique
            perspective, and how she crafts engaging questions to keep her
            audience hooked.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-xl sm:text-3xl font-medium">Introduction</h3>

          <p className="text-base sm:text-lg text-softWhite font-neueMontreal font-normal sm:font-medium">
            Meet Alexis, a passionate content creator who has transformed her
            online presence into a thriving business with ASKPPL. Known for her
            engaging vlogs and lifestyle tips, Alexis now uses ASKPPL to connect
            directly with her audience, answering their burning questions and
            sharing personalized advice. Here’s a look at her day, her unique
            perspective, and how she crafts engaging questions to keep her
            audience hooked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryContent;
