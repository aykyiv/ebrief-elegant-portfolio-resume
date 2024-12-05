import { MainSection } from "@/components/sections/ui/MainSection";
import { ArticleCard } from "./Article-card";
import { IArticleDataItem } from "@/interfaces/IArticle";

export function ArticlesSection({ articleData }: { articleData: IArticleDataItem }) {
  return (
    <MainSection title="Articles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articleData.articles.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </div>
    </MainSection>
  );
}
