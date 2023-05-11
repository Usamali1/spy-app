import Layout from "@/components/Layout";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props { }

const FaqPage: React.FC<Props> = ({ }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropDownClick = (index: number) => {
    // @ts-ignore
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout>
      <div className="">
        <div className="bg-[#F6FBFD] py-28">
          <h1 className="text-5xl font-bold text-center">
            Frequently Asked Questions          </h1>
        </div>
        <div className="py-14 max-w-7xl mx-auto px-8">
          {data.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index}>
                <div
                  className=" cursor-pointer border rounded-sm border-[#d2d2d2] px-4 py-5 my-4"
                  onClick={() => handleDropDownClick(index)}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-gray-700 cursor-pointer font-normal text-xl mb-2">
                      {item.heading}
                    </h2>
                    <span
                      className={`text-3xl transition-all  ${activeIndex === index
                        ? "rotate-180 duration-300"
                        : "rotate-[360deg]"
                        } duration-300`}
                    >
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                  <div
                    className={`${isActive
                      ? "max-h-96 duration-500 ease-in-out transition-all opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none duration-500"
                      }`}
                  >
                    <p className="text-[#6b6767] py-2 text-[15px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default FaqPage;

const data = [
  {
    heading: "Plataforma compatível com todos os dispositivos",
    para: "Compatibilidade com os dispositivos (smartphone / tablet) mais comuns",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Vídeo em HD - Áudio na Web",
    para: "Vídeo de alta qualidade, áudio cristalino, sem interferência",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Personalização de branding",
    para: "Personalização de branding. Possibilidade de usar o próprio logotipo, agenda e descrições nas páginas da web dedicadas ao evento",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Compatibilidade com todos os softwares de Web Conferencing",
    para: "Integração com outras plataformas (GoToMeeting, MS Team, Webex, etc.)",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Acesso direto para cada usuário",
    para: "Link gerado pelo qual o usuário poderá acessar inserindo o ID e o nome da reunião",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Salas de bate-papo",
    para: "Possibilidade de se comunicar em público / privado em salas diferentes",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Aplicativos móveis",
    para: "Basta baixar o aplicativo Rafiky Connect (da App Store ou Google Play) em seu dispositivo, escolher o idioma desejado e ouvir a conferência",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Carregar PPT",
    para: "Possibilidade de carregar apresentações em powerpoint dentro das videochamadas em um sistema de rolagem de página simples e intuitivo",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Carregar vídeo",
    para: "Possibilidade de carregar vídeos em alta definição dentro das videochamadas",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Tradução em + de 60 línguas conteúdo de interface NEW!",
    para: "(estático e dinâmico (Chat e Power Point)",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Informações de Palestrantes NEW!",
    para: "Sobrenome do palestrante com nome, sobrenome, cargo e logotipo da empresa",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Temporizador de Palestrantes NEW!",
    para: "Possibilidade para o palestrante ver o tempo (atribuído pelo moderador) disponível para sua intervenção",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "Sistema de votação virtual",
    para: "Criação e apresentação de quiz e questionários. O moderador publica as perguntas e recebe as respostas",
    gold: true,
    platinum: true,
    silver: true,
  },
  {
    heading: "1 GB di registrazione nel cloud (a licenza) e/o locale",
    para: "1 GB di spazio disponibile per ogni licenza",
    gold: true,
    platinum: true,
  },
  {
    heading: "Reportistica post-evento",
    para: "Report tecnico con: – Statistiche dei partecipanti (durata di collegamento alla conferenza, network di connessione lungo l’evento)   – Responso del sistema di votazione con percentuali",
    gold: true,
    platinum: true,
  },
  {
    heading: "Email personalizzate",
    para: "Report tecnico con: – Invito ai partecipanti con login details.   – Email personalizzata con logo cliente",
    gold: true,
    platinum: true,
  },
  {
    heading: "Registrazione Audio Multilingua",
    para: "Possibilità di registrare l’audio della conferenza nelle diverse lingue coinvolte",
    gold: true,
    platinum: true,
  },
  {
    heading: "Video box linguaggio dei segni NEW!",
    para: "Finestra video in tempo reale con interprete dei segni",
    gold: true,
    platinum: true,
  },
  {
    heading: "Breakout Rooms",
    para: "Possibilità di organizzare una sala plenaria + altre sale in parallelo in relazione alle tematiche del vostro evento",
    gold: true,
    platinum: true,
  },
  {
    heading: "1 GB de gravação em nuvem (licença) e/ou local",
    para: "1 GB de espaço disponível por licença",
    gold: true,
    platinum: true,
  },
  {
    heading: "Relatório pós-evento",
    para: "Relatório técnico com: - Estatísticas dos participantes (tempo de conexão à conferência, rede de conexão durante o evento) - Resultados do sistema de votação com percentagens",
    gold: true,
    platinum: true,
  },
  {
    heading: "E-mails personalizados",
    para: "E-mail personalizado com: - Convite aos participantes com detalhes de login. - E-mail personalizado com o logotipo do cliente",
    gold: true,
    platinum: true,
  },
  {
    heading: "Gravação de Áudio Multilíngue",
    para: "Possibilidade de gravar o áudio da conferência em vários idiomas",
    gold: true,
    platinum: true,
  },
  {
    heading: "Video box em Língua de Sinais NOVO!",
    para: "Janela de vídeo em tempo real com intérprete de língua de sinais",
    gold: true,
    platinum: true,
  },
  {
    heading: "Salas de Conferência Paralelas",
    para: "Possibilidade de organizar uma sala plenária + outras salas em paralelo relacionadas aos tópicos do seu evento",
    gold: true,
    platinum: true,
  },
  {
    heading: "Serviço de Streaming Out NOVO!",
    para: "Transmissão on-line com personalização completa de marca, relatório de todos os participantes, bate-papo personalizado e muito mais!",
    gold: true,
    platinum: true,
  },
  {
    heading: "Streaming em Redes Sociais",
    para: "Possibilidade de gravar e transmitir o evento ao vivo para um número ilimitado de espectadores (Facebook Live, Youtube, ...)",
    platinum: true,
  },
  {
    heading: "Anfitriões/virtual hosts",
    para: "Comunique-se de forma inovadora personalizando seu conteúdo por meio de mensagens transmitidas por anfitriões/virtual hosts",
    platinum: true,
  },
  {
    heading: "Aceitação de Pagamentos",
    para: "Possibilidade de cobrar dos participantes do evento",
    platinum: true,
  },
  {
    heading: "URL Personalizado",
    para: "Possibilidade de associar um URL personalizado aos canais",
    platinum: true,
  },
  {
    heading: "Certificados de Participação",
    para: "Possibilidade de criar e emitir certificados de participação para os participantes do evento",
    platinum: true,
  },
  {
    heading: "Interpretação Simultânea",
    para: "Conferência multilíngue com até 50 canais de interpretação simultânea",
    platinum: true,
  },
];