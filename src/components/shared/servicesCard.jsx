import { FaPeopleCarryBox } from "react-icons/fa6"; // zakat
import { FaRegCalendarAlt, FaRegBuilding } from "react-icons/fa"; // kajian rutin & gedung
import { PiMosque } from "react-icons/pi"; // muallaf center
import { LuBookOpen } from "react-icons/lu"; // Buletin
import { IoWarningOutline } from "react-icons/io5";
export const ServicesCard = ({ title }) => {
  const findIcon = () => {
    switch (title) {
      case "Kajian Rutin":
        return <FaRegCalendarAlt />;

      case "Muallaf Center":
        return <PiMosque />;

      case "Buletin Rohani":
        return <LuBookOpen />;

      case "Pelayanan Zakat":
        return <FaPeopleCarryBox />;

      case "Reservasi Gedung":
        return <FaRegBuilding />;

      default:
        return <IoWarningOutline/>;
    }
  };
  return (
    <div className="flex w-1/2 flex-col gap-3 items-center p-3">
      <div className="w-fit text-7xl text-blue-800 ">
        {findIcon()}
      </div>
      <p className="font-semibold text-lg">{title}</p>
    </div>
  );
};
