import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="bg-blue-500 text-white relative">
      <p className="text-center">Jamovi</p>
      <ul className="flex justify-start items-end gap-6 mx-6 mt-3 transition-all duration-500">
        <IoMdMenu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setSideBar(true)}
        />

        {sideBar && <SideBar setSideBar={setSideBar}/>}

        <NavLink
          to="/variables"
          className={({ isActive }) =>
            isActive ? "bg-white px-2 py-1 text-black" : "transparent"
          }
        >
          Variables
        </NavLink>
        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive ? "bg-white px-2 py-1 text-black" : "transparent"
          }
        >
          Data
        </NavLink>
        <NavLink
          to="/analysis"
          className={({ isActive }) =>
            isActive ? "bg-white px-2 py-1 text-black" : "transparent"
          }
        >
          Analysis
        </NavLink>
        <NavLink
          to="/edit"
          className={({ isActive }) =>
            isActive ? "bg-white px-2 py-1 text-black" : "transparent"
          }
        >
          Edit
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
