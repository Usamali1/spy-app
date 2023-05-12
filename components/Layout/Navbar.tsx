import React, { useState } from "react";
import Image from "next/image";
import { AiFillApple, AiOutlineDown } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
// import Dashboard from "../common/Dashboard";
import { GrUpdate } from "react-icons/gr";
import { CiMobile4 } from "react-icons/ci";
import { GoDashboard } from "react-icons/go";
import { MdOutlineCall, MdOutlineTextsms, MdKeyboardArrowDown } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { VscHistory } from "react-icons/vsc";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiVideo } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa";
import { BsFillSimFill, BsWhatsapp, BsSnapchat } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Button from "../common/Button";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

const NavbarPrice = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen2] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="z-20 px-4 py-6 fixed top-0 left-0 right-0 bg-white">
      <div className="container  hidden lg:flex justify-between items-center">      <Link href={'/'}> <div>
        <Image src={"/logospy.png"} alt={"img"} width={120} height={0} />
      </div>
      </Link>
        <div className="flex gap-6 items-center">
          <div className="flex gap-1 text-sm text-[#4b4b4b] items-center cursor-pointer ">
            <div className="flex justify-center">
              <div onMouseLeave={() => setOpen(false)} className="relative">
                <Link href={"/product"}>
                  <button
                    onMouseOver={() => setOpen(true)}
                    className="flex justify-center items-center  p-2 bg-white "
                  >
                    <span className="">Produtos</span>
                    <span className={`text-lg transition-all duration-200 ${open ? 'rotate-180' : ' '}`}><MdKeyboardArrowDown /></span>
                  </button>
                </Link>
                <ul
                  className={`absolute -left-20 right-0 w-64 py-2 bg-[#F3F3F3] rounded-lg shadow-xl ${open ? "block" : "hidden"
                    }`}
                >
                  <Link href={'/iphone-spy-app'}> <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                    <span className={'text-xl'}>
                      <AiFillApple />
                    </span>
                    iPhone espião sem jailbreak
                  </li>
                  </Link>
                  <Link href={'/android-spy-app'}>  <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                    <span className={'text-xl'}>
                      <AiFillApple />
                    </span>
                    Android Spy
                  </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-1 text-sm text-[#4b4b4b] items-center cursor-pointer ">
            <div className="flex justify-center">
              <div onMouseLeave={() => setOpen2(false)} className="relative">
                <Link href={"/"}>
                  <button
                    onMouseOver={() => setOpen2(true)}
                    className="flex justify-center items-center  p-2 bg-white "
                  >
                    <span className="">Recursos </span>
                    <span className={`text-lg transition-all duration-200 ${open1 ? 'rotate-180' : ' '}`}><MdKeyboardArrowDown /></span>
                  </button>
                </Link>
                <ul
                  className={`absolute -left-40 right-0 w-[400px] py-4 bg-[#F3F3F3] rounded-lg shadow-xl ${open1 ? "block" : "hidden"
                    }`}
                >
                  <span className={'grid grid-cols-2 mx-2'}>
                    <Link href={'/calls'}> <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                      <span className={'text-xl'}>
                        <IoCallOutline />
                      </span>
                      Chamar
                    </li>
                    </Link>
                    <Link href={'/contactus'}>  <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                      <span className={'text-xl'}>
                        <IoMdContact />
                      </span>
                      Contato
                    </li>
                    </Link>
                  </span>
                  <span className={'grid grid-cols-2 pb-3 mx-2 border-b border-b-gray-300'}>
                    <Link href={'/spy-on-text-messages'}> <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                      <span className={'text-xl'}>
                        <MdOutlineTextsms />
                      </span>
                      Espião de SMS
                    </li>
                    </Link>
                    <Link href={'/phone-location-tracker'}>  <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                      <span className={'text-xl'}>
                        <GoLocation />
                      </span>
                      Rastreador de GPS
                    </li>
                    </Link>
                  </span>
                  <Link href={'/call-tracker-track-phone-calls'}>
                    <div className={'w-full mx-3'}>
                      <div className={'pt-2 hover:text-[#91A3F2] hover:bg-gray-100'}> Recursos</div>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <Link href={'/demo/dashboard'}> <p className="text-sm text-[#4b4b4b] cursor-pointer">Demonstração</p></Link>
          <Link href={'/faq'}> <p className="text-sm text-[#4b4b4b] cursor-pointer">Perguntas frequentes</p> </Link>
          <Link href={'/pricing'}> <p className="text-sm text-[#4b4b4b] cursor-pointer">Preços</p> </Link>
          <div className="flex gap-6 items-center">
            <Link href={'/login'}>
              <div className="flex gap-4 items-center text-sm text-[#3B3B3B] cursor-pointer">
                <CiUser className="text-black  text-xl" />
                <p>Conecte-se</p>
              </div>
            </Link>
            <Link href={'/signup'}>  <Button
              title="Inscreva-se gratuitamente"
              backgroundColor="#91a3f2"
              color="#ffffff"
              border="#91a3f2"
              padding={"8px 24px"}
              size={"14px"}
              weight={"400"}
            />
            </Link>
          </div>
        </div>
        <div className="max-w-6xl px-4 lg:hidden flex justify-between mx-auto items-center py-5 ">
          <span className="text-3xl cursor-pointer" onClick={toggleDrawer}><GiHamburgerMenu /></span>
          <div>
            <Image src={"/logospy.png"} alt={"img"} width={120} height={0} />
          </div>
          <Button
            title="Sign Up free"
            backgroundColor="#91a3f2"
            color="#ffffff"
            border="#91a3f2"
            padding={"8px 24px"}
            size={"14px"}
            weight={"400"}
          />
        </div>
        <div className="block lg:hidden">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            className='bla bla bla'
          >
            <div className="bg-[#F6FBFD] flex justify-between items-center px-2">
              <div className="py-6 px-4">
                <img src="/logospy.png" alt="img" className="w-32" />
              </div>
              <span className="text-xl cursor-pointer" onClick={toggleDrawer}><RxCross1 /></span>
            </div>
            <div className="flex flex-col gap-y-6 px-5 py-5">
              <span className="text-xl cursor-pointer" onClick={toggleDrawer}><RxCross1 /></span>
            </div>
            <div className="flex flex-col gap-y-6 px-5 py-5">
              <div className="flex justify-between gap-1 text-sm text-[#4b4b4b] items-center cursor-pointer ">
                <p>Products</p>
                <AiOutlineDown />
              </div>
              <div className="flex justify-between gap-1 text-sm text-[#4b4b4b] items-center cursor-pointer">
                <p>Features </p>
                <AiOutlineDown />
              </div>
              <p className="text-sm text-[#4b4b4b] cursor-pointer">Demo</p>
              <p className="text-sm text-[#4b4b4b] cursor-pointer">FAQ</p>
              <p className="text-sm text-[#4b4b4b] cursor-pointer">Pricing</p>
              <div className="flex gap-6 items-center justify-center">
                <Button
                  title="Sign Up free"
                  backgroundColor="#91a3f2"
                  color="#ffffff"
                  border="#91a3f2"
                  padding={"8px 24px"}
                  size={"14px"}
                  weight={"400"}
                />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default NavbarPrice;
