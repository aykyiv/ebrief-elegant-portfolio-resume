"use client";
import React, { useEffect, useRef, useState } from "react";
import { SubSection } from "../../sub-section";
import { ServiceCard } from "../service-card";
import { IWhatIDo } from "@/interfaces/IWhatIDo";

function WhatIDoSubSection({ aboutMeData }: { aboutMeData: IWhatIDo }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState("340px");

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.getBoundingClientRect().width;
      setWidth(`${width - 20}px`);
    }
  }, []);

  return (
    <SubSection ref={ref} title={aboutMeData.whatIDoTitle}>
      <div className="flex flex-col gap-12 ">
        {aboutMeData.whatIDo.map((card, index) => (
          <div key={index} className="group relative ">
            <ServiceCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
              className="flex flex-col gap-4 xl:flex-row relative z-20 rounded-[5px]"
            />
            <div
              style={{ width: width }}
              className={` xl:hidden flex absolute -left-2 rounded-sm -top-2 bottom-0  h-[80px] transition-all duration-500 ]  z-10 ${
                index % 2 === 1 ? "bg-secondary" : "bg-primary"
              }`}
            />
            <div
              className={` hidden xl:flex absolute -left-2 rounded-sm -top-2 bottom-0  xl:w-[80px] h-[80px] transition-all duration-500 group-hover:w-[860px]  group-hover:h-[115px] z-10 ${
                index % 2 === 1 ? "bg-secondary" : "bg-primary"
              }`}
            />
          </div>
        ))}
      </div>
    </SubSection>
  );
}

export default WhatIDoSubSection;
