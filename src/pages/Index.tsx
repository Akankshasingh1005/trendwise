
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ArticleGrid from '@/components/ArticleGrid';
import Footer from '@/components/Footer';
import { mockArticles } from '@/data/mockArticles';
import { Article } from '@/types';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [user, setUser] = useState<{ name: string; email: string; avatar: string } | null>(null);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(mockArticles);

  const handleLogin = () => {
    // Mock Google login - in real implementation, this would integrate with NextAuth.js
    const mockUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    };
    setUser(mockUser);
    toast({
      title: "Welcome back!",
      description: "You've successfully signed in to TrendWise.",
    });
  };

  const handleLogout = () => {
    setUser(null);
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
  };

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredArticles(mockArticles);
      return;
    }

    const filtered = mockArticles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setFilteredArticles(filtered);
    
    if (filtered.length === 0) {
      toast({
        title: "No results found",
        description: `No articles found for "${query}". Try different keywords.`,
      });
    }
  };

  const handleArticleClick = (article: Article) => {
    // In a real implementation, this would navigate to the article detail page
    console.log('Navigate to article:', article.slug);
    toast({
      title: "Article Preview",
      description: `Opening "${article.title}" - Full article view coming soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        user={user} 
        onLogin={handleLogin} 
        onLogout={handleLogout}
        onSearch={handleSearch}
      />
      
      <HeroSection />
      
      <ArticleGrid 
        articles={filteredArticles}
        onArticleClick={handleArticleClick}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
