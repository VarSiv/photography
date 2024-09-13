import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="p-4 relative z-10 bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} className='max-h-16' alt="Logo" />

        {/* Navbar */}
        <nav className="flex items-center text-white text-lg space-x-6">
          {/* Navigation Links */}
          <a href="#home" className="hover:text-gray-300">Home</a>
          <span className="h-6 border-r border-gray-400 mx-2"></span> {/* Vertical Line */}
          <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
          <span className="h-6 border-r border-gray-400 mx-2"></span> {/* Vertical Line */}
          <a href="#about" className="hover:text-gray-300">About</a>
          <span className="h-6 border-r border-gray-400 mx-2"></span> {/* Vertical Line */}
          <a href="#contacto" className="hover:text-gray-300">Contacto</a>
          <span className="h-6 border-r border-gray-400 mx-2"></span> {/* Vertical Line */}
          
          {/* Instagram Icon */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram size={24} /> {/* Increased Icon Size */}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
