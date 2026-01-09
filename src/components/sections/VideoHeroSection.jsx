


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