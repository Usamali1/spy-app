import React from "react";

import { AiFillApple } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <div>
      <div className="bg-[#F6FBFD] py-16 text-center mb-14 border-t-2 border-[#E7ECEE]">
        <h1 className="text-[#4B4B4B] text-[38px] font-bold mb-8">
          Planos de preços
        </h1>
        <p className="text-[#6B7C93] text-base  font-normal">
          Aproveite agora os recursos do Spyzie. Nenhuma raiz necessária!
        </p>
      </div>
      <div className="flex justify-center mb-20 ">
        <button className="bg-[#647dce] flex gap-5 items-center  w-[170px] h-[45px] justify-center text-white text-xl font-normal rounded-tl-[4px]  rounded-bl-[4px] py-3 px-7">
          <DiAndroid />
          <p> Android</p>
        </button>
        {/* <button className="bg-white border-[1px] w-[170px] h-[45px] items-center  font-normal border-[#9ea5bd] text-[#6b7c93] text-xl flex gap-5 justify-center  py-3 px-7 ">
          <AiFillApple />
          <p> iOS</p>
        </button> */}
      </div>
    </div>
  );
};

export default Header;
