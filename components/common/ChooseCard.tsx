import React, { FC } from "react";

interface MainCards {
  heading: string;
  para: string;
  icon: any;
}

const ChooseCard: FC<MainCards> = ({ icon, heading, para }) => {
  return (
    <div>
      <div className="text-center max-sm:hidden">
        <span className=" text-[#4b4b4b] text-6xl mb-9 flex justify-center">
          {icon}
        </span>
        <h4 className="text-[#3B3B3B] text-lg font-bold mb-8">{heading}</h4>
        <p className="text-[#6B7C93] text-sm font-[400px]">{para}</p>
      </div>

      <div className=" hidden max-sm:flex items-center gap-5">
        <div>
          <span className=" text-[#4b4b4b] text-4xl"> {icon}</span>
        </div>
        <div>
          <h4 className="text-[#3B3B3B] text-base font-samibold mb-3">
            {heading}
          </h4>
          <p className="text-[#6B7C93] text-xs font-[300px]">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
