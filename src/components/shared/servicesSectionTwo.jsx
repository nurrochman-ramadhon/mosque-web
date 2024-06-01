"use client";
import { useEffect, useRef } from "react";
import { ServicesOption } from "../../../public/data/servicesOption";
import { ServicesCard } from "./servicesCard";
import { motion, useInView, useScroll } from "framer-motion";

export const Services = () => {
  const servicesData = ServicesOption;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // useEffect(() => {console.log(isInView);}, [isInView]);
  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.25}}}
      viewport={{ margin:"-250px", once:true}}
      className="services-section flex flex-wrap justify-evenly gap-y-9 md:w-[700px] lg:w-[950px] md:mx-auto"
    >
      {servicesData.map((val) => {
        return <ServicesCard title={val.title} key={val.title} />;
      })}
    </motion.div>
  );
};
