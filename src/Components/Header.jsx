import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import { FaSearch } from "react-icons/fa";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  return (
    <div
      className=" text-white w-full h-30 flex justify-between items-center py-7.5 xl:px-40.5 px-4 fixed top-0 left-0 z-50 bg-transparent bg-linear-to-b 
    from-black/90 
    via-black/60 
    to-black/0"
    >
      <div className="flex justify-center items-center">
        <img className="w-15 h-15" src={logo} alt="" />
        <h1 className="pl-1.5 text-2xl font-bold text-[#FFFFFF]">Bta3Aflam</h1>
      </div>
      <nav className="hidden  bg-[#0F0F0F] h-18.75 rounded-xl border-4 border-[#1F1F1F] py-2.5 pr-10 pl-2.5 lg:flex justify-center items-center gap-7.5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold w-24.5 h-13.75 border-2 rounded-lg py-3.5 px-6 bg-[#1A1A1A] border-[#1A1A1A]"
              : "text-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          to={"/Movies-&-Shows"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold w-40.25 h-13.75 border-2 rounded-lg py-3.5 px-4 bg-[#1A1A1A] border-[#1A1A1A]"
              : "text-white"
          }
        >
          Movies & Shows
        </NavLink>
        <NavLink
          to={"/Support"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold w-29 h-13.75 border-2 rounded-lg py-3.5 px-6 bg-[#1A1A1A] border-[#1A1A1A]"
              : "text-white"
          }
        >
          Support
        </NavLink>
        <NavLink
          to={"/Subscriptions"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold w-41 h-13.75 border-2 rounded-lg py-3.5 px-6 bg-[#1A1A1A] border-[#1A1A1A]"
              : "text-white"
          }
        >
          Subscriptions
        </NavLink>
      </nav>
      <div className=" hidden w-24.5 h-8.5 md:flex gap-7.5 justify-center items-center font-bold">
        <FaSearch className="text-[25px] hover:text-red-500 duration-150 cursor-pointer" />
        <PiBellSimpleRingingBold className="text-[25px] hover:text-red-500 duration-150 cursor-pointer" />
      </div>
      <div className="md:hidden w-12 h-12 rounded-lg border-[3px] p-3 border-[#262626] bg-[#1A1A1A]">
        <HiMenuAlt3 />
      </div>
    </div>
  );
}
