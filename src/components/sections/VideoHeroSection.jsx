// import React from 'react';
// import LazyVideo from '../ui/LazyVideo';
// import { useScrollAnimation } from '../../utils/animations';

// const VideoHeroSection = ({ 
//   title, 
//   highlightTitle, 
//   subtitle, 
//   videoSrc,
//   posterSrc,
//   children 
// }) => {
//   const [heroRef, heroVisible] = useScrollAnimation({ once: true });

//   return (
//     <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden" ref={heroRef}>
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <LazyVideo 
//           src={videoSrc}
//           poster={posterSrc}
//           className="w-full h-full"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="container-custom relative z-10 py-12 sm:py-16">
//         <div className="max-w-4xl">
//           <div className={`transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//             {/* Title - Responsive sizing */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
//               {title}
//               {highlightTitle && (
//                <span className="block text-white/90 mt-2">
//   {highlightTitle}
// </span>

//               )}
//             </h1>
            
//             {/* Subtitle - Responsive sizing */}
//             {subtitle && (
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-2xl">
//                 {subtitle}
//               </p>
//             )}
            
//             {/* Children (Buttons, etc) */}
//             <div className="space-y-4">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//         <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/60 rounded-full mt-2"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoHeroSection;


// import React from 'react';
// import LazyVideo from '../ui/LazyVideo';
// import { useScrollAnimation } from '../../utils/animations';

// const VideoHeroSection = ({ 
//   title, 
//   highlightTitle, 
//   subtitle, 
//   videoSrc,
//   posterSrc,
//   children 
// }) => {
//   const [heroRef, heroVisible] = useScrollAnimation({ once: true });

//   return (
//     <section
//       ref={heroRef}
//       className="
//         relative
//         min-h-[60vh]
//         sm:min-h-[65vh]
//         md:min-h-[68vh]
//         lg:min-h-[70vh]
//         flex items-center
//         overflow-hidden
//       "
//     >
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <LazyVideo 
//           src={videoSrc}
//           poster={posterSrc}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/35 via-gray-900/35 to-gray-900/30" />
//       </div>

//       {/* Hero Content */}
//       <div className="container-custom relative z-10 py-8 sm:py-10 md:py-12">
//         <div className="max-w-3xl">
//           <div
//             className={`transition-all duration-1000 ${
//               heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//             }`}
//           >
//             {/* Title */}
//             <h1
//               className="
//                 text-2xl
//                 sm:text-3xl
//                 md:text-4xl
//                 lg:text-5xl
//                 font-bold
//                 text-white
//                 mb-3 sm:mb-4
//                 leading-tight
//               "
//             >
//               {title}
//               {highlightTitle && (
//                 <span className="block text-white/90 mt-1">
//                   {highlightTitle}
//                 </span>
//               )}
//             </h1>

//             {/* Subtitle */}
//             {subtitle && (
//               <p
//                 className="
//                   text-sm
//                   sm:text-base
//                   md:text-lg
//                   text-white
//                   mb-5
//                   leading-relaxed
//                   max-w-2xl
//                 "
//               >
//                 {subtitle}
//               </p>
//             )}

//             {/* CTA */}
//             <div className="flex flex-wrap gap-4">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 animate-bounce">
//         <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoHeroSection;


import React from 'react';
import LazyVideo from '../ui/LazyVideo';
import { useScrollAnimation } from '../../utils/animations';

const VideoHeroSection = ({ 
  title, 
  highlightTitle, 
  subtitle, 
  videoSrc,
  posterSrc,
  children 
}) => {
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-[58vh]
        sm:min-h-[62vh]
        md:min-h-[65vh]
        lg:min-h-[70vh]
        flex items-center
        overflow-hidden
        pt-16
        sm:pt-20
        md:pt-0
      "
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <LazyVideo 
          src={videoSrc}
          poster={posterSrc}
          className="w-full h-full object-cover"
        />
        {/* lighter overlay for visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-gray-900/25 to-gray-900/20" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 px-4 sm:px-6 w-full">
        <div
          className={`
            max-w-3xl
            mx-auto
            text-center
            transition-all duration-700 ease-out
            ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Title */}
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-white
              leading-tight
              mb-3
            "
          >
            {title}
            {highlightTitle && (
              <span className="block text-white/90 mt-1">
                {highlightTitle}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className="
                text-sm
                sm:text-base
                md:text-lg
                text-gray-200
                max-w-2xl
                mx-auto
                mb-4
                sm:mb-5
              "
            >
              {subtitle}
            </p>
          )}

          {/* CTA Buttons - Centered and Responsive */}
          <div className="flex flex-row justify-center items-center flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {children}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSection;