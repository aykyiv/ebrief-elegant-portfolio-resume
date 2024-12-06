import React from "react";
import DesktopNavigation from "./navigation/DesktopNavigation";
import RightSideSections from "./RightSideSections";
import { IMainData } from "@/interfaces/IMainData";

function MainRightSide({ mainData }: { mainData: IMainData }) {
  return (
    <section className="w-full h-full flex flex-col gap-5 ">
      <DesktopNavigation mainData={mainData} />
      <RightSideSections />
    </section>
  );
}

export default MainRightSide;
