"use client"
import { FaMosque } from "react-icons/fa";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export const Footer = () => {
    return <div className="shadow">
        <div className="flex">
            <div className="w-full flex flex-col items-center justify-center text-sm">
                <div className="flex items-center gap-1 font-bold">
                <FaMosque/><span>Masjid Darussalam</span>
                </div>
                <p className="text-sm text-gray-700">Mari Hidupkan Masjid</p>
            </div>
            <div className="w-full">
                Kontak info :
                <ul className="flex flex-col gap-1 text-sm mt-3">
                    <li className="flex items-center gap-1">
                        <FaInstagram/> <span>: @Masjid_Ig</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <IoMailOutline/> <span>: @Masjid@mail.com</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <FaXTwitter/> <span>: @Masjid_Tw</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="text-xs text-center mt-3 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 p-2 text-white flex flex-col gap-2">
            <p>
                Home / Agenda / Galeri / Kontak
            </p>
            <p>
            @ Copyright : @nurrochman.acc@gmail.com || 2024
            </p>
        </div>
    </div>
}