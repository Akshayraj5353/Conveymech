import React from "react";
import logo from "../assects/logo.jpeg";

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      {/* Logo and Main Menu */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-16 w-16" alt="logo" src={logo} />
        </div>
        <nav>
          <ul className="flex space-x-8 text-white">
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
              {/* Dropdown Menu */}
              <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-600 rounded-md p-2 space-y-2 mt-1 z-10 w-48 shadow-lg">
                <li className="relative group">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                  >
                    Truck Loading Conveyors
                  </a>
                  {/* Nested Submenu */}
                  <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-600 rounded-md p-2 space-y-2 mt-1 left-full top-0 w-48 shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        Manual System
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        Hydraulic System
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        Telescopic System
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                  >
                    Flat Belt Conveyors
                  </a>
                  {/* Nested Submenu */}
                  <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-600 rounded-md p-2 space-y-2 mt-1 left-full top-0 w-48 shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        PVC Belt Conveyors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        PU Belt Conveyors
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                  >
                    Modular Belt Conveyors
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                  >
                    Slat Chain Conveyors
                  </a>
                  {/* Nested Submenu */}
                  <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-600 rounded-md p-2 space-y-2 mt-1 left-full top-0 w-48 shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        Two-Row Conveyors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        Three-Row Conveyors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        Thermo Plastic Chain Conveyors
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">
                Partners
              </a>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">
                Project Videos
              </a>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
// import React from "react";
// import logo from "../assects/logo.jpeg";

// function Header() {
//   return (
//     <div>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Products</li>

//         <ul>
//           <li>
//             Truck Loading Conveyors
//             <ul>
//               <li>
//                 <a>Manual System</a>
//               </li>
//               <li>
//                 <a>Hydraulic System</a>
//               </li>
//               <li>
//                 <a>Telescopic System</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a>Flat Belt conveyors</a>
//             <ul>
//               <li>
//                 <a>PVC belt conveyors</a>
//               </li>
//               <li>
//                 <a>PU belt conveyors</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a>Modular Belt conveyors</a>
//           </li>
//           <li>
//             <a>Slat chain conveyors</a>
//             <ul>
//               <li>
//                 <a>Two-Row conveyors</a>
//               </li>
//               <li>
//                 <a>Three-Row conveyors</a>
//               </li>
//               <li>
//                 <a>Thermo Plastic Chain conveyors</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a>Flexible chain conveyors</a>
//             <ul>
//               <li>
//                 <a>Flexible Roller conveyors</a>
//               </li>
//               <li>
//                 <a>Skate Wheel conveyors</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a>Roller conveyors</a>
//             <ul>
//               <li>
//                 <a>Gravity Roller conveyors</a>
//               </li>
//               <li>
//                 <a>Powerised Wheel conveyors</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a>Bag Stacking conveyors</a>
//           </li>
//           <li>
//             <a>Stiching conveyors</a>
//           </li>
//           <li>
//             <a>Inclined conveyors</a>
//           </li>
//           <li>
//             <a>Wire Mesh Chain conveyors</a>
//           </li>
//           <li>
//             <a>Turn Table conveyors</a>
//           </li>
//           <li>
//             <a>Coding Conveyors</a>
//           </li>
//           <li>
//             <a>Crate Washing Conveyors</a>
//           </li>
//         </ul>
//         <li>
//           <a href="#">Services</a>
//         </li>
//         <li>
//           <a href="#">Partners </a>
//         </li>
//         <li>
//           <a>Project Vedios</a>
//         </li>
//         <li>
//           <a>Contact Us</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Header;
