"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "Abhishek Mishra",
      role: "Full Stack Developer",
      image: "/images/abhishek.jpg"
    },
    {
      name: "Rish Saha",
      role: "Full Stack Developer",
      image: "/images/rish.jpg"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We&apos;re constantly pushing the boundaries of what&apos;s possible in waste management technology."
    },
    {
      title: "Sustainability",
      description: "Our solutions are designed with environmental impact in mind, promoting a cleaner future."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to drive success."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
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
            About NodesIO
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;re on a mission to revolutionize waste management through innovative technology and sustainable solutions.
          </motion.p>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl h-[400px]">
            <Image
              src="/images/aboutIMG.png"
              alt="About NodesIO"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}