import React, { useState, useEffect, useRef } from 'react';

const LazyVideo = ({ 
  src, 
  poster, 
  className = '',
  muted = true,
  loop = true,
  autoPlay = true 
}) => {
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={videoRef} className={className}>
      {/* Show poster image on mobile or before video loads */}
      {(isMobile || !inView) ? (
        <img 
          src={poster} 
          alt="Video poster" 
          className="w-full h-full object-cover" 
        />
      ) : (
        <video
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          poster={poster}
          className="w-full h-full object-cover"
          onLoadedData={(e) => {
            e.target.play().catch(err => console.log('Video autoplay failed:', err));
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LazyVideo;