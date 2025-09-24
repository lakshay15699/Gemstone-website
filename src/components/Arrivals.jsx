import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Arrivals = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 px-6  bg-white text-black">
  <div className="max-w-4xl">
    <h4 className="text-base md:text-base  leading-tight mb-6"
>
      NEW ARRIVALS & BESTSELLERS
    </h4>
    </div>
    <div>
        <h2 className="text-base md:text-5xl  leading-tight mb-6">Trending Jewellery</h2>
    </div>

    <div className="justify-center content-center">
        <h5 className="text-base md:text-base text-black leading-relaxed"> Sparkle and shine bright on every occasion with our timeless yet innovative jewellery. Explore the latest jewellery collections and bestsellers from the house of Sayar.</h5>
    </div>

     <div className="w-full max-w-5xl mt-10">
        <Swiper
          modules={[Pagination]}
         
          pagination={{ clickable: true }}
          className="pb-10"
        >
          <SwiperSlide>
            <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#fff8f0] flex justify-center items-center rounded-lg p-4">
              <img
                src="https://cdn.prod.website-files.com/62428c67e286b9c91b3899d0/626f6b7708c5674ebe2a58dd_SWbg(N)Png-9%201.webp"
                alt="Jewellery 1"
                className="rounded-lg"
              />
            </div>
          

          
            <div className="bg-[#fff8f0] flex justify-center items-center rounded-lg p-4">
              <img
                src="https://cdn.prod.website-files.com/62428c67e286b9c91b3899d0/626f6c566404debad751f16a_Group%202177.webp"
                alt="Jewellery 2"
                className="rounded-lg"
              />
            </div>
          

          
            <div className="bg-[#fff8f0] flex justify-center items-center rounded-lg p-4">
              <img
                src="https://cdn.prod.website-files.com/62428c67e286b9c91b3899d0/626f6b7735ad8aca0f3d011e_SWbg(N)Png-24%201.png"
                alt="Jewellery 3"
                className="rounded-lg"
              />
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#fff8f0] flex justify-center items-center rounded-lg p-4">
              <img
                src="https://cdn.prod.website-files.com/62428c67e286b9c91b3899d0/626f6f0ae9c9051e116c64e9_SWbg(N)Png-18%201-p-500.webp"
                alt="Jewellery 4"
                className="rounded-lg"
              />
            </div>
          
            <div className="bg-[#fff8f0] flex justify-center items-center rounded-lg p-4">
              <img
                src="https://cdn.prod.website-files.com/62428c67e286b9c91b3899d0/626f6f0a12ae8351563d1432_SWbg(N)Png-10%201.webp"
                alt="Jewellery 5"
                className="rounded-lg"
              />
            </div>
          
            <div className="bg-[#fff8f0] flex justify-center items-center rounded-lg p-4">
              <img
                src="https://cdn.prod.website-files.com/62428c67e286b9c91b3899d0/626f6f0a6ae06044ed750335_SWbg(N)Png-31%201.webp"
                alt="Jewellery 6"
                className="rounded-lg"
              />
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
</div>
  )
};
export default Arrivals;