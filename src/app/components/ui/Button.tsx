import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
};

const colorStyles = {
  primary: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 focus:ring-pink-300',
  secondary: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 focus:ring-indigo-300',
  accent: 'bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 hover:from-green-500 hover:via-teal-500 hover:to-cyan-500 focus:ring-teal-300',
};


export default function Button({
  children,
  type = 'button',
  color = 'primary',
  className = '',
  disabled = false,
  href,
  onClick,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center px-6 py-3 border border-transparent 
                      text-base font-medium rounded-md text-white shadow-sm 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 
                      transition-colors duration-200 ease-in-out
                      ${colorStyles[color]} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
                      ${className}`;

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