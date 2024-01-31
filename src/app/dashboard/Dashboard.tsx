import React from "react";
import { IoIosPricetag } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import { NodeTable, NodeLine, Map } from ".";

const Dashboard = () => {
  return (
    <div className="px-20 bg-gray-100/40">
      <div className="py-4 border-b">
        <p className=" text-lg font-medium text-black">Ethereum Node Tracker</p>
      </div>
      <small className="text-gray-500 flex items-center text-sm gap-1 py-3 font-bold">
        Featured:{" "}
        <span className=" font-normal">Elevate your website with curated</span>{" "}
        name tags and labels{" "}
        <span className=" text-yellow-400">
          {" "}
          <IoIosPricetag />
        </span>{" "}
        <span className=" font-normal">in the all-new</span>Metadata API
      </small>
      <div className="mt-4 mb-2 border rounded-xl flex p-4 bg-white items-start gap-2">
        <TbBulb className="text-gray-400" size={25}/>
        <small className="text-black text-[15px]">Node Tracker shows statistics of detected nodes running on the network. Statistics include the top 10 countries with the highest number of nodes, daily total nodes and node type by clients and OS. Learn more in our Knowledge Base.</small>
      </div>
      <div className=" flex flex-nowrap my-4 w-full gap-10">
        <div className="w-1/2">
            <NodeTable/>
        </div>
        <div className="w-1/2">
            <NodeLine/>
        </div>
      </div>
      <div className=" w-full rounded-xl border shadow-sm my-5 p-10 bg-white">
        <Map/>
      </div>
    </div>
  );
};

export default Dashboard;
