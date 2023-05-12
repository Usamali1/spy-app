import React from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import Picture from "../../components/common/Picture";
import Dashboard from "@/components/views/Dashboard";

const Photos = () => {
  return (
    <Dashboard>
      <div>
        <div className="bg-[#F4F4F4] px-8 py-4">
          <div className="bg-white px-7 py-3">
            <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <Picture
                      icon={item.icon}
                      heading={item.heading}
                      image={item.image}
                      title={item.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button className="flex gap-3 border-[1px] rounded-[5px] mb-6 bg-white border-[#F0F0F0] py-3 px-3 items-center">
            <h1 className="text-[#494949] text-sm">Mostrar 10 entradas</h1>
            <AiOutlineDown className="text-sm text-[#494949]" />
          </button>
          <div className="flex gap-52 items-center max-sm:grid max-sm:gap-5 ">
            <button className="flex gap-3 border-[1px] rounded-[5px] bg-white border-[#F0F0F0] py-1 px-3 items-center">
              <Image src={"/ball.png"} alt={"img"} width={15} height={0} />
              <h1 className="text-[#3B3B3B] text-xs">Inglês</h1>
              <AiOutlineDown className="text-xs text-[#3B3B3B]" />
            </button>
            <p className="text-xs text-[#4B4B4B] max-sm:text-center">
              Direitos autorais © 2023 FamiSoft Limited. Todos os direitos reservados. |
              <span className="text-[#828AE6]"> Entre em contato com o suporte</span> |{" "}
              <span className="text-[#828AE6]"> Peça um reembolso</span>
            </p>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Photos;

const data = [
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
  {
    image: (
      <Image
        src={"/photo1.jpg"}
        alt={"img"}
        className="w-full"
        width={250}
        height={250}
      />
    ),
    heading: "Tue, 07 Feb 2023 06:29:0",
    icon: <BsDownload />,
    title: "nature-3076877_640.jpg",
  },
];