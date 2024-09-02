import React from "react";
import { FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="text-gray-400">
              We are committed to providing the best services to our clients.
              Our experience and expertise ensure top-quality solutions tailored
              to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-teal-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-teal-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-teal-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-teal-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: info@company.com</li>
              <li className="mb-2">Phone: +123 456 7890</li>
              <li className="mb-2">
                Address: 1234 Street Name, City, State, ZIP
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <FaGoogle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 text-sm mt-8">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
