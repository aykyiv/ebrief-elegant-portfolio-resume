"use client";
import React, { useState } from "react";
import { SubSection } from "../../sub-section";
import { IWhatIDo } from "@/interfaces/IWhatIDo";
import { ArrowDownCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function AboutMeSubSection({ aboutMeData }: { aboutMeData: IWhatIDo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <SubSection
      title={aboutMeData.knowMeTitle}
      className="relative overflow-clip"
    >
      <div className="transition-all duration-500 ease-in-out">
        <p className="text-fonts">{aboutMeData.knowMe.description}</p>
        <div
          className={`overflow-hidden transition-[max-height]  ${
            isExpanded ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <p className="text-fonts mt-4">
            {aboutMeData.knowMe.descriptionHidden}
          </p>
        </div>
      </div>
      <Button
        variant="link"
        className="text-primary mt-4 transition-all  w-[110px] justify-between"
        onClick={toggleExpand}
      >
        <div className="flex min-w-[110px] justify-between items-center">
          {isExpanded ? (
            <p className="min-w-[110px]">Show less</p>
          ) : (
            <p className="min-w-[110px]">Show more</p>
          )}
          <ArrowDownCircleIcon
            className={` w-10 h-10 scale-125 inline ${isExpanded ? "rotate-180" : ""}`}
          />
        </div>
      </Button>
      <div className="absolute w-[350px] h-[350px] blur-[150px] bg-red-300/20 top-0 left-0 transform  -translate-y-[50%]"></div>
    </SubSection>
  );
}

export default AboutMeSubSection;
