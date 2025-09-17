import React from 'react';
import { Search, Menu } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onMenuClick }) => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">
              B
            </div>
            <h1 className="text-2xl font-bold">
              <span className="text-blue-400">Byte</span>
              <span className="text-white">News</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#politics" className="hover:text-blue-400 transition-colors duration-200 font-medium">Politics</a>
            <a href="#business" className="hover:text-blue-400 transition-colors duration-200 font-medium">Business</a>
            <a href="#technology" className="hover:text-blue-400 transition-colors duration-200 font-medium">Technology</a>
            <a href="#sports" className="hover:text-blue-400 transition-colors duration-200 font-medium">Sports</a>
            <a href="#entertainment" className="hover:text-blue-400 transition-colors duration-200 font-medium">Entertainment</a>
            <a href="#health" className="hover:text-blue-400 transition-colors duration-200 font-medium">Health</a>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  className="bg-gray-700 text-white placeholder-gray-400 px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                  onChange={(e) => onSearch(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <button 
              className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;