"use client";

import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card, { CardBody } from "@/components/ui/Card";
import FloatingElements from "@/components/ui/FloatingElements";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRocket, FaGlobe, FaUsers, FaLightbulb, FaHeart, FaShieldAlt, FaRecycle, FaChartLine, FaLeaf } from 'react-icons/fa';
import { fadeInUp, staggerContainer, fadeIn, scaleIn } from "@/lib/constants";

export default function About() {
  return (
    <PageLayout fullViewport>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/80 z-10"></div>
        <FloatingElements variant="blue" density="medium" />
        <Container className="relative z-20 w-full">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              We&apos;re Building the
              <span className="text-shimmer"> Future of Cities</span>
            </h1>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
              NodesIO transforms industries through smart IoT technology, making operations smarter and the future more sustainable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                className="text-center"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Cities Served</div>
              </motion.div>
              <motion.div
                className="text-center"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">10M+</div>
                <div className="text-gray-600">Tons Optimized</div>
              </motion.div>
              <motion.div
                className="text-center"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-green-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 font-semibold text-sm rounded-full mb-8 border border-blue-200">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Transforming Cities Through
              <span className="gradient-text"> Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              From witnessing urban waste chaos to pioneering smart IoT solutions, our journey represents a commitment to creating cleaner, more efficient cities through cutting-edge technology and sustainable practices.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Foundation</h3>
                <p className="text-gray-600">Started NodesIO in November 2024 with a vision to revolutionize industries through smart IoT solutions. Our founding team of 3 engineers in Faridabad began building the first prototypes.</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Entry</h3>
                <p className="text-gray-600">Secured our first funding round in May 2025, enabling us to accelerate product development, expand our team, and prepare for large-scale deployments.</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
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

          {/* Main Story Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-green-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Card className="relative shadow-2xl group-hover:shadow-3xl transition-shadow">
                <CardBody className="p-2">
                  <Image
                    src="/images/aboutIMG.png"
                    alt="NodesIO Innovation Journey"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />
                </CardBody>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 z-20 group-hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <FaLeaf className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">10M+ Tons</div>
                    <div className="text-sm text-gray-500">Waste Optimized</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-xl z-20 group-hover:rotate-3 transition-transform">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
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
                    <p className="text-gray-600 leading-relaxed">Advanced IoT sensors combined with AI-powered analytics provide real-time insights, predictive maintenance, and optimized collection routes that reduce costs by up to 40%.</p>
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
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-white">
        <Container>
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple principles that guide everything we build.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center p-6" variants={fadeInUp}>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with smart technology that actually works.</p>
            </motion.div>

            <motion.div className="text-center p-6" variants={fadeInUp}>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">Every solution is built to create smarter, more sustainable communities.</p>
            </motion.div>

            <motion.div className="text-center p-6" variants={fadeInUp}>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">Working together to solve real problems for real cities.</p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <Container className="relative z-10">
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
        </Container>
      </Section>

      {/* Mission & Vision Section */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-teal-50/30"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <Container className="relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-8" variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <CardBody className="p-8">
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
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <CardBody className="p-8">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-300/20 rounded-full blur-xl group-hover:bg-green-300/30 transition-colors"></div>
                  <span className="inline-block px-3 py-1 bg-green-600 text-white font-semibold text-sm rounded-full mb-4 group-hover:scale-110 transition-transform relative z-10">
                    Our Mission
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                    Innovation for All, Everywhere
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our mission is to make advanced IoT solutions accessible to all communities by fostering innovation, collaboration, and a passion for a smarter, more sustainable future. We&apos;re committed to democratizing connected technology for everyone.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div className="relative" variants={fadeInUp}>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">Our Impact Goals</h4>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-blue-600 font-bold text-lg">50+</span>
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
                        <span className="text-green-600 font-bold text-lg">10M+</span>
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
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Journey Section */}
      <Section className="gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <Container className="relative z-10">
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
              <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <CardBody className="p-8">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2024</div>
                  <div className="text-white/90 font-semibold mb-4">Foundation</div>
                  <div className="text-white/80 text-sm">NodesIO was founded with a vision to transform industries through smart IoT technology.</div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <CardBody className="p-8">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2025</div>
                  <div className="text-white/90 font-semibold mb-4">Development</div>
                  <div className="text-white/80 text-sm">Built our core platform and began testing innovative solutions across pilot programs.</div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <CardBody className="p-8">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2026</div>
                  <div className="text-white/90 font-semibold mb-4">Expansion</div>
                  <div className="text-white/80 text-sm">Scaling operations globally with strategic partnerships and advanced AI-driven capabilities.</div>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50"></div>
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="gradient-primary rounded-3xl text-center relative overflow-hidden group">
              <CardBody className="p-12">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    Ready to Transform Your Waste Management?
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Join hundreds of organizations already benefiting from our smart waste management solution.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      as="a"
                      href="/contact"
                      variant="secondary"
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
                    >
                      Schedule a Demo
                    </Button>
                    <Button
                      as="a"
                      href="/contact"
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </PageLayout>
  );
}