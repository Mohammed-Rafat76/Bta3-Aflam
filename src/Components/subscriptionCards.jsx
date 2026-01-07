export default function SubscriptionCards() {
  return (
    <div className="flex gap-5">
      <div className="card transition hover:scale-110 ease-in-out duration-200  delay-100 bg-[#1A1A1A] rounded-[10px] border border-[#262626] p-10 shadow-sm">
        <div className="card-body gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
            <h2 className="text-[20px] text-[#FFFFFF] font-bold">Basic Plan</h2>
          </div>
          <p className="font-normal text-[16px] text-[#999999] ">
            Enjoy an extensive library of movies and shows, featuring a range of
            content, including recently released titles.
          </p>
          </div>
          <span className="text-[16px] text-[#999999] font-medium "><span className="font-semibold text-white text-[30px]">$9.99</span>/month</span>
         <div className="flex gap-3">
            <button className="text-white 
         transition ease-in-out delay-100 hover:scale-115 duration-200  focus:bg-transparent cursor-pointer w-[50%] btn rounded-md border px-5 py-3.5 btn-neutral ">Start Free Trial</button>
       <button className="text-white 
         transition ease-in-out delay-100 hover:scale-115 duration-200  focus:bg-transparent cursor-pointer w-[50%] btn rounded-md border px-5 py-3.5 bg-[#E50000] ">Choose Plan</button>
          </div>
        </div>
      </div>
      <div className="card transition hover:scale-110 ease-in-out duration-200  delay-100 bg-[#1A1A1A] rounded-[10px] border border-[#262626] p-10 shadow-sm">
        <div className="card-body gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
            <h2 className="text-[20px] text-[#FFFFFF] font-bold">Standard Plan</h2>
          </div>
          <p className="font-normal text-[16px] text-[#999999] ">
            Access to a wider selection of movies and shows, including most new releases and exclusive content
          </p>
          </div>
          <span className="text-[16px] text-[#999999] font-medium "><span className="font-semibold text-white text-[30px]">$12.99</span>/month</span>
          <div className="flex gap-3">
            <button className="text-white 
         transition ease-in-out delay-100 hover:scale-115 duration-200  focus:bg-transparent cursor-pointer w-[50%] btn rounded-md border px-5 py-3.5 btn-neutral ">Start Free Trial</button>
       <button className="text-white 
         transition ease-in-out delay-100 hover:scale-115 duration-200  focus:bg-transparent cursor-pointer w-[50%] btn rounded-md border px-5 py-3.5 bg-[#E50000] ">Choose Plan</button>
          </div>
        </div>
      </div>
      <div className="card transition hover:scale-110 ease-in-out duration-200  delay-100 bg-[#1A1A1A] rounded-[10px] border border-[#262626] p-10 shadow-sm">
        <div className="card-body gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
            <h2 className="text-[20px] text-[#FFFFFF] font-bold">Premium Plan</h2>
          </div>
          <p className="font-normal text-[16px] text-[#999999] ">
            Access to a widest selection of movies and shows, including all new releases and Offline Viewing
          </p>
          </div>
          <span className="text-[16px] text-[#999999] font-medium "><span className="font-semibold text-white text-[30px]">$14.99</span>/month</span>
          <div className="flex gap-3">
            <button className="text-white 
         transition ease-in-out delay-100 hover:scale-115 duration-200  focus:bg-transparent cursor-pointer w-[50%] btn rounded-md border px-5 py-3.5 btn-neutral ">Start Free Trial</button>
       <button className="text-white 
         transition ease-in-out delay-100 hover:scale-115 duration-200  focus:bg-transparent cursor-pointer w-[50%] btn rounded-md border px-5 py-3.5 bg-[#E50000] ">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
