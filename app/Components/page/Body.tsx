"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaRoute, FaChartBar, FaMobileAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Body = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Feature cards data
  const features = [
    {
      icon: <FaLeaf className="h-8 w-8 text-green-500" />,
      title: "IoT Integration",
      description: "Smart connectivity for real-time data and efficient operations."
    },
    {
      icon: <FaRoute className="h-8 w-8 text-blue-500" />,
      title: "Route Optimization",
      description: "AI creates faster, smarter, and more cost-efficient routes."
    },
    {
      icon: <FaChartBar className="h-8 w-8 text-purple-500" />,
      title: "Analytics Dashboard",
      description: "Visualize data and uncover insights that drive better decisions."
    },
    {
      icon: <FaMobileAlt className="h-8 w-8 text-cyan-500" />,
      title: "Mobile App Access",
      description: "Monitor and manage everything, anytime, anywhere."
    }
  ];

  // Stats data
  const stats = [
    { value: "0", label: "Smart Bins Deployed" },
    { value: "0", label: "Cities Covered" },
    { value: "75%", label: "Collection Efficiency" }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "City Waste Manager",
      company: "Metro City Council",
      image: "/images/testimonial1.jpg",
      quote: "The smart waste management system has revolutionized our city's waste collection process. We've reduced operational costs by 30% in just six months."
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "GreenTech Solutions",
      image: "/images/testimonial2.jpg",
      quote: "The analytics dashboard provides invaluable insights that help us make data-driven decisions. The route optimization feature alone has saved us thousands in fuel costs."
    },
    {
      name: "Priya Sharma",
      role: "Sustainability Officer",
      company: "EcoSmart Corporation",
      image: "/images/testimonial3.jpg",
      quote: "Implementing this IoT waste management solution has been key to achieving our sustainability goals. The real-time monitoring capabilities are exceptional."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50/30 to-green-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Connecting </span><br />
                <span className="text-gray-900"> Technology with</span><br />
                <span className="text-green-600">Tomorrow for a</span><br />
                <span className="text-blue-600"> Better Future</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Innovative IoT devices that drive efficiency, sustainability, and growth across industries.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact" className="inline-block">
                  <motion.button
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-xl w-full"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link href="/about" className="inline-block">
                  <motion.button
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg w-full"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/landingpageIMG.png"
                  alt="Team Collaboration"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-blue-50/30"></div>
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all group border border-gray-100"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">{stat.value}</h3>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-green-50/30"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Features for Smart Tomorrow</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience the next evolution of connectivity. Our end-to-end IoT solutions integrate intelligent hardware with adaptive software to help industries automate, innovate, and scale with confidence.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all group border border-gray-100 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-200/20 rounded-full blur-xl group-hover:bg-green-300/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-gray-50 rounded-full inline-block group-hover:scale-110 group-hover:bg-green-50 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50/20"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our intelligent system follows a simple yet powerful process to enhance efficiency and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 group-hover:scale-110 transition-all shadow-lg group-hover:shadow-xl">
                <span className="text-blue-600 text-2xl font-bold group-hover:scale-110 transition-transform">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">Smart Sensing</h3>
              <p className="text-gray-700">Connected sensors capture real-time data from the environment and operations.</p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 group-hover:scale-110 transition-all shadow-lg group-hover:shadow-xl">
                <span className="text-green-600 text-2xl font-bold group-hover:scale-110 transition-transform">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">Data Intelligence</h3>
              <p className="text-gray-700">AI analyzes the collected data to identify patterns and optimize performance.</p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-purple-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 group-hover:scale-110 transition-all shadow-lg group-hover:shadow-xl">
                <span className="text-purple-600 text-2xl font-bold group-hover:scale-110 transition-transform">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">Smart Action</h3>
              <p className="text-gray-700">Automated responses enable faster, smarter, and more efficient operations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from organizations that have transformed their waste management operations with our smart solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all group border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>
                <div className="mb-6 relative z-10">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                  <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Decorative top element */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white/90">Limited Time Offer</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Operations?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl mb-12 text-center text-white/95 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of forward-thinking organizations already experiencing smarter, more efficient operations with our intelligent IoT solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl shadow-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-16 pt-12 border-t border-white/20 flex flex-col sm:flex-row justify-around items-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80 text-sm">Active Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-white/80 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80 text-sm">Expert Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;