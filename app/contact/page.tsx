"use client";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import SoraChatbot from "@/app/components/SoraChatbot";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Users, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Get in Touch with
                <span className="text-blue-600"> NodesIO</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to transform your waste management operations? Connect with our team of IoT experts to discuss how we can optimize your systems for maximum efficiency and sustainability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Contact Information
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Connect with our team through multiple channels. We&apos;re committed to providing prompt, professional responses to all inquiries about our IoT solutions.
                  </p>
                </motion.div>

                {/* Single Contact Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-lg p-8 border border-gray-200"
                >
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <h3 className="text-base font-medium text-gray-900 mb-1">Phone Support</h3>
                        <p className="text-gray-600 text-sm mb-2">Direct line for immediate assistance</p>
                        <a href="tel:+919876543210" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-3">
                      <Mail className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <h3 className="text-base font-medium text-gray-900 mb-1">Email Support</h3>
                        <p className="text-gray-600 text-sm mb-2">Send detailed inquiries and documentation</p>
                        <a href="mailto:career.ektros@gmail.com" className="text-gray-700 hover:text-gray-900 font-medium text-sm">

                          career.ektros@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <h3 className="text-base font-medium text-gray-900 mb-1">Corporate Office</h3>
                        <p className="text-gray-600 text-sm mb-2">Visit our development center</p>
                        <p className="text-gray-700 font-medium text-sm">
                          Sector 15, Faridabad<br />
                          Haryana, India 121007
                        </p>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <h3 className="text-base font-medium text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600 text-sm mb-2">Professional support when you need it</p>
                        <div className="text-gray-700 font-medium text-sm">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                          <p>Saturday & Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-green-100 rounded-full blur-2xl opacity-30"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-600">
                      Complete the form below and our team will respond within 24 hours with tailored solutions for your requirements.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                        placeholder="john.doe@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select a topic...</option>
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none"
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Contact Options */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Additional Support Channels
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access professional support through multiple communication channels designed for your convenience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Live Support</h3>
                <p className="text-gray-600 mb-6">
                  Connect instantly with our technical experts for real-time assistance and consultation during business hours.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Start Consultation</span>
                  <Send className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a comprehensive consultation with our IoT specialists to discuss customized solutions for your organization.
                </p>
                <button className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Schedule Meeting</span>
                  <Send className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Technical Resources</h3>
                <p className="text-gray-600 mb-6">
                  Access our comprehensive technical documentation, case studies, and implementation guides.
                </p>
                <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>View Resources</span>
                  <Send className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Sora AI Chatbot */}
      <SoraChatbot environment="landing" />
    </div>
  );
}