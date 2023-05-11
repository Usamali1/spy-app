import React from "react";
import { MdOutlineFormatColorReset } from "react-icons/md";

const Rating = () => {
  return (
    <div>
      <h3 className="text-[#3B3B3B] text-[30px] font-[300px] text-center mb-14">
        Free mobile tracker. Sign up free.
      </h3>
      <h4 className="text-[#3B3B3B] text-xl mb-9 text-center font-[700px]">
        Create an account for free
      </h4>
      <div className="flex flex-col md:flex-row justify-center gap-3  mb-7">
        <input
          type="text"
          placeholder="Your email"
          className="border-[1px] py-3 pl-5  text-base w-full md:w-[270px] rounded-[4px]"
        />
        <div className=" relative">
          <input
            type="text"
            placeholder="Set a password "
            className=" border-[1px] py-3 pl-5 rounded-[4px] w-full md:w-[270px]"
          />
          <MdOutlineFormatColorReset className="absolute text-[#4B4B4B] text-xl top-3 right-3" />
        </div>
        <button className="bg-[#91A3F2] text-white py-3 w-full md:w-[270px] px-14 text-sm font-[700px] rounded-[50px]">
          Sign up free
        </button>
      </div>
      <p className="text-[#6B7C93] text-sm text-center mb-9">
        By signing up, I hereby agree to the{" "}
        <span className="text-black">
          <u>Privacy Policy</u>
        </span>
      </p>
      <div className="flex justify-center mb-36">
        <button className="bg-white border-[#828AE6] border-[2px] py-3 px-14 text-[#828AE6] text-lg font-[700px] rounded-[50px]">
          Check Live Demo Here{" "}
        </button>
      </div>
    </div>
  );
};

export default Rating;
