import Header from '../../Components/page/Header'
import Footer from '../../Components/page/Footer'
import { ArrowLeft, UserCircle, Clock, Eye } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from your API or database
const blogPosts = [
  {
    slug: 'smart-waste-management',
    title: 'The Future of Smart Waste Management',
    author: 'Alex Johnson',
    date: 'June 15, 2023',
    views: '12K',
    timeAgo: '2 weeks ago',
    excerpt: 'Exploring how IoT technology is transforming waste collection and management in modern cities.',
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
    date: 'May 22, 2023',
    views: '8.5K',
    timeAgo: '1 month ago',
    excerpt: 'Learn how smart sensors can help municipalities save up to 30% on waste collection operations.',
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
    title: 'Case Study: Smart Bins in Barcelona',
    author: 'Miguel Rodriguez',
    date: 'April 10, 2023',
    views: '24K',
    timeAgo: '2 months ago',
    excerpt: 'How Barcelona implemented NodesIO technology to revolutionize their waste management system.',
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
    title: 'Sustainability Through Technology',
    author: 'Emma Wilson',
    date: 'March 5, 2023',
    views: '15K',
    timeAgo: '3 months ago',
    excerpt: 'The environmental impact of optimized waste collection routes and smart monitoring.',
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
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-green-500 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.timeAgo}</span>
              <span>•</span>
              <span>{post.views} views</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full py-16 px-4">
          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div 
              className="prose prose-lg md:prose-xl max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}