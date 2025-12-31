import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, BarChart3, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import SEO from '../components/seo/SEO';
import LazyVideo from '../components/ui/LazyVideo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useScrollAnimation, useStaggerAnimation, useCountAnimation } from '../utils/animations';
import { heroData, problemStatement, uspData, howItWorksData, ctaData } from '../data/homeData';

const iconMap = {
  Target, Shield, BarChart3, Zap, TrendingUp
};

const Home = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });
  const [problemRef, problemVisible] = useScrollAnimation({ once: true });
  const [uspRef, uspVisible] = useScrollAnimation({ once: true });
  const [howItWorksRef, visibleSteps] = useStaggerAnimation(4, 150);
  const [ctaRef, ctaVisible] = useScrollAnimation({ once: true });

  const [stat1Ref, stat1Count] = useCountAnimation(500);
  const [stat2Ref, stat2Count] = useCountAnimation(99.9);
  const [stat3Ref, stat3Count] = useCountAnimation(50);

  return (
    <>
      <SEO 
        title="BidMetrix.ai - Intelligent Performance Marketing Platform"
        description="Stop guessing. Start converting with BidMetrix, the DSP built for performance. Precision AI targeting and transparent bidding for measurable ROI."
        keywords="DSP, performance marketing, programmatic advertising, ad tech, user acquisition, retargeting, India"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyVideo 
            src={heroData.video.src}
            poster={heroData.video.poster}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10" ref={heroRef}>
          <div className={`max-w-3xl transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {heroData.title}
              <span className="block gradient-text bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {heroData.highlightTitle}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {heroData.subtitle}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link to="/contact">
                <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Request a Demo
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="secondary" size="lg">
                  Explore Solutions
                </Button>
              </Link>
            </div>

            {/* Trust Indicators with Counter Animation */}
            <div className={`mt-12 flex flex-wrap gap-8 text-gray-300 transition-all duration-1000 delay-600 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div ref={stat1Ref}>
                <div className="text-3xl font-bold text-white">{stat1Count}K+</div>
                <div className="text-sm">{heroData.stats[0].label}</div>
              </div>
              <div ref={stat2Ref}>
                <div className="text-3xl font-bold text-white">{stat2Count.toFixed(1)}%</div>
                <div className="text-sm">{heroData.stats[1].label}</div>
              </div>
              <div ref={stat3Ref}>
                <div className="text-3xl font-bold text-white">{stat3Count}+</div>
                <div className="text-sm">{heroData.stats[2].label}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-white" ref={problemRef}>
        <div className="container-custom">
          <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${problemVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {problemStatement.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {problemStatement.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className={`transition-all duration-700 delay-200 ${problemVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              <Card className="bg-red-50 border-red-100 h-full">
                <div className="text-red-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problemStatement.comparison.wrong.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {problemStatement.comparison.wrong.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className={`transition-all duration-700 delay-400 ${problemVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <Card className="bg-green-50 border-green-100 h-full">
                <div className="text-green-600 mb-4">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problemStatement.comparison.right.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {problemStatement.comparison.right.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white" ref={uspRef}>
        <div className="container-custom">
          <div className={`text-center mb-16 transition-all duration-700 ${uspVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {uspData.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {uspData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {uspData.features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    uspVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <Card hover={true}>
                    <div className={`w-14 h-14 bg-${index === 0 ? 'indigo' : index === 1 ? 'cyan' : 'purple'}-100 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110`}>
                      <Icon className={`w-7 h-7 text-${index === 0 ? 'indigo' : index === 1 ? 'cyan' : 'purple'}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white" ref={howItWorksRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {howItWorksData.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {howItWorksData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksData.steps.map((item, index) => {
              const Icon = iconMap[item.icon];
              const isVisible = visibleSteps.includes(index);
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="text-indigo-600/20 text-6xl font-bold mb-4">{item.step}</div>
                    <Icon className="w-8 h-8 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-indigo-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
        <div className={`container-custom text-center transition-all duration-700 ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {ctaData.title}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            {ctaData.subtitle}
          </p>
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-300 hover:scale-105"
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

export default Home;