import { SubSection } from "@/components/sections/subSection/sub-section";

import { IResume } from "@/interfaces/IResume";
import React from "react";
import MobileDisplay from "./skills/MobileDisplay";
import WideDisplay from "./skills/WideDisplay";

function MySkills({ resumeMeData }: { resumeMeData: IResume }) {
  return (
    <SubSection title={resumeMeData.skillsSectionTitle}>
      <WideDisplay resumeMeData={resumeMeData} />
      <MobileDisplay resumeMeData={resumeMeData} />
    </SubSection>
  );
}

export default MySkills;
