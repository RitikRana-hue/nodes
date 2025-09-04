"use client";

import Header from "../Components/page/Header";
import Footer from "../Components/page/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow min-h-screen pt-8 pb-8 bg-[#eaf1fb] flex flex-col items-center justify-start">
        {/* Hero Section */}
        <section className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex-1 max-w-2xl">
              <span className="text-blue-600 font-semibold text-lg mb-4 block">
                How It Started
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
                Our Dream is Global Waste Management Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                NodesIO was founded by a passionate team of engineers and
                sustainability advocates. United by their belief in the power of
                technology to create cleaner, more efficient cities, they
                embarked on a journey to build innovative IoT solutions for
                waste management. With relentless dedication, they gathered a
                team of experts and launched this platform, creating a global
                community of forward-thinking partners and clients.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">0+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">0+</div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    0M+
                  </div>
                  <div className="text-sm text-gray-600">Bins Monitored</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image
                src="/images/aboutIMG.png"
                alt="NodesIO Team"
                width={800}
                height={600}
                className="w-full max-w-3xl h-auto object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg mb-4 block">
              Meet the Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Dedicated Team of Innovators
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {/* Team Member Card */}
            <div className="text-center group">
              <div className="mb-6 relative">
                <Image
                  src="/images/AbhishekIMG.jpeg"
                  alt="Abhishek Mishra"
                  width={192}
                  height={192}
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Abhishek Mishra
              </h3>
              <p className="text-blue-600 text-lg font-medium">
                Full Stack Developer
              </p>
            </div>
            <div className="text-center group">
              <div className="mb-6 relative">
                <Image
                  src="/images/RitikIMG.png"
                  alt="Ritik Rana"
                  width={192}
                  height={192}
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ritik Rana
              </h3>
              <p className="text-blue-600 text-lg font-medium">
                Full Stack Developer
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <span className="text-blue-600 font-semibold mb-4 block">
                Our Vision
              </span>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Empowering Cities Through Technology
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our vision is to empower cities and organizations to achieve
                sustainability and operational excellence through smart,
                data-driven waste management solutions.
              </p>
            </div>
            <div>
              <span className="text-blue-600 font-semibold mb-4 block">
                Our Mission
              </span>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Innovation for All, Everywhere
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to make advanced waste management accessible to
                all communities by fostering innovation, collaboration, and a
                passion for a cleaner future.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Demo Section */}
        <section className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-green-500">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join hundreds of organizations already benefiting from our smart
              waste management solution.
            </p>
            <a
              href="https://calendly.com/nodesio/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </a>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Get 2% off your first 20 deployments
              </h4>
              <p className="text-gray-600 text-lg">
                Subscribe to our newsletter for updates, insights, and exclusive
                offers.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-lg"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
