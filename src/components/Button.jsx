// src/components/button.jsx
import React from 'react';

const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-400 text-black hover:bg-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
  warning: 'bg-yellow-400 text-black hover:bg-yellow-500',
};

const sizeStyles = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const Button = ({ variant = 'primary', size = 'md', disabled = false, children, ...props }) => {
  const base = 'rounded-md font-medium focus:outline-none transition duration-300';
  const variantClass = variantStyles[variant] || variantStyles.primary;
  const sizeClass = sizeStyles[size] || sizeStyles.md;
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${base} ${variantClass} ${sizeClass} ${disabledClass}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
