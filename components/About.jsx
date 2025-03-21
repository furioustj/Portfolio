'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 text-[#821cf9]"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8"
        >
          I’m <span className="text-white font-semibold">Tejash Moran</span>, a passionate{' '}
          <span className="text-white font-semibold">Full-Stack Web Developer</span> and{' '}
          <span className="text-white font-semibold">UI/UX Designer</span> dedicated to crafting
          modern, scalable, and user-centric web applications. My approach blends technical expertise
          with a keen eye for design, ensuring both functionality and seamless user experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-white font-semibold">Frontend Expertise</span>: I specialize in{' '}
          <span className="text-white">React.js</span>, <span className="text-white">Next.js 15</span>,
          and <span className="text-white">TypeScript</span> for building interactive and performant
          web interfaces. I am proficient in <span className="text-white">HTML5</span>,{' '}
          <span className="text-white">CSS3</span>, <span className="text-white">JavaScript</span>, and{' '}
          <span className="text-white">Tailwind CSS</span>, with a strong focus on responsive design,
          animations using <span className="text-white">Framer Motion</span>, and smooth scrolling
          with <span className="text-white">react-scroll</span>. My designs integrate vibrant color
          schemes like <span className="text-white">intuitive designs</span> and typography with{' '}
          <span className="text-white">unique fonts</span> for a consistent brand presence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-white font-semibold">Backend & API Development</span>: I am
          well-versed in <span className="text-white">Node.js</span> and{' '}
          <span className="text-white">Express.js</span>, developing secure and efficient RESTful APIs.
          I have hands-on experience with <span className="text-white">PostgreSQL</span> and{' '}
          <span className="text-white">MySQL</span>, designing relational database schemas and
          optimizing query performance for scalable applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-white font-semibold">Projects Completed</span>: I recently completed a{' '}
          <span className="text-white font-semibold">Google Drive Clone</span> using{' '}
          <span className="text-white">Next.js 15</span> and{' '}
          <span className="text-white">TypeScript</span>. It features user authentication,
          file upload/download, folder management, and real-time updates. Additionally, I developed
          a <span className="text-white font-semibold">KML File Viewer</span>, an interactive
          application for uploading and visualizing KML files on maps, with data parsing and intuitive
          rendering of markers and paths.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-white font-semibold">UI/UX Design</span>: I am an experienced
          designer with proficiency in <span className="text-white">Figma</span>, specializing in
          wireframing, prototyping, and crafting user-centered design systems. I translate complex
          concepts into elegant and intuitive interfaces, ensuring seamless user experiences across
          different platforms.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
        >
          I am always eager to learn and grow, continuously exploring new technologies to enhance my
          development and design skills. Let's build something amazing together!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
