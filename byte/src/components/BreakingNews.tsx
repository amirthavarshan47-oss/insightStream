import React from 'react';

interface BreakingNewsProps {
  news: string[];
}

const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative">
      <div className="flex items-center">
        <div className="bg-red-700 px-4 py-1 font-bold text-sm mr-4 flex-shrink-0">
          BREAKING NEWS
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {news.map((item, index) => (
            <span key={index} className="mx-8 text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BreakingNews;