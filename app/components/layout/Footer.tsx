"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  const socialIcons = {
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    github: FaGithub,
    facebook: FaFacebook,
    instagram: FaInstagram,
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <Container>
        <div className="section-padding">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-green-500">NodesIO</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Smart IoT solutions for efficient waste management and sustainable cities.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="text-blue-400 mr-3 text-sm" />
                    <span className="text-gray-300">+91 72918-97879</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-green-400 mr-3 text-sm" />
                    <span className="text-gray-300">career.ektros@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-purple-400 mr-3 text-sm" />
                    <span className="text-gray-300">Ballabgarh, Faridabad</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 text-white uppercase tracking-wide">Company</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 text-white uppercase tracking-wide">Services</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 text-white uppercase tracking-wide">Stay Connected</h3>
              <p className="text-gray-400 mb-6">
                Get the latest updates on smart city technology and sustainability.
              </p>

              <form className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="sm:w-auto"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>

              {/* Social Media */}
              <div>
                <p className="text-sm text-gray-500 mb-4">Follow us</p>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((social) => {
                    const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="text-lg" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <div className="text-gray-400">
                &copy; {new Date().getFullYear()} NodesIO. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                {FOOTER_LINKS.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-gray-500 text-sm flex items-center">
              Made with <span className="text-red-400 mx-1">❤️</span> for sustainable cities
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;