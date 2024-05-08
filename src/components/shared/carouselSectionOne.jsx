"use client";
import { CarouselArrow } from "./carouselArrow";
import Posts from "../../../public/data/Post";
import { useEffect, useState } from "react";
import { CarouselCardBanner } from "./carouselCard";

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bannerData,setBannerData]=useState(Posts)
  return (
    <div className="relative flex">
      <CarouselArrow />
      <div className="flex overflow-hidden h-fit">
      {bannerData.map((val,idx)=>{return <CarouselCardBanner data={val} key={idx}/>})}
      </div>
    </div>
  );
};
