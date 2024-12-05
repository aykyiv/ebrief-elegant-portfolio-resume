interface Article {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
  tags: string[];
}
export interface IArticleDataItem {
  id: string;
  articles: Article[];
}
