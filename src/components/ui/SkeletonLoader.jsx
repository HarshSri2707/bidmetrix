import React from 'react';

// Page-level skeleton (Full page loading)
export const SkeletonPage = () => (
  <div className="min-h-screen bg-gray-50 animate-pulse">
    {/* Hero skeleton */}
    <div className="h-96 bg-gray-200"></div>
    
    {/* Content skeleton */}
    <div className="container-custom py-16">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Card skeleton
export const SkeletonCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/5"></div>
      </div>
    </div>
  </div>
);

// Hero skeleton
export const SkeletonHero = () => (
  <div className="w-full h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
);

// Text lines skeleton
export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-3 animate-pulse ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div 
        key={i} 
        className="h-4 bg-gray-200 rounded" 
        style={{ width: `${100 - (i * 10)}%` }}
      ></div>
    ))}
  </div>
);

// Image skeleton
export const SkeletonImage = ({ className = '', aspectRatio = 'auto' }) => (
  <div 
    className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg ${className}`}
    style={{ aspectRatio }}
  ></div>
);

// Blog card skeleton
export const SkeletonBlogCard = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="animate-pulse">
      {/* Image */}
      <div className="h-48 bg-gray-200"></div>
      {/* Content */}
      <div className="p-6">
        <div className="h-3 bg-gray-200 rounded w-20 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded w-full mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-24"></div>
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    </div>
  </div>
);

// Grid of cards skeleton
export const SkeletonGrid = ({ count = 3, columns = 3 }) => (
  <div className={`grid md:grid-cols-${columns} gap-8`}>
    {[...Array(count)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Section skeleton
export const SkeletonSection = () => (
  <div className="container-custom py-16 animate-pulse">
    <div className="text-center mb-12">
      <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
    </div>
    <SkeletonGrid count={3} columns={3} />
  </div>
);