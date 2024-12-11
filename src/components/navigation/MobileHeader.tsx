"use client";

import Image from "next/legacy/image";

import { IMainData } from "@/interfaces/IMainData";
import MenuDrawer from "./mobile/MenuDrawer";

export default function MobileHeader({ mainData }: { mainData: IMainData }) {
  return (
    <header className="bg-background p-4 flex flex-row justify-between ">
      <div className="flex items-center space-x-3">
        <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-primary">
          <Image
            src={mainData.hero.image}
            alt={mainData.hero.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-fonts">
            {mainData.hero.name}
          </h1>
          <p className="text-secondary">{mainData.hero.role}</p>
        </div>
      </div>

      <div className="z-[100] flex justify-between items-center fixed top-5 right-5 ">
        <MenuDrawer mainData={mainData} />
      </div>
    </header>
  );
}
