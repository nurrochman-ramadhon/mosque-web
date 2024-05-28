import { Artikel } from "./artikel";
import { InfoKegiatan } from "./info-kegiatan";

export const News = () => {
  return (
    <div className="">
      <p className=" text-2xl text-center font-semibold mb-2">
        Artikel & Info Kegiatan
      </p>
      <div className=" md:flex">
        <Artikel />
        <InfoKegiatan />
      </div>
    </div>
  );
};
