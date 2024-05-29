"use client"
import { useState } from "react";
import artikelData from "../../../public/data/artikel";
import { GalleryCarousel } from "./gallery-carousel";

export const GalleryComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [imageChoosen, setImageChoosen] = useState([])
    const data = artikelData

  return (
    <div className="">
      <p className=" text-2xl text-center font-semibold mb-4">Galeri Foto</p>
      <GalleryCarousel data={data}/>
    </div>
  );
};
