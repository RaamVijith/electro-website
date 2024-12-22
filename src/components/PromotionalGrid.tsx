import React from "react";

interface PromotionalItem {
  title: string;
  subtitle?: string;
  price?: string;
  pricePrefix?: string;
  image: string;
  buttonText?: string;
}

const PromotionalGrid: React.FC = () => {
  const featuredItem: PromotionalItem = {
    title: "ALL-NEW-SPORT",
    subtitle: "4K",
    price: "79.99",
    pricePrefix: "STARTING AT",
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-1.jpg",
    buttonText: "Shop now",
  };

  const promotionalItems: PromotionalItem[] = [
    {
      title: "smartG3",
      subtitle: "Now with 4G",
      price: "129.99",
      pricePrefix: "from",
      image:
        "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-1.jpg",
      buttonText: "Shop now",
    },
    {
      title: "LAPTOPS, NOTEBOOKS",
      subtitle: "AND MORE",
      image: "/api/placeholder/200/200",
      buttonText: "Shop now",
    },
    {
      title: "360 CAMERAS",
      subtitle: "WITH 4K HQ",
      image: "/api/placeholder/200/200",
      buttonText: "Shop now",
    },
    {
      title: "SHOP THE HOTTEST",
      subtitle: "PRODUCTS",
      image: "/api/placeholder/200/200",
      buttonText: "Shop now",
    },
    {
      title: "AUDIO STUDIO 3",
      subtitle: "WIRELESS",
      image: "/api/placeholder/200/200",
      buttonText: "Shop now",
    },
    {
      title: "CATCH BIG DEALS",
      subtitle: "ON THE CONSOLES",
      image: "/api/placeholder/200/200",
      buttonText: "Shop now",
    },
  ];

  return (
    <div className=" mx-4 md:mx-8 lg:mx-[5vw] mt-[8vh]  overflow-hidden">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex lg:gap-4 w-full h-[50vh]">
        {/* Featured Item - Left Side */}

        <div className="w-2/5 bg-gray-900 text-white rounded-lg overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={featuredItem.image} // Replace with your background image
              alt="background"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Content Container - Now with z-index to appear above background */}
          <div className="relative z-10 p-[15%] h-full flex flex-col">
            <div className="mb-6">
              <h2 className="text-xl font-bold">{featuredItem.title}</h2>
              <div className="text-8xl font-light text-yellow-500">
                {featuredItem.subtitle}
              </div>
              <div className="mt-2 text-lg">{featuredItem.pricePrefix}</div>
              <div className="text-5xl font-semibold">${featuredItem.price}</div>
            </div>
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="w-3/5 grid grid-cols-3 gap-4">
          {promotionalItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-10">
              <h3 className="text-3xl font-light">{item.title}</h3>
              <p className="text-lg font-light text-gray-600">{item.subtitle}</p>
              {item.price && (
                <div className="mt-2">
                  <span className="text-sm text-gray-500">
                    {item.pricePrefix}{" "}
                  </span>
                  <span className="text-lg font-bold">${item.price}</span>
                </div>
              )}

              <button className="mt-2 text-gray-700 flex items-center text-xl font-semibold">
                {item.buttonText}
                <span className="ml-2 bg-yellow-400 rounded-full px-1 text-white ">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Small Screen Layout - Vertical Stack */}
      <div className="lg:hidden space-y-4">
        {/* Featured Item First */}
        <div className="bg-gray-900 text-white rounded-lg overflow-hidden p-4">
          <div className="flex items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold">{featuredItem.title}</h2>
              <div className="text-2xl font-bold text-yellow-500">
                {featuredItem.subtitle}
              </div>
              <div className="mt-2 text-sm">{featuredItem.pricePrefix}</div>
              <div className="text-2xl font-bold">${featuredItem.price}</div>
            </div>
            <div className="w-1/2">
              <img
                src={featuredItem.image}
                alt={featuredItem.title}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Other Items */}
        {promotionalItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
                {item.price && (
                  <div className="mt-2">
                    <span className="text-sm text-gray-500">
                      {item.pricePrefix}{" "}
                    </span>
                    <span className="text-lg font-bold">${item.price}</span>
                  </div>
                )}
                <button className="mt-2 text-blue-600 flex items-center">
                  {item.buttonText}
                  <span className="ml-1">→</span>
                </button>
              </div>
              <div className="w-1/3 ml-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-24 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionalGrid;
