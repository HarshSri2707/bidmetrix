// import React, { useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Target, RefreshCw, Shield, CheckCircle, TrendingUp, Users, Filter, ArrowRight } from 'lucide-react';
// import SEO from '../components/seo/SEO';
// import LazyImage from '../components/ui/LazyImage';
// import Card from '../components/ui/Card';
// import Button from '../components/ui/Button';
// import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
// import { heroData, userAcquisitionData, retargetingData, brandSafetyData, ctaData } from '../data/solutionsData';

// const iconMap = { Target, RefreshCw, Shield, CheckCircle, TrendingUp, Users, Filter };

// const Solutions = () => {
//   const location = useLocation();
//   const [heroRef, heroVisible] = useScrollAnimation({ once: true });
//   const [uaRef, uaVisible] = useScrollAnimation({ once: true });
//   const [uaFeaturesRef, visibleUaFeatures] = useStaggerAnimation(3, 150);
//   const [retargetingRef, retargetingVisible] = useScrollAnimation({ once: true });
//   const [retargetingFeaturesRef, visibleRetargetingFeatures] = useStaggerAnimation(4, 100);
//   const [brandSafetyRef, brandSafetyVisible] = useScrollAnimation({ once: true });
//   const [protectionRef, visibleProtection] = useStaggerAnimation(3, 150);
//   const [ctaRef, ctaVisible] = useScrollAnimation({ once: true });

//   useEffect(() => {
//     if (location.hash) {
//       setTimeout(() => {
//         const element = document.getElementById(location.hash.substring(1));
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       }, 100);
//     }
//   }, [location]);

//   return (
//     <>
//       <SEO 
//         title="Performance Marketing Solutions - BidMetrix.ai"
//         description="Comprehensive programmatic solutions for user acquisition, retargeting, and brand safety. Drive quality leads and conversions with BidMetrix.ai"
//         keywords="user acquisition, retargeting, conversion optimization, brand safety, anti-fraud, performance marketing solutions"
//       />

//       {/* Hero */}
//       <section className="relative h-96 flex items-center overflow-hidden" ref={heroRef}>
//         <LazyImage 
//           src={heroData.image}
//           alt="Analytics dashboard"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        
//         <div className={`container-custom relative z-10 transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             {heroData.title}
//             <span className="block gradient-text bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
//               {heroData.highlightTitle}
//             </span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl">
//             {heroData.subtitle}
//           </p>
//         </div>
//       </section>

