'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-black relative overflow-hidden"
    >
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 gradient-bg -z-10"></div>

      {/* Main Heading with Glow + Letter Spacing Animation */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          letterSpacing: ['0em', '0.05em', '0em'],        // Glowing expansion effect
          textShadow: [
            '0 0 0px #821cf9',
            '0 0 5px #821cf9',
            '0 0 0px #821cf9'
          ],
        }}
        transition={{
          duration: 2.5, // slower, smoother
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="text-5xl md:text-7xl font-bold text-white leading-tight"
        style={{ fontFamily: 'Zilla Slab' }}
      >
        Hi, I'm <span className="text-[#821cf9]">Tejash Moran</span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
      >
        <TypeAnimation
          sequence={[
            'React, Next.js, and UI/UX are my playground.',
            1500,
            'Bringing designs to life with code.',
            1500,
            'Coding scalable and responsive web apps.',
            1500,
          ]}
          wrapper="span"
          speed={70}
          repeat={Infinity}
        />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 flex space-x-6"
      >
        <a
          href="#projects"
          className="px-6 py-4 bg-[#821cf9] text-white rounded-lg hover:text-[#821cf9] transition-colors duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-[#821cf9] text-[#821cf9] rounded-lg hover:bg-[#821cf9] hover:text-white transition-colors duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
