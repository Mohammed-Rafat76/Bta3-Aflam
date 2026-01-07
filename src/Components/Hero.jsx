import heroImg from "../assets/Sub Container.png";
import { FaPlay } from "react-icons/fa";
export default function Hero() {
  return (
    <div>
      <div className="w-full ">
        <div className=" w-full lg:h-234 h-234.75">
          <img
            className="w-full h-157.75 object-cover "
            src={heroImg}
            alt=""
          />
          <div
            className="w-full flex flex-col justify-center items-center lg:px-37.5 px-0 gap-7.5 bg-linear-to-b 
            from-[#141414]
            via-[#0F0F0F]/60 
            to-transparent"
          >
            <div className="lg:w-274 w-97.5 flex flex-col justify-center items-center lg:px-7.5 px-0.5 gap-2.5">
              <h1 className="text-center font-bold lg:text-[48px] text-[28px] text-[#FFFFFF]">
                The Best Streaming Experience
              </h1>
              <p className="hidden lg:flex text-center font-normal text-[14px] text-[#999999]">
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                StreamVibe, you can enjoy a wide variety of content, including
                the latest blockbusters, classic movies, popular TV shows, and
                more. You can also create your own watchlists, so you can easily
                find the content you want to watch.
              </p>
              <p className="flix lg:hidden text-center font-normal text-[14px] text-[#999999]">
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere.
              </p>
            </div>
            <button
              className="cursor-pointer inline-flex items-center rounded-full lg:px-9 px-5 lg:py-3 py-1.5 lg:text-xl text-[15px] font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"
            >
              <FaPlay className="pr-2.5 lg:w-6.25 lg:h-6.25 w-5 h-5 " />{" "}
              Start Watching Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
