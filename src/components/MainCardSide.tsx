import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import githubsvg from "../../public/images/icons/github.svg";
import linkedinsvg from "../../public/images/icons/linkedin.svg";
import twittersvg from "../../public/images/icons/x.svg";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { IMainData } from "@/interfaces/IMainData";

function MainCardSide({ mainData }: { mainData: IMainData }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-lg max-w-md ">
      <div className="p-6 flex flex-col gap-9">
        <div className="flex flex-col items-center  ">
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-background">
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
          <p className="text-fonts/60">{mainData.hero.role}</p>
          <p className="text-lg font-italic text-fonts text-center mt-2">
            {mainData.hero.subtitle}
          </p>
        </div>

        <div className="">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            asChild
          >
            <a
              href={mainData.hero.videoGreeting}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video Intro
            </a>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-sm text-fonts/80">
            <Phone className="w-4 h-4 text-primary" />
            <span>{mainData.contactInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-fonts/80">
            <Mail className="w-4 h-4 text-primary" />
            <a
              href={`mailto:${mainData.contactInfo.email}`}
              className="hover:text-primary transition-colors"
            >
              {mainData.contactInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-3 text-sm text-fonts/80">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{mainData.contactInfo.location}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <a
            href={mainData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fonts hover:text-pr"
          >
            <Image src={linkedinsvg} alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a
            href={mainData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fonts hover:text-pr"
          >
            <Image src={githubsvg} alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href={mainData.socialLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fonts hover:text-pr"
          >
            <Image src={twittersvg} alt="Twitter" className="w-5 h-5" />
          </a>
          <a
            href={mainData.socialLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fonts hover:text-primary transition-colors"
          >
            <Send className="w-5 h-5" />
          </a>
          <a
            href={mainData.socialLinks.viber}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fonts hover:text-primary transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainCardSide;
