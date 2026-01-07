import Accordion from "./Accordion";

export default function Frequently() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-5 lg:items-end lg:justify-start items-start">
        <div className="flex flex-col gap-2.5 ">
          <h1 className="font-bold lg:text-[28px] text-[20px] text-[#FFFFFF] ">
            Frequently Asked Questions
          </h1>
          <p className="font-normal lg:text-[16px] text-[14px] text-[#999999] ">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button
          className="w-35 h-12.25 cursor-pointer inline-flex items-center rounded-md lg:px-3 px-5 lg:py-3.5 py-1.5 lg:text-[14px] text-[14px] font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
                     transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"
        >
          Ask a Question
        </button>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
}
