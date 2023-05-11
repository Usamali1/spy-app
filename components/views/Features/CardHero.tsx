import React from "react";
import Image from "next/image";
import { MdOutlineCall } from "react-icons/md";

const CardHero = ({ title, description, featureTitle, features }: any) => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row mb-6">
        <div className="bg-[#F6FBFD] text-center py-14 px-9">
          <MdOutlineCall className="text-[#828AE6] text-[72px] mb-8 mx-auto" />
          <h2 className="text-[#383C43] text-xl mb-7 ">{title}</h2>
          <p className="text-[#6B7C93] text-base font-[400px]">{description}</p>
        </div>
        <div className="pl-8 pr-4 pt-8 pb-0 shadow-lg lg:max-w-[500px]">
          <h3 className="text-[#3B3B3B] text-xl mb-6 ">{featureTitle}</h3>
          {features.map((item: any, index: number) => {
            return (
              <div className="flex gap-2 items-center mb-4" key={index}>
                <div>
                  <Image src={"/right.png"} alt={"img"} width={20} height={0} />
                </div>
                <div>
                  <p className="text-[#6B7C93] text-sm ">{item}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardHero;
