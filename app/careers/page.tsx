"use client";

import { useState } from 'react';
import Header from "../Components/page/Header";
import Footer from "../Components/page/Footer";
import JobApplication from "../Components/page/JobApplication";

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
      title: "IoT Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Boston, MA",
      type: "Full-time"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow min-h-screen bg-[#eaf1fb]">
        {/* Hero Section */}
        <section className="w-full bg-green-500 py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-white/90 font-semibold text-lg mb-4 block">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Build the Future of Smart Cities</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our team of innovators working to revolutionize waste management through technology.
              At NodesIO, we're passionate about creating sustainable solutions for smarter cities.
            </p>
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
        <section className="w-full bg-green-500 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don't See the Right Role?</h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button 
              onClick={handleGeneralApplication}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Send Your Resume
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
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