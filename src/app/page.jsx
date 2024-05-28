import { SectionOne } from "@/components/home-page/section-1";
import { SectionTwo } from "@/components/home-page/section-2";
import { SectionThree } from "@/components/home-page/section-3";


export default function Home() {
  return (
    <div className=" scroll-smooth">
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  );
}
