import { ServicesOption } from "../../../public/data/servicesOption";
import { ServicesCard } from "./servicesCard";
export const Services = () => {
  const servicesData = ServicesOption;
  
  // const reveal = () => {
  //   window.addEventListener("scroll", reveal);
  //   let reveals = document.querySelector(".services-section");
  //   let windowHeight = window.innerHeight;
  //   let revealTop = reveals.getBoundingClientRect().top;
  //   let revealPoint = 150;
  //   if (revealTop < windowHeight - revealPoint) {
  //     reveals.classList.add("active");
  //   } else {
  //     reveals.classList.remove("active");
  //   }
  // };
  return (
    <div className="services-section flex flex-wrap justify-evenly gap-y-9">
      {servicesData.map((val) => {
        return <ServicesCard title={val.title} key={val.title} />;
      })}
    </div>
  );
};
