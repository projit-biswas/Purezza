import React from "react";
import Slider from "./Slider";

function Hero() {
  return (
    <>
      <section className="h-[800px] w-screen  flex">
        <div className="w-[20%] h-[110vh] bg-black z-[-1] absolute -top-10 "></div>
        <div className="w-[80%] h-screen z-[-1] absolute -top-10 left-[20%] ">
          <Slider />
        </div>
      </section>
    </>
  );
}

export default Hero;
