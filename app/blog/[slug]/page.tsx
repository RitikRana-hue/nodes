"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft, UserCircle, Clock, Eye, Calendar, Share2, BookmarkPlus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import DOMPurify from 'isomorphic-dompurify'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// This would typically come from your API or database
const blogPosts = [
  {
    slug: 'smart-waste-management',
    title: 'The Future of Smart Waste Management',
    author: 'Alex Johnson',
    role: 'IoT Solutions Architect',
    date: 'December 15, 2024',
    views: '12.5K',
    readTime: '8 min read',
    category: 'Technology',
    thumbnail: '/images/blog1.svg',
    excerpt: 'Exploring how IoT technology is transforming waste collection and management in modern cities through advanced sensor networks and AI-powered analytics.',
    content: `
      <h2>The Future of Smart Waste Management</h2>
      <p>Smart waste management is revolutionizing how cities handle their waste collection and processing systems. Through the integration of IoT sensors, real-time monitoring, and data analytics, cities can now optimize their waste management operations like never before.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Reduced operational costs through optimized collection schedules</li>
        <li>Dynamic route planning based on real-time data</li>
        <li>Automated fill level monitoring and alerts</li>
        <li>Enhanced environmental sustainability</li>
        <li>Improved citizen satisfaction with waste services</li>
      </ul>
      
      <h3>Implementation Challenges</h3>
      <p>While the benefits are clear, implementing smart waste management systems comes with its own set of challenges:</p>
      <ul>
        <li>Initial infrastructure investment requirements</li>
        <li>Integration with existing waste management systems</li>
        <li>Staff training and adaptation to new technologies</li>
        <li>Data security and privacy considerations</li>
      </ul>
      
      <h3>Future Prospects</h3>
      <p>The future of waste management looks promising with emerging technologies like AI and machine learning further enhancing the capabilities of smart waste management systems. These advancements will lead to:</p>
      <ul>
        <li>Predictive analytics for waste generation patterns</li>
        <li>Automated waste sorting and recycling</li>
        <li>Integration with smart city platforms</li>
        <li>Enhanced citizen engagement through mobile apps</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Cities worldwide are already seeing significant benefits from smart waste management implementation:</p>
      <ul>
        <li>Barcelona: 30% reduction in collection costs</li>
        <li>Singapore: 20% improvement in recycling rates</li>
        <li>Copenhagen: 80% decrease in overflow incidents</li>
      </ul>
    `
  },
  {
    slug: 'iot-sensors-collection-costs',
    title: '5 Ways IoT Sensors Reduce Collection Costs',
    author: 'Sarah Chen',
    role: 'Data Analytics Specialist',
    date: 'December 8, 2024',
    views: '9.2K',
    readTime: '6 min read',
    category: 'Cost Optimization',
    thumbnail: '/images/blog2.svg',
    excerpt: 'Learn how smart sensors can help municipalities save up to 40% on waste collection operations while improving service quality and environmental impact.',
    content: `
      <h2>5 Ways IoT Sensors Reduce Collection Costs</h2>
      <p>IoT sensors are transforming waste collection operations, delivering significant cost savings through data-driven optimization. Here are the five key ways these smart sensors are making a difference:</p>
      
      <h3>1. Optimized Collection Routes</h3>
      <p>Smart sensors provide real-time fill level data, allowing for dynamic route optimization:</p>
      <ul>
        <li>Reduced fuel consumption by up to 30%</li>
        <li>Decreased vehicle wear and tear</li>
        <li>More efficient use of workforce hours</li>
      </ul>
      
      <h3>2. Predictive Maintenance</h3>
      <p>Sensors monitor equipment health and predict maintenance needs:</p>
      <ul>
        <li>Early detection of potential issues</li>
        <li>Reduced downtime and repair costs</li>
        <li>Extended equipment lifespan</li>
      </ul>
      
      <h3>3. Resource Allocation</h3>
      <p>Data-driven insights enable better resource management:</p>
      <ul>
        <li>Optimal fleet sizing</li>
        <li>Efficient staff scheduling</li>
        <li>Better container placement</li>
      </ul>
      
      <h3>4. Automated Monitoring</h3>
      <p>Continuous monitoring eliminates manual inspection needs:</p>
      <ul>
        <li>Reduced labor costs</li>
        <li>Immediate alert systems</li>
        <li>Prevention of overflow situations</li>
      </ul>
      
      <h3>5. Data Analytics</h3>
      <p>Advanced analytics drive continuous improvement:</p>
      <ul>
        <li>Pattern recognition for better planning</li>
        <li>Performance benchmarking</li>
        <li>ROI tracking and optimization</li>
      </ul>
    `
  },
  {
    slug: 'smart-bins-barcelona',
    title: 'Case Study: Smart Bins Transform Barcelona',
    author: 'Miguel Rodriguez',
    role: 'Smart City Consultant',
    date: 'November 28, 2024',
    views: '18.7K',
    readTime: '12 min read',
    category: 'Case Study',
    thumbnail: '/images/blog3.svg',
    excerpt: 'How Barcelona implemented NodesIO technology to revolutionize their waste management system, achieving 90% reduction in overflow incidents.',
    content: `
      <h2>Case Study: Smart Bins in Barcelona</h2>
      <p>Barcelona's implementation of NodesIO smart waste management technology has become a benchmark for cities worldwide. This case study explores their journey, challenges, and remarkable results.</p>
      
      <h3>Project Overview</h3>
      <p>Key implementation details:</p>
      <ul>
        <li>1,000+ smart bins deployed</li>
        <li>City-wide sensor network</li>
        <li>Integration with existing infrastructure</li>
        <li>Mobile app for citizens</li>
      </ul>
      
      <h3>Implementation Process</h3>
      <p>The rollout followed a systematic approach:</p>
      <ul>
        <li>Initial pilot in historic district</li>
        <li>Phased expansion across districts</li>
        <li>Staff training programs</li>
        <li>Public awareness campaign</li>
      </ul>
      
      <h3>Challenges Overcome</h3>
      <p>Several challenges were successfully addressed:</p>
      <ul>
        <li>Legacy system integration</li>
        <li>Network connectivity in dense urban areas</li>
        <li>Cultural adaptation to new technology</li>
        <li>Battery life optimization</li>
      </ul>
      
      <h3>Results and Benefits</h3>
      <p>The project delivered significant improvements:</p>
      <ul>
        <li>30% reduction in collection costs</li>
        <li>40% decrease in truck routes</li>
        <li>90% fewer overflow incidents</li>
        <li>25% increase in recycling rates</li>
      </ul>
      
      <h3>Future Plans</h3>
      <p>Barcelona continues to innovate:</p>
      <ul>
        <li>AI-powered predictive analytics</li>
        <li>Integration with smart city platform</li>
        <li>Expansion to commercial waste</li>
        <li>Citizen engagement features</li>
      </ul>
    `
  },
  {
    slug: 'sustainability-through-technology',
    title: 'Sustainability Through Smart Technology',
    author: 'Emma Wilson',
    role: 'Environmental Engineer',
    date: 'November 20, 2024',
    views: '15.3K',
    readTime: '10 min read',
    category: 'Sustainability',
    thumbnail: '/images/blog4.svg',
    excerpt: 'The environmental impact of optimized waste collection routes and smart monitoring systems in creating cleaner, more sustainable cities.',
    content: `
      <h2>Sustainability Through Technology</h2>
      <p>Smart waste management technology is not just about operational efficiency—it's a powerful tool for environmental sustainability. This article explores how technology is helping cities reduce their environmental impact.</p>
      
      <h3>Carbon Footprint Reduction</h3>
      <p>Smart routing and monitoring lead to:</p>
      <ul>
        <li>25-30% reduction in collection vehicle emissions</li>
        <li>Optimized fuel consumption</li>
        <li>Reduced traffic congestion</li>
        <li>Lower noise pollution</li>
      </ul>
      
      <h3>Recycling Optimization</h3>
      <p>Technology enhances recycling efforts through:</p>
      <ul>
        <li>Better sorting and contamination detection</li>
        <li>Real-time recycling rate monitoring</li>
        <li>Citizen education and feedback</li>
        <li>Incentive program tracking</li>
      </ul>
      
      <h3>Resource Conservation</h3>
      <p>Smart systems help conserve resources by:</p>
      <ul>
        <li>Minimizing unnecessary collections</li>
        <li>Reducing vehicle wear and tear</li>
        <li>Optimizing bin placement and capacity</li>
        <li>Preventing waste overflow</li>
      </ul>
      
      <h3>Environmental Monitoring</h3>
      <p>Advanced sensors provide:</p>
      <ul>
        <li>Air quality monitoring</li>
        <li>Leachate detection</li>
        <li>Temperature monitoring</li>
        <li>Hazardous waste alerts</li>
      </ul>
      
      <h3>Future Sustainability Goals</h3>
      <p>Looking ahead, technology will enable:</p>
      <ul>
        <li>Zero-emission collection vehicles</li>
        <li>Circular economy integration</li>
        <li>Advanced materials recovery</li>
        <li>Smart city sustainability metrics</li>
      </ul>
    `
  },
  {
    slug: 'ai-predictive-analytics-waste',
    title: 'AI-Powered Predictive Analytics in Waste Management',
    author: 'Dr. James Park',
    role: 'AI Research Director',
    date: 'November 12, 2024',
    views: '11.8K',
    readTime: '14 min read',
    category: 'Artificial Intelligence',
    thumbnail: '/images/blog image.jpg',
    excerpt: 'Discover how artificial intelligence and machine learning are enabling predictive waste management, optimizing collection schedules and reducing operational costs.',
    content: `
      <h2>AI-Powered Predictive Analytics in Waste Management</h2>
      <p>Artificial Intelligence is revolutionizing waste management through predictive analytics, enabling cities to anticipate waste generation patterns and optimize operations proactively.</p>
      
      <h3>Machine Learning Applications</h3>
      <p>AI algorithms analyze historical data to predict:</p>
      <ul>
        <li>Waste generation patterns by location and time</li>
        <li>Optimal collection schedules</li>
        <li>Equipment maintenance needs</li>
        <li>Resource allocation requirements</li>
      </ul>
      
      <h3>Predictive Models</h3>
      <p>Advanced models consider multiple factors:</p>
      <ul>
        <li>Weather patterns and seasonal variations</li>
        <li>Local events and population density</li>
        <li>Economic indicators and consumption trends</li>
        <li>Historical waste composition data</li>
      </ul>
      
      <h3>Real-World Benefits</h3>
      <p>Cities implementing AI-powered systems report:</p>
      <ul>
        <li>30-50% reduction in operational costs</li>
        <li>25% improvement in collection efficiency</li>
        <li>40% decrease in unnecessary trips</li>
        <li>60% better resource utilization</li>
      </ul>
      
      <h3>Future Developments</h3>
      <p>Emerging AI technologies will enable:</p>
      <ul>
        <li>Computer vision for waste sorting</li>
        <li>Natural language processing for citizen feedback</li>
        <li>Reinforcement learning for dynamic optimization</li>
        <li>Edge computing for real-time decisions</li>
      </ul>
    `
  }
]

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const handleShare = async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        })
      } catch (err) {
        // User cancelled or error occurred
        if (err instanceof Error && err.name !== 'AbortError') {
          copyToClipboard(url)
        }
      }
    } else {
      copyToClipboard(url)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Link copied to clipboard!', {
        duration: 3000,
        position: 'bottom-center',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      })
    } catch (err) {
      toast.error('Failed to copy link', {
        duration: 3000,
        position: 'bottom-center',
      })
    }
  }

  useEffect(() => {
    if (params?.slug) {
      const slug = params.slug as string
      const foundPost = blogPosts.find(post => post.slug === slug)

      if (foundPost) {
        setPost(foundPost)
        setRelatedPosts(blogPosts.filter(p => p.slug !== slug).slice(0, 3))
      }
      setLoading(false)
    }
  }, [params])

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/blog"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </div>

              <div className="mb-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">{post.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views} views
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookmarkPlus className="w-4 h-4" />
                  Save
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                <div
                  className="prose prose-lg md:prose-xl max-w-none 
                    prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-600
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                    prose-ul:my-6 prose-ul:space-y-3
                    prose-li:text-gray-700 prose-li:leading-relaxed prose-li:pl-2
                    prose-li:marker:text-blue-600
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    first:prose-h2:mt-0"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content, {
                      ALLOWED_TAGS: ['h2', 'h3', 'p', 'ul', 'li', 'strong', 'em', 'a'],
                      ALLOWED_ATTR: ['href', 'target', 'rel']
                    })
                  }}
                />
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Related Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Continue exploring insights in smart waste management technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10">
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={relatedPost.thumbnail}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedPost.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-xs">
                              {relatedPost.author.charAt(0)}
                            </div>
                            <div className="ml-2">
                              <p className="text-sm font-medium text-gray-900">{relatedPost.author}</p>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}