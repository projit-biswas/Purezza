import React from "react";
import Button from "./Button";

function Help() {
  return (
    <>
      <div className="bg-black w-full h-full font-mono text-white">
        <div className="w-[25%] bg-black"></div>

        <div className="w-[75%] bg-[#090909] ">
          <div className="w-[1140px] h-[991px] flex gap-24 items-center">
            <div className=" h-[755px] w-[50%]">
              
              <img
                src="src\assets\Leonardo_Diffusion_online_tech_support_1.jpg"
                alt=""
              />
            </div>
            <div className="w-[50%]">
                <h1 className="text-[42px] mb-[30px] leading-snug font-extrabold">How Purezza Technologies
                <br/>will help you?</h1>
                <p className="mb-[30px] leading-relaxed text-lg font-semibold">Purezza Technologies Digital Services |</p>
                <p className="text-[15[x] leading-[24px] font-medium opacity-70 ">Purezza Technologies is a leading digital service provider, catering to diverse customer needs. Our expert team specializes in web development, mobile app development, cloud computing, data analytics, and cybersecurity. With a customer-centric approach, we deliver innovative solutions that drive growth and enhance efficiency. We pride ourselves on staying ahead of industry trends, ensuring cutting-edge services that align with client objectives. Our commitment to exceptional customer service fosters trust and collaboration. Whether you need an e-commerce platform, mobile app, secure cloud infrastructure, or data-driven insights, Purezza Technologies is dedicated to helping you achieve your digital goals. Contact us today to unlock your digital potential.</p>
               <div className="mt-5"> <Button title='CONTACT US'/></div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
