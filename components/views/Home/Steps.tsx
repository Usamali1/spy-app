import Button from "@/components/common/Button";
import Step from "@/components/common/Step";
import Image from "next/image";
import homeBg from '../../../public/home.png'
import Link from "next/link";
const Steps = () => {
  return (
    <div className="w-full background2"
      style={{
        backgroundImage: `url(${homeBg.src})`
      }}>
      <div className="container">
        <div className="pt-28 pb-52 max-sm:pt-14 max-sm:pb-28">
          <div className="flex max-w-5xl ml-24 justify-between max-sm:grid max-sm:max-w-full max-sm:px-5 max-sm:ml-0">
            <div className="w-[400px] max-sm:w-auto">
              <h2 className="text-3xl font-bold text-white mb-10 text-center max-sm:text-2xl max-sm:mb-6 max-sm:font-semibold">
                Veja como é fácil saber o comportamento dos seus filhos no uso do aparelho monitorado.
              </h2>
              <div className="mx-auto flex justify-center">
                <Image
                  className="max-sm:hidden"
                  src={"/hometp.svg"}
                  alt={"img"}
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div>
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <Step
                      icon={item.icon}
                      heading={item.heading}
                      para={item.para}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;

const data = [
  {
    icon: <Image src={"/start0.png"} alt={"img"} width={50} height={0} />,
    heading: "Inscrever-se",
    para: "Crie uma conta gratuita do Spyzie com seu e-mail.",
  },
  {
    icon: <Image src={"/start1.png"} alt={"img"} width={50} height={0} />,
    heading: "Configurar o Spyzie",
    para: "O assistente de configuração do Spyzie irá guiá-lo através do processo de configuração.",
  },
  {
    icon: <Image src={"/start2.png"} alt={"img"} width={50} height={0} />,
    heading: "Iniciar monitoramento",
    para: "Acesse o painel do Spyzie e veja todos os seus dados.",
  },
];
