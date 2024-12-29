import Image from "next/image";
import logo from "../assets/images/askppl-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-softWhite py-[30px] sm:py-[100px] footer">
      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap gap-10 sm:gap-16 justify-between">
            <div className="w-[294px]">
              <div className="mb-5">
                <Image src={logo} alt="ASKPPL Logo" width={121} />
              </div>
              <p className="text-base leading-[128%] font-normal">
                Earn money by answering paid questions or get the insights you
                need from trusted professionals.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex gap-5 max-sm:flex-wrap">
              {/* Quick Links */}
              <div className="w-[150px] xl:w-[200px] flex flex-col gap-4 sm:gap-5">
                <h3 className="text-white text-base xl:text-lg font-medium">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-2 text-sm xl:text-base">
                  <li>How It Works</li>
                  <li>Pricing</li>
                  <li>Case Studies</li>
                  <li>FAQs</li>
                </ul>
              </div>

              <div className="w-[150px] xl:w-[200px] flex flex-col gap-4 sm:gap-5">
                <h3 className="text-white text-base xl:text-lg font-medium">
                  For Creators
                </h3>
                <ul className="flex flex-col gap-2 text-sm xl:text-base">
                  <li>Create Your Profile</li>
                  <li>Set Your Rates</li>
                  <li>Promote Your Expertise</li>
                  <li>Track Your Earnings</li>
                </ul>
              </div>

              <div className="w-[150px] xl:w-[200px] flex flex-col gap-4 sm:gap-5">
                <h3 className="text-white text-base xl:text-lg font-medium">
                  For Audiences
                </h3>
                <ul className="flex flex-col gap-2 text-sm xl:text-base">
                  <li>Ask a Question</li>
                  <li>Explore Experts</li>
                  <li>Get Personalized Insights</li>
                  <li>Secure Payments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-20 border-t border-mistWhite pt-6 sm:pt-5 flex max-sm:flex-col flex-wrap justify-between sm:items-center gap-5 text-base">
            <div className="order-2 sm:order-1">© 2024 ASKPPL. All Rights Reserved.</div>
            <div className="flex gap-2.5 order-1 sm:order-2">
              <a href="#">Terms of Service</a>
              <span>|</span>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
