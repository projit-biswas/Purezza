import React from "react";
import "./style.css";

function About() {
  return (
    <>
      <div className="w-full h-screen bg-black text-white flex">
        <div className="  px-20 flex flex-wrap font-mono w-[1140px] mx-auto my-36 relative left-80 -top-16 z-10">
          <div className="w-[70%]">
            <div className="flex flex-col items-end text-[42px] font-extrabold mb-12 tracking-[0.01em] leading-tight">
              <h1>Hello We Are,</h1>
              <h1>Purezza Technologies.</h1>
            </div>
            <p className="text-start w-[369px] mb-5 tracking-[0.4px] leading-relaxed font-medium text-[15px] opacity-70 relative left-2">
              Welcome to Purezza Technologies, your premier destination for
              exceptional website development services. At Purezza Technologies,
              we understand the crucial role that a well-designed and
              professionally crafted website plays in the success of your
              business. With our expertise and dedication, we deliver tailored
              web solutions that help you make a lasting impression in the
              digital world. <br /> Our team of highly skilled developers and
              designers possesses a deep understanding of the latest industry
              trends and technologies. We combine creativity, technical
              proficiency, and strategic thinking to create stunning websites
              that captivate your target audience and elevate your brand.
            </p>
            <div className="relative left-2">
              <h1 className="font-bold text-base ">TEAM </h1>
              <h1 className="font-semibold text-sm opacity-70 mt-2">
                Purezza Technologies
              </h1>
              <div className="flex items-center">
                <div className="text-9xl font-bold mr-5 leading-tight">15</div>
                <div>
                  YEARS OFF
                  <br />
                  DIGITAL EXPRIENCE
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutImg bg-[#090909] p-12 my-auto w-[70%] h-[71%] relative flex justify-center items-center ">
          <img
            className="w-[90%] h-[85%] "
            src="src\assets\AboutImg.jpg"
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default About;
