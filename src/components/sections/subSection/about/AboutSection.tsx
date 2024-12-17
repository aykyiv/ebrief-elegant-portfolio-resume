import { IWhatIDo } from "@/interfaces/IWhatIDo";
import { MainSection } from "@/components/sections/MainSection";
import AboutMeSubSection from "./subSection/AboutMeSubSection";
import WhatIDoSubSection from "./subSection/WhatIDoSubSection";

export function AboutSection({ aboutMeData }: { aboutMeData: IWhatIDo }) {
  return (
    <MainSection id="about" title={aboutMeData.title} className="relative">
      <AboutMeSubSection aboutMeData={aboutMeData} />
      <div className="z-[-1] absolute top-[75px] xl:top-[104px] -left-4  w-14 h-14 rounded-sm bg-secondary"></div>
      <WhatIDoSubSection aboutMeData={aboutMeData} />
    </MainSection>
  );
}
