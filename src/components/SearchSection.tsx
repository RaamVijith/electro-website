import React from 'react';
import { Search } from 'lucide-react';

interface Category {
  name: string;
  link: string;
}

const SearchSection: React.FC = () => {
  const categories: Category[] = [
    { name: 'Tablets', link: '#' },
    { name: 'Action Camera', link: '#' },
    { name: 'Game Pad', link: '#' },
    { name: 'Smart Watch', link: '#' },
    { name: 'Vacuums', link: '#' },
    { name: 'Digital Clock', link: '#' },
    { name: 'Virtual Reality', link: '#' },
    { name: 'Wifi Routers', link: '#' },
    { name: 'All in one PC', link: '#' },
    { name: 'Game Consoles', link: '#' },
    { name: 'Keyboards', link: '#' },
    { name: 'Earphones', link: '#' },
  ];

  return (
    <div className="w-full  pt-14">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Looking for something else?
        </h2>

        {/* Search Bar */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-6 pr-12 text-lg  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
          <button className="absolute right-1 top-0 h-full aspect-square flex items-center justify-center bg-yellow-400 rounded-full">
            <Search className="text-gray-800" size={24} />
          </button>
        </div>

        {/* Categories */}
        <div className="relative">
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex flex-wrap text-center justify-center gap-6 min-w-max md:min-w-0 px-[10vw]">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="text-gray-500 text-lg hover:text-gray-900 whitespace-nowrap transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style >{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SearchSection;