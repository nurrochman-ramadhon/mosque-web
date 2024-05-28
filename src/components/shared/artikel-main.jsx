import Image from "next/image"

export const MainArtikel = ({item}) => {
    const {date, media, title }= item
    return <div className="p-3 flex flex-col gap-y-2 cursor-pointer hover:opacity-70">
        <div className=" relative flex h-[200px]">
            <Image src={media} alt={title} className=" object-cover object-bottom"/>
        </div>
        <div className="font-semibold text-xl">
            {title}
        </div>
        <div className=" text-slate-500">
            {date}
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur saepe obcaecati minima optio molestias exercitationem repellat. Ducimus, distinctio iusto.
        </div>
    </div>
}