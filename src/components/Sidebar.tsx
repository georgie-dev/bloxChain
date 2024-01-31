'use client'
import React, {useState, useEffect} from "react";
import { MdOutlineAccountCircle, MdOutlineCancel, MdOutlineDarkMode, MdOutlineLightMode, MdOutlineLogin, MdOutlinePriceCheck } from "react-icons/md";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }:any) => {

  return (
    <div
      className={`fixed top-0 right-0 w-72 h-full bg-[#121d33] transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-72"
      } z-50`}
    >
      <div className="w-full flex items-center p-3 justify-start">
        <button
          onClick={toggleSidebar}
          className=" text-black"
        >
          <MdOutlineCancel size={20} color="#fff"/>
        </button>
      </div>
        
<div className=" flex flex-col gap-5 px-5 my-8">
<div className=" border-2 border-white bg-transparent text-white rounded-lg hover:shadow-inner p-2 text-base font-medium w-full  hover:text-[#ccd2de] hover:border-[#ccd2de]"> 
        <Link href="/login" className="flex gap-3 items-center w-full font-semibold p-3">
            <MdOutlineAccountCircle/>
          <small className=" font-inter font-semibold text-md ">
            Login
          </small>
        </Link>
        </div>
        
        <div className="  bg-white text-[#121d33] rounded-lg p-2 text-base font-medium w-full hover:bg-[#dfe3eb]"> 
        <Link href="/signup" className="flex gap-3 items-center w-full font-semibold p-3">
            <MdOutlineLogin/>
          <small className=" font-inter font-semibold text-md ">
            Sign up
          </small>
        </Link>
        </div>
</div>
      </div>
  );
};

export default Sidebar;
