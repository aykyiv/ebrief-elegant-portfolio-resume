import React from "react";
import aboutMeData from "../information-on-page/02-aboutMe.json";
import resumeMeData from "../information-on-page/03-resume.json";
import portfolioData from "../information-on-page/04-portfolio.json";
import articleData from "../information-on-page/05-articles.json";
import { AboutSection } from "./sections/subSection/about/AboutSection";
import { ArticlesSection } from "./sections/subSection/articles/ArticlesSection";
import PortfolioSection from "./sections/subSection/portfolio/PortfolioSection";
import { ResumeSection } from "./sections/subSection/resume/ResumeSection";

function RightSideSections() {
  return (
    <div className=" w-full h-full  flex flex-col gap-10 mx-auto mb-6">
      <AboutSection aboutMeData={aboutMeData[0]} />
      <ResumeSection resumeMeData={resumeMeData[0]} />
      <PortfolioSection portfolioData={portfolioData[0] || null} />
      <ArticlesSection articleData={articleData[0] || null} />
    </div>
  );
}

export default RightSideSections;
