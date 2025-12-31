import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'default' 
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={`
        bg-white rounded-xl shadow-sm border border-gray-100
        ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''} 
        transition-all duration-300
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;