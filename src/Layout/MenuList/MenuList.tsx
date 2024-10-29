import React from "react";
import { IoAddCircleOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { useAppSelector } from "../../Redux/Hooks/CustomHooks";

type Props = {};

const MenuList = (props: Props) => {
  const iconSize = 25;
  const iconColor = "white";
  const navigate = useNavigate();
  const theme = useAppSelector((state)=>state.themeColor.value)

  const list: {
    name: string;
    route: string;
    icon: React.ReactNode;
  }[] = [
    {
      name: "Home",
      route: "/",
      icon: <IoHomeOutline size={iconSize} color={iconColor} />,
    },
    {
      name: "Chat",
      route: "/chat",
      icon: <IoChatboxOutline size={iconSize} color={iconColor} />,
    },
    {
      name: "Post",
      route: "/post",
      icon: <IoAddCircleOutline size={iconSize} color={iconColor} />,
    },
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: <RxDashboard size={iconSize} color={iconColor} />,
    },
    {
      name: "Account",
      route: "/account",
      icon: <BsPerson size={iconSize} color={iconColor} />,
    },
    {
      name: "Settings",
      route: "/settings",
      icon: <IoSettingsOutline size={iconSize} color={iconColor} />,
    },
    {
      name: "Favorites",
      route: "/favorites",
      icon: <MdFavoriteBorder size={iconSize} color={iconColor} />,
    },
  ];
  return (
    <div className="flex flex-col gap-1 w-full items-center pt-2" style={
      {
        backgroundColor:theme==="dark"?"black":"whitesmoke"
      }
    }>
      {list.map(({ name, route, icon }) => (
        <div className="flex w-[90%] gap-2 items-center pl-2 rounded-[5px] hover: cursor-pointer h-[40px] bg-slate-500" key={name} onClick={() => navigate(route)}>
          {icon}
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
