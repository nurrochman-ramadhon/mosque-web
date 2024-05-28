import Image from "next/image";

export const SubArtikelCard = ({ item }) => {
  const {date, media, title }= item
  return <div className="flex gap-3 cursor-pointer hover:opacity-70">
    <div className="relative flex h-[50px] w-[80px]">
        <Image src={media} alt={title} className="object-cover object-center rounded-md"/>
    </div>
    <div className="flex flex-col justify-center">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-slate-500">{date}</p>
    </div>
  </div>;
};
