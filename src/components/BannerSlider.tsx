import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BannerSlider: React.FC = () => {
  const banners = [
    {
      id: 1,
      image: "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-2.jpg",
      title: "Enhance Your Entertainment",
      subtitle: "Last Call for",
      buttonText: "Start Buying",
      bgColor: "bg-yellow-200", // Tailwind background color
    },
    {
      id: 2,
      image: "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-1.jpg",

      title: "Get the Best Gadgets",
      subtitle: "Unmissable ",
      buttonText: "Shop Now",
      bgColor: "bg-green-200",
    },
    {
      id: 3,
      image: "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-3.jpg",

      title: "Discover New Devices",
      subtitle: "Upgrade Your ",
      buttonText: "Check Deals",
      bgColor: "bg-blue-200",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.65,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-4 ">
      <div className=" mx-auto">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className={`p-4 `}>
              <div className="relative w-full h-[45vh] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center w-[60%] items-start p-[7%] text-gray-700">
                  <h2 className="text-5xl uppercase  font-normal">{banner.title}</h2>
                  <p className="mt-2 my-3 text-xl font-bold">{banner.subtitle} <span className="font-bold text-5xl">$250</span></p>
                  <button className="mt-4 bg-[#fed700] px-6 uppercase text-xl font-normal py-2 rounded-full shadow-md hover:bg-yellow-600">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
