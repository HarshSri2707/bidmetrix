// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
// import SEO from '../components/seo/SEO';
// import LazyImage from '../components/ui/LazyImage';
// import Card from '../components/ui/Card';
// import { SkeletonCard } from '../components/ui/SkeletonLoader';

// const Resources = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Dummy blog data
//   const blogs = [
//     {
//       id: 1,
//       title: 'The Complete Guide to Programmatic Advertising in 2025',
//       excerpt: 'Learn everything you need to know about programmatic advertising, from basics to advanced strategies for maximizing ROI.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
//       category: 'Industry Insights',
//       date: 'Dec 15, 2024',
//       readTime: '8 min read',
//       author: 'Marketing Team'
//     },
//     {
//       id: 2,
//       title: 'How AI is Revolutionizing Digital Advertising',
//       excerpt: 'Discover how artificial intelligence and machine learning are transforming the way brands reach and engage their audiences.',
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
//       category: 'Technology',
//       date: 'Dec 10, 2024',
//       readTime: '6 min read',
//       author: 'Tech Team'
//     },
//     {
//       id: 3,
//       title: '10 Ways to Improve Your Ad Campaign Performance',
//       excerpt: 'Proven strategies to boost your campaign metrics, reduce costs, and drive better results with data-driven optimization.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
//       category: 'Best Practices',
//       date: 'Dec 5, 2024',
//       readTime: '7 min read',
//       author: 'Performance Team'
//     },
//     {
//       id: 4,
//       title: 'Understanding CPA vs CPC vs CPM: Which is Right for You?',
//       excerpt: 'A comprehensive breakdown of different pricing models and how to choose the best one for your campaign objectives.',
//       image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
//       category: 'Education',
//       date: 'Nov 28, 2024',
//       readTime: '5 min read',
//       author: 'Strategy Team'
//     },
//     {
//       id: 5,
//       title: 'Mobile-First Advertising: Strategies for Success',
//       excerpt: 'Essential tactics for reaching mobile audiences effectively and driving conversions on smartphones and tablets.',
//       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
//       category: 'Mobile Marketing',
//       date: 'Nov 20, 2024',
//       readTime: '6 min read',
//       author: 'Mobile Team'
//     },
//     {
//       id: 6,
//       title: 'The Rise of Connected TV Advertising in India',
//       excerpt: 'How CTV is changing the advertising landscape and what brands need to know to capitalize on this growing opportunity.',
//       image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80',
//       category: 'Trends',
//       date: 'Nov 15, 2024',
//       readTime: '8 min read',
//       author: 'Research Team'
//     }
//   ];

//   const filteredBlogs = blogs.filter(blog =>
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
//       <section className="relative h-96 flex items-center overflow-hidden">
//         <LazyImage 
//           src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
//           alt="Resources"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        
//         <div className="container-custom relative z-10">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Resources &
//             <span className="block gradient-text bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
//               Insights
//             </span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl">
//             Stay ahead with the latest trends, strategies, and insights in performance marketing
//           </p>
//         </div>
//       </section>

//       {/* Search and Filter */}
//       <section className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="max-w-2xl mx-auto mb-12">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Featured Post */}
//           {!searchTerm && filteredBlogs.length > 0 && (
//             <div className="mb-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
//               <Card hover={true} padding="none" className="overflow-hidden">
//                 <div className="grid md:grid-cols-2 gap-0">
//                   <LazyImage 
//                     src={filteredBlogs[0].image}
//                     alt={filteredBlogs[0].title}
//                     className="h-full min-h-[300px] w-full"
//                   />
//                   <div className="p-8 flex flex-col justify-center">
//                     <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-4 w-fit">
//                       {filteredBlogs[0].category}
//                     </div>
//                     <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                       {filteredBlogs[0].title}
//                     </h3>
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {filteredBlogs[0].excerpt}
//                     </p>
//                     <div className="flex items-center text-sm text-gray-500 mb-6">
//                       <Calendar className="w-4 h-4 mr-2" />
//                       <span className="mr-4">{filteredBlogs[0].date}</span>
//                       <Clock className="w-4 h-4 mr-2" />
//                       <span>{filteredBlogs[0].readTime}</span>
//                     </div>
//                     <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
//                       Read More <ArrowRight className="ml-2 w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           )}

//           {/* Blog Grid */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">
//               {searchTerm ? `Search Results (${filteredBlogs.length})` : 'Latest Articles'}
//             </h2>
            
//             {loading ? (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {[...Array(6)].map((_, i) => (
//                   <SkeletonCard key={i} />
//                 ))}
//               </div>
//             ) : filteredBlogs.length === 0 ? (
//               <div className="text-center py-12">
//                 <div className="text-6xl mb-4">🔍</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
//                 <p className="text-gray-600">Try a different search term</p>
//               </div>
//             ) : (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredBlogs.slice(searchTerm ? 0 : 1).map((blog) => (
//                   <Card key={blog.id} hover={true} padding="none" className="overflow-hidden flex flex-col">
//                     <LazyImage 
//                       src={blog.image}
//                       alt={blog.title}
//                       className="h-48 w-full"
//                     />
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3 w-fit">
//                         {blog.category}
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
//                         {blog.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
//                         {blog.excerpt}
//                       </p>
//                       <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
//                         <div className="flex items-center">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           <span>{blog.date}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Clock className="w-4 h-4 mr-1" />
//                           <span>{blog.readTime}</span>
//                         </div>
//                       </div>
//                       <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center">
//                         Read More <ArrowRight className="ml-2 w-4 h-4" />
//                       </button>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Categories */}
//           {!searchTerm && (
//             <div className="mt-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//                 Browse by Category
//               </h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {['Industry Insights', 'Technology', 'Best Practices', 'Education', 'Mobile Marketing', 'Trends', 'Case Studies', 'Tutorials'].map((category, index) => (
//                   <button
//                     key={index}
//                     className="px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-gray-700 hover:text-indigo-600 font-medium"
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500">
//         <div className="container-custom text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Stay Updated
//           </h2>
//           <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
//             Get the latest insights, trends, and best practices delivered to your inbox
//           </p>
//           <div className="max-w-md mx-auto">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
//               />
//               <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
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


