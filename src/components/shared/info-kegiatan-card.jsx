import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineViewAgenda } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
export const InfoKegiatanCard = ({item}) => {
  const {date, title, startHour, endHour} = item
  const dateString = new Date(date)
  return (
    <div className="flex text-center text-sm justify-between p-2 rounded-md shadow-sm mb-2 bg-white ">
      <div className="flex flex-col w-[170px] gap-1 truncate">
        <div className="font-semibold flex items-start gap-2 mx-auto">
          <RiCalendarScheduleLine className=" mt-1" />
          <div className="flex flex-col justify-start">
            <p className="">{dateString.toLocaleDateString("id",{day:"numeric",month:"short",year:"numeric"})}</p>
            <p className="">{startHour} - {endHour}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-blue-500 mx-auto">
            <GoDotFill />
            <div className="border-[0.5px] border-blue-500 w-[50px]"></div>
          </div>
        <div className="font-semibold flex mx-auto items-center gap-2 truncate px-1">
          <MdOutlineViewAgenda />
          <p className="turncate">{title}</p>
        </div>
      </div>
    </div>
  );
};
