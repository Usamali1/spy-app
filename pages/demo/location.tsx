import React from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import Dashboard from "@/components/views/Dashboard";

const Location = () => {
  return (
    <Dashboard>
      <div className="bg-[#F4F4F4] px-0 lg:px-8 py-4 w-full">
        <div className="flex justify-between items-center mb-6 px-4">
          <h1 className="text-[#3B3B3B] text-xl">Localização</h1>
          <div className="flex gap-3 items-center">
            <h1 className="text-[#3B3B3B] text-base">demo@spyzie.io</h1>
            <AiOutlineDown className="text-base text-[#3B3B3B]" />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1658950602596!2d106.64041327454063!3d10.798603089351538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294e68cd47f7%3A0xb6d90a95a451ab56!2zMzIwIFRyxrDhu51uZyBDaGluaCwgUGjGsOG7nW5nIDEzLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1683283580760!5m2!1sen!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
          ></iframe>
        </div>
        <div className="w-full">
          <div className="lg:block hidden">
            <table className="w-full mb-9  ">
              <thead className="border-[1px] w-full bg-white text-left">
                <tr className="w-full">
                  <th scope="col" className=" px-6 py-6">
                    Endereço
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Latitude e longitude
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Mapa do Google
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {row.map((item, index) => {
                  return (
                    <tr className="w-[100%] border-[1px] text-left" key={index}>
                      <td scope="col" className="px-6 py-7 ">
                        {item?.address}
                      </td>
                      <td scope="col" className="px-6 py-7">
                        {item?.latitude}
                      </td>
                      <Link target="_blank" href="https://bit.ly/3nspYBc">
                        <td
                          scope="col"
                          className="px-6 py-7 flex justify-center"
                        >
                          <Image
                            src={"google-map.svg"}
                            alt={"img"}
                            width={30}
                            height={0}
                            className="cursor-pointer"
                          />
                          ,
                        </td>
                      </Link>
                      <td scope="col" className="px-6 py-7">
                        {item?.time}
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
    address: "375 James St, New Haven, CT 06513 ",
    latitude: "41.3130335,-72.9037375 ",
    time: "2023-02-0610:29:05PM",
  },
  {
    address: "375 James St, New Haven, CT 06513 ",
    latitude: "41.3130335,-72.9037375 ",
    time: "2023-02-0610:29:05PM",
  },
  {
    address: "375 James St, New Haven, CT 06513 ",
    latitude: "41.3130335,-72.9037375 ",
    time: "2023-02-0610:29:05PM",
  },
  {
    address: "375 James St, New Haven, CT 06513 ",
    latitude: "41.3130335,-72.9037375 ",
    time: "2023-02-0610:29:05PM",
  },
  {
    address: "375 James St, New Haven, CT 06513 ",
    latitude: "41.3130335,-72.9037375 ",
    time: "2023-02-0610:29:05PM",
  },
];

const tableCol = [
  {
    address: "375 James St, New Haven, CT 06513",
    latitiude: "41.3130335,-72.9037375",
    time: "2023-02-0711:29:05AM",
  },
  {
    address: "375 James St, New Haven, CT 06513",
    latitiude: "41.3130335,-72.9037375",
    time: "2023-02-0711:29:05AM",
  },
  {
    address: "375 James St, New Haven, CT 06513",
    latitiude: "41.3130335,-72.9037375",
    time: "2023-02-0711:29:05AM",
  },
  {
    address: "375 James St, New Haven, CT 06513",
    latitiude: "41.3130335,-72.9037375",
    time: "2023-02-0711:29:05AM",
  },
  {
    address: "375 James St, New Haven, CT 06513",
    latitiude: "41.3130335,-72.9037375",
    time: "2023-02-0711:29:05AM",
  },
  {
    address: "375 James St, New Haven, CT 06513",
    latitiude: "41.3130335,-72.9037375",
    time: "2023-02-0711:29:05AM",
  },
];