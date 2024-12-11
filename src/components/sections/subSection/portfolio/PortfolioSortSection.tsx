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
  const allButton = portfolioData.filtersAllButton;
  const [activeFilter, setActiveFilter] = useState(allButton);

const onlyFiltersWithProjects = [allButton, ...portfolioData.filters.filter(
    (filter) => portfolioData.projects.some((project) => project.category === filter)
  )];

  const filteredProjects =
    activeFilter === allButton
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className=" bg-background">
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {onlyFiltersWithProjects.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "default" : "outline"}
            className={`
                ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-white  hover:border-primary "
                }
              `}
          >
            <p>{filter}</p>
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:gap-6 gap-12 min-h-[500px]">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
