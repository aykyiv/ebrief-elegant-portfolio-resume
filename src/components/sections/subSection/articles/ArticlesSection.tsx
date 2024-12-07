import { MainSection } from "@/components/sections/MainSection";
import { ArticleCard } from "./Article-card";
import { IArticleDataItem } from "@/interfaces/IArticle";

export function ArticlesSection({
  articleData,
}: {
  articleData: IArticleDataItem;
}) {
  return (
    <MainSection id="articles" title={articleData.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-6">
        {articleData.articles.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            description={article.description}
            image={article.image}
            tags={article.tags}
            date={article.date}
            link={article.link}
            readArticleButton={articleData.readArticleButton}
          />
        ))}
      </div>
    </MainSection>
  );
}
