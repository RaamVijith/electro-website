import React, { useState } from "react";
import {
  Camera,
  Fan,
  Gamepad2,
  Headphones,
  Heart,
  Laptop,
  Mail,
  MapPin,
  MonitorPlay,
  PenTool,
  Phone,
  RefreshCcw,
  Search,
  ShoppingBag,
  Smartphone,
  TabletSmartphone,
  Truck,
  Tv,
  User,
} from "lucide-react";
const Navbar: React.FC = () => {
  // State for sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-white  relative px-4 md:px-8 lg:px-[4vw]">
      {/* Top Bar */}
      <div className="hidden md:flex items-center whitespace-nowrap justify-between px-8 pt-4 pb-8 text-gray-800 text-[17px] bg-white">
        <div className="flex items-center space-x-6">
          <span className="flex flex-row items-center gap-3">
            <Phone className="text-gray-500" /> +060 (800) 801-858
          </span>
          <span className="flex flex-row items-center gap-3">
            <Mail className="text-gray-500" /> info@electro.com
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="hover:text-gray-800 flex flex-row items-center gap-3"
          >
            <MapPin className="text-gray-500" />
            Store Locator
          </a>
          <a
            href="#"
            className="hover:text-gray-800 flex flex-row items-center gap-3"
          >
            <Truck className="text-gray-500" />
            Track Your Order
          </a>
          <a
            href="#"
            className="hover:text-gray-800 flex flex-row items-center gap-3"
          >
            <ShoppingBag className="text-gray-500" />
            Shop
          </a>
          <a
            href="#"
            className="hover:text-gray-800 flex flex-row items-center gap-3"
          >
            <User className="text-gray-500" />
            My Account
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left Side: Hamburger Menu */}

        {/* Logo */}
        <div className="flex items-center pr-10">
          <img
            src="https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2024/01/el-logo.svg"
            alt="logo"
          />
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-800 text-2xl focus:outline-none hidden lg:flex"
        >
          ☰
        </button>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center flex-1 ml-8 mr-12 relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-lg text-gray-700  h-14 rounded-full border-yellow-300 border-2  focus:outline-none"
          />
          <button className="bg-yellow-400 px-3 h-11 rounded-full text-gray-700 absolute left-[95%]">
            <Search />
          </button>
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center space-x-6 text-gray-800">
          <a href="#" className="hover:text-gray-600">
            <RefreshCcw />
          </a>
          <a href="#" className="hover:text-gray-600">
            <Heart />
          </a>
          <a href="#" className="relative hover:text-gray-600">
            <ShoppingBag />
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </a>
          <a href="#" className="hover:text-gray-500 text-xl font-semibold">
            0.00
          </a>
        </div>
      </div>

      {/* Categories Section (Desktop Only) */}
      <nav className="hidden md:flex items-center justify-center space-x-8 pt-3 pb-5 bg-white text-gray-600 font-medium text-lg whitespace-nowrap">
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <Laptop className="text-gray-500 " size={26} /> Laptops & Computers
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <Camera className="text-gray-500 " size={26} /> Cameras
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <Smartphone  className="text-gray-500 " size={26} /> Smartphones & Tablets
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <Gamepad2  className="text-gray-500 " size={26} /> Gaming
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <Tv className="text-gray-500 " size={26} /> TV & Audio
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <Headphones  className="text-gray-500 " size={26} /> Headphones
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <Fan  className="text-gray-500 " size={26} /> Drones
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <MonitorPlay  className="text-gray-500 " size={26} /> Virtual Reality
        </a>
        <a
          href="#"
          className="flex items-center hover:text-yellow-500 flex-row gap-2"
        >
          <TabletSmartphone  className="text-gray-500 " size={26} /> Gadgets
        </a>
        <a href="#" className="text-red-500 hover:underline flex flex-row gap-2">
          <PenTool   size={26} /> SuperDeals
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
