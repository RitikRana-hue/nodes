"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaChartLine, FaRoute, FaTrash, FaBell } from "react-icons/fa";

export default function Body() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Track fill levels and waste metrics in real-time with IoT sensors.",
      icon: <FaChartLine className="w-6 h-6 text-green-600" />
    },
    {
      title: "Route Optimization",
      description: "AI-powered route planning for efficient waste collection.",
      icon: <FaRoute className="w-6 h-6 text-green-600" />
    },
    {
      title: "Waste Analytics",
      description: "Detailed insights and reporting on waste management patterns.",
      icon: <FaTrash className="w-6 h-6 text-green-600" />
    },
    {
      title: "Smart Alerts",
      description: "Automated notifications for critical waste management events.",
      icon: <FaBell className="w-6 h-6 text-green-600" />
    }
  ];

  const stats = [
    { value: "85%", label: "Cost Reduction" },
    { value: "24/7", label: "Monitoring" },
    { value: "50+", label: "Cities Served" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "City Waste Manager",
      company: "Metro City Council",
      image: "/images/testimonial1.jpg",
      quote: "The smart waste management system has revolutionized our city&apos;s waste collection process. We&apos;ve reduced operational costs by 30% in just six months."
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
      <section className="relative bg-green-50 py-20">
        <div className="absolute inset-0 bg-[url(&apos;/images/grid.svg&apos;)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our Dream is Global Waste Management Transformation
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                NodesIO was founded by a passionate team of engineers and sustainability advocates. United by their belief in the power of technology to create cleaner, more efficient cities, they embarked on a journey to build innovative IoT solutions for waste management. With relentless dedication, they gathered a team of experts and launched this platform, creating a global community of forward-thinking partners and clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-blue-600">1+</span>
                  <span className="text-gray-600">Years Experience</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-blue-600">0+</span>
                  <span className="text-gray-600">Projects</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-blue-600">0+</span>
                  <span className="text-gray-600">Partners</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-blue-600">0M+</span>
                  <span className="text-gray-600">Bins Monitored</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/landingpageIMG.png"
                  alt="Team Collaboration"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
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
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                variants={itemVariants}
              >
                <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.value}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Features for Smart Cities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive waste management solution combines cutting-edge IoT technology with powerful software to transform how cities handle waste.
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
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 p-3 bg-gray-50 rounded-full inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our smart waste management system uses a simple but effective process to optimize waste collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Sensors</h3>
              <p className="text-gray-700">IoT sensors monitor fill levels and environmental conditions in real-time.</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
              <p className="text-gray-700">Our AI algorithms process data to optimize collection routes and schedules.</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Collection</h3>
              <p className="text-gray-700">Collection teams receive optimized routes and real-time updates.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
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
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Waste Management?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of organizations already benefiting from our smart waste management solution.
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.button>
        </div>
      </section>
    </div>
  );
}