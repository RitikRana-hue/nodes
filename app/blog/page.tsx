"use client";

import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SoraChatbot from "@/components/SoraChatbot";
import FloatingElements from "@/components/ui/FloatingElements";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye, User, TrendingUp } from "lucide-react";
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
        <section className="hero-section bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50 relative overflow-hidden">
          <FloatingElements variant="mixed" density="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/80 z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex items-center min-h-screen">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Latest Insights & Updates
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">NodesIO</span><br />
                <span className="text-blue-600">Knowledge Hub</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Explore cutting-edge insights, case studies, and expert perspectives on IoT technology, smart waste management, and sustainable city solutions.
              </p>

              {/* Category Filter */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <p className="text-sm font-medium text-gray-600 mb-4">Filter by Category:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md'
                        }`}
                      whileHover={{ scale: selectedCategory === category ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{blogPosts.length}+</div>
                  <div className="text-sm text-gray-600">Expert Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50K+</div>
                  <div className="text-sm text-gray-600">Monthly Readers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <FloatingElements variant="blue" density="low" />
          <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 font-semibold text-sm rounded-full mb-6">
                ⭐ Featured Article
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Editor&apos;s Pick
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most comprehensive and insightful article, handpicked by our editorial team.
              </p>
            </motion.div>

            <motion.div
              className="max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all group border border-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl group-hover:bg-blue-300/30 transition-colors"></div>

                <div className="flex flex-col lg:flex-row relative z-10">
                  <div className="lg:w-3/5 relative">
                    <div className="relative w-full h-80 lg:h-[500px] overflow-hidden">
                      <Image
                        src={featuredPost.thumbnail}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {featuredPost.category}
                          </span>
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4 text-white text-sm">
                          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Eye className="w-4 h-4" />
                            {featuredPost.views}
                          </div>
                          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-8">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-gray-900 text-lg">{featuredPost.author}</p>
                        <p className="text-sm text-blue-600 font-medium">{featuredPost.role}</p>
                        <p className="text-xs text-gray-500 mt-1">{featuredPost.date}</p>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl group-hover:scale-105 text-center"
                      >
                        Read Full Article
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                      <button className="inline-flex items-center justify-center border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg">
                        <User className="w-4 h-4 mr-2" />
                        Follow Author
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <FloatingElements variant="green" density="medium" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-green-50/30"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-6">
                📚 Knowledge Library
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {selectedCategory === "All"
                  ? "Explore our comprehensive collection of insights, case studies, and technical deep-dives across all categories."
                  : `Discover expert insights and in-depth analysis in ${selectedCategory.toLowerCase()}.`
                }
              </p>
              {filteredPosts.length > 0 && (
                <div className="mt-6 text-sm text-gray-600">
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                </div>
              )}
            </motion.div>

            {gridPosts.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {gridPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="h-full"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100 relative h-full flex flex-col"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="relative w-full h-56 overflow-hidden">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                              {post.category}
                            </span>
                            <div className="flex gap-2">
                              <span className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 text-white text-sm">
                              <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                                <Eye className="w-3 h-3" />
                                {post.views}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                              {post.excerpt}
                            </p>
                          </div>

                          <div className="border-t border-gray-100 pt-4 mt-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                  {post.author.charAt(0)}
                                </div>
                                <div className="ml-3">
                                  <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                                  <p className="text-xs text-gray-500">{post.role}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-gray-500">{post.date}</div>
                                <div className="text-xs text-blue-600 font-medium mt-1 group-hover:text-blue-700">
                                  Read More →
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-gray-400 text-3xl">📝</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">No articles match the selected category filter.</p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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