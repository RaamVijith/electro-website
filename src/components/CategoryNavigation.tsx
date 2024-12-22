import React from 'react';

interface Category {
  title: string;
  image: string;
  link: string;
}

const CategoryNavigation: React.FC = () => {
  const categories: Category[] = [
    {
      title: 'Super Deals',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-5-removebg-preview.png',
      link: '#'
    },
    {
      title: 'Gaming',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-1-removebg-preview.png',
      link: '#'
    },
    {
      title: 'Laptops',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-2-removebg-preview.png',
      link: '#'
    },
    {
      title: 'Drones',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-3-removebg-preview.png',
      link: '#'
    },
    {
      title: 'Action Cameras',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-4-removebg-preview.png',
      link: '#'
    },
    {
      title: 'Earphones',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-5-removebg-preview.png',
      link: '#'
    },
    {
      title: 'Smart Home',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-6-removebg-preview.png',
      link: '#'
    },
    {
      title: 'Wearable',
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-7-removebg-preview.png',
      link: '#'
    }
  ];

  return (
    <div className="w-full   pt-[5vh]">
      <div className=" py-4 px-10 md:px-8 lg:px-[6vw]">
        {/* Scrollable Container */}
        <div className="relative">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-8 justify-center md:justify-between ">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="flex flex-col items-center group"
                >
                  {/* Circle Container */}
                  <div className="w-40 h-40 mb-3 rounded-full bg-white shadow-md flex items-center justify-center p-4 transition-transform group-hover:scale-105">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Title */}
                  <span className="text-gray-700 text-sm font-medium text-center group-hover:text-gray-900">
                    {category.title}
                  </span>
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

export default CategoryNavigation;