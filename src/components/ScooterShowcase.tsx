import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const products = [
  {
    category: "E Scooters",
    name: "Full Color Laserjet Pro M452dz",
    price: 1300.0,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/eScooter2.webp",
  },
  {
    category: "E Scooters",
    name: "Smartphone 6s 64GB LTE",
    price: 1300.0,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/AllinOnePC-1.webp",
  },
  {
    category: "E Scooters",
    name: "Widescreen NX mini F1 SMART NY",
    price: 1250.0,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/02/eScooter4.webp",
  },
  // Add more products as needed
];

const ScooterShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = products.length - 3; // Adjust for showing 3 items

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (maxSlide + 1)) % (maxSlide + 1));
  };

  return (
    <div className="w-full  ">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left Section - Hero */}
          <div className="relative overflow-hidden rounded-3xl bg-white">
            {/* Replace '/api/placeholder/800/600' with your actual image path in your implementation */}
            <img
              src="https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/featured-category-product.jpg"
              alt="Electric Scooter Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t to-transparent p-20 text-[#333e48]">
              <h1 className="text-4xl md:text-5xl font-light  mb-2">
                NEW AGE
                <br />
                ELECTRIC
                <br />
                SCOOTER
              </h1>
              <p className="text-xl  mt-4">FROM</p>
              <p className="text-4xl font-bold ">
                $749<span className="text-2xl">.99</span>
              </p>
              <button className="bg-yellow-400  px-8 py-3 rounded-full font-semibold mt-6">
                VIEW ALL
              </button>
            </div>
          </div>

          {/* Right Section - Product Carousel */}
          <div className="relative text-[#333e48]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-normal">Electric Mobility</h2>
              <a href="#" className="text-xl text-gray-600 hover:text-gray-800">
                View All Product &gt;
              </a>
            </div>
            <hr/>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-4 hover:cursor-pointer"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="min-w-[calc(100%-1rem)] md:min-w-[calc(33.333%-1rem)] "
                  >
                    <div className="bg-white p-6 rounded-lg h-full hover:shadow-2xl">
                      <p className="text-gray-600 mb-2">{product.category}</p>
                      <h3 className="text-[#1c64bd] font-bold mb-4 text-lg">
                        {product.name}
                      </h3>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-48 object-cover mx-auto mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-semibold">
                          ${product.price.toFixed(2)}
                        </span>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-yellow-400">
                          <ShoppingCart className="w-7 h-7" />
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScooterShowcase;
