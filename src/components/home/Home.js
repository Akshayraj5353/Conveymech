import React from "react";
import Layout from "../../Layout/Layout";
import VideoPlayer from "../VideoPlayer";
import AboutSection from "../AboutSection";
import WhyChooseUs from "../WhyChooseUs";
import OurServices from "../OurServices";
import HowWeDoIt from "../HowWedoIt";

const Home = () => {
  return (
    <Layout>
      <VideoPlayer />
      <AboutSection />
      <WhyChooseUs />
      <OurServices />
      <HowWeDoIt />
    </Layout>
  );
};

export default Home;
