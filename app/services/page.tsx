"use client";

import Header from "../Components/page/Header";
import Footer from "../Components/page/Footer";
import { motion } from "framer-motion";
import { FaLeaf, FaRoute, FaChartBar, FaMobileAlt, FaCog, FaShieldAlt, FaUsers, FaRocket, FaCheckCircle, FaArrowRight, FaLightbulb, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function Services() {
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
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      icon: <FaLeaf className="text-4xl text-green-500 mb-4" />,
      title: "Smart IoT Sensors",
      description: "Advanced sensors monitoring fill levels, temperature, humidity, and gas emissions in real-time with 99.9% accuracy.",
      features: ["Real-time monitoring", "Weather-resistant design", "Long battery life", "Wireless connectivity"]
    },
    {
      icon: <FaRoute className="text-4xl text-blue-500 mb-4" />,
      title: "AI Route Optimization",
      description: "Machine learning algorithms that create optimal collection routes, reducing fuel consumption by up to 40%.",
      features: ["Dynamic route planning", "Traffic integration", "Fuel optimization", "Real-time adjustments"]
    },
    {
      icon: <FaChartBar className="text-4xl text-purple-500 mb-4" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboard with predictive analytics, custom reports, and actionable insights for strategic planning.",
      features: ["Predictive analytics", "Custom dashboards", "Automated reports", "KPI tracking"]
    },
    {
      icon: <FaMobileAlt className="text-4xl text-orange-500 mb-4" />,
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications for field teams, supervisors, and citizens with offline capabilities.",
      features: ["Cross-platform apps", "Offline functionality", "Push notifications", "GPS tracking"]
    },
    {
      icon: <FaCog className="text-4xl text-indigo-500 mb-4" />,
      title: "System Integration",
      description: "Seamless integration with existing municipal systems, ERP platforms, and third-party applications.",
      features: ["API integration", "Legacy system support", "Data migration", "Custom connectors"]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500 mb-4" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption, compliance monitoring, and audit trails.",
      features: ["End-to-end encryption", "GDPR compliance", "Audit trails", "Access controls"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "We analyze your current processes and design customized IoT solutions to optimize efficiency and performance.",
      icon: <FaLightbulb className="text-2xl text-yellow-500" />
    },
    {
      step: "02",
      title: "Installation & Setup",
      description: "Our certified technicians install sensors and configure the entire system infrastructure.",
      icon: <FaCog className="text-2xl text-blue-500" />
    },
    {
      step: "03",
      title: "Training & Onboarding",
      description: "Comprehensive training for your team on system operation, maintenance, and best practices.",
      icon: <FaUsers className="text-2xl text-green-500" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "24/7 system monitoring with proactive maintenance and dedicated customer support.",
      icon: <FaShieldAlt className="text-2xl text-purple-500" />
    }
  ];

  const benefits = [
    { icon: <FaCheckCircle className="text-green-500" />, text: "Reduce collection costs by up to 40%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Decrease carbon emissions by 35% through optimized routes" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Improve operational efficiency by 50%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Enhance citizen satisfaction with cleaner public spaces" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Make data-driven decisions with real-time analytics" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Reduce overflow incidents by 90%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Increase collection team productivity by 60%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Achieve ROI within 12-18 months" }
  ];

  const industries = [
    {
      title: "Governments",
      description: "Comprehensive IoT solutions for organizations and communities of all sizes.",
      icon: <FaGlobe className="text-3xl text-blue-600" />
    },
    {
      title: "Commercial Properties",
      description: "Efficient IoT management for shopping centers, office complexes, and business districts.",
      icon: <FaRocket className="text-3xl text-green-600" />
    },
    {
      title: "Educational Institutions",
      description: "Sustainable IoT solutions for universities, schools, and campus environments.",
      icon: <FaUsers className="text-3xl text-purple-600" />
    }
  ];

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
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Comprehensive</span><br />
                <span className="text-blue-600">Waste Management</span><br />
                <span className="text-green-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Transform your waste management operations with our cutting-edge IoT technology, 
                AI-powered optimization, and comprehensive analytics platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
                <motion.button 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50/20"></div>
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive solutions designed to revolutionize waste management across industries and municipalities.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border border-gray-100 relative overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How We Work Process */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-green-50/30"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Our Implementation Process
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                A proven methodology that ensures successful deployment and maximum ROI for your waste management transformation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative mb-6">
                    <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold rounded-full h-8 w-8 flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50/20"></div>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Measurable Results & Benefits
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our clients consistently achieve significant improvements in efficiency, cost savings, and environmental impact.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group border border-gray-100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mr-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <p className="text-gray-800 font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Tailored solutions for diverse sectors, each with unique waste management challenges and requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group text-center border border-gray-100 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform">{industry.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{industry.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business with IoT?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Join hundreds of organizations already benefiting from our smart IoT solutions. Get started today with a free consultation and personalized demo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Free Consultation
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all flex items-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}