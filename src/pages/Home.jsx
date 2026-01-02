
// import React, { Suspense, lazy } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Target, Shield, BarChart3, TrendingUp, CheckCircle, Zap } from 'lucide-react';
// import SEO from '../components/seo/SEO';
// import VideoHeroSection from '../components/sections/VideoHeroSection';
// import Card from '../components/ui/Card';
// import Button from '../components/ui/Button';
// import { SkeletonSection, SkeletonGrid } from '../components/ui/SkeletonLoader';
// import { useScrollAnimation, useStaggerAnimation, useCountAnimation } from '../utils/animations';
// import { heroData, problemStatement, uspData, howItWorksData, ctaData } from '../data/homeData';
// import { heroImages } from '../data/heroImages';
// import hero from '../assets/videos/hero.mp4';

// const iconMap = {
//   Target, Shield, BarChart3, Zap, TrendingUp
// };

// const Home = () => {
//   const [problemRef, problemVisible] = useScrollAnimation({ once: true });
//   const [uspRef, uspVisible] = useScrollAnimation({ once: true });
//   const [howItWorksRef, visibleSteps] = useStaggerAnimation(4, 150);
//   const [ctaRef, ctaVisible] = useScrollAnimation({ once: true });

//   const [stat1Ref, stat1Count] = useCountAnimation(500);
//   const [stat2Ref, stat2Count] = useCountAnimation(99.9);
//   const [stat3Ref, stat3Count] = useCountAnimation(50);

//   return (
//     <>
//       <SEO 
//         title="BidMetrix.ai - Intelligent Performance Marketing Platform"
//         description="Stop guessing. Start converting with BidMetrix, the DSP built for performance. Precision AI targeting and transparent bidding for measurable ROI."
//         keywords="DSP, performance marketing, programmatic advertising, ad tech, user acquisition, retargeting, India"
//       />

//       {/* Video Hero Section */}
//       <VideoHeroSection
//         title={heroData.title}
//         highlightTitle={heroData.highlightTitle}
//         subtitle={heroData.subtitle}
//         videoSrc={hero}
//         posterSrc={heroImages.home.poster}
//       >
//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//           <Link to="/contact">
//             <Button 
//               size="lg" 
//               icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
//               className="w-full sm:w-auto text-sm sm:text-base"
//             >
//               Request a Demo
//             </Button>
//           </Link>
//           <Link to="/solutions">
//             <Button 
//               variant="secondary" 
//               size="lg"
//               className="w-full sm:w-auto text-sm sm:text-base"
//             >
//               Explore Solutions
//             </Button>
//           </Link>
//         </div>

//         {/* Trust Indicators with Counter Animation */}
//         <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6 md:gap-8">
//           <div ref={stat1Ref}>
//             <div className="text-2xl sm:text-3xl font-bold text-white">{stat1Count}K+</div>
//             <div className="text-xs sm:text-sm text-gray-300">{heroData.stats[0].label}</div>
//           </div>
//           <div ref={stat2Ref}>
//             <div className="text-2xl sm:text-3xl font-bold text-white">{stat2Count.toFixed(1)}%</div>
//             <div className="text-xs sm:text-sm text-gray-300">{heroData.stats[1].label}</div>
//           </div>
//           <div ref={stat3Ref}>
//             <div className="text-2xl sm:text-3xl font-bold text-white">{stat3Count}+</div>
//             <div className="text-xs sm:text-sm text-gray-300">{heroData.stats[2].label}</div>
//           </div>
//         </div>
//       </VideoHeroSection>

//       {/* Problem Statement */}
//       <Suspense fallback={<SkeletonSection />}>
//         <section className="section-padding bg-white" ref={problemRef}>
//           <div className="container-custom">
//             <div className={`max-w-4xl mx-auto text-center mb-12 md:mb-16 transition-all duration-700 ${problemVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
//                 {problemStatement.title}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
//                 {problemStatement.subtitle}
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
//               <div className={`transition-all duration-700 delay-200 ${problemVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
//                 <Card className="bg-red-50 border-red-100 h-full">
//                   <div className="text-red-600 mb-4">
//                     <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{problemStatement.comparison.wrong.title}</h3>
//                   <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
//                     {problemStatement.comparison.wrong.items.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="mr-2">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               </div>

//               <div className={`transition-all duration-700 delay-400 ${problemVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <Card className="bg-green-50 border-green-100 h-full">
//                   <div className="text-green-600 mb-4">
//                     <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{problemStatement.comparison.right.title}</h3>
//                   <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
//                     {problemStatement.comparison.right.items.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="mr-2">✓</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Suspense>

