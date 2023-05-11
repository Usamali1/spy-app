import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="border-t-[2px] flex w-full md:pt-20">
        <div>
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleDrawer={toggleDrawer}
          />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
