import React from 'react';
import LazyImage from '../ui/LazyImage';
import { useScrollAnimation } from '../../utils/animations';

const HeroSection = ({ 
  title, 
  highlightTitle, 
  subtitle, 
  image, 
  align = 'left',
  size = 'default',
  showOverlay = true,
  children 
}) => {
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });

  const getSizeClasses = () => {
    switch(size) {
      case 'large':
        return 'h-screen min-h-[600px]';
      case 'medium':
        return 'h-[500px] sm:h-[550px] md:h-[600px]';
      case 'small':
        return 'h-[400px] sm:h-[450px] md:h-96';
      default:
        return 'h-[450px] sm:h-[500px] md:h-[550px] lg:h-96';
    }
  };

  const getAlignClasses = () => {
    switch(align) {
      case 'center':
        return 'text-center items-center justify-center';
      case 'right':
        return 'text-right items-end justify-end';
      default:
        return 'text-left items-start justify-start';
    }
  };

  return (
   <section className="relative h-96 md:h-[28rem] flex items-center overflow-hidden">
  {/* Image */}
  <div className="absolute inset-0 w-full h-full">
    <LazyImage 
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Overlay - darker on mobile for better text readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/70 md:from-gray-900/90 md:via-gray-900/70 md:to-gray-900/60"></div>
  
  {/* Content - centered on mobile, left-aligned on desktop */}
  <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
    <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
        {title}
        {highlightTitle && (
         <span className="block text-white/90 mt-2">
  {highlightTitle}
</span>

        )}
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
        {subtitle}
      </p>
    </div>
  </div>
</section>
  );
};

export default HeroSection;