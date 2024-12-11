import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/legacy/image";
import { IMainData } from "@/interfaces/IMainData";
import SocialLinks from "./social-links/SocialLinks";
import youtube from "../../public/images/icons/youtube.svg";

function MainCardSide({ mainData }: { mainData: IMainData }) {
  return (
    <div className="bg-primary rounded-md overflow-clip border-white border-2 shadow-inner  relative shadow-inset">
      <div className="z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[65%]   h-[800px] w-[800px] bg-white rounded-full blur-[2px]"></div>
      <div className="relative p-6 flex flex-col gap-9 z-10 justify-between min-h-[740px] shadow-inset">
        <div className="flex flex-row justify-between px-2 items-center">
          <div className="flex flex-row w-[70px] h-[70px] bg-primary items-center justify-center text-white rounded-md">
            <h1 className="text-3xl font-bold">
              {mainData.hero.name.split(" ")[0][0]}
            </h1>
            <h1 className="text-3xl font-bold">
              {mainData.hero.name.split(" ")[1][0]}
            </h1>
          </div>
          <div className="flex flex-col text-right text-secondary">
            {mainData.hero.role
              .split(" ")
              .map((word: string, index: number) => (
                <h3 className="text-3xl" key={index}>{word}</h3>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center  ">
          <div className="relative w-32 h-32 overflow-hidden rounded-md border-4 border-background">
            <Image
              src={mainData.hero.image}
              alt={mainData.hero.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-fonts">
            {mainData.hero.name}
          </h1>

          <p className="text-lg font-italic text-fonts text-center mt-2">
            {mainData.hero.subtitle}
          </p>
        </div>

        {mainData.hero.videoGreeting && (
          <div className="">
            <Button
              variant="outline"
              size={"lg"}
              className="group w-full hover:border-primary hover:text-primary hover:bg-white bg-primary text-white transition-colors"
              asChild
            >
              <a
                href={mainData.hero.videoGreeting}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center space-x-2">
                  <p>{mainData.hero.videoButtonText}</p>
                  <Image
                    src={youtube}
                    alt="youtube"
                    width={30}
                    height={30}
                    className=" transition-all bg-white group-hover:border-primary  p-1 border group-hover: rounded-full"
                  />
                </div>
              </a>
            </Button>
          </div>
        )}

        <div className="space-y-4 flex flex-col items-center">
          <a
            href={`tel:${mainData.contactInfo.phone}`}
            className="w-full hover:text-primary transition-colors"
          >
            <Button
              variant={"outline"}
              className="flex border-primary w-full items-center space-x-3 text-sm text-fonts/80"
            >
              <Phone className="w-4 h-4 text-primary" />
              {mainData.contactInfo.phone}
            </Button>
          </a>
          <a
            href={`mailto:${mainData.contactInfo.email}`}
            className="hover:text-primary w-full transition-colors"
          >
            <Button
              variant={"outline"}
              className="flex border-primary w-full items-center space-x-3 text-sm text-fonts/80"
            >
              <Mail className="w-4 h-4 text-primary" />
              {mainData.contactInfo.email}
            </Button>
          </a>
          <div className="flex items-center space-x-3 text-sm text-fonts/80">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{mainData.contactInfo.location}</span>
          </div>
        </div>
        <SocialLinks mainData={mainData} />
      </div>
    </div>
  );
}

export default MainCardSide;
