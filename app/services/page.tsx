"use client";

import Header from "../Components/page/Header";
import Footer from "../Components/page/Footer";
import { FaLeaf, FaRoute, FaChartBar, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLeaf className="text-4xl text-green-500 mb-4" />,
      title: "IoT Sensors",
      description: "Smart sensors that monitor fill levels, temperature, and more in real-time."
    },
    {
      icon: <FaRoute className="text-4xl text-blue-500 mb-4" />,
      title: "Route Optimization",
      description: "AI-powered route planning to reduce fuel consumption and increase efficiency."
    },
    {
      icon: <FaChartBar className="text-4xl text-purple-500 mb-4" />,
      title: "Analytics Dashboard",
      description: "Comprehensive data visualization and reporting for informed decision making."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-orange-500 mb-4" />,
      title: "Mobile Applications",
      description: "User-friendly apps for waste management teams and municipal authorities."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
            <p className="mb-6">
              Our smart waste management solutions integrate seamlessly with existing infrastructure.
              We provide end-to-end services from installation to maintenance and data analysis.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Benefits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduce collection costs by up to 30%</li>
              <li>Decrease carbon emissions through optimized routes</li>
              <li>Improve citizen satisfaction with cleaner public spaces</li>
              <li>Make data-driven decisions with real-time analytics</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}