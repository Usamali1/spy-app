import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";

const Monitor = () => {
  return (
    <div className="w-full pt-10 sm:pt-20 pb-12 sm:pb-24">
      <div className="container">
        <div className="flex justify-between items-center max-md:mb-12 max-md:grid max-md:p-5 max-md:max-w-full">
          <div className="flex justify-center">
            <Image
              className="max-md:p-5"
              src={"/messages.png"}
              alt={"img"}
              width={400}
              height={400}
            />
          </div>
          <div className="w-[600px] max-md:w-auto max-md:text-center">
            <h2 className="text-[#383C43] text-4xl mb-7 font-bold max-md:text-2xl max-md:mb-5 max-md:font-semibold">
              Monitoramento de mensagens de texto
            </h2>
            <p className="text-[#6B7C93] text-base mb-8 font-normal max-md:text-sm max-md:mb-4 max-md:font-light">
              {` Com Spyzie, descubra a preferência, entre mensagens de texto e ligações telefônicas, que seus filhos mais utilizam para se comunicarem. Os pais poderão cuidar melhor de seus filhos afastando os do perigo se tiverem acesso às mensagens de texto trocadas e ligações efetuadas com pessoas desconhecidas.`}
            </p>
            <div className="max-md:flex max-md:justify-center">
              <Link href={'/spy-on-text-messages'}>
                <Button
                  title="Saber Mais"
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
      </div>
    </div>
  );
};

export default Monitor;
