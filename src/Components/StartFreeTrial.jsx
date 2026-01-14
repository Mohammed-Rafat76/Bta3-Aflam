import backGround from "../assets/imges.png";
export default function StartFreeTrial() {
  return (
    <div  className="md:px-20 px-4 pb-40">
      <div className="h-86 lg:h-59 relative bg-cover bg-center overflow-hidden rounded-xl border lg:py-20 py-12.5 lg:px-15 px-7.5  bg-[#0F0F0F] border-[#262626] "  style={{ backgroundImage: `url(${backGround})` }}>
         <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative  z-10 flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:gap-25 gap-12.5">
            <div className="text-center lg:text-start flex flex-col gap-2.5 lg:items-start items-center justify-center">
          <h1 className=" font-bold text-[28px] text-[#FFFFFF] ">
            Start your free trial today!
          </h1>
          <p className="font-normal text-[16px] text-[#999999] ">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button
          className="text-white 
         transition ease-in-out delay-100 hover:scale-115 duration-200  focus:bg-transparent cursor-pointer btn rounded-md border px-5 py-3.5 bg-[#E50000] "
        >
          Start a Free Trail
        </button>
        </div>
      </div>
    </div>
  );
}
