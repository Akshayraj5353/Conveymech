import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div>
      <Header />
      {/* <img className="w-screen p-1" alt="logo" src={image} /> */}
      <VideoPlayer />
      <AboutSection />
      <WhyChooseUs />
    </div>
  );
}

export default App;
