import { useState } from "react";
import SubscriptionCards from "./subscriptionCards";

export default function Choose() {
  const [active, setActive] = useState("Monthly");
  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-20">
        <div className="flex gap-2.5 flex-col items-start justify-center">
          <h1 className="font-bold text-[#FFFFFF] text-[28px] ">
            Choose the plan that's right for you
          </h1>
          <p className="font-normal text-[16px] text-[#999999] ">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className=" rounded-lg border p-2 bg-[#0F0F0F] border-[#262626] flex join justify-center items-center">
          <button onClick={()=>{setActive("Monthly")}} className={`btn btn-sm  join-item rounded-md text-[14px] px-5 py-5 border-0 ${active==="Monthly"? "bg-[#1F1F1F] text-[#FFFFFF]" : "bg-transparent text-[#999999]" } `} >Monthly</button>
          <button onClick={()=>{setActive("Yearly")}} className={`btn btn-sm  join-item rounded-md text-[14px] px-5 py-5 border-0 ${active==="Yearly"? "bg-[#1F1F1F] text-[#FFFFFF]" : "bg-transparent text-[#999999]" } `} >Yearly</button>
        </div>
      </div>
      <div>
        <SubscriptionCards/>
      </div>
    </div>
  );
}
