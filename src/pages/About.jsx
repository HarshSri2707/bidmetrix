import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Users, Award, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import LazyImage from '../components/ui/LazyImage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
import { heroData, missionData, whoWeAreData, corePillarsData, valuesData, leadershipQuote } from '../data/aboutData';

const iconMap = { Target, Shield, Users, Award, Globe, TrendingUp };

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });
  const [missionRef, missionVisible] = useScrollAnimation({ once: true });
  const [whoWeAreRef, whoWeAreVisible] = useScrollAnimation({ once: true });
  const [pillarsRef, visiblePillars] = useStaggerAnimation(3, 200);
  const [valuesRef, visibleValues] = useStaggerAnimation(4, 150);
  const [quoteRef, quoteVisible] = useScrollAnimation({ once: true });
  const [ctaRef, ctaVisible] = useScrollAnimation({ once: true });

  return (
    <>
      <SEO 
        title="About BidMetrix.ai - Empowering Marketers with Intelligent Reach"
        description="Learn about BidMetrix.ai, the Indian DSP built for precision performance. We democratize access to premium inventory and enterprise-grade AI."
        keywords="about BidMetrix, DSP company, ad tech India, programmatic advertising platform"
      />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center overflow-hidden" ref={heroRef}>
        <LazyImage 
          src={heroData.image}
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        
        <div className={`container-custom relative z-10 transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {heroData.title}
            <span className="block gradient-text bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {heroData.highlightTitle}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {heroData.subtitle}
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white" ref={missionRef}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${missionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {missionData.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {missionData.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {missionData.content.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                    missionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white" ref={whoWeAreRef}>
        <div className="container-custom">
          <div className={`text-center mb-16 transition-all duration-700 ${whoWeAreVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {whoWeAreData.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {whoWeAreData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className={`transition-all duration-700 delay-200 ${whoWeAreVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <LazyImage 
                  src={whoWeAreData.image}
                  alt="Team working"
                  className="rounded-2xl shadow-xl relative"
                  aspectRatio="4/3"
                />
              </div>
            </div>
            <div className={`transition-all duration-700 delay-400 ${whoWeAreVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Human Expertise Meets Machine Learning
              </h3>
              {whoWeAreData.content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section-padding bg-white" ref={pillarsRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {corePillarsData.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {corePillarsData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corePillarsData.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon];
              const isVisible = visiblePillars.includes(index);
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <Card hover={true} className="h-full group">
                    <div className={`w-14 h-14 bg-${index === 0 ? 'blue' : index === 1 ? 'indigo' : 'cyan'}-100 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className={`w-7 h-7 text-${index === 0 ? 'blue' : index === 1 ? 'indigo' : 'cyan'}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white" ref={valuesRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {valuesData.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesData.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              const isVisible = visibleValues.includes(index);
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-2 duration-300 h-full">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 transform transition-transform duration-300 hover:rotate-12">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={quoteRef}>
        <div className="container-custom">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${quoteVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="text-6xl text-white/20 mb-6 animate-pulse">"</div>
            <blockquote className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
              {leadershipQuote.quote}
            </blockquote>
            <cite className="text-indigo-200 text-lg not-italic">
              — {leadershipQuote.author}
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white" ref={ctaRef}>
        <div className={`container-custom text-center transition-all duration-700 ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing community of performance marketers who trust BidMetrix.ai
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="transform transition-all duration-300 hover:scale-105"
            >
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;