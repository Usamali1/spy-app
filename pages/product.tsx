import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Remote from "../components/common/Step";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { MdBrowseGallery } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GiStealthBomber } from "react-icons/gi";
import bgImg from '../public/home.png'
import Link from "next/link";

const Product = () => {
  return (
    <Layout>
      {/* application start */}
      <div className="landingpage pt-14 md:pt-20 pb-36 md:pb-48 border-t-[1px] mb-16 px-4">
        <div className="flex md:flex-row flex-col justify-between items-center w-full md:max-w-[1050px] mx-auto">
          <div>
            <h1 className="text-[#4B4B4B] text-2xl md:text-4xl font-medium mb-7">
              #1 Aplicativo de Monitoramento para Android
            </h1>
            <ul className="text-[#4B4B4B] text-base font-normal list-disc pb-8 pl-3">
              <li className="mb-1">
                Monitore dispositivos Android de destino com conveniência de qualquer navegador.
              </li>
              <li className="mb-1">
                Visualize todas as atividades e mensagens de mídia social deles.
              </li>
              <li className="mb-1">
                Rastreie a localização ao vivo e o histórico de localização 24x7.
              </li>
              <li className="mb-1">
                Leva apenas alguns minutos para configurar pela primeira vez.
              </li>
              <li className="mb-1">{`Nunca seja pego monitorando o telefone de alguém.`}</li>
              <li className="mb-1">
                Todo o monitoramento Android acontece sem a necessidade de root.
              </li>
            </ul>

            <div className="flex justify-start items-center gap-3 text-sm">
              <Button
                title="Inscreva-se"
                backgroundColor="#ffffff"
                color="#91a3f2"
                border="#91a3f2"
                padding={"8px 24px"}
                size={"14px"}
                weight={"400"}
              />
              <Link href={"/dashboard"}>
                <Button
                  title="Ver demonstração"
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
          <div className="mt-10 md:mt-0">
            <Image
              src={"/producthero.png"}
              alt={"img"}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* application end */}

      {/* feature cards */}
      <div className="container">
        <div className="mb-24 max-sm:mb-10">
          <h2 className="text-[#4B4B4B] text-[36px] text-center font-[400px] mb-14 max-sm:mb-8 max-sm:text-base">
            {" "}
            Recursos Android do Spyzie
          </h2>
          <div className="grid grid-col-1 md:grid-cols-3 gap-11 mb-12 max-sm:grid sm:grid-cols-2">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    icon={item.icon}
                    heading={item.heading}
                    para={item.para}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Link href={"/dashboard"}>
              <Button
                title="Tente agora"
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
      </div>
      {/* feature cards end */}
      {/* steps */}
      <div className=" pt-24 pb-52 max-sm:pt-16 max-sm:pb-36"
        style={{
          backgroundImage: `url(${bgImg.src})`
        }}>
        <div className="container">
          <div className="">
            <div className="flex max-w-5xl ml-24 justify-between max-sm:grid max-sm:max-w-full max-sm:px-5 max-sm:ml-0">
              <div className="w-[400px] max-sm:w-auto">
                <h2 className="text-3xl font-[700px] text-white mb-10 text-center max-sm:text-xl max-sm:mb-6 max-sm:font-[500px]">
                  Monitoramento remoto em 3 etapas fáceis
                </h2>
                <div className="mx-auto flex justify-center">
                  <Image
                    className="max-sm:hidden"
                    src={"hometp.svg"}
                    alt={"img"}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div>
                {Steps.map((item, index) => {
                  return (
                    <div key={index}>
                      <Remote
                        icon={item.icon}
                        heading={item.heading}
                        para={item.para}
                      />
                    </div>
                  );
                })}
                <div className="md:mt-0 mt-5">
                  <Link href={"/pricing"}>
                    <Button
                      title="View our pricing here"
                      backgroundColor="#ffffff"
                      color="#f5a7a7"
                      border="#ffffff"
                      padding={"11px 40px"}
                      size={"14px"}
                      weight={"400"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* steps end */}
      {/* solution */}
      <div className="w-full pt-28">
        <div className="container">
          <h2 className="text-[#4B4B4B] text-4xl text-center font-normal mb-14">
            Spyzie: a solução completa de monitoramento de Android
          </h2>
          <div className="flex md:flex-row flex-col gap-6 max-w-6xl mx-auto justify-between items-center pb-12">
            <div>
              <Image src={"/spyapp.jpg"} alt={"img"} width={290} height={290} />
            </div>
            <div className="md:text-left text-center">
              <p className="text-[#3B3B3B] text-xl font-[700px] mb-7">
                Mantenha seus filhos seguros
              </p>
              <p className="text-[#6B7C93] text-base font-[400px]">
                As crianças nunca estão seguras, especialmente quando estão no
                Internet. Mundo online tem crime cibernético, <br />
                predadores online e más influências. Use o Spyzie e proteja
                seus filhos de todas essas coisas.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-6 max-w-6xl mx-auto justify-between items-center mb-40">
            <div className="md:text-left text-center md:order-first order-last">
              <p className="text-[#3B3B3B] text-xl font-[700px] mb-7">
                Proteja seu negócio              </p>
              <p className="text-[#6B7C93] text-base font-[400px]">
                Para tornar um negócio bem-sucedido, você precisa de funcionários leais.
                No entanto, sempre há pessoas <br />
                relaxando ou compartilhando os segredos da sua {`empresa`} com
                concorrentes. Use o Spyzie para pegar essas pessoas <br /> e pegue
                ação antes de {`é`}
                tarde.
              </p>
            </div>
            <div className="md:order-last order-first">
              <Image
                src={"/androidspy.jpg"}
                alt={"img"}
                width={290}
                height={290}
              />
            </div>
          </div>
        </div>
      </div>
      {/* solution end */}
      {/* started now */}

      <div className="pb-10 background3">
        <div className="container">
          <div className="flex max-w-3xl mx-auto gap-24 max-sm:grid max-sm:gap-5 pb-20">
            <div className="flex justify-center">
              <Image
                src={"/moneyback1.png"}
                alt={"img"}
                width={400}
                height={200}
              />
            </div>
            <div className="max-sm:text-center">
              <h2 className="text-[#383C43] text-4xl mb-9 font-[700px] max-sm:text-xl max-sm:mb-6 max-sm:font-[500px]">
                Comece agora
              </h2>
              <p className="text-[#6B7C93] text-lg mb-8 max-sm:text-base max-sm:mb-6">
                Proteja seus relacionamentos, pessoas e interesses. dinheiro de 60 dias
                garantia de volta.
              </p>
              <div className="flex gap-5 text-sm max-sm:grid max-sm:gap-3 ">
                <div className="max-sm:flex max-sm:justify-center">
                  <button className="bg-white border-[#3b3f86] border-2 py-2 px-7 text-sm rounded-[50px] text-[#323685] max-sm:w-[200px]">
                    {" "}
                    inscrever-se
                  </button>
                </div>
                <div>
                  <Link href={'/dashboard'}>  <button className="text-white  bg-[#35398b] text-sm py-2 px-7 rounded-[50px] max-sm:w-[200px]">
                    {" "}
                    Ver demonstração
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* started now end */}
    </Layout>
  );
};

