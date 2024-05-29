import Image from "next/image";

export const GalleryCard = ({data}) => {
  const {media, title, date} = data
    return (
      <div className="carousel-card min-w-[250px] min-h-[300px] md:min-w-[300px] md:min-h-[340px] text-base lg:text-lg flex  bg-red-200 rounded-md cursor-pointer transition duration-300 ease-in transform  
      hover:-translate-y-6 hover:shadow-md hover:shadow-purple-400">
        <Image src={media} alt={title} className="object-cover rounded-md"/>
      </div>
    );
  };
  