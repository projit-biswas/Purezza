import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OurClient() {
  return (
    <>
      <div className="bg-black w-full h-dvh text-white font-mono ">
        <div className="max-w-[1140px] mx-auto">
          <div className="w-[620px] mb-[70px] text-left">
            <h1 className="text-[12px] pl-16 pt-10 tracking-wider font-semibold text-left mb-3 opacity-70">
              OUR CLIENTS -CLICK ON (+) TO VISIT WEBSITES
            </h1>
            <h1 className="text-[42px] font-bold leading-tight tracking-[0.01em]">
              Your success, our reputation!
            </h1>
          </div>

          <div className="w-full flex flex-wrap">
            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\moment-300x300.png"
                alt=""
              />
              <div className=" absolute h-[100%] left-0 top-0 w-full ">
                <div className="rounded-tr-[20px] bottom-0 inline-block h-[40px] w-[40px] -left-[129%] top-[84%] absolute">
                  <div className="text-[10px] relative top-[50%] cursor-pointer">
                    <FontAwesomeIcon
                      icon="fa-solid fa-plus"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\Dream-Nice-300x300.png"
                alt=""
              />
            </div>

            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\samarth-300x300.png"
                alt=""
              />
            </div>

            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\global-exporter-300x300.png"
                alt=""
              />
            </div>

            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\Peakenza-300x300.png"
                alt=""
              />
            </div>

            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\MK-Plastics-300x300.png"
                alt=""
              />
            </div>
            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\JB-Associates-300x300.png"
                alt=""
              />
            </div>
            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\Kamal-Jain-300x300.png"
                alt=""
              />
            </div>
            <div className="bg-[#090909] w-[367px] flex text-center items-center p-[15px] min-h-60 mr-[2px] mb-[2px] overflow-hidden">
              <img
                className="max-w-[180px] m-auto h-auto"
                src="src\assets\ghar-pe-tailor-300x300.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mb-0 text-[11px] font-bold tracking-[0.3rem] pl-9 leading-relaxed text-[#c2c2c2] opacity-60">
          <p className="">2024 © PUREZZA TECHNOLOGIES</p>
        </div>
      </div>
    </>
  );
}

export default OurClient;
