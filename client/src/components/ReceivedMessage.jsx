import React from "react";
import { RxAvatar } from "react-icons/rx";

const ReceivedMessage = () => {
  return (
    // <div className="flex justify-end p-2 mb-4">
    //   <div className="bg-slate-800/80 text-white rounded-lg rounded-tr-none py-1 px-2 w-3/4 relative top-3 ">
    //     <p className=" font-thin text-sm leading-tight pr-2 text-left">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
    //       ipsam consequatur inventore aut et deserunt.
    //     </p>
    //     <div className="text-xs text-emerald-500 text-right w-full">3:30 AM</div>
    //   </div>
    //   <div className="">
    //     <RxAvatar size={25} />
    //   </div>
    // </div>
    <div className="flex p-2 mb-4">
      <div className="">
        <RxAvatar size={25} />
      </div>
        <div className="bg-slate-800/80 text-white rounded-lg rounded-tl-none py-1 px-2 w-3/4 relative top-3 ">
          <p className="font-thin text-sm leading-tight pr-2 text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ipsam consequatur inventore aut et deserunt.
          </p>
          <div className="text-[10px] text-emerald-500 text-right w-full">
            3:30 AM
          </div>
        </div>
    </div>
  );
};

export default ReceivedMessage;
