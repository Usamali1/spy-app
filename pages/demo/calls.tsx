import React from "react";
import Image from "next/image";
import Dashboard from "@/components/views/Dashboard";

const CallsPage = () => {
  return (
    <Dashboard>
      <div className="w-full h-full">
        <div className="bg-[#F4F4F4] px-0 lg:px-8 py-4 w-full h-full">
          <div className="w-full lg:block ">
            <table className="w-full mb-9">
              <thead className="border-[1px] bg-white text-left w-full">
                <tr className="w-full">
                  <th scope="col" className=" px-6 py-6">
                    Nome
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Número de telefone
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Duração
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Data
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Tipo de chamada
                  </th>
                </tr>
              </thead>
              <tbody>
                {row.map((item, index) => {
                  return (
                    <tr className="w-[100%] border-[1px] text-left" key={index}>
                      <td scope="col" className="px-6 py-7 ">
                        <div className="flex gap-3 items-center">
                          <Image
                            src={item?.img}
                            alt={"img"}
                            width={40}
                            height={0}
                            className="cursor-pointer"
                          />
                          {item?.name}
                        </div>
                      </td>
                      <td scope="col" className="px-6 py-7">
                        {item?.phone}
                      </td>
                      <td scope="col" className="px-6 py-7">
                        {item?.duration}
                      </td>
                      <td scope="col" className="px-6 py-7">
                        {item?.date}
                      </td>
                      <td scope="col" className="px-6 py-7">
                        {item?.callType}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="lg:hidden block">
              {tableCol.map((item, index) => {
                const backgroundColor = index % 2 === 1 ? "#F0F0F0" : "#F6F6F6";
                return (
                  <div
                    className="px-6 py-3"
                    key={index}
                    style={{ backgroundColor }}
                  >
                    <div className="flex gap-3 items-center my-4">
                      <Image
                        src={item?.img}
                        alt={"img"}
                        width={40}
                        height={0}
                        className="cursor-pointer"
                      />
                      {item?.name}
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item?.img}
                        alt={"img"}
                        width={40}
                        height={0}
                        className="cursor-pointer"
                      />
                      {item?.name}
                    </div>
                    <h3 className="text-[#999999] text-sm">Phone:</h3>
                    <p className="mb-5 mt-1">{item.phone}</p>
                    <h3 className="text-[#999999] text-sm">Duration:</h3>
                    <p className="mb-5 mt-1">{item.duration}</p>
                    <h3 className="text-[#999999] text-sm">Date:</h3>
                    <p className="mb-5 mt-1">{item.date}</p>
                    <h3 className="text-[#999999] text-sm">Call Type:</h3>
                    <p className="mb-5 mt-1">{item.callType}</p>
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
                    <Image
                      src={"/ball.png"}
                      alt={"img"}
                      width={15}
                      height={0}
                    />
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
      </div>
    </Dashboard>
  );
};

export default CallsPage;

const row = [
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213 ",
    duration: "20m 26s ",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Virginia ",
    img: "/virginia.png",
    phone: "(516) 365-3213 ",
    duration: "20m 26s ",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Tom ",
    img: "/virginia.png",
    phone: "(516) 365-3213 ",
    duration: "20m 26s ",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Jerry ",
    img: "/jerry.png",
    phone: "(516) 365-3213 ",
    duration: "20m 26s ",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213 ",
    duration: "20m 26s ",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
];

const tableCol = [
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213",
    duration: "20m 26s",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213",
    duration: "20m 26s",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213",
    duration: "20m 26s",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213",
    duration: "20m 26s",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213",
    duration: "20m 26s",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
  {
    name: "Catherine ",
    img: "/catherine.png",
    phone: "(516) 365-3213",
    duration: "20m 26s",
    date: "2023-02-07 11:29:05AM",
    callType: "Ausente",
  },
];