import Image from "next/legacy/image";
import React from "react";

interface SkillCarousel {
  skill: string;
  image: string;
}

interface SkillsCarouselProps {
  skills: SkillCarousel[];
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  return (
    <div className="  absolute bottom-[-100px] xl:bottom-[-180px] -left-[60%] z-10   bg-primary border-white border-2 shadow-inset  overflow-hidden">
      <div className="flex animate-carousel  ">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.skill}-${index}`}
            className="shadow-inset w-[70px] xl:w-[140px] xl:h-[140px] m-4 p-4 bg-white rounded-md flex justify-center items-center"
          >
            <Image
              src={skill.image}
              alt={skill.skill}
              width={86}
              height={86}
              className=" w-[140px] h-[140px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
