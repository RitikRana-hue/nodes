"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import Container from "../ui/Container";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const headerClasses = clsx(
    "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
    isScrolled
      ? "bg-white/95 shadow-lg py-3"
      : "bg-white/90 py-4 shadow-sm"
  );

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <Link href="/" className="flex items-center group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-green-600 group-hover:scale-105 transition-transform">
                NodesIO
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      "relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 group",
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ x: "-50%" }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="py-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={clsx(
                        "block px-4 py-3 font-medium transition-colors",
                        isActive
                          ? "text-blue-600 bg-blue-50 border-r-2 border-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header;