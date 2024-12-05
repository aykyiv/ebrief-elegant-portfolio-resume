import { IMainData } from "@/interfaces/IMainData";
import React from "react";
import SocialLinks from "./social-links/SocialLinks";

function MainFooter({ mainData }: { mainData: IMainData }) {
  return (
    <div className="w-full items-center justify-center rounded-md flex flex-col gap-4 h-[290px] bg-primary">
      <h1 className="font-semibold text-white">{mainData.footerInfo.title}</h1>
      <div className="w-full h-2 rounded-sm bg-white max-w-[600px]"></div>

      <p className="max-w-[800px] text-white text-center">{mainData.footerInfo.description}</p>
      <SocialLinks mainData={mainData} />
    </div>
  );
}

export default MainFooter;
