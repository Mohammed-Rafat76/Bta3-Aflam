import DeviceCard from "./deviceCard";


export default function Devices() {
  return (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col items-start justify-center">
            <h1 className="font-bold md:text-[28px] text-[20px] text-[#FFFFFF] ">We Provide you streaming experience across various devices.</h1>
            <h1 className="font-normal md:text-[16px] text-[14px] text-[#999999] ">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</h1>
        </div>
        <div >
            <DeviceCard/>
        </div>
    </div>
  )
}
