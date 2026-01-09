


import React, { Suspense, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Target, RefreshCw, Shield, CheckCircle, TrendingUp, Users, Filter, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/sections/HeroSection';
import LazyImage from '../components/ui/LazyImage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
import { heroData, userAcquisitionData, retargetingData, brandSafetyData, ctaData } from '../data/solutionsData';
import { heroImages } from '../data/heroImages';
import { pageSEO } from '../data/seoData';

const iconMap = { Target, RefreshCw, Shield, CheckCircle, TrendingUp, Users, Filter };

// User Acquisition Section Component
const UserAcquisitionSection = ({ uaRef, uaVisible, uaFeaturesRef, visibleUaFeatures, userAcquisitionData, iconMap }) => (
  <section id="user-acquisition" className="py-8 sm:py-12 md:py-14 bg-white scroll-mt-16" ref={uaRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className={`transition-all duration-1000 ${uaVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            {userAcquisitionData.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
            {userAcquisitionData.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-7 leading-relaxed text-justify">
            {userAcquisitionData.description}
          </p>
          <Link to="/contact">
            <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500  hover:shadow-xl">
              Get Started
            </Button>
          </Link>
        </div>
        <div className={`transition-all duration-1000 ${uaVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
             style={{ transitionDelay: '300ms' }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <LazyImage 
              src={userAcquisitionData.image}
              alt="User acquisition"
              className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 md:mt-12" ref={uaFeaturesRef}>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-4">
          How We Drive High-Intent Leads
        </h3>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {userAcquisitionData.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const isVisible = visibleUaFeatures.includes(index);
            const colors = ['purple', 'blue', 'green'];
            const color = colors[index];
            return (
              <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                <Card hover={true} className="h-full group">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-600`} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600 text-justify">{feature.description}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-8 md:mt-10 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-5 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Why the Right Choice Matters</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-5 text-justify">Many DSPs flood you with low-quality traffic. BidMetrix.ai offers:</p>
        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          {userAcquisitionData.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
              <span className="text-sm sm:text-base text-gray-700 text-justify">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Retargeting Section Component
const RetargetingSection = ({ retargetingRef, retargetingVisible, retargetingFeaturesRef, visibleRetargetingFeatures, retargetingData }) => (
  <section id="retargeting" className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white scroll-mt-16" ref={retargetingRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className={`order-2 md:order-1 transition-all duration-1000 ${retargetingVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}
             style={{ transitionDelay: '300ms' }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <LazyImage 
              src={retargetingData.image}
              alt="Retargeting"
              className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
              aspectRatio="4/3"
            />
          </div>
        </div>
        <div className={`order-1 md:order-2 transition-all duration-1000 ${retargetingVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            <RefreshCw className="w-4 h-4 mr-2" />
            {retargetingData.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">{retargetingData.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-5 leading-relaxed text-justify">{retargetingData.description}</p>
          <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-7 text-justify">{retargetingData.additionalInfo}</p>
          <Link to="/contact">
            <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500  hover:shadow-xl">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" ref={retargetingFeaturesRef}>
        {retargetingData.features.map((item, index) => {
          const isVisible = visibleRetargetingFeatures.includes(index);
          return (
            <div key={index} className={`bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 text-justify">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Brand Safety Section Component
const BrandSafetySection = ({ brandSafetyRef, brandSafetyVisible, protectionRef, visibleProtection, brandSafetyData, iconMap }) => (
  <section id="brand-safety" className="py-8 sm:py-12 md:py-14 bg-white scroll-mt-16" ref={brandSafetyRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className={`transition-all duration-1000 ${brandSafetyVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            {brandSafetyData.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">{brandSafetyData.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-5 leading-relaxed text-justify">{brandSafetyData.description}</p>
          <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-7 text-justify">{brandSafetyData.additionalInfo}</p>
          <Link to="/contact">
            <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500  hover:shadow-xl">
              Protect Your Ads
            </Button>
          </Link>
        </div>
        <div className={`transition-all duration-1000 ${brandSafetyVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
             style={{ transitionDelay: '300ms' }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <LazyImage 
              src={brandSafetyData.image}
              alt="Brand safety"
              className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-12" ref={protectionRef}>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-4">Multi-Layer Protection</h3>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {brandSafetyData.protectionFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const isVisible = visibleProtection.includes(index);
            const colors = ['red', 'orange', 'yellow'];
            const color = colors[index];
            return (
              <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                <Card hover={true} className="h-full group">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-600`} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600 text-justify">{feature.description}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = ({ ctaRef, ctaVisible, ctaData }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
    <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-5">{ctaData.title}</h2>
      <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 md:mb-7 max-w-2xl mx-auto text-justify">{ctaData.subtitle}</p>
      <Link to="/contact">
        <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-500  hover:shadow-2xl" icon={<ArrowRight className="w-5 h-5" />}>
          {ctaData.buttonText}
        </Button>
      </Link>
    </div>
  </section>
);

const Solutions = () => {
  const location = useLocation();
  const [uaRef, uaVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [uaFeaturesRef, visibleUaFeatures] = useStaggerAnimation(3, 200);
  const [retargetingRef, retargetingVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [retargetingFeaturesRef, visibleRetargetingFeatures] = useStaggerAnimation(4, 150);
  const [brandSafetyRef, brandSafetyVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [protectionRef, visibleProtection] = useStaggerAnimation(3, 200);
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
        title={pageSEO.solutions.title}
        description={pageSEO.solutions.description}
        keywords={pageSEO.solutions.keywords}
        canonical={pageSEO.solutions.canonical}
        type={pageSEO.solutions.ogType}
      />

      {/* Hero */}
      <Suspense fallback={<SkeletonHero />}>
        <HeroSection
          title={heroData.title}
          highlightTitle={heroData.highlightTitle}
          subtitle={heroData.subtitle}
          image={heroImages.solutions}
          size="medium"
        />
      </Suspense>

      {/* User Acquisition */}
      <Suspense fallback={<SkeletonSection />}>
        <UserAcquisitionSection 
          uaRef={uaRef}
          uaVisible={uaVisible}
          uaFeaturesRef={uaFeaturesRef}
          visibleUaFeatures={visibleUaFeatures}
          userAcquisitionData={userAcquisitionData}
          iconMap={iconMap}
        />
      </Suspense>

      {/* Retargeting */}
      <Suspense fallback={<SkeletonSection />}>
        <RetargetingSection 
          retargetingRef={retargetingRef}
          retargetingVisible={retargetingVisible}
          retargetingFeaturesRef={retargetingFeaturesRef}
          visibleRetargetingFeatures={visibleRetargetingFeatures}
          retargetingData={retargetingData}
        />
      </Suspense>

      {/* Brand Safety */}
      <Suspense fallback={<SkeletonSection />}>
        <BrandSafetySection 
          brandSafetyRef={brandSafetyRef}
          brandSafetyVisible={brandSafetyVisible}
          protectionRef={protectionRef}
          visibleProtection={visibleProtection}
          brandSafetyData={brandSafetyData}
          iconMap={iconMap}
        />
      </Suspense>

      {/* CTA */}
      <CTASection 
        ctaRef={ctaRef}
        ctaVisible={ctaVisible}
        ctaData={ctaData}
      />
    </>
  );
};

export default Solutions;