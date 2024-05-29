"use client";
import { useState } from "react";
import { CarouselArrow } from "./carouselArrow";
import { GalleryCard } from "./gallery-card";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
export const GalleryCarousel = ({ data }) => {
  const [curr, setCurr] = useState(0);
  const onHandlePrev = () => {
    const slider = document.getElementById("slider");
    const carouselCard = document.getElementsByClassName("carousel-card");
    slider.scrollLeft = slider.scrollLeft - carouselCard[0].offsetWidth;
  };
  const onHandleNext = () => {
    const slider = document.getElementById("slider");
    const carouselCard = document.getElementsByClassName("carousel-card");
    console.log({slider},{carouselCard});
    slider.scrollLeft = slider.scrollLeft + carouselCard[0].offsetWidth;
  };
  return (
    <div  className="">
      <div className="relative">
        <div className=" absolute w-fit bg-slate-300 p-3 rounded-full cursor-pointer opacity-40 hover:opacity-80 my-auto left-2 top-1/2 z-50" onClick={onHandlePrev}>
          <FaRegArrowAltCircleLeft className="text-2xl" />
        </div>
        <div className="absolute w-fit bg-slate-300  p-3 rounded-full cursor-pointer opacity-40 hover:opacity-80 right-2 z-50 top-1/2" onClick={onHandleNext}>
          <FaRegArrowAltCircleRight className="text-2xl"/>
        </div>
        <div id="slider" className="w-full space-x-4 overflow-x-auto no-scrollbar scroll-smooth flex min-h-[450px] px-2 py-10 bg-slate-100">
          {data.map((val, idx) => {
            return <GalleryCard data={val} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};
