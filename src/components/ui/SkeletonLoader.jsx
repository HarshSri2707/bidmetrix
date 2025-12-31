import React from 'react';

export const SkeletonCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
  </div>
);

export const SkeletonHero = () => (
  <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg"></div>
);

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div 
        key={i} 
        className="h-4 bg-gray-200 rounded animate-pulse" 
        style={{ width: `${100 - (i * 10)}%` }}
      ></div>
    ))}
  </div>
);

export const SkeletonImage = ({ className = '' }) => (
  <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`}></div>
);

