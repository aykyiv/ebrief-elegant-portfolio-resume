import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IArticle } from "@/interfaces/IArticle";
import { LogOut } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";

export function ArticleCard({
  title,
  description,
  image,
  tags,
  date,
  link,
  readArticleButton,
}: IArticle & { readArticleButton: string }) {
  return (
    <div className="rounded-sm overflow-hidden ">
      <div className="relative shadow-inset h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="w-full h-full  object-cover"
        />
      </div>
      <div className=" min-h-[240px] flex flex-col justify-between">
        <div className="bg-white shadow-md min-h-[230px] flex flex-col justify-between gap-2 p-6 max-w-[400px] mx-auto mb-4 -mt-10 z-10 relative rounded-sm">
          <div className="flex  items-center justify-between  gap-4 ">
            <h3 className="text-xl font-semibold  mb-2">{title}</h3>
            <Badge variant="outline" className="border-secondary bg-red-100/25  min-w-max">
              <p className="text-sm">{date}</p>
            </Badge>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-fonts">{description}</p>{" "}
            <div className="flex flex-wrap gap-2">
              {tags.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-background   border-primary "
                >
                  <p className="text-sm">{tech}</p>
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  justify-evenly w-full xl:w-[400px] mx-auto">
          <Link href={link} target="_blank" className="w-full">
            <Button
              variant="outline"
              className="border-primary hover:bg-secondary-foreground hover:border-secondary text-primary w-full flex items-center gap-2"
            >
              <p>{readArticleButton}</p>
              <LogOut className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
