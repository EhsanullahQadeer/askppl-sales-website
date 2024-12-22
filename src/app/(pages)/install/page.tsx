import Image from "next/image";
import creator from "../../../assets/images/installing.png";
import StarRating from "./components/StarRating";
import AppleStoreIcon from "@/assets/icons/AppleStoreIcon";
import PlayStoreIcon from "@/assets/icons/PlayStoreIcon";
import back from "../../../assets/images/group.png";
import InstallHeader from "./components/InstallHeader";
import MobileComponent from "./components/MobileComponent";

const Install = () => {
  const rating = 4.7;
  return (
    <>
      <div className="xl:px-[140px] px-[20px]   pt-[100px]">
        <InstallHeader />
        <div className="flex gap-4 lg:flex-row flex-col items-center justify-center  ">
          <MobileComponent />
          <div className="lg:w-3/5 flex flex-col gap-4   ">
            <div className="sm:p-[40px] p-5  border rounded-[20px] border-ghostWhite bg-[#303030]">
              <div className="flex items-center  md:justify-start gap-[10px] mb-[24px]">
                <StarRating rating={rating} />
                <span className="text-sm text-softWhite ">•</span>
                <span className="text-sm text-softWhite font-neueMontreal ">
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
                Unlock the full potential of ASKPPL by installing our
                Progressive Web App (PWA) on your device. Seamlessly ask
                questions, connect with verified individuals, and monetize your
                expertise with just a few taps anytime, anywhere.
              </p>
            </div>
            <div className="sm:py-[35px] bg-[#013B30] p-5 sm:px-6 border rounded-[20px] border-ghostWhite ">
              <div className="flex  items-start gap-5 ">
                <div className="w-fit">
                  <div className=" flex bg-lightGray  p-1 w-[64px] h-[64px] justify-center items-center rounded-full">
                    <Image
                      className="rounded-full w-full h-full object-cover"
                      src={creator}
                      alt="Creator"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="italic sm:text-lg ">
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
        <div className="flex-col flex gap-5 mt-20">
          <h3 className="sm:text-3xl text-xl font-medium font-aeonik">
            About the ASKPPL App
          </h3>
          <p className="text-gray-400 sm:text-lg font-medium ">
            {` The ASKPPL app is a cutting-edge progressive web application designed
          to bridge the gap between curiosity and expertise. Whether you're
          seeking answers to your questions or looking to monetize your
          knowledge, ASKPPL offers a secure, user-friendly platform for
          meaningful engagement. With features like verified accounts,
          personalized interactions, and seamless payment options, it’s more
          than just an app—it’s a gateway to connecting with thought leaders and
          communities.`}
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${back.src})`,
        }}
        className="xl:px-[140px] z-30 px-[20px] bg-cover bg-bottom  py-[100px]"
      >
        <div className="flex-col flex gap-5 mt-[60px]">
          <h3 className="sm:text-3xl text-xl font-medium font-aeonik">{`What's This App?`}</h3>
          <p className="text-gray-400 sm:text-lg font-medium ">
            ASKPPL is a versatile app that transforms curiosity into
            opportunity. It allows users to ask questions directly to verified
            individuals, including content creators, professionals, and
            influencers, who can then provide personalized, paid responses. For
            those answering, it’s a chance to share knowledge, grow their
            following, and earn money, while question askers gain access to
            unique insights and expertise, all within an intuitive interface.
          </p>
        </div>
        <div className="flex-col flex gap-5 mt-[60px]">
          <h3 className="sm:text-3xl text-xl font-medium font-aeonik">Availability </h3>
          <p className="text-gray-400 sm:text-lg font-medium ">
            The ASKPPL app is accessible anytime, anywhere. Install it on your
            smartphone, tablet, or desktop to enjoy instant access without
            downloading from an app store. Compatible with Android, iOS, and
            desktop browsers, ASKPPL ensures a seamless experience for users who
            value speed, security, and convenience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Install;
