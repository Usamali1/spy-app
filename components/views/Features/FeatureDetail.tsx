import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const FeatureDetail = ({ mainHeading, mainHeadingPara, secHeading, secPara, thirdPara, fourthPara, fifthPara }: any) => {
  return (
    <div>
      <h2 className="text-[#3B3B3B] text-[24px] md:text-[36px] mb-5">
        {mainHeading}
      </h2>
      
      {mainHeadingPara.map((item: any, index: any) => {
        return (
          <p className="text-[#6B7C93] text-sm font-[400px] mb-4 py-3" key={index}>
            {item}
          </p>
        )
      })}

      <h2 className="text-[#3B3B3B] text-[24px] md:text-[36px] mb-5">
        {secHeading}
      </h2>
      {secPara.map((item: any, index: any) => {
        return (
          <p className="text-[#6B7C93] text-sm font-[400px] mb-4 py-3" key={index}>
            {item}
          </p>
        )
      })}
      <Image
        className="mb-8"
        src={"/history.jpg"}
        alt={"img"}
        width={1000}
        height={0}
      />
      <p className="text-[#6B7C93] text-sm font-[400px] py-2">
        {thirdPara}
      </p>
      <p className="text-[#6B7C93] text-sm font-[400px] py-2">
        {fourthPara}
      </p>
      <p className="text-[#6B7C93] text-sm font-[400px] mb-24 py-2">
        {fifthPara}
      </p>

      {/* rate */}
      <div className="flex flex-col md:flex-row justify-between gap-6 items-center border-dotted border-t-[2px] border-[#999999] pt-7 mb-14">
        <div className="text-[#FFCC09] text-2xl flex gap-1   max-sm:justify-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="text-xl  max-sm:text-base max-sm:mb-5 text-[#3B3B3B] max-sm:text-center">
          Rate 4.65/5 based on 7910 reviews
        </p>
        <div className="max-sm:flex max-sm:justify-center">
          <button className="bg-white border-[#3b3f86]  hover:bg-[#3b3f86] hover:text-white  border-2 py-2 px-7 text-sm rounded-[50px] text-[#323685]">
            Rate this
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
