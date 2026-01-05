import Explore from "../Components/Explore";
import Hero from "../Components/Hero";
export default function Home() {
  return (
    <div className="bg-[#0F0F0F]">
      <Hero/>
      <div className="md:px-20 px-4">
      <Explore/>
      </div>
    </div>
  );
}
