import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { BsDownload, BsPlayFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";
import { HiOutlineCalendarDays } from "react-icons/hi";

import Dashboard from "@/components/views/Dashboard";

const Video = (): JSX.Element => {
    const [open, setOpen] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        setOpen(prevOpen => prevOpen === index ? null : index);
    }

    return (
        <Dashboard>
            <div className="h-full">
                <div className="bg-[#F4F4F4] px-8 py-4 h-full">
                    <div className={'flex flex-col sm:flex-row justify-between items-center bg-[#FFFFFF] py-2 px-2'}>
                        <span className="text-center sm:text-left">Record Video</span>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'relative flex-grow'}>
                                <span className={'text-sm flex justify-between gap-1 items-center w-full cursor-pointer bg-white border-r border-r-gray-200 py-2 px-4'} onClick={() => handleOpen(1)}>
                                    <span><RxCaretSort /></span>
                                    Sort By
                                    <span className={`transition-all duration-200 text-xl ${open === 1 ? ' rotate-180 ' : ''}`}><MdArrowDropDown /></span>
                                </span>
                                {open === 1 && (
                                    <ul className={`w-full absolute top-10 right-0 z-20 py-2 bg-[#F3F3F3] rounded-lg shadow-xl ${open ? "block" : "hidden"}`}>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Name
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Size
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Date
                                        </li>
                                    </ul>

                                )}
                            </div>
                            <div className={'relative flex-grow'}>
                                <span className={'text-sm flex justify-between gap-1 items-center w-full cursor-pointer'} onClick={() => handleOpen(2)}>
                                    <span><HiOutlineCalendarDays /></span>
                                    Sort By
                                    <span className={`transition-all duration-200 text-xl ${open === 2 ? ' rotate-180 ' : ''}`}><MdArrowDropDown /></span>
                                </span>
                                {open === 2 && (
                                    <ul className={`w-full absolute top-10 right-0 z-20 py-2 bg-[#F3F3F3] rounded-lg shadow-xl ${open ? "block" : "hidden"}`}>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Name
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Size
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Date
                                        </li>
                                    </ul>

                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9FAFC] px-7 py-10 h-full">
                        <div className={'flex flex-wrap justify-center gap-4 font-medium text-gray-400 text-left max-w-[550px] mx-auto'}>
                            <div className={'relative flex-grow'}>
                                <span className={'text-sm flex justify-between gap-1 items-center w-full cursor-pointer bg-white border border-gray-200 py-2 px-4'} onClick={() => handleOpen(3)}>
                                    Sort By
                                    <span className={`transition-all duration-200 text-xl ${open === 3 ? ' rotate-180 ' : ''}`}><MdArrowDropDown /></span>
                                </span>
                                {open === 3 && (
                                    <ul className={`w-full  absolute top-10 right-0 z-20 py-2 bg-[#F3F3F3] rounded-lg shadow-xl ${open ? "block" : "hidden"}`}>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Name
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Size
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Date
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className={'relative flex-grow'}>
                                <span className={'text-sm flex justify-between gap-1 items-center w-full cursor-pointer bg-white border border-gray-200 py-2 px-4'} onClick={() => handleOpen(4)}>
                                    Sort By
                                    <span className={`transition-all duration-200 text-xl ${open === 4 ? ' rotate-180 ' : ''}`}><MdArrowDropDown /></span>
                                </span>
                                {open === 4 && (
                                    <ul className={`w-full absolute top-10 right-0 z-20 py-2 bg-[#F3F3F3] rounded-lg shadow-xl ${open ? "block" : "hidden"}`}>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Name
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Size
                                        </li>
                                        <li className="flex gap-4 w-full items-center px-3 py-2 text-sm hover:text-[#91A3F2] hover:bg-gray-100">
                                            Date
                                        </li>
                                    </ul>

                                )}
                            </div>
                            <span className={'text-sm text-center items-center w-full md:w-auto text-white bg-[#0160E0] cursor-pointer font-normal rounded-md py-2 px-4 md:min-w-[180px]'} onClick={() => handleOpen(5)}>
                                Record Video
                            </span>
                        </div>
                        <div className=" mdgrid grid-cols-1 md:grid-cols-3 gap-4 max-w-[550px] mx-auto py-8">
                            {data.map((item, index) => {
                                return (
                                    <div className={'text-center w-[180px] h-[150px] mx-auto flex justify-center items-center bg-gray-200 rounded'} key={index}>
                                        <p className=' bg-white hover:text-white hover:bg-[#0160e0] cursor-pointer transition-all duration-500 text-center w-14 h-14 flex justify-center items-center rounded-full text-3xl'>
                                            {item.icon}
                                        </p>
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

export default vedio;

const data = [
    {
        icon: <BsPlayFill />,
    },
    {
        icon: <BsPlayFill />,
    },
    {
        icon: <BsPlayFill />,
    },

];