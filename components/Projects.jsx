'use client' 
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'WareCloud - A Cloud Storage App',
            description: 'A full-stack cloud storage application where users can upload and download files. It is built using React, Next.js, Appwrite, and Typescript.',
            image: '/images/warecloud-logo.png',
            link: 'https://ware-cloud.vercel.app/'
        },
        {
            id: 2,
            title: 'KML File Viewer',
            description: 'A simple web application to view KML files on the map. It is built using React, Vite, Leaflet, and Typescript.',
            image: '/images/KML-file-viewer.png',
            link: 'https://kml-viewer-darkmode.vercel.app/'
        },
    ];

    return (
        <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#821cf9]">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3">
                    {projectData.map((project, index) => (
                        <Tilt 
                            key={project.id}
                            glareEnable={true}
                            glareMaxOpacity={0.2}
                            glareColor="#ffffff"
                            glareBorderRadius='20px'
                            scale={1.02}
                            transitionSpeed={400}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                                className="bg-[#121212] rounded-2xl shadow-lg overflow-hidden border border-[#821cf9] hover:shadow-[#821cf9]/50 transition-all"
                            >
                                <div className="relative w-full h-60 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain scale-90 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-5 flex flex-col justify-between h-55">
                                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#821cf9] text-white rounded mt-auto hover:bg-white hover:text-[#821cf9] transition-colors mb-10"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
