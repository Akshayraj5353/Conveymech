import React from "react";

const steps = [
  {
    title: "Need Identification",
    description: "Identifying and prioritizing bottlenecked processes",
    icon: "🔍", // Replace with an appropriate icon or image
  },
  {
    title: "Variable Mapping",
    description:
      "Identifying external variables that may affect equipment performance",
    icon: "📊", // Replace with an appropriate icon or image
  },
  {
    title: "Conceptualization",
    description: "Ideation of an optimum solution",
    icon: "💡", // Replace with an appropriate icon or image
  },
  {
    title: "Prototype Development",
    description: "Developing and testing the initial version of the solution",
    icon: "🛠️", // Replace with an appropriate icon or image
  },
  {
    title: "Validation",
    description: "Ensuring the solution meets all specifications",
    icon: "✅", // Replace with an appropriate icon or image
  },
  {
    title: "Deployment",
    description: "Implementing the solution in the operational environment",
    icon: "🚀", // Replace with an appropriate icon or image
  },
];

const HowWeDoIt = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">How we do it</h2>
        <p className="text-lg mb-8 text-gray-600">
          Decades of R&D experience across multiple sectors has enabled us to
          fine-tune our automation development process and ensure our projects
          meet and exceed client expectations throughout the equipment
          lifecycle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4 text-teal-500">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
