import { Button } from "@/components/ui/button"
import {  LogOut } from 'lucide-react'
import Image from "next/image"

interface ArticleCardProps {
  title: string
  description: string
  image: string
}

export function ArticleCard({ title, description, image }: ArticleCardProps) {
  return (
    <div className="rounded-sm overflow-hidden ">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" min-h-[170px] flex flex-col justify-between">
        <div className="bg-white p-6 max-w-[400px] mx-auto mb-4 -mt-10 z-10 relative rounded-sm">
          <h3 className="text-xl font-medium text-secondary mb-2">
            {title}
          </h3>
          <p className="text-fonts">
            {description}
          </p>
        </div>
        <div className="flex  justify-evenly">
         
          <Button 
            variant="outline" 
            className="border-primary text-primary w-full flex items-center gap-2"
          >
            <p>READ ARTICLE</p>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

