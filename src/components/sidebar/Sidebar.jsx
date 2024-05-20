import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { mainMenu } from "../../../public/data/main-menu";
export const Sidebar = ({ isOpenSidebar, onHandlerCloseSideBar }) => {
  const data = mainMenu;
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${
        isOpenSidebar ? "visible" : "invisible"
      }`}
      onClick={onHandlerCloseSideBar}
    >
      <div
        className={`absolute top-0 px-4 w-[200px] h-full bg-white shadow transition-all duration-300 ease-in-out ${
          isOpenSidebar ? "left-0" : "-left-[200px]"
        }`}
      >
        <IoMdClose
          size={24}
          className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
          onClick={onHandlerCloseSideBar}
        />
        <ul className="mt-12 flex flex-col gap-4">
          {data.map(({title, path}) => {
            return (
              <li key={title}>
                <Link href={path} className="text-gray-600 hover:text-black" onClick={()=>{}}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
