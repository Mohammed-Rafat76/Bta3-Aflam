import Devices from "../Components/Devices";
import Explore from "../Components/Explore";
import Hero from "../Components/Hero";
export default function Home() {
  return (
    <div className="bg-[#0F0F0F]">
      <Hero />
      <div className="md:px-20 px-4 py-40">
      <Explore/>
      </div>
      <div className="md:px-20 px-4 pb-40">
      <Devices/>
      </div>
    </div>
  );
}
