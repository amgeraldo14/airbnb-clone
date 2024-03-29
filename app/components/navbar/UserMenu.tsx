"use client";
import Reac, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      <div
        className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 100 : 0,
          transition: "visibility 250ms ease-in, opacity 125ms ease-in ",
        }}
      >
        <div className="flex flex-col cursor-pointer">
          <>
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={() => {}} label="Sign up" />
          </>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
