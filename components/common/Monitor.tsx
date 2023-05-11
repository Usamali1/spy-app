import Image from "next/image";
import React, { FC } from "react";

interface MainCards {
  title: string;
  description: any;
}

const Steps: FC<MainCards> = ({ title, description }) => {
  return (
    <div>
      <div>
        <p className="mb-8">
          <Image src={"/darksign.png"} alt={"img"} width={50} height={0} />
        </p>
      </div>
      <h4 className="text-xl mb-4 text-[#3B3B3B] font-[700px] ">{title}</h4>
      <p className="max-w-[300px] text-[#6B7C93] text-sm  font-[400px] max-sm:text-xs max-sm:font-[300px]">
        {description}
      </p>
    </div>
  );
};

export default Steps;
