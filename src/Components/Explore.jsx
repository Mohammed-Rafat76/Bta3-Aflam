import CardCollection from "./cardCollection";

export default function Explore() {
  return (
    <div className="w-full h-[1000px] md:h-fit flex flex-col justify-start items-start gap-16">
        <div className="w-fit flex flex-col items-start justify-center">
          <h1 className="font-bold md:text-[28px] text-[24px] text-[#FFFFFF]">
            Explore our wide variety of categories
          </h1>
          <p className="font-normal md:text-[16px] text-[14px] text-[#999999]">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="h-[280px] w-full">
          <CardCollection/>
        </div>
    </div>
  );
}
