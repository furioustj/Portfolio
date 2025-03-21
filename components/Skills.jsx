'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Frontend Icons
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFramer, SiRedux } from 'react-icons/si';

// Backend / API Icons
import { SiExpress, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si';

// Version Control & Tools
import { FaGithub } from 'react-icons/fa';

// Additional Tools
import { SiVercel } from 'react-icons/si';

const Skills = () => {
  const skills = [
    // Frontend
    { name: 'React.js', icon: <FaReact size={50} /> },
    { name: 'Next.js 15', icon: <SiNextdotjs size={50} /> },
    { name: 'TypeScript', icon: <SiTypescript size={50} /> },
    { name: 'JavaScript', icon: <FaJs size={50} /> },
    { name: 'HTML5', icon: <FaHtml5 size={50} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={50} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} /> },
    { name: 'Framer Motion', icon: <SiFramer size={50} /> },
    { name: 'Redux Toolkit', icon: <SiRedux size={50} /> },

    // Backend & API
    { name: 'Node.js', icon: <FaNodeJs size={50} /> },
    { name: 'Express.js', icon: <SiExpress size={50} /> },

    // Databases
    { name: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
    { name: 'MySQL', icon: <SiMysql size={50} /> },
    { name: 'MongoDB', icon: <SiMongodb size={50} /> },

    // UI/UX & Design Tools
    { name: 'Figma', icon: <FaFigma size={50} /> },

    // Version Control & Deployment
    { name: 'Git', icon: <FaGitAlt size={50} /> },
    { name: 'GitHub', icon: <FaGithub size={50} /> },
    { name: 'Vercel', icon: <SiVercel size={50} /> },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="flex flex-col items-center bg-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-[#821cf9] mb-4">{skill.icon}</div>
              <p className="text-lg text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
