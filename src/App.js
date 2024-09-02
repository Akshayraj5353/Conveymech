import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import HowWeDoIt from "./components/HowWedoIt";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <img className="w-screen p-1" alt="logo" src={image} /> */}
      <VideoPlayer />
      <AboutSection />
      <WhyChooseUs />
      <OurServices />
      <HowWeDoIt />
      <Footer />
    </div>
  );
}

export default App;
