import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container mx-auto px-10">
      <div className={' py-5'}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h1 className="text-[#4B4B4B] text-lg  mb-5 font-bold">Fonte</h1>
            <Link href={'/install'}> <p className="text-[#4B4B4B] text-sm  ">Guia de Configuração do Spyzie para iOS</p> </Link>
          </div>
          {/* <div>
          <h1 className="text-[#4B4B4B] text-lg  mb-5 font-bold">Características</h1>
          <p className="text-[#4B4B4B] text-sm  mb-3">Keylogger do Android</p>
          <p className="text-[#4B4B4B] text-sm  mb-3">
            Monitoramento dos pais do iPhone
          </p>
          <p className="text-[#4B4B4B] text-sm  mb-3">Alerta de cerca geográfica</p>
          <p className="text-[#4B4B4B] text-sm mb-3 ">Espionar as mensagens do FB</p>
          <p className="text-[#4B4B4B] text-sm  ">Acompanhe o histórico do site</p>
        </div> */}
          <div>
            <h1 className="text-[#4B4B4B] text-lg  mb-5 font-bold">Empresa</h1>
            <Link href={'/aboutspy'}> <p className="text-[#4B4B4B] text-sm  mb-3">Sobre</p> </Link>
            <Link href={'/faq'}> <p className="text-[#4B4B4B] text-sm  mb-3">perguntas frequente</p> </Link>
            <Link href={'/contactus'}>  <p className="text-[#4B4B4B] text-sm  mb-3">Contate-nos</p> </Link>
            <Link href={'/supporttext'}><p className="text-[#4B4B4B] text-sm  ">Centro de Apoio</p> </Link>
          </div>
          <div>
            <h1 className="text-[#4B4B4B] text-lg  mb-5 font-bold">Informações legais</h1>
            {/* <p className="text-[#4B4B4B] text-sm  mb-3">Politica de reembolso</p> */}
            <Link href={'/agreement'}>  <p className="text-[#4B4B4B] text-sm  mb-3">EULA</p> </Link>
            <Link href={'/privacypolicy'}> <p className="text-[#4B4B4B] text-sm  mb-3">Política de Privacidade</p> </Link>
            <Link href={'/cookie'}><p className="text-[#4B4B4B] text-sm mb-3 ">política de cookies</p></Link>
            {/* <p className="text-[#666] text-sm  ">Peça um reembolso</p> */}
          </div>
          <div>
            <h1 className="text-[#4B4B4B] text-lg mb-9">
              Pagamento on-line seguro:
            </h1>
            <Image src={"/Screenshot.png"} alt={"img"} width={200} height={100} />
          </div>
        </div>

        <h3 className="text-[#32325D] text-sm mb-5 font-[700px]">Isenção de responsabilidade</h3>
        <p className="text-[#32325D] text-sm mb-8 max-sm:text-xs ">
          Isso não é SPYZIE.COM. O spyzie.io não está de forma alguma relacionado ou associado ao spyzie.com. SOFTWARE DESTINADO APENAS PARA USOS LEGAIS. É violação da lei federal e/ou estadual dos Estados Unidos e da lei de sua jurisdição local instalar software de vigilância, como o Software licenciado, em um telefone celular ou outro dispositivo que você não tem o direito de monitorar. A lei geralmente exige que você notifique os usuários/proprietários do dispositivo de que ele está sendo monitorado. A violação deste requisito pode resultar em severas penalidades monetárias e criminais impostas ao infrator. Você deve consultar seu próprio consultor jurídico com relação à legalidade do uso do Software licenciado da maneira que pretende usá-lo antes de fazer o download, instalá-lo e usá-lo. Você assume total responsabilidade por determinar que tem o direito de monitorar o dispositivo no qual o Software licenciado está instalado. O Spyzie não pode ser responsabilizado se um usuário optar por monitorar um dispositivo que o usuário não tem o direito de monitorar; nem o Spyzie pode fornecer aconselhamento jurídico sobre o uso do Software licenciado.
        </p>

        <div className="flex gap-52 items-center max-sm:grid max-sm:gap-5 ">
          <div className="max-sm:flex justify-center max-sm:w-[300px]">
            <button className="flex gap-3 border-[1px] rounded-[5px] bg-white border-black py-1 px-3 items-center">
              <Image src={"/portugal.png"} alt={"img"} width={15} height={0} />
              <h1 className="text-[#3B3B3B] text-xs">Portuguese</h1>
              <AiOutlineDown className="text-xs text-[#3B3B3B]" />
            </button>
          </div>
          <p className="text-xs text-[#4B4B4B] max-sm:text-center">
            Direitos autorais © 2023 FamiSoft Limited. Todas as marcas registradas são de propriedade de seus respectivos donos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
