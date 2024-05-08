"use client";
import Image from "next/image";

export const CarouselCardBanner = ({ data }) => {
  const { title, id, date, media } = data;
  return (
    <div className={`relative flex min-w-full h-[400px]`} key={id}>
      <Image src={media} alt={title} className=" object-cover" />
      <div className="absolute bottom-0 bg-white opacity-70 p-4 text-sm min-w-full">
        <div className="flex flex-col justify-end gap-1 truncate ">
          <p className="font-semibold">{title}</p>
          <p className="text-xs">{date}</p>
          <div className="flex text-xs gap-2 ">
            <p className="truncate w-1/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              nihil dolor laudantium odit necessitatibus mollitia inventore
              velit fugit harum error?
            </p>
            <span>Selengkapnya</span>
          </div>
        </div>
      </div>
    </div>
  );
};
