"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

import { IMainData } from "@/interfaces/IMainData";
import SocialLinks from "./social-links/SocialLinks";
import youtube from "../../public/images/icons/youtube.svg";

export default function MobileHeader({ mainData }: { mainData: IMainData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background p-4 flex flex-row justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary">
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
          <p className="text-sm text-fonts/60">{mainData.hero.role}</p>
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-fonts">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full bg-background p-0 max-w-[375px]  gap-[35px] flex flex-col  justify-center "
          >
            <SheetHeader className="">
              <SheetTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3 mx-auto">
                  <div className="relative w-28 h-28 overflow-hidden rounded-full border-2 border-primary">
                    <Image
                      src={mainData.hero.image}
                      alt={mainData.hero.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg ">{mainData.hero.name}</h2>
                    <p className="text-sm text-secondary">{mainData.hero.role}</p>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className=" ">
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
                          className=" transition-all bg-white group-hover:border-primary  p-1 border  rounded-full"
                        />
                      </div>
                    </a>
                  </Button>
                </div>
              )}
            </div>
            <nav className=" max-w-[300px] mx-auto">
              {mainData.navigation.navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-fonts hover:text-pr transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </nav>

            <div className="space-y-4 flex flex-col items-center px-6">
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
            <div className="bg-primary h-[80px] flex items-center justify-center">
              <SocialLinks mainData={mainData} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
