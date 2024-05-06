import Link from "next/link";
import { IoMdClose } from "react-icons/io";
export const Sidebar = ({isOpenSidebar,onHandlerCloseSideBar}) => {

    return <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${
        isOpenSidebar ? "visible" : "invisible"
      }`} onClick={onHandlerCloseSideBar}
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
        <ul className="mt-12">
          <li className="py-4">
            <Link
              href="/"
              onClick={onHandlerCloseSideBar}
              className="text-gray-600 hover:text-black"
            >
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="/shop"
              onClick={onHandlerCloseSideBar}
              className="text-gray-600 hover:text-black"
            >
              Agenda
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="/blog"
              onClick={onHandlerCloseSideBar}
              className="text-gray-600 hover:text-black"
            >
              Galeri
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="/contact"
              onClick={onHandlerCloseSideBar}
              className="text-gray-600 hover:text-black"
            >
              Materi Kajian
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="/contact"
              onClick={onHandlerCloseSideBar}
              className="text-gray-600 hover:text-black"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </div>
}