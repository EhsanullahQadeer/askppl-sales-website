import back from "../../../assets/images/group.png";
import InstallHeader from "./components/InstallHeader";
import MobileComponent from "./components/MobileComponent";

const Install = () => {
  return (
    <>
      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mx-auto max-w-screen-2xl pt-[100px]">
          <InstallHeader />

          <MobileComponent />

          <div className="flex-col flex gap-5 mt-[60px] sm:mt-[100px] mb-5">
            <h3 className="sm:text-3xl text-xl font-medium">
              About the ASKPPL App
            </h3>
            <p className="text-softWhite text-base sm:text-lg font-medium">
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
      </div>

      <div
        style={{
          backgroundImage: `url(${back.src})`,
        }}
        className="bg-cover bg-bottom pt-[38px] sm:pt-[60px] pb-[100px]"
      >
        <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
          <div className="mx-auto max-w-screen-2xl">
            <div className="flex-col flex gap-5">
              <h3 className="sm:text-3xl text-xl font-medium font-aeonik">{`What's This App?`}</h3>
              <p className="text-softWhite sm:text-lg font-medium">
                ASKPPL is a versatile app that transforms curiosity into
                opportunity. It allows users to ask questions directly to
                verified individuals, including content creators, professionals,
                and influencers, who can then provide personalized, paid
                responses. For those answering, it’s a chance to share
                knowledge, grow their following, and earn money, while question
                askers gain access to unique insights and expertise, all within
                an intuitive interface.
              </p>
            </div>
            <div className="flex-col flex gap-5 mt-[38px] sm:mt-[60px]">
              <h3 className="sm:text-3xl text-xl font-medium font-aeonik">
                Availability
              </h3>
              <p className="text-softWhite sm:text-lg font-medium">
                The ASKPPL app is accessible anytime, anywhere. Install it on
                your smartphone, tablet, or desktop to enjoy instant access
                without downloading from an app store. Compatible with Android,
                iOS, and desktop browsers, ASKPPL ensures a seamless experience
                for users who value speed, security, and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Install;
