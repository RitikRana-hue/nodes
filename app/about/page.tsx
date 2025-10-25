"use client";

import Header from "app/components/layout/Header";
import Footer from "app/components/layout/Footer";
import SoraChatbot from "app/components/SoraChatbot";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRocket, FaGlobe, FaUsers, FaLightbulb, FaHeart, FaShieldAlt, FaRecycle, FaChartLine, FaLeaf } from 'react-icons/fa';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                We&apos;re Building the
                <span className="text-blue-600"> Future of Cities</span>
              </h1>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
                NodesIO transforms industries through smart IoT technology, making operations smarter and the future more sustainable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">0+</div>
                  <div className="text-gray-600">Cities Served</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">0M+</div>
                  <div className="text-gray-600">Tons Optimized</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
                  <div className="text-gray-600">Cost Reduction</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-green-50/30"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 font-semibold text-sm rounded-full mb-8 border border-blue-200">
                  Our Journey
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
                  Transforming Cities Through
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500"> Innovation</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  From witnessing urban waste chaos to pioneering smart IoT solutions, our journey represents a commitment to creating cleaner, more efficient cities through cutting-edge technology and sustainable practices.
                </p>
              </motion.div>

              {/* Simple Timeline */}
              <div className="mb-20">
                <div className="grid md:grid-cols-3 gap-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-xl font-bold">2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Foundation</h3>
                    <p className="text-gray-600">Started NodesIO in November 2024 with a vision to revolutionize industries through smart IoT solutions. Our founding team of 3 engineers in Faridabad began building the first prototypes.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-xl font-bold">2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Market Entry</h3>
                    <p className="text-gray-600">Secured our first funding round in May 2026, enabling us to accelerate product development, expand our team, and prepare for large-scale deployments.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-xl font-bold">2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Scale & Impact</h3>
                    <p className="text-gray-600">Expanding operations across multiple industries and cities with advanced AI-driven analytics, predictive maintenance, and sustainability-focused IoT solutions for global impact.</p>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Main Story Content */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-green-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                    <Image
                      src="/images/aboutIMG.png"
                      alt="NodesIO Innovation Journey"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>

                  {/* Enhanced Floating Stats */}
                  <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 z-20 group-hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <FaLeaf className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">0M+ Tons</div>
                        <div className="text-sm text-gray-500">Waste Optimized</div>
                      </div>
                    </div>
                  </div>

                  {/* Additional floating element */}
                  <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-xl z-20 group-hover:rotate-3 transition-transform">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-10"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      To transform urban waste management through intelligent IoT solutions that create cleaner, more sustainable cities while reducing operational costs and environmental impact.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaRocket className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Smart Technology Integration</h4>
                        <p className="text-gray-600 leading-relaxed">Advanced IoT sensors combined with AI-powered analytics provide real-time insights, predictive maintenance, and optimized collection routes that reduce costs by up to 30%.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaRecycle className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainability Focus</h4>
                        <p className="text-gray-600 leading-relaxed">Every solution prioritizes environmental responsibility, helping cities achieve their sustainability goals while creating measurable positive impact on carbon footprint reduction.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaUsers className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Community Partnership</h4>
                        <p className="text-gray-600 leading-relaxed">We partner with organizations, industries, and communities to co-create tailored IoT solutions that solve local challenges and deliver real impact.</p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What We Stand For
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple principles that guide everything we build.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLightbulb className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries with smart technology that actually works.</p>
              </motion.div>

              <motion.div
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">Every solution is built to create smarter, more sustainable communities.</p>
              </motion.div>

              <motion.div
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
                <p className="text-gray-600">Working together to solve real problems for real cities.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full mb-6">
                Meet the Team
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Our Dedicated Team of Innovators
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the passionate individuals behind NodesIO who are working tirelessly to revolutionize waste management.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="relative mb-6">
                  <div className="w-52 h-52 mx-auto rounded-full border-4 border-blue-500 p-2 shadow-lg">
                    <Image
                      src="/images/AbhishekIMG.jpeg"
                      alt="Abhishek Mishra"
                      width={200}
                      height={200}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Abhishek Mishra
                </h3>
                <p className="text-blue-600 text-lg font-semibold mb-4">
                  Founder & Researcher
                </p>
                <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                  Passionate about creating innovative solutions that make a real difference, Abhishek leads our R&D efforts, bringing deep expertise in IoT systems and emerging technologies.
                </p>
              </motion.div>

              <motion.div className="text-center" variants={fadeInUp}>
                <div className="relative mb-6">
                  <div className="w-52 h-52 mx-auto rounded-full border-4 border-green-500 p-2 shadow-lg">
                    <Image
                      src="/images/RitikIMG.png"
                      alt="Ritik Rana"
                      width={200}
                      height={200}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ritik Rana
                </h3>
                <p className="text-blue-600 text-lg font-semibold mb-4">
                  Co-Founder & Full Stack Developer
                </p>
                <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                  Dedicated to building scalable and efficient solutions, Ritik leverages his full-stack development and design expertise to drive our platform forward.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-teal-50/30"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="space-y-8" variants={fadeInUp}>
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-300/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white font-semibold text-sm rounded-full mb-4 group-hover:scale-110 transition-transform relative z-10">
                    Our Vision
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Empowering the World Through IoT
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our vision is to empower cities and organizations worldwide to achieve sustainability and operational excellence through smart, data-driven IoT solutions that create more efficient, connected, and impactful environments.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-300/20 rounded-full blur-xl group-hover:bg-green-300/30 transition-colors"></div>
                  <span className="inline-block px-3 py-1 bg-green-600 text-white font-semibold text-sm rounded-full mb-4 group-hover:scale-110 transition-transform relative z-10">
                    Our Mission
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                    Innovation for All, Everywhere
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our mission is to make advanced IoT solutions accessible to all communities by fostering innovation, collaboration, and a passion for a smarter, more sustainable future. We’re committed to democratizing connected technology for everyone.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="relative" variants={fadeInUp}>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <motion.div
                  className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">Our Impact Goals</h4>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-blue-600 font-bold text-lg">0+</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Cities Worldwide</p>
                        <p className="text-sm text-gray-600">Target by 2025</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-green-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-green-600 font-bold text-lg">0M+</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Smart Devices</p>
                        <p className="text-sm text-gray-600">Deployment goal</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-purple-600 font-bold text-lg">75%</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Efficiency Increase</p>
                        <p className="text-sm text-gray-600">Average improvement</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Our Journey So Far
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                From a simple idea to a comprehensive platform, here&apos;s how we&apos;ve grown.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center" variants={fadeInUp}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2024</div>
                  <div className="text-white/90 font-semibold mb-4">Foundation</div>
                  <div className="text-white/80 text-sm">NodesIO was founded with a vision to transform industries through smart IoT technology.</div>
                </motion.div>
              </motion.div>

              <motion.div className="text-center" variants={fadeInUp}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2025</div>
                  <div className="text-white/90 font-semibold mb-4">Development</div>
                  <div className="text-white/80 text-sm">Built our core platform and began testing innovative solutions across pilot programs.</div>
                </motion.div>
              </motion.div>

              <motion.div className="text-center" variants={fadeInUp}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2025</div>
                  <div className="text-white/90 font-semibold mb-4">Expansion</div>
                  <div className="text-white/80 text-sm">Scaling operations globally with strategic partnerships and advanced AI-driven capabilities.</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50"></div>
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
              <div className="relative z-10">
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Ready to Transform Your Waste Management?
                </motion.h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join hundreds of organizations already benefiting from our smart waste management solution.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="https://calendly.com/nodesio/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule a Demo
                  </motion.a>
                  <motion.button
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Sales
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Sora AI Chatbot */}
      <SoraChatbot environment="landing" />
    </div>
  );
}
