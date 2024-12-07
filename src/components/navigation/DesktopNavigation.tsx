import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IMainData } from "@/interfaces/IMainData";

function DesktopNavigation({ mainData }: { mainData: IMainData }) {
  return (
    <div className="sticky top-10 z-50 hidden xl:flex flex-row justify-center gap-8 border-white border w-min mx-auto px-3 py-2 rounded-sm bg-white/50 backdrop-blur-md shadow-inner ">
      {mainData.navigation.navLinks.map(
        ({ title, url }: { title: string; url: string }) => (
          <Link href={`# ${url}`} key={title}>
            <Button
              variant="outline"
              key={title}
              className="shadow-sm hover:shadow-none hover:border-primary "
            >
              {title}
            </Button>
          </Link>
        )
      )}
    </div>
  );
}

export default DesktopNavigation;
