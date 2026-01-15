import AvengersImg from "../assets/Avengers.png";
import { FaPlay } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { BiLike } from "react-icons/bi";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function MoveyHero() {
  return (
    <div className="relative w-full lg:h-177.5 h-117">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={AvengersImg}
        alt=""
      />
      <div
        className="absolute top-0 lg:px-10 px-6 pb-4 w-full h-full bg-linear-to-b 
            from-transparent
            via-[#0F0F0F]/60 
            to-[#141414] flex flex-col justify-end items-center gap-6"
      >
        <div className="flex flex-col lg:px-32 justify-center items-center gap-6">
          <h1 className="font-bold lg:text-[30px] text-[24px]">Avengers : Endgame</h1>
          <p className="hidden lg:flex text-center font-medium text-[16px] text-[#999999] ">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <button
            className="w-77.5 lg:w-40 cursor-pointer inline-flex  justify-center items-center rounded-lg px-5  py-3.5 lg:text-xl text-[15px] font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
                     transition ease-in-out delay-150   hover:bg-rose-600 duration-300  focus:bg-transparent"
          >
            <FaPlay className="pr-2.5 lg:w-6 lg:h-6 w-5 h-5 " />
            Play Now
          </button>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-lg border p-3 hover:bg-rose-600 transition ease-in-out duration-300  cursor-pointer bg-[#0F0F0F] border-[#262626] flex justify-center items-center">
              <TiPlus className="w-6 h-6 " />
            </div>
            <div className="w-12 h-12 rounded-lg border p-3  hover:bg-rose-600 transition ease-in-out duration-300 cursor-pointer bg-[#0F0F0F] border-[#262626] flex justify-center items-center">
              <BiLike className="w-6 h-6 " />
            </div>
            <div className="w-12 h-12 rounded-lg border p-3 hover:bg-rose-600 transition ease-in-out duration-300  cursor-pointer bg-[#0F0F0F] border-[#262626] flex justify-center items-center">
              <HiMiniSpeakerWave className="w-6 h-6 " />
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:flex justify-between items-center">
          <div className="rounded-lg border p-3 bg-[#0F0F0F] border-[#1F1F1F] hover:bg-rose-600 transition ease-in-out duration-300  cursor-pointer">
            <FaArrowLeft className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-0.75 w-8 rounded-full bg-[#E50000]" />
            <span className="h-0.75 w-8 rounded-full bg-[#2A2A2A]" />
            <span className="h-0.75 w-8 rounded-full bg-[#2A2A2A]" />
          </div>
          <div className="rounded-lg border p-3 bg-[#0F0F0F] border-[#1F1F1F] hover:bg-rose-600 transition ease-in-out duration-300  cursor-pointer">
            <FaArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
