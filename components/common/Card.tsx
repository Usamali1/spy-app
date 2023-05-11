import React, { FC } from "react";

interface MainCards {
  heading: string;
  para: string;
  icon: any;
}

const Card: FC<MainCards> = ({ icon, heading, para }) => {
  return (
    <div className="max-h-[280px] min-h-[280px] rounded-[5px] px-6 py-9 text-center shadow max-sm:px-4 max-sm:py-6 hover:shadow-md hover:-translate-y-3 duration-300">
      <span className="text-[#4B4B4B] text-5xl mx-auto mb-8 flex justify-center max-sm:text-3xl max-sm:mb-6 ">
        {icon}
      </span>
      <h2 className="text-[#4B4B4B] text-xl mb-9 max-sm:text-base max-sm:mb-5 hover:underline cursor-pointer">
        {heading}
      </h2>
      <p className="text-[#4B4B4B] text-sm  max-sm:text-xs"> {para}</p>
    </div>
  );
};

export default Card;
