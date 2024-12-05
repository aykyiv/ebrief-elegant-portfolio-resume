import React from "react";
import DesktopNavigation from "./navigation/DesktopNavigation";
import RightSideContent from "./RightSideContent";
import { IMainData } from "@/interfaces/IMainData";

function MainRightSide({ mainData }: { mainData: IMainData }) {
  return (
    <section className="w-full h-full flex flex-col gap-5 ">
      <DesktopNavigation mainData={mainData} />
      <RightSideContent />
    </section>
  );
}

export default MainRightSide;
