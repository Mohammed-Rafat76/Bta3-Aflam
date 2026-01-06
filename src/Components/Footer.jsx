import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-full h-175 md:h-126.25 px-4 md:px-20 pt-12.5 md:pt-25 md:pb-12.5 pb-5 bg-[#0F0F0F] flex flex-col justify-between gap-12.5">
      <div className="h-51 xl:flex gap-7.5 ] justify-center grid grid-cols-2 text-center">
        <div className="w-44.75 pb-7.5 lg:pb-0 lg:w-60.25 flex flex-col lg:gap-6 gap-4">
          <h1 className="font-semibold lg:text-[20px] text-[16px] text-[#FFFFFF]">Home</h1>
          <div className="flex lg:gap-3.5 gap-2 flex-col">
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">
              Categories
            </h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Devices</h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Pricing</h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">FAQ</h1>
          </div>
        </div>
        <div className="w-44.75 pb-7.5 lg:pb-0 lg:w-60.25 flex flex-col lg:gap-6 gap-4">
          <h1 className="font-semibold lg:text-[20px] text-[16px] text-[#FFFFFF]">Movies</h1>
          <div className="flex lg:gap-3.5 gap-2 flex-col">
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Gernes</h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Trending</h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">
              New Release
            </h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Popular</h1>
          </div>
        </div>
        <div className="w-44.75 pb-7.5 lg:pb-0 lg:w-60.25 flex flex-col lg:gap-6 gap-4">
          <h1 className="font-semibold lg:text-[20px] text-[16px] text-[#FFFFFF]">Shows</h1>
          <div className="flex lg:gap-3.5 gap-2 flex-col">
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Gernes</h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Trending</h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">
              New Release
            </h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Popular</h1>
          </div>
        </div>
        <div className="w-44.75 pb-7.5 lg:pb-0 lg:w-60.25 flex flex-col lg:gap-6 gap-4">
          <h1 className="font-semibold lg:text-[20px] text-[16px] text-[#FFFFFF]">Support</h1>
          <div className="flex lg:gap-3.5 gap-2 flex-col">
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="w-44.75 pb-7.5 lg:pb-0 lg:w-60.25 flex flex-col lg:gap-6 gap-4">
          <h1 className="font-semibold lg:text-[20px] text-[16px] text-[#FFFFFF]">
            Subscription
          </h1>
          <div className="flex lg:gap-3.5 gap-2 flex-col">
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Plans</h1>
            <h1 className="font-medium lg-text-[18px] text-[14px] text-[#999999]">Features</h1>
          </div>
        </div>
        <div className="w-44.75 pb-7.5 lg:pb-0 lg:w-60.25 flex flex-col lg:gap-6 gap-4">
          <h1 className="font-semibold lg:text-[20px] text-[16px] text-[#FFFFFF]">
            Connect With Us
          </h1>
          <div className="flex justify-start lg:gap-3.5 gap-2.5 ">
            <div className="hover:bg-amber-50 hover:text-black transition duration-400 cursor-pointer lg:w-14 lg:h-14 w-11 h-11 rounded-md lg:rounded-lg border lg:p-4 p-3 bg-[#1A1A1A] border-[#262626] flex justify-center items-center">
              {" "}
              <FaFacebook className=" w-6 h-6" />
            </div>
            <div className="hover:bg-amber-50 hover:text-black transition duration-400 cursor-pointer lg:w-14 lg:h-14 w-11 h-11 rounded-md lg:rounded-lg border lg:p-4 p-3 bg-[#1A1A1A] border-[#262626] flex justify-center items-center">
              {" "}
              <FaTwitter className=" w-6 h-6" />
            </div>
            <div className="hover:bg-amber-50 hover:text-black transition duration-400 cursor-pointer lg:w-14 lg:h-14 w-11 h-11 rounded-md lg:rounded-lg border lg:p-4 p-3 bg-[#1A1A1A] border-[#262626] flex justify-center items-center">
              <FaLinkedin className=" w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t pt-5 border-[#262626] flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center font-normal lg:text-[18px] text-[14px] text-[#808080]">
        <h1>@2023 streamvib, All Rights Reserved</h1>
        <div className="flex gap-5">
          <h1 className="border-r border-[#262626] pr-5">Terms of Use</h1>
          <h1 className="border-r border-[#262626] pr-5">Privacy Policy</h1>
          <h1>Cookie Policy</h1>
        </div>
      </div>
    </div>
  );
}
