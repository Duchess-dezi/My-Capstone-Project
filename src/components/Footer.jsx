import React from 'react';
import { FaSquareXTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-red-700 text-yellow-900 text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Dezi's Special. All rights reserved.</p>
      
      <div className="flex justify-center space-x-6 mt-2">
        {/* Twitter */}
        <a href="https://twitter.com/Duchess_dexi/" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="text-3xl hover:text-yellow-500 transition-transform duration-300 hover:scale-110" />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/Duchess-dexi/" target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram className="text-3xl hover:text-yellow-500 transition-transform duration-300 hover:scale-110" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/Duchess-dezi/" target="_blank" rel="noopener noreferrer">
          <FaSquareGithub className="text-3xl hover:text-yellow-500 transition-transform duration-300 hover:scale-110" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
