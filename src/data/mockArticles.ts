
import { Article } from '@/types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Rise of AI in Content Creation: Transforming Digital Marketing',
    slug: 'rise-of-ai-content-creation-digital-marketing',
    excerpt: 'Artificial Intelligence is revolutionizing how we create, distribute, and optimize content. Discover the latest trends and tools that are shaping the future of digital marketing.',
    content: `
      <h2>Introduction</h2>
      <p>The digital marketing landscape is experiencing a seismic shift as artificial intelligence becomes increasingly sophisticated and accessible. From automated content generation to personalized user experiences, AI is not just changing how we work—it's redefining what's possible.</p>
      
      <h2>The Current State of AI in Marketing</h2>
      <p>Today's AI tools have evolved far beyond simple automation. They can now understand context, generate human-like text, and even create visual content that rivals human creativity. This evolution has opened up unprecedented opportunities for marketers to scale their efforts while maintaining quality.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Increased content production speed</li>
        <li>Enhanced personalization at scale</li>
        <li>Data-driven content optimization</li>
        <li>Cost reduction in content creation</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>As we move forward, the integration of AI in content creation will only deepen. The key to success lies in finding the right balance between automation and human creativity, ensuring that technology enhances rather than replaces the human touch that makes content truly engaging.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b95a7ed9?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    tags: ['AI', 'Marketing', 'Technology', 'Content Creation'],
    metadata: {
      title: 'The Rise of AI in Content Creation: Transforming Digital Marketing | TrendWise',
      description: 'Explore how AI is revolutionizing content creation and digital marketing. Learn about the latest tools and trends shaping the industry.',
      keywords: ['AI content creation', 'digital marketing', 'artificial intelligence', 'marketing automation']
    }
  },
  {
    id: '2',
    title: 'Sustainable Technology: Green Innovations Changing the World',
    slug: 'sustainable-technology-green-innovations-changing-world',
    excerpt: 'From renewable energy solutions to eco-friendly manufacturing processes, sustainable technology is paving the way for a greener future. Explore the innovations making a real impact.',
    content: `
      <h2>The Green Revolution</h2>
      <p>Sustainable technology represents one of the most critical developments of our time. As climate change concerns intensify, innovative solutions are emerging that promise to reduce our environmental footprint while maintaining economic growth.</p>
      
      <h2>Key Innovations</h2>
      <p>Recent breakthroughs in renewable energy, particularly in solar and wind technology, have made clean energy more affordable than ever. Meanwhile, advances in battery technology are solving the storage challenges that have long plagued renewable energy adoption.</p>
      
      <h2>Impact on Industries</h2>
      <p>Manufacturing, transportation, and agriculture are all being transformed by sustainable technologies. Smart farming techniques are reducing water usage, while electric vehicles are reshaping the automotive industry.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-14T14:30:00Z',
    readTime: 6,
    tags: ['Sustainability', 'Technology', 'Environment', 'Innovation'],
    metadata: {
      title: 'Sustainable Technology: Green Innovations Changing the World | TrendWise',
      description: 'Discover the latest green technologies and sustainable innovations that are helping combat climate change and create a better future.',
      keywords: ['sustainable technology', 'green innovation', 'renewable energy', 'climate change']
    }
  },
  {
    id: '3',
    title: 'Remote Work Evolution: Building the Future of Distributed Teams',
    slug: 'remote-work-evolution-future-distributed-teams',
    excerpt: 'The pandemic accelerated remote work adoption, but the evolution continues. Learn about the tools, strategies, and cultural shifts defining the future of work.',
    content: `
      <h2>Beyond the Pandemic</h2>
      <p>While COVID-19 forced the world into remote work, the benefits have become clear. Companies are now reimagining work structures permanently, leading to innovative approaches to team collaboration and productivity.</p>
      
      <h2>Technology Enablers</h2>
      <p>Advanced collaboration tools, virtual reality meeting spaces, and AI-powered productivity assistants are making remote work more effective than ever. These technologies are bridging the gap between physical and digital workspaces.</p>
      
      <h2>Cultural Transformation</h2>
      <p>Organizations are developing new cultures that prioritize outcomes over hours, flexibility over rigid schedules, and trust over micromanagement. This shift is fundamentally changing how we think about work-life balance.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-13T09:15:00Z',
    readTime: 7,
    tags: ['Remote Work', 'Future of Work', 'Technology', 'Productivity'],
    metadata: {
      title: 'Remote Work Evolution: Building the Future of Distributed Teams | TrendWise',
      description: 'Explore how remote work is evolving beyond the pandemic, with new tools, strategies, and cultural shifts shaping distributed teams.',
      keywords: ['remote work', 'distributed teams', 'future of work', 'work from home']
    }
  },
  {
    id: '4',
    title: 'Cryptocurrency Market Trends: Navigating the Digital Asset Landscape',
    slug: 'cryptocurrency-market-trends-digital-asset-landscape',
    excerpt: 'The crypto market continues to evolve with new regulations, technologies, and adoption patterns. Stay informed about the trends shaping digital finance.',
    content: `
      <h2>Market Maturation</h2>
      <p>The cryptocurrency market is showing signs of maturation, with increased institutional adoption and clearer regulatory frameworks emerging globally. This evolution is creating new opportunities for both investors and businesses.</p>
      
      <h2>Technological Advances</h2>
      <p>Layer 2 solutions, cross-chain interoperability, and energy-efficient consensus mechanisms are addressing many of the scalability and environmental concerns that have plagued the industry.</p>
      
      <h2>Regulatory Landscape</h2>
      <p>Governments worldwide are developing comprehensive frameworks for digital assets, providing much-needed clarity for businesses and investors while ensuring consumer protection.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-12T16:45:00Z',
    readTime: 9,
    tags: ['Cryptocurrency', 'Blockchain', 'Finance', 'Technology'],
    metadata: {
      title: 'Cryptocurrency Market Trends: Navigating the Digital Asset Landscape | TrendWise',
      description: 'Stay updated on cryptocurrency market trends, regulations, and technological developments shaping the digital finance industry.',
      keywords: ['cryptocurrency', 'blockchain', 'digital assets', 'crypto market']
    }
  },
  {
    id: '5',
    title: 'Mental Health in the Digital Age: Technology as a Solution',
    slug: 'mental-health-digital-age-technology-solution',
    excerpt: 'Mental health apps, AI therapy, and digital wellness tools are changing how we approach psychological well-being. Discover the innovations making mental healthcare more accessible.',
    content: `
      <h2>The Digital Mental Health Revolution</h2>
      <p>Technology is democratizing access to mental health resources, making support available 24/7 through apps, online therapy platforms, and AI-powered tools. This accessibility is particularly crucial in addressing the global mental health crisis.</p>
      
      <h2>AI-Powered Support</h2>
      <p>Artificial intelligence is being used to provide immediate support, detect early warning signs of mental health issues, and personalize treatment approaches. While not replacing human therapists, these tools serve as valuable supplements to traditional care.</p>
      
      <h2>Privacy and Ethics</h2>
      <p>As digital mental health tools proliferate, questions about data privacy, treatment efficacy, and ethical AI use become increasingly important. The industry is working to establish standards that protect users while maximizing benefits.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop',
    author: {
      name: 'Dr. Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-11T11:20:00Z',
    readTime: 6,
    tags: ['Mental Health', 'Technology', 'Healthcare', 'AI'],
    metadata: {
      title: 'Mental Health in the Digital Age: Technology as a Solution | TrendWise',
      description: 'Explore how technology is revolutionizing mental healthcare with apps, AI therapy, and digital wellness tools making support more accessible.',
      keywords: ['mental health', 'digital health', 'AI therapy', 'mental wellness']
    }
  },
  {
    id: '6',
    title: 'The Future of E-commerce: Personalization and Virtual Shopping',
    slug: 'future-ecommerce-personalization-virtual-shopping',
    excerpt: 'E-commerce is evolving beyond simple online stores. AR shopping, AI recommendations, and social commerce are creating immersive, personalized shopping experiences.',
    content: `
      <h2>Beyond Traditional Online Shopping</h2>
      <p>The e-commerce landscape is rapidly evolving, driven by technologies that create more immersive and personalized shopping experiences. Augmented reality, artificial intelligence, and social integration are transforming how consumers discover and purchase products.</p>
      
      <h2>Personalization at Scale</h2>
      <p>AI-powered recommendation engines are becoming more sophisticated, analyzing not just purchase history but also browsing behavior, social media activity, and even seasonal trends to provide highly personalized product suggestions.</p>
      
      <h2>Virtual Shopping Experiences</h2>
      <p>AR and VR technologies are enabling customers to try products virtually, from seeing how furniture looks in their home to trying on clothes without leaving their house. This technology is reducing return rates and increasing customer satisfaction.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop',
    author: {
      name: 'Jessica Park',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-10T13:00:00Z',
    readTime: 8,
    tags: ['E-commerce', 'AR/VR', 'Personalization', 'Technology'],
    metadata: {
      title: 'The Future of E-commerce: Personalization and Virtual Shopping | TrendWise',
      description: 'Discover how AR, AI, and social commerce are revolutionizing e-commerce with personalized and immersive shopping experiences.',
      keywords: ['e-commerce', 'virtual shopping', 'personalization', 'augmented reality']
    }
  }
];
