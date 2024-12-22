import Image from "next/image";
import creator from "../../../assets/images/installing.png";
import React from "react";
import Forward from "@/assets/icons/Forward";
import back from "../../../assets/images/group.png";
import Back from "@/assets/icons/Back";

const ContactUs = () => {
  const formData = {
    fullName: "",
    email: "",
    message: "",
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    // formData[name] = value;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Form submitted successfully!");
  };

  return (
    <>
      <div style={{
    backgroundImage: `url(${back.src})`,
  }} className="bg-contain bg-no-repeat bg-bottom z-10 w-full h-full py-24">
        <div className="flex justify-center z-30 items-center">
          <div className="flex flex-col items-center justify-center  xl:w-3/5 px-6 gap-6">
            <h2 className="sm:text-6xl text-3xl font-medium font-aeonik">Contact Us</h2>
            <span className="text-hazyPearl px-3 sm:text-2xl text-lg  sm:mb-6 mb-4 font-medium text-center">
              Connect with us for support, feedback, or inquiries. We're here to
              make your ASKPPL experience seamless and rewarding.
            </span>
            <div
              style={{
                background: `linear-gradient(150deg, rgba(255, 255, 255, 0.04) 0.98%, rgba(255, 255, 255, 0.10) 101.45%)`,
              }}
              className="flex z-30 sm:flex-row flex-col w-full border backdrop-blur-[60px] border-gentleFog rounded-lg "
            >
              <form
                className="flex w-full sm:w-1/2 font-aeonik flex-col  gap-5 sm:border-r border-b  border-gentleFog p-6 sm:p-8"
                action=""
              >
                <div className="flex flex-col   gap-3">
                  <span className="text-lg font-medium">Full name</span>
                  <input
                    required
                    className="px-4 py-[14px] border border-froastedWhite bg-transparent rounded-lg focus:border-lightLime focus:outline-none"
                    type="name"
                  />
                </div>{" "}
                <div className="flex flex-col gap-3">
                  <span className="text-lg font-medium">Email Address</span>
                  <input
                    required
                    className="px-4 py-[14px] border border-froastedWhite bg-transparent rounded-lg focus:border-lightLime focus:outline-none"
                    type="email"
                  />
                </div>{" "}
                <div className="flex flex-col gap-3">
                  <span className="text-lg font-medium">Message</span>
                  <textarea
                    className="px-4 py-[14px] resize-none border bg-transparent border-froastedWhite  rounded-lg h-32 focus:outline-none  focus:border-lightLime"
                    name=""
                    id=""
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-[13px] w-full text-dark font-bold text-lg bg-white rounded-lg focus:outline-none"
                >
                  Submit
                </button>
              </form>
              <div className=" p-6 sm:p-8 w-full sm:w-1/2  sm:gap-2 gap-40 flex flex-col justify-between ">
                <div className="flex justify-between gap-4  items-center ">
                  <div className="flex   items-start gap-2 ">
                    <div className="w-fit">
                      <div className=" flex bg-green  p-0.5 w-[33px] h-[33px] justify-center items-center rounded-full">
                        <Image
                          className="rounded-full w-full h-full object-cover"
                          src={creator}
                          alt="Creator"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col whitespace-nowrap text-sm justify-between">
                      <span> Thomas Clark</span>
                      <span className="text-white50 font-medium font-neueMontreal">
                        Content Creator
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <div className="p-1 rounded-full bg-subtle-frost-gradient ">
                      <Back />
                    </div>
                    <div className="p-1 rounded-full bg-subtle-frost-gradient">
                      <Forward />
                    </div>
                  </div>
                </div>
                <div className="text-2xl ">
                  <span className="text-smokeGray">
                    “Installing ASKPPL on my phone was a game changer.
                  </span>{' '}
                  <span>
                    Now I can respond to questions and connect with my community
                    effortlessly. It's fast, reliable, and feels like a native
                    app!"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
