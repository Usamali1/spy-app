import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineCheck } from "react-icons/ai";
interface MainCards {
  icon: any;
button :any
  features: any;
  title: string;
}

const CallContact: FC<MainCards> = ({ icon, title, features,button }) => {
  return (
    <div>
      <div className=" flex items-center gap-3 mb-6">
        <span className="text-[#4B4B4B] text-lg sm:text-[38px]">{icon}</span>
        <h1 className="text-[#4A4A4A] text-2xl font-[400px]">{title}</h1>
      </div>
      <ul className="list-none text-[#4B4B4B] text-base">
        {features.map((item: any, index: number) => {
          return (
            <li key={index} className="flex items-center gap-2">
              <AiOutlineCheck />
              <p>{item}</p>
            </li>
              
          );
        })}
      </ul>
      <div  className="flex items-center gap-2 text-[#4B4B4B] text-base">
      <AiOutlineCheck />
      <button>{button}</button>
      </div>
    </div>
  );
};

export default CallContact;
