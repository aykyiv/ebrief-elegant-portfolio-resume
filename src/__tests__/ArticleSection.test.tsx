import { ArticlesSection } from "@/components/sections/subSection/articles/ArticlesSection";
import { render } from "@testing-library/react";
import { IArticleDataItem } from "@/interfaces/IArticle";
import articleData from "../information-on-page/05-articles.json";

describe("ArticleSection", () => {
  test("Renders nothing when articleData is not provided", () => {
    const { container } = render(
      <ArticlesSection articleData={null as unknown as IArticleDataItem} />
    );
    expect(container.firstChild).toBeNull();
  });

  test("Renders correctly when articleData is provided", () => {
    const { getByText } = render(
      <ArticlesSection articleData={articleData[0]} />
    );
    expect(getByText("Articles")).toBeInTheDocument();
  });
});
