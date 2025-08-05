import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section
      className="py-16 px-4 leading-[1.6]"
      style={{ background: 'rgb(233, 236, 239)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-relaxed">
            Revolutionizing Waste <br /> Management
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to create cleaner, smarter cities through innovative technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left px-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span>Real-time waste level monitoring</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span>Automated collection scheduling</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span>Reduced operational costs</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span>Environmental impact tracking</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about-image.png"
            width={500}
            height={400}
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
