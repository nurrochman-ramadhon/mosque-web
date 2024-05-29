import { VscTriangleDown } from "react-icons/vsc";

export const SubtitleComponent = ({title, align}) => {
  return (
    <div className="px-3 mb-2">
      <div className={`relative ${align?"text-right md:text-left":"text-right"} font-semibold text-lg border-b-[3px] border-blue-700 pb-1 md:border-none`}>
        <div className="absolute text-blue-700 right-5 top-7 md:hidden">
          <VscTriangleDown />
        </div>
        <p className={``}>{title}</p>
      </div>
    </div>
  );
};
