import React from "react";

const TitleHero = ({ title }: any) => {
  return (
    <div className="bg-[#F6FBFD] py-16 text-center mb-14 border-t-2 border-[#E7ECEE]">
      <h1 className="text-[#4B4B4B] text-3xl md:text-[42px] font-[700px] mb-8">
        <b>{title}</b>
      </h1>
    </div>
  );
};

export default TitleHero;
