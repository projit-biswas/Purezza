import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-screen h-[5.5rem] py-5 px-11 flex flex-wrap justify-between items-center font-mono font-semibold cursor-pointer">
        <div>
          <img
            className="w-40 h-12"
            src="src\assets\purezza-png-white.png"
            alt="logo"
          />
        </div>

        <div>
          <ul className="flex gap-5 text-white p-1 text-sm">
            <li>HOME</li>
            <li>OUR SERVICES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>BLOG</li>
            <li>CARERER</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
