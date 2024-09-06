import React from "react";
import Layout from "../../Layout/Layout"; // Assuming Layout is in the same directory level
import loadingimg from "../../assects/Truck Loading Conveyor- Conveymech Solutions.jpeg";
import loadingimg1 from "../../assects/Truck Loading & UnLoading Conveyor - Conveymech Solutions.jpeg";

const ManualSystems = () => {
  return (
    <Layout>
      <div className="m-10">
        <h2 className="text-2xl font-bold mb-4">
          Truck Loading Conveyor System (Manual)
        </h2>
        <p className="text-lg mb-4">
          Get an improved way of loading and unloading with Conveymech
          Solutions’ Truck Loading Conveyor System that has manual height
          adjustment and a highly durable structure. This system is specifically
          relevant to any logistics and storage organization such as warehousing
          and distributor centers in material handling.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-8">
        {/* Content on the left */}
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-bold mb-2">Key Features:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>
                Manual Height Adjustment Mechanism (1500mm to 3500mm):
              </strong>{" "}
              Operators can easily regulate the height with values ranging
              between 1500mm and 3500mm, accommodating different heights of
              truck beds for efficient material transfer.
            </li>
            <li className="mb-2">
              <strong>Standard Conveyor Length (7 meters):</strong> Comprising a
              3-meter infeed conveyor and a 4-meter adjustable boom conveyor,
              the system efficiently feeds materials and extends into trucks for
              easy loading and unloading.
            </li>
            <li className="mb-2">
              <strong>Durable Construction:</strong> Made from strong materials
              to withstand daily operations in industries, ensuring long service
              life.
            </li>
            <li className="mb-2">
              <strong>Enhanced Efficiency:</strong> Adjustable height and
              flexible boom conveyor optimize loading and unloading processes.
            </li>
            <li className="mb-2">
              <strong>Ergonomic Design:</strong> Reduces workplace injuries and
              improves operator comfort with height control and an extendable
              boom.
            </li>
            <li className="mb-2">
              <strong>User-Friendly Operation:</strong> Manual adjustment
              mechanisms allow easy customization of height and length based on
              operational needs.
            </li>
            <li className="mb-2">
              <strong>Customizable Options:</strong> Additional features such as
              extended conveyor length, width, and load capacity can be
              customized for your needs.
            </li>
          </ul>
        </div>

        {/* Image on the right */}
        <div className="md:w-1/2 p-4">
          <img
            src={loadingimg}
            alt="Truck Loading Conveyor System"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* <img
            src={loadingimg1}
            alt="Truck Loading Conveyor System"
            className="w-full h-auto rounded-lg shadow-lg"
          /> */}
        </div>
      </div>
    </Layout>
  );
};

export default ManualSystems;
