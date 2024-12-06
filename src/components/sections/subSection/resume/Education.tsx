import { SubSection } from "@/components/sections/subSection/sub-section";
import { IResume } from "@/interfaces/IResume";
import React from "react";

function Education({ resumeMeData }: { resumeMeData: IResume }) {
  return (
    <div>
      <SubSection title={resumeMeData.educationSectionTitle}>
        {resumeMeData.education.map((edu, index) => (
          <div key={index} className="flex flex-col  gap-2">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-secondary">{edu.specialization}:</h3>
              <p className="text-primary text-sm min-w-max">({edu.years})</p>
             
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-fonts">{edu.institution}</p>
              <p className="text-fonts">{edu.description}</p>
            </div>
          </div>
        ))}
      </SubSection>
    </div>
  );
}

export default Education;
