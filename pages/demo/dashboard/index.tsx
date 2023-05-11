import React from "react";
import { MdOutlineCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { VscHistory } from "react-icons/vsc";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiVideo } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import CallContact from "../../../components/common/CallContact";
import { AiOutlineRight } from "react-icons/ai";
import Callmessages from "../../../components/common/Callmessages";
import Phoneactivity from "../../../components/common/Phoneactivity";
import Dashboard from "@/components/views/Dashboard";


const DashboardPage = () => {
  return (
    <div>
      <Dashboard>
        <div className="bg-[#F4F4F4] px-10 py-4 w-full max-sm:px-5  ">
          <div className="flex justify-between items-center mb-6 max-sm:mb-4 max-sm:px-auto max-sm:w-[100%] max-sm:gap-16 ">
            <h1 className="text-[#3B3B3B] text-xl max-sm:text-base">Painel</h1>
            <div className="flex gap-3 items-center w-[100%]">
              <h1 className="text-[#3B3B3B] text-base max-sm:text-sm">demo@spyzie.io</h1>
              <AiOutlineDown className="text-base text-[#3B3B3B] max-sm:text-sm" />
            </div>
          </div>

          <div className="bg-white border-[1px] p-2 mb-7 max-sm:w-full max-sm:px-4  ">
            <h3 className="text-[#3B3B3B] text-xl font-[400px] mb-7 mx-sm:text-base max-sm:font-[200px]">
              Informação de dispositivo
            </h3>
            <div className="flex  gap-2 items-center mb-7 max-sm:w-full max-sm:mb-5">
              <DiAndroid className="text-2xl max-sm:text-lg text-[#6B7C93] " />
              <p className="text-[#4A3060] text-base max-sm:text-sm">
                {" "}
                <span className="text-[#6B7C93] text-base max-sm:text-sm">
                  {" "}
                  Modelo do dispositivo :{" "}
                </span>{" "}
                Samsung Galaxy S8
              </p>
            </div>
            <div className="flex  gap-2 items-center max-sm:w-full mb-7">
              <AiOutlineCalendar className="text-2xl max-sm:text-lg text-[#6B7C93] " />
              <p className="text-[#4A3060] text-base max-sm:text-sm">
                {" "}
                <span className="text-[#6B7C93] text-base max-sm:text-sm">
                  Versão do sistema operacional do dispositivo :
                </span>{" "}
                10.0
              </p>
            </div>
            <div className="text-[#6B7C93]  text-sm max-sm:text-xs">
              * O Spyzie sincronizará as informações do dispositivo a cada 30 minutos.
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-8 max-sm:mb-5 w-full">
            <div className="bg-white px-4 pt-3 pb-8  rounded-[4px] h-full max-w-[475px] w-full">
              <div className=" flex justify-between  rounded-t-[5px] mb-8 max-sm:mb-5 max-sm:w-full">
                <h3 className="text-[#3B3B3B] text-xl max-sm:text-base">
                  5 contatos recentes que mais ligam
                </h3>
                <AiOutlineRight />
              </div>
              {row.map((item, index) => {
                return (
                  <div key={index}>
                    <CallContact
                      picture={item.picture}
                      name={item.name}
                      PhoneNo={item.PhoneNo}
                      progresbar={item.progresbar}
                      number={item.number}
                    />
                  </div>
                );
              })}
            </div>

            <div>
              <div className="bg-white flex justify-between py-3 px-5 max-w-[475px] w-full rounded-t-[5px]">
                <h1>Último Painel Conhecido</h1>
                <AiOutlineRight />
              </div>
              <div className="h-full">
                <Image
                  className="h-[390px]"
                  src={"/map.jpg"}
                  alt={"img"}
                  width={470}
                  height={440}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-14">
            <div className="bg-white px-4 pt-3 pb-5 rounded-[4px] max-w-[475px] w-full">
              <div className=" mb-8">
                <h3 className="text-[#3B3B3B] text-xl">
                  5 mensagens mais recentes
                </h3>
              </div>
              {people.map((item, index) => {
                return (
                  <div key={index}>
                    <Callmessages
                      picture={item.picture}
                      name={item.name}
                      PhoneNo={item.PhoneNo}
                      progresbar={item.progresbar}
                      number={item.number}
                    />
                  </div>
                );
              })}
            </div>

            <div className="bg-white px-4 pt-3 pb-5 rounded-[4px] max-w-[475px] w-full">
              <div className=" mb-8">
                <h3 className="text-[#3B3B3B] text-xl">Atividades telefônicas</h3>
              </div>
              {activity.map((item, index) => {
                return (
                  <div key={index}>
                    <Phoneactivity
                      icon={item.icon}
                      title={item.title}
                      progresbar={item.progresbar}
                      number={item.number}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-52 items-center max-sm:grid max-sm:gap-5 ">
            <button className="flex gap-3 border-[1px] rounded-[5px] bg-white border-[#F0F0F0] py-1 px-3 items-center">
              <Image src={"/ball.jpg"} alt={"img"} width={15} height={0} />
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
      </Dashboard>
    </div>

  );
};

export default DashboardPage;


const row = [
  {
    name: "Virginia ",
    PhoneNo: "(516) 365-3213 ",
    picture: "/photo2.jpg",
    progresbar: 15,
    number: "4",
  },
  {
    name: "Joe  ",
    PhoneNo: "(856) 459-5330 ",
    picture: "/photo2.jpg",
    progresbar: 10,
    number: "2",
  },
  {
    name: "Jerry ",
    PhoneNo: "(217) 590-0116 ",
    picture: "/photo2.jpg",
    progresbar: 10,
    number: "2",
  },
  {
    name: "Dennis ",
    PhoneNo: "(562) 470-6451",
    picture: "/photo2.jpg",
    progresbar: 2,
    number: "1",
  },

  {
    name: "Joe ",
    PhoneNo: "812-936-4030 ",
    picture: "/photo2.jpg",
    progresbar: 2,
    number: "1",
  },
];

const people = [
  {
    name: "Virginia ",
    PhoneNo: "(516) 365-3213 ",
    picture: "/photo2.jpg",
    progresbar: 15,
    number: "8",
  },
  {
    name: "Joe  ",
    PhoneNo: "(856) 459-5330 ",
    picture: "/photo2.jpg",
    progresbar: 10,
    number: "7",
  },
  {
    name: "Jerry ",
    PhoneNo: "(217) 590-0116 ",
    picture: "/photo2.jpg",
    progresbar: 10,
    number: "7",
  },
  {
    name: "Dennis ",
    PhoneNo: "(562) 470-6451",
    picture: "/photo2.jpg",
    progresbar: 2,
    number: "1",
  },

  {
    name: "Joe ",
    PhoneNo: "812-936-4030 ",
    picture: "/photo2.jpg",
    progresbar: 2,
    number: "1",
  },
];

const activity = [
  {
    title: "Chamadas ",

    icon: <MdOutlineCall />,
    progresbar: 50,
    number: "25",
  },
  {
    title: "Mensagens  ",

    icon: <FaWhatsapp />,
    progresbar: 50,
    number: "27",
  },
  {
    title: "Localizações",

    icon: <VscHistory />,
    progresbar: 30,
    number: "8",
  },
  {
    title: "Fotos ",

    icon: <HiOutlinePhotograph />,
    progresbar: 40,
    number: "22",
  },

  {
    title: "Videos ",

    icon: <FiVideo />,
    progresbar: 35,
    number: "16",
  },
];
