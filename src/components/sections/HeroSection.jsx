// import React from 'react';
// import LazyImage from '../ui/LazyImage';
// import { useScrollAnimation } from '../../utils/animations';

// const HeroSection = ({ 
//   title, 
//   highlightTitle, 
//   subtitle, 
//   image, 
//   align = 'left',
//   size = 'default',
//   showOverlay = true,
//   children 
// }) => {
//   const [heroRef, heroVisible] = useScrollAnimation({ once: true });

//   const getSizeClasses = () => {
//     switch(size) {
//       case 'large':
//         return 'h-screen min-h-[600px]';
//       case 'medium':
//         return 'h-[500px] sm:h-[550px] md:h-[600px]';
//       case 'small':
//         return 'h-[400px] sm:h-[450px] md:h-96';
//       default:
//         return 'h-[450px] sm:h-[500px] md:h-[550px] lg:h-96';
//     }
//   };

//   const getAlignClasses = () => {
//     switch(align) {
//       case 'center':
//         return 'text-center items-center justify-center';
//       case 'right':
//         return 'text-right items-end justify-end';
//       default:
//         return 'text-left items-start justify-start';
//     }
//   };

  

//   return (
//    <section className="relative h-96 md:h-[28rem] flex items-center overflow-hidden">
//   {/* Image */}
//   <div className="absolute inset-0 w-full h-full">
//     <LazyImage 
//       src={image}
//       alt={title}
//       className="w-full h-full object-cover"
//     />
//   </div>
  
//   {/* Overlay - darker on mobile for better text readability */}
//   <div className="absolute inset-0 bg-gradient-to-r 
//   from-gray-900/55 via-gray-900/35 to-gray-900/25 
//   md:from-gray-900/45 md:via-gray-900/30 md:to-gray-900/20">
// </div>

  
//   {/* Content - centered on mobile, left-aligned on desktop */}
//   <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
//     <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//         {title}
//         {highlightTitle && (
//          <span className="block text-white/90 mt-2">
//   {highlightTitle}
// </span>

//         )}
//       </h1>
//       <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto md:mx-0">
//         {subtitle}
//       </p>
//     </div>
//   </div>
// </section>
//   );
// };

// export default HeroSection;


import React, { useState } from "react";

const HeroSection = ({
  title,
  highlightTitle,
  subtitle,
  image,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-96 md:h-[28rem] flex items-center overflow-hidden bg-gray-900">
      
      {/* ALWAYS visible fallback */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* Hero Image (VISIBLE from start) */}
      <img
        src={image}
        alt={title}
        loading="eager"
        fetchpriority="high"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay fades in AFTER image load */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-gray-900/20
          transition-opacity duration-500
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Content (always visible) */}
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
            {highlightTitle && (
              <span className="block text-white/90 mt-2">
                {highlightTitle}
              </span>
            )}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto md:mx-0">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
