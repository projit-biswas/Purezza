import React from "react";
import Slider from "./Slider";

function Hero() {
  return (
    <>
      <section className="h-screen w-full relative z-10 flex">
        <div className="w-[20%] h-[100vh] bg-black z-[-1] absolute -top-[5.5rem]"></div>
        <div className="w-[80%] h-screen z-[-1] absolute -top-[5.5rem] left-[20%] ">
          <Slider />
        </div>
      </section>
    </>
  );
}

export default Hero;
