import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
export default function Card() {
  return (
    <div>
      <div className="card bg-[#1A1A1A] image-full  shadow-sm p-6 pb-8 rounded-[10px]">
        <figure className="grid grid-cols-2 gap-1.5">
          <img className="w-full rounded-md"
            src={img1}
            alt="Shoes"
          />
          <img className="w-full rounded-md"
            src={img2}
            alt="Shoes"
          />
          <img className="w-full rounded-md"
            src={img3}
            alt="Shoes"
          />
          <img className="w-full rounded-md"
            src={img4}
            alt="Shoes"
          />
        </figure>
        <div className=" flex flex-row justify-center items-center relative ">
          <h2 className="font-bold hover:text-red-500 duration-150 cursor-pointer">Action</h2>
        </div>
      </div>
    </div>
  );
}
