import Image from "next/image";
import React, { FC } from "react";

interface MainCards {
  title: string;
  
  icon: any;
  progresbar: any;
  number: any;
}

const Callmessages: FC<MainCards> = ({
  title,

  icon,
  progresbar,
  number,
}) => {
  return (
    <div className="flex justify-between mb-7 items-center w-full">
      <div className="flex gap-3 items-start  w-full">
        <div>
        <div className="bg-[#828AE6] text-[#4A3060] rounded-[40px] w-[40px] h-[40px] flex justify-center items-center text-xl">
{icon}
        </div>
        </div>
        <div className="w-full">
        <div className=" mb-1 ">
          <p className="text-[#4A3060] text-base">{title}</p>
        </div>
        <div className=" h-[8px] w-full bg-white dark:bg-neutral-600">
          <div
            className="h-[8px] rounded-[4px] bg-[#5490fe]"
            style={{
              width: `${progresbar}%`,
            }}
          ></div>
        </div>
        </div>
      </div>
      <p className="text-[#4A3060] text-base">{number}</p>
    </div>
  );
};

export default Callmessages;
