import { CiUser } from "react-icons/ci";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { MdBrowseGallery } from "react-icons/md";
import { GiStealthBomber } from "react-icons/gi";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Link from "next/link";

const Features = () => {
  return (
    <div className="mb-24 max-sm:mb-10 max-w-5xl mx-auto">
      <h2 className="text-[#383C43] text-2xl text-center mb-14 max-sm:mb-8 max-sm:text-base">
        {" "}
        <b>Outras funções disponíveis para rastreamento de celular</b>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16 px-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card icon={item.icon} heading={item.heading} para={item.para} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href={'/dashboard'}>   <Button
          title="Mais Funções"
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
  );
};

export default Features;

const data = [
  {
    icon: <CiUser />,
    heading: "Contato",
    para: "Veja todas as pessoas que eles salvaram em sua lista de contatos com detalhes.",
  },
  {
    icon: <AiOutlineWhatsApp />,
    heading: "Whatsapp Monitor",
    para: "Veja todas as suas mensagens do WhatsApp, incluindo as apagadas.",
  },
  {
    icon: <MdOutlineCall />,
    heading: "Registro de chamadas",
    para: "Veja todo o histórico de chamadas junto com os detalhes de cada chamada.",
  },
  {
    icon: <BsGeoAlt />,
    heading: "Cerca geográfica",
    para: "Defina limites restritos em um mapa virtual para sua localização.",
  },
  {
    icon: <MdBrowseGallery />,
    heading: "Histórico do navegador",
    para: "Veja todos os sites que eles visitaram, com frequência de visita.",
  },
  {
    icon: <GiStealthBomber />,
    heading: "Modo furtivo",
    para: "O Spyzie é 100% oculto e invisível para que você nunca seja pego.",
  },
];
