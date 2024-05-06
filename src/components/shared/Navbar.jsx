"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaMosque } from "react-icons/fa";
import Link from "next/link";

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
      className={`bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700  w-full flex justify-between items-center px-4 py-2 text-white ${
        isScrolled
          ? "fixed top-0 left-0 w-full z-50 shadow-md px-4 h-16 bg-opacity-90"
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

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${
          isOpenSidebar ? "visible" : "invisible"
        }`} onClick={onHandlerCloseSideBar}
      >
        <div
          className={`absolute top-0 px-4 w-[200px] h-full bg-white shadow transition-all duration-300 ease-in-out ${
            isOpenSidebar ? "left-0" : "-left-[200px]"
          }`}
        >
          <IoMdClose
            size={24}
            className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
            onClick={onHandlerCloseSideBar}
          />
          <ul className="mt-12">
            <li className="py-4">
              <Link
                href="/"
                onClick={onHandlerCloseSideBar}
                className="text-gray-600 hover:text-black"
              >
                Home
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="/shop"
                onClick={onHandlerCloseSideBar}
                className="text-gray-600 hover:text-black"
              >
                Agenda
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="/blog"
                onClick={onHandlerCloseSideBar}
                className="text-gray-600 hover:text-black"
              >
                Galeri
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="/contact"
                onClick={onHandlerCloseSideBar}
                className="text-gray-600 hover:text-black"
              >
                Materi Kajian
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="/contact"
                onClick={onHandlerCloseSideBar}
                className="text-gray-600 hover:text-black"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
