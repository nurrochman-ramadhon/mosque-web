import { SectionOne } from "@/components/home-page/section-1";
import { SectionTwo } from "@/components/home-page/section-2";
import { SectionThree } from "@/components/home-page/section-3";
import { SectionFour } from "@/components/home-page/section-4";


export default function Home() {
  return (
    <div className=" scroll-smooth">
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </div>
  );
}
