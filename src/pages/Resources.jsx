// import React, { useState, Suspense } from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
// import SEO from '../components/seo/SEO';
// import HeroSection from '../components/sections/HeroSection';
// import LazyImage from '../components/ui/LazyImage';
// import Card from '../components/ui/Card';
// import { SkeletonCard, SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
// import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
// import { heroImages } from '../data/heroImages';
// import { heroData, blogsData, categoriesData, newsletterData } from '../data/resourcesData';

// const Resources = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);

//   const [searchRef, searchVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
//   const [featuredRef, featuredVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
//   const [blogsRef, visibleBlogs] = useStaggerAnimation(6, 150);
//   const [categoriesRef, categoriesVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
//   const [newsletterRef, newsletterVisible] = useScrollAnimation({ once: true, threshold: 0.3 });

//   const filteredBlogs = blogsData.filter(blog =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     blog.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <SEO
//         title="Resources & Insights - BidMetrix.ai Blog"
//         description="Stay updated with the latest trends, insights, and best practices in programmatic advertising and performance marketing"
//         keywords="advertising blog, programmatic insights, marketing resources, ad tech trends, industry news"
//       />

//       {/* Hero Section */}
//       <Suspense fallback={<SkeletonHero />}>
//         <HeroSection
//           title={heroData.title}
//           highlightTitle={heroData.highlightTitle}
//           subtitle={heroData.subtitle}
//           image={heroImages.resources}
//           size="medium"
//         />
//       </Suspense>

//       {/* Search and Filter */}
//       <Suspense fallback={<SkeletonSection />}>
//         <section className="py-8 sm:py-12 md:py-14 bg-white" ref={searchRef}>
//           <div className="container-custom px-4 sm:px-6 lg:px-8">
//             <div className={`max-w-2xl mx-auto mb-10 md:mb-12 transition-all duration-1000 ${searchVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
//                 />
//               </div>
//             </div>

//             {/* Featured Post */}
//             {!searchTerm && filteredBlogs.length > 0 && (
//               <div className="mb-12 md:mb-16" ref={featuredRef}>
//                 <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 transition-all duration-1000 ${featuredVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//                   Featured Article
//                 </h2>
//                 <div className={`transition-all duration-1000 ${featuredVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
//                   <Card hover={true} padding="none" className="overflow-hidden">
//                     <div className="grid md:grid-cols-2 gap-0">
//                       <LazyImage
//                         src={filteredBlogs[0].image}
//                         alt={filteredBlogs[0].title}
//                         className="h-full min-h-[300px] w-full object-cover"
//                       />
//                       <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
//                         <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-3 sm:mb-4 w-fit">
//                           {filteredBlogs[0].category}
//                         </div>
//                         <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
//                           {filteredBlogs[0].title}
//                         </h3>
//                         <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed text-justify">
//                           {filteredBlogs[0].excerpt}
//                         </p>
//                         <div className="flex items-center text-sm text-gray-500 mb-4 sm:mb-6">
//                           <Calendar className="w-4 h-4 mr-2" />
//                           <span className="mr-4">{filteredBlogs[0].date}</span>
//                           <Clock className="w-4 h-4 mr-2" />
//                           <span>{filteredBlogs[0].readTime}</span>
//                         </div>
//                         <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
//                           Read More <ArrowRight className="ml-2 w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* Blog Grid */}
//             <div ref={blogsRef}>
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
//                 {searchTerm ? `Search Results (${filteredBlogs.length})` : 'Latest Articles'}
//               </h2>

