// __tests__/PortfolioSection.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import PortfolioSection from "@/components/sections/subSection/portfolio/PortfolioSection";
import { IProjectItem } from "@/interfaces/IPortfolio";
import mockPortfolioData from "../information-on-page/04-portfolio.json";

//  Function to render only the filters with associated projects and "all"
const renderValidFilters = () => {
  const projectCategories = new Set(
    mockPortfolioData[0].projects.map((project) => project.category)
  );
  return mockPortfolioData[0].filters.filter(
    (filter) => filter === "all" || projectCategories.has(filter)
  );
};

describe("PortfolioSection", () => {
  test("renders nothing when portfolioData is not provided", () => {
    // We'll use null or undefined to simulate no data
    const { container } = render(
      <PortfolioSection portfolioData={null as unknown as IProjectItem} />
    );

    // Check that the container is effectively empty
    expect(container.firstChild).toBeNull();
  });

  test("renders correctly when portfolioData is provided", () => {
    const { getByText } = render(
      <PortfolioSection portfolioData={mockPortfolioData[0]} />
    );

    // Check if the title is rendered
    expect(getByText("Portfolio")).toBeInTheDocument();
  });

  test("renders only filters with projects and all", () => {
    const { getAllByText } = render(
      <PortfolioSection portfolioData={mockPortfolioData[0]} />
    );

    const validFilters = renderValidFilters();

    validFilters.forEach((filter) => {
      expect(getAllByText(filter).length).toBeGreaterThan(0);
    });
  });

  test("does not render filters with no projects", () => {
    const { queryByText } = render(
      <PortfolioSection portfolioData={mockPortfolioData[0]} />
    );

    const invalidFilters = mockPortfolioData[0].filters.filter(
      (filter) => !renderValidFilters().includes(filter)
    );

    invalidFilters.forEach((filter) => {
      expect(queryByText(filter)).toBeNull();
    });
  });
});
