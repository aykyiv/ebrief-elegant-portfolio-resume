export interface IArticle {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
  tags: string[];
}
export interface IArticleDataItem {
  id: string;
  readArticleButton: string;
  title: string;
  articles: IArticle[];
}
