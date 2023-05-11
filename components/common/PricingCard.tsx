import React, { FC, useState } from "react";
import Button from "./Button";
import { AiOutlineCheck } from 'react-icons/ai';

interface MainCards {
  title: string;
  value: number;
  month: any;
  device: string;
  One_Month: any;
  Three_Month: any;
  Tweleve_Month: any;
  button: string;
  required: string;
  color: string;
  check_Box: any;
  ColorText: any;
  root_title: any;
  bgColor: any;
  para: string;
  icon: any;
  show: any;
  fetures: string[];
  showOne: any;
}

const PricingCard: FC<MainCards> = ({
  title,
  value,
  month,
  device,
  One_Month,
  Three_Month,
  Tweleve_Month,
  button,
  required,
  color,
  ColorText,
  check_Box,
  root_title,
  icon,
  para,
  fetures,
  show,
  showOne
}) => {
  const [activeBox, setactiveBox] = useState(false);

  const handleClick = (buttonId) => {
    setactiveBox(buttonId);
  };

  return (
    <div className=" overflow-hidden relative border-[1px] rounded-[5px]">
      <div className="item-right"
        style={{
          display: show
        }}
      >SALVAR 86%</div>
      <div
        style={{
          backgroundColor: color,
        }}
        className="text-center py-4 text-2xl font-normal text-white rounded-tl-[5px] rounded-tr-[5px]"
      >
        {title}
      </div>
      <div className="px-6 pt-5 pb-8">
        <div
          style={{
            color: color,
          }}
          className="text-[#828AE6] text-5xl font-bold text-center mb-4 "
        >
          {value}
        </div>
        <h2>{month}</h2>
        <div className="flex justify-center w-full">
          <span className="text-[#3B3B3B] text-sm bg-[#EBF9F8] py-1 px-3 mb-9    text-center">
            {device}
          </span>
          <div className={'bg-[#F77062] py-1 px-3 h-[27px] text-white text-sm'}
            style={{
              display: showOne
            }}
          >Mais Popular</div>
        </div>
        <div className="flex gap-2 items-center mb-5">
          <div className="flex w-[20px]">
            {check_Box}
            <span
              className={`text-xs text-center rounded-full w-full h-full p-[3px] bg-transparent hover:bg-red-500 border hover:text-white cursor-pointer border-gray-200 ${activeBox === 1 ? 'text-white bg-red-500' : ''
                }`}
              onClick={() => handleClick(1)}
            >
              <AiOutlineCheck />
            </span>
          </div>
          <div>{One_Month}</div>
        </div>
        <div className="flex gap-2 items-center mb-5">
          <div className="flex w-[20px]">
            {check_Box}
            <span
              className={`text-xs text-center rounded-full w-full h-full p-[3px] bg-transparent hover:bg-red-500 border hover:text-white cursor-pointer border-gray-200 ${activeBox === 2 ? 'text-white bg-red-500' : ''
                }`}
              onClick={() => handleClick(2)}
            >
              <AiOutlineCheck />
            </span>
          </div>
          <div>{Three_Month}</div>
        </div>
        <div className="flex gap-2 items-center mb-5">
          <div className="flex w-[20px]">
            {check_Box}
            <span
              className={`text-xs text-center rounded-full w-full h-full p-[3px] bg-transparent hover:bg-red-500 border hover:text-white cursor-pointer border-gray-200 ${activeBox === 3 ? 'text-white bg-red-500' : ''
                }`}
              onClick={() => handleClick(3)}
            >
              <AiOutlineCheck />
            </span>
          </div>
          <div>{Tweleve_Month}</div>
        </div>
        <div className="flex justify-center  mb-6">
          <button
            style={{
              backgroundColor: color,
            }}
            className="text-lg w-full max-w-[220px] py-2.5  sm:py-3 shadow-lg rounded-[50px] text-[#FFFFFF] mb-6 "
          >
            {button}
          </button>
        </div>
        <p className="text-[#3B3B3B] text-xs text-center">{required}</p>
      </div>
      <h3 className="border-t-[1px] text-[#3B3B3B] text-base font-bold pt-6  px-6 text-center mb-8">
        {root_title}
      </h3>

      <div className="grid grid-cols-2 gap-4 px-6 pt-5 pb-8">
        {fetures.map((item, index) => {
          return (
            <div className="flex items-center gap-1 mb-5" key={index}>
              <span className="text-lg text-[#828ae6]">{icon}</span>
              <p className="text-xs text-[#666666]">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
