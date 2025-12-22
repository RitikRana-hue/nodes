"use client";

import { useState } from 'react';
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Card, { CardBody } from "@/components/ui/Card";
import FloatingElements from "@/components/ui/FloatingElements";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Users, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer, CONTACT_SUBJECTS } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <PageLayout fullViewport>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50 relative overflow-hidden">
        <FloatingElements variant="mixed" density="medium" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/80 z-10"></div>

        <Container className="relative z-20 w-full">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Get in Touch with
              <span className="text-blue-600"> NodesIO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your waste management operations? Connect with our team of IoT experts to discuss how we can optimize your systems for maximum efficiency and sustainability.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Information & Form Section */}
      <Section className="bg-white relative overflow-hidden">
        <FloatingElements variant="blue" density="low" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with our team through multiple channels. We&apos;re committed to providing prompt, professional responses to all inquiries about our IoT solutions.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border border-gray-200">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start space-x-3">
                        <Phone className="w-4 h-4 text-gray-600 mt-1" />
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-1">Phone Support</h3>
                          <p className="text-gray-600 text-sm mb-2">Direct line for immediate assistance</p>
                          <a href="tel:+917291897879" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                            +91 72918-97879
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start space-x-3">
                        <Mail className="w-4 h-4 text-gray-600 mt-1" />
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-1">Email Support</h3>
                          <p className="text-gray-600 text-sm mb-2">Send detailed inquiries and documentation</p>
                          <a href="mailto:support@nodesio.in" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                            support@nodesio.in
                          </a>
                        </div>
                      </div>

                      {/* Office */}
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-gray-600 mt-1" />
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-1">Corporate Office</h3>
                          <p className="text-gray-600 text-sm mb-2">Visit our development center</p>
                          <p className="text-gray-700 font-medium text-sm">
                            Ballabgarh, Faridabad<br />
                            Haryana, India 121004
                          </p>
                        </div>
                      </div>

                      {/* Business Hours */}
                      <div className="flex items-start space-x-3">
                        <Clock className="w-4 h-4 text-gray-600 mt-1" />
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-1">Business Hours</h3>
                          <p className="text-gray-600 text-sm mb-2">Professional support when you need it</p>
                          <div className="text-gray-700 font-medium text-sm">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                            <p>Saturday & Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="shadow-2xl relative overflow-hidden">
                <CardBody className="p-8 md:p-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-green-100 rounded-full blur-2xl opacity-30"></div>
                  <div className="relative z-10">
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                        Send Us a Message
                      </h3>
                      <p className="text-gray-600">
                        Complete the form below and our team will respond within 24 hours with tailored solutions for your requirements.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Status Message */}
                      {submitStatus !== 'idle' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-4 rounded-lg flex items-center space-x-3 ${submitStatus === 'success'
                              ? 'bg-green-50 border border-green-200 text-green-800'
                              : 'bg-red-50 border border-red-200 text-red-800'
                            }`}
                        >
                          {submitStatus === 'success' ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className="text-sm font-medium">{statusMessage}</span>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="form-label">
                            First Name *
                          </label>
                          <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="bg-gray-50 hover:bg-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="form-label">
                            Last Name *
                          </label>
                          <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="bg-gray-50 hover:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="john.doe@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-gray-50 hover:bg-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="form-label">
                          Company/Organization
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-50 hover:bg-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="form-label">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-select bg-gray-50 hover:bg-white"
                        >
                          <option value="">Select a topic...</option>
                          {CONTACT_SUBJECTS.map((subject) => (
                            <option key={subject.value} value={subject.value}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="form-label">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell us about your project, requirements, or any questions you have..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-gray-50 hover:bg-white"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                        leftIcon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                        className="shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Additional Contact Options */}
      <Section className="bg-gray-50 relative overflow-hidden">
        <FloatingElements variant="green" density="low" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Additional Support Channels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access professional support through multiple communication channels designed for your convenience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="card-hover group h-full">
                <CardBody className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Live Support</h3>
                  <p className="text-gray-600 mb-6">
                    Connect instantly with our technical experts for real-time assistance and consultation during business hours.
                  </p>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 group-hover:translate-x-1"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Start Consultation
                  </Button>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="card-hover group h-full">
                <CardBody className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    Schedule a comprehensive consultation with our IoT specialists to discuss customized solutions for your organization.
                  </p>
                  <Button
                    variant="ghost"
                    className="text-green-600 hover:text-green-700 group-hover:translate-x-1"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Schedule Meeting
                  </Button>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="card-hover group h-full">
                <CardBody className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Technical Resources</h3>
                  <p className="text-gray-600 mb-6">
                    Access our comprehensive technical documentation, case studies, and implementation guides.
                  </p>
                  <Button
                    as={Link}
                    href="/blog"
                    variant="ghost"
                    className="text-purple-600 hover:text-purple-700 group-hover:translate-x-1"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    View Resources
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </PageLayout>
  );
}