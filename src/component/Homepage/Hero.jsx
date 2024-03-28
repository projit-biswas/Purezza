import React from "react";

function Hero() {
  return (
    <>
      <section className="w-screen h-screen bg-slate-500 absolute top-0 z-[-1] flex">
        <div className="w-[20%] h-screen bg-black"></div>
        <div className="w-[80%] h-screen bg-green-300">Slider</div>
      </section>
    </>
  );
}

export default Hero;
