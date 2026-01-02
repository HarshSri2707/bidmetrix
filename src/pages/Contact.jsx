import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/sections/HeroSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
import { heroImages } from '../data/heroImages';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [processRef, processVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [stepsRef, visibleSteps] = useStaggerAnimation(3, 200);
  const [formRef, formVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ once: true, threshold: 0.3 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'A brief chat to understand your CPA/ROAS goals and current challenges'
    },
    {
      step: '02',
      title: 'Audit',
      desc: 'We analyze your current strategy to identify wasted spend and opportunities'
    },
    {
      step: '03',
      title: 'Launch',
      desc: 'We set up your pilot campaign on BidMetrix.ai and start driving results'
    }
  ];

  const benefits = [
    'No long-term contracts required',
    '24/7 technical support',
    'Transparent pricing, no hidden fees',
    'Free initial campaign audit',
    'Dedicated account manager'
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Request a Demo | BidMetrix.ai"
        description="Get in touch with BidMetrix.ai. Request a demo and discover how our intelligent DSP can transform your performance marketing"
        keywords="contact BidMetrix, request demo, DSP demo, performance marketing consultation"
      />

      {/* Hero Section */}
      <Suspense fallback={<SkeletonHero />}>
        <HeroSection
          title="Ready to Upgrade Your"
          highlightTitle="Performance Marketing?"
          subtitle="You've seen the data. You know the risks. Now, make the right decision for your growth."
          image={heroImages.contact}
          size="medium"
        />
      </Suspense>

      {/* Process Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section className="section-padding bg-white" ref={processRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                What Happens Next?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven onboarding process ensures you see results quickly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16" ref={stepsRef}>
              {processSteps.map((item, index) => {
                const isVisible = visibleSteps.includes(index);
                return (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
                    }`}
                  >
                    <Card className="text-center h-full group hover:shadow-xl transition-all duration-500">
                      <div className="text-5xl sm:text-6xl font-bold text-indigo-600/20 mb-4 transform transition-transform duration-500 group-hover:scale-110">
                        {item.step}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {item.desc}
                      </p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Contact Form Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white" ref={formRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Contact Information */}
              <div className={`transition-all duration-1000 ${formVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Let's Connect
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Fill out the form and our team will reach out within 24 hours. Make the intelligent move—don't leave your performance to chance.
                </p>

                <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-4 transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:hello@bidmetrix.ai" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                        hello@bidmetrix.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
                      <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+911234567890" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        Mumbai, Maharashtra<br />India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <Card className="bg-gradient-to-br from-indigo-50 to-cyan-50 border-indigo-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                  <h3 className="font-bold text-gray-900 mb-4">Why Partner with Us?</h3>
                  <ul className="space-y-3">
                    {benefits.map((item, index) => (
                      <li key={index} className="flex items-center text-sm sm:text-base text-gray-700 transform transition-all duration-300 hover:translate-x-2">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Contact Form */}
              <div className={`transition-all duration-1000 ${formVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                   style={{ transitionDelay: '300ms' }}>
                <Card className="sticky top-24 transform transition-all duration-500 hover:shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    Request a Platform Demo
                  </h3>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3 animate-fade-in">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-900">Thank you for your interest!</h4>
                        <p className="text-sm text-green-700 mt-1">
                          We've received your request and will get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your campaign goals and challenges..."
                      ></textarea>
                    </div>

                    <Button 
                      onClick={handleSubmit}
                      className="w-full transform transition-all duration-500  hover:shadow-xl"
                      size="lg"
                      disabled={loading}
                      icon={loading ? null : <ArrowRight className="w-5 h-5" />}
                    >
                      {loading ? 'Submitting...' : 'Request Demo'}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our Privacy Policy
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
        <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Make the Intelligent Move
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Don't leave your performance to chance. Partner with a DSP that cares about your bottom line as much as you do.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;