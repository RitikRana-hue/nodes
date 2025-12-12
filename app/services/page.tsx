"use client";

import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card, { CardBody } from "@/components/ui/Card";
import FloatingElements from "@/components/ui/FloatingElements";
import { motion } from "framer-motion";
import { FaLeaf, FaRoute, FaChartBar, FaMobileAlt, FaCog, FaShieldAlt, FaUsers, FaRocket, FaCheckCircle, FaArrowRight, FaLightbulb, FaGlobe } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/constants";

export default function Services() {
  const services = [
    {
      icon: <FaLeaf className="text-4xl text-green-500 mb-4" />,
      title: "Smart IoT Sensors",
      description: "Advanced sensors monitoring fill levels, temperature, humidity, and gas emissions in real-time with 99.9% accuracy.",
      features: ["Real-time monitoring", "Weather-resistant design", "Long battery life", "Wireless connectivity"]
    },
    {
      icon: <FaRoute className="text-4xl text-blue-500 mb-4" />,
      title: "AI Route Optimization",
      description: "Machine learning algorithms that create optimal collection routes, reducing fuel consumption by up to 40%.",
      features: ["Dynamic route planning", "Traffic integration", "Fuel optimization", "Real-time adjustments"]
    },
    {
      icon: <FaChartBar className="text-4xl text-purple-500 mb-4" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboard with predictive analytics, custom reports, and actionable insights for strategic planning.",
      features: ["Predictive analytics", "Custom dashboards", "Automated reports", "KPI tracking"]
    },
    {
      icon: <FaMobileAlt className="text-4xl text-orange-500 mb-4" />,
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications for field teams, supervisors, and citizens with offline capabilities.",
      features: ["Cross-platform apps", "Offline functionality", "Push notifications", "GPS tracking"]
    },
    {
      icon: <FaCog className="text-4xl text-indigo-500 mb-4" />,
      title: "System Integration",
      description: "Seamless integration with existing municipal systems, ERP platforms, and third-party applications.",
      features: ["API integration", "Legacy system support", "Data migration", "Custom connectors"]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500 mb-4" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption, compliance monitoring, and audit trails.",
      features: ["End-to-end encryption", "GDPR compliance", "Audit trails", "Access controls"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "We analyze your current processes and design customized IoT solutions to optimize efficiency and performance.",
      icon: <FaLightbulb className="text-2xl text-yellow-500" />
    },
    {
      step: "02",
      title: "Installation & Setup",
      description: "Our certified technicians install sensors and configure the entire system infrastructure.",
      icon: <FaCog className="text-2xl text-blue-500" />
    },
    {
      step: "03",
      title: "Training & Onboarding",
      description: "Comprehensive training for your team on system operation, maintenance, and best practices.",
      icon: <FaUsers className="text-2xl text-green-500" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "24/7 system monitoring with proactive maintenance and dedicated customer support.",
      icon: <FaShieldAlt className="text-2xl text-purple-500" />
    }
  ];

  const benefits = [
    { icon: <FaCheckCircle className="text-green-500" />, text: "Reduce collection costs by up to 40%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Decrease carbon emissions by 35% through optimized routes" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Improve operational efficiency by 50%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Enhance citizen satisfaction with cleaner public spaces" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Make data-driven decisions with real-time analytics" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Reduce overflow incidents by 90%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Increase collection team productivity by 60%" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Achieve ROI within 12-18 months" }
  ];

  const industries = [
    {
      title: "Governments",
      description: "Comprehensive IoT solutions for organizations and communities of all sizes.",
      icon: <FaGlobe className="text-3xl text-blue-600" />
    },
    {
      title: "Commercial Properties",
      description: "Efficient IoT management for shopping centers, office complexes, and business districts.",
      icon: <FaRocket className="text-3xl text-green-600" />
    },
    {
      title: "Educational Institutions",
      description: "Sustainable IoT solutions for universities, schools, and campus environments.",
      icon: <FaUsers className="text-3xl text-purple-600" />
    }
  ];

  return (
    <PageLayout fullViewport>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/80 z-10"></div>
        <FloatingElements variant="mixed" density="medium" />

        <Container className="relative z-20 w-full">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Comprehensive</span><br />
              <span className="text-shimmer">Waste Management</span><br />
              <span className="text-green-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transform your waste management operations with our cutting-edge IoT technology,
              AI-powered optimization, and comprehensive analytics platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as="a"
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-xl"
              >
                Get Started Today
              </Button>
              <Button
                as="a"
                href="/contact"
                variant="outline"
                size="lg"
                className="shadow-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50/20"></div>
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions designed to revolutionize waste management across industries and municipalities.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="card-hover group relative overflow-hidden h-full">
                  <CardBody className="p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* How We Work Process */}
      <Section className="bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-green-50/30"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A proven methodology that ensures successful deployment and maximum ROI for your waste management transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50/20"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Measurable Results & Benefits
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our clients consistently achieve significant improvements in efficiency, cost savings, and environmental impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="card-hover group h-full">
                  <CardBody className="flex items-center p-6 h-full">
                    <div className="mr-4 group-hover:scale-110 transition-transform flex-shrink-0">{benefit.icon}</div>
                    <p className="text-gray-800 font-medium leading-relaxed">{benefit.text}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Tailored solutions for diverse sectors, each with unique waste management challenges and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover group text-center relative overflow-hidden h-full">
                  <CardBody className="p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="mb-6 group-hover:scale-110 transition-transform">{industry.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{industry.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-25"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business with IoT?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Join hundreds of organizations already benefiting from our smart IoT solutions. Get started today with a free consultation and personalized demo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as="a"
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl"
              >
                Schedule Free Consultation
              </Button>
              <Button
                as="a"
                href="/contact"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                rightIcon={<FaArrowRight />}
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </PageLayout>
  );
}