"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "../Components/page/Header";
import Footer from "../Components/page/Footer";
import JobApplication from "../Components/page/JobApplication";
import { Briefcase, MapPin, Clock, Users, Zap, Heart, DollarSign, ArrowRight, Send, Star, Award, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Careers() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [isGeneralApplication, setIsGeneralApplication] = useState(false);

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsGeneralApplication(false);
    setIsApplicationOpen(true);
  };

  const handleGeneralApplication = () => {
    setSelectedJob('');
    setIsGeneralApplication(true);
    setIsApplicationOpen(true);
  };

  const jobOpenings = [
    {
      title: "Senior IoT Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $160k",
      experience: "5+ years",
      description: "Lead the development of cutting-edge IoT sensor networks and smart waste management systems. Work with embedded systems, cloud platforms, and real-time data processing.",
      requirements: ["IoT protocols (MQTT, LoRaWAN)", "Embedded systems (C/C++)", "Cloud platforms (AWS/Azure)", "Python programming", "Hardware integration"],
      responsibilities: ["Design IoT sensor architectures", "Develop firmware for smart devices", "Integrate with cloud platforms", "Optimize power consumption", "Lead technical reviews"]
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $170k",
      experience: "3+ years",
      description: "Build predictive models and analytics solutions to optimize waste collection routes and operations. Transform data into actionable insights for smart city solutions.",
      requirements: ["Machine Learning (TensorFlow/PyTorch)", "Python/R programming", "SQL and NoSQL databases", "Statistical modeling", "Data visualization"],
      responsibilities: ["Develop predictive models", "Analyze sensor data patterns", "Create optimization algorithms", "Build dashboards", "Collaborate with engineering teams"]
    },
    {
      title: "Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $140k",
      experience: "3+ years",
      description: "Develop and maintain our web applications, dashboards, and customer-facing platforms. Build scalable solutions for smart city management.",
      requirements: ["React/Next.js", "Node.js/Express", "TypeScript", "Database design (PostgreSQL/MongoDB)", "RESTful APIs"],
      responsibilities: ["Build responsive web applications", "Develop REST APIs", "Implement real-time features", "Optimize performance", "Write comprehensive tests"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Boston, MA / Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      experience: "4+ years",
      description: "Drive product strategy and roadmap for our smart city solutions and IoT platform. Work closely with engineering, design, and sales teams.",
      requirements: ["Product strategy", "Agile/Scrum methodologies", "IoT/SaaS experience", "Stakeholder management", "Market analysis"],
      responsibilities: ["Define product roadmap", "Gather customer requirements", "Coordinate cross-functional teams", "Analyze market trends", "Drive product launches"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$115k - $155k",
      experience: "4+ years",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems. Ensure scalability and reliability of our IoT platform.",
      requirements: ["AWS/Azure cloud platforms", "Kubernetes/Docker", "Infrastructure as Code (Terraform)", "CI/CD pipelines", "Monitoring tools"],
      responsibilities: ["Manage cloud infrastructure", "Implement CI/CD pipelines", "Monitor system performance", "Ensure security compliance", "Automate deployment processes"]
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $130k + Commission",
      experience: "2+ years",
      description: "Support sales team with technical expertise and customer demonstrations of our IoT solutions. Bridge the gap between technical capabilities and customer needs.",
      requirements: ["Technical sales experience", "IoT/SaaS knowledge", "Customer presentation skills", "Solution design", "CRM systems"],
      responsibilities: ["Conduct technical demos", "Support sales proposals", "Provide technical consultation", "Train customers", "Gather product feedback"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs and mental health support",
      color: "from-red-500 to-pink-500",
      details: ["100% premium coverage", "$2000 wellness budget", "Mental health support", "Gym membership"]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries, equity packages, and performance bonuses with annual reviews",
      color: "from-green-500 to-emerald-500",
      details: ["Equity participation", "Annual bonuses", "Salary reviews", "Stock options"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote work options with flexible scheduling",
      color: "from-blue-500 to-cyan-500",
      details: ["Unlimited PTO", "Flexible hours", "Remote work", "4-day work week option"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Professional Growth",
      description: "$3000 learning budget, conference attendance, mentorship programs, and career development",
      color: "from-purple-500 to-violet-500",
      details: ["$3000 learning budget", "Conference attendance", "Mentorship program", "Career coaching"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Culture",
      description: "Collaborative environment, team events, inclusive workplace, and innovation time",
      color: "from-orange-500 to-amber-500",
      details: ["Team building events", "Innovation Fridays", "Inclusive culture", "Open communication"]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Impact & Recognition",
      description: "Work on meaningful projects with recognition programs and career advancement opportunities",
      color: "from-indigo-500 to-blue-500",
      details: ["Recognition programs", "Career advancement", "Meaningful impact", "Innovation awards"]
    }
  ];

  const companyStats = [
    { number: "0+", label: "Team Members", description: "Talented professionals" },
    { number: "0+", label: "Cities Served", description: "Across 15 countries" },
    { number: "95%", label: "Employee Satisfaction", description: "Based on internal surveys" },
    { number: "5L+", label: "Funding Raised", description: "Series B completed" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Data Scientist",
      quote: "Working at NodesIO has been incredible. The team is supportive, the technology is cutting-edge, and I feel like I'm making a real impact on sustainability.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "IoT Engineer",
      quote: "The innovation culture here is amazing. We're constantly pushing boundaries and solving real-world problems that matter for our planet's future.",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      quote: "NodesIO offers the perfect blend of startup energy and enterprise stability. The growth opportunities are endless, and the team genuinely cares about each other.",
      avatar: "EW"
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
              className="max-w-5xl mx-auto text-center"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full mb-6">
                Join Our Mission
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Build the Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500"> Smart Cities</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Join our team of innovators driving change through smart IoT technology. At NodesIO, we’re passionate about creating solutions that make industries and communities smarter, more efficient, and sustainable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase className="w-5 h-5" />
                  <span>View Open Positions</span>
                </motion.button>
                <motion.button
                  onClick={handleGeneralApplication}
                  className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Resume</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-lg mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Work With Us</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
                <p className="text-gray-600">Work on projects that make real environmental impact and shape the future of smart cities.</p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
                <p className="text-gray-600">Join a collaborative and innovative culture with opportunities for growth and learning.</p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
                <p className="text-gray-600">Competitive compensation, flexible work arrangements, and comprehensive benefits package.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="w-full py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-lg mb-4 block">Open Positions</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Current Openings</h2>
            </div>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {jobOpenings.map((job, index) => (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">{job.department}</span>
                        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">{job.location}</span>
                        <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">{job.type}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleApply(job.title)}
                      className="inline-flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors group-hover:bg-blue-600 group-hover:text-white"
                    >
                      Apply Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don&apos;t See the Right Role?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                We&apos;re always looking for talented individuals to join our team. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  onClick={handleGeneralApplication}
                  className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Your Resume</span>
                </motion.button>
                <Link 
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Application Modal */}
        <JobApplication
          isOpen={isApplicationOpen}
          onClose={() => setIsApplicationOpen(false)}
          jobTitle={selectedJob}
          isGeneralApplication={isGeneralApplication}
        />
      </main>
      <Footer />
    </div>
  );
}