//       {/* USP Section */}
//       <Suspense fallback={<SkeletonSection />}>
//         <section className="section-padding bg-gradient-to-b from-gray-50 to-white" ref={uspRef}>
//           <div className="container-custom">
//             <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${uspVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//                 {uspData.title}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//                 {uspData.subtitle}
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 md:gap-8">
//               {uspData.features.map((feature, index) => {
//                 const Icon = iconMap[feature.icon];
//                 return (
//                   <div
//                     key={index}
//                     className={`transition-all duration-700 ${
//                       uspVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//                     }`}
//                     style={{ transitionDelay: `${(index + 1) * 150}ms` }}
//                   >
//                     <Card hover={true} className="h-full">
//                       <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-${index === 0 ? 'indigo' : index === 1 ? 'cyan' : 'purple'}-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform transition-transform duration-300 hover:scale-110`}>
//                         <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${index === 0 ? 'indigo' : index === 1 ? 'cyan' : 'purple'}-600`} />
//                       </div>
//                       <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
//                         {feature.title}
//                       </h3>
//                       <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </Card>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </Suspense>

//       {/* How It Works */}
//       <Suspense fallback={<SkeletonSection />}>
//         <section className="section-padding bg-white" ref={howItWorksRef}>
//           <div className="container-custom">
//             <div className="text-center mb-12 md:mb-16">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//                 {howItWorksData.title}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//                 {howItWorksData.subtitle}
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//               {howItWorksData.steps.map((item, index) => {
//                 const Icon = iconMap[item.icon];
//                 const isVisible = visibleSteps.includes(index);
//                 return (
//                   <div
//                     key={index}
//                     className={`relative transition-all duration-700 ${
//                       isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//                     }`}
//                   >
//                     <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4 sm:p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                       <div className="text-indigo-600/20 text-5xl sm:text-6xl font-bold mb-3 sm:mb-4">{item.step}</div>
//                       <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-3 sm:mb-4" />
//                       <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                       <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
//                     </div>
//                     {index < 3 && (
//                       <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
//                         <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300" />
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </Suspense>

//       {/* CTA Section */}
//       <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
//         <div className={`container-custom text-center transition-all duration-700 ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
//             {ctaData.title}
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
//             {ctaData.subtitle}
//           </p>
//           <Link to="/contact">
//             <Button 
//               variant="secondary" 
//               size="lg"
//               className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//               icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
//             >
//               {ctaData.buttonText}
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;


// import React, { Suspense } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Target, Shield, BarChart3, TrendingUp, CheckCircle, Zap } from 'lucide-react';
// import SEO from '../components/seo/SEO';
// import VideoHeroSection from '../components/sections/VideoHeroSection';
// import Card from '../components/ui/Card';
// import Button from '../components/ui/Button';
// import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
// import { useScrollAnimation, useStaggerAnimation, useCountAnimation } from '../utils/animations';
// import { heroData, problemStatement, uspData, howItWorksData, ctaData } from '../data/homeData';
// import { heroImages } from '../data/heroImages';
// import hero from '../assets/videos/hero.mp4';

// const iconMap = {
//   Target, Shield, BarChart3, Zap, TrendingUp
// };

// const Home = () => {
//   const [problemRef, problemVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
//   const [uspRef, uspVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
//   const [howItWorksRef, visibleSteps] = useStaggerAnimation(4, 200);
//   const [ctaRef, ctaVisible] = useScrollAnimation({ once: true, threshold: 0.3 });

//   const [stat1Ref, stat1Count] = useCountAnimation(500);
//   const [stat2Ref, stat2Count] = useCountAnimation(99.9);
//   const [stat3Ref, stat3Count] = useCountAnimation(50);

//   return (
//     <>
//       <SEO 
//         title="BidMetrix.ai - Intelligent Performance Marketing Platform"
//         description="Stop guessing. Start converting with BidMetrix, the DSP built for performance. Precision AI targeting and transparent bidding for measurable ROI."
//         keywords="DSP, performance marketing, programmatic advertising, ad tech, user acquisition, retargeting, India"
//       />

