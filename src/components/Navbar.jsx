import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl  ">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-6 py-3">Sign Up</button>
        </div>

        <div className="md:hidden">
          <Bars3Icon className="w-5" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
