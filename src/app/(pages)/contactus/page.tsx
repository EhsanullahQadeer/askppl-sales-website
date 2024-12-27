import FormSection from "./components/FormSection";
import ReviewsSection from "./components/ReviewsSection";
import dotsBackground from "../../../assets/images/group.png";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${dotsBackground.src})`,
      }}
      className="bg-contain bg-no-repeat bg-bottom w-full h-full pt-24 pb-32"
    >
      <div className="max-w-[704px] mx-auto max-sm:px-9">
        <h1 className="text-3xl sm:text-6xl text-center font-medium">
          Contact us
        </h1>

        <p className="mt-6 sm:mt-5 text-hazyPearl text-lg sm:text-2xl font-neueMontreal font-medium text-center">
          Connect with us for support, feedback, or inquiries. We&apos;re here
          to make your ASKPPL experience seamless and rewarding.
        </p>
      </div>

      <div className="mx-5">
        <div className="mt-[86px] sm:mt-[60px] max-w-3xl mx-auto flex flex-col sm:flex-row rounded-20 border border-gentleFog bg-midnight-ash-gradient backdrop-60 flex-wrap">
          <div className="flex-1 sm:border-r border-gentleFog">
            <FormSection />
          </div>

          <div className="flex-1 flex">
            <ReviewsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