//       {/* Video Hero Section */}
//       <Suspense fallback={<SkeletonHero />}>
//         <VideoHeroSection
//           title={heroData.title}
//           highlightTitle={heroData.highlightTitle}
//           subtitle={heroData.subtitle}
//           videoSrc={hero}
//           posterSrc={heroImages.home?.poster}
//         >
//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <Link to="/contact">
//               <Button 
//                 size="lg" 
//                 icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
//                 className="w-full sm:w-auto text-sm sm:text-base transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
//               >
//                 Request a Demo
//               </Button>
//             </Link>
//             <Link to="/solutions">
//               <Button 
//                 variant="secondary" 
//                 size="lg"
//                 className="w-full sm:w-auto text-sm sm:text-base transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
//               >
//                 Explore Solutions
//               </Button>
//             </Link>
//           </div>

//           {/* Trust Indicators with Counter Animation */}
//           <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl">
//             <div ref={stat1Ref} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
//               <div className="text-2xl sm:text-3xl font-bold text-white">{stat1Count}K+</div>
//               <div className="text-xs sm:text-sm text-gray-300 mt-1">{heroData.stats[0].label}</div>
//             </div>
//             <div ref={stat2Ref} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
//               <div className="text-2xl sm:text-3xl font-bold text-white">{stat2Count.toFixed(1)}%</div>
//               <div className="text-xs sm:text-sm text-gray-300 mt-1">{heroData.stats[1].label}</div>
//             </div>
//             <div ref={stat3Ref} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
//               <div className="text-2xl sm:text-3xl font-bold text-white">{stat3Count}+</div>
//               <div className="text-xs sm:text-sm text-gray-300 mt-1">{heroData.stats[2].label}</div>
//             </div>
//           </div>
//         </VideoHeroSection>
//       </Suspense>

//       {/* Problem Statement */}
//       <Suspense fallback={<SkeletonSection />}>
//         <section className="section-padding bg-white" ref={problemRef}>
//           <div className="container-custom px-4 sm:px-6 lg:px-8">
//             <div className={`max-w-4xl mx-auto text-center mb-12 md:mb-16 transition-all duration-1000 ${problemVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
//                 {problemStatement.title}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
//                 {problemStatement.subtitle}
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
//               <div className={`transition-all duration-1000 ${problemVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}
//                    style={{ transitionDelay: '200ms' }}>
//                 <Card className="bg-red-50 border-red-100 h-full group hover:shadow-xl transition-all duration-500">
//                   <div className="text-red-600 mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
//                     <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
//                     {problemStatement.comparison.wrong.title}
//                   </h3>
//                   <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
//                     {problemStatement.comparison.wrong.items.map((item, index) => (
//                       <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
//                         <span className="mr-2 text-red-500 font-bold">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               </div>

//               <div className={`transition-all duration-1000 ${problemVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
//                    style={{ transitionDelay: '400ms' }}>
//                 <Card className="bg-green-50 border-green-100 h-full group hover:shadow-xl transition-all duration-500">
//                   <div className="text-green-600 mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
//                     <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
//                     {problemStatement.comparison.right.title}
//                   </h3>
//                   <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
//                     {problemStatement.comparison.right.items.map((item, index) => (
//                       <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
//                         <span className="mr-2 text-green-500 font-bold">✓</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Suspense>

//       {/* USP Section */}
//       <Suspense fallback={<SkeletonSection />}>
//         <section className="section-padding bg-gradient-to-b from-gray-50 to-white" ref={uspRef}>
//           <div className="container-custom px-4 sm:px-6 lg:px-8">
//             <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${uspVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//                 {uspData.title}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//                 {uspData.subtitle}
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 md:gap-8">
//               {uspData.features.map((feature, index) => {
//                 const Icon = iconMap[feature.icon];
//                 const colors = ['indigo', 'cyan', 'purple'];
//                 const color = colors[index];
//                 return (
//                   <div
//                     key={index}
//                     className={`transition-all duration-1000 ${
//                       uspVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
//                     }`}
//                     style={{ transitionDelay: `${(index + 1) * 200}ms` }}
//                   >
//                     <Card hover={true} className="h-full group">
//                       <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-${color}-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
//                         <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${color}-600 transition-all duration-500`} />
//                       </div>
//                       <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
//                         {feature.title}
//                       </h3>
//                       <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </Card>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </Suspense>

