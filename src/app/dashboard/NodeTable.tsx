import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Image from "next/image";

const NodeTable = () => {
    const data = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className=" w-full shadow-sm rounded-xl border bg-white">
      <div className=" p-4 flex justify-between border-b items-center">
        <small className=" text-base font-semibold text-black">
          Top 10 Countries
        </small>
        <button
          type="button"
          className=" border border-blue-500 bg-white text-blue-500 text-sm p-1 rounded-md"
        >
          View All Nodes
        </button>
      </div>
      <div className=" p-4">
        <small className=" text-gray-500 text-sm">
          Total <span className=" font-semibold">7,766</span> nodes found
        </small>
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="p-3">
            <tr className="p-2 text-black">
              <th className="w-fit px-2">#</th>
              <th className="w-fit text-xs md:text-base">Countries</th>
              <th className="flex items-center gap-1 w-fit text-xs md:text-base">
                Last 24 Hours <AiFillCaretDown />
              </th>
              <th className="w-fit text-xs md:text-base">
              Last 24 Hours
              </th>
              <th className="w-fi text-xs md:text-baset">
                Last 7 Days
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index)=>(
                <tr key={index} className="p-3 border-t">
                <td className="text-gray-400 py-1 px-2 w-fit">1</td>
                <td className="text-blue-400 py-1 w-fit">
                <span className="flex items-center py-1 w-fit gap-1">
                <Image
                  alt="flag"
                  src='/us.svg'
                  priority
                  width={20}
                  height={20}
                  />
                  United States
                </span>
                  </td>
                <td className="text-gray-400 w-fit">3,525 (44.80%)</td>
                <td className="py-1 w-fit text-red-600">
                  <span className="flex items-center w-fit gap-1"><AiFillCaretDown /> 55.22%</span>
                </td>
                <td className="py-1 w-fit text-red-600">
                  <span className="flex items-center w-fit gap-1"><AiFillCaretDown /> 25.21%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NodeTable;
