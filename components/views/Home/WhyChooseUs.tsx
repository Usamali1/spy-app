import ChooseCard from "@/components/common/ChooseCard";
import { CiUser } from "react-icons/ci";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { AiOutlineStar } from "react-icons/ai";
import bgImg from '../../../public/choose.png'

const WhyChooseUs = () => {
  return (
    <div className="background4 pt-28 mb-28 max-sm:pt-9 max-sm:mb-10"
      style={{
        backgroundImage: `url(${bgImg.src})`
      }}>
      <h1 className="text-[#383C43] text-4xl font-bold text-center mb-24 max-sm:text-2xl max-sm:font-semibold max-sm:mb-10">
      Por que escolher o Spyzie?
      </h1>
      <div className="container mx-auto gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <ChooseCard
                icon={item.icon}
                heading={item.heading}
                para={item.para}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;

const data = [
  {
    icon: <AiOutlineStar />,
    heading: "Prioridade à Segurança",
    para: "Não há chance de seus dados serem roubados com a criptografia de classe mundial do Spyzie.",
  },

  {
    icon: <AiOutlineSecurityScan />,
    heading: "100% oculton",
    para: "Ninguém pode descobrir que você está monitorando o telefone deles.",
  },

  {
    icon: <TfiCup />,
    heading: "Mais popular",
    para: "Inúmeras críticas positivas por meios de comunicação de autoridade.",
  },
  {
    icon: <CiUser />,
    heading: "Atendimento ao cliente 24/7",
    para: "O Spyzie fornece resolução de problemas 24 horas por dia, 7 dias por semana.",
  },
];
