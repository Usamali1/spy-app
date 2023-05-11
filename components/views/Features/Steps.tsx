import { MdOutlineFormatColorReset } from "react-icons/md";
import Monitor from "../../common/Monitor";

const Steps = ({ title, stepsData }: any) => {
  return (
    <div>
      <div className=" bg-white shadow-lg px-8 py-8 mb-11">
        <h3 className="text-xl font-[400px] text-[#3B3B3B] mb-10 text-center ">
          {title}
        </h3>
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-12 mx-auto">
          {stepsData?.map((item: any, index: number) => {
            return (
              <div key={index}>
                <Monitor title={item.title} description={item.description} />
              </div>
            );
          })}
        </div>

        <h4 className="text-[#3B3B3B] text-xl mb-9 text-center font-[700px]">
          Create an account for free
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
          <input
            type="text"
            placeholder="Your email"
            className="border-[1px] py-3 pl-5 w-full  text-base  rounded-[4px] focus-within:outline-none"
          />
          <div className=" relative">
            <input
              type="text"
              placeholder="Set a password "
              className=" border-[1px] py-3 pl-5 rounded-[4px] w-full focus-within:outline-none"
            />
            {/* <MdOutlineFormatColorReset className="absolute text-[#4B4B4B] text-xl top-3 right-3" /> */}
          </div>
          <button className="bg-[#91A3F2] text-white py-3 w-full md:max-w-[270px] px-14 text-sm font-[700px] rounded-[50px]">
            Sign up free
          </button>
        </div>
        {/* creat account end */}

        <p className="text-[#6B7C93] text-sm text-center mb-9">
          By signing up, I hereby agree to the{" "}
          <span>
            {" "}
            <u className="text-black">Privacy Policy</u>
          </span>
        </p>
        <div className="flex justify-center">
          <button className="bg-white border-[#828AE6] border-[2px] py-3 w-full  text-[#828AE6] text-base md:text-lg font-[700px] rounded-[50px]">
            {" "}
            <b>Check Live Demo Here </b>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
