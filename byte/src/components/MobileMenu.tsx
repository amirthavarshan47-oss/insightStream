import React from 'react';
import { X, Search } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onSearch }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="fixed inset-y-0 left-0 w-80 bg-gray-800 text-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search news..."
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          
          <nav className="space-y-2">
            <a href="#politics" className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={onClose}>Politics</a>
            <a href="#business" className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={onClose}>Business</a>
            <a href="#technology" className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={onClose}>Technology</a>
            <a href="#sports" className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={onClose}>Sports</a>
            <a href="#entertainment" className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={onClose}>Entertainment</a>
            <a href="#health" className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={onClose}>Health</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;