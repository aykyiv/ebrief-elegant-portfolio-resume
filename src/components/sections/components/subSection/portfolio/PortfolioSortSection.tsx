"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "./PortfolioCard";
import { IProjectItem } from "@/interfaces/IPortfolio";

export function PortfolioSortSection({
  portfolioData,
}: {
  portfolioData: IProjectItem;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className=" bg-background">
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {portfolioData.filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "default" : "outline"}
            className={`
                ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-white text-[#0C0C13]  hover:border-primary "
                }
              `}
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 min-h-[500px]">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
