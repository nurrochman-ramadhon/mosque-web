"use client";
import {
    FaRegArrowAltCircleRight,
    FaRegArrowAltCircleLeft,
  } from "react-icons/fa";
export const CarouselArrow = ({prev, next}) => {
  return (
    <div className="absolute h-full flex justify-between z-50 text-2xl w-full items-center text-blue-700 bg">
      <div className=" bg-slate-300 py-4 px-1 rounded-md cursor-pointer opacity-40 hover:opacity-80" onClick={prev}>
      <FaRegArrowAltCircleLeft />
      </div>
      <div className=" bg-slate-300 py-4 px-1 rounded-md cursor-pointer opacity-40 hover:opacity-80" onClick={next}>
      <FaRegArrowAltCircleRight />
      </div>
    </div>
  );
};
