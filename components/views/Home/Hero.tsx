import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { AiFillApple } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";

const Hero = () => {
  return (
    <div className="bg-[#F6FBFD] py-24 lg:pb-0 pb-24 lg:pt-32">
      <div className="flex lg:flex-row flex-col container mx-auto justify-between mb-20 max-lg:max-w-full max-lg:p-5">
        <div className="w-[550px] max-lg:w-auto pb-10">
          <h1
            className="text-4xl text-[#4B4B4B] font-bold mb-7
                    max-lg:font-semibold  max-lg:mb-5 max-lg:text-3xl "
          >
            {`O melhor aplicativo para que os pais possam monitorar os telefones de seus filhos`}
          </h1>
          <p className="text-2xl text-[#4B4B4B] mb-10 font-normal  max-lg:font-light  max-lg:mb-6 max-lg:text-lg ">
            {`Os pais podem monitorar os telefones de seus filhos de forma muito intuitiva com Spyzie. Veja suas chamadas, textos e informações de geolocalização em tempo real. Isto se soma aos mais avançados recursos de monitoramento de software disponíveis.`}
          </p>
          <div className="flex gap-3 text-lg mb-8 text-[#4B4B4B] items-center max-lg:mb-6">
            <p>Disponível para:</p>
            <Link href={'/iphone-spy-app'}> <DiAndroid className="text-2xl text-[#9DA5BD] max-lg:text-xl cursor-pointer" /> </Link>
            <Link href={'/android-spy-app'}> <AiFillApple className="text-2xl text-[#9DA5BD] max-lg:text-xl cursor-pointer" /></Link>
          </div>
          <div className="flex gap-5">
            <Link href={'/demo/dashboard'}>
              < Button
                title="Ver demonstração"
                backgroundColor="#fff"
                color="#91a3f2"
                border="#91a3f2"
                padding={"8px 24px"}
                size={"14px"}
                weight={"400"}
              />
            </Link>
            <Link href={'/login'}>
              <Button
                title="Cadastre-se"
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
        <div className="pt-5 hidden lg:flex">
          <Image src={"/get.png"} alt={"img"} width={450} height={0} />
        </div>
      </div>
    </div >
  );
};

export default Hero;
