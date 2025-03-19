'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact size={50} /> },
    { name: 'Node.js', icon: <FaNodeJs size={50} /> },
    { name: 'HTML5', icon: <FaHtml5 size={50} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={50} /> },
    { name: 'JavaScript', icon: <FaJs size={50} /> },
    { name: 'Git', icon: <FaGitAlt size={50} /> }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-[#821cf9]"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="flex flex-col items-center bg-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-[#821cf9] mb-4">{skill.icon}</div>
              <p className="text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
