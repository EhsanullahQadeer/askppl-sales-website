import StoryCardList from "./components/StoryCardList";
import SearchField from "@/components/SearchField";
import profileImagesFrame from "../../../assets/images/profile-images-frame.png";
import packagesFrame from "../../../assets/images/packages-frame.png";
import Image from "next/image";
import "./styles/styles.css";

const occupations = [
  "Content creator",
  "Designer",
  "Developer",
  "Photographer",
  "Writer",
  "Editor",
  "Engineer",
  "Teacher",
  "Data Scientist",
];

export default function StoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-[60px] sm:pt-24">
      <div className="max-w-[610px] mx-auto max-sm:px-9">
        <h1 className="text-3xl sm:text-6xl text-center font-medium">
          Insights, Tips, and Stories to Empower Your Journey
        </h1>
      </div>

      <div className="mt-10 sm:mt-[60px] max-w-[376px] mx-auto max-sm:px-4">
        <SearchField
          {...{ placeholder: "Search by occupation", suggestions: occupations }}
        />
      </div>

      <div className="sm:mx-[60px] lg:mx-[140px]">
        <div className="mt-[60px] sm:mt-[100px] mx-auto max-w-screen-2xl">
          <StoryCardList />
        </div>
      </div>

      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mx-auto max-w-screen-2xl">
          <div className="my-10 md:my-20 h-[1px] w-full bg-glass-frosted-stripe"></div>

          <div>{children}</div>

          <div
            style={{ backdropFilter: "blur(60px)" }}
            className="mt-10 sm:mt-[60px] mb-5 bg-forest rounded-[20px] border border-ghostWhite flex flex-col md:flex-row justify-between items-center gap-5 overflow-hidden"
          >
            <div className="relative max-xl:hidden xl:pl-14">
              <Image
                src={packagesFrame}
                alt="packagesFrame"
                className="h-full"
              />

              <div className="absolute -top-[34px] w-full h-[114px]  bg-green-fade-vertical-top"></div>

              <div className="absolute -bottom-8 w-full h-[94px] bg-green-fade-vertical-bottom"></div>
            </div>

            <div className="py-5 md:py-8 max-xl:px-5 flex flex-col gap-[18px] xl:items-center w-full md:w-[400px] mx-auto">
              <h3 className="text-xl sm:text-3xl font-medium">
                Start Your Journey Today!
              </h3>

              <p className="font-normal sm:font-medium text-[#FFFFFF99] xl:text-center">
                Join ASKPPL and discover how easy it is to monetize your
                expertise while connecting with a loyal audience.
              </p>

              <div className="p-4 w-max rounded-2xl bg-white text-dark text-lg font-bold cursor-pointer">
                Create Your Profile Now
              </div>
            </div>

            <div className="self-end">
              <Image src={profileImagesFrame} alt="profileImagesFrame" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
