import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { IResume } from "@/interfaces/IResume";
import Image from "next/legacy/image";
import React from "react";

const MobileDisplay = ({ resumeMeData }: { resumeMeData: IResume }) => {
  return (
    <div className=" flex xl:hidden flex-col gap-12">
      {resumeMeData.skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <div className="flex flex-row w-full justify-between px-4 items-center gap-2">
            <div className="flex w-[130px] flex-col items-center gap-2">
              <div
                className={`flex items-center justify-center flex-shrink-0 w-20 h-20 rounded-sm ${
                  index % 2 === 0 ? "bg-primary" : "bg-secondary"
                }`}
              >
                <Image
                  src={skill.icon}
                  alt=""
                  width={65}
                  height={65}
                  className="w-full h-full p-2"
                />
              </div>
              <h3
                className={`font-bold  ${
                  index % 2 === 0 ? "text-primary" : "text-secondary"
                }`}
              >
                {skill.category}
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {skill.tools.map((tool, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className={`text-sm px-2 py-1  min-w-[100px] max-w-[150px] ${
                    index % 2 === 0 ? "border-primary" : "border-secondary"
                  } border rounded-full bg-background`}
                >
                  <p className=" mx-auto">{tool}</p>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-row xl:flex-col items-center justify-center gap-4 ">
            <ProgressBar
              value={skill.proficiency}
              index={index}
              className="h-5 "
            />
            <span
              className={`text-primary font-medium ${
                index % 2 === 0 ? "text-primary" : "text-secondary"
              }`}
            >
              {skill.proficiency}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileDisplay;
