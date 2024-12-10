import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { IResume } from "@/interfaces/IResume";
import Image from "next/image";
import React from "react";

const WideDisplay = ({ resumeMeData }: { resumeMeData: IResume }) => {
  return (
    <div className="hidden xl:flex flex-col gap-12">
      {resumeMeData.skills.map((skill, index) => (
        <div key={index} className="flex flex-row items-center">
          <div
            className={`flex-shrink-0 w-14 h-14 ${
              index % 2 === 0 ? "bg-primary" : "bg-secondary"
            } rounded-sm`}
          >
            <Image
              src={skill.icon}
              alt=""
              width={45}
              height={45}
              className="w-full h-full p-2"
            />
          </div>
          <div className="w-[150px] mx-auto">
            <h3
              className={`font-bold ${
                index % 2 === 0 ? "text-primary" : "text-secondary"
              } text-primary`}
            >
              {skill.category}
            </h3>
          </div>
          <div className="flex flex-col justify-between gap-2 w-2/3">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row flex-wrap gap-2">
                {skill.tools.map((tool, idx) => (
                  <Badge
                    key={idx}
                    className={`text-sm px-2 py-1 min-w-max  ${
                      index % 2 === 0 ? "border-primary" : "border-secondary"
                    } border rounded-full bg-background`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 ">
              <ProgressBar
                value={skill.proficiency}
                index={index}
                className="h-5 "
              />
              <span
                className={` block ${
                  index % 2 === 0 ? "text-primary" : "text-secondary"
                } font-medium`}
              >
                {skill.proficiency}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WideDisplay;
