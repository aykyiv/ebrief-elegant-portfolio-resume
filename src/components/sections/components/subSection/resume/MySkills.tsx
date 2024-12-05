import { SubSection } from "@/components/sections/ui/sub-section";
import {  ProgressBar } from "@/components/ui/progress";
import { IResume } from "@/interfaces/IResume";
import Image from "next/image";
import React from "react";

function MySkills({ resumeMeData }: { resumeMeData: IResume }) {
  return (
    <SubSection title="My skills">
      <div className="flex flex-col gap-12">
        {resumeMeData.skills.map((skill, index) => (
          <div key={index} className=" flex flex-row items-center ">
            <div className={`flex-shrink-0 w-14 h-14 rounded-sm ${index % 2 === 0 ? "bg-primary" : "bg-secondary"} `}>
              <Image
                src={skill.icon}
                alt=""
                width={45}
                height={45}
                className="w-full h-full p-2"
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-4 w-full">
              <div className="w-[150px] mx-auto">
                <h3 className=" font-bold text-secondary w-1/3 ">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-col w-2/3 gap-2">
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex flex-row gap-2">
                      {skill.tools.map((tool, idx) => (
                        <p
                          key={idx}
                          className={`text-sm px-2 py-1 ${
                            index % 2 === 1 ? "border-secondary" : "border-primary"
                          } border  rounded-full bg-background  `}
                        >
                          {tool}
                        </p>
                      ))}
                  </div>
                  <span className="text-primary font-medium">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="flex flex-col">
                  
                  <ProgressBar value={skill.proficiency} index={index} className="h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SubSection>
  );
}

export default MySkills;
