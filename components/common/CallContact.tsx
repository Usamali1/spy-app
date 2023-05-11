import Image from "next/image";
import React, { FC } from "react";

interface MainCards {
  name: string;
  PhoneNo: string;
  picture: any;
  progresbar: any;
  number: any;
}

const CallContact: FC<MainCards> = ({
  name,
  PhoneNo,
  picture,
  progresbar,
  number,
}) => {
  return (
    <div className="flex w-full justify-between mb-6 items-center">
      <div className="flex gap-3 items-center w-full ">
        <div>
          <Image src={picture} alt="" width={50} height={50} />
        </div>
        <div className="w-full">
          <div className="flex w-full gap-1 mb-1 items-center">
            <p className="text-[#4A3060] text-base">{name}</p>
            <p className="text-[#6B7C93] text-sm">{PhoneNo}</p>
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

export default CallContact;
