import Image from "next/image";
import mobile from "../../../../assets/images/iPhone 15.png";

const MobilePlateform = () => {
  return (
    <>
      <div className="lg:px-[42px] lg:pt-[42px] px-5 pt-5 flex flex-col justify-between rounded-[20px] bg-vanishing-light-gradient">
        <h4 className="text-lg sm:text-3xl font-medium tracking-[-0.36px]">
          A scalable platform for your influence
        </h4>
        <p className="mt-2.5 sm:text-lg text-sm tracking-normal text-softWhite font-medium font-neueMontreal xl:w-2/3">
          As your influence grows, our platform grows with you giving you the
          tools you need to stay connected and monetize your content.
        </p>

        <div className="flex justify-center items-center">
          <Image
            className="w-full rounded-t-3xl h-full object-cover"
            src={mobile}
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default MobilePlateform;
