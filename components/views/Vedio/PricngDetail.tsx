import React from "react";
import { TiTick } from "react-icons/ti";

import { DiAndroid } from "react-icons/di";
import PricingCard from "@/components/common/PricingCard";
import Image from "next/image";

const PricngDetail = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-[#6b7c93] text-base flex justify-center gap-1 items-center mb-3">
        <DiAndroid />
        <p>Monitoramento do Android</p>
      </div>
      <p className="text-center text-[#6c7c92] text-sm mb-14">(Sem raiz)</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-7 mb-10 ">
        {data.map((item, index) => {
          return (
            <div key={index} className="max-w-sm mx-auto">
              <PricingCard
                title={item.title}
                value={item.value}
                month={item.month}
                device={item.device}
                One_Month={item.One_Month}
                Three_Month={item.Three_Month}
                Tweleve_Month={item.Tweleve_Month}
                button={item.button}
                required={item.required}
                color={item.color}
                check_Box={item.check_Box}
                ColorText={item.ColorText}
                root_title={item.root_title}
                para={item.para}
                icon={item.icon}
                fetures={item.fetures}
              />
            </div>
          );
        })}
      </div>
      <p className=" text-center text-[#3B3B3B] text-sm mb-8">
        Secure online payment:
      </p>
      <div className=" flex justify-center  mb-28">
        <Image src={"/payment.png"} alt={"img"} width={330} height={50} />
      </div>
    </div>
  );
};

export default PricngDetail;
const data = [
  {
    title: "Básica",
    value: 39.99,
    month: (
      <h2 className="text-[#6C7C92] text-xl font-bold text-center mb-6 ">
        <s>$49.99</s>/ Mês{" "}
      </h2>
    ),
    device: "Para 1 dispositivo",
    ColorText: "#6C7C92",
    check_Box: "",
    One_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        {" "}
        Licença de 1 mês $39.99／
        <s className="text-base text-[#6C7C92]">$49.99</s>
      </h3>
    ),
    Three_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 3 mês $59.99／
        <s className="text-base text-[#6C7C92]">$149.99</s>
      </h3>
    ),
    Tweleve_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 12 mês $99.99／{" "}
        <s className="text-base text-[#6C7C92]">$599.99</s>{" "}
      </h3>
    ),
    button: "Comprar agora",
    required: "Necessário: acesso físico ao telefone Android de destino.",
    color: "#91A3F2",
    icon: <TiTick />,
    para: "Registro de chamadas",
    root_title: "Monitoramento básico do Android. (Sem Root)",
    fetures: [
      "Registro de chamadas",
      "Mensagens de texto",
      "Location(Real-Time)",
      "Localização (tempo real)",
      "Histórico do navegador",
      "Favoritas(feminine)",
      "Fotos",
      "Visualização de vídeos",
    ],
  },
  {
    title: "Prêmio",
    value: 9.99,
    month: (
      <h2 className="text-[#6C7C92] text-xl font-bold text-center mb-6 ">
        <s>$69.99</s>/ Mês{" "}
      </h2>
    ),
    device: "Para 1 dispositivo",

    ColorText: "#6C7C92",
    One_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 1 mês $49.99／
        <s className="text-base text-[#6C7C92]">$69.99</s>
      </h3>
    ),
    Three_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 3 mês $69.99／{" "}
        <s className="text-base text-[#6C7C92]">$209.99</s>
      </h3>
    ),
    Tweleve_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 12 mês $119.99／
        <s className="text-base text-[#6C7C92]">$839.99</s>
      </h3>
    ),
    button: "Comprar agora",
    required: "Necessário: acesso físico ao telefone Android de destino.",
    color: "#F77062",
    icon: <TiTick />,
    para: "Call Logs",
    root_title: "Monitoramento Android Premium. (Sem Root)",
    fetures: [
      "Registro de chamadas",
      "Mensagens de texto",
      "Location(Real-Time)",
      "Localização (tempo real)",
      "Histórico do navegador",
      "Favoritas(feminine)",
      "Fotos",
      "Visualização de vídeos",
      "SIM Card Location",
      "Localização do cartão SIM",
      "Keylogger",
      "Fotos",
      "Facebook",
      "Mensageira(feminine)",
      "Facebook Lite",
      "Mensageiro Lite",
      "Tumblr",
      "WhatsApp",
      "Skype",
      "Snapchat",
      "Telegram",
      "Instagram",
      "bate-papo",
      "Inflamável",
      "QQ",
      "Kik",
      "POF",
      "Badoo",
    ],
  },
  {
    title: "Família",
    value: 69.99,
    month: (
      <h2 className="text-[#6C7C92] text-xl font-bold text-center mb-6 ">
        <s>$89.99</s>/ Mês{" "}
      </h2>
    ),
    device: "Para 1 dispositivo",
    ColorText: "#6C7C92",
    One_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 1 mês $39.99／
        <s className="text-base text-[#6C7C92]">$49.99</s>
      </h3>
    ),
    Three_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 3 mês $59.99／
        <s className="text-base text-[#6C7C92]">$149.99</s>
      </h3>
    ),
    Tweleve_Month: (
      <h3 className="text-[#424770] text-lg font-bold">
        Licença de 12 mês $99.99／
        <s className="text-base text-[#6C7C92]">$599.9</s>
      </h3>
    ),
    button: "Comprar agora",
    required: "Necessário: acesso físico ao telefone Android de destino.",
    color: "#91A3F2",
    icon: <TiTick />,
    para: "Registro de chamadas",
    root_title: (
      <h3>
        Solução premium de monitoramento Android <br /> para 3 dispositivos.(Sem Root){" "}
      </h3>
    ),
    fetures: [
      "Registro de chamadas",
      "Mensagens de texto",
      "Location(Real-Time)",
      "Localização (tempo real)",
      "Histórico do navegador",
      "Favoritas(feminine)",
      "Fotos",
      "Visualização de vídeos",
      "SIM Card Location",
      "Localização do cartão SIM",
      "Keylogger",
      "Fotos",
      "Facebook",
      "Mensageira(feminine)",
      "Facebook Lite",
      "Mensageiro Lite",
      "Tumblr",
      "WhatsApp",
      "Skype",
      "Snapchat",
      "Telegram",
      "Instagram",
      "bate-papo",
      "Inflamável",
      "QQ",
      "Kik",
      "POF",
      "Badoo",
    ],
  },
];