//       {/* User Acquisition */}
//       <section id="user-acquisition" className="section-padding bg-white scroll-mt-16" ref={uaRef}>
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className={`transition-all duration-700 ${uaVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
//               <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
//                 <Target className="w-4 h-4 mr-2" />
//                 {userAcquisitionData.tag}
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 {userAcquisitionData.title}
//               </h2>
//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 {userAcquisitionData.description}
//               </p>
//               <Link to="/contact">
//                 <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-300 hover:scale-105">
//                   Get Started
//                 </Button>
//               </Link>
//             </div>
//             <div className={`transition-all duration-700 delay-200 ${uaVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
//                 <LazyImage 
//                   src={userAcquisitionData.image}
//                   alt="User acquisition"
//                   className="rounded-2xl shadow-xl relative"
//                   aspectRatio="4/3"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Features */}
//           <div className="mt-16" ref={uaFeaturesRef}>
//             <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//               How We Drive High-Intent Leads
//             </h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {userAcquisitionData.features.map((feature, index) => {
//                 const Icon = iconMap[feature.icon];
//                 const isVisible = visibleUaFeatures.includes(index);
//                 return (
//                   <div key={index} className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                     <Card hover={true} className="h-full group">
//                       <div className={`w-12 h-12 bg-${index === 0 ? 'purple' : index === 1 ? 'blue' : 'green'}-100 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
//                         <Icon className={`w-6 h-6 text-${index === 0 ? 'purple' : index === 1 ? 'blue' : 'green'}-600`} />
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
//                       <p className="text-gray-600">{feature.description}</p>
//                     </Card>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Benefits */}
//           <div className="mt-12 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 md:p-12">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Why the Right Choice Matters</h3>
//             <p className="text-gray-600 mb-6">Many DSPs flood you with low-quality traffic. BidMetrix.ai offers:</p>
//             <div className="grid md:grid-cols-2 gap-4">
//               {userAcquisitionData.benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
//                   <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
//                   <span className="text-gray-700">{benefit}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Retargeting */}
//       <section id="retargeting" className="section-padding bg-gradient-to-b from-gray-50 to-white scroll-mt-16" ref={retargetingRef}>
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className={`order-2 md:order-1 transition-all duration-700 ${retargetingVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
//                 <LazyImage 
//                   src={retargetingData.image}
//                   alt="Retargeting"
//                   className="rounded-2xl shadow-xl relative"
//                   aspectRatio="4/3"
//                 />
//               </div>
//             </div>
//             <div className={`order-1 md:order-2 transition-all duration-700 delay-200 ${retargetingVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//               <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
//                 <RefreshCw className="w-4 h-4 mr-2" />
//                 {retargetingData.tag}
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{retargetingData.title}</h2>
//               <p className="text-xl text-gray-600 mb-6 leading-relaxed">{retargetingData.description}</p>
//               <p className="text-gray-600 mb-8">{retargetingData.additionalInfo}</p>
//               <Link to="/contact">
//                 <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-300 hover:scale-105">
//                   Learn More
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={retargetingFeaturesRef}>
//             {retargetingData.features.map((item, index) => {
//               const isVisible = visibleRetargetingFeatures.includes(index);
//               return (
//                 <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                   <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Brand Safety */}
//       <section id="brand-safety" className="section-padding bg-white scroll-mt-16" ref={brandSafetyRef}>
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className={`transition-all duration-700 ${brandSafetyVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
//               <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
//                 <Shield className="w-4 h-4 mr-2" />
//                 {brandSafetyData.tag}
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{brandSafetyData.title}</h2>
//               <p className="text-xl text-gray-600 mb-6 leading-relaxed">{brandSafetyData.description}</p>
//               <p className="text-gray-600 mb-8">{brandSafetyData.additionalInfo}</p>
//               <Link to="/contact">
//                 <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-300 hover:scale-105">
//                   Protect Your Ads
//                 </Button>
//               </Link>
//             </div>
//             <div className={`transition-all duration-700 delay-200 ${brandSafetyVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
//                 <LazyImage 
//                   src={brandSafetyData.image}
//                   alt="Brand safety"
//                   className="rounded-2xl shadow-xl relative"
//                   aspectRatio="4/3"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-16" ref={protectionRef}>
//             <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Multi-Layer Protection</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {brandSafetyData.protectionFeatures.map((feature, index) => {
//                 const Icon = iconMap[feature.icon];
//                 const isVisible = visibleProtection.includes(index);
//                 return (
//                   <div key={index} className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                     <Card hover={true} className="h-full group">
//                       <div className={`w-12 h-12 bg-${index === 0 ? 'red' : index === 1 ? 'orange' : 'yellow'}-100 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
//                         <Icon className={`w-6 h-6 text-${index === 0 ? 'red' : index === 1 ? 'orange' : 'yellow'}-600`} />
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
//                       <p className="text-gray-600">{feature.description}</p>
//                     </Card>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
//         <div className={`container-custom text-center transition-all duration-700 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{ctaData.title}</h2>
//           <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">{ctaData.subtitle}</p>
//           <Link to="/contact">
//             <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-300 hover:scale-105" icon={<ArrowRight className="w-5 h-5" />}>
//               {ctaData.buttonText}
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Solutions;


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

const iconMap = { Target, RefreshCw, Shield, CheckCircle, TrendingUp, Users, Filter };

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
        title="Performance Marketing Solutions - BidMetrix.ai"
        description="Comprehensive programmatic solutions for user acquisition, retargeting, and brand safety. Drive quality leads and conversions with BidMetrix.ai"
        keywords="user acquisition, retargeting, conversion optimization, brand safety, anti-fraud, performance marketing solutions"
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
        <section id="user-acquisition" className="section-padding bg-white scroll-mt-16" ref={uaRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`transition-all duration-1000 ${uaVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                  <Target className="w-4 h-4 mr-2" />
                  {userAcquisitionData.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {userAcquisitionData.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  {userAcquisitionData.description}
                </p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
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
            <div className="mt-16" ref={uaFeaturesRef}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center px-4">
                How We Drive High-Intent Leads
              </h3>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {userAcquisitionData.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  const isVisible = visibleUaFeatures.includes(index);
                  const colors = ['purple', 'blue', 'green'];
                  const color = colors[index];
                  return (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                      <Card hover={true} className="h-full group">
                        <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                          <Icon className={`w-6 h-6 text-${color}-600`} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-6 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why the Right Choice Matters</h3>
              <p className="text-gray-600 mb-6">Many DSPs flood you with low-quality traffic. BidMetrix.ai offers:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {userAcquisitionData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Retargeting */}
      <Suspense fallback={<SkeletonSection />}>
        <section id="retargeting" className="section-padding bg-gradient-to-b from-gray-50 to-white scroll-mt-16" ref={retargetingRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {retargetingData.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">{retargetingData.title}</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">{retargetingData.description}</p>
                <p className="text-gray-600 mb-8">{retargetingData.additionalInfo}</p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" ref={retargetingFeaturesRef}>
              {retargetingData.features.map((item, index) => {
                const isVisible = visibleRetargetingFeatures.includes(index);
                return (
                  <div key={index} className={`bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Brand Safety */}
      <Suspense fallback={<SkeletonSection />}>
        <section id="brand-safety" className="section-padding bg-white scroll-mt-16" ref={brandSafetyRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`transition-all duration-1000 ${brandSafetyVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  {brandSafetyData.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">{brandSafetyData.title}</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">{brandSafetyData.description}</p>
                <p className="text-gray-600 mb-8">{brandSafetyData.additionalInfo}</p>
                <Link to="/contact">
                  <Button icon={<ArrowRight className="w-5 h-5" />} className="transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
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

            <div className="mt-16" ref={protectionRef}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center px-4">Multi-Layer Protection</h3>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {brandSafetyData.protectionFeatures.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  const isVisible = visibleProtection.includes(index);
                  const colors = ['red', 'orange', 'yellow'];
                  const color = colors[index];
                  return (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                      <Card hover={true} className="h-full group">
                        <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                          <Icon className={`w-6 h-6 text-${color}-600`} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
            </div>
    </section>
  </Suspense>

  {/* CTA */}
  <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
    <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{ctaData.title}</h2>
      <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">{ctaData.subtitle}</p>
      <Link to="/contact">
        <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl" icon={<ArrowRight className="w-5 h-5" />}>
          {ctaData.buttonText}
        </Button>
      </Link>
    </div>
  </section>
</>
  );
};
export default Solutions;