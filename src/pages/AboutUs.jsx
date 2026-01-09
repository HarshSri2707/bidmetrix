



import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Users, Award, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/sections/HeroSection';
import LazyImage from '../components/ui/LazyImage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
import { heroData, missionData, whoWeAreData, corePillarsData, valuesData, leadershipQuote } from '../data/aboutData';
import { heroImages } from '../data/heroImages';
import { pageSEO } from '../data/seoData';

const iconMap = { Target, Shield, Users, Award, Globe, TrendingUp };

// Mission Section Component
const MissionSection = ({ missionRef, missionVisible, missionData }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-white" ref={missionRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-6 md:mb-8 transition-all duration-1000 ${missionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            {missionData.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4 text-justify">
            {missionData.subtitle}
          </p>
        </div>

        <div className="space-y-3 md:space-y-4 px-4">
          {missionData.content.map((paragraph, index) => (
            <p
              key={index}
              className={`text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-justify transition-all duration-1000 ${
                missionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Who We Are Section Component
const WhoWeAreSection = ({ whoWeAreRef, whoWeAreVisible, whoWeAreData }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white" ref={whoWeAreRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${whoWeAreVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
          {whoWeAreData.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-justify">
          {whoWeAreData.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-8 md:mb-10">
        <div className={`transition-all duration-1000 ${whoWeAreVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}
             style={{ transitionDelay: '200ms' }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <LazyImage
              src={whoWeAreData.image}
              alt="Team working"
              className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
              aspectRatio="4/3"
            />
          </div>
        </div>
        <div className={`transition-all duration-1000 px-4 md:px-0 ${whoWeAreVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
             style={{ transitionDelay: '400ms' }}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Human Expertise Meets Machine Learning
          </h3>
          {whoWeAreData.content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 md:mb-4 text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Premium Pillar Card - Google/Stripe Style
const PillarCard = ({ pillar, index, isVisible, iconMap }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[pillar.icon];

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-full bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden group cursor-pointer"
        style={{
          border: '1px solid rgba(226, 232, 240, 0.8)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isHovered 
            ? '0 20px 50px -12px rgba(79, 70, 229, 0.15), 0 10px 20px -8px rgba(0, 0, 0, 0.04)' 
            : '0 1px 3px rgba(0, 0, 0, 0.05)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Gradient overlay on hover - premium effect */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.02) 0%, rgba(6, 182, 212, 0.02) 100%)',
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Animated gradient border */}
        <div 
          className="absolute inset-0 rounded-2xl transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
            opacity: isHovered ? 0.1 : 0,
            padding: '1.5px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Icon container with floating animation */}
        <div className="relative mb-6">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center relative"
            style={{
              background: isHovered 
                ? 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)'
                : 'linear-gradient(135deg, #EEF2FF 0%, #E0F2FE 100%)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: isHovered ? 'scale(1.05) rotate(-2deg)' : 'scale(1) rotate(0deg)',
              animation: isVisible ? 'float 3s ease-in-out infinite' : 'none',
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Icon 
              className="w-7 h-7 transition-all duration-500"
              style={{
                color: isHovered ? '#FFFFFF' : '#4F46E5',
              }}
            />
          </div>
        </div>

        {/* Content with smooth transitions */}
        <div className="relative z-10">
          <h3 
            className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-500"
            style={{
              color: isHovered ? '#4F46E5' : '#111827',
            }}
          >
            {pillar.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {pillar.description}
          </p>
        </div>

        {/* Subtle bottom accent line */}
        <div 
          className="absolute bottom-0 left-0 h-1 transition-all duration-700"
          style={{
            width: isHovered ? '100%' : '0%',
            background: 'linear-gradient(90deg, #4F46E5 0%, #06B6D4 100%)',
          }}
        />
      </div>
    </div>
  );
};

// Core Pillars Section with Enterprise Animation
const CorePillarsSection = ({ pillarsRef, visiblePillars, corePillarsData, iconMap }) => {
  const [allVisible, setAllVisible] = useState(false);

  useEffect(() => {
    if (visiblePillars.length === corePillarsData.pillars.length) {
      setAllVisible(true);
    }
  }, [visiblePillars, corePillarsData.pillars.length]);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
      
      <section className="py-8 sm:py-12 md:py-14 bg-white overflow-hidden" ref={pillarsRef}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Heading with fade-in */}
          <div 
            className="text-center mb-8 md:mb-10 transition-all duration-1000"
            style={{
              opacity: allVisible ? 1 : 0,
              transform: allVisible ? 'translateY(0)' : 'translateY(-20px)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
              {corePillarsData.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {corePillarsData.subtitle}
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {corePillarsData.pillars.map((pillar, index) => (
              <PillarCard
                key={index}
                pillar={pillar}
                index={index}
                isVisible={visiblePillars.includes(index)}
                iconMap={iconMap}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Values Section Component
const ValuesSection = ({ valuesRef, visibleValues, valuesData, iconMap }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white" ref={valuesRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
          {valuesData.title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {valuesData.values.map((value, index) => {
          const Icon = iconMap[value.icon];
          const isVisible = visibleValues.includes(index);
          return (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
            >
              <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-3 duration-500 h-full group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-indigo-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transform transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 text-justify">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Leadership Quote Section Component
const LeadershipQuoteSection = ({ quoteRef, quoteVisible, leadershipQuote }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-indigo-600 to-cyan-500" ref={quoteRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${quoteVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <blockquote className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-4 sm:mb-5 leading-relaxed px-4 text-justify">
          "{leadershipQuote.quote}"
        </blockquote>
        <cite className="text-sm sm:text-base md:text-lg text-indigo-200 not-italic">
          — {leadershipQuote.author}
        </cite>
      </div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = ({ ctaRef, ctaVisible }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-white" ref={ctaRef}>
    <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
        Ready to Partner with Us?
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-5 sm:mb-6 max-w-2xl mx-auto text-justify">
        Join the growing community of performance marketers who trust BidMetrix.ai
      </p>
      <Link to="/contact">
        <Button
          size="lg"
          icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
          className="transform transition-all duration-500 hover:shadow-2xl text-sm sm:text-base"
        >
          Request a Demo
        </Button>
      </Link>
    </div>
  </section>
);

const AboutUs = () => {
  const [missionRef, missionVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [whoWeAreRef, whoWeAreVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [pillarsRef, visiblePillars] = useStaggerAnimation(3, 200);
  const [valuesRef, visibleValues] = useStaggerAnimation(4, 150);
  const [quoteRef, quoteVisible] = useScrollAnimation({ once: true, threshold: 0.3 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ once: true, threshold: 0.3 });

  return (
    <>
       <SEO 
        title={pageSEO.aboutUs.title}
        description={pageSEO.aboutUs.description}
        keywords={pageSEO.aboutUs.keywords}
        canonical={pageSEO.aboutUs.canonical}
        type={pageSEO.aboutUs.ogType}
      />

      {/* Hero Section */}
      <Suspense fallback={<SkeletonHero />}>
        <HeroSection
          title={heroData.title}
          highlightTitle={heroData.highlightTitle}
          subtitle={heroData.subtitle}
          image={heroImages.about}
          size="medium"
        />
      </Suspense>

      {/* Mission Statement */}
      <Suspense fallback={<SkeletonSection />}>
        <MissionSection
          missionRef={missionRef}
          missionVisible={missionVisible}
          missionData={missionData}
        />
      </Suspense>

      {/* Who We Are */}
      <Suspense fallback={<SkeletonSection />}>
        <WhoWeAreSection
          whoWeAreRef={whoWeAreRef}
          whoWeAreVisible={whoWeAreVisible}
          whoWeAreData={whoWeAreData}
        />
      </Suspense>

      {/* Core Pillars */}
      <Suspense fallback={<SkeletonSection />}>
        <CorePillarsSection
          pillarsRef={pillarsRef}
          visiblePillars={visiblePillars}
          corePillarsData={corePillarsData}
          iconMap={iconMap}
        />
      </Suspense>

      {/* Values */}
      <Suspense fallback={<SkeletonSection />}>
        <ValuesSection
          valuesRef={valuesRef}
          visibleValues={visibleValues}
          valuesData={valuesData}
          iconMap={iconMap}
        />
      </Suspense>

      {/* Leadership Quote */}
      <LeadershipQuoteSection
        quoteRef={quoteRef}
        quoteVisible={quoteVisible}
        leadershipQuote={leadershipQuote}
      />

      {/* CTA Section */}
      <CTASection
        ctaRef={ctaRef}
        ctaVisible={ctaVisible}
      />
    </>
  );
};

export default AboutUs;