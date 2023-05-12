import React from "react";
import Image from "next/image";
import Dashboard from "@/components/views/Dashboard";

const messages = () => {
    return (
        <Dashboard>
            <div>
                <div className="bg-[#F4F4F4] px-0 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-5 max-h-[700px]  border bg-[#fff] border-[#e4e2e2] md:my-10">
                        <div className="col-span-2 max-h-[700px] overflow-y-auto border border-[#e4e2e2]">
                            {contactlist.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-[#fff] hover:bg-[#F4F4F4] py-8 px-4 border-l-8 border-[#fff] hover:border-l-8 hover:border-black duration-100 cursor-pointer overflow-y-auto"
                                    >
                                        <Image
                                            src={item?.img}
                                            alt={"img"}
                                            width={50}
                                            height={0}
                                            className="cursor-pointer"
                                        />
                                        <div>
                                            <p className="mb-1.5">{item?.phone}</p>
                                            <span className="text-[#6b7c93] text-sm">Phone: </span>
                                            <span className="text-[#6b7c93] text-sm">
                                                {item?.code}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="lg:col-span-3 lg:block hidden">
                            <div className="mx-20 py-10">
                                <div className="max-w-[400px] mx-auto">
                                    <div className="flex justify-between gap-x-10">
                                        <p>Telefone:</p>
                                        <p>43692</p>
                                    </div>
                                    <div className="flex justify-between gap-x-10">
                                        <p>E-mail:</p>
                                        <p>Meituan Dianping</p>
                                    </div>
                                    <div className="flex justify-between gap-x-10">
                                        <p>Horários conectados:</p>
                                        <p> 6 vezes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[180px] px-3 mb-6 md:mb-6">
                        <div className="relative">
                            <select
                                className="block appearance-none text-sm w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option>Show 10 entries</option>
                                <option>Show 50 entries</option>
                                <option>Show 100 entries</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-52 items-center max-sm:grid max-sm:gap-5 ">
                        <div className="min-w-[150px] px-3">
                            <div className="relative">
                                <select
                                    className="block appearance-none text-sm w-full border border-gray-200 text-gray-700 py-1 px-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                    <option>English</option>
                                    <option>German</option>
                                    <option>Russian</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                                    <Image src={"/ball.png"} alt={"img"} width={15} height={0} />
                                </div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-[#4B4B4B] max-sm:text-center">
                            Direitos autorais © 2023 FamiSoft Limited. Todos os direitos reservados. | Entre em contato com o suporte | Peça um reembolso
                            <span className="text-[#828AE6]"> Entre em contato com o suporte</span> |{" "}
                            <span className="text-[#828AE6]">Peça um reembolso</span>
                        </p>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default messages;

const contactlist = [
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
    {
        name: "Catherine ",
        img: "/catherine.png",
        phone: "(516) 365-3213",
        code: "20m 26s",
    },
];