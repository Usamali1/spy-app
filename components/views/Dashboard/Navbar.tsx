import React from "react";
import Image from "next/image";
import { AiFillApple } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { GiHamburgerMenu } from "react-icons/gi";

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

const Navbar = ({ toggleDrawer }: any) => {
  return (
    <div>
      <div className="fixed inset-x-0 top-0 bg-white px-5 z-50">
        <div className="hidden md:flex justify-between items-center">
          <Link href={"/"}>
          <div className="cursor-pointer">
            <Image src={"/logospy.png"} alt={"img"} width={120} height={0} />
          </div>
          </Link>
          <div className=" flex gap-2 relative">
            <div className="">
              <div className="bg-[#828AE6] flex items-center justify-center pt-5 pb-5 px-3 rounded-b-[50px]">
                <DiAndroid className="text-2xl text-white max-sm:text-xl" />
              </div>
              <div className='px-3 py-2 shadow-md text-[#373737] text-base absolute w-[140px] whitespace-nowrap  font-normal  active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" bg-[#F9F9F9]'>
                Versão do Android
              </div>
            </div>
            <div className="bg-black flex items-center justify-center pt-3 pb-2 px-2 rounded-b-[50px] h-12">
              <AiFillApple className="text-2xl text-white max-sm:text-xl" />
            </div>
          </div>
          <button className="bg-[#000000] text-base text-white px-4 py-2 hover:bg-[#828AE6]   rounded-[50px] text-center">
            {" "}
            COMPRAR AGORA
          </button>
        </div>
      </div>
      {/* Responsive Navbar Starts */}

      <div className="grid grid-cols-3 md:hidden mx-auto max-w-[1300px] items-center px-5 py-3">
        <span className="text-3xl cursor-pointer" onClick={toggleDrawer}>
          <GiHamburgerMenu />
        </span>
        <div className="flex justify-center items-center">
          <Image
            src="/logospy.png"
            alt="img"
            className="w-32"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const feature = [
  {
    icon: <GoDashboard />,
    para: "Dashboard",
  },
  {
    icon: <MdOutlineCall />,
    para: "Call",
  },
  {
    icon: <RiContactsLine />,
    para: "Contact",
  },
  {
    icon: <FaWhatsapp />,
    para: "Messages",
  },
  {
    icon: <VscHistory />,
    para: "Location",
  },
  {
    icon: <VscHistory />,
    para: "Browser history",
  },
  {
    icon: <HiOutlinePhotograph />,
    para: "Photos",
  },
  {
    icon: <FiVideo />,
    para: "Video Preview",
  },
  {
    icon: <BiMessageRounded />,
    para: "Social apps",
  },

  {
    icon: <AiOutlineCalendar />,
    para: "Calendar",
  },
  {
    icon: <BsFillSimFill />,
    para: "Sim Card",
  },
  {
    icon: <FaRegKeyboard />,
    para: "Keylogger",
  },
];
