import { Agenda } from "../../../public/data/agenda";
import { InfoKegiatanCard } from "./info-kegiatan-card";
import { SubtitleComponent } from "./sub-title-component";

export const InfoKegiatan = () => {
  const items = Agenda;
  return (
    <div className="relative px-2 mt-2 md:w-1/2 md:mt-0 md:sticky md:top-28 h-fit">
      <SubtitleComponent title={"Info Kegiatan"} />
      <div className="relative mt-4 h-[250px] md:h-[350px] overflow-auto bg-slate-100 py-3 rounded-md ">
        <div className="absolute w-full flex gap-2 flex-wrap justify-evenly ">
          <InfoKegiatanCard />
          <InfoKegiatanCard />
          <InfoKegiatanCard />
          <InfoKegiatanCard />
          <InfoKegiatanCard />
          <InfoKegiatanCard />
        </div>
      </div>
    </div>
  );
};
