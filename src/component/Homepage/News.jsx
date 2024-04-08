import React from "react";

function News() {
  return (
    <>
      <div className="w-full h-screen bg-black text-white font-mono">
        <div className="max-w-6xl h-full mx-auto px-4 pt-9">
          <div className="w-[620px] mb-[70px] text-left">
            <h1 className="mb-5 text-[12px] opacity-70 tracking-widest">
              LATEST NEWS
            </h1>
            <h1 className="text-[42px] font-extrabold ">
              Latest and greatest post
            </h1>
          </div>

          <div className="px-[50px] flex gap-[50px] w-full">
            <div className=" w-[483px] h-[495px]">
              <div className="p-10 ml-[50px] w-[433px] h-[187px] bg-[#090909] relative top-[88%]">
                <h1 className="mb-2 text-[15px] ">Blog</h1>
                <h1 className="text-[22px] leading-7 font-semibold">
                  Wordpress Websites Development: Benefits,
                  <br /> Demand and Budget
                </h1>
              </div>
            </div>
            <div
              className=" bg-slate-400 w-[483px] h-[495px]"
              style={{backgroundImage: `url('https://images.pexels.com/photos/10051802/pexels-photo-10051802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
            >
              <div className="p-10 ml-[50px] w-[433px] h-[187px] bg-[#090909] relative top-[88%]">
                <h1 className="mb-2 text-[15px] ">Blog</h1>
                <h1 className="text-[22px] leading-7 font-semibold">
                  How digital advertising plays a significant role in any
                  business ?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
