"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu,  Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import githubsvg from '../../public/images/icons/github.svg'
import linkedinsvg from '../../public/images/icons/linkedin.svg'
import twittersvg from '../../public/images/icons/x.svg'

import { IMainData } from '@/interfaces/IMainData'

export default function MobileHeader({ mainData }: { mainData: IMainData }) {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <header className="bg-background p-4 flex flex-row justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-pr">
            <Image
              src={mainData.hero.image}
              alt={mainData.hero.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-fonts">{mainData.hero.name}</h1>
            <p className="text-sm text-fonts/60">{mainData.hero.role}</p>
          </div>
        </div>
      <div className="flex justify-between items-center">
      
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-fonts">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background p-0">
            <SheetHeader className="p-6 border-b border-fontext-fonts/10">
              <SheetTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-pr">
                    <Image
                      src={mainData.hero.image}
                      alt={mainData.hero.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-fonts">{mainData.hero.name}</h2>
                    <p className="text-sm text-fonts/60">{mainData.hero.role}</p>
                  </div>
                </div>
               
              </SheetTitle>
            </SheetHeader>
            <nav className="p-6">
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
            <div className="p-6 border-t border-fontext-fonts/10">
              <h3 className="font-semibold text-fonts mb-2">Contact Info</h3>
              <div className="space-y-2">
                <p className="flex items-center text-sm text-fonts/60">
                  <Phone className="w-4 h-4 mr-2" />
                  {mainData.contactInfo.phone}
                </p>
                <p className="flex items-center text-sm text-fonts/60">
                  <Mail className="w-4 h-4 mr-2" />
                  {mainData.contactInfo.email}
                </p>
                <p className="flex items-center text-sm text-fonts/60">
                  <MapPin className="w-4 h-4 mr-2" />
                  {mainData.contactInfo.location}
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-fontext-fonts/10">
              <h3 className="font-semibold text-fonts mb-2">Social Links</h3>
              <div className="flex space-x-4">
                <a href={mainData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-fonts hover:text-pr">
                <Image src={linkedinsvg} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href={mainData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-fonts hover:text-pr">
                  <Image src={githubsvg} alt="GitHub" className="w-5 h-5" />
                </a>
                <a href={mainData.socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-fonts hover:text-pr">
                  <Image src={twittersvg} alt="Twitter" className="w-5 h-5" />
                </a>
              
                <a href={mainData.socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-fonts hover:text-pr">
                  <Send className="w-5 h-5" />
                </a>
                <a href={mainData.socialLinks.viber} target="_blank" rel="noopener noreferrer" className="text-fonts hover:text-pr">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-6 border-t border-fontext-fonts/10">
              <Button
                variant="outline"
                className="w-full border-pr text-pr hover:bg-pr hover:text-white"
                asChild
              >
                <a href={mainData.hero.videoGreeting} target="_blank" rel="noopener noreferrer">
                  Watch Video Intro
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

