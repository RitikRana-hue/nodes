"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card, { CardBody } from "@/components/ui/Card";
import FloatingElements from "@/components/ui/FloatingElements";
import JobApplication from "@/components/forms/JobApplication";
import { Briefcase, Clock, Users, Zap, Heart, DollarSign, ArrowRight, Send, Star, Award, Target } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer, CAREER_POSITIONS } from "@/lib/constants";

export default function Careers() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [isGeneralApplication, setIsGeneralApplication] = useState(false);

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsGeneralApplication(false);
    setIsApplicationOpen(true);
  };

  const handleGeneralApplication = () => {
    setSelectedJob('');
    setIsGeneralApplication(true);
    setIsApplicationOpen(true);
  };

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs and mental health support",
      color: "from-red-500 to-pink-500",
      details: ["100% premium coverage", "$2000 wellness budget", "Mental health support", "Gym membership"]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries, equity packages, and performance bonuses with annual reviews",
      color: "from-green-500 to-emerald-500",
      details: ["Equity participation", "Annual bonuses", "Salary reviews", "Stock options"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote work options with flexible scheduling",
      color: "from-blue-500 to-cyan-500",
      details: ["Unlimited PTO", "Flexible hours", "Remote work", "4-day work week option"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Professional Growth",
      description: "$3000 learning budget, conference attendance, mentorship programs, and career development",
      color: "from-purple-500 to-violet-500",
      details: ["$3000 learning budget", "Conference attendance", "Mentorship program", "Career coaching"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Culture",
      description: "Collaborative environment, team events, inclusive workplace, and innovation time",
      color: "from-orange-500 to-amber-500",
      details: ["Team building events", "Innovation Fridays", "Inclusive culture", "Open communication"]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Impact & Recognition",
      description: "Work on meaningful projects with recognition programs and career advancement opportunities",
      color: "from-indigo-500 to-blue-500",
      details: ["Recognition programs", "Career advancement", "Meaningful impact", "Innovation awards"]
    }
  ];

  const companyStats = [
    { number: "15+", label: "Team Members", description: "Talented professionals" },
    { number: "50+", label: "Cities Served", description: "Across 15 countries" },
    { number: "95%", label: "Employee Satisfaction", description: "Based on internal surveys" },
    { number: "5M+", label: "Funding Raised", description: "Series A completed" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Data Scientist",
      quote: "Working at NodesIO has been incredible. The team is supportive, the technology is cutting-edge, and I feel like I'm making a real impact on sustainability.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "IoT Engineer",
      quote: "The innovation culture here is amazing. We're constantly pushing boundaries and solving real-world problems that matter for our planet's future.",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      quote: "NodesIO offers the perfect blend of startup energy and enterprise stability. The growth opportunities are endless, and the team genuinely cares about each other.",
      avatar: "EW"
    }
  ];

  return (
    <PageLayout fullViewport>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50 relative overflow-hidden">
        <FloatingElements variant="mixed" density="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/80 z-10"></div>

        <Container className="relative z-20 w-full">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full mb-6">
              Join Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Build the Future of
              <span className="gradient-text"> Smart Cities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Join our team of innovators driving change through smart IoT technology. At NodesIO, we&apos;re passionate about creating solutions that make industries and communities smarter, more efficient, and sustainable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
                leftIcon={<Briefcase className="w-5 h-5" />}
                className="shadow-lg hover:shadow-xl"
              >
                View Open Positions
              </Button>
              <Button
                onClick={handleGeneralApplication}
                variant="outline"
                size="lg"
                leftIcon={<Send className="w-5 h-5" />}
              >
                Send Resume
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Company Stats Section */}
      <Section className="bg-white relative overflow-hidden section-padding-sm">
        <Container className="relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Why Join Us Section */}
      <Section className="bg-gray-50 relative overflow-hidden">
        <FloatingElements variant="blue" density="low" />
        <Container>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-blue-600 font-semibold text-lg mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Work With Us</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="card-hover h-full">
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
                  <p className="text-gray-600">Work on projects that make real environmental impact and shape the future of smart cities.</p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="card-hover h-full">
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
                  <p className="text-gray-600">Join a collaborative and innovative culture with opportunities for growth and learning.</p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="card-hover h-full">
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
                  <p className="text-gray-600">Competitive compensation, flexible work arrangements, and comprehensive benefits package.</p>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white relative overflow-hidden">
        <FloatingElements variant="green" density="medium" />
        <Container>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Benefits & Perks</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="card-hover group h-full">
                  <CardBody className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <ul className="space-y-1">
                      {benefit.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Current Openings Section */}
      <Section id="openings" className="bg-gray-50 relative overflow-hidden">
        <FloatingElements variant="purple" density="low" />
        <Container>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-blue-600 font-semibold text-lg mb-4 block">Open Positions</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Current Openings</h2>
          </motion.div>

          <motion.div
            className="grid gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {CAREER_POSITIONS.map((job, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="card-hover group">
                  <CardBody className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">{job.department}</span>
                          <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">{job.location}</span>
                          <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">{job.type}</span>
                          <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">{job.experience}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{job.description}</p>
                      </div>
                      <Button
                        onClick={() => handleApply(job.title)}
                        variant="outline"
                        className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shrink-0"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white relative overflow-hidden">
        <FloatingElements variant="mixed" density="low" />
        <Container>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What Our Team Says</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about their experience working at NodesIO.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="card-hover h-full">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Join Us CTA Section */}
      <Section className="gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <Container className="relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don&apos;t See the Right Role?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We&apos;re always looking for talented individuals to join our team. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGeneralApplication}
                variant="secondary"
                size="lg"
                leftIcon={<Send className="w-5 h-5" />}
                className="bg-white hover:bg-gray-100 text-blue-600 shadow-lg hover:shadow-xl"
              >
                Send Your Resume
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="outline"
                size="lg"
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Job Application Modal */}
      <JobApplication
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
        jobTitle={selectedJob}
        isGeneralApplication={isGeneralApplication}
      />
    </PageLayout>
  );
}