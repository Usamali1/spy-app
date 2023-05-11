import React, { FC } from "react";

interface MainCards {
  heading: string;
  para: string;
  icon: any;
}

const Step: FC<MainCards> = ({ icon, heading, para }) => {
  return (
    <div className=" gap-5  flex mb-10 max-sm:mb-5  ">
      <div>
        <span>{icon}</span>
      </div>
      <div>
        <h4 className="text-xl mb-5 text-[#FFFFFF] font-[700px] max-sm:text-base max-sm:mb-3 max-sm:font-[500px]">
          {heading}
        </h4>
        <p className="text-[#FFFFFF] text-sm  font-[400px] max-sm:text-xs max-sm:font-[300px]">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Step;
