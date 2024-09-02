import React from "react";
import image1 from "../assects/Our1.jpeg";
import image2 from "../assects/Our2.jpeg"; // Add your second image path
import image3 from "../assects/Our3.jpeg";

const OurServices = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-8">
          Innomation offers state of the art processing and packaging automation
          solutions. Our R&D team, with multiple global patents can design and
          deploy automation solutions for virtually any application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={image1} // Replace with your image source
              alt="Service 1"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={image2} // Replace with your image source
              alt="Service 2"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={image3} alt="Service 3" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
