
import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import { Button } from '@/components/ui/button';
import { Article } from '@/types';

interface ArticleGridProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

const ArticleGrid = ({ articles, onArticleClick }: ArticleGridProps) => {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [articlesPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * articlesPerPage;
    setDisplayedArticles(articles.slice(startIndex, endIndex));
  }, [articles, currentPage, articlesPerPage]);

  const hasMoreArticles = currentPage * articlesPerPage < articles.length;

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most recent insights and trending topics from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedArticles.map((article, index) => (
            <div key={article.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ArticleCard
                article={article}
                onClick={() => onArticleClick(article)}
              />
            </div>
          ))}
        </div>
        
        {hasMoreArticles && (
          <div className="text-center">
            <Button 
              onClick={loadMore}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4"
            >
              Load More Articles
            </Button>
          </div>
        )}
        
        {displayedArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No articles found. Check back soon for new content!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleGrid;
