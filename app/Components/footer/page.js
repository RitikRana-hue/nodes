"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="bg-[#1a1a1a] text-white px-5 py-20">
      <div className="max-w-7xl mx-auto grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {theme === 'dark' ? (
              <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
            ) : (
              <img src="/images/nodesio.png" alt="Logo" className="w-8 h-8 rounded-full" />
            )}
            <span className="text-green-400 font-bold text-xl">NodesIO</span>
          </div>
          <p className="text-gray-400 mb-6">
            Transforming waste management through innovative technology and sustainable solutions.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-500 transform hover:-translate-y-1 transition duration-300">
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "Features", "About", "Contact"].map((link, i) => (
              <li key={i}>
                <Link href={`#${link.toLowerCase()}`} className="hover:text-white transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-6">Features</h3>
          <ul className="space-y-3 text-gray-400">
            {["IoT Integration", "Route Optimization", "Analytics Dashboard", "Mobile App"].map((feature, i) => (
              <li key={i}>
                <Link href="#features" className="hover:text-white transition">
                  {feature}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-2"><FaPhone /> +1 234 567 890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> contact@nodesio.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Innovation Street, Tech City</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-16 pt-8 border-t border-white/10">
        <p>&copy; 2025 NodesIO. All rights reserved.</p>
      </div>
    </footer>
  );
}
