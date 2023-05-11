import React from "react";
import Layout from "@/components/Layout";
import TitleHero from "@/components/views/Features/TitleHero";
import CardHero from "@/components/views/Features/CardHero";
import Steps from "@/components/views/Features/Steps";
import FeatureDetail from "@/components/views/Features/FeatureDetail";
import Menu from "@/components/views/Features/Menu";
import MobileMenu from "@/components/views/Features/MobileMenu";

const FeaturesPage = ({ pageData }: any) => {
  return (
    <Layout>
      <TitleHero title={pageData?.title} />
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full max-w-[220px] hidden lg:block">
            <Menu />
          </div>
          <div className="block lg:hidden">
            <MobileMenu />
          </div>
          <div className="w-full">
            <CardHero
              title={pageData?.cardHeroTitle}
              description={pageData?.cardHeroDescription}
              featureTitle={pageData?.featureTitle}
              features={pageData?.features}
            />
            <Steps
              title={pageData?.stepSectionTitle}
              stepsData={pageData?.steps}
            />
            <FeatureDetail
              mainHeading={pageData?.featureDetailMain}
              mainHeadingPara={pageData?.mainHeadingPara}
              secHeading={pageData?.featureSecHeading}
              secPara={pageData?.secPara}
              thirdPara={pageData?.thirdPara}
              fourthPara={pageData?.fourthPara}
              fifthPara={pageData?.fifthPara}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage;

export async function getStaticPaths() {
  // Get the list of available features from the `routes` array.
  const routes = [
    "call-tracker-track-phone-calls",
    "spy-on-text-messages",
    "phone-location-tracker",
    "geofence-alert",
    "facebook-spy",
    "whatsapp-spy",
    "snapchat-spy",
    "instagram-spy",
    "viber-spy",
    "hidden-spy-app-for-android",
    "internet-history-tracker",
    "sim-card-location-tracker",
  ];
  const paths = routes.map((route) => ({
    params: { feature: route },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug = params?.feature;
  const filterData = data.filter((item) => item.slug === slug);
  return {
    props: {
      pageData: filterData && filterData[0],
    },
  };
}

const data = [
  {
    slug: "call-tracker-track-phone-calls",
    title: `Monitor de registro de chamadas - Espião de chamadas - Rastreador de chamadas telefônicas`,
    cardHeroTitle: "O aplicativo de gravação de telefone secreto",
    cardHeroDescription:
      "O Spyzie permite que você grave todas as chamadas recebidas e efetuadas se quiser uma visão mais profunda sobre o que eles estão falando.",
    featureTitle:
      "O recurso de gravação não se limita apenas a chamadas telefônicas; O Spyzie ainda permite que você veja suas mensagens privadas, bate-papos do WhatsApp, localizações e muito mais.",
    features: [
      "Ouça todas as chamadas telefônicas em tempo real, grave-as também para mais tarde.",
      "Visualizar e gravar registros de chamadas é tão fácil quanto ligar um switch, através do painel do Spyzie.",
      "Enquanto você ouve o telefonema de alguém, eles não têm ideia sobre isso por causa da furtividade do Spyzie.",
      "Mesmo os recursos mais avançados funcionam bem sem solicitar que você faça root no telefone de destino.",
    ],
    stepSectionTitle: "Monitore chamadas telefônicas em 3 etapas fáceis",
    steps: [
      {
        title: "Inscrever-se",
        description: "Crie uma conta Spyzie com seu e-mail como nome de usuário.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "Baixe o Spyzie no telefone de destino (para Android) ou verifique as credenciais de destino do iCloud (para iOS).",
      },
      {
        title: "Iniciar monitoramento de chamadas",
        description:
          "Obtenha acesso ao painel do Spyzie e visualize os registros de chamadas.",
      },
    ],
    featureDetailMain: 'A maneira mais fácil de rastrear chamadas telefônicas',
    mainHeadingPara: [
      "O painel do Spyzie é um local único que combina todos os seus recursos. Para usar o Phone Call Monitor, clique na guia 'Chamadas' no painel. Ele mostrará todos os dados organizados corretamente.",
      "O Spyzie até analisa os dados e você pode ver os resultados das chamadas com base nas pessoas que você ligou com mais frequência. Detalhes como carimbos de hora e identificação de chamadas fornecem mais informações sobre as chamadas."
    ],
    featureSecHeading: 'Classificando através de registros de chamadas',
    secPara: [
      "Você tem a liberdade de visualizar os registros de chamadas na ordem que desejar, como classificar por data, número, nome, hora e alguns outros parâmetros.",
    ],
    thirdPara: 'O monitoramento de chamadas telefônicas também pode ser importante para avaliar os funcionários. Verifique os registros de chamadas dos funcionários para descobrir se eles estão relaxando ou falando com os concorrentes pelas costas. Grave ligações para saber o que estão falando sobre sua empresa.',
    fourthPara: 'Use o monitor de chamadas telefônicas do Spyzie e rastreie as chamadas telefônicas de seus filhos e funcionários de maneira descomplicada. O Spyzie foi projetado para ser simples, então você não terá nenhum problema em usá-lo.',
    fifthPara: 'A melhor parte é que o Spyzie não deixa nada ao acaso. Se você estiver usando o Spyzie, não há como o usuário-alvo descobrir isso. Portanto, use o Spyzie sem nenhuma dúvida.'
  },
  {
    slug: "spy-on-text-messages",
    title: `Monitor de mensagem de texto oculto`,
    cardHeroTitle: "Espião de mensagem de texto",
    cardHeroDescription:
      "Leia todas as suas mensagens privadas sem que eles saibam.",
    featureTitle:
      "Veja as informações do número de telefone de todos os usuários que enviam mensagens de texto.",
    features: [
      "Veja as iMessages dos iPhones secretamente.",
      "Veja as mensagens de texto e conversas excluídas.",
      "Verifique todos os arquivos de mídia ou mensagens MMS que eles compartilharam.",
      "Não é necessário root ou jailbreak para ler as mensagens de alguém.",
    ],
    stepSectionTitle: "3 etapas simples para espionar mensagens de texto",
    steps: [
      {
        title: "Inscrever-se",
        description: "Registre-se para uma conta Spyzie com seu endereço de e-mail.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "O assistente de configuração automática do Spyzie irá guiá-lo através do processo de configuração.",
      },
      {
        title: "Leia Suas Mensagens",
        description:
          "Veja todas as suas mensagens de texto através do painel personalizado do Spyzie.",
      },
    ],
    featureDetailMain: 'Monitoramento de mensagens de texto ocultas',
    mainHeadingPara: [
      "While everyone chats on online messengers now, there was a time not long ago where SMS texting was the only communication method. Even today, people interact with SMS messages and receive important messages like OTPs. Spyzie's message monitor gives you access to all of this data.",
    ],
    featureSecHeading: 'Acompanhamento Infantil',
    secPara: [
      "As crianças muitas vezes podem ter problemas, e seus pais podem não ter noção disso. Não seja um pai sem noção e sempre saiba o que seu filho está fazendo, tudo com a ajuda do monitor Snapchat do Spyzie.",
    ],
    thirdPara: 'O Spyzie tomou medidas especiais para garantir que você nunca seja pego lendo as mensagens privadas de alguém. Para iPhones, o Spyzie pode monitorar as mensagens mesmo sem tocar no telefone de destino ou instalar qualquer aplicativo nele. Para telefones Android, o Spyzie projetou o aplicativo espião para ser 100% oculto.',
    fourthPara: 'Você só precisa gastar alguns minutos para configurar o Spyzie. Depois disso, você pode usá-lo instantaneamente para ler as mensagens privadas de qualquer pessoa. Gaste dois minutos e proteja seu filho do perigo. Experimente o Spyzie hoje!.',

  },
  {
    slug: "phone-location-tracker",
    title: `Rastreie Celulares Remotamente`,
    cardHeroTitle: "Rastreador de localização do telefone",
    cardHeroDescription:
      "O Spyzie mostra a localização exata de um dispositivo por telefone, tablet ou computador.",
    featureTitle:
      "O Spyzie é um rastreador e monitor de localização completo:",
    features: [
      "Rastreie sua localização GPS com coordenadas exatas.",
      "Saiba mais sobre todos os endereços e localidades que eles visitam.",
      "Várias visualizações, como a visualização de rua 3D, oferecem mais opções de visualização de localização.",
    ],
    stepSectionTitle: "Monitor Phone Calls in 3 Easy Steps",
    steps: [
      {
        title: "Sign Up",
        description: "Create a Spyzie account with your email as the username.",
      },
      {
        title: "Configure Spyzie",
        description:
          "Download Spyzie on target phone (for Android) or verify the target iCloud credentials (for iOS).",
      },
      {
        title: "Start Monitoring Calls",
        description:
          "Get access to your Spyzie dashboard and view their call logs.",
      },
    ],
    featureDetailMain: 'Spyzie Offers the Best Location Tracking Service',
    mainHeadingPara: [
      "Embora existam muitos aplicativos para rastrear a localização de um telefone celular, nenhum aplicativo é tão bom quanto o Spyzie. Isso ocorre porque o Spyzie pode rastrear a localização de um telefone em segredo, sem que o usuário-alvo saiba disso. Além disso, o monitor de localização do Spyzie vem com muitos outros recursos para melhorar a funcionalidade.",
      "Para usar o monitor de localização do Spyzie, você pode abrir o painel do Spyzie e clicar na guia 'Locais'. Todos os recursos de rastreamento de localização do Spyzie estão disponíveis aqui.",
      "O rastreador de localização do Spyzie possui integração com o Google Maps. Como você deve saber, o Google Maps armazena todo o histórico de localização de um usuário. Através do Spyzie, você pode visualizar todo esse histórico de localização na sua tela.",
      "O histórico de localização vem com as coordenadas de cada local passado. Você também pode classificar esses locais com base no local visitado mais recentemente, no local mais próximo e em muitos outros filtros."
    ],
    featureSecHeading: 'Descubra sua linha do tempo de localização',
    secPara: [
      "O Spyzie veio em socorro de muitos pais respondendo às suas necessidades. Os pais muitas vezes se preocupavam quando seus filhos chegavam tarde na escola ou quando passavam muito tempo fora de casa. Agora o Spyzie permite que você visualize todos os lugares onde seu filho esteve no passado.",
      "As crianças tendem a mentir para os pais quando saem para festas ou passam tempo com amigos com quem não deveriam sair. O rastreador de localização oculta do Spyzie é ainda mais importante nessas condições, pois pode dizer aos pais se o filho mentiu para eles, juntamente com a prova.",
      "O rastreador de localização do Spyzie não é usado apenas para proteger a família, mas também os empregadores. Os empregadores o usam para garantir que seus funcionários estejam realmente trabalhando, seja no campo ou no escritório. Se um funcionário está fugindo durante o horário de trabalho ou não está fazendo o trabalho de campo de forma eficaz, os empregadores podem descobrir isso usando o Spyzie.",
      "Um benefício adicional do Spyzie vem na forma de rastrear um telefone perdido ou roubado. O Spyzie sempre rastreia a localização de um telefone, para que você sempre saiba onde ele está. Mesmo que alguém roube seu telefone, eles não poderão descobrir sobre o Spyzie pelo telefone.",
      "O Spyzie se torna o rastreador de localização perfeito devido aos seus recursos impressionantes, design furtivo e nenhum requisito de jailbreak ou root. Inscreva-se no Spyzie hoje!"
    ],
    thirdPara: 'Existem alguns outros aplicativos que podem rastrear secretamente a localização de um telefone. No entanto, todos eles pedem para você fazer root ou fazer jailbreak no telefone de destino. No entanto, o Spyzie não faz tal exigência. Ele pode rastrear a localização de qualquer telefone secretamente, sem solicitar que você faça o root ou o jailbreak.',
    fourthPara: 'Com o Spyzie, você pode rastrear a localização de um telefone sem que o proprietário do telefone saiba. Isso ocorre porque o Spyzie criou sua solução de monitoramento de telefone para ser completamente silenciosa. Para iPhones, o Spyzie pode monitorar sua localização sem tocá-lo ou instalar qualquer aplicativo nele. Para telefones Android, o Spyzie criou seu aplicativo rastreador de localização para ficar 100% oculto.',
  },
  {
    slug: "facebook-spy",
    title: `O Spyzie permite que você espie as mensagens do Facebook facilmente`,
    cardHeroTitle: "Aplicativo espião do Facebook Messenger",
    cardHeroDescription:
      "Com o Spyzie, você pode ver seus bate-papos privados no Facebook, arquivos de mídia e muito mais.",
    featureTitle:
      "O Spyzie até mostra as pessoas com quem eles conversam no Facebook:",
    features: [
      "Veja todas as suas conversas no Facebook. Veja todas as suas conversas no Facebook.",
      "Veja todas as fotos e vídeos que eles enviam ou recebem.",
      "Verifique o perfil do Facebook das pessoas com quem eles conversam.",
    ],
    stepSectionTitle: "3 passos simples para espionar o Facebook deles",
    steps: [
      {
        title: "Inscreva-se gratuitamente",
        description: "Cadastre-se no Spyzie e escolha seu nome de usuário e senha.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "Siga o guia na tela para configurar o Spyzie.",
      },
      {
        title: "Acesse o painel do Spyzie e visualize todos os chats do Facebook.",
        description:
          "Todos os seus dados do Facebook podem ser acessados através do painel do Spyzie.",
      },
    ],
    featureDetailMain: 'Melhor maneira de ler secretamente as mensagens do Facebook de alguém',
    mainHeadingPara: [
      "O Spyzie é incomparável quando se trata de ler as mensagens privadas de alguém no Facebook. Além de receber as mensagens do Facebook sem que eles saibam, o processo funciona sem solicitar que você faça o root ou o jailbreak do dispositivo de destino.",
      "A configuração do Spyzie leva apenas cerca de cinco minutos pela primeira vez. Depois disso, você pode acessar seus dados do Facebook instantaneamente a qualquer momento usando o painel do Spyzie. Na página do painel, você pode encontrar o Facebook Monitor presente na guia 'Aplicativos de mídia social'..",
      "Você consegue ver tanto dos dados privados do Facebook quanto eles mesmos podem ver. Isso inclui suas mensagens, fotos, vídeos e até mesmo as pessoas com quem conversam. É como se você mesmo tivesse feito login na conta do Facebook deles.",
      "Para fornecer detalhes adicionais, todas as mensagens vêm com carimbos de data/hora. O Spyzie até mostra as mensagens e bate-papos do Facebook que eles excluíram."
    ],
    featureSecHeading: 'Procure por bandeiras vermelhas usando o Facebook Monitor do Spyzie',
    secPara: [
      "O monitor do Facebook do Spyzie pode revelar os segredos mais sombrios e profundos sobre as pessoas. Portanto, você pode proteger seus entes queridos e seu relacionamento com eles usando o Spyzie.",
    ],
    thirdPara: 'Dificilmente existe um monitor do Facebook que funcione tão bem. Mesmo os poucos aplicativos espiões do Facebook em funcionamento solicitam que você faça o root ou faça o jailbreak do dispositivo de destino para funcionar. No entanto, o Spyzie pode fornecer todos os seus dados sem solicitar que você faça o root ou faça o jailbreak do dispositivo de destino.',
    fourthPara: 'Além disso, o comércio de informações privilegiadas tornou-se uma grande causa de preocupação para os empregadores. Ao usar o Spyzie, eles podem ter certeza de que estão bem protegidos contra essa ameaça.',
    fifthPara: 'Devido à qualidade do serviço que o Spyzie oferece, milhões de usuários em todo o mundo confiam no Spyzie para proteger o que importa. Junte-se à comunidade hoje antes que seja tarde demais!'
  },
  {
    slug: "snapchat-spy",
    title: `Monitoramento do Snapchat sem que eles saibam`,
    cardHeroTitle: "Spyzie Snapchat Spy",
    cardHeroDescription:
      "Leia os bate-papos do Snapchat em seu telefone, tablet ou computador.",
    featureTitle:
      "Spyzie mostra cada coisinha que eles fazem no Snapchat",
    features: [
      "Veja todas as mensagens que eles enviam ou recebem no Snapchat.",
      "Mesmo que excluam um bate-papo ou uma mensagem, você ainda poderá visualizá-lo.",
      "Veja os contatos e grupos do Snapchat com os quais eles interagem.",
      "Veja cada foto e vídeo que eles compartilham no Snapchat.",
    ],
    stepSectionTitle: "3 etapas simples para espionagem do Snapchat",
    steps: [
      {
        title: "Inscrever-se",
        description: "Registre-se no Spyzie usando seu endereço de e-mail.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "O assistente de configuração automática do Spyzie irá guiá-lo através do processo de configuração.",
      },
      {
        title: "Comece a monitorar o Snapchat deles",
        description:
          "Veja todos os dados do Snapchat no painel do Spyzie.",
      },
    ],
    featureDetailMain: 'Espionagem remota do Snapchat com o Spyzie',
    mainHeadingPara: [
      "Enquanto o Snapchat é usado para esconder mensagens de texto e arquivos de mídia, nada é escondido do Spyzie. O Spyzie mostra tudo o que o usuário faz em sua conta do Snapchat, mesmo que desapareça ou exclua.",
      "Ao concluir o processo de configuração do Spyzie, você pode acessar o painel do Spyzie a qualquer momento fazendo login na sua conta do Spyzie. O Snapchat Monitor está presente na guia 'Social Media Apps' no lado esquerdo do painel.",
      "Você pode encontrar todas as informações de suas conversas no Snapchat nesta guia. Você pode visualizar seus contatos e as mensagens que eles enviaram ou receberam. Você também pode ver suas fotos e arquivos de vídeo privados do Snapchat."
    ],
    featureSecHeading: 'Não subestime a espionagem do Snapchat',
    secPara: [
      "Caso seu filho passe muito tempo no telefone, o espião do Snapchat é um recurso obrigatório do Spyzie. Na maioria das vezes, as crianças passam horas ocupadas no Snapchat. Não é incomum que eles conversem com estranhos.",
      "Estranhos no Snapchat nem sempre são do tipo legal e amigável. Muitos deles são agressores cibernéticos e muitos deles são predadores online. Você precisa manter seu filho protegido de todos e cada um deles, então o espião Snapchat do Spyzie é a resposta perfeita.",
      "O monitor Snapchat oculto do Spyzie é um recurso bastante difícil de encontrar, especialmente sem fazer root ou jailbreak. Crie uma conta Spyzie hoje!"
    ],
    thirdPara: 'Não há muitos aplicativos que possam mostrar os dados privados do Snapchat de alguém, muito menos fazer isso sem fazer root ou jailbreak no telefone de destino. No entanto, o Spyzie torna isso possível devido ao seu design e recursos de primeira linha.',
    fourthPara: 'O Spyzie coloca foco especial na furtividade para que você nunca seja pego enquanto monitora os dados do Snapchat de alguém. Não importa se você está lendo mensagens do Snapchat de um iPhone ou de um telefone Android, o proprietário do telefone nunca saberá disso. Para iPhones, o Spyzie nem mesmo requer acesso ao iPhone de destino. Para telefones Android, o aplicativo espião de telefone do Spyzie é 100% oculto.',
  },
  {
    slug: "viber-spy",
    title: `Espião Viber Secreto do Spyzie`,
    cardHeroTitle: "Viber Mensageiro Espião",
    cardHeroDescription:
      "Leia todos os bate-papos privados e em grupo do Viber.",
    featureTitle:
      "Acompanhe secretamente toda a atividade do Viber:",
    features: [
      "Veja as mensagens do Viber e o histórico de bate-papo.",
      "Veja todos os arquivos de mídia que eles compartilharam no Viber.Veja todos os arquivos de mídia que eles compartilharam no Viber.",
      "Veja todos os bate-papos ou mensagens que eles excluíram.",
      "Veja os contatos e grupos do Viber aos quais eles aderiram.",
    ],
    stepSectionTitle: "3 etapas simples para espionagem do Viber",
    steps: [
      {
        title: "Inscrever-se",
        description: "Registre-se no Viber gratuitamente com seu endereço de e-mail.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "O assistente de configuração do Spyzie irá guiá-lo através do processo de configuração do Spyzie.",
      },
      {
        title: "Iniciar espionagem do Viber",
        description:
          "Veja todos os bate-papos do Viber usando o painel do Spyzie",
      },
    ],
    featureDetailMain: 'Espionagem segura do Viber com o Spyzie',
    mainHeadingPara: [
      "O Viber é uma importante plataforma de mensagens no mundo de hoje e há uma grande chance de seu filho estar usando. Através do Spyzie, você pode descobrir exatamente o que seu filho faz no Spyzie. Você saberá com quem eles falam e sobre o que falam, tudo com a ajuda do Spyzie.",
      "Se seu filho está conversando com um estranho ou uma pessoa suspeita no Viber, você pode descobrir isso usando o Spyzie. Você também pode saber se seu filho está compartilhando ou recebendo fotos ou vídeos inapropriados no Viber",
      "Você também pode saber se seu filho está fazendo videochamadas com alguém com quem não deveria falar. Se alguém está incomodando seu filho ou intimidando-o, o Spyzie também ajuda você a capturá-lo",
      "Spyzie oferece noites tranquilas para inúmeros pais. Junte-se à comunidade Spyzie hoje!"
    ],
    featureSecHeading: 'Viber oculto espionando remotamente',
    secPara: [
      "O Spyzie dá a você acesso a todas as suas mensagens privadas do Viber de qualquer canto do mundo. Tudo o que você precisa fazer é gastar alguns minutos configurando o Spyzie, também sob a orientação do Spyzie.",
      "Depois de concluir a configuração do Spyzie, você pode acessar o recurso de espionagem do Viber a qualquer momento instantaneamente. O Viber Spy está presente na guia 'Social Media Apps' no lado esquerdo do painel.",
      "Os logs de bate-papo do Viber vêm com detalhes como carimbos de data/hora para cada mensagem. Você também pode ver as informações de contato de qualquer bate-papo específico. Enquanto você estiver lendo os logs do Viber, o proprietário do telefone não fará ideia disso."
    ],
    thirdPara: 'Viber espionando sem root ou jailbreak',
    fourthPara: 'O Spyzie foi além e elevou a tecnologia a um nível superior ao fornecer recursos de espionagem do Viber sem fazer root ou jailbreak. Dificilmente existe outro aplicativo no mundo que possa te prometer isso.',
    fifthPara: 'Spyzie is designed to be completely hidden, whether you are spying an Android phone or an iPhone. For iPhones, Spyzie can track its data without even touching hte phone at all. For Android phones, Spyzie needs a one time phone access to install the special hidden Android spy app.'
  },
  {
    slug: "hidden-spy-app-for-android",
    title: `Monitore telefones Android sem ser pego`,
    cardHeroTitle: "Modo furtivo",
    cardHeroDescription:
      "Spyzie's hidden stealth mode makes sure there is no chance of the user knowing about it.",
    featureTitle:
      "O Spyzie é um rastreador Android 100% oculto:",
    features: [
      "Rastreie com precisão a localização de um telefone até o último metro.",
      "Verifique suas localizações recentes junto com carimbos de data/hora.",
      "Defina zonas permitidas e proibidas para sua localização.",
    ],
    stepSectionTitle: "3 etapas simples para rastrear um telefone celular",
    steps: [
      {
        title: "Inscreva-se gratuitamente",
        description: "Crie uma conta Spyzie.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "Baixe o Spyzie no telefone de destino (para Android) ou verifique as credenciais de destino do iCloud (para iOS).",
      },
      {
        title: "Iniciar Rastreamento",
        description:
          "Acesse seu painel e rastreie a localização do telefone instantaneamente.",
      },
    ],
    featureDetailMain: 'Proteja seus filhos com o Spyzie',
    mainHeadingPara: [
      "As crianças, especialmente os adolescentes, são bastante reservados sobre suas atividades. Ao mesmo tempo, eles podem não ser os melhores juízes de certo e errado e precisam da proteção de seus pais.",
      "É aqui que o Spyzie entra em ação. Inúmeros pais usam o Spyzie para saber que seus filhos estão sãos e salvos. Eles podem saber a localização exata de seus filhos e rastreá-los sempre que quiserem.",
      "Além disso, como o Spyzie vem com um modo furtivo oculto, a criança nunca sentirá que você está violando a privacidade dela. Ao mesmo tempo, você terá toda a visão geral necessária sobre eles.",
      "Existem muitos outros usos do rastreamento de localização também. Se seu filho perder o celular, o Spyzie pode ajudar a rastreá-lo. Mesmo que alguém roube o telefone celular, não encontrará o rastreador de localização Spyzie em seu telefone."
    ],
    featureSecHeading: 'Rastreador oculto de telefone e tablet',
    secPara: [
      "Não importa qual dispositivo você deseja monitorar com o Spyzie, é garantido que o proprietário do telefone nunca saberá sobre isso. Isso ocorre porque o Spyzie foi criado especialmente para manter em mente o design furtivo",
      "O rastreador de localização do Spyzie permite que você rastreie a localização ao vivo do usuário e as localizações recentes 24 horas por dia, 7 dias por semana. Combine-o com o recurso de cerca geográfica e você poderá rastrear o celular deles mesmo quando estiver ocupado.",
      "Com o Spyzie, você pode ver todo o histórico de localização de uma pessoa com apenas um clique do mouse ou toque na tela do telefone. O rastreador de localização está presente na guia 'Locais'.",
      "Há uma série de filtros disponíveis através dos quais você pode classificar as localizações recentes do dispositivo. Você pode ver onde eles estiveram mais recentemente ou pode classificar os lugares mais distantes de você.",
      "Existem muitos aplicativos para rastrear um telefone celular, seja para rastrear um telefone Android ou iPhone. No entanto, nenhum aplicativo se compara ao Spyzie porque o Spyzie pode rastrear um telefone sem que o proprietário do telefone saiba disso.",
      "Além disso, há uma série de outros recursos que são bastante úteis quando se trata de rastrear um celular. É por isso que inúmeras pessoas em todo o mundo são loucas pelo Spyzie. Você deveria tentar isso também!"
    ],
    thirdPara: 'Existem alguns outros aplicativos que afirmam rastrear um telefone celular secretamente. No entanto, quando você experimentá-los, eles solicitarão que você faça o root ou faça o jailbreak do dispositivo de destino. Isso torna a parte do rastreamento secreto quase inútil. O Spyzie não faz essas exigências e pode funcionar sem solicitar root ou jailbreak.',
    fourthPara: 'A maioria dos aplicativos secretos de rastreamento de telefone deixa rastros aqui e ali que fazem com que o rastreador seja pego mais cedo ou mais tarde. No entanto, você pode usar o Spyzie sem estresse, pois não há rastros. O tamanho do aplicativo é de apenas 2 MB e não consome nenhuma bateria.',
  },
  {
    slug: "internet-history-tracker",
    title: `Rastreie o histórico do navegador`,
    cardHeroTitle: "Rastreador de histórico do navegador",
    cardHeroDescription:
      "Monitore o histórico do navegador de qualquer dispositivo.",
    featureTitle:
      "Verifique o que eles veem na internet",
    features: [
      "Acompanhe seus sites favoritos.",
      "Spzyie fornece uma descrição de cada site.",
      "Verifique os detalhes adicionados, como frequência de visita, favoritos e muito mais.",
    ],
    stepSectionTitle: "3 etapas simples para monitorar o histórico do navegador",
    steps: [
      {
        title: "Registre-se no Spyzie",
        description: "Crie uma conta Spyzie totalmente grátis.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "Siga o guia na tela para configurar o Spyzie com base no dispositivo de destino.",
      },
      {
        title: "Comece a monitorar o histórico do navegador",
        description:
          "Acesse o painel do Spyzie e visualize o histórico do navegador.",
      },
    ],
    featureDetailMain: 'Acesso com um clique ao histórico do navegador',
    mainHeadingPara: [
      "O Spyzie precisa configurar apenas para o primeiro uso. O processo de configuração dura apenas cerca de cinco minutos ou mais. Depois que o Spyzie estiver configurado, você poderá acessar o histórico do navegador a qualquer momento por meio do painel do Spyzie.",
      "Depois de configurar o Spyzie, você pode usar os recursos do Spyzie por meio do painel do Spyzie. O monitor de histórico do navegador pode ser encontrado no lado esquerdo do painel entre seus outros recursos.",
      "O monitor do histórico do navegador não apenas mostra os sites que eles visitam, mas também fornece detalhes adicionais. Por exemplo, você pode ver quantas vezes eles visitam qualquer site. Você também pode ver os favoritos que eles salvaram e a data e hora da visita.",
      "Todo o histórico do navegador é armazenado em seu painel personalizado. Portanto, mesmo que excluam o histórico do navegador, você ainda poderá visualizá-lo. Na verdade, você pode até baixar os registros do histórico do navegador, se desejar.",
      "O monitor de histórico do navegador do Spyzie funciona em tempo real. Portanto, você pode ver os sites que o usuário está visitando agora mesmo. Os dados são atualizados a cada segundo sempre que o usuário alvo estiver conectado à internet."
    ],
    featureSecHeading: 'Aprenda seus segredos mais obscuros por meio do monitor de histórico do navegador',
    secPara: [
      "O histórico de navegação de uma pessoa pode fornecer detalhes sobre ela que nada mais pode. Você pode ver onde estão os interesses deles e se eles estão envolvidos em algo prejudicial para eles. Você pode protegê-los dessas coisas antes que eles acabem em apuros.",
      "Os pais aproveitam ao máximo o recurso de monitoramento do histórico do navegador. Ele pode dizer a eles se há algo com que se preocupar em relação ao comportamento de seus filhos. Se o filho pratica atividades erradas, os pais podem corrigi-lo antes que seja tarde demais.",
      " A Internet está cheia de crimes cibernéticos e coisas como o desafio da baleia azul, que pode ser uma séria ameaça à segurança das crianças. Os pais podem bloquear todas essas coisas do raio de visibilidade de uma criança por meio do monitor de histórico do site do Spyzie.",
      "Mesmo quando os pais estão ocupados, o Spyzie ainda fica de olho no histórico de navegação da criança e a protege. Portanto, se você é pai ou mãe, deve começar a usar o Spyzie imediatamente!"
    ],
    thirdPara: 'Existem alguns outros aplicativos que podem oferecer monitoramento do histórico do navegador. No entanto, ao experimentá-los, você será solicitado a fazer o root ou o jailbreak do dispositivo de destino. Aqui é onde o Spyzie oferece as coisas de forma diferente. Usar o Monitor de Histórico do Navegador do Spyzie não exige que você faça root ou jailbreak no telefone de destino.',
    fourthPara: "Todos os recursos do Spyzie, incluindo o monitoramento do histórico do navegador, funcionam em total sigilo. Isso significa que você pode visualizar todos os registros do histórico e eles não terão ideia disso. Na verdade, você pode até bloquear o acesso deles a qualquer site sem que eles descubram"
  },
  {
    slug: "sim-card-location-tracker",
    title: `Rastreador Remoto de Cartão SIM do Spyzie`,
    cardHeroTitle: "Rastreador de cartão SIM",
    cardHeroDescription:
      "Obtenha todas as informações sobre um telefone, como código SIM e número IMEI.",
    featureTitle:
      "Receba alertas sempre que o usuário do telefone trocar de cartão SIM.",
    features: [
      "Saiba mais sobre o número de telefone do cartão SIM e a operadora de telefonia.",
      "Descubra o local de rede do cartão SIM de destino.",
      "Monitore as informações do cartão SIM de qualquer computador, tablet ou telefone.",
      "Monitoramento de cartão SIM 100% oculto.",
    ],
    stepSectionTitle: "3 etapas simples para rastrear um cartão SIM",
    steps: [
      {
        title: "Inscrever-se",
        description: "Registre-se para uma conta Spyzie totalmente grátis.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "O assistente de configuração automática do Spyzie irá guiá-lo através do processo de configuração",
      },
      {
        title: "Comece a rastrear o cartão SIM",
        description:
          "Acesse o painel do Spyzie e visualize todas as informações do cartão SIM.",
      },
    ],
    featureDetailMain: 'Rastreamento secreto de cartão SIM com Spyzie',
    mainHeadingPara: [
      "Após a primeira configuração, o Spyzie pode ser executado instantaneamente a partir do navegador da Web de qualquer dispositivo. Tudo o que você precisa fazer é acessar sua conta do Spyzie usando seu nome de usuário e senha.",
      "Depois de seguir essas etapas, você poderá acessar o painel do Spyzie e todos os seus recursos. Para rastrear os detalhes do cartão SIM, você pode clicar na guia 'Rastreador de cartão SIM' no painel.",
      "Este módulo oferece todos os detalhes sobre o cartão SIM do usuário. Você pode descobrir o número de telefone, as informações do cartão SIM e a localização aproximada com base na rede telefônica, mesmo que o GPS esteja desligado."
    ],
    featureSecHeading: 'Por que rastrear um cartão SIM?',
    secPara: [
      "Você pode pensar que o rastreamento do cartão SIM não é muito útil para você. No entanto, isso mudará assim que você vir o que o rastreador de cartão SIM do Spyzie tem reservado para você.",
      "O rastreador de cartão SIM notifica você sempre que houver uma mudança de cartão SIM no telefone de destino. Portanto, se o usuário do telefone estiver escondendo algum segredo de você ou mantendo um número secreto, você aprenderá sobre isso usando o Spyzie. Você também conhecerá todos os detalhes do novo cartão SIM.",
      "Além disso, o rastreador de cartão SIM mostrará a área em que o usuário está presente em tempo real. Isso é útil se o GPS do telefone estiver desligado e você ainda quiser rastrear a localização.",
      'Recursos como rastreamento de cartão SIM oculto sem root ou jailbreak podem ser bastante difíceis de encontrar. Este é mais um motivo para começar a usar o Spyzie imediatamente!'
    ],
    thirdPara: 'O Spyzie permite que você rastreie as informações do cartão SIM de um telefone sem a necessidade de fazer root ou jailbreak. Este é um recurso muito raro, pois a maioria dos outros métodos precisa que você faça o root ou faça o jailbreak de um telefone. Alguns métodos exigem até hardware adicional para rastreamento do cartão SIM. No entanto, o Spyzie não exige tal coisa.',
    fourthPara: 'O Spyzie criou seu serviço de monitoramento enquanto cuida especialmente da interface furtiva. Não importa se você está rastreando o cartão SIM de um telefone Android ou iPhone, não há chance de o usuário-alvo saber disso. Isso foi possível graças ao design furtivo exclusivo do Spyzie para telefones Android e iPhones.',
  },
  {
    slug: "whatsapp-spy",
    title: `Espie o WhatsApp remotamente com o Spyzie`,
    cardHeroTitle: "WhatsApp espião",
    cardHeroDescription:
      "Leia todas as conversas privadas do WhatsApp do usuário. Leia todas as conversas privadas do WhatsApp do usuário.",
    featureTitle:
      "Veja toda a atividade do WhatsApp na ponta dos dedos:",
    features: [
      "Veja seus bate-papos privados e suas mensagens em grupo.",
      "Veja todas as fotos ou vídeos que eles compartilham no WhatsApp.",
      "Verifique seus contatos do WhatsApp, juntamente com a foto do perfil.",
      "Leia seus dados privados do WhatsApp sem root ou jailbreak.",
    ],
    stepSectionTitle: "3 passos simples para espionar o WhatsApp",
    steps: [
      {
        title: "Inscrever-se",
        description: "Crie uma conta Spyzie com seu ID de e-mail.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "O assistente de configuração do Spyie irá guiá-lo através do processo de configuração",
      },
      {
        title: "Comece a ler as conversas do WhatsApp",
        description:
          "Visualize todos os bate-papos do WhatsApp usando o painel do Spyzie.",
      },
    ],
    featureDetailMain: 'Encontre seus segredos mais obscuros com a espionagem do WhatsApp',
    mainHeadingPara: [
      "Seus filhos podem estar escondendo muitos segredos de você. No entanto, eles obviamente compartilham todos os seus segredos com uma pessoa ou outra no WhatsApp. Com o espião de WhatsApp do Spyzie, agora você tem respostas para todas as suas perguntas sobre o comportamento de seu filho.",
      "Caso alguém esteja assediando, intimidando ou chantageando seu filho, você pode descobrir isso por meio do espião de WhatsApp do Spyzie. Esse recurso ajudou inúmeros pais a proteger seus filhos, você também pode ser um deles!",
      "O benefício do rastreamento do WhatsApp não se limita apenas aos pais. A lei permite que os empregadores rastreiem os dados telefônicos de seus funcionários. Com a espionagem do WhatsApp, os empregadores podem aprender tudo sobre as atividades de seus funcionários, incluindo qualquer negligência ou compartilhamento de segredos de trabalho.",
      "Depois de usar o Spyzie, você ficará surpreso ao ver que a espionagem do WhatsApp pode ser incrivelmente fácil. Experimente o Spyzie hoje e use todos os seus recursos imediatamente!"
    ],
    featureSecHeading: 'Maneira segura de espionar o WhatsApp',
    secPara: [
      "O Spyzie é uma maneira segura e fácil de ler as mensagens do WhatsApp de alguém. Você só precisa gastar alguns minutos para configurar o Spyzie e não precisa de mais nada.",
      "Ao concluir a configuração do Spyzie, você obtém acesso à sua conta do Spyzie, onde todos os seus recursos estão disponíveis. O recurso de espionagem do WhatsApp está presente na guia 'Aplicativos de mídia social' no lado esquerdo do painel.",
      "O monitor de WhatsApp do Spyzie funciona em tempo real. Isso significa que as mensagens são atualizadas assim que o usuário as envia ou recebe.",
      "O Spyzie até mostra as mensagens e bate-papos que eles excluíram. Todas as mensagens são arquivadas dando a você a opção de baixar os logs de mensagens em seu dispositivo"
    ],
    thirdPara: 'Existem alguns outros aplicativos espiões do WhatsApp disponíveis online. No entanto, eles tornam obrigatório o root ou o jailbreak do dispositivo de destino para funcionar. O Spyzie não faz tais exigências e pode funcionar inteiramente sem precisar de root ou jailbreak!',
    fourthPara: 'O Spyzie criou sua solução de monitoramento de telefone para ficar completamente oculta. Portanto, você pode ler confortavelmente suas mensagens do WhatsApp a qualquer momento e eles nunca saberão disso, tudo graças ao modo furtivo do Spyzie para iPhones e telefones Android.',
  },
  {
    slug: "instagram-spy",
    title: `Espiar Instagram nunca foi tão fácil`,
    cardHeroTitle: "Aplicativo Espião do Instagram",
    cardHeroDescription:
      "Veja suas mensagens privadas do Instagram instantaneamente",
    featureTitle:
      "Veja todas as mensagens que eles enviam e recebem no Instagram.",
    features: [
      "Veja as pessoas com quem eles conversam no Instagram.",
      "Acompanhe seus seguidores e as pessoas que eles seguem.",
      "Veja os arquivos de mídia que eles compartilham no Instagram.",
    ],
    stepSectionTitle: "3 Simples Etapas para espionar o Instagram deles",
    steps: [
      {
        title: "Crie uma Conta Spyzie",
        description: "Inscreva-se no Spyzie e crie uma conta.",
      },
      {
        title: "Configurar o Spyzie",
        description:
          "Follow on-screen guide to configure Spyzie.",
      },
      {
        title: "Comece a espionar no Instagram",
        description:
          "Acesse seu painel e visualize todos os dados do Instagram.",
      },
    ],
    featureDetailMain: 'Com o Spyzie, você tem acesso completo aos dados privados do Instagram deles',
    mainHeadingPara: [
      "O Spyzie dá a você tanto acesso ao Instagram de alguém quanto a pessoa gosta. Você pode ver todas as mensagens que eles recebem ou enviam. Mesmo que excluam um bate-papo do Instagram, você ainda pode ver todas as mensagens do bate-papo por meio do Spyzie.",
      "Os recursos de monitoramento do Instagram do Spyzie podem ser usados no monitor do Instagram, presente na guia 'Aplicativos de mídia social' no painel. Você obtém acesso ao painel do Spyzie depois de configurar o Spyzie com base no dispositivo de destino",
      "O monitor do Instagram permite visualizar as mensagens do usuário-alvo em tempo real. Isso significa que, mesmo que eles estejam conversando agora, você pode visualizar suas novas mensagens simultaneamente. Por padrão, o monitor do Instagram mostra 10 mensagens por página. Você pode ajustar esse número com base em sua preferência.",
      "O Spyzie possui recurso de arquivamento automático e arquiva todas as suas mensagens automaticamente. Isso lhe dá a liberdade de baixar suas mensagens, se quiser. Você também pode ver as mensagens deles a qualquer momento depois, mesmo que eles as excluam."
    ],
    featureSecHeading: 'Espionagem do Instagram - A necessidade da hora',
    secPara: [
      "Havia várias pessoas procurando por uma ferramenta de monitoramento do Instagram, e o Spyzie deu a eles uma solução para o problema. O monitoramento do Instagram é um recurso muito necessário e inúmeras pessoas em todo o mundo já começaram a usá-lo.",
    ],
    thirdPara: 'Os pais são os principais usuários do Spyzie e de seu recurso de monitoramento do Instagram. A maioria dos pais está preocupada com o fato de seus filhos passarem muito tempo online. Deus sabe o que eles compartilham em seu Instagram publicamente e em particular por meio de mensagens. O Spyzie agora ajuda os pais a descobrir exatamente o que seus filhos estão fazendo.',
    fourthPara: "O Spyzie informa com quem seu filho fala no Instagram. Além disso, você também pode descobrir as mensagens que eles estão enviando e recebendo com qualquer pessoa. Se seu filho está compartilhando fotos privadas com estranhos, o Spyzie pode ajudá-lo a acabar com isso antes que seja tarde demais.",
    fifthPara: 'A melhor parte é que você não precisa ser um gênio da tecnologia para usar o Spyzie. Qualquer pessoa pode usar o Spyzie independentemente do nível de conhecimento que possua. Tudo o que você precisa é gastar alguns minutos na primeira configuração. Depois disso, você pode acessar a conta do Instagram instantaneamente a qualquer momento!'
  },
  {
    slug: "geofence-alert",
    title: `Alerta de cerca geográfica`,
    cardHeroTitle: "Alerta de cerca geográfica",
    cardHeroDescription:
      "Crie limites virtuais para sua localização, receba alertas se eles cruzarem.",
    featureTitle:
      "O Spyzie permite definir zonas proibidas e zonas permitidas em um mapa virtual para a localização do dispositivo. Se o dispositivo entrar nessas zonas, você receberá um alerta.",
    features: [
      "Você pode criar quantas zonas quiser.",
      "O Spyzie alerta você imediatamente quando eles o cruzam.",
      "Você também pode ver os movimentos do dispositivo em tempo real.",
    ],
    stepSectionTitle: "3 etapas simples para configurar a cerca geográfica",
    steps: [
      {
        title: "Inscreva-se gratuitamente",
        description: "Crie uma conta Spyzie usando seu endereço de e-mail como nome de usuário.",
      },
      {
        title: "Configurar o Spyzie.",
        description:
          "Siga as instruções na tela para configurar o Spyzie.",
      },
      {
        title: "Configurar cerca geográfica",
        description:
          "Crie quantas cercas geográficas quiser no mapa virtual.",
      },
    ],
    featureDetailMain: 'A configuração da geofence é fácil como torta',
    mainHeadingPara: [
      "Uma vez que o Spyzie esteja instalado e funcionando, você não precisa de nenhum outro aplicativo ou hardware para usá-lo. O Spyzie é executado em qualquer dispositivo por meio do navegador da web.",
      "Para usar o Spyzie, você só precisa fazer login no painel do Spyzie. Fazer login no Spyzie dá acesso ao painel do Spyzie. O recurso geofence está presente aqui no lado esquerdo.",
      "Você pode definir os limites da cerca geográfica em um mapa virtual. Quando o dispositivo entra na zona proibida ou sai das zonas permitidas, você é alertado com os carimbos de data e hora da saída e da entrada."
    ],
    featureSecHeading: 'Geofence oferece benefícios que você nunca imaginou',
    secPara: [
      "Embora o geofencing seja um recurso incomum ausente na maioria dos monitores de telefone, seus benefícios são óbvios demais para serem ignorados. Por um lado, geofencing é um recurso automatizado e você não terá que perder tempo olhando para a tela.",
      "Os pais nem sempre podem rastrear a localização ao vivo de seus filhos porque precisam trabalhar e cuidar de outras tarefas. Então, como eles garantem que seus filhos estejam seguros na escola? Geofencing acaba sendo útil nesse sentido, mantendo os olhos em seus filhos, mesmo quando os pais estão ocupados.",
      "Os empregadores também consideram esse recurso bastante útil. Eles podem definir uma geofence em torno de seu escritório para seus funcionários. Quando qualquer funcionário cruza essa geofence durante o horário de trabalho, o empregador pode saber disso."
    ],
    thirdPara: 'As pessoas relutam em fazer root ou jailbreak em um telefone, pois isso pode danificá-lo, arruiná-lo completamente ou torná-lo vulnerável a hackers. Portanto, o Spyzie é um grande alívio, pois funciona sem solicitar root ou jailbreak.',
    fourthPara: 'Independentemente de qual recurso do Spyzie você usa, incluindo o recurso de geofence, o usuário-alvo não terá nenhuma pista sobre isso. Enquanto o Spyzie envia alertas sempre que eles cruzam a cerca geográfica, o proprietário do telefone não descobrirá',
  },
];
