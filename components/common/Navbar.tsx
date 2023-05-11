import Image from "next/image";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-6xl items-center mx-auto">
      <div>
        <Image src={"/logo.png"} alt={"img"} width={300} height={0} />
      </div>
      <div className="flex gap-7">
        <div className="flex gap-3 items-center">
          <p>Servizi</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <p>Chi Siamo</p>
        <p>Come Funziona</p>
        <p> Casi d’uso</p>
        <p> Contattaci</p>
        <p>Blog</p>
        <p> FAQ</p>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
