import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto max-sm:max-w-full ">
          <h2 className="text-[#383C43] text-3xl mb-12 text-center max-sm:text-lg max-sm:mb-6">
            <b>Descubra as razões da escolha pelo grande público</b>
          </h2>
          <div className="flex md:flex-row flex-col justify-center">
            <div className="flex justify-center max-sm:grid ">
              <div className="border-r max-sm:border-b-2 max-sm:border-b-black max-sm:border-r-0 border-r-black pr-0 sm:pr-14">
                <p className=" text-[#6B7C93] text-base mb-7 max-sm:text-sm max-sm:mb-5 max-sm:text-center">
                  software muito bom e fácil de pisar e usar software muito bom
                  e fácil de pisar e usar{" "}
                </p>
                <div className="flex gap-3 items-center max-sm:pb-4 max-sm:justify-center">
                  <Image src={"/user.png"} alt={"img"} width={50} height={0} />
                  <h1 className="text-[#3B3B3B] text-base max-sm:text-sm">
                    <b>- Tom Gackell</b>
                  </h1>
                </div>
              </div>
            </div>
            <div className="pl-9 max-sm:pl-0 max-sm:pt-7">
              <div className="text-[#FFCC09] text-xl flex gap-1 mb-8  max-sm:justify-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-lg mb-8 max-sm:text-base max-sm:mb-5 text-[#6B7C93] max-sm:text-center">
                Avalie 4,65/5 com base nas avaliações
              </p>
              <div className="max-sm:flex max-sm:justify-center">
                <button className="bg-white border-[#3b3f86]   border-2 py-2 px-7 text-sm rounded-[50px] text-[#323685]">
                  Dê a sua nota
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const testimonial = [
  {
    para: "software muito bom e fácil de pisar e usar software muito bom e fácil de pisar e usar",
    img: "/user.png",
    name: "Tom Gackell",
    ratings: "Avalie 4,65/5 com base nas avaliações",
  },
  {
    para: "software muito bom e fácil de pisar e usar software muito bom e fácil de pisar e usar",
    img: "/user.png",
    name: "Tom Gackell",
    ratings: "Avalie 4,65/5 com base nas avaliações",
  },
  {
    para: "software muito bom e fácil de pisar e usar software muito bom e fácil de pisar e usar",
    img: "/user.png",
    name: "Tom Gackell",
    ratings: "Avalie 4,65/5 com base nas avaliações",
  },
];
