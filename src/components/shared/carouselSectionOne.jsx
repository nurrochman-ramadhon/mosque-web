"use client";
import { CarouselArrow } from "./carouselArrow";
import Posts from "../../../public/data/Post";
import { useEffect, useState } from "react";
import { CarouselCardBanner } from "./carouselCard";

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bannerData, setBannerData] = useState([]);
  const featuredBanner = () => {
    const isFeatured = Posts.filter((val) => {
      return val.isFeatured == true;
    });
    setBannerData(isFeatured);
  };
  useEffect(() => {
    featuredBanner();
  }, []);
  const prev = () => {
    setActiveSlide((curr) => (curr === 0 ? bannerData.length - 1 : curr - 1));
    console.log({ activeSlide });
  };
  const next = () => {
    setActiveSlide((curr) => (curr === bannerData.length - 1 ? 0 : curr + 1));
    console.log({ activeSlide });
  };
  return (
    <div className="relative flex">
      <CarouselArrow next={next} prev={prev} />
      <div className="relative overflow-hidden ">
        <div
          className="flex h-fit transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {bannerData.map((val, idx) => {
            return <CarouselCardBanner data={val} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};
