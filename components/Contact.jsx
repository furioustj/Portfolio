'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef(null);
  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    toast.loading('Sending your message...', { id: 'sendToast' });

    try {
      const result = await emailjs.sendForm(
        'service_dqnjjyk', 
        'template_auk1c4w',
        form.current,
        'RLlyarkntBn2iWSOK'
      );

      toast.success('Message sent successfully! 🚀', { id: 'sendToast' });

      // Reset the form
      setFormData({ user_name: '', user_email: '', message: '' });

      // Focus the first field again after submission
      nameInputRef.current?.focus();
    } catch (error) {
      toast.error('Failed to send message 😢', { id: 'sendToast' });
    } finally {
      setLoading(false);
    }
  };

  // Optional: Autofocus on contact form input when user scrolls to contact section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nameInputRef.current?.focus();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="pt-32 pb-20 min-h-screen bg-[#0a0a0a] text-white"
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1e1e1e',
            color: '#fff',
            border: '1px solid #821cf9',
          },
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-[#821cf9]"
        >
          Stay In Touch
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] p-8 rounded-2xl shadow-md border border-[#821cf9] flex flex-col gap-6"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user_name" className="text-sm text-gray-400">
              Name
            </label>
            <input
              ref={nameInputRef}
              type="text"
              name="user_name"
              id="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#1e1e1e] border border-[#333] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#821cf9] text-white"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user_email" className="text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-[#1e1e1e] border border-[#333] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#821cf9] text-white"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="bg-[#1e1e1e] border border-[#333] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#821cf9] text-white resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-[#821cf9] hover:bg-white hover:text-[#821cf9]'
            } text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
