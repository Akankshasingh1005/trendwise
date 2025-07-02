
import { Clock, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

const ArticleCard = ({ article, onClick }: ArticleCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden bg-gradient-card hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 hover:-translate-y-1 border-0 bg-white"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.slice(0, 2).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-primary-50 text-primary-600 hover:bg-primary-100 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span>{article.author.name}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          
          <time dateTime={article.publishedAt} className="text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
