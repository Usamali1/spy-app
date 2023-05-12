import React from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import Dashboard from "@/components/views/Dashboard";

const Location = () => {
    return (
        <Dashboard>
            <div className="bg-[#F4F4F4] px-0 lg:px-8 py-4 w-full h-full">
                <div className="flex justify-between items-center mb-6 px-4">
                    <h1 className="text-[#3B3B3B] text-xl">Localização</h1>
                    <div className="flex gap-3 items-center">
                        <h1 className="text-[#3B3B3B] text-base">demo@spyzie.io</h1>
                        <AiOutlineDown className="text-base text-[#3B3B3B]" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="lg:block hidden">
                        <table className="w-full mb-9  ">
                            <thead className="border-[1px] w-full bg-white text-left font-normal text-sm text-center">
                                <tr className="w-full">
                                    <th scope="col" className=" px-6 py-6">
                                        URL
                                    </th>
                                    <th scope="col" className="px-6 py-6">
                                        Título
                                    </th>
                                    <th scope="col" className="px-6 py-6">
                                        Frequência De Visitas
                                    </th>
                                    <th scope="col" className="px-6 py-6">
                                        Hora Da Última Visita
                                    </th>
                                    <th scope="col" className="px-6 py-6">
                                        Marcar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {row.map((item, index) => {
                                    return (
                                        <tr className="w-[100%] border-[1px] text-left text-center" key={index}>
                                            <td scope="col" className="px-6 py-7 max-w-[170px] mx-auto">
                                                {item?.address}
                                            </td>
                                            <td scope="col" className="px-6 py-7 max-w-[180px] mx-auto">
                                                {item?.latitude}
                                            </td>
                                            <td scope="col" className="px-6 py-7">
                                                {item?.time}
                                            </td>
                                            <td scope="col" className="px-6 py-7 max-w-[200px] mx-auto">
                                                {item?.visita}
                                            </td>
                                            <td scope="col" className="px-6 py-7 max-w-[200px] mx-auto">
                                                {item?.marcar}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="lg:hidden block">
                        {tableCol.map((item, index) => {
                            const backgroundColor = index % 2 === 1 ? "#F0F0F0" : "#F6F6F6";
                            return (
                                <div
                                    className="px-6 py-3"
                                    key={index}
                                    style={{ backgroundColor }}
                                >
                                    <h3 className="text-[#999999] text-sm">Address:</h3>
                                    <p className="mb-5 mt-1">{item.address}</p>
                                    <h3 className="text-[#999999] text-sm">
                                        Latitude and Longitude:
                                    </h3>
                                    <p className="mb-5 mt-1">{item.latitiude}</p>
                                    <h3 className="text-[#999999] text-sm">
                                        Latitude e longitude:
                                    </h3>
                                    <Image
                                        src={"google-map.svg"}
                                        alt={"img"}
                                        width={30}
                                        height={0}
                                        className="cursor-pointer mb-5 mt-1"
                                    />
                                    <h3 className="text-[#999999] text-sm">Hora do local:</h3>
                                    <p className="mb-5 mt-1">{item.time}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="max-w-[180px] px-3 mb-6 md:mb-6">
                        <div className="relative">
                            <select
                                className="block appearance-none text-sm w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option>Mostrar 10 entradas</option>
                                <option>Mostrar 50 entradas</option>
                                <option>Mostrar 100 entradas</option>
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
                                    <option>Inglês</option>
                                    <option>Alemã</option>
                                    <option>Russa</option>
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
                            Direitos autorais © 2023 FamiSoft Limited. Todos os direitos reservados. |
                            <span className="text-[#828AE6]">Entre em contato com o suporte</span> |{" "}
                            <span className="text-[#828AE6]">Peça um reembolso</span>
                        </p>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default Location;

const row = [
    {
        address: "https://www.akc.org/register/dog/  ",
        latitude: " How to register a dog with the AKC? 	 ",
        time: "3",
        visita: ' 2023-02-07 11:29:05AM ',
        marcar: ' Não adicionado '
    },
    {
        address: "https://www.akc.org/register/dog/  ",
        latitude: " How to register a dog with the AKC? 	 ",
        time: "3",
        visita: ' 2023-02-07 11:29:05AM ',
        marcar: ' Não adicionado '
    },
    {
        address: "https://www.akc.org/register/dog/  ",
        latitude: " How to register a dog with the AKC? 	 ",
        time: "3",
        visita: ' 2023-02-07 11:29:05AM ',
        marcar: ' Não adicionado '
    },
    {
        address: "https://www.akc.org/register/dog/  ",
        latitude: " How to register a dog with the AKC? 	 ",
        time: "3",
        visita: ' 2023-02-07 11:29:05AM ',
        marcar: ' Não adicionado '
    },
    {
        address: "https://www.akc.org/register/dog/  ",
        latitude: " How to register a dog with the AKC? 	 ",
        time: "3",
        visita: ' 2023-02-07 11:29:05AM ',
        marcar: ' Não adicionado '
    },
];

const tableCol = [
    {
        address: "https://www.akc.org/register/dog/ ",
        latitiude: " How to register a dog with the AKC? 	",
        time: "2023-02-0711:29:05AM",
    },
    {
        address: "https://www.akc.org/register/dog/ ",
        latitiude: " How to register a dog with the AKC? 	",
        time: "2023-02-0711:29:05AM",
    },
    {
        address: "https://www.akc.org/register/dog/ ",
        latitiude: " How to register a dog with the AKC? 	",
        time: "2023-02-0711:29:05AM",
    },
    {
        address: "https://www.akc.org/register/dog/ ",
        latitiude: " How to register a dog with the AKC? 	",
        time: "2023-02-0711:29:05AM",
    },
    {
        address: "https://www.akc.org/register/dog/ ",
        latitiude: " How to register a dog with the AKC? 	",
        time: "2023-02-0711:29:05AM",
    },
    {
        address: "https://www.akc.org/register/dog/ ",
        latitiude: " How to register a dog with the AKC? 	",
        time: "2023-02-0711:29:05AM",
    },
];