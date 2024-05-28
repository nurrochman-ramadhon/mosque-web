"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { FaMosque } from "react-icons/fa";
import Link from "next/link";
import { Sidebar } from "../sidebar/Sidebar";

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
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

  const onHandlerCloseSideBar = () => {
    return setIsOpenSideBar(false)
  }

  return (
    <nav
      className={`bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 w-full flex justify-between items-center px-4 py-2 z-[99999] fixed text-white ${
        isScrolled
          ? " top-0 left-0 w-full shadow-md px-4 h-16 bg-opacity-90"
          : ""
      }`}
    >
      <div>
        <GiHamburgerMenu
          className="hover:text-blue-300 cursor-pointer"
          onClick={() => setIsOpenSideBar(true)}
        />
      </div>
      <div className="flex items-center space-x-2">
        {/* Logo and company name */}
        <span className="text-xl">
          <FaMosque />
        </span>
        <span className="text-xl font-bold">Masjid Darussalam</span>
      </div>
      <div className="flex items-center cursor-pointer hover:text-blue-300 ">
        <FaUser className="" />
      </div>
      <Sidebar isOpenSidebar={isOpenSidebar} onHandlerCloseSideBar={onHandlerCloseSideBar}/>
    </nav>
  );
};

export default Navbar;
