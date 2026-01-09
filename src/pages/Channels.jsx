



import React, { useEffect, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Video, Layout, CheckCircle, TrendingUp, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/sections/HeroSection';
import LazyImage from '../components/ui/LazyImage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
import { heroImages } from '../data/heroImages';
import { pageSEO } from '../data/seoData';

const Channels = () => {
  const location = useLocation();
  
  const [mobileRef, mobileVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [mobileFeaturesRef, visibleMobileFeatures] = useStaggerAnimation(3, 200);
  const [videoRef, videoVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [videoFeaturesRef, visibleVideoFeatures] = useStaggerAnimation(4, 150);
  const [nativeRef, nativeVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [formatsRef, visibleFormats] = useStaggerAnimation(3, 200);
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
        title={pageSEO.channels.title}
        description={pageSEO.channels.description}
        keywords={pageSEO.channels.keywords}
        canonical={pageSEO.channels.canonical}
        type={pageSEO.channels.ogType}
      />

      {/* Hero Section */}
      <Suspense fallback={<SkeletonHero />}>
        <HeroSection
          title="Reach Your Audience"
          highlightTitle="Wherever They Are"
          subtitle="Premium inventory across all major digital channels and formats"
          image={heroImages.channels}
          size="medium"
        />
      </Suspense>

      {/* Mobile & In-App Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section id="mobile" className="py-8 sm:py-12 md:py-14 bg-white scroll-mt-16" ref={mobileRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className={`transition-all duration-1000 ${mobileVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile & In-App
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
                  Capture Mobile-First Audiences
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-5 leading-relaxed text-justify">
                  With over 70% of digital time spent on mobile devices, reaching users on their smartphones and tablets is no longer optional—it's essential.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-7 text-justify">
                  BidMetrix.ai provides direct access to premium mobile web and in-app inventory across India's top publishers and app ecosystems. From casual games to news apps to e-commerce platforms, we help you reach engaged users in the moments that matter.
                </p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:shadow-xl">
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className={`transition-all duration-1000 ${mobileVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
                   style={{ transitionDelay: '300ms' }}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <LazyImage 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                    alt="Mobile app usage"
                    className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Features */}
            <div className="mt-10 md:mt-12" ref={mobileFeaturesRef}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                Mobile Advertising Advantages
              </h3>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {[
                  { icon: Smartphone, title: 'Native Mobile Formats', desc: 'Banner, interstitial, rewarded video, and native ads that feel natural within the app experience.', color: 'blue' },
                  { icon: Users, title: 'Device-Level Targeting', desc: 'Reach users based on device type, OS, carrier, and connection type for precise audience segmentation.', color: 'purple' },
                  { icon: TrendingUp, title: 'App Install Campaigns', desc: 'Drive high-quality app installs with optimized CPI bidding and deep-link attribution tracking.', color: 'green' }
                ].map((feature, index) => {
                  const isVisible = visibleMobileFeatures.includes(index);
                  return (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                      <Card hover={true} className="h-full group">
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                          <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${feature.color}-600`} />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 text-justify">{feature.desc}</p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 md:mt-12 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-6 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">500M+</div>
                  <div className="text-sm sm:text-base text-gray-600">Daily Mobile Users</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">5000+</div>
                  <div className="text-sm sm:text-base text-gray-600">Premium Apps</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">70%</div>
                  <div className="text-sm sm:text-base text-gray-600">Mobile Time Spent</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">95%</div>
                  <div className="text-sm sm:text-base text-gray-600">Viewability Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Video & CTV Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section id="video" className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white scroll-mt-16" ref={videoRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className={`order-2 md:order-1 transition-all duration-1000 ${videoVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}
                   style={{ transitionDelay: '300ms' }}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <LazyImage 
                    src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80"
                    alt="Video streaming"
                    className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
              <div className={`order-1 md:order-2 transition-all duration-1000 ${videoVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                  <Video className="w-4 h-4 mr-2" />
                  Video & CTV
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
                  Engage with the Power of Video
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-5 leading-relaxed text-justify">
                  Video is the most engaging ad format, and Connected TV (CTV) is the fastest-growing digital channel. BidMetrix.ai gives you access to premium video inventory across OTT platforms, streaming services, and traditional publishers.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-7 text-justify">
                  From pre-roll to mid-roll to outstream video, our platform optimizes your video campaigns for completion rates, brand lift, and direct response conversions.
                </p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:shadow-xl">
                    Launch Video Campaigns
                  </Button>
                </Link>
              </div>
            </div>

            {/* Video Features */}
            <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" ref={videoFeaturesRef}>
              {[
                { title: 'Pre-Roll & Mid-Roll', desc: 'Premium video placements on streaming content' },
                { title: 'CTV & OTT', desc: 'Reach cord-cutters on connected TV devices' },
                { title: 'Outstream Video', desc: 'Engaging video within editorial content' },
                { title: 'VAST/VPAID', desc: 'Full support for interactive video ads' }
              ].map((item, index) => {
                const isVisible = visibleVideoFeatures.includes(index);
                return (
                  <div key={index} className={`bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 text-justify">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Video Benefits */}
            <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-4 sm:gap-5">
              {[
                { icon: CheckCircle, text: 'Higher engagement than display ads' },
                { icon: CheckCircle, text: 'Brand lift and awareness campaigns' },
                { icon: CheckCircle, text: 'Completion rate optimization' },
                { icon: CheckCircle, text: 'Cross-device video attribution' },
                { icon: CheckCircle, text: 'Premium publisher partnerships' },
                { icon: CheckCircle, text: 'Transparent placement reports' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Native & Display Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section id="native" className="py-8 sm:py-12 md:py-14 bg-white scroll-mt-16" ref={nativeRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className={`transition-all duration-1000 ${nativeVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  <Layout className="w-4 h-4 mr-2" />
                  Native & Display
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
                  Seamless Ad Experiences That Convert
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-5 leading-relaxed text-justify">
                  Native advertising blends seamlessly with content, providing a non-intrusive user experience that drives higher engagement. Display advertising remains the workhorse of programmatic, offering massive scale and precise targeting.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-7 text-justify">
                  BidMetrix.ai supports all standard IAB display formats plus custom native placements that match the look and feel of premium publisher sites.
                </p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:shadow-xl">
                    Start Campaign
                  </Button>
                </Link>
              </div>
              <div className={`transition-all duration-1000 ${nativeVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
                   style={{ transitionDelay: '300ms' }}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <LazyImage 
                    src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
                    alt="Native advertising"
                    className="rounded-2xl shadow-xl relative transform transition-transform duration-500 group-hover:scale-[1.02]"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
            </div>

            {/* Format Options */}
            <div className="mt-10 md:mt-12" ref={formatsRef}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                Flexible Ad Formats
              </h3>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {[
                  { icon: Layout, title: 'Native Ads', desc: 'In-feed, recommendation widgets, and sponsored content that matches editorial design.', items: ['• Content recommendations', '• In-feed social ads', '• Sponsored listings'], color: 'indigo' },
                  { icon: Layout, title: 'Display Banners', desc: 'Standard IAB sizes for maximum reach and scale across the open web.', items: ['• Leaderboard (728x90)', '• Medium rectangle (300x250)', '• Skyscraper (160x600)'], color: 'cyan' },
                  { icon: Layout, title: 'Rich Media', desc: 'Interactive, expandable, and animated ad units for premium brand experiences.', items: ['• Expandable banners', '• Interactive units', '• HTML5 creatives'], color: 'purple' }
                ].map((format, index) => {
                  const isVisible = visibleFormats.includes(index);
                  return (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                      <Card hover={true} className="h-full group">
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-${format.color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                          <format.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${format.color}-600`} />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{format.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-justify">{format.desc}</p>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                          {format.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
        <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Scale Across All Channels?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-justify">
            Reach your audience wherever they are with BidMetrix.ai's omnichannel platform
          </p>
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-500 hover:shadow-2xl"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Channels;