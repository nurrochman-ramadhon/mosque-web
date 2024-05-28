import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineViewAgenda } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
export const InfoKegiatanCard = () => {
  return (
    <div className="flex text-center text-sm justify-between p-3 rounded-md shadow-sm mb-2 bg-white">
      <div className="flex flex-col w-fit gap-1">
        <div className="font-semibold flex items-start gap-2 ">
          <RiCalendarScheduleLine className=" mt-1" />
          <div className="flex flex-col justify-start">
            <p className="">05 Agustus 2024</p>
            <p className="">08.00 - 11.00</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-blue-500 mx-auto">
            <GoDotFill />
            <div className="border-[0.5px] border-blue-500 w-[50px]"></div>
          </div>
        <div className="font-semibold flex items-center gap-2">
          <MdOutlineViewAgenda />
          <p>Training Da'i Cilik</p>
        </div>
      </div>
    </div>
  );
};
