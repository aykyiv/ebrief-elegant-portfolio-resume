import React from "react";
import { AboutSection } from "./sections/components/subSection/about/AboutSection";
import aboutMeData from "../information-on-page/02-aboutMe.json";
import resumeMeData from "../information-on-page/03-resume.json";
import articleData from "../information-on-page/05-articles.json";
import { ResumeSection } from "./sections/components/subSection/resume/ResumeSection";
import PortfolioSection from "./sections/components/subSection/portfolio/PortfolioSection";
import { ArticlesSection } from "./sections/components/subSection/articles/ArticlesSection";

function RightSideContent() {
  return (
    <div className=" w-full h-full  flex flex-col gap-10 mx-auto">
      <AboutSection aboutMeData={aboutMeData[0]} />
      <ResumeSection resumeMeData={resumeMeData[0]} />
      <div className="mt-[140px]">
        <PortfolioSection />
      </div>
      <ArticlesSection articleData={articleData[0]} />
    </div>
  );
}

export default RightSideContent;
