import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SideMenu from "./SideMenu/SideMenu";

type Props = {
  children: React.ReactNode;
};

const WebView: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <SideMenu />
      <div className="flex flex-col w-full h-full">
        <Navbar viewType="desktop"/>
        <div className="flex p-2 bg-yellow-950 flex-1 h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default WebView;
