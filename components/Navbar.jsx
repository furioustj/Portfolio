'use client';

import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#821cf9]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#821cf9] tracking-wide">
          Tejash Moran
        </h1>

        <ul className="flex space-x-8 text-white">
          {navItems.map(({ label, href }, index) => (
            <li key={index}>
              <Link
                activeClass="text-[#821cf9]"
                to={href}
                spy={true}
                smooth={true}
                offset={-80} // Enough offset for fixed navbar
                duration={500}
                className="cursor-pointer hover:text-[#821cf9] transition-colors duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
