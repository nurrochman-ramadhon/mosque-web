import artikelData from "../../../public/data/artikel";
import { MainArtikel } from "./artikel-main";
import { SubArtikel } from "./artikel-sub";
import { SubtitleComponent } from "./sub-title-component";

export const Artikel = () => {
  const data = artikelData;
  const getMainArtikel = (items) => {
    const index = items.length - 1;
    return <MainArtikel item={items[index]} />;
  };

  // const date = new Date(item.date).toLocaleDateString("id", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });

  return (
    <div className="relative md:w-3/4">
      <SubtitleComponent title={"Artikel"} align={true}/>
      {getMainArtikel(data)}
      <SubArtikel items={data} />
    </div>
  );
};
