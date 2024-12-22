import React from "react";
import {  Phone, Mail } from "lucide-react";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogPreviewGrid: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "New Smartphone Design Trends",
      description:
        "Pellentesque vehicula tortor sit amet libero fringilla hendreri",
      image:
        "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-3.jpg",
      link: "#",
    },
    {
      title: "USB-C Type is Now a Must Have",
      description:
        "Morbi ante nibh, rhoncus sed magna in, pulvinar luctus est. Cla, ",
      image:
        "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-2.jpg",
      link: "#",
    },
    {
      title: "Why All-Season Headphones are Good",
      description:
        "Curabitur in lacus ullamcorper, blandit libero sed, semper tort",
      image:
        "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-1.jpg",
      link: "#",
    },
  ];

  return (
    <div className="  mx-4 md:mx-8 lg:mx-[5vw] mt-[8vh] ">
      <div className="flex gap-4 border-b border-gray-200 mb-8">
        {["News From Our Blog "].map((tab) => (
          <button
            key={tab}
            className={`pb-4 px-1 relative ${"text-[#333e48] text-3xl font-normal"}`}
          >
            {tab}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400" />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <article key={index} className="group ">
            {/* Image Container */}
            <div className="relative ">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Container */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 my-4 text-lg">{post.description}</p>

              {/* Read More Link */}
              <a
                href={post.link}
                className="inline-flex items-center text-xl font-semibold text-gray-800 hover:text-blue-800 transition-colors duration-200"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="w-full border-t border-gray-200 my-[7vh] py-[4vh]">
        <div className=" py-3">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between gap-4">
            {/* Help Section */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/icon_3.png" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800 text-2xl">
                  YOU NEED HELP?
                </h2>
                <p className="text-lg text-gray-600">
                  Do not hesitate to ask, our specialists will help you choose
                  proper products.
                </p>
              </div>
            </div>

            {/* Contact Information - Middle */}
            <div className="flex items-center gap-4">
              <Phone size={32} className="text-gray-600" />
              <div>
                <div className="font-medium text-2xl text-gray-800">
                  +06 (800) 801-858
                </div>
                <div className="text-lg text-gray-600">
                  Mon-fri: 8:00 am - 4:00 pm
                </div>
              </div>
            </div>

            {/* Email and Chat Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail size={32} className="text-gray-600" />
                <div>
                  <div className="font-semibold text-xl text-gray-800">
                    info@electro.com
                  </div>
                  <div className="text-lg text-gray-600">
                    Mail to us directly
                  </div>
                </div>
              </div>

              {/* Chat Button */}
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-bold text-lg flex items-center gap-2 transition-colors">
                <span className="whitespace-nowrap">START NEW CHAT</span>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewGrid;
