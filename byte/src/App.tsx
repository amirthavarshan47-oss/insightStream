import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import ArticleCard from './components/ArticleCard';
import Sidebar from './components/Sidebar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import { mockArticles, breakingNews } from './data/mockArticles';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return mockArticles;
    
    return mockArticles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const trendingArticles = mockArticles.filter(article => article.trending);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} onMenuClick={handleMobileMenuToggle} />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onSearch={handleSearch}
      />
      
      <BreakingNews news={breakingNews} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {searchQuery && (
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-gray-600 mt-1">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </p>
              </div>
            )}
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try searching with different keywords</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Sidebar trendingArticles={trendingArticles} />
              <Newsletter />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;