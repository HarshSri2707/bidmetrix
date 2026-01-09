import React, { useEffect, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Database, Target, Zap, TrendingUp, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/sections/HeroSection';
import LazyImage from '../components/ui/LazyImage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
import { heroImages } from '../data/heroImages';
import { heroData, aiBidEngineData, audienceDataStudioData, ctaData } from '../data/technologyData';
import { pageSEO } from '../data/seoData';

const iconMap = { Brain, Database, Target, Zap, TrendingUp, Shield, Users, CheckCircle };

const Technology = () => {
  const location = useLocation();
  
  const [aiEngineRef, aiEngineVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [bidLogicRef, visibleBidLogic] = useStaggerAnimation(3, 200);
  const [benefitsRef, visibleBenefits] = useStaggerAnimation(4, 150);
  const [audienceRef, audienceVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [capabilitiesRef, visibleCapabilities] = useStaggerAnimation(3, 200);
  const [ctaRef, ctaVisible] = useScrollAnimation({ once: true, threshold: 0.3 });

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
        <SEO 
        title={pageSEO.technology.title}
        description={pageSEO.technology.description}
        keywords={pageSEO.technology.keywords}
        canonical={pageSEO.technology.canonical}
        type={pageSEO.technology.ogType}
      />

      {/* Hero Section */}
      <Suspense fallback={<SkeletonHero />}>
        <HeroSection
          title={heroData.title}
          highlightTitle={heroData.highlightTitle}
          subtitle={heroData.subtitle}
          image={heroImages.technology}
          size="medium"
        />
      </Suspense>

      {/* AI Bid Engine Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section id="ai-bid-engine" className="py-8 sm:py-12 md:py-14 bg-white scroll-mt-16" ref={aiEngineRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className={`transition-all duration-1000 ${aiEngineVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                  <Brain className="w-4 h-4 mr-2" />
                  {aiBidEngineData.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
                  {aiBidEngineData.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-5 leading-relaxed text-justify">
                  {aiBidEngineData.description}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-7 text-justify">
                  {aiBidEngineData.additionalInfo}
                </p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:shadow-xl">
                    Explore AI Engine
                  </Button>
                </Link>
              </div>
              <div className={`transition-all duration-1000 ${aiEngineVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
                   style={{ transitionDelay: '300ms' }}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <LazyImage 
                    src={aiBidEngineData.image}
                    alt="AI Bid Engine"
                    className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
            </div>

            {/* Smart Bid Logic */}
            <div className="mt-10 md:mt-12" ref={bidLogicRef}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                The Smart Bid Logic - How It Works
              </h3>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {aiBidEngineData.bidLogic.map((logic, index) => {
                  const Icon = iconMap[logic.icon];
                  const isVisible = visibleBidLogic.includes(index);
                  const colors = ['purple', 'blue', 'indigo'];
                  const color = colors[index];
                  return (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                      <Card hover={true} className="h-full group">
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-600`} />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{logic.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 text-justify">{logic.description}</p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Benefits */}
            <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" ref={benefitsRef}>
              {aiBidEngineData.benefits.map((benefit, index) => {
                const isVisible = visibleBenefits.includes(index);
                return (
                  <div key={index} className={`bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 text-justify">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Audience Data Studio Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section id="audience-data-studio" className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white scroll-mt-16" ref={audienceRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className={`order-2 md:order-1 transition-all duration-1000 ${audienceVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}
                   style={{ transitionDelay: '300ms' }}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <LazyImage 
                    src={audienceDataStudioData.image}
                    alt="Audience Data Studio"
                    className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
              <div className={`order-1 md:order-2 transition-all duration-1000 ${audienceVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                  <Database className="w-4 h-4 mr-2" />
                  {audienceDataStudioData.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
                  {audienceDataStudioData.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-5 leading-relaxed text-justify">
                  {audienceDataStudioData.description}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-7 text-justify">
                  {audienceDataStudioData.additionalInfo}
                </p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:shadow-xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Capabilities */}
            <div className="mt-10 md:mt-12" ref={capabilitiesRef}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                Powerful Audience Capabilities
              </h3>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {audienceDataStudioData.capabilities.map((capability, index) => {
                  const Icon = iconMap[capability.icon];
                  const isVisible = visibleCapabilities.includes(index);
                  const colors = ['cyan', 'blue', 'indigo'];
                  const color = colors[index];
                  return (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                      <Card hover={true} className="h-full group">
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-600`} />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{capability.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 text-justify">{capability.description}</p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-10 md:mt-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {audienceDataStudioData.features.map((feature, index) => (
                  <div key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-sm sm:text-base text-gray-700 text-justify">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
        <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {ctaData.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-justify">
            {ctaData.subtitle}
          </p>
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-500 hover:shadow-2xl"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {ctaData.buttonText}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Technology;