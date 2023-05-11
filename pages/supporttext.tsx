import Layout from "@/components/Layout";
import { BiMessageRoundedDots } from "react-icons/bi";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { GrInstall } from "react-icons/gr";
import { GrTroubleshoot } from "react-icons/gr";
import { SiKnowledgebase } from "react-icons/si";
import Suppo from "../components/Suppo";

const support = () => {
  
  return (
    <div>
      <Layout>
        <div className="bg-[#F6FBFD] py-16 text-center  text-[#4B4B4B] text-3xl sm:text-[48px] font-[700px] mb-16 px-5">
          <h1>Centro de Suporte Spyzie</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-[950px] mx-auto mb-16 px-5">
          {list.map((item, index) => {
            return (
              <div key={index}>
                <Suppo
                  icon={item.icon}
                  title={item.title}
                  features={item.features}
                  button={item.button}
                />
              </div>
            );
          })}
        </div>
        <p className="text-[#4B4B4B] text-base max-w-[950px] mx-auto mb-10 sm:mb-40 px-5">
          Não consegue encontrar uma solução aqui? Contacte-nos em{" "}
          <span className="text-[#828AE6] ">
            <u>support@spyzie.io.</u>
          </span>{" "}
          Se preferir um reembolso, clique{" "}
          <span className="text-[#828AE6] ">
            {" "}
            <u>aqui </u>{" "}
          </span>{" "}
          .{" "}
        </p>
      </Layout>
    </div>
  );
};

export default support;

const list = [
  {
    icon: <FiSettings />,
    title: "Configurações de Conta",
    features: [
      "Como Habilitar o Backup do iCloud?",
      "Habilitar o Recurso do WhatsApp no iPhone/iPad",
      "Permitir que o Spyzie seja executado em segundo plano",
      "Como configurar o rastreamento GPS no dispositivo de destino?",
      "Como Desativar o Software Antivírus?",
    ],

    button: "Ver mais >>",
  },
  {
    icon: <BiMessageRoundedDots />,
    title: "Perguntas Frequentes",
    features: [
      "FAQ - Geral",
      "FAQ - Solução para iPhone Sem Jailbreak",
      "Preciso ter acesso físico ao dispositivo de destino?",
      "Preciso fazer root no dispositivo Android?",
    ],
    button: "Ver mais >>",
  },
  {
    icon: <GrInstall />,
    title: "Guia de Instalação e Desinstalação",
    features: [
      "Como instalar o Spyzie em um telefone Android",
      "Guia de configuração do iOS",
      "Guia de Funções Gerais?",
      "Desinstalação em dispositivos Android",
      "Guia do Android 8.x da Samsung",
    ],
    button: "Ver mais >>",
  },
  {
    icon: <SiKnowledgebase />,
    title: "Base de Conhecimento",
    features: [
      "Como configurar o Buscar iPhone",
      "Não consigo encontrar a opção para desativar a autenticação de dois fatores?",
      "Desativar a autenticação de dois fatores para o ID Apple",
      "Habilitar o iCloud Drive no iPhone/iPad",
    ],
    button: "Ver mais >>",
  },
  {
    icon: <GrTroubleshoot />,
    title: "Solução de Problemas",
    features: [
      "Não consigo encontrar a opção para desativar a autenticação de dois fatores?",
      "Sem fotos e vídeos? - iPhone Sem Jailbreak Spy",
      "Locais não atualizados - iPhone e Android",
      "Habilitar o iCloud Drive no iPhone/iPad",
      "A senha do iCloud é alterada/bloqueada pela Apple",
    ],
    button: "Ver mais >>",
  },
];
