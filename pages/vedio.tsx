import React from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import Picture from "../components/common/Picture";
import Dashboard from "@/components/views/Dashboard";

const vedio = () => {
    return (
        <Dashboard>
            <div className="h-full">
                <div className="bg-[#F4F4F4] px-8 py-4 h-full">
                    <div className="bg-white px-7 py-3 h-full">
                        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Picture
                                            icon={item.icon}
                                            image={item.image}
                                            heading={""} title={""} />
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
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video controls src="/otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video src="otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
    {
        image: (
            <video src="otillia.mp4" />
        ),
        icon: <BsDownload />,
    },
];