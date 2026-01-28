import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { VscBriefcase } from "react-icons/vsc";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import ContactIcon from './ContactIcon';

export default function Navbar() {
  
  const navItem = (
    <>
      <a href="#home" className="text-primary">
        <IoHomeOutline className="" size={32} />
      </a>
      <a href="#" className="text-[#646464] hover:text-primary">
        <FaRegUser size={32} />
      </a>
      <a href="" className="text-[#646464] hover:text-primary">
        <VscBriefcase size={32} />
      </a>
      <a href="" className="text-[#646464] hover:text-primary">
        <HiOutlinePencilSquare size={32} />
      </a>
      <a href="" className="text-[#646464] hover:text-primary">
        <ContactIcon className="w-8" />
      </a>
    </>
  );
  
  return (
    <div className="py-6 bg-custom-black">
      <div className="max-w-1647 mx-auto flex items-center justify-between">
        {/* logo */}
        <div>
          <p className="text-4xl font-bold">
            Daryl{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smith
            </span>
          </p>
          <p className="text-lg text-[#C2C2C2]">UI/UX designer</p>
        </div>
        {/* nav preview */}
        <div className="flex gap-4 items-center">
          <span className="bg-linear-to-r from-primary to-secondary p-2.75 font-bold rounded-md">
            <IoHomeOutline size={20} />
          </span>
          <span className="text-2xl font-bold">Home</span>
        </div>

        <nav className="absolute z-10 left-[43.5px] top-[25%]">
          <ul className="flex flex-col gap-11">{navItem}</ul>
        </nav>

        <button className="btn-outline">Talk To Me</button>
      </div>
    </div>
  );
}