//               {loading ? (
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                   {[...Array(6)].map((_, i) => (
//                     <SkeletonCard key={i} />
//                   ))}
//                 </div>
//               ) : filteredBlogs.length === 0 ? (
//                 <div className="text-center py-12">
//                   <div className="text-6xl mb-4">🔍</div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
//                   <p className="text-gray-600">Try a different search term</p>
//                 </div>
//               ) : (
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                   {filteredBlogs.slice(searchTerm ? 0 : 1).map((blog, index) => {
//                     const isVisible = visibleBlogs.includes(index);
//                     return (
//                       <div
//                         key={blog.id}
//                         className={`transition-all duration-1000 ${
//                           isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
//                         }`}
//                       >
//                         <Card hover={true} padding="none" className="overflow-hidden flex flex-col h-full group">
//                           <div className="relative overflow-hidden">
//                             <LazyImage
//                               src={blog.image}
//                               alt={blog.title}
//                               className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//                             />
//                           </div>
//                           <div className="p-5 sm:p-6 flex flex-col flex-grow">
//                             <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3 w-fit">
//                               {blog.category}
//                             </div>
//                             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
//                               {blog.title}
//                             </h3>
//                             <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow text-justify">
//                               {blog.excerpt}
//                             </p>
//                             <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
//                               <div className="flex items-center">
//                                 <Calendar className="w-4 h-4 mr-1" />
//                                 <span>{blog.date}</span>
//                               </div>
//                               <div className="flex items-center">
//                                 <Clock className="w-4 h-4 mr-1" />
//                                 <span>{blog.readTime}</span>
//                               </div>
//                             </div>
//                             <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center group">
//                               Read More <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
//                             </button>
//                           </div>
//                         </Card>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>

//             {/* Categories */}
//             {!searchTerm && (
//               <div className="mt-12 md:mt-16" ref={categoriesRef}>
//                 <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center transition-all duration-1000 ${categoriesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//                   Browse by Category
//                 </h2>
//                 <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 ${categoriesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
//                      style={{ transitionDelay: '200ms' }}>
//                   {categoriesData.map((category, index) => (
//                     <button
//                       key={index}
//                       className="px-4 sm:px-6 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-sm sm:text-base text-gray-700 hover:text-indigo-600 font-medium transform hover:shadow-lg duration-300"
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </Suspense>

//       {/* Newsletter Section */}
//       <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-indigo-600 to-cyan-500" ref={newsletterRef}>
//         <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${newsletterVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
//             {newsletterData.title}
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-justify">
//             {newsletterData.subtitle}
//           </p>
//           <div className="max-w-md mx-auto">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
//               />
//               <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform whitespace-nowrap">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Resources;

import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";
import SEO from "../components/seo/SEO";
import HeroSection from "../components/sections/HeroSection";
import LazyImage from "../components/ui/LazyImage";
import Card from "../components/ui/Card";
import {
  SkeletonCard,
  SkeletonSection,
  SkeletonHero,
} from "../components/ui/SkeletonLoader";
import { useScrollAnimation, useStaggerAnimation } from "../utils/animations";
import { heroImages } from "../data/heroImages";
import {
  heroData,
  blogsData,
  categoriesData,
  newsletterData,
  caseStudiesData,
} from "../data/resourcesData";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchRef, searchVisible] = useScrollAnimation({
    once: true,
    threshold: 0.2,
  });
  const [featuredRef, featuredVisible] = useScrollAnimation({
    once: true,
    threshold: 0.2,
  });
  const [blogsRef, visibleBlogs] = useStaggerAnimation(6, 150);
  const [caseStudiesRef, visibleCaseStudies] = useStaggerAnimation(3, 200);
  const [categoriesRef, categoriesVisible] = useScrollAnimation({
    once: true,
    threshold: 0.2,
  });
  const [newsletterRef, newsletterVisible] = useScrollAnimation({
    once: true,
    threshold: 0.3,
  });

  const filteredBlogs = blogsData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Resources & Insights - BidMetrix.ai Blog"
        description="Stay updated with the latest trends, insights, and best practices in programmatic advertising and performance marketing"
        keywords="advertising blog, programmatic insights, marketing resources, ad tech trends, industry news"
      />

      {/* Hero Section */}
      <Suspense fallback={<SkeletonHero />}>
        <HeroSection
          title={heroData.title}
          highlightTitle={heroData.highlightTitle}
          subtitle={heroData.subtitle}
          image={heroImages.resources}
          size="medium"
        />
      </Suspense>

      {/* Search and Filter */}
      <Suspense fallback={<SkeletonSection />}>
        <section className="py-8 sm:py-12 md:py-14 bg-white" ref={searchRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div
              className="max-w-2xl mx-auto mb-10 md:mb-12 transition-all duration-1000"
              style={{
                opacity: searchVisible ? 1 : 0,
                transform: searchVisible ? "translateY(0)" : "translateY(48px)",
              }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Featured Post */}
            {!searchTerm && filteredBlogs.length > 0 && (
              <div className="mb-12 md:mb-16" ref={featuredRef}>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 transition-all duration-1000"
                  style={{
                    opacity: featuredVisible ? 1 : 0,
                    transform: featuredVisible
                      ? "translateY(0)"
                      : "translateY(48px)",
                  }}
                >
                  Featured Article
                </h2>
                <div
                  className="transition-all duration-1000"
                  style={{
                    opacity: featuredVisible ? 1 : 0,
                    transform: featuredVisible
                      ? "translateY(0) scale(1)"
                      : "translateY(48px) scale(0.95)",
                  }}
                >
                  <Card hover={true} padding="none" className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      <LazyImage
                        src={filteredBlogs[0].image}
                        alt={filteredBlogs[0].title}
                        className="h-full min-h-[300px] w-full object-cover"
                      />
                      <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-3 sm:mb-4 w-fit">
                          {filteredBlogs[0].category}
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                          {filteredBlogs[0].title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed text-justify">
                          {filteredBlogs[0].excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4 sm:mb-6">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="mr-4">{filteredBlogs[0].date}</span>
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{filteredBlogs[0].readTime}</span>
                        </div>
                        <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            <div ref={blogsRef}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                {searchTerm
                  ? `Search Results (${filteredBlogs.length})`
                  : "Latest Articles"}
              </h2>

              {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[...Array(6)].map((_, i) => (
                    <SkeletonCard key={i} />
                  ))}
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600">Try a different search term</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredBlogs
                    .slice(searchTerm ? 0 : 1)
                    .map((blog, index) => {
                      const isVisible = visibleBlogs.includes(index);
                      return (
                        <div
                          key={blog.id}
                          className="transition-all duration-1000"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                              ? "translateY(0) scale(1)"
                              : "translateY(64px) scale(0.95)",
                          }}
                        >
                          <Card
                            hover={true}
                            padding="none"
                            className="overflow-hidden flex flex-col h-full group"
                          >
                            <div className="relative overflow-hidden">
                              <LazyImage
                                src={blog.image}
                                alt={blog.title}
                                className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3 w-fit">
                                {blog.category}
                              </div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                {blog.title}
                              </h3>
                              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow text-justify">
                                {blog.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  <span>{blog.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  <span>{blog.readTime}</span>
                                </div>
                              </div>
                              <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center group">
                                Read More{" "}
                                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                              </button>
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>

            {/* Categories */}
            {!searchTerm && (
              <div className="mt-12 md:mt-16" ref={categoriesRef}>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center transition-all duration-1000"
                  style={{
                    opacity: categoriesVisible ? 1 : 0,
                    transform: categoriesVisible
                      ? "translateY(0)"
                      : "translateY(48px)",
                  }}
                >
                  Browse by Category
                </h2>
                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000"
                  style={{
                    opacity: categoriesVisible ? 1 : 0,
                    transform: categoriesVisible
                      ? "translateY(0)"
                      : "translateY(48px)",
                    transitionDelay: "200ms",
                  }}
                >
                  {categoriesData.map((category, index) => (
                    <button
                      key={index}
                      className="px-4 sm:px-6 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-sm sm:text-base text-gray-700 hover:text-indigo-600 font-medium transform hover:shadow-lg duration-300"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </Suspense>

      {/* Case Studies Section */}
      <Suspense fallback={<SkeletonSection />}>
        <section
          className="py-8 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white"
          ref={caseStudiesRef}
        >
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Success Stories
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                See how leading brands achieve exceptional results with
                BidMetrix.ai
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {caseStudiesData.map((study, index) => {
                const isVisible = visibleCaseStudies.includes(index);
                return (
                  <div
                    key={study.id}
                    className="transition-all duration-1000"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0) scale(1)"
                        : "translateY(64px) scale(0.95)",
                    }}
                  >
                    <Card
                      hover={true}
                      padding="none"
                      className="overflow-hidden flex flex-col h-full group"
                    >
                      <div className="relative overflow-hidden">
                        <LazyImage
                          src={study.image}
                          alt={study.client}
                          className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-semibold rounded-full">
                            {study.industry}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 flex flex-col flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {study.title}
                        </h3>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-3 mb-4 p-4 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl">
                          {Object.entries(study.metrics).map(
                            ([key, value], idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-indigo-600">
                                  {value}
                                </div>
                                <div className="text-xs text-gray-600 mt-1 capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Challenge */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-orange-500" />
                            Challenge
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 text-justify">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Results */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-green-500" />
                            Results
                          </h4>
                          <ul className="space-y-1">
                            {study.results.slice(0, 3).map((result, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-start"
                              >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="mt-auto pt-4 border-t border-gray-100 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center group">
                          View Full Case Study{" "}
                          <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                        </button>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Newsletter Section */}
      <section
        className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-indigo-600 to-cyan-500"
        ref={newsletterRef}
      >
        <div
          className="container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000"
          style={{
            opacity: newsletterVisible ? 1 : 0,
            transform: newsletterVisible ? "scale(1)" : "scale(0.9)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {newsletterData.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-justify">
            {newsletterData.subtitle}
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
    flex-1
    px-6 py-4
    rounded-lg
    bg-white
    text-gray-900
    placeholder-gray-400
    border border-gray-200
    focus:border-gray-200
    hover:border-gray-200
    focus:outline-none
    focus:ring-0
    transition-none
  "
              />

              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
