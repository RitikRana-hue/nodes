"use client";

import { useState, useMemo } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import SoraChatbot from "@/app/components/SoraChatbot";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, UserCircle, Clock, Eye, Calendar, User, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  // Wrap blogPosts in useMemo to stabilize the array reference
  const blogPosts = useMemo(() => [
    {
      slug: "smart-waste-management",
      title: "The Future of Smart Waste Management",
      excerpt: "Exploring how IoT technology is transforming waste collection and management in modern cities through advanced sensor networks and AI-powered analytics.",
      date: "December 15, 2024",
      author: "Alex Johnson",
      role: "IoT Solutions Architect",
      thumbnail: "/images/blog1.svg",
      views: "12.5K",
      readTime: "8 min read",
      category: "Technology",
      featured: true
    },
    {
      slug: "iot-sensors-collection-costs",
      title: "5 Ways IoT Sensors Reduce Collection Costs",
      excerpt: "Learn how smart sensors can help municipalities save up to 40% on waste collection operations while improving service quality and environmental impact.",
      date: "December 8, 2024",
      author: "Sarah Chen",
      role: "Data Analytics Specialist",
      thumbnail: "/images/blog2.svg",
      views: "9.2K",
      readTime: "6 min read",
      category: "Cost Optimization"
    },
    {
      slug: "smart-bins-barcelona",
      title: "Case Study: Smart Bins Transform Barcelona",
      excerpt: "How Barcelona implemented NodesIO technology to revolutionize their waste management system, achieving 90% reduction in overflow incidents.",
      date: "November 28, 2024",
      author: "Miguel Rodriguez",
      role: "Smart City Consultant",
      thumbnail: "/images/blog3.svg",
      views: "18.7K",
      readTime: "12 min read",
      category: "Case Study"
    },
    {
      slug: "sustainability-through-technology",
      title: "Sustainability Through Smart Technology",
      excerpt: "The environmental impact of optimized waste collection routes and smart monitoring systems in creating cleaner, more sustainable cities.",
      date: "November 20, 2024",
      author: "Emma Wilson",
      role: "Environmental Engineer",
      thumbnail: "/images/blog4.svg",
      views: "15.3K",
      readTime: "10 min read",
      category: "Sustainability"
    },
    {
      slug: "ai-predictive-analytics-waste",
      title: "AI-Powered Predictive Analytics in Waste Management",
      excerpt: "Discover how artificial intelligence and machine learning are enabling predictive waste management, optimizing collection schedules and reducing operational costs.",
      date: "November 12, 2024",
      author: "Dr. James Park",
      role: "AI Research Director",
      thumbnail: "/images/blog image.jpg",
      views: "11.8K",
      readTime: "14 min read",
      category: "Artificial Intelligence"
    }
  ], []); // Empty dependency array since this data is static

  const categories = ["All", "Technology", "Case Study", "Sustainability", "Cost Optimization", "Artificial Intelligence"];

  // Filter blog posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory, blogPosts]);

  // Get featured post (always show the first post or first from filtered)
  const featuredPost = filteredPosts[0] || blogPosts[0];

  // Get remaining posts for grid
  const gridPosts = filteredPosts.slice(1);

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
                <span className="text-gray-900">NodesIO</span><br />
                <span className="text-blue-600">Insights</span> <span className="text-green-600">&</span> <span className="text-blue-600">Updates</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Ready to transform your waste management operations? Connect with our team of IoT experts to discuss how we can optimize your systems for maximum efficiency and sustainability.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50/20"></div>
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Featured Article
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dive deep into the latest innovations shaping the future of waste management.
              </p>
            </motion.div>

            <motion.div
              className="max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col lg:flex-row relative z-10">
                  <div className="lg:w-1/2 relative">
                    <div className="relative w-full h-80 lg:h-full overflow-hidden">
                      <Image
                        src={featuredPost.thumbnail}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-600">{featuredPost.role}</p>
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredPost.views}
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg group-hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Posts Grid */}
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
                Latest Articles
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore our comprehensive collection of insights, case studies, and technical deep-dives.
              </p>
            </motion.div>

            {gridPosts.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {gridPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>

                      <div className="relative z-10">
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>

                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {post.views}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">
                                {post.author.charAt(0)}
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                                <p className="text-xs text-gray-500">{post.role}</p>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500">
                              {post.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found in this category.</p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View All Articles
                </button>
              </div>
            )}

            {/* Newsletter Signup */}
            <motion.div
              className="mt-20 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Stay Updated with NodesIO Insights
                  </h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Get the latest articles, case studies, and industry insights delivered directly to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
                    />
                    <motion.button
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Sora AI Chatbot */}
      <SoraChatbot environment="landing" />
    </div>
  );
}