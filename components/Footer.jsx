'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-[#821cf9] text-white py-8 border-t border-[#821cf9] shadow-inner"
      aria-label="Footer section"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs md:text-sm text-gray-200 mb-4 md:mb-0"
        >
          &copy; {new Date().getFullYear()} Tejash Moran. All Rights Reserved.
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-6 text-xl"
          aria-label="Social media links"
        >
          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            href="https://github.com/furioustj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-all duration-300 hover:text-gray-100 hover:shadow-md p-2 rounded-full"
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            href="https://www.linkedin.com/in/tejash-moran-893078317/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-all duration-300 hover:text-gray-100 hover:shadow-md p-2 rounded-full"
          >
            <FaLinkedin />
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            href="mailto:furioustejash1@gmail.com"
            aria-label="Send an email"
            className="transition-all duration-300 hover:text-gray-100 hover:shadow-md p-2 rounded-full"
          >
            <FaEnvelope />
          </motion.a>

          {/* Instagram */}
          <motion.a
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            href="https://www.instagram.com/hooded_tj/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="transition-all duration-300 hover:text-gray-100 hover:shadow-md p-2 rounded-full"
          >
            <FaInstagram />
          </motion.a>

          {/* Facebook */}
          <motion.a
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            href="https://www.facebook.com/tejash.moran.7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook profile"
            className="transition-all duration-300 hover:text-gray-100 hover:shadow-md p-2 rounded-full"
          >
            <FaFacebook />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
