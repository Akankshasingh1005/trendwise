
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Comment {
  id: string;
  articleId: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  replies?: Comment[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'google';
}

export interface TrendingTopic {
  keyword: string;
  searchVolume: number;
  relatedQueries: string[];
  region: string;
}
