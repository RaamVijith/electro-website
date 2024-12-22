import  { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    category: 'Game Consoles',
    name: 'GameConsole Destiny Special ',
    price: 789.00,
    image:"https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/PortableSpeakerMedium.webp",

    originalPrice: null
  },
  {
    category: 'Accessories',
    name: 'Powerbank 1130 mAh Blue',
    price: 103.00,
    image:"https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/SmartWatch2.webp",
    originalPrice: null
  },
  {
    category: 'Laptops',
    name: 'Laptop Yoga 500 15.6" 6200U',
    price: 1999.00,
    image:"https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/10/EarBuds_720x720.webp",
    originalPrice: null
  },
  {
    category: 'Smart Phones',
    name: 'Smartphone 6s 32GB LTE',
    price: 1300.00,
    image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/AllinOnePC.webp',
    originalPrice: null
  },
  {
    category: 'Smart Watches',
    name: 'Smartwatch 2.0 LTE Wifi',
    price: 129.00,
    image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/PortableCamera.webp',
    originalPrice: 249.00
  },
  {
    category: 'Cameras',
    name: 'Camera C430W 4k',
    price: 590.00,
    image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/10/featured-9.png',
    originalPrice: null
  },
  
  {
    category: 'Smart Phones',
    name: 'Smartphone 6s 32GB LTE',
    price: 1300.00,
    image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/AllinOnePC.webp',
    originalPrice: null
  },
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('Featured');
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 5;
  const maxSlide = Math.max(0, products.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-[5vw] p-4 md:p-[3%] bg-white rounded-3xl mt-4 md:mt-[8vh]">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-8">
        {['Featured', 'On Sale', 'Top Rated'].map((tab) => (
          <button
            key={tab}
            className={`pb-4 px-1 relative ${
              activeTab === tab 
                ? 'text-[#333e48] text-3xl font-normal' 
                : 'text-[#333e48] font-light text-2xl'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400" />
            )}
          </button>
        ))}
      </div>

      {/* Product Slider */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out  "
            style={{ transform: `translateX(-${currentSlide * 20}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[calc(50%-0.75rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1rem)] xl:min-w-[calc(20%-1.2rem)] group relative"
              >
                <div className="bg-white  pb-10 p-6 rounded-lg h-full hover:shadow-2xl transition-shadow duration-300 ">
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <h3 className=" text-[#1c64bd] font-bold mb-4 text-lg">
                    {product.name}
                  </h3>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-48 object-cover mx-auto mb-4"
                    />
                  <div className="flex justify-between items-center text-[#333e48]">
                    <div>
                      <span className="text-2xl font-semibold">
                        ${product.price.toFixed(2)}
                      </span>
                    
                    </div>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-yellow-400">
                          <ShoppingCart className="w-7 h-7" />
                        </button>
                  </div>
                  <div className='opacity-0 mt-2 group-hover:opacity-100 transition-opacity duration-300 w-full h-[1px] bg-gray-300'></div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-0 left-0 right-0 flex text-[#333e48] text-xl justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 flex flex-row gap-2 items-center rounded-full">
                      <ShoppingCart className="w-5 h-5" />
                      Wish list
                    </button>
                    <button className="p-2 flex flex-row gap-2 items-center rounded-full ">
                      <Heart className="w-5 h-5" />
                      compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg ${
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === maxSlide}
          className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg ${
            currentSlide === maxSlide ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;