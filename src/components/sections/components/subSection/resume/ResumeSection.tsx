
import { IResume } from "@/interfaces/IResume";
import Education from "./Education";
import Experience from "./Experience";
import Certificates from "./Certificates";
import MySkills from "./MySkills";
import { SkillsCarousel } from "../../../ui/SkillsCarousel";
import { MainSection } from "@/components/sections/ui/MainSection";

export function ResumeSection({ resumeMeData }: { resumeMeData: IResume }) {
  return (
    <MainSection title="Resume" className="relative">
      <Education resumeMeData={resumeMeData} />
      <Experience resumeMeData={resumeMeData} />
      <Certificates resumeMeData={resumeMeData} />
      <MySkills resumeMeData={resumeMeData} />

        <SkillsCarousel skills={resumeMeData.skillsCarusel} />
        
     
    </MainSection>
  );
}
