import Navbar from "./components/Navbar"
import Slider from "./components/Slider"


function App() {
  const slides = [
    {
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-2.jpg',
      title: 'Entertainment Device 1',
      price: '$250 OFF',
    },
    {
      image: 'https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-3.jpg',
      title: 'Entertainment Device 2',
      price: '$250 OFFf',
    },
    // Add more slide data as needed
  ];
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-8">
      <Slider slides={slides} />
    </div>
    </>
  )
}

export default App
