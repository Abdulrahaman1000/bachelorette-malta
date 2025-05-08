// ./ui/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...rest}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 text-black placeholder-gray-500 ${
          error ? 'border-red-500 focus:ring-red-300' : 'border-purple-500 focus:ring-purple-500'
        }`}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
