import React from "react";
import image3 from "../assects/image3.jpeg"; // Replace with your image path

function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      {/* Text Section */}
      <div className="md:w-1/2 text-left">
        <h6 className="text-2xl text-center md:text-4xl font-bold mb-4">
          About Us
        </h6>
        <p className="text-lg md:text-xl mb-4">
          Conveymech Solutions is a leading engineering firm specializing in
          high-quality conveyor systems, proudly recognized among the top
          conveyor system manufacturers in Hyderabad. We provide comprehensive
          engineering design solutions, product development services, and
          consulting expertise to various global industries, including
          Automotive, Aerospace, Medical & Pharma, Industrial Machinery &
          Equipment, Defense, and Heavy Engineering.
        </p>
        <p className="text-lg md:text-xl">
          As one of the foremost manufacturers of conveyors in India, Conveymech
          Solutions helps organizations tackle their engineering challenges by
          delivering tailored conveyor solutions. Our extensive range of
          services includes product design, engineering analysis, and technology
          staffing solutions, making us a trusted partner for conveyors in
          Hyderabad and across India.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <img
          src={image3}
          alt="Conveyer System"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default AboutSection;
