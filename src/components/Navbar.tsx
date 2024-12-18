import React, { useState } from "react";

const Navbar: React.FC = () => {
  // State for sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-white md:bg-yellow-400 relative">
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-gray-600 text-sm bg-white">
        <div className="flex items-center space-x-6">
          <span>📞 +060 (800) 801-858</span>
          <span>📧 info@electro.com</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-800">
            Store Locator
          </a>
          <a href="#" className="hover:text-gray-800">
            Track Your Order
          </a>
          <a href="#" className="hover:text-gray-800">
            Shop
          </a>
          <a href="#" className="hover:text-gray-800">
            My Account
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8 bg-yellow-400">
        {/* Left Side: Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="text-gray-800 text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-3xl font-bold text-gray-800">
            electro
          </a>
        </div>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center flex-1 mx-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-l focus:outline-none"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-r text-white">
            🔍
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-800">
          <a href="#" className="hover:text-gray-600">
            🔄
          </a>
          <a href="#" className="hover:text-gray-600">
            ❤️
          </a>
          <a href="#" className="relative hover:text-gray-600">
            🛒
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </a>
        </div>
      </div>

       {/* Categories Section (Desktop Only) */}
       <nav className="hidden md:flex items-center justify-center space-x-8 py-2 bg-white text-gray-800 text-sm">
        <a href="#" className="flex items-center hover:text-yellow-500">
          💻 Laptops & Computers
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          📷 Cameras
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          📱 Smartphones & Tablets
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          🎮 Gaming
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          📺 TV & Audio
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          🎧 Headphones
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          🚁 Drones
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          🕶️ Virtual Reality
        </a>
        <a href="#" className="flex items-center hover:text-yellow-500">
          🔌 Gadgets
        </a>
        <a href="#" className="text-red-500 hover:underline">
          🏷️ SuperDeals
        </a>
      </nav>

      {/* Sidebar (Left Side) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-gray-800">
          <a href="#" className="hover:text-yellow-500">
            💻 Laptops & Computers
          </a>
          <a href="#" className="hover:text-yellow-500">
            📷 Cameras
          </a>
          <a href="#" className="hover:text-yellow-500">
            📱 Smartphones & Tablets
          </a>
          <a href="#" className="hover:text-yellow-500">
            🎮 Gaming
          </a>
          <a href="#" className="hover:text-yellow-500">
            📺 TV & Audio
          </a>
          <a href="#" className="hover:text-yellow-500">
            🎧 Headphones
          </a>
          <a href="#" className="hover:text-yellow-500">
            🚁 Drones
          </a>
          <a href="#" className="hover:text-yellow-500">
            🕶️ Virtual Reality
          </a>
          <a href="#" className="hover:text-yellow-500">
            🔌 Gadgets
          </a>
          <a href="#" className="text-red-500 hover:underline">
            🏷️ SuperDeals
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
