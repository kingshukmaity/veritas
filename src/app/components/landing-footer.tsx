import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="p-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Navigation Links */}
        <div className="mb-4 md:mb-0 text-4xl font-semibold tracking-wider">
          Veritas
        </div>

        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="mb-2 text-lg font-bold">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright and Legal Information */}
        <div className="flex flex-col justify-center items-center">
          <p>&copy; 2023 Veritas. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
