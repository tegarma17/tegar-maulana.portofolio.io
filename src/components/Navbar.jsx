import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar fixed top-0 w-full z-50 bg-white shadow-md`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HiBars3BottomRight className="text-black text-xl" />
          </div>
          <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Tentang Saya</a>
            </li>
            <li>
              <a>Keahlian</a>
            </li>
            <li>
              <a>Project</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-blue font-bold font-navbar tracking-tighter">Tegar</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-main text-lg text-black">
          <li className="font-bold text-blue ">
            <a>Home</a>
          </li>
          <li>
            <a>Tentang Saya</a>
          </li>
          <li>
            <a>Keahlian</a>
          </li>
          <li>
            <a>Project</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <li className="btn border-none bg-blue">Kontak Saya</li>
      </div>
    </div>
  );
};

export default Navbar;
