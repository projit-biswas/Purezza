import React from "react";

import Button from "./Button";
import "./style.css";

function Needs() {
  return (
    <>
      <div className="w-full h-[1000px] font-mono ">
        <div className="need"></div>
        <div className="bg-[#0d0d0db3] w-[600px] h-full absolute right-20 p-20 text-white flex justify-center items-start flex-col gap-9">
          <h1 className="text-[35px] font-bold leading-10">
            We understand <br />
            your needs.
          </h1>
          <p className="font-medium text-[15px] opacity-70 text-start leading-relaxed">
            At Purezza Technologies, we pride ourselves on our deep
            understanding of customer needs. We know that every client is
            unique, with specific requirements and goals. That's why we take the
            time to listen and comprehend your business challenges and
            aspirations. By gaining a comprehensive understanding of your needs,
            we can develop tailored solutions that address your specific pain
            points and drive your success. Our dedicated team of experts is
            committed to providing personalized service and exceptional support
            throughout your digital journey. Trust Purezza Technologies to
            comprehend and fulfill your customer needs, delivering results that
            exceed expectations.
          </p>
          <Button title={"LEARN MORE"} />
        </div>
      </div>
    </>
  );
}

export default Needs;
