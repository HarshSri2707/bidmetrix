


import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, BarChart3, TrendingUp, CheckCircle, Zap, Sparkles, LineChart } from 'lucide-react';
import SEO from '../components/seo/SEO';
import VideoHeroSection from '../components/sections/VideoHeroSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import LazyImage from '../components/ui/LazyImage';
import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation, useCountAnimation } from '../utils/animations';
import { heroData, problemStatement, uspData, howItWorksData, ctaData } from '../data/homeData';
import { heroImages } from '../data/heroImages';
import hero from '../assets/videos/hero.mp4';
import photo from '../assets/photos/photo.png';
import { pageSEO } from '../data/seoData';

const iconMap = {
  Target, Shield, BarChart3, Zap, TrendingUp
};

// Improved Problem Statement Section - Complete Redesign
const ProblemSection = ({ problemRef, problemVisible, problemStatement }) => (
  <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white" ref={problemRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className={`max-w-4xl mx-auto text-center mb-10 md:mb-14 transition-all duration-1000 ${problemVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Why Choose BidMetrix</span>
        </div> */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
          {problemStatement.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {problemStatement.subtitle}
        </p>
      </div>

      {/* Main Content - Side by Side Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
          
          {/* Left Side - Platform Benefits with Visual */}
          <div className={`transition-all duration-1000 ${problemVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
               style={{ transitionDelay: '200ms' }}>
            
            {/* Image Card - Simple & Clean */}
            <div className="relative mb-6 group">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
                <LazyImage 
                  src={["/assets/home/performance-dashboard.avif"]}
                  alt="Performance Dashboard"
                  className="w-full h-64 sm:h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                
                {/* Overlay Stats */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-bold">Performance Optimized</span>
                  </div>
                  <p className="text-sm text-gray-200">Real-time analytics & AI-powered insights</p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-indigo-600" />
                {problemStatement.comparison.right.title}
              </h3>
              <div className="space-y-3">
                {problemStatement.comparison.right.items.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 transform transition-all duration-500 hover:scale-105 hover:shadow-md opacity-0 ${problemVisible ? 'animate-fade-slide-in' : ''}`}
                    style={{ animationDelay: `${(index + 3) * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className={`transition-all duration-1000 ${problemVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
               style={{ transitionDelay: '400ms' }}>
            
            <div className="grid gap-5">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 rounded-2xl p-6 border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <LineChart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      AI-Powered Optimization
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Machine learning algorithms continuously optimize your campaigns for maximum ROI and performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-6 border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Brand Safety Guaranteed
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Advanced fraud detection and premium inventory ensure your ads appear in safe, high-quality environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Real-Time Analytics
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Track performance metrics in real-time with comprehensive dashboards and actionable insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Scalable Performance
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Scale your campaigns effortlessly with enterprise-grade infrastructure built for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Add keyframes for animation */}
    <style >{`
      @keyframes fade-slide-in {
        from {
          opacity: 0;
          transform: translateX(-10px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .animate-fade-slide-in {
        animation: fade-slide-in 0.5s ease-out;
      }
    `}</style>
  </section>
);

// USP Section Component
const USPSection = ({ uspRef, uspVisible, uspData, iconMap }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white" ref={uspRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${uspVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          {uspData.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {uspData.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {uspData.features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          const colors = ['indigo', 'cyan', 'purple'];
          const color = colors[index];
          return (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                uspVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <Card hover={true} className="h-full group">
                <div className={`w-12 h-12 sm:w-13 sm:h-13 bg-${color}-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${color}-600 transition-all duration-500`} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                  {feature.description}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// How It Works Section Component
const HowItWorksSection = ({ howItWorksRef, visibleSteps, howItWorksData, iconMap }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-white" ref={howItWorksRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          {howItWorksData.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {howItWorksData.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {howItWorksData.steps.map((item, index) => {
          const Icon = iconMap[item.icon];
          const isVisible = visibleSteps.includes(index);
          return (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
            >
              <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4 sm:p-5 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-xl group">
                <div className="text-indigo-600/20 text-4xl sm:text-5xl font-bold mb-2 sm:mb-3 transform transition-transform duration-500 group-hover:scale-110">
                  {item.step}
                </div>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 mb-2 sm:mb-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600 text-justify">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-2.5 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-indigo-300 animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = ({ ctaRef, ctaVisible, ctaData }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
    <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
        {ctaData.title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-5 sm:mb-6 max-w-2xl mx-auto">
        {ctaData.subtitle}
      </p>
      <Link to="/contact">
        <Button 
          variant="secondary" 
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-500 hover:shadow-2xl text-sm sm:text-base group"
          icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />}
        >
          {ctaData.buttonText}
        </Button>
      </Link>
    </div>
  </section>
);

const Home = () => {
  const [problemRef, problemVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [uspRef, uspVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [howItWorksRef, visibleSteps] = useStaggerAnimation(4, 200);
  const [ctaRef, ctaVisible] = useScrollAnimation({ once: true, threshold: 0.3 });

  const [stat1Ref, stat1Count] = useCountAnimation(500);
  const [stat2Ref, stat2Count] = useCountAnimation(99.9);
  const [stat3Ref, stat3Count] = useCountAnimation(50);

  return (
    <>
      {/* <SEO 
        title="BidMetrix.ai - Intelligent Performance Marketing Platform"
        description="Stop guessing. Start converting with BidMetrix, the DSP built for performance. Precision AI targeting and transparent bidding for measurable ROI."
        keywords="DSP, performance marketing, programmatic advertising, ad tech, user acquisition, retargeting, India"
      /> */}
  <SEO 
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        canonical={pageSEO.home.canonical}
        type={pageSEO.home.ogType}
      />
      {/* Video Hero Section */}
      <Suspense fallback={<SkeletonHero />}>
        <VideoHeroSection
          title={heroData.title}
          highlightTitle={heroData.highlightTitle}
          subtitle={heroData.subtitle}
          videoSrc={hero}
          posterSrc={photo}
        >
          {/* Buttons with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact">
              <Button 
                size="lg" 
                icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />}
                className="w-full sm:w-auto text-sm sm:text-base transform transition-all duration-300 hover:shadow-2xl group relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300"
              >
                <span className="relative z-10">Request a Demo</span>
              </Button>
            </Link>
            <Link to="/solutions">
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base transform transition-all duration-300 hover:shadow-2xl group relative overflow-hidden before:absolute before:inset-0 before:bg-indigo-600/10 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300"
              >
                <span className="relative z-10">Explore Solutions</span>
              </Button>
            </Link>
          </div>

          {/* Trust Indicators with Counter Animation */}
          {/* Trust Indicators with Dynamic Animation */}
<div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-3xl mx-auto">
  <div 
    ref={stat1Ref} 
    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 sm:p-3 md:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer relative group overflow-hidden"
  >
    {/* Glowing border on hover */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
    
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Floating particles effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
    </div>
    
    <div className="relative z-10">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
        {stat1Count}K+
      </div>
      <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1 group-hover:text-white transition-colors duration-300">
        {heroData.stats[0].label}
      </div>
    </div>
    
    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-700" />
  </div>

  <div 
    ref={stat2Ref} 
    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 sm:p-3 md:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer relative group overflow-hidden"
  >
    {/* Glowing border on hover */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
    
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Floating particles effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
    </div>
    
    <div className="relative z-10">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
        {stat2Count.toFixed(1)}%
      </div>
      <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1 group-hover:text-white transition-colors duration-300">
        {heroData.stats[1].label}
      </div>
    </div>
    
    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-700" />
  </div>

  <div 
    ref={stat3Ref} 
    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 sm:p-3 md:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer relative group overflow-hidden"
  >
    {/* Glowing border on hover */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
    
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Floating particles effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
    </div>
    
    <div className="relative z-10">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
        {stat3Count}+
      </div>
      <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1 group-hover:text-white transition-colors duration-300">
        {heroData.stats[2].label}
      </div>
    </div>
    
    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-700" />
  </div>
</div>
        </VideoHeroSection>
      </Suspense>

      {/* Problem Statement - Completely Redesigned */}
      <Suspense fallback={<SkeletonSection />}>
        <ProblemSection 
          problemRef={problemRef}
          problemVisible={problemVisible}
          problemStatement={problemStatement}
        />
      </Suspense>

      {/* USP Section */}
      <Suspense fallback={<SkeletonSection />}>
        <USPSection 
          uspRef={uspRef}
          uspVisible={uspVisible}
          uspData={uspData}
          iconMap={iconMap}
        />
      </Suspense>

      {/* How It Works */}
      <Suspense fallback={<SkeletonSection />}>
        <HowItWorksSection 
          howItWorksRef={howItWorksRef}
          visibleSteps={visibleSteps}
          howItWorksData={howItWorksData}
          iconMap={iconMap}
        />
      </Suspense>

      {/* CTA Section */}
      <CTASection 
        ctaRef={ctaRef}
        ctaVisible={ctaVisible}
        ctaData={ctaData}
      />
    </>
  );
};

export default Home;