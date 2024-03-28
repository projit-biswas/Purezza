import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css/bundle";
import "./style.css";

function Slider() {
  return (
    <>
      <div className="balckk"></div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          <SwiperSlide>
            <div className="hero">
              {/* <img
              className="w-screen h-screen"
              src="src\assets\legal-ai.webp"
              alt="legal-ai"
            /> */}
              <h1 className="text-6xl font-bold text-white text-center absolute top-56   left-[-1rem] z-[9999] p-3 m-3 ">
                Digital Services
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero">
              {/* <img
              className="w-screen h-screen"
              src="src\assets\legal-ai.webp"
              alt="legal-ai"
            /> */}
              <h1 className="text-6xl font-bold text-white text-center absolute top-56   left-[-1rem] z-[1] p-3 m-3 ">
                Website Development
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen h-screen [z-1]"
              src="src\assets\peakpx.jpg"
              alt="peakpx"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen h-screen"
              src="src\assets\peakpx-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen h-screen"
              src="src\assets\photo-1626785774573-4b799315345d.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen h-screen"
              src="src\assets\DevOps-symbol_0.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen h-screen"
              src="src\assets\1805473.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen h-screen"
              src="src\assets\cyber-attacks-scaled-1.jpg"
              alt=""
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default Slider;
