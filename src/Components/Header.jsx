import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import { FaSearch } from "react-icons/fa";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  return (
    <div
      className=" text-white w-full h-[120px] flex justify-between items-center py-[30px] xl:px-[162px] px-4 fixed top-0 left-0 z-50 bg-transparent bg-linear-to-b 
    from-black/90 
    via-black/60 
    to-black/0"
    >
      <div className="flex justify-center items-center">
        <img className="w-[60px] h-[60px]" src={logo} alt="" />
        <h1 className="pl-1.5 text-2xl font-bold text-[#FFFFFF]">Bta3Aflam</h1>
      </div>
      <nav className="hidden  bg-[#0F0F0F] h-[75px] rounded-xl border-4 border-[#1F1F1F] py-2.5 pr-10 pl-2.5 lg:flex justify-center items-center gap-[30px]">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold w-[98px] h-[55px] border-2 rounded-lg py-3.5 px-6 bg-[#1A1A1A] border-[#1A1A1A]"
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
              ? "text-red-500 font-bold w-[161px] h-[55px] border-2 rounded-lg py-3.5 px-4 bg-[#1A1A1A] border-[#1A1A1A]"
              : "text-white"
          }
        >
          Movies & Shows
        </NavLink>
        <NavLink
          to={"/Support"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold w-[116px] h-[55px] border-2 rounded-lg py-3.5 px-6 bg-[#1A1A1A] border-[#1A1A1A]"
              : "text-white"
          }
        >
          Support
        </NavLink>
        <NavLink
          to={"/Subscriptions"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold w-[164px] h-[55px] border-2 rounded-lg py-3.5 px-6 bg-[#1A1A1A] border-[#1A1A1A]"
              : "text-white"
          }
        >
          Subscriptions
        </NavLink>
      </nav>
      <div className=" hidden w-[98px] h-[34px] md:flex gap-[30px] justify-center items-center font-bold">
        <FaSearch className="cursor-pointer" />
        <PiBellSimpleRingingBold className="cursor-pointer" />
      </div>
      <div className="md:hidden w-12 h-12 rounded-lg border-[3px] p-3 border-[#262626] bg-[#1A1A1A]">
        <HiMenuAlt3 />
      </div>
    </div>
  );
}
