import React, { FC } from "react";

interface MainCards {
  heading: string;
  icon: any;
  image :any;
  title : string ;
}


const Picture: FC<MainCards> = ({ icon,heading,image,title }) => {
  return (
    <div >
<div className="  relative mb-4     ">
    <div >{image}</div>
    <div className="flex  absolute px-3 right-0 left-0 bg-transparent justify-between   py-2 bottom-[1px] text-[10px] items-center  bg-black ">
    <p className="   text-white ">{heading}</p>
    <div className="text-[#828AE6] text-sm"> {icon}</div>
    </div>
</div>
<div>{title}</div>
</div>


    );
};

export default Picture;