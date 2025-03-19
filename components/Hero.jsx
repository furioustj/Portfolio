'use client'

import React from 'react';
import {motion } from 'framer-motion';

const Hero = () => {
    return ( 
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-black relative ocerflow-hidden">

            {/*Background Gradient Animation*/}
            <div className="absolute inset-0 gradient-bg -z-10"></div>

            {/* Main Heading */}
            <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: 'Zilla Slab' }}>
                Hi, I'm <span className="text-[#821cf9]">Tejash Moran</span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
                    I'm a Full Stack Developer with a passion for building web applications and UI/UX designs.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-8 flex space-x-6">
                    <a href="#projects" className="px-6 py-4 bg-[#821cf9] text-white rounded-lg hover:text-[#821cf9] transition-colors duration-300">View Projects</a>
                    <a href="#contact" className="px-6 py-3 border border-[#821cf9] text-[#821cf9] rounded-lg hover:bg-[#821cf9] hover:text-white transition-colors duration-300">Contact Me</a>
            </motion.div>
    </section>
    );
};

export default Hero;    









