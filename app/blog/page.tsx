"use client";

import Header from "../Components/page/Header";
import Footer from "../Components/page/Footer";
import Image from "next/image";
import { ArrowRight, UserCircle, Clock, Eye } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "smart-waste-management",
      title: "The Future of Smart Waste Management",
      excerpt: "Exploring how IoT technology is transforming waste collection and management in modern cities.",
      date: "June 15, 2023",
      author: "Alex Johnson",
      thumbnail: "/images/blog/blog4.jpg",
      views: "12K",
      timeAgo: "2 weeks ago"
    },
    {
      slug: "iot-sensors-collection-costs",
      title: "5 Ways IoT Sensors Reduce Collection Costs",
      excerpt: "Learn how smart sensors can help municipalities save up to 30% on waste collection operations.",
      date: "May 22, 2023",
      author: "Sarah Chen",
      thumbnail: "/images/blog/blog1.jpg",
      views: "8.5K",
      timeAgo: "1 month ago"
    },
    {
      slug: "smart-bins-barcelona",
      title: "Case Study: Smart Bins in Barcelona",
      excerpt: "How Barcelona implemented NodesIO technology to revolutionize their waste management system.",
      date: "April 10, 2023",
      author: "Miguel Rodriguez",
      thumbnail: "/images/blog/blog2.jpg",
      views: "24K",
      timeAgo: "2 months ago"
    },
    {
      slug: "sustainability-through-technology",
      title: "Sustainability Through Technology",
      excerpt: "The environmental impact of optimized waste collection routes and smart monitoring.",
      date: "March 5, 2023",
      author: "Emma Wilson",
      thumbnail: "/images/blog/blog3.jpg",
      views: "15K",
      timeAgo: "3 months ago"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#eaf1fb]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-green-500">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                NodesIO Blog
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
                Insights and updates from the world of smart waste management
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50"></div>
        </section>

        {/* Featured Post Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <div className="relative w-full h-64 lg:h-full bg-green-500 flex items-center justify-center p-8">
                    <h2 className="text-3xl font-bold text-white text-center">
                      {blogPosts[0].title}
                    </h2>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg">
                      {blogPosts[0].author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">{blogPosts[0].author}</p>
                      <p className="text-sm text-gray-500">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blogPosts[0].views} views</span>
                    <Link 
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Link 
                  href={`/blog/${post.slug}`}
                  key={index}
                  className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="relative w-full h-48 bg-green-500 p-6 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white text-center">
                      {post.title}
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.timeAgo}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{post.views} views</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}