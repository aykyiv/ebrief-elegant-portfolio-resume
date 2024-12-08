import { IResume } from "@/interfaces/IResume";
import Education from "./Education";
import Experience from "./Experience";
import Certificates from "./Certificates";
import MySkills from "./MySkills";
import { MainSection } from "@/components/sections/MainSection";
import { SkillsCarousel } from "../../ui/SkillsCarousel";

export function ResumeSection({ resumeMeData }: { resumeMeData: IResume }) {
  return (
    <MainSection id="resume" title={resumeMeData.title} className="relative">
      <Education resumeMeData={resumeMeData} />
      <Experience resumeMeData={resumeMeData} />
      <Certificates resumeMeData={resumeMeData} />
      <MySkills resumeMeData={resumeMeData} />
      <SkillsCarousel skills={resumeMeData.skillsCarusel} />
    </MainSection>
  );
}