import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/sections/HeroSection';
import LazyImage from '../components/ui/LazyImage';
import Card from '../components/ui/Card';
import { SkeletonCard, SkeletonSection, SkeletonHero } from '../components/ui/SkeletonLoader';
import { useScrollAnimation, useStaggerAnimation } from '../utils/animations';
import { heroImages } from '../data/heroImages';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchRef, searchVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [featuredRef, featuredVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [blogsRef, visibleBlogs] = useStaggerAnimation(6, 150);
  const [categoriesRef, categoriesVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [newsletterRef, newsletterVisible] = useScrollAnimation({ once: true, threshold: 0.3 });

  // Dummy blog data
  const blogs = [
    {
      id: 1,
      title: 'The Complete Guide to Programmatic Advertising in 2025',
      excerpt: 'Learn everything you need to know about programmatic advertising, from basics to advanced strategies for maximizing ROI.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      category: 'Industry Insights',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      author: 'Marketing Team'
    },
    {
      id: 2,
      title: 'How AI is Revolutionizing Digital Advertising',
      excerpt: 'Discover how artificial intelligence and machine learning are transforming the way brands reach and engage their audiences.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      category: 'Technology',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      author: 'Tech Team'
    },
    {
      id: 3,
      title: '10 Ways to Improve Your Ad Campaign Performance',
      excerpt: 'Proven strategies to boost your campaign metrics, reduce costs, and drive better results with data-driven optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      category: 'Best Practices',
      date: 'Dec 5, 2024',
      readTime: '7 min read',
      author: 'Performance Team'
    },
    {
      id: 4,
      title: 'Understanding CPA vs CPC vs CPM: Which is Right for You?',
      excerpt: 'A comprehensive breakdown of different pricing models and how to choose the best one for your campaign objectives.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
      category: 'Education',
      date: 'Nov 28, 2024',
      readTime: '5 min read',
      author: 'Strategy Team'
    },
    {
      id: 5,
      title: 'Mobile-First Advertising: Strategies for Success',
      excerpt: 'Essential tactics for reaching mobile audiences effectively and driving conversions on smartphones and tablets.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      category: 'Mobile Marketing',
      date: 'Nov 20, 2024',
      readTime: '6 min read',
      author: 'Mobile Team'
    },
    {
      id: 6,
      title: 'The Rise of Connected TV Advertising in India',
      excerpt: 'How CTV is changing the advertising landscape and what brands need to know to capitalize on this growing opportunity.',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80',
      category: 'Trends',
      date: 'Nov 15, 2024',
      readTime: '8 min read',
      author: 'Research Team'
    }
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['Industry Insights', 'Technology', 'Best Practices', 'Education', 'Mobile Marketing', 'Trends', 'Case Studies', 'Tutorials'];

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
          title="Resources &"
          highlightTitle="Insights"
          subtitle="Stay ahead with the latest trends, strategies, and insights in performance marketing"
          image={heroImages.resources}
          size="medium"
        />
      </Suspense>

      {/* Search and Filter */}
      <Suspense fallback={<SkeletonSection />}>
        <section className="section-padding bg-white" ref={searchRef}>
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 ${searchVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
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
              <div className="mb-16" ref={featuredRef}>
                <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${featuredVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  Featured Article
                </h2>
                <div className={`transition-all duration-1000 ${featuredVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
                  <Card hover={true} padding="none" className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      <LazyImage 
                        src={filteredBlogs[0].image}
                        alt={filteredBlogs[0].title}
                        className="h-full min-h-[300px] w-full object-cover"
                      />
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-4 w-fit">
                          {filteredBlogs[0].category}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                          {filteredBlogs[0].title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                          {filteredBlogs[0].excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-6">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                {searchTerm ? `Search Results (${filteredBlogs.length})` : 'Latest Articles'}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try a different search term</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredBlogs.slice(searchTerm ? 0 : 1).map((blog, index) => {
                    const isVisible = visibleBlogs.includes(index);
                    return (
                      <div
                        key={blog.id}
                        className={`transition-all duration-1000 ${
                          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
                        }`}
                      >
                        <Card hover={true} padding="none" className="overflow-hidden flex flex-col h-full group">
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
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
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
                              Read More <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
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
              <div className="mt-16" ref={categoriesRef}>
                <h2 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 ${categoriesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  Browse by Category
                </h2>
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 ${categoriesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                     style={{ transitionDelay: '200ms' }}>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="px-4 sm:px-6 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-sm sm:text-base text-gray-700 hover:text-indigo-600 font-medium transform  hover:shadow-lg duration-300"
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

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-cyan-500" ref={newsletterRef}>
        <div className={`container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${newsletterVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get the latest insights, trends, and best practices delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform  whitespace-nowrap">
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