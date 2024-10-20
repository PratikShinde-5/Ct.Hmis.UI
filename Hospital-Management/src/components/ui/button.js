import React from 'react';

export const Button = ({ children, className, variant = 'default', ...props }) => {
  const variantClasses = {
    default: 'bg-blue-500 text-white',
    outline: 'border border-blue-500 text-blue-500',
  };

  return (
    <button
      className={`px-4 py-2 rounded ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
