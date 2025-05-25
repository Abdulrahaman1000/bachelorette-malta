import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline'; // ✅ Add variant
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
};

const colorStyles = {
  primary: {
    solid: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white focus:ring-pink-300',
    outline: 'border border-pink-500 text-pink-500 hover:bg-pink-50 focus:ring-pink-300',
  },
  secondary: {
    solid: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 text-white focus:ring-indigo-300',
    outline: 'border border-indigo-500 text-indigo-500 hover:bg-indigo-50 focus:ring-indigo-300',
  },
  accent: {
    solid: 'bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 hover:from-green-500 hover:via-teal-500 hover:to-cyan-500 text-white focus:ring-teal-300',
    outline: 'border border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-300',
  },
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  type = 'button',
  color = 'primary',
  size = 'md',
  variant = 'solid', // ✅ Default variant
  className = '',
  disabled = false,
  href,
  onClick,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center 
    font-medium rounded-md shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    transition-colors duration-200 ease-in-out
    ${sizeStyles[size]} 
    ${colorStyles[color][variant]}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''} 
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
