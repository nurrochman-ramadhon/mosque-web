import Image from "next/image";
import { SubArtikelCard } from "./artikel-sub-card";

export const SubArtikel = ({ items }) => {
  return <div className="flex flex-col gap-4 p-3">
    {items
      .reverse()
      .slice(0, 6)
      .map((item, idx) => {
          if (idx > 0 && idx < 6) {
            return <SubArtikelCard item={item} key={idx}/>
        }
      })}   
  </div>;
};
