import React from "react";
import Slider from "./Slider";

function Hero() {
  return (
    <>
      <section className="w-screen  absolute top-0 z-[-1] flex">
        <div className="w-[100%] z-[-1]">
          <Slider />
        </div>
        {/* <div className="w-[20%] h-screen bg-black ">
          
        </div> */}
      </section>
    </>
  );
}

export default Hero;
