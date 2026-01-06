import { RiSmartphoneFill } from "react-icons/ri";
import { FaTablet } from "react-icons/fa";
import { IoTv } from "react-icons/io5";
import { BsFillLaptopFill } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
import { GiVrHeadset } from "react-icons/gi";

export default function DeviceCard() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
       <div className="rounded-[10px] border p-10 flex flex-col gap-6 border-[#262626]  bg-linear-to-tr from-[black] to-[#E50000]/10 ">
             <div className="flex justify-start items-center gap-3">
            <div className="md:rounded-[10px] rounded-lg md:w-13.5 md:h-13.5 w-11 h-11 border p-2.5 gap-2.5 bg-[#141414] border-[#1F1F1F] ">
            <RiSmartphoneFill className="md:w-7.5 md:h-7.5 w-6 h-6 text-[#E50000] "/>
            </div>
            <h1 className="font-semibold md:text-[20px] text[18px] text-[#FFFFFF] " >Smartphones</h1>
        </div>
        <div>
            <h1 className="font-normal md:text-[16px] text-[14px] text-[#999999] ">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h1>
        </div>
       </div>
       <div className="rounded-[10px] border p-10 flex flex-col gap-6 border-[#262626]  bg-linear-to-tr from-[black] to-[#E50000]/10 ">
             <div className="flex justify-start items-center gap-3">
            <div className="md:rounded-[10px] rounded-lg md:w-13.5 md:h-13.5 w-11 h-11 border p-2.5 gap-2.5 bg-[#141414] border-[#1F1F1F] ">
            <FaTablet className="md:w-7.5 md:h-7.5 w-6 h-6 text-[#E50000] "/>
            </div>
            <h1 className="font-semibold md:text-[20px] text[18px] text-[#FFFFFF] " >Tablet</h1>
        </div>
        <div>
            <h1 className="font-normal md:text-[16px] text-[14px] text-[#999999] ">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h1>
        </div>
       </div>
       <div className="rounded-[10px] border p-10 flex flex-col gap-6 border-[#262626]  bg-linear-to-tr from-[black] to-[#E50000]/10 ">
             <div className="flex justify-start items-center gap-3">
            <div className="md:rounded-[10px] rounded-lg md:w-13.5 md:h-13.5 w-11 h-11 border p-2.5 gap-2.5 bg-[#141414] border-[#1F1F1F] ">
            <IoTv className="md:w-7.5 md:h-7.5 w-6 h-6 text-[#E50000] "/>
            </div>
            <h1 className="font-semibold md:text-[20px] text[18px] text-[#FFFFFF] " >Smart TV</h1>
        </div>
        <div>
            <h1 className="font-normal md:text-[16px] text-[14px] text-[#999999] ">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h1>
        </div>
       </div>
       <div className="rounded-[10px] border p-10 flex flex-col gap-6 border-[#262626]  bg-linear-to-tr from-[black] to-[#E50000]/10 ">
             <div className="flex justify-start items-center gap-3">
            <div className="md:rounded-[10px] rounded-lg md:w-13.5 md:h-13.5 w-11 h-11 border p-2.5 gap-2.5 bg-[#141414] border-[#1F1F1F] ">
            <BsFillLaptopFill className="md:w-7.5 md:h-7.5 w-6 h-6 text-[#E50000] "/>
            </div>
            <h1 className="font-semibold md:text-[20px] text[18px] text-[#FFFFFF] " >Laptops</h1>
        </div>
        <div>
            <h1 className="font-normal md:text-[16px] text-[14px] text-[#999999] ">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h1>
        </div>
       </div>
       <div className="rounded-[10px] border p-10 flex flex-col gap-6 border-[#262626]  bg-linear-to-tr from-[black] to-[#E50000]/10 ">
             <div className="flex justify-start items-center gap-3">
            <div className="md:rounded-[10px] rounded-lg md:w-13.5 md:h-13.5 w-11 h-11 border p-2.5 gap-2.5 bg-[#141414] border-[#1F1F1F] ">
            <GiConsoleController className="md:w-7.5 md:h-7.5 w-6 h-6 text-[#E50000] "/>
            </div>
            <h1 className="font-semibold md:text-[20px] text[18px] text-[#FFFFFF] " >Gaming Consoles</h1>
        </div>
        <div>
            <h1 className="font-normal md:text-[16px] text-[14px] text-[#999999] ">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h1>
        </div>
       </div>
       <div className="rounded-[10px] border p-10 flex flex-col gap-6 border-[#262626]  bg-linear-to-tr from-[black] to-[#E50000]/10 ">
             <div className="flex justify-start items-center gap-3">
            <div className="md:rounded-[10px] rounded-lg md:w-13.5 md:h-13.5 w-11 h-11 border p-2.5 gap-2.5 bg-[#141414] border-[#1F1F1F] ">
            <GiVrHeadset className="md:w-7.5 md:h-7.5 w-6 h-6 text-[#E50000] "/>
            </div>
            <h1 className="font-semibold md:text-[20px] text[18px] text-[#FFFFFF] " >VR Headsets </h1>
        </div>
        <div>
            <h1 className="font-normal md:text-[16px] text-[14px] text-[#999999] ">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h1>
        </div>
       </div>
    </div>
  )
}
