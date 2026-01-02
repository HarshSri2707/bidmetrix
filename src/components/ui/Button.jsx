// import React from 'react';

// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   size = 'md', 
//   className = '', 
//   icon,
//   ...props 
// }) => {
//   const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
//   const variants = {
//     primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm hover:shadow-md',
//     secondary: 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
//     outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
//     ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
//   };
  
//   const sizes = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-6 py-3 text-base',
//     lg: 'px-8 py-4 text-lg',
//   };
  
//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...props}
//     >
//       {children}
//       {icon && <span className="ml-2">{icon}</span>}
//     </button>
//   );
// };

// export default Button;


import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-medium rounded-lg
    overflow-hidden
    transition-colors duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    will-change-transform
  `;

  const variants = {
    primary: `
      bg-indigo-600 text-white
      focus:ring-indigo-500
    `,
    secondary: `
      bg-white text-indigo-600
      border border-indigo-600
      focus:ring-indigo-500
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`
        group
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {/* SLIDING BACKGROUND (NO SCALE) */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-indigo-700 to-indigo-900
          transform -translate-x-full
          transition-transform duration-500 ease-out
          group-hover:translate-x-0
        "
      />

      {/* CONTENT */}
      <span
        className="
          relative z-10 flex items-center gap-2
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {children}
        {icon && <span>{icon}</span>}
      </span>
    </button>
  );
};

export default Button;
