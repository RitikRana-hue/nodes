"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUser, FaTruck, FaBuilding, FaArrowRight, FaShieldAlt, FaChartLine, FaCog } from "react-icons/fa";
import Container from "../components/ui/Container";
import PageLayout from "../components/layout/PageLayout";

const LoginSelectionPage = () => {
    const dashboards = [
        {
            title: "User Dashboard",
            subtitle: "Personal Account",
            description: "Access your personal account, view reports, manage bins, and track analytics.",
            icon: FaUser,
            href: "/user/login",
            gradient: "from-blue-500 via-blue-600 to-blue-700",
            shadowColor: "shadow-blue-500/25",
            borderColor: "border-blue-200",
            features: ["Personal Analytics", "Bin Management", "Reports & Insights", "Notifications"],
            stats: "1,200+ Active Users"
        },
        {
            title: "Driver Dashboard",
            subtitle: "Field Operations",
            description: "Manage routes, track collections, update bin status, and view schedules.",
            icon: FaTruck,
            href: "/dashboard/login",
            gradient: "from-green-500 via-green-600 to-green-700",
            shadowColor: "shadow-green-500/25",
            borderColor: "border-green-200",
            features: ["Route Management", "Collection Tracking", "Schedule View", "Status Updates"],
            stats: "500+ Active Drivers"
        },
        {
            title: "HQ Dashboard",
            subtitle: "Administrative Control",
            description: "Administrative control, system management, user oversight, and analytics.",
            icon: FaBuilding,
            href: "/hq/login",
            gradient: "from-purple-500 via-purple-600 to-purple-700",
            shadowColor: "shadow-purple-500/25",
            borderColor: "border-purple-200",
            features: ["System Control", "User Management", "Advanced Analytics", "Regional Overview"],
            stats: "50+ Admin Users"
        }
    ];

    return (
        <PageLayout fullViewport>
            <div className="min-h-screen relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                <Container>
                    <div className="relative z-10 min-h-screen flex flex-col justify-center py-20">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                                <FaShieldAlt className="text-green-600 mr-2" />
                                <span className="text-green-700 text-sm font-medium">Secure Access Portal</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Choose Your
                                <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Dashboard
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Select the appropriate dashboard to access your NodesIO account and manage your smart IoT solutions.
                            </p>
                        </motion.div>

                        {/* Dashboard Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            {dashboards.map((dashboard, index) => {
                                const IconComponent = dashboard.icon;
                                return (
                                    <motion.div
                                        key={dashboard.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        className="group"
                                    >
                                        <Link href={dashboard.href}>
                                            <div className={`relative bg-white/80 backdrop-blur-xl border ${dashboard.borderColor} rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 hover:${dashboard.shadowColor} hover:shadow-2xl cursor-pointer overflow-hidden`}>
                                                {/* Gradient Overlay */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${dashboard.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

                                                {/* Content */}
                                                <div className="relative z-10">
                                                    {/* Icon & Badge */}
                                                    <div className="flex items-center justify-between mb-6">
                                                        <div className={`w-16 h-16 bg-gradient-to-br ${dashboard.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${dashboard.shadowColor} shadow-lg`}>
                                                            <IconComponent className="text-2xl text-white" />
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{dashboard.subtitle}</div>
                                                            <div className="text-sm text-gray-600 font-medium">{dashboard.stats}</div>
                                                        </div>
                                                    </div>

                                                    {/* Title & Description */}
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                                        {dashboard.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                                        {dashboard.description}
                                                    </p>

                                                    {/* Features Grid */}
                                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                                        {dashboard.features.map((feature, featureIndex) => (
                                                            <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                                                                <div className={`w-2 h-2 bg-gradient-to-r ${dashboard.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                                                                <span className="truncate">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Action Button */}
                                                    <div className={`w-full py-4 px-6 bg-gradient-to-r ${dashboard.gradient} text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:${dashboard.shadowColor} transform group-hover:-translate-y-1`}>
                                                        <span>Access Dashboard</span>
                                                        <FaArrowRight className="ml-3 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                                    </div>
                                                </div>

                                                {/* Decorative Elements */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100/50 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Bottom Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {/* Help Card */}
                            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mr-4">
                                        <FaCog className="text-white text-lg" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Need Help?</h3>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Not sure which dashboard is right for you? Our support team is here to help.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-medium"
                                >
                                    Contact Support
                                    <FaArrowRight className="ml-2 text-sm" />
                                </Link>
                            </div>

                            {/* Stats Card */}
                            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                                        <FaChartLine className="text-white text-lg" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Platform Stats</h3>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">1.7K+</div>
                                        <div className="text-xs text-gray-500 uppercase">Total Users</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">99.9%</div>
                                        <div className="text-xs text-gray-500 uppercase">Uptime</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">24/7</div>
                                        <div className="text-xs text-gray-500 uppercase">Support</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </PageLayout>
    );
};

export default LoginSelectionPage;