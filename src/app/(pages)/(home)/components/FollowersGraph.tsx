import React from 'react'

const FollowersGraph = () => {
  return (
    <>
      <div className='md::pt-[100px] py-10 md:pb-[72px]  px-4 lg:px-[140px] '>
        <h2 className='sm:text-6xl text-4xl md:w-[560px] font-medium  md:text-left text-center flex md:block justify-center items-center '>Turn your influence into income with Askppl</h2>
        <div className='flex md:justify-between items-center mt-[75px] flex-wrap gap-10 '>
            <div className='flex md:flex-col gap-3.5 flex-row'>
            <div className='flex flex-col gap-0.5'>
                <span className='md:text-8xl text-6xl border-b border-hazyPearl font-extralight w-fit pr-1 '>1200</span>
                <span className='md:text-xl font-medium text-hazyPearl'>Total followers</span>
                </div>
                <div className='flex flex-col '>
                <span className='md:text-8xl text-6xl  font-extralight w-fit  '>$25+</span>
                <span className='md:text-xl  font-medium text-hazyPearl'>Your Earning</span>
                </div>
                <div>

                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default FollowersGraph
