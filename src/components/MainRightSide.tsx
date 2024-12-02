import React from "react";
import DesktopNavigation from "./navigation/DesktopNavigation";
import RightSideContent from "./RightSideContent";

function MainRightSide() {
  return (
    <section className="w-full h-full flex flex-col gap-5 ">
      <DesktopNavigation />
      <RightSideContent />
    </section>
  );
}

export default MainRightSide;
