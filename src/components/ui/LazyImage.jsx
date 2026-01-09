// import React, { useState, useEffect, useRef } from 'react';

// const LazyImage = ({ 
//   src, 
//   alt, 
//   className = '', 
//   placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3C/svg%3E',
//   aspectRatio = 'auto'
// }) => {
//   const [loaded, setLoaded] = useState(false);
//   const [inView, setInView] = useState(false);
//   const imgRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { rootMargin: '100px' }
//     );

//     if (imgRef.current) {
//       observer.observe(imgRef.current);
//     }

//     return () => {
//       if (observer) {
//         observer.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={imgRef} 
//       className={`relative overflow-hidden ${className}`}
//       style={{ aspectRatio }}
//     >
//       {/* Skeleton placeholder */}
//       {!loaded && (
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
//       )}
      
//       {/* Actual image */}
//       {inView && (
//         <img
//           src={src}
//           alt={alt}
//           className={`w-full h-full object-cover transition-opacity duration-500 ${
//             loaded ? 'opacity-100' : 'opacity-0'
//           }`}
//           onLoad={() => setLoaded(true)}
//           loading="lazy"
//         />
//       )}
//     </div>
//   );
// };

// export default LazyImage;


import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "auto",
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-gray-200 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r 
          from-gray-200 via-gray-300 to-gray-200 animate-pulse">
        </div>
      )}

      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`
            w-full h-full object-cover
            transition-opacity duration-500 ease-out
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      )}
    </div>
  );
};

export default LazyImage;
