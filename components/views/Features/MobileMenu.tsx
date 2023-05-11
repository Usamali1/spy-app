import React, { useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { MdTextsms } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsGeoAlt } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { BsFillSimFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileMenu = () => {
  const router = useRouter();
  const pathanme = router?.query?.feature;
  const [activeMenu, setActivemenu] = useState(true);

  return (
    <div
      className={`bg-[#FFFFFF] rounded py-5 ${activeMenu ? "shadow-lg" : ""}`}
    >
      <h1 className="text-[#3B3B3B] font-bold text-xl text-center hidden lg:block mb-8">
        Features Menu
      </h1>
      <div
        className="flex lg:hidden items-center justify-between px-8 mb-8 cursor-pointer"
        onClick={() => setActivemenu(!activeMenu)}
      >
        <h1 className="text-[#3B3B3B] font-bold text-xl text-center">
          Features Menu
        </h1>
        <span>
          <FiChevronDown
            className={`${
              activeMenu ? "rotate-180" : "rotate-0"
            } text-2xl transition-all transform`}
          />
        </span>
      </div>

      {activeMenu && (
        <div className={`grid grid-cols-2 lg:grid-cols-1 gap-x-10 lg:gap-0`}>
          {data.map((item, index) => {
            return (
              <Link href={`/${item?.url}`} passHref key={index}>
                <div
                  className={`${
                    pathanme === item?.url
                      ? "bg-[#F6FBFD] border-l-[#828AE6]"
                      : "bg-white border-l-transparent"
                  } py-2.5 font-[400px] transition-all duration-300 hover:bg-[#F6FBFD] border-l-[3px] border-l-transparent hover:border-l-[#828AE6]`}
                >
                  <div className="px-5 flex items-center gap-3">
                    <span className="text-[#4B4B4B] text-base ">
                      {item?.icon}
                    </span>
                    <span className="text-[#4B4B4B] text-sm ">
                      {item?.title}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

const data = [
  {
    icon: <MdOutlineCall />,
    title: "Call Tracker",
    url: "call-tracker-track-phone-calls",
  },
  {
    icon: <MdTextsms />,
    title: "Track SMS",
    url: "spy-on-text-messages",
  },
  {
    icon: <GoLocation />,
    title: "Track Location",
    url: "phone-location-tracker",
  },
  {
    icon: <BsGeoAlt />,
    title: "Geofence Alert",
    url: "geofence-alert",
  },
  {
    icon: <CiFacebook />,
    title: "Track FB Messages",
    url: "facebook-spy",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Spy",
    url: "whatsapp-spy",
  },
  {
    icon: <BsSnapchat />,
    title: "Snapchat Spy",
    url: "snapchat-spy",
  },

  {
    icon: <AiOutlineInstagram />,
    title: "Instagram spy",
    url: "instagram-spy",
  },
  {
    icon: <FaViber />,
    title: "Viber Spy",
    url: "viber-spy",
  },
  {
    icon: <MdLightMode />,
    title: "Stealth mode",
    url: "hidden-spy-app-for-android",
  },
  {
    icon: <VscHistory />,
    title: "Track Website History",
    url: "internet-history-tracker",
  },
  {
    icon: <BsFillSimFill />,
    title: "Track SIM Locationr",
    url: "sim-card-location-tracker",
  },
];