//       {/* How It Works */}
//       <Suspense fallback={<SkeletonSection />}>
//         <section className="section-padding bg-white" ref={howItWorksRef}>
//           <div className="container-custom px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12 md:mb-16">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//                 {howItWorksData.title}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//                 {howItWorksData.subtitle}
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//               {howItWorksData.steps.map((item, index) => {
//                 const Icon = iconMap[item.icon];
//                 const isVisible = visibleSteps.includes(index);
//                 return (
//                   <div
//                     key={index}
//                     className={`relative transition-all duration-1000 ${
//                       isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
//                     }`}
//                   >
//                     <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4 sm:p-6 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-xl group">
//                       <div className="text-indigo-600/20 text-5xl sm:text-6xl font-bold mb-3 sm:mb-4 transform transition-transform duration-500 group-hover:scale-110">
//                         {item.step}
//                       </div>
//                       <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
//                       <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                       <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
//                     </div>
//                     {index < 3 && (
//                       <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
//                         <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300 animate-pulse" />
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </Suspense>

//       {/* CTA Section */}
//       <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={ctaRef}>
//         <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${ctaVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
//             {ctaData.title}
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
//             {ctaData.subtitle}
//           </p>
//           <Link to="/contact">
//             <Button 
//               variant="secondary" 
//               size="lg"
//               className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl text-sm sm:text-base"
//               icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
//             >
//               {ctaData.buttonText}
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, BarChart3, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import SEO from '../components/seo/SEO';
import VideoHeroSection from '../components/sections/VideoHeroSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation, useCountAnimation } from '../utils/animations';
import { heroData, problemStatement, uspData, howItWorksData, ctaData } from '../data/homeData';
import { heroImages } from '../data/heroImages';
import hero from '../assets/videos/hero.mp4';
import photo from '../assets/photos/photo.png';

const iconMap = {
  Target, Shield, BarChart3, Zap, TrendingUp
};

// Problem Statement Section Component
const ProblemSection = ({ problemRef, problemVisible, problemStatement }) => (
  <section className="py-8 sm:py-12 md:py-14 bg-white" ref={problemRef}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className={`max-w-4xl mx-auto text-center mb-8 md:mb-10 transition-all duration-1000 ${problemVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          {problemStatement.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
          {problemStatement.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${problemVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'}`}
             style={{ transitionDelay: '200ms' }}>
          <Card className="bg-red-50 border-red-100 h-full group hover:shadow-xl transition-all duration-500">
            <div className="text-red-600 mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <svg className="w-10 h-10 sm:w-11 sm:h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {problemStatement.comparison.wrong.title}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              {problemStatement.comparison.wrong.items.map((item, index) => (
                <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2 text-justify">
                  <span className="mr-2 text-red-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className={`transition-all duration-1000 ${problemVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
             style={{ transitionDelay: '400ms' }}>
          <Card className="bg-green-50 border-green-100 h-full group hover:shadow-xl transition-all duration-500">
            <div className="text-green-600 mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <CheckCircle className="w-10 h-10 sm:w-11 sm:h-11" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {problemStatement.comparison.right.title}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              {problemStatement.comparison.right.items.map((item, index) => (
                <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2 text-justify">
                  <span className="mr-2 text-green-500 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
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
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-justify">
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
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-justify">
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
      <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-5 sm:mb-6 max-w-2xl mx-auto text-justify">
        {ctaData.subtitle}
      </p>
      <Link to="/contact">
        <Button 
          variant="secondary" 
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-100 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl text-sm sm:text-base"
          icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
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
      <SEO 
        title="BidMetrix.ai - Intelligent Performance Marketing Platform"
        description="Stop guessing. Start converting with BidMetrix, the DSP built for performance. Precision AI targeting and transparent bidding for measurable ROI."
        keywords="DSP, performance marketing, programmatic advertising, ad tech, user acquisition, retargeting, India"
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
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact">
              <Button 
                size="lg" 
                icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="w-full sm:w-auto text-sm sm:text-base transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              >
                Request a Demo
              </Button>
            </Link>
            <Link to="/solutions">
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              >
                Explore Solutions
              </Button>
            </Link>
          </div>

          {/* Trust Indicators with Counter Animation */}
          <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-3xl">
            <div ref={stat1Ref} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 sm:p-3 md:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat1Count}K+</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">{heroData.stats[0].label}</div>
            </div>
            <div ref={stat2Ref} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 sm:p-3 md:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat2Count.toFixed(1)}%</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">{heroData.stats[1].label}</div>
            </div>
            <div ref={stat3Ref} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 sm:p-3 md:p-4 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat3Count}+</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">{heroData.stats[2].label}</div>
            </div>
          </div>
        </VideoHeroSection>
      </Suspense>

      {/* Problem Statement */}
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