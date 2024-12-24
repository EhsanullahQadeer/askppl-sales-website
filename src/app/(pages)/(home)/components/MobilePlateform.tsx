import Image from 'next/image'
import React from 'react'
import mobile from '../../../../assets/images/iPhone 15.png'
const MobilePlateform = () => {
  return (
    <>
      <div className="lg:px-[42px] lg:pt-[42px] px-5 pt-5 flex flex-col gap-2 rounded-[20px] bg-glass-frosted-stripe">
      <h4 className="text-3xl font-medium ">
        A scalable platform for your influence
        </h4>
        <p className="sm:text-lg text-sm text-hazyPearl font-medium sm:w-2/3 ">
        As your influence grows, our platform grows with you giving you the tools you need to stay connected and monetize your content.
        </p>
        <div className=" flex   justify-center items-center ">
                    <Image
                      className=" w-full rounded-t-3xl h-full object-cover"
                      src={mobile}
                      alt="user"
                    />
                  </div>
      </div>
    </>
  )
}

export default MobilePlateform
