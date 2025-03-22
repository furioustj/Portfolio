'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  const resumeLink = 'https://drive.google.com/file/d/1bfHE0H_Qgrp9VztmIP5PaK8V_fAAbgLj/view?usp=sharing';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#821cf9]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#821cf9] tracking-wide">
          Tejash Moran
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-white">
            {navItems.map(({ label, href }, index) => (
              <li key={index}>
                <Link
                  activeClass="text-[#821cf9]"
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer hover:text-[#821cf9] transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Download Button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#821cf9] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#821cf9] transition-colors duration-300 text-sm font-medium"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <span className="text-3xl">&times;</span> // Close icon
            ) : (
              <span className="text-3xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-4 pt-4 pb-8 space-y-4">
          <ul className="flex flex-col space-y-4 text-white">
            {navItems.map(({ label, href }, index) => (
              <li key={index}>
                <Link
                  activeClass="text-[#821cf9]"
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu} // Close menu on item click
                  className="block cursor-pointer hover:text-[#821cf9] transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Download Button in Mobile Menu */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-[#821cf9] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#821cf9] transition-colors duration-300 text-sm font-medium"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
