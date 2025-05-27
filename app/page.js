'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';


const Page = () => {
  return (
    <main className="bg-[#0a0a0a] text-white relative overflow-hidden min-h-screen">

      {/* Scroll To Top Button */}
      <ScrollToTop />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero /> {/* <-- Corrected */}

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
