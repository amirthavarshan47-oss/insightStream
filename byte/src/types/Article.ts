export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  trending?: boolean;
}

export type Category = 'Politics' | 'Business' | 'Technology' | 'Sports' | 'Entertainment' | 'Health';