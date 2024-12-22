import AudioStudio from "./components/AudioStudio";
import BannerSlider from "./components/BannerSlider";
import BlogPreviewGrid from "./components/BlogPreviewGrid";
import CategoryNavigation from "./components/CategoryNavigation";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductShowcase from "./components/ProductShowcase";
import PromotionalGrid from "./components/PromotionalGrid";
import ScooterShowcase from "./components/ScooterShowcase";
import SearchSection from "./components/SearchSection";
import TrendingProducts from "./components/TrendingProducts";

function App() {
 
  return (
    <div className="bg-[#f7f7f7] w-[100vw]">
      <Navbar />
      <BannerSlider/>

      <Features/>

      <div className="mx-[5vw] p-[3%] bg-white rounded-3xl flex flex-col gap-[10vh]">
        <ScooterShowcase />
        <AudioStudio />
      </div>
      <ProductShowcase />
      <CategoryNavigation />
      <PromotionalGrid />
      <TrendingProducts />
      <SearchSection />

      <BlogPreviewGrid />
      <Footer />
    </div>
  );
}

export default App;
