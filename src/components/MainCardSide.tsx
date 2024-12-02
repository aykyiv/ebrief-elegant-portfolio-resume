import React from "react";

function MainCardSide() {
  return (
    <div className="h-[750px] w-full ">
      <div className="bg-neutral-200 w-full h-full rounded-md py-6 flex flex-col justify-between ">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="bg-slate-100 w-full h-32"></div>
        ))}
      </div>
    </div>
  );
}

export default MainCardSide;
