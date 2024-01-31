import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { AreaChart } from ".";

const NodeLine = () => {
  return (
    <div className=" w-full rounded-xl border shadow-sm bg-white pb-1.5">
      <div className=" p-4 border-b">
        <small className=" text-base font-semibold text-black">
          Node Stats
        </small>
      </div>
      <div className=" flex flex-nowrap gap-6 items-center p-4">
        <div className=" p-3 shadow-sm rounded-xl w-1/3 border flex flex-col items-center justify-center gap-2">
            <small className=" flex gap-1 text-red-600 items-center text-xl"><AiFillCaretDown/> <span>0.67%</span></small>
            <small className=" text-gray-600 text-sm">Last 24 Hours</small>
        </div>
        <div className=" p-3 shadow-sm rounded-xl w-1/3 border flex flex-col items-center justify-center gap-2">
            <small className=" flex gap-1 text-green-600 items-center text-xl"><AiFillCaretUp/> <span>3.62%</span></small>
            <small className=" text-gray-600 text-sm">Last 7 Days</small>
        </div>
        <div className=" p-3 shadow-sm rounded-xl w-1/3 border flex flex-col items-center justify-center gap-2">
            <small className=" flex gap-1 text-green-600 items-center text-xl"><AiFillCaretUp/> <span>1.35%</span></small>
            <small className=" text-gray-600 text-sm">Last 30 Days</small>
        </div>
      </div>
      <div className=" p-4 mx-auto">
        <AreaChart/>
      </div>
    </div>
  );
};

export default NodeLine;
