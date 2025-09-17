import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { Article } from '../types/Article';

interface SidebarProps {
  trendingArticles: Article[];
}

const Sidebar: React.FC<SidebarProps> = ({ trendingArticles }) => {
  return (
    <aside className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-5 w-5 text-red-500" />
          <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
        </div>
        
        <div className="space-y-4">
          {trendingArticles.slice(0, 5).map((article, index) => (
            <div key={article.id} className="flex items-start space-x-3 group cursor-pointer">
              <span className="text-2xl font-bold text-red-500 w-8">{index + 1}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{article.publishedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {['Politics', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health'].map((category) => (
            <a 
              key={category}
              href={`#${category.toLowerCase()}`}
              className="block py-2 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* Weather Widget */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-bold mb-2">Chennai Weather</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">28°C</div>
            <div className="text-blue-100">Partly Cloudy</div>
          </div>
          <div className="text-6xl opacity-80">⛅</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;