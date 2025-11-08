"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaRocket, FaLeaf, FaUsers } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
    services: [
      { name: "IoT Sensors", href: "/services#iot" },
      { name: "Smart Bins", href: "/services#bins" },
      { name: "Route Optimization", href: "/services#routes" },
      { name: "Analytics Dashboard", href: "/services#analytics" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">

              <h3 className="text-xl font-bold text-white">NodesIO</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Smart IoT solutions for a more efficient, connected, and sustainable future.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <FaPhone className="text-blue-400 mr-2 text-xs" />
                <span className="text-gray-300">+91 72918-97879</span>
              </div>
              <div className="flex items-center text-sm">
                <FaEnvelope className="text-green-400 mr-2 text-xs" />
                <span className="text-gray-300">nodesiocorpprivatelimited@gmail.com</span>
              </div>
              <div className="flex items-center text-sm">
                <FaMapMarkerAlt className="text-purple-400 mr-2 text-xs" />
                <span className="text-gray-300">Ballabgarh, Faridabad</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wide">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wide">Connect</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get updates on smart city technology.
            </p>

            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 rounded-l"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-r transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div>
              <p className="text-xs text-gray-500 mb-3">Follow us</p>
              <div className="flex space-x-3">
                {[
                  { icon: FaTwitter, href: '#' },
                  { icon: FaLinkedin, href: '#' },
                  { icon: FaInstagram, href: '#' },
                  { icon: FaGithub, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <social.icon className="text-xs" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4 mb-3 md:mb-0">
            <div className="text-gray-400">
              &copy; {new Date().getFullYear()} NodesIO. All rights reserved.
            </div>
            <div className="flex space-x-4 text-xs">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-500 hover:text-gray-300 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-gray-500 text-xs">
            Made with ❤️ for sustainable cities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;