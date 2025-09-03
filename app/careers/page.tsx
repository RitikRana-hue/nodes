"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaRocket, FaHeart } from "react-icons/fa";

export default function Careers() {
  const benefits = [
    {
      icon: <FaBriefcase className="h-6 w-6 text-blue-500" />,
      title: "Competitive Salary",
      description: "We offer industry-leading compensation packages to attract and retain top talent."
    },
    {
      icon: <FaUsers className="h-6 w-6 text-green-500" />,
      title: "Remote Work",
      description: "Flexible work arrangements that prioritize work-life balance."
    },
    {
      icon: <FaRocket className="h-6 w-6 text-purple-500" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths."
    },
    {
      icon: <FaHeart className="h-6 w-6 text-red-500" />,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage for you and your family."
    }
  ];

  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We&apos;re looking for an experienced Full Stack Developer to join our engineering team. You&apos;ll be working on our core platform, building new features and improving existing ones."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Join us as a Product Manager to help shape the future of waste management technology. You&apos;ll work closely with our engineering and design teams to deliver innovative solutions."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "We&apos;re seeking a talented UX/UI Designer to create beautiful and intuitive interfaces for our web and mobile applications."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Looking for a DevOps Engineer to help us scale our infrastructure and improve our deployment processes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our Mission to Transform Waste Management
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;re building the future of smart waste management, and we&apos;re looking for passionate individuals to join our team.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <p className="text-gray-600">{position.department} · {position.location} · {position.type}</p>
                </div>
                <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-700">{position.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}