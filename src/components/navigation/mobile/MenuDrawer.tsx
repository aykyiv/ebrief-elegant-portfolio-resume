import React from "react";
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
import youtube from "../../../../public/images/icons/youtube.svg";
import { useState } from "react";
import Image from "next/legacy/image";
import SocialLinks from "@/components/social-links/SocialLinks";
import { IMainData } from "@/interfaces/IMainData";

function MenuDrawer({ mainData }: { mainData: IMainData }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        asChild
        className={`${isOpen ? "hidden" : ""} transition-all backdrop-blur-md`}
      >
        <Button variant="outline" size="icon" className="border-fonts border">
          <Menu className="h-6 w-6" />
          <p className="sr-only text-xs">{mainData.navigation.draverBtnToggleText}</p>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full bg-background p-0 max-w-[375px]  gap-4 flex flex-col  justify-center "
      >
        <SheetHeader className="">
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-3 mx-auto">
              <div className="relative w-28 h-28 overflow-hidden rounded-md border-2 border-primary">
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
        {mainData.hero.videoGreeting && (
          <Button
            variant="outline"
            size={"lg"}
            className="group mx-auto hover:border-primary hover:text-primary hover:bg-white bg-primary text-white transition-colors max-w-[300px] w-full"
            asChild
          >
            <Link
              href={mainData.hero.videoGreeting}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-2">
                <p>{mainData.hero.videoButtonText}</p>
                <div className="w-7 h-7 transition-all bg-white group-hover:border-primary  p-1 border  rounded-full">
                  <Image
                    src={youtube}
                    alt="youtube"
                    width={24}
                    height={24}
                    className=" "
                  />
                </div>
              </div>
            </Link>
          </Button>
        )}
        <nav className=" max-w-[300px] mx-auto flex flex-col w-full gap-4 py-4">
          {mainData.navigation.navLinks.map((link) => (
            <Link
              key={link.title}
              href={`#${link.url}`}
              className="block  text-fonts hover:text-pr  w-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="outline" size={"lg"} className="w-full  ">
                <h3 className="">{link.title}</h3>
              </Button>
            </Link>
          ))}
        </nav>

        <div className="space-y-4 max-w-[300px] mx-auto flex flex-col items-center ">
          <Link
            href={`tel:${mainData.contactInfo.phone}`}
            className="w-full hover:text-primary transition-colors"
          >
            <Button
              variant={"outline"}
              className="flex  border-primary w-full items-center space-x-3 text-sm text-fonts/80"
            >
              <Phone className="w-4 h-4 text-primary" />
              {mainData.contactInfo.phone}
            </Button>
          </Link>
          <Link
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
          </Link>
          <div className="flex items-center space-x-3 text-sm text-fonts/80">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-xs">{mainData.contactInfo.location}</p>
          </div>
        </div>
        <div className="bg-primary h-[80px] flex items-center justify-center">
          <SocialLinks mainData={mainData} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MenuDrawer;
