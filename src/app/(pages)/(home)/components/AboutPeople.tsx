import Image from 'next/image'
import React from 'react'
import network from  '../../../../assets/images/About-people.png'

const AboutPeople = () => {
  return (
    <>
          <div className="lg:px-[42px] lg:pt-[42px] px-5 pt-5 flex flex-col gap-2 rounded-[20px] bg-forest">
        <h4 className="text-3xl font-medium ">
        We're all about people        </h4>
        <p className="sm:text-lg text-sm text-hazyPearl font-medium sm:w-2/3 ">
        Whether it’s learning from others or gaining inspiration, ASKPPL is for people who want real answers from people.
        </p>
        <div>
          <Image
            className=" w-full h-full object-cover"
            src={network}
            alt="user"
          />
        </div>
      </div>
    </>
  )
}

export default AboutPeople
