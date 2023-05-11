import React from "react";
import { GrUpdate } from "react-icons/gr";
import { CiMobile4 } from "react-icons/ci";
import { GoDashboard } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { VscHistory } from "react-icons/vsc";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiVideo } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa";
import { BsFillSimFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ isOpen, toggleDrawer }: any) => {
  return (
    <div>
      <div>
        <div className="hidden md:block bg-[#F6FBFD] py-5 pl-5 pr-3 text-base text-[#4B4B4B]">
          <p>demo@spyzie.io</p>
          <div className=" flex items-center mb-7">
            <p>Atualizada: May 03 2023 11:40:25 </p>
            <GrUpdate />
          </div>
          <div className="flex justify-between items-center">
            <CiMobile4 />
            <p>Samsung Galaxy S8</p>
            <GoDashboard />
          </div>
        </div>
        <div className="hidden md:flex justify-center pt-3">
          <div className="w-full bg-white">
            {feature.map((item: any, index: number) => {
              return (
                <Link href={"/"} key={index} passHref>
                  <div className=" flex w-full py-4 items-center font-[400px] transition-all duration-300 hover:bg-[#F6FBFD] border-l-[3px] border-l-transparent hover:border-l-[#828AE6]">
                    <div className="px-4 flex gap-5 items-center ">
                      <span className="text-[#4B4B4B] text-xl ">
                        {item?.icon}
                      </span>
                      <p className="text-[#4B4B4B] text-base ">{item?.para}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="bg-[#F6FBFD] flex justify-between items-center px-2">
          <div className="py-6 px-4">
            <Image
              src="/logospy.png"
              alt="img"
              className="w-32"
              width={150}
              height={150}
            />
          </div>
          <span className="text-xl cursor-pointer" onClick={toggleDrawer}>
            <RxCross1 />
          </span>
        </div>
        <div className="bg-[#F6FBFD] py-5 pl-5 pr-3 text-base text-[#4B4B4B]">
          <div className="flex justify-between items-center">
            <CiMobile4 />
            <p>Samsung Galaxy S8</p>
            <GoDashboard />
          </div>
        </div>
        <div className="flex justify-center pt-3">
          <div className=" bg-white">
            {feature.map((item, index) => {
              return (
                <Link href={"/"} key={index} passHref>
                  <div className=" flex gap-5 mb-4 items-center font-[400px]  transition-all duration-300 hover:bg-[#F6FBFD] border-l-[3px] border-l-transparent hover:border-l-[#828AE6] ">
                    <span className="text-[#4B4B4B] text-xl ">
                      {item?.icon}
                    </span>
                    <p className=" text-[#4B4B4B] text-base ">{item?.para}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;

const feature = [
  {
    icon: <GoDashboard />,
    para: "Painel",
  },
  {
    icon: <MdOutlineCall />,
    para: "Chamar",
  },
  {
    icon: <RiContactsLine />,
    para: "Contato",
  },
  {
    icon: <FaWhatsapp />,
    para: "Mensagens",
  },
  {
    icon: <VscHistory />,
    para: "Localização",
  },
  {
    icon: <VscHistory />,
    para: "histórico do navegador",
  },
  {
    icon: <HiOutlinePhotograph />,
    para: "Fotos",
  },
  {
    icon: <FiVideo />,
    para: "Visualização de vídeo",
  },
  {
    icon: <BiMessageRounded />,
    para: "Aplicativos sociais",
  },

  {
    icon: <AiOutlineCalendar />,
    para: "CalendarCalendário",
  },
  {
    icon: <BsFillSimFill />,
    para: "Cartão SIM",
  },
  {
    icon: <FaRegKeyboard />,
    para: "Keylogger",
  },
];
