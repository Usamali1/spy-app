import Button from "@/components/common/Button";
import bgimg from "../../../public/background1.png";
const Tracker = () => {
  return (
    <div
      className="background1 pt-40 pb-20 max-md:py-16 "
      style={{
        backgroundImage: `url(${bgimg.src})`,
      }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto justify-center text-center max-md:max-w-full max-md:px-5 ">
          <h2 className="text-[#383C43] text-3xl mb-7 max-md:text-xl max-md:mb-4">
            <b>Rastrear a Localização do Celular</b>
          </h2>
          <p className="text-[#6B7C93] text-base mb-8 max-md:text-md max-md:mb-4">
          Saiba sempre onde os seus filhos estão, o Spyzie fornece a localização em tempo real. Caso necessite, o Spyzie fornece também o relatório com o histórico dos locais onde eles estiveram.
          </p>
          <Button
            title="Saiba mais"
            backgroundColor="#91a3f2"
            color="#ffffff"
            border="#91a3f2"
            padding={"8px 24px"}
            size={"14px"}
            weight={"400"}
          />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
