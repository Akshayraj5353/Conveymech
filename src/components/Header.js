import React from "react";
import logo from "../assects/logo.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      {/* Logo and Main Menu */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-16 w-16" alt="logo" src={logo} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button id="menu-btn" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-white">
            {/* Menu Items */}
            <li className="group relative">
              <Link to="/">Home</Link>
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
                      <Link
                        to="/manual-systems"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
                      >
                        Manual System
                      </Link>
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

      {/* Mobile Menu */}
      <div className="md:hidden">
        <ul className="flex flex-col space-y-2 mt-2 text-white">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Partners
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Project Videos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
