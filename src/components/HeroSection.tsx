
import { TrendingUp, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 sm:py-32">
      <div className="absolute inset-0 bg-white/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 font-playfair animate-fade-in">
            Discover What's
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Trending Now
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Stay ahead of the curve with AI-powered insights on trending topics, 
            breaking news, and the conversations shaping our world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
            >
              Explore Articles
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              See What's Trending
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Trends</h3>
              <p className="text-blue-100">Track what's trending across platforms and regions</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Content</h3>
              <p className="text-blue-100">Get instant, comprehensive articles on trending topics</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Insights</h3>
              <p className="text-blue-100">Understand trends from a worldwide perspective</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
