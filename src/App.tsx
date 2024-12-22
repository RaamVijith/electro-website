import AudioStudio from "./components/AudioStudio";
import BlogPreviewGrid from "./components/BlogPreviewGrid";
import Navbar from "./components/Navbar";
import ProductShowcase from "./components/ProductShowcase";
import PromotionalGrid from "./components/PromotionalGrid";
import ScooterShowcase from "./components/ScooterShowcase";
import Slider from "./components/Slider";
import TrendingProducts from "./components/TrendingProducts";

function App() {
  const slides = [
    {
      image:
        "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-2.jpg",
      title: "Entertainment Device 1",
      price: "$250 OFF",
    },
    {
      image:
        "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-3.jpg",
      title: "Entertainment Device 2",
      price: "$250 OFFf",
    },
    // Add more slide data as needed
  ];
  return (
    <div className="bg-[#f7f7f7] w-[100vw]">
      <Navbar />
      <div className="container mx-auto my-8">
        <Slider slides={slides} />
      </div>

      <div className="mx-[5vw] p-[3%] bg-white rounded-3xl flex flex-col gap-[10vh]">
      <ScooterShowcase/>
      <AudioStudio/>

      </div>
      <ProductShowcase/>
      <PromotionalGrid/>
      <TrendingProducts/>
      <BlogPreviewGrid/>
    </div>
  );
}

export default App;
