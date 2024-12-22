import Signal from '@/assets/icons/Signal'
import Wifi from '@/assets/icons/Wifi'
import mobilePic from "../../../../assets/images/mobileCard.png";
import ImagesSlider from '@/components/ImagesSlider'
import mobile from "../../../../assets/images/mobile.png";
import React from 'react'
const MobileCardData=[{images: mobilePic},{images: mobilePic},{images: mobilePic},{images: mobilePic}]

const MobileComponent = () => {
  return (
    <>
       <div
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.04) 100%)",
         
          }}
          className="backdrop-60 pt-[36px] pb-5 px-[30px] sm:px-[41px] h-full sm:w-[474px] w-full rounded-[20px] border border-ghostWhite "
        >
          <div className=''>
            <div className=' '> 
              {/* <Image
                    src={mobile}
                    alt="Creator"
                  />             */}
            </div>
            <div className="bg-[#0F0F0F]   rounded-t-[58px]">
              <div className="flex  sm:pt-[36px] sm:pb-[29px] pt-[10px] pb-[0px] justify-between px-10">
                <span className="">23:59</span>
                <div className="flex gap-1.5">
                  <Signal />
                  <Wifi />
                </div>
                
              </div>
              <div style={{
               background:" linear-gradient(180deg, rgba(15, 15, 15, 0.4) 40%, #0F0F0F 80.35%)",            
              }} className="px-8 py-2">
                
              <ImagesSlider sliderItems={MobileCardData.map((item) => item.images)} />

                {/* <Image
                    src={mobilePic}
                    alt="Creator"
                    className=""
                  />  */}
                </div>
            </div>
            
          </div>
        </div> 
    </>
  )
}

export default MobileComponent
