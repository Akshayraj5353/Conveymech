import React from "react";
import image3 from "../assects/ChooseUs.jpeg";
import image4 from "../assects/Chooseus1.jpeg"; // Add your second image path
import image5 from "../assects/Chooseus2.jpeg"; // Add your third image path

function WhyChooseUs() {
  return (
    <div className="bg-gray-800 p-6 md:p-12 rounded-lg">
      <h6 className="text-2xl text-white text-center font-bold mb-4">
        Why Choose Us
      </h6>
      <p className="text-lg text-white mb-6">
        With extensive experience in Seafood Processing, Food Processing,
        Automotive, Medical & Pharma, and Industrial Machinery, we deliver
        solutions tailored to your specific needs. Our conveyor systems are
        engineered for maximum durability and efficiency, ensuring long-term
        reliability and superior performance. From initial design to final
        implementation, we offer comprehensive engineering services, ensuring a
        smooth and successful project experience. As a leading conveyor system
        manufacturer in Hyderabad and across India, we are known for delivering
        high-quality products on time, every time. Your success is our priority.
        We work closely with you to understand your needs and provide expert
        support throughout your project.
      </p>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src={image3}
          alt="Conveyor System 1"
          className="w-full h-auto rounded-lg object-cover"
        />
        <img
          src={image4}
          alt="Conveyor System 2"
          className="w-full h-auto rounded-lg object-cover"
        />
        <img
          src={image5}
          alt="Conveyor System 3"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
