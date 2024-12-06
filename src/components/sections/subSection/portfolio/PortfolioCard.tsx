import Image from "next/image";
import { Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut, ServerCogIcon } from "lucide-react";
import { IProject } from "@/interfaces/IPortfolio";
import Link from "next/link";

export function PortfolioCard({ project }: { project: IProject }) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-white to-white border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative p-6 flex flex-col h-full border-white border-2">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold  leading-tight">{project.name}</h3>
          <Badge
            variant="secondary"
            className="bg-secondary text-white px-3 py-1 text-xs font-semibold rounded-full"
          >
            <p className="text-sm">{project.category}</p>
          </Badge>
        </div>

        <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <p className=" mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-background  border-primary "
            >
              <p className="text-sm">{tech}</p>
            </Badge>
          ))}
        </div>

        <CardFooter className="p-0 mt-auto">
          <div className="flex flex-col xl:flex-row gap-4 w-full">
            {project.link && (
              <Link href={project.link} className="w-full">
                <Button className="flex-1 w-full bg-primary text-white hover:bg-secondary transition-colors duration-300">
                  {project.linkButtonTitle} <LogOut className="mr-2 h-4 w-4" />
                </Button>
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink} className="w-full">
                <Button className="flex-1 w-full bg-background border-secondary border   transition-colors duration-300">
                  {project.githubButtonTitle}
                  <Image
                    src={project.icon}
                    alt="GitHub"
                    width={20}
                    height={20}
                  />
                </Button>
              </Link>
            )}
            {project.otherLink && (
              <Link href={project.otherLink} className="w-full">
                <Button className="flex-1 w-full bg-background border-secondary border   transition-colors duration-300">
                  {project.otherButtonTitle}
                  <ServerCogIcon className="mr-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
