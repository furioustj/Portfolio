'use client'
import React from 'react';
import {motion} from 'framer-motion';

const About = () => {
    return (
        <section id="about" className='py-20 px-4 bg-black text-white'>
            <div className="max-w-5xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-8 text-[#821cf9]">
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                    Hi, I'm Tejash Moran, a Full Stack Developer with a passion for building web applications and UI/UX designs. I have experience working with modern web technologies like React, Node.js, Express, and SQL databases. I'm always eager to learn new technologies and improve my skills.
                </motion.p>

                {/* Optional: Fun Facts, Counters, or Image*/}

            </div>
        </section>
    );
}

export default About;