export default Product;
const data = [
  {
    icon: <CiUser />,
    heading: "Contato",
    para: "Veja todas as pessoas que eles têm salvas em sua lista de contatos com detalhes.",
  },
  {
    icon: <AiOutlineWhatsApp />,
    heading: "Mensageiro do WhatsApp",
    para: "Veja todas as pessoas que eles têm salvas em sua lista de contatos com detalhes.",
  },
  {
    icon: <MdOutlineCall />,
    heading: "Registros de chamadas",
    para: "Veja todos os registros de chamadas, incluindo os números discados e recebidos e duração da chamada.",
  },
  {
    icon: <BsGeoAlt />,
    heading: "Geo Fence",
    para: "Defina cercas geográficas para ser alertado quando o dispositivo monitorado entrar ou sair de uma área especificada.",
  },
  {
    icon: <MdBrowseGallery />,
    heading: "Histórico do navegador",
    para: "Veja todo o histórico de navegação na web e os sites visitados com data e hora.",
  },
  {
    icon: <GiStealthBomber />,
    heading: "Modo furtivo",
    para: "Monitore sem ser detectado. O aplicativo pode ser ocultado da tela inicial e do menu de aplicativos do dispositivo monitorado.",
  },
];

const Steps = [
  {
    icon: <Image src={"/start0.png"} alt={"img"} width={50} height={0} />,
    heading: "Inscreva-se",
    para: "Crie uma conta gratuita no Spyzie com seu e-mail.",
  },
  {
    icon: <Image src={"/start1.png"} alt={"img"} width={50} height={0} />,
    heading: "Configure o Spyzie",
    para: "O assistente de configuração do Spyzie irá guiá-lo pelo processo de configuração.",
  },
  {
    icon: <Image src={"/start2.png"} alt={"img"} width={50} height={0} />,
    heading: "Comece a monitorar",
    para: "Acesse o painel do Spyzie e visualize todos os dados.",
  },
];