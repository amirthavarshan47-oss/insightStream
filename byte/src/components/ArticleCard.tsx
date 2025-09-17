import React, { useState } from 'react';
import { Clock, User, ChevronDown, ChevronUp } from 'lucide-react';
import { Article } from '../types/Article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      Politics: 'bg-blue-100 text-blue-800',
      Business: 'bg-green-100 text-green-800',
      Technology: 'bg-purple-100 text-purple-800',
      Sports: 'bg-orange-100 text-orange-800',
      Entertainment: 'bg-pink-100 text-pink-800',
      Health: 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {article.trending && (
        <div className="bg-red-500 text-white px-3 py-1 text-xs font-bold">
          TRENDING
        </div>
      )}
      
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
          {article.category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <span className="text-blue-600 font-medium">{article.publishedAt}</span>
        </div>
        
        {isExpanded && (
          <div className="mb-4 text-gray-700 leading-relaxed border-t pt-4">
            {article.content}
          </div>
        )}
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;