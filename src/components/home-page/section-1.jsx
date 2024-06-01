"use client";
import Image from "next/image";
import { Carousel } from "../shared/carouselSectionOne";
export const SectionOne = () => {
  return (
    <div className="h-[400px] md:h-[500px] lg:h-[540px]">
        <Carousel/>
    </div>
  );
